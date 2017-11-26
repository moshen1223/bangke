<template>
<div class="receive-list">
    <div class="receive-type">
        <div class="active">
            <span>我收的快递</span>
            <i></i>
        </div>
        <div>
            <span>我发的快递</span>
            <i></i>
        </div>
    </div>
    <div class="update" v-show="updateShow">
        <span></span><br>
        <b>哇~是最新的</b>
    </div>
    <div class="status">
        <div class="select-type">已选："已完成状态"</div>
        <div class="select-btn">
            <b>状态：</b><span>未完成</span><span class="selected">已完成</span>
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
                    <h5>圣宝兰青春版美白补水套装精华液，寻找帮忙收快递的服务,寻找帮忙收快递的服务</h5>
                    <p>补充: 河南师范大学西校区中一楼后中通快递</p>
                    <div class="pay"><span>服务费 ￥ 3.00</span></div>
                    <div class="more">
                        <span></span>
                        <ol>
                            <li>&nbsp;确认完成</li>
                            <li>&nbsp;&nbsp;&nbsp;&nbsp;删除</li>
                        </ol>
                    </div>
                    <div class="time">
                        <span>刚刚</span>
                    </div>
                </div>
            </li>
            <li @click="selectItem(2)">
                <div class="left">
                    <div >
                        <!--<img src="">-->
                    </div>
                </div>
                <div class="right">
                    <h5>圣宝兰青春版美白补水套装精华液，寻找帮忙收快递的服务,寻找帮忙收快递的服务</h5>
                    <p>补充: 河南师范大学西校区中一楼后中通快递</p>
                    <div class="pay"><span>服务费 ￥ 3.00</span></div>
                    <div class="more">
                        <span></span>
                        <ol>
                            <li>&nbsp;确认完成</li>
                            <li>&nbsp;&nbsp;&nbsp;&nbsp;删除</li>
                        </ol>
                    </div>
                    <div class="time">
                        <span>刚刚</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="no-more">
        <div><span>暂无更多内容</span></div>
    </div>
    <router-view></router-view>
    <div class="mask" v-show="maskShow"></div>
</div>
</template>
<script>
    export default{
        data(){
            return {
                updateShow: false,
                maskShow: false
            }
        },
        computed: {
        },
        mounted(){
        },
        methods: {
            selectItem(id){
                this.$router.push({
                    path: `/receive-list/${id}`
                })
            }
        },
        components: {

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
        .select-type
            height: 20px
            line-height: 20px
            text-align: center
            font-size: 12px
            color: #87807f
            background: #fff
        .select-btn
            height: 40px
            line-height: 40px
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
                            display: none
                            width: 58px
                            border-radius: 4px
                            margin-top: 4px
                            background: #fff
                            text-align:center
                            li
                                height: 33px
                                line-height: 33px
                                padding: 0
                                width: 100%
                                font-size: 10px
                                color: #333
                                border-bottom: 1px solid #e5e5e5
                                &:last-child
                                    border-bottom: none
                    .time
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
        z-index: 100

</style>
