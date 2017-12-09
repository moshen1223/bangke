<template>
    <div class="receive-detail">
        <div class="header">
            <span>状态：</span><b>正在寻找接单人中</b><strong>剩余 20:53</strong>
        </div>
        <div class="content">
            <div class="goods">
                <div class="pic">
                    <div><img :src="receiveDetail.pictureUrl" v-if="receiveDetail.pictureUrl"></div>
                </div>
                <div class="detail">
                    <div class="disc">{{receiveDetail.goodsList}}</div>
                    <div class="pay"><span>{{receiveDetail.chargesText}}</span></div>
                    <div class="time">
                        <span>{{receiveDetail.createTime}}</span>
                    </div>
                </div>
            </div>
            <div class="receive-msg">
                <ul>
                    <li>
                        <div class="left">
                            <h5>收/取</h5>
                            <p>快递地址</p>
                        </div>
                        <div class="right">
                            <h6>取: 在河师大南门口中通快递</h6>
                            <p>收: 河师大东1楼421宿舍 王二</p>
                        </div>
                    </li>
                    <li>
                        <div class="left">
                            <h5>商品</h5>
                            <p>清单列表</p>
                        </div>
                        <div class="right">
                            <p class="single">一盒化妆品(洗面奶)</p>
                        </div>
                    </li>
                    <li>
                        <div class="left">
                            <h5>快递公司</h5>
                            <p>单号信息</p>
                        </div>
                        <div class="right">
                            <h6>中通快递</h6>
                            <p>单号:164614641616</p>
                        </div>
                    </li>
                    <li>
                        <div class="left">
                            <h5>费用</h5>
                            <p>服务费用</p>
                        </div>
                        <div class="right">
                            <p class="single">费用￥3.00</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="process-msg">
                <h2>流程信息</h2>
                <ul>
                    <li>
                        <div class="left">
                            下单时间：
                        </div>
                        <div class="right">
                            已发出[11:48]
                        </div>
                    </li>
                    <li>
                        <div class="left">
                            快件内容确认：
                        </div>
                        <div class="right">
                            确认无误[11:55]
                        </div>
                    </li>
                    <li>
                        <div class="left">
                            取件时间：
                        </div>
                        <div class="right">
                            快件已被取走[11:58]
                        </div>
                    </li>
                    <li>
                        <div class="left">
                            取件人信息：
                        </div>
                        <div class="right">
                            王五 185****6465
                        </div>
                    </li>
                    <li>
                        <div class="left">
                            快递单号：
                        </div>
                        <div class="right">
                            韵达快递
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import storage from 'good-storage';
import API from 'api/api';
import {mapGetters} from 'vuex';

const querystring = require('querystring');

export default{
    data(){
        return {
            receiveDetail: {},
            recordList: []
        }
    },
    computed: {
        login_info(){
            return storage.session.get('login_info')
        },
        ...mapGetters(['receiveId'])
    },
    mounted(){
        this.getReceiveDetail();
    },
    methods: {
        // 获取我收的快递列表
        getReceiveDetail(){
            this.$http({
                url: API.Interface.receiveDetail(this.receiveId),
                method: 'get',
                headers: {
                    'timestamp':  API.timeStr,
                    'access_token': this.login_info.access_token
                }
            }).then((res) => {
                if(res.data.code == 200){
                    this.receiveDetail = res.data.data;
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        // 获取配送列表
        getReceiveRecordList(){
            this.$http({
                url: API.Interface.receiveRecordList(),
                method: 'PUT',
                data: querystring.stringify({
                    '': this.receiveId
                })
            }).then((res) => {
                if(res.data.code == 200){
                    this.recordList = res.data.data;
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    watch: {

    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.receive-detail
    position: absolute
    top: 0
    left: 0
    bottom: 0
    right: 0
    background: #f1efed
    letter-spacing: 1px
    z-index: 111
    overflow: scroll
    .header
        height: 28px
        line-height: 28px
        font-size: 0
        text-align: center
        background: #fc5558
        span
            display: inline-block
            vertical-align: middle
            font-size: 12px
            color: #fff
        b
            display: inline-block
            max-width: 45%
            font-size: 12px
            vertical-align: middle
            color: #fff
            overflow: hidden
            text-overflow: ellipsis
            white-space: nowrap
        strong
            display: inline-block
            font-size: 12px
            vertical-align: middle
            color: #fff
    .content
        padding:  12px 11px
        -webkit-box-sizing: border-box
        -moz-box-sizing: border-box
        -o-box-sizing: border-box
        box-sizing: border-box
        .goods
            width: 100%
            background: #fff
            border-radius: 10px
            display: flex
            padding: 8px
            -webkit-box-sizing: border-box
            -moz-box-sizing: border-box
            -o-box-sizing: border-box
            box-sizing: border-box
            .pic
                flex: 0 0 75px
                div
                    width: 75px
                    height: 90px
                    background: #fc5558
                    img 
                        width: 100%
                        height: 100%
            .detail
                flex: 1
                position: relative
                .disc
                    margin-left: 16px
                    margin-top: 9px
                    line-height: 19px
                    font-size: 13px
                    color: #333
                    font-weight: bold
                .pay
                    margin-top: 13px
                    margin-left: 16px
                    span
                        display: inline-block
                        padding: 6px 12px
                        font-size: 11px
                        color: #fff
                        background: #fc5558
                        border-radius: 4px
                .time
                    position: absolute
                    bottom: 4px
                    right: 0
                    span
                        font-size: 12px
                        color: #87807f
        .receive-msg
            width: 100%
            border-radius: 10px
            background: #fff
            margin-top: 12px
            ul
                li
                    display: flex
                    height: 46px
                    .left
                        flex: 0 0 100px
                        text-align: center
                        font-size:0
                        h5
                            font-size: 12px
                            font-weight: bold 
                            color: #333
                            margin-top: 8px
                        p 
                            font-size: 11px
                            color: #87807f  
                            font-weight: normal
                            margin-top: 6px                        
                    .right
                        flex: 1
                        text-align: left
                        font-size:0
                        h6
                            font-size: 11px 
                            color: #333
                            margin-top: 8px
                            text-overflow:ellipsis
                            overflow: hidden
                            white-space: nowrap
                        p 
                            font-size: 11px
                            color: #333  
                            margin-top: 6px
                            text-overflow:ellipsis
                            overflow: hidden
                            white-space: nowrap
                        .single
                            line-height: 46px
                            margin-top: 0
        .process-msg
            width: 100%
            border-radius: 10px
            background: #fff
            margin-top: 12px
            h2
                border-bottom: 1px solid #e5e5e5
                font-size: 12px
                font-weight: bold
                color: #333
                padding-left: 8px
                height: 35px
                line-height:35px 
            ul
                li
                    display: flex
                    height: 42px
                    line-height: 42px
                    .left
                        flex: 0 0 110px
                        font-size: 12px
                        font-weight: bold
                        color: #87807f
                        padding-left: 9px
                        -webkit-box-sizing: border-box
                        -moz-box-sizing: border-box
                        -o-box-sizing: border-box
                        box-sizing: border-box
                    .right
                        flex: 1
                        font-size: 11px
                        color: #87807f
</style>