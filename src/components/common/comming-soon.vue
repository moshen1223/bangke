<template>
  <div class="develping">
    <img width="320" height="235" src="./developing.png">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: '功能建设中，敬请期待...'
      }
    }
  }
</script>
<style>
.develping{
    width: 100%;
    height: 100%;
    background: #f3f2f2;
    text-align: center;
    font-size: 0;
}
.develping img{
    margin-top: 20px;
}
.develping .desc{
    margin-top:-16px;
    font-family: 'Microsoft YaHei';
    font-size: 14px;
    color: #4b4b4b;
    text-align: center;
}
</style>