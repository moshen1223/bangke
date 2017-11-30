<template>
<div class="help-detail">
    <div class="seek-content">
        <div class="seek-user">
            <div class="user-head">
                <div>
                    <img v-if="questionDetail.userHeadUrl" :src="questionDetail.userHeadUrl">
                </div>
            </div>
            <div class="user-info">
                <h5 v-text="questionDetail.userName"></h5>
                <div><span>{{questionDetail.createTime}}</span><b>{{questionDetail.userSchoolName}}</b></div>
            </div>
        </div>
        <p class="seek-disc" v-text="questionDetail.title">
        </p>
        <div class="award">
            <img v-for="(item, index) in questionDetail.pictureList" :key="index" :src="item">
        </div>
        <div class="issue">
            <h4 v-text="questionDetail.content"></h4>
            <p v-text="questionDetail.remark"></p>
        </div>
    </div>
    <h3 class="answer-title">精彩回答</h3>
    <div class="answer-list">
        <ul>
            <li v-for="(item, index) in answerList" :key="index">
                <div class="replay-header">
                    <div>
                        <img v-if="item.userHeadUrl" :src="item.userHeadUrl"/>
                    </div>
                </div>
                <div class="replay-content">
                    <h5>{{item.userName}}</h5>
                    <p v-text="item.content"></p>
                    <div class="replay-status">
                        <i :class="{'accepted': item.isEnabled}" @click="setBestAnswer(item.id, item.mutualId)"></i><span>{{item.createTime}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import storage from 'good-storage';
import API from 'api/api';
const querystring = require('querystring');
import {mapGetters} from 'vuex';
export default{
    data(){
        return {
            answer: '',
            questionDetail:{}, 
            page: 1,
            answerList: []
        }
    },
    computed: {
        login_info(){
            return storage.session.get('login_info')
        },
        ...mapGetters(['mutualId'])
    },
    mounted(){
        this.getMutualDetail(this.mutualId);
        this.getMutualAnswerList(this.mutualId, this.page)
    },
    methods: {
        // 获取互助详情
        getMutualDetail(id){
            this.$http({
                url: API.Interface.getMutualDetail(id),
                method: 'get',
                headers: {
                    'timestamp':  API.timeStr,
                    'access_token': this.login_info.access_token
                }
            }).then((res) => {
                if(res.data.code == 200){
                    this.questionDetail = res.data.data
                }
            }).catch((error) => {
                console.log(error);
            })
        },
        // 获取互助回答列表
        getMutualAnswerList(id, page){
            this.$http({
                url: API.Interface.getMutualAnswerList(id, page),
                method: 'get',
                headers: {
                    'timestamp':  API.timeStr,
                    'access_token': this.login_info.access_token
                }
            }).then((res) => {
                if(res.data.code == 200){
                    this.answerList = res.data.data;
                }
            }).catch((error) => {
                console.log(error);
            })
        },
        // 设置最佳答案
        setBestAnswer(id, mutualId){
            this.setMutualBestAnswer(id, mutualId)
        },
        setMutualBestAnswer(id, mutualId){
            this.$http({
                url: API.Interface.setMutualBestAnswer(),
                method: 'PUT',
                data: querystring.stringify({
                    'mutualId': mutualId,
                    'id': id
                }),
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
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.help-detail
    width: 100%
    height: 100%
    background: #f1efed 
    overflow: scroll
    letter-spacing: 1px
    padding-top: 8px
    .seek-content
        padding: 7px 11px
        background: #fff
        .seek-user
            display: flex
            .user-head
                flex: 0 0 32px
                div
                    width: 32px
                    height: 32px
                    border-radius: 2px
                    background: #fc5459
                    overflow: hidden
                    img 
                        width: 100%
                        height: auto
            .user-info
                padding-left: 8px
                -webkit-box-sizing: border-box
                -moz-box-sizing: border-box
                -o-box-sizing: border-box
                box-sizing: border-box
                flex: 1
                h5
                    font-size: 14px
                    color: #87807f
                    font-weight: bold
                    margin-top: 2px
                div
                    font-size: 12px
                    color: #87807f
                    margin-top: 4px
        .seek-disc
            margin-top: 6px
            line-height: 18px
            font-size: 13px
            color: #fc5459
            font-weight: bold
        .award
            width: 100%
            margin-top: 6px
            overflow: hidden
            display: flex
            img
                flex: 1
                width: 100%
                height: 100%
        .issue
            background: #f5f5f5
            margin-top: -1px
            padding: 12px 14px 10px 14px
            -webkit-box-sizing: border-box
            -moz-box-sizing: border-box
            -o-box-sizing: border-box
            box-sizing: border-box
            h4
                font-size: 14px 
                color: #333
                font-weight: bold
            p
                font-size: 12px
                color: #87807f
                line-height: 20px
                margin-top: 5px
    .answer-title
        height: 30px
        padding-left: 11px
        font-size: 14px
        color: #87807f
        line-height: 30px
    .answer-list
        padding: 0 11px 48px 11px
        background: #fff
        ul
            li
                display: flex
                padding-top: 14px
                .replay-header
                    flex: 0 0 32px
                    div
                        width: 32px
                        height: 32px
                        border-radius: 2px
                        overflow: hidden
                        background: #f90
                        img 
                            width: 100%
                            height: 100%
                .replay-content
                    flex: 1s
                    position: relative
                    padding: 1px 12px 12px 9px
                    -webkit-box-sizing: border-box
                    -moz-box-sizing: border-box
                    -o-box-sizing: border-box
                    box-sizing: border-box
                    border-bottom: 1px solid #d2d2d2
                    h5
                        font-size: 14px
                        color: #333
                        font-weight: bold
                    p
                        font-size: 12px
                        color: #333
                        line-height: 18px
                        margin-top: 5px
                    .replay-status
                        margin-top: 8px
                        i
                            display: inline-block
                            vertical-align: middle
                            width: 56px
                            height: 12px
                            background: url('./no-accept-text.png') no-repeat
                            background-size: 56px 12px
                        span
                            font-size: 10px
                            color: #87807f
                            margin-left: 25px
                            display: inline-block
                            vertical-align: middle 
                        .accepted
                            width: 36px
                            height: 12px
                            background: url('./accept-text.png') no-repeat
                            background-size: 36px 12px
    .submit
        display: flex
        background: #fff
        position: fixed
        bottom: 0
        width: 100%
        padding: 8px 11px
        border-top: 1px solid #d2d2d2
        -webkit-box-sizing: border-box
        -moz-box-sizing: border-box
        -o-box-sizing: border-box
        box-sizing: border-box
        .left
            flex: 1
            input
                outline:none
                border-radius: 2px
                background: #eee
                font-size: 12px
                color: #87807f
                padding-left: 11px
                width: 100%
                height: 32px
                border-top: 1px solid #d2d2d2
                -webkit-box-sizing: border-box
                -moz-box-sizing: border-box
                -o-box-sizing: border-box
                box-sizing: border-box
</style>
