<template>
<div class="rule-container">
    <div class="title">
        <span class="active">收快递</span><span>发快递</span>
    </div>
    <div class="content-box">
        <h3>校园帮客</h3>
        <div class="disc">快递代取服务介绍及收费标准</div>
        <div class="content">
            <p>
                服务介绍：校园帮客快递代取服务是结合学生实际情况所推出快递送上门的服务，旨在为学生提供更灵活、更便捷的服务。也为高校一些困难学生提供勤工俭学和锻炼能力的机会。<br>
                收费标准：<br>
                &nbsp;&nbsp;&nbsp;&nbsp;标准件（0--2公斤）1元<br>
                &nbsp;&nbsp;&nbsp;&nbsp;中等件（2--5公斤）2元<br>
                &nbsp;&nbsp;&nbsp;&nbsp;大件(5公斤以上)   3元<br>
                凭良心选择快递大小，如有严重超标，双倍出费。<br>
                代取人员均有本校学生完成，保证信息安全。<br>
                代取快递如有破损，工作人员会及时与您联系。<br>
                如有其他问题请及时联系客服。</p>
        </div>
    </div>
    <div class="select-type">
        <router-link tag="div" to="/receive">我要收取快递</router-link>
    </div>
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
import storage from 'good-storage';
import API from 'api/api';
import {mapGetters} from 'vuex';

const querystring = require('querystring');

export default{
    data(){
        return {
            selectedPage: 0,
            payStandardList: []
        }
    },
    computed: {
        login_info(){
            return storage.session.get('login_info')
        }
    },
    mounted(){
        this.receivePayList();
    },
    methods: {
        // 选择当前页
        selectCurrentPage(page){
            this.selectedPage = page;
        },
        // 获取收费标准
        receivePayList(){
            this.$http({
                url: API.Interface.receivePayList(),
                method: 'get',
                headers: {
                    'timestamp':  API.timeStr,
                    'access_token': this.login_info.access_token
                }
            }).then((res) => {
                if(res.data.code == 200){
                    this.payStandardList = res.data.data
                }
            }).catch((error) => {
                console.log(error);
            })
        }
    }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.rule-container
    width: 100%
    background: #fff
    position: absolute
    top: 0
    bottom: 0
    letter-spacing: 1px
    .title
        height: 40px
        background: #fc5459
        line-height: 40px
        text-align: center
        width: 100%
        font-size: 0
        span
            display: inline-block
            width: 50%
            font-size: 13px
            color: #fff
            opacity: 0.5
        .active
            opacity: 1
    .content-box
        position: absolute
        top: 56px
        bottom: 102px
        left: 11px
        right: 11px
        border: 1px solid #e6e6e6
        border-radius: 2px
        padding: 11px 11px 0 11px
        overflow: scroll
        h3
            text-align: center
            font-size: 15px
            color: #333
            font-weight: bold
        .disc
            text-align: center
            font-size: 13px
            color: #87807f
            margin-top: 7px
            padding-bottom: 9px
            border-bottom: 1px solid #87807f
        .content
            margin-top: 14px
            p
                font-size: 12px
                color: #87807f
                line-height: 16px
    .select-type
        position: fixed
        bottom: 53px
        left: 11px
        right: 11px
        div
            height: 36px
            background: #fc5459
            line-height: 36px
            text-align: center
            font-size: 13px
            color: #fff

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
