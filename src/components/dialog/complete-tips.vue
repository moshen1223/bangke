<template>
    <div class="complete">
        <div></div>
        <p class="cry">(′⌒`)</p>
        <h5 class="tips">请完善个人信息</h5>
        <div class="disc">如果您的个人信息不完整<br>将会影响您的使用</div>
        <div class="btn"><span @click="completeInfo">进入完善</span></div>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default{
    methods:{
        completeInfo(){
            this.$router.push('/addUserInfo');
            this.setCompletepage(false);
        },
        ...mapMutations({
            setCompletepage : 'SET_COMPLETEPAGE',
        })
    }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.complete
    width: 100%
    position: absolute
    top: 0
    bottom: 0
    z-index: 666
    background: rgba(0,0,0,0.7)
    text-align: center
    .cry
        margin-top: 120px
        color: #fff
        font-size: 20px
    .tips
        margin-top: 20px
        color: #fff
        font-size: 18px
        font-weight: bold
        word-spacing: 2px
    .disc
        margin-top: 10px
        color: #fff
        font-size: 16px
        line-height: 22px
    .btn
        margin-top: 115px
        span
            color: #fff
            display: inline-block
            border: 1px solid #383838
            padding: 8px 24px
</style>