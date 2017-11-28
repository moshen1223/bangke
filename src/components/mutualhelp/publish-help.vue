<template>
<div class="publish-help">
    <div class="header">
        <img src="./publish-help.png">
        <div class="user-info">
            <div class="author">
                <span>
                    <img :src="userInfo.headPictureurl">
                </span>
            </div>
            <p class="username">{{userInfo.name}}</p>
        </div>
        <b class="decorate"></b>
    </div>
    <div class="content">
        <div class="title">
            <h6>互助标题</h6>
            <el-input v-model="title" placeholder="请输入标题内容"></el-input> 
        </div>
        <div class="pic">
            <h6>互助图片</h6>
            <el-row :gutter="8">
                <el-col :span="8">
                    <div class="pic">
                        <input type="file" class="file" ref="inputFile1" @change="fileChange1"/>
                        <img :src="pic1 ? pic1 : addPic" @click="picImg1"/>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="pic">
                        <input type="file" class="file" ref="inputFile2" @change="fileChange2"/>
                        <img :src="pic2 ? pic2 : addPic" @click="picImg2"/>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="pic">
                        <input type="file" class="file" ref="inputFile3" @change="fileChange3"/>
                        <img :src="pic3 ? pic3 : addPic" @click="picImg3"/>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="disc">
            <h6>互助内容</h6>
            <el-input
                type="textarea"
                :rows="1"
                placeholder="请输入内容"
                v-model="discription">
            </el-input>
        </div>
        <div class="range">
            <h6>回答范围</h6>
            <div>
                <el-radio v-model="schoolRange" label="1">本学校内</el-radio>
                <el-radio v-model="schoolRange" label="2">所有学校</el-radio>
            </div>
        </div>
        <div class="range">
            <h6>业务类型</h6>
            <div>
                <el-radio v-model="consumetype" label="1">赚取佣金</el-radio>
                <el-radio v-model="consumetype" label="2">支付佣金</el-radio>
            </div>
        </div>
        <div class="range">
            <h6>金额类型</h6>
            <div>
                <el-radio v-model="moneyType" label="3">现金</el-radio>
                <el-radio v-model="moneyType" label="1">金币</el-radio>
            </div>
        </div>
        <div class="title">
            <h6>金额数值</h6>
            <el-input v-model="account" placeholder="请输入具体金额"></el-input> 
        </div>
        <div class="disc">
            <h6>备注</h6>
            <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入备注内容"
                v-model="remark">
            </el-input>
        </div>
    </div>
    <div class="space"></div>
    <div class="commit" @click="publishMutual">提交</div>
</div>
</template>
<script>
import storage from 'good-storage';
import API from 'api/api';
const querystring = require('querystring');
import {mapGetters} from 'vuex';
import addPic from './add-pic.png';

