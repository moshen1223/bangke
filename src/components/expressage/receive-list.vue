<template>
<div class="receive-list">
    <div class="receive-type">
        <div :class="{'active' : receiveType == 1}" @click="selectReceiveType(1)">
            <span>我收的快递</span>
            <b @click="showSlect(1)"><i></i></b>
        </div>
        <div :class="{'active' : receiveType == 2}" @click="selectReceiveType(2)">
            <span>我发的快递</span>
            <b @click="showSlect(2)"><i></i></b>
        </div>
    </div>
    <div class="update" v-show="updateShow">
        <span></span><br>
        <b>哇~是最新的</b>
    </div>
    <div class="status">
        <div class="select-type">状态:{{selectStateText}}</div>
        <div class="select-btn" v-show="maskShow">
            <div>
                <b>状态：</b>
                <span @click="selectStateMethod(0)"  :class="{'selected': selectState == 0}">全部</span>
                <span @click="selectStateMethod(1)"  :class="{'selected': selectState == 1}">已申请</span>
                <span @click="selectStateMethod(2)" :class="{'selected': selectState == 2}">已揽货</span>
                <span @click="selectStateMethod(3)"  :class="{'selected': selectState == 3}">配送中</span>
                <span @click="selectStateMethod(4)" :class="{'selected': selectState == 4}">已收到并付款</span>
                <span @click="selectStateMethod(5)"  :class="{'selected': selectState == 5}">已收款并完成</span>
                <span @click="selectStateMethod(6)" :class="{'selected': selectState == 6}">已退回</span>
            </div>
        </div>
    </div>
    <div class="list">
        <ul>
            <li @click="selectItem(item.id)" v-for="(item, index) in receiveList" :key="index">
                <div class="left">
                    <div >
                        <img :src="item.pictureUrl" v-if="item.pictureUrl">
                    </div>
                </div>
                <div class="right">
                    <h5>{{item.goodsList}}</h5>
                    <p>{{item.logistics}}</p>
                    <div class="pay"><span>{{item.chargesText}}</span></div>
                    <div class="more">
                        <span @click.stop="handleConfirm(index)"></span>
                        <ol :class="{'show' : confirmIndex == index}">
                            <li @click.stop="completeReceive(item.id)">&nbsp;确认完成</li>
                            <li>&nbsp;&nbsp;&nbsp;&nbsp;删除</li>
                        </ol>
                    </div>
                    <div class="time">
                        <span>{{item.createTime}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="no-more">
        <div><span>暂无更多内容</span></div>
    </div>
    <router-view class="view-position"></router-view>
    <div class="mask" @click="hideSelect" v-show="maskShow"></div>
</div>
</template>
<script>
import storage from 'good-storage';
import API from 'api/api';
import {mapGetters,mapMutations} from 'vuex';

const querystring = require('querystring');

export default{
    data(){
        return {
            updateShow: false,
            maskShow: false,
            receiveList: [],
            selectState: 0,
            receiveType: 1,
            page: 1,
            selectStateText: '全部',
            confirmIndex: -1
        }
    },
    computed: {
        login_info(){
            return storage.session.get('login_info')
        }
    },
    mounted(){
        this.myReceiveList(this.selectState, 1);
    },
    methods: {
        // 操作更多
        handleConfirm(index){
            this.confirmIndex = index;
        },
        // 完成操作
        completeReceive(id){
            this.$http({
                url: API.Interface.receiveSetReceivePaid(),
                method: 'PUT',
                data: querystring.stringify({
                    '' : id
                }),
                headers: {
                    'timestamp':  API.timeStr,
                    'access_token': this.login_info.access_token
                }
            }).then((res) => {
                if(res.data.code == 200){
                    console.log(res.data);
                    this.confirmIndex = '';
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        // 选择类型
        selectReceiveType(type){
            if(type == this.receiveType){
                return;
            }else{
                this.receiveType = type;
            }
        },
        // 选择状态
        selectStateMethod(state){
            this.selectState = state;
            this.maskShow = false;
            this.myReceiveList(this.selectState, 1);
            switch(this.selectState){
                case 0 :
                    this.selectStateText = '全部';
                    break;
                case 1 :
                    this.selectStateText = '已申请';
                    break;
                case 2 :
                    this.selectStateText = '已揽货';
                    break;
                case 3 :
                    this.selectStateText = '配送中';
                    break;
                case 4 :
                    this.selectStateText = '已收到并付款';
                    break;
                case 5 :
                    this.selectStateText = '已收款并完成';
                    break;
                case 6 :
                    this.selectStateText = '已退回';
                    break;
                default :
                    this.selectStateText = '全部';
                    return;
            }
        },
        // 选择列表类型
        showSlect(type){
            if(type == this.receiveType){
                this.maskShow = true;
            }else{
                this.receiveType = type;
            }
        },
        // mask 隐藏
        hideSelect(){
            if(this.receiveType == 1){
                this.myReceiveList(this.selectState, this.page)
            }
            this.maskShow = false;
        },
        // 选择查看详情
        selectItem(id){
            if(this.confirmIndex > -1){
                this.confirmIndex = -1;
                return
            }
            this.setReceiveId(id);
            this.$router.push({
                path: `/receive-list/${id}`
            });
        },
        // 获取我收的快递列表
        myReceiveList(state, page){
            this.$http({
                url: API.Interface.myReceiveList(state, page),
                method: 'get',
                headers: {
                    'timestamp':  API.timeStr,
                    'access_token': this.login_info.access_token
                }
            }).then((res) => {
                if(res.data.code == 200){
                    this.receiveList = res.data.data;
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        ...mapMutations({
           setReceiveId: 'SET_RECEIVEID'
        })
    },
    watch: {

    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.receive-list
    width: 100%
    background: #f1efed
    position: absolute
    top: 0
    bottom: 0
    overflow: scroll
    letter-spacing: 1px
    -webkit-box-sizing: border-box
    -moz-box-sizing: border-box
    -o-box-sizing: border-box
    box-sizing: border-box
    .receive-type
        height: 40px
        line-height: 40px
        text-align: center
        font-size: 0
        display: flex
        position: relative
        z-index: 100
        div
            flex: 1
            background: #fff
            span
                display: inline-block
                font-size: 13px
                color: #333
                vertical-align: middle
            b
                padding: 10px 10px 10px 5px
                i
                    display: inline-block
                    width: 7px
                    height: 5px
                    margin-left: 8px
                    background: url('./arrow.png') no-repeat
                    background-size: 7px 5px
                    vertical-align: middle
        .active
            background: #fc5558
            span
                color: #fff
            b
                padding: 10px 10px 10px 5px
                i
                    background: url('./arrow-white.png') no-repeat
                    background-size: 7px 5px
    .update
        height: 44px
        text-align: center
        font-size: 0
        span
            display: inline-block
            width: 14px
            height: 15px
            margin-top: 9px
            background: url('./update.png') no-repeat
            background-size: 14px 15px
        b
            display: inline-block
            font-size: 10px
            margin-top: 4px
            color: #87807f
    .status
        position: relative
        top: 0
        left: 0
        z-index: 100
        .select-type
            height: 20px
            line-height: 20px
            text-align: center
            font-size: 12px
            color: #87807f
            background: #fff
        .select-btn
            background: #f2eeed
            div
                line-height: 36px
                font-size: 0
                b
                    display: inline-block
                    font-size: 13px
                    color: #87807f
                    margin-left: 20px
                span
                    display: inline-block
                    height: 16px
                    padding: 0 8px
                    text-align: center
                    line-height: 16px
                    margin-left: 24px
                    font-size: 12px
                    border: 1px solid #87807f
                    border-radius: 10px
                    color: #87807f
                .selected
                    color: #fff
                    background: #fc5558
                    border: 1px solid #fc5558
    .list
        background: #fff
        ul
            li
                padding: 8px 20px
                -webkit-box-sizing: border-box
                -moz-box-sizing: border-box
                -o-box-sizing: border-box
                box-sizing: border-box
                border-bottom: 1px solid #e5e5e5
                display: flex
                font-size: 0
                .left
                    flex: 0 0 75px
                    div
                        width: 75px
                        height: 75px
                        background: #fc5558
                        img 
                            width: 100%
                            height: 100%
                .right
                    flex: 1
                    position: relative
                    padding: 2px 50px 0 16px
                    h5
                        font-size: 14px
                        color: #333
                        font-weight: bold
                        line-height: 18px
                        display: -webkit-box
                        overflow: hidden
                        text-overflow: ellipsis
                        -webkit-line-clamp: 2
                        -webkit-box-orient: vertical
                    p
                        font-size: 12px
                        line-height: 14px
                        color: #333
                        margin-top: 6px
                        width: 100%
                        text-overflow: ellipsis
                        overflow: hidden
                    .pay
                        margin-top: 8px
                        span
                            display: inline-block
                            padding: 6px 12px
                            font-size: 11px
                            color: #fff
                            background: #fc5558
                            border-radius: 4px
                    .more
                        position: absolute
                        top: 9px
                        right: 0
                        z-index: 102
                        text-align: right
                        span
                            display: inline-block
                            width: 18px
                            height: 5px
                            background: url('./more.png') no-repeat
                            background-size: 18px 5px
                        ol
                            width: 58px
                            display: none
                            border-radius: 4px
                            margin-top: 4px
                            background: rgba(0, 0, 0, 0.5)
                            text-align:center
                            li
                                height: 33px
                                line-height: 33px
                                padding: 0
                                width: 100%
                                font-size: 10px
                                color: #fff
                                border-bottom: 1px solid #e5e5e5
                                &:last-child
                                    border-bottom: none
                        .show
                            display: block
                    .time
                        position: absolute
                        bottom: 2px
                        right: 0
                        span
                            font-size: 12px
                            color: #87807f
    .no-more
        padding: 0 10px
        margin-top: 30px
        div
            border-top: 1px solid #87807f
            position: relative
            span
                position: absolute
                background: #f1eeed
                font-size: 12px
                color: #87807f    
                padding: 0 14px
                left: 50%
                top: -7px
                -webkit-transform: translateX(-50%)
                -moz-transform: translateX(-50%)
                -o-transform: translateX(-50%)
                transform: translateX(-50%)
    
    .view-position
        position: absolute
        top: 0
        z-index: 200
    .mask
        position: absolute
        top: 0 
        bottom: 0
        left: 0
        right: 0
        background: rgba(0,0,0,0.5)
        z-index: 10
</style>
