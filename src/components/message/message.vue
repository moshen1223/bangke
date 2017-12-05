<template>
<div class="message-list">
    <div class="list">
        <ul>
            <li v-for="(item, index) in messageList" :key="index">
                <div class="left">
                    <div >
                        <img :src="item.userHeadUrl" v-if="item.userHeadUrl">
                    </div>
                </div>
                <div class="right">
                    <h5>{{item.title}}</h5>
                    <p>{{item.content}}</p>
                    <div class="time">
                        <span>{{item.createTime}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <router-view class="view-position"></router-view>
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
            messageList: []
        }
    },
    computed: {
        login_info(){
            return storage.session.get('login_info')
        }
    },
    mounted(){
        this.getMessageList();
    },
    methods: {
        // 获取我收的快递列表
        getMessageList(){
            this.$http({
                url: API.Interface.getunreadList(),
                method: 'get',
                headers: {
                    'timestamp':  API.timeStr,
                    'access_token': this.login_info.access_token
                }
            }).then((res) => {
                if(res.data.code == 200){
                    this.messageList = res.data.data;
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
.message-list
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
                    .time
                        position: absolute
                        bottom: 4px
                        right: 0
                        span
                            font-size: 12px
                            color: #87807f
    .view-position
        position: absolute
        top: 0
        z-index: 200
</style>
