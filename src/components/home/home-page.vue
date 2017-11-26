<template>
<div class="home-container" ref="container">
    <keep-alive>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
                <img :src="item.pictureUrl" />
            </mt-swipe-item>
        </mt-swipe>
    </keep-alive>
    <div class="nav">
        <h4><i></i><span>生活服务</span></h4>
        <div class="nav-item">
            <div class="item-left">
                <router-link tag="div" to="/help-list">
                    <div class="text">
                        <h6>校园互助</h6>
                        <p>提帮助，找帮助</p>
                    </div>
                    <div class="pic">
                        <img src="./plan.png">
                    </div>
                </router-link>
            </div>
            <div class="item-right">
                <router-link tag="div" to="/rule">
                    <div class="text">
                        <h6>取送快递</h6>
                        <p>速度快，价格低</p>
                    </div>
                    <div class="pic">
                        <img src="./expressage.png">
                    </div>
                </router-link>
            </div>
        </div>
        <div class="nav-item">
            <div class="item-left">
                <div class="text">
                    <h6>旅游</h6>
                    <p>出去玩，来找我</p>
                </div>
                <div class="pic">
                    <img src="./travel.png">
                </div>
            </div>
            <div class="item-right">
                <div class="text">
                    <h6>兼职</h6>
                    <p>找工作，来找我</p>
                </div>
                <div class="pic">
                    <img src="./job.png">
                </div>
            </div>
        </div>
    </div>
    <div class="more">
        <div><span>下有胸猛老湿</span></div>
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
    import Bangke from 'api/api';
    export default{
        data(){
            return {
                bannerList: [],
                selectedPage: 1
            }
        },
        computed: {
            login_info(){
                return storage.session.get('login_info')
            }
        },
        mounted(){
            setTimeout(()=>{
                if(this.login_info){
                    this.getBanner();
                }
            }, 0)
        },
        methods: {
            setHeight(){
                if(!this.$refs.container.children[0].style.height){
                    this.$refs.container.children[0].style.height = parseInt((this.$refs.container.children[0].children[0].children[0].children[0].height)/2) + 'px';
                }
            },
            getBanner(){
                this.$http({
                    url: Bangke.Interface.getBannerPic('INDEXHEAD001'),
                    method: 'get',
                    headers: {
                        'timestamp':  Bangke.timeStr,
                        'access_token': this.login_info.access_token
                    }
                }).then((res) => {
                        if(res.data.code == 200 && res.data.message == "获取相应位置轮播图列表成功"){
                            this.bannerList = res.data.data;
                            setTimeout(()=>{
                                this.$nextTick(()=>{
                                    this.setHeight();
                                })
                            },20)
                        }
                    }).catch((error) => {
                        console.log(error);
                    })
            },
            // 选择当前页
            selectCurrentPage(page){
            this.selectedPage = page;
            },
        },
        components: {

        }
    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.home-container
    width: 100%
    background: #f1eeed
    position: absolute
    top: 0
    bottom: 0
    .mint-swipe
        width: 100%
        .mint-swipe-items-wrap
            img
                width: 100%
                height: auto
        .mint-swipe-indicators
            .mint-swipe-indicator
                background: #d4d7da
    .nav
        margin-top: 20px
        background: #fff
        h4
            height: 28px
            line-height: 28px
            i
                display: inline-block
                width: 4px
                height: 12px
                background: #fc5459
                margin-left: 11px 
                margin-right: 8px
            span
                font-size: 12px
                display: inline-block
                vertical-align: top
        .nav-item
            border-top: 1px solid #f1eeed
            height: 89px
            display: flex
            .item-left
                flex: 1
                border-right: 1px solid #f1eeed
                overflow: hidden
                .text
                    float: left
                    h6
                        font-size: 14px
                        margin-left: 12px
                        color: #372c2a
                        font-weight: block
                        margin-top: 29px
                    p
                        font-size: 12px
                        margin-top: 9px
                        margin-left: 12px
                        color: #aaa5a5
                .pic
                    float: right
                    img
                        width: 40px
                        height: 40px
                        margin-top: 24px
                        margin-right: 12px
            .item-right
                flex: 1
                overflow: hidden
                .text
                    float: left
                    h6
                        font-size: 14px
                        margin-left: 12px
                        color: #372c2a
                        font-weight: block
                        margin-top: 29px
                    p
                        font-size: 12px
                        margin-top: 9px
                        margin-left: 12px
                        color: #aaa5a5
                .pic
                    float: right
                    img
                        width: 40px
                        height: 40px
                        margin-top: 24px
                        margin-right: 12px
    .more
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