export default{
    data(){
        return {
            addPic : addPic,
            pic1Base64: '',
            pic1: '',
            pic2Base64: '',
            pic2: '',
            pic3Base64: '',
            pic3: '',
            picUrlStr: '',
            title: '',
            discription: '',
            schoolRange: '1',
            consumetype: '1',
            moneyType: '3',
            account: '',
            remark: ''
        }
    },
    computed: {
        login_info(){
            return storage.session.get('login_info')
        },
        ...mapGetters([
            'userInfo'
        ])
    },
    mounted(){
        
    },
    methods: {
        // 点击选择图片
        picImg1(){
            this.$refs['inputFile1'].click();
        },
        picImg2(){
            this.$refs['inputFile2'].click();
        },
        picImg3(){
            this.$refs['inputFile3'].click();
        },
        // 图片改变
        fileChange1(e){
            let _this = this;
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function(){
                let dataURL = reader.result;
                _this.pic1Base64 = dataURL.split('base64,')[1];
                _this.uploadAvator(_this.pic1Base64);
            }
        },
        fileChange2(e){
            let _this = this;
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function(){
                let dataURL = reader.result;
                _this.pic2Base64 = dataURL.split('base64,')[1];
                _this.uploadAvator(_this.pic2Base64);
            }
        },
        fileChange3(e){
            let _this = this;
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function(){
                let dataURL = reader.result;
                _this.pic3Base64 = dataURL.split('base64,')[1];
                _this.uploadAvator(_this.pic3Base64);
            }
        },
        // 上传图片
        uploadAvator(picBase64){
            if(!picBase64){
                return;
            }
            this.$http({
                url: API.Interface.uploadPicture(),
                method: 'post',
                data: querystring.stringify({'' : picBase64}),
                headers: {
                    'timestamp':  API.timeStr,
                    'access_token': this.login_info.access_token
                }
            }).then((res) => {
                if(res.data.code == 200){
                    if(this.pic1Base64 == picBase64){
                        this.pic1 = res.data.data;
                    }else if(this.pic2Base64 == picBase64){
                        this.pic2 = res.data.data;
                    }else if(this.pic3Base64 == picBase64){
                        this.pic3 = res.data.data;
                    }
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        // 发布互助
        publishMutual(){
            if(this.pic1) {
                this.picUrlStr += this.pic1;
            }
            if(this.pic2) {
                this.picUrlStr += ',' + this.pic2;
            }
            if(this.pic3) {
                this.picUrlStr += ',' + this.pic3;
            }
            if(!this.title){
                alert('请完善标题！');
                return
            }
            if(!this.discription || this.discription.length>500){
                alert('请输入1~500长度的描述！');
                return
            }
            this.$http({
                url: API.Interface.publishMutual(),
                method: 'post',
                data: querystring.stringify({
                    title: this.title,    
                    content: this.discription,
                    pictureList: this.picUrlStr,
                    isAll: this.schoolRange == 2 ? true : false,
                    type: this.consumetype,
                    objectType: this.moneyType == 3 ? 3 : 1,
                    objectValue: parseFloat(this.account),
                    remark: this.remark
                }),
                headers: {
                    'timestamp':  API.timeStr,
                    'access_token': this.login_info.access_token
                }
            }).then((res) => {
                if(res.data.code == 200){
                    this.$router.push('/help-list');
                    console.log(res.data.data)
                }
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    components: {

    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.publish-help
    width: 100%
    background: #ffff
    letter-spacing: 1px
    .header
        position: relative
        img
            width: 100%
            height: auto
        .user-info
            position: absolute
            width: 100%
            top: 36px
            .author
                text-align: center
                span
                    display: inline-block
                    width: 83px
                    height: 83px
                    background: #fff
                    border-radius: 50%
                    overflow: hidden
                    img
                        width: 100%
                        height: auto
            .username
                text-align: center
                font-size: 13px
                color: #fff
                margin-top: 10px
        .decorate
            width: 51px
            height: 15px
            position: absolute
            bottom: 0
            left: 50%
            margin-left: -25px
            background: url('./decorate.png') no-repeat
            background-size: 51px 15px
    .content
        padding: 0 10px
        -webkit-box-sizing: border-box
        -moz-box-sizing: border-box
        -o-box-sizing: border-box
        box-sizing: border-box
        text-align: center
        .title
            margin-top: 20px
            border-bottom: 1px solid #d3d8d9
            padding-bottom: 9px
            h6
                font-size: 12px
                color: #87807f
                margin-bottom: 8px
            .el-input
                .el-input__inner
                    text-align: center
                    border: none
                    height: 20px
                    padding: 0
        .pic
            margin-top: 10px
            h6
                font-size: 12px
                color: #87807f
                margin-bottom: 6px
            .pic
                width: 100%
                height: 100px
                overflow: hidden
                .file
                    display: none
                img
                    width: 100%
                    height: auto
        .disc
            margin-top: 10px
            border-bottom: 1px solid #d3d8d9
            h6
                font-size: 12px
                color: #87807f
                margin-bottom: 6px
            .el-textarea
                .el-textarea__inner
                    text-align: center
                    border: none
                    resize: none
        .range
            margin-top: 10px
            border-bottom: 1px solid #d3d8d9
            h6
                font-size: 12px
                color: #87807f
                margin-bottom: 6px 
            div
                display: flex
                .el-radio
                    flex: 1
                    text-align: center  
                    line-height: 40px 
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
</style>
