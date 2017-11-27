<template>
<div class="my-list">
    <div class="help-type">
        <div class="active">
            <span>本校互助</span>
            <i></i>
        </div>
        <div>
            <span>全国互助</span>
            <i></i>
        </div>
    </div>
    <div class="status">
        <div class="select-type">已选："已完成状态" "奖励类型"</div>
        <div class="select-btn">
            <div><b>状态：</b><span>全部</span><span>未完成</span><span class="selected">已完成</span></div>
            <div><b>类型：</b><span>全部</span><span>奖励</span><span class="selected">赚取</span></div>
        </div>
    </div>
    <div class="list">
        <ul>
            <li @click="selectItem(1)">
                <div class="left">
                    <div >
                        <!--<img src="">-->
                    </div>
                </div>
                <div class="right">
                    <h5>交通银行信用卡搞活动了，额度2万起</h5>
                    <p>奖励内容: 充电宝</p>
                    <div class="pay"><span>推广费 ￥ 10.00</span></div>
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
                    <h5>交通银行信用卡搞活动了，额度2万起</h5>
                    <p>奖励内容: 拉杆箱一个</p>
                    <div class="pay"><span>推广费 ￥ 15.00</span></div>
                    <div class="participation">
                        <span>参与人数 189</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="no-more">
        <div><span>暂无更多内容</span></div>
    </div>
    <div class="space"></div>
    <router-link tag="div"  class="commit" to="/publish-help">
        我要提问
    </router-link>
    <div class="mask" v-show="maskShow"></div>
</div>
</template>
<script>
import storage from 'good-storage';
<<<<<<< HEAD
import API from 'api/api';
const querystring = require('querystring');
import {mapGetters} from 'vuex';

export default{
    data(){
        return {
            maskShow: false
        }
    },
    computed: {
        login_info(){
            return storage.session.get('login_info')
        }
    },
    mounted(){
        this.getmyschoolMutualList(0,0,1)
    },
    methods: {
        selectItem(id){
            alert(1)
            this.$router.push({
                path: `/help-list/${id}`
            })
        },
        // 获取列表
        getmyschoolMutualList(state,type,page){
            this.$http({
                url: API.Interface.myschoolMutualList(state,type,page),
                method: 'get',
                headers: {
                    'timestamp':  API.timeStr,
                    'access_token': this.login_info.access_token
                }
            }).then((res) => {
                if(res.data.code == 200){
                    console.log(res.data.data)
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    },
=======
import Bangke from 'api/api';
export default{
    data(){
        return {
            maskShow: false
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
        selectItem(id){
            this.$router.push({
                path: `/help-list/${id}`
            })
        },
        // 获取本校互助列表  
        getMySchoolMutualList(state,type,page){
            this.$http({
                url: API.Interface.myschoolMutualList(state,type,page),
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
        // 获取全部互助列表
        getAllschoolMutualList(state,type,page){
            this.$http({
                url: API.Interface.allschoolMutualList(state,type,page),
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
>>>>>>> 7513f3c37cf6bd7191029ced8075a0f12e8e62bd
    components: {

    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.my-list
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
        div
            flex: 1
            background: #fff
            span
                display: inline-block
                font-size: 13px
                color: #333
                vertical-align: middle
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
            i
                background: url('./arrow-white.png') no-repeat
                background-size: 7px 5px
    .status
        .select-type
            height: 20px
            line-height: 20px
            text-align: center
            font-size: 12px
            color: #87807f
            background: #fff
        .select-btn
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
    .space
        height: 54px
    .commit
        width: 100%
        height: 49px
        font-size: 18px
        color: #fff
        text-align: center
        line-height: 49px
        background: #fc5459
        position: fixed
        left: 0
        bottom: 0
    .mask
        position: absolute
        top: 0 
        bottom: 0
        left: 0
        right: 0
        background: rgba(0,0,0,0.5)
        z-index: 100

</style>
