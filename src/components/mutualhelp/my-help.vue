<template>
<div class="help-list">
    <div class="help-type">
        <div :class="{'active' : helpType == 1}" @click="selectHelpRange(1)">
            <span>我发表的互助</span>
            <b @click="showSlect"><i></i></b>
        </div>
        <div :class="{'active' : helpType == 2}" @click="selectHelpRange(2)">
            <span>我参与的互助</span>
            <b @click="showSlect"><i></i></b>
        </div>
    </div>
    <div class="status">
        <div class="select-type">状态:{{selectState == 0 ? '全部' : selectState == 1 ? '未完成' : '已完成'}}&nbsp;&nbsp;&nbsp;&nbsp;奖励:{{selectType == 0 ? '全部' : selectType == 1 ? '奖励' : '赚取'}}</div>
        <div class="select-btn" v-show="maskShow">
            <div><b>状态：</b><span @click="selectStateMethod(0)"  :class="{'selected': selectState == 0}">全部</span><span @click="selectStateMethod(1)"  :class="{'selected': selectState == 1}">未完成</span><span @click="selectStateMethod(2)" :class="{'selected': selectState == 2}">已完成</span></div>
            <div><b>类型：</b><span @click="selectTypeMethod(0)"   :class="{'selected': selectType == 0}">全部</span><span @click="selectTypeMethod(1)"  :class="{'selected': selectType == 1}">奖励</span><span @click="selectTypeMethod(2)"  :class="{'selected': selectType == 2}">赚取</span></div>
        </div>
    </div>
    <div class="list">
        <ul>
            <li>
                <div class="left">
                    <div >
                        <!--<img src="">-->
                    </div>
                </div>
                <div class="right">
                    <h5>交通银行信用卡搞活动了，额度2万起，免年费了</h5>
                    <p>奖励内容: 拉杆箱一个</p>
                    <div class="pay"><span>推广费 ￥ 5.00</span></div>
                    <div class="participation">
                        <span>参与人数 188</span>
                    </div>
                </div>
            </li>
            <li>
                <div class="left">
                    <div >
                        <!--<img src="">-->
                    </div>
                </div>
                <div class="right">
                    <h5>交通银行信用卡搞活动了，额度2万起，免年费了</h5>
                    <p>奖励内容: 拉杆箱一个</p>
                    <div class="pay"><span>推广费 ￥ 5.00</span></div>
                    <div class="participation">
                        <span>参与人数 188</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="no-more">
        <div><span>暂无更多内容</span></div>
    </div>
    <div class="mask" @click="hideSelect" v-show="maskShow"></div>
</div>
</template>
<script>
import storage from 'good-storage';
import Bangke from 'api/api';

export default{
    data(){
        return {
            maskShow: false,
            helpList: [],
            selectType: 0,
            selectState: 0,
            helpType: 1,
            page: 1
        }
    },
    computed: {
        login_info(){
            return storage.session.get('login_info')
        }
    },
    mounted(){
    },
    methods: {
        // 选择互助范围
        selectHelpRange(type){
            this.helpType = type;
            this.helpList = [];
            this.selectType = 0;
            this.selectState = 0;
        },
        // 选择状态
        selectStateMethod(state){
            this.selectState = state;
        },
        // 选择类型
        selectTypeMethod(type){
            this.selectType = type;
        },
        // 选择列表类型
        showSlect(){
            this.maskShow = true;
        },
        // mask 隐藏
        hideSelect(){
            this.maskShow = false;
        },
        // 获取我发布的互助列表  
        getMyPublishMutualList(state,type,page){
            this.$http({
                url: API.Interface.getMyPublishMutualList(state,type,page),
                method: 'get',
                headers: {
                    'timestamp':  API.timeStr,
                    'access_token': this.login_info.access_token
                }
            }).then((res) => {
                if(res.data.code == 200){

                }
            }).catch((error) => {
                console.log(error);
            })
        },
        // 获取我参与的互助列表  
        getMyparticipateMutualList(state,type,page){
            this.$http({
                url: API.Interface.getMyparticipateMutualList(state,type,page),
                method: 'get',
                headers: {
                    'timestamp':  API.timeStr,
                    'access_token': this.login_info.access_token
                }
            }).then((res) => {
                if(res.data.code == 200){

                }
            }).catch((error) => {
                console.log(error);
            })
        }
    },
    components: {

    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.help-list
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
    .help-type
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
                height: 36px
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
                    width: 56px
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
        ul
            li
                padding: 8px 20px
                background: #fff
                margin-bottom: 5px
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
                    .participation
                        position: absolute
                        bottom: 4px
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
    .mask
        position: absolute
        top: 0 
        bottom: 0
        left: 0
        right: 0
        background: rgba(0,0,0,0.5)
        z-index: 10

</style>
