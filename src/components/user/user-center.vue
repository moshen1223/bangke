<template>
    <div class="user-container">
        <div class="bg-img">
            <img src="./bg.png">
        </div>
        <div class="head">
            <div class="pic"><img :src="userInfo.headPictureurl"></div>
            <div class="name">
                <span>{{userInfo.name}}</span>
            </div>
        </div>
        <div class="account">
            <div class="money"><span>￥{{userInfo.balance}}</span><i></i><b>提现</b></div>
            <div class="detail">
                <div>
                    <b>0</b><br>
                    <span>上月收入</span>
                </div>
                <div>
                    <b>0.8</b><br>
                    <span>本月收入</span>
                </div>
                <div>
                    <b>0.3</b><br>
                    <span>本月提现</span>
                </div>
            </div>
        </div>
        <div class="user-opa">
            <ul class="content">
                <router-link tag="li" to="/my-help">
                    <img src="./help.png"><span>我参与的互助</span><i class="arrow"></i>
                </router-link>
                <router-link tag="li" to="/receive-list">
                    <img src="./send.png"><span>我收发的快递</span><i class="arrow"></i>
                </router-link>
                <router-link tag="li" to="/address-manage">
                    <img src="./address.png"><span>收货地址管理</span><i class="arrow"></i>
                </router-link>
                <li>
                    <img src="./msg.png"><span>消息</span><i class="arrow"></i>
                </li>
                <router-link tag="li" to="/addUserInfo">
                    <img src="./set.png"><span>设置</span><i class="arrow"></i>
                </router-link>
            </ul>
        </div>
        <div class="space"></div>
        <div class="footer">
            <router-link tag="div" class="home" to="/home">
                <div @click="selectCurrentPage(1)">
                <i :class="{'actived': selectedPage == 1}"></i>
                </div>
            </router-link>
            <router-link tag="div" class="my" to="/user">
                <div @click="selectCurrentPage(2)">
                <i :class="{'actived': selectedPage == 2}"></i>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default{
    data(){
        return{
            selectedPage: 2
        }
    },
    computed:{
        ...mapGetters([
            'userInfo'
        ])
    },
    methods:{
        // 选择当前页
        selectCurrentPage(page){
            this.selectedPage = page;
        },
    }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.user-container
    position: relative
    .bg-img
        img
            width: 100%
            height: auto
    .head
        text-align: center
        .pic
            display: inline-block
            width: 90px
            height: 90px
            border: 1px solid #fff
            margin-top: -40px
            overfow: hidden
            img
                width: 100%
                height: 100%
        .name
            text-align: center
            margin-top: 11px
            span
                font-size: 13px
                color: #87808f
                display: inline-block
                max-width: 70%
                text-overflow: ellipsis
                overflow: hidden
                white-space: nowrap
    .account
        margin-top: 12px
        padding-left: 15px
        padding-right: 15px  
        .money 
            text-align: center 
            border-bottom: 1px solid #e9eceb
            font-size: 0
            padding-bottom: 12px
            span
                font-size: 15px
                font-weight: bold
                color: #fc5459
                vertical-align: top
            i
                display: inline-block
                height: 15px
                border-right: 1px solid #e9eceb
                margin-left: 21px
                margin-right: 14px
                vertical-align: top
            b
                font-size: 12px
                color: #fc5459
                border: 1px solid #fc5459
                padding: 3px 18px
        .detail
            display: flex
            margin-top: 11px
            padding-bottom: 11px
            div
                flex: 1
                text-align: center
                b
                    font-size: 13px
                    color: #333
                    font-weight: bold
                span
                    font-size: 13px
                    color: #87807f
                    display: inline-block
                    margin-top: 8px
    .user-opa
        background: #f1efed
        padding: 12px 16px;
        .content
            background: #fff
            border-radius: 4px
            li
                height: 48px
                line-height: 48px
                position: relative
                border-bottom: 1px solid #e9eceb
                img
                    width: 28px
                    height: 28px
                    margin-left: 16px
                    vertical-align: middle
                span
                    font-size: 13px
                    color: #333
                    margin-left: 16px
                i
                    position: absolute
                    right: 21px
                    top: 50%
                    margin-top: -5px
                    width: 5px
                    height: 10px
                    background: url(./arrow.png) no-repeat
                    background-size: 5px 10px
            &:last-child
                border-bottom: none
    .space
        height: 49px
    .footer
        height: 49px
        width: 100%
        position: fixed
        z-index: 99
        left: 0
        bottom: 0
        background: #fff
        border-top: 1px solid #d4d7da
        display: flex
        .home
            flex: 1
            text-align: center
            i
                display: inline-block
                margin-top: 6px
                width: 25px
                height: 36px
                background: url(./home.png) no-repeat
                background-size: 25px 36px
            .actived
                background: url(./home-selected.png) no-repeat
                background-size: 25px 36px
        .my
            flex: 1
            text-align: center
            i
                display: inline-block
                margin-top: 7px
                width: 23px
                height: 35px
                background: url(./my.png) no-repeat
                background-size: 23px 35px
            .actived
                background: url(./my-selected.png) no-repeat
                background-size: 23px 35px
</style>