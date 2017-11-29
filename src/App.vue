<template>
  <div class="container">
    <complete-tips v-show="completePage"></complete-tips>
    <router-view/>
  </div>
</template>

<script>
const querystring = require('querystring');
import completeTips from 'components/dialog/complete-tips'
import urlParse from 'common/js/util';
import Crypto from 'common/js/jsencrypt';
import API from 'api/api';
import AppConfig from 'common/js/config';
import storage from 'good-storage';
import {mapGetters,mapMutations} from 'vuex'
export default {
  data() {
    return {
      code: {},
      userData: {}
    }
  },
  computed:{
    ...mapGetters(['completePage'])
  },
  mounted() {
    setTimeout(() => {
      this.code = urlParse();
      if(this.code.code){
        this.getOpenId(this.code.code);
      }else if(storage.session.get('open_data')){
        this.userData = {
          headUrl: storage.session.get('open_data').headUrl,
          openId: storage.session.get('open_data').openId,
          userName: storage.session.get('open_data').userName
        }
        this.auth();
      }
    }, 200)
  },
  methods: {
    // 获取openID
    getOpenId(code) {
      this.$http.get(API.Interface.getOpenId(code))
      .then((response) => {
        if (response.data.code == 200) {
          this.userData = response.data.data;
          this.auth();
          storage.session.set('open_data', {
            headUrl: this.userData.headUrl,
            openId: this.userData.openId,
            userName: this.userData.userName
          });
        }
      }).catch((error) => {
        console.log(error)
      });
    },
    // 用户授权
    auth() {
      let secret = '#js' + Crypto.jsencrypt(AppConfig.APPKEY +'+'+ AppConfig.APPSECRET +'+'+ AppConfig.USERTYPE +'+'+ this.userData.openId+'+'+ this.userData.userName +'+'+ this.userData.headUrl);      
      this.$http({
        url: API.Interface.auth(),
        method: 'post',
        data: querystring.stringify({'': secret}),
        headers: {
          'timestamp':  API.timeStr,
          'access_token': ''
        }
      }).then((res) => {
        if(res.data.code == 200 && res.data.message == "授权成功"){
          this.$router.push('/home');
          storage.session.set('login_info', {
            access_token: res.data.data.access_token,
            headUrl: res.data.data.headUrl,
            userid: res.data.data.id,
            username: res.data.data.name
          });
          this.getUserInfo(res.data.data.access_token);
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    // 获取用户信息
    getUserInfo(token) {
      this.$http({
        url: API.Interface.getUserInfo(),
        method: 'get',
        headers: {
          'timestamp':  API.timeStr,
          'access_token': token
        }
      }).then((res) => {
        if(res.data.code == 200){
          this.setCompletepage(!res.data.data.isFristBasicInfo);
          this.setUserInfo(res.data.data)
        }
      }).catch((error) => {
        console.log(error);
      })
    },
    ...mapMutations({
      setCompletepage : 'SET_COMPLETEPAGE',
      setUserInfo : 'SET_USERINFO'
    })
  },
  components:{
    completeTips
  }
}
</script>

<style  scoped lang="stylus" rel="stylesheet/stylus">
.container
  position: relative
  height: 100%
  font-family: "SF Pro SC","SF Pro Text","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
</style>
