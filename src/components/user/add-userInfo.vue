<template>
    <div class="add-container">
        <div class="bg-img">
            <img src="./add-bg.png">
        </div>
        <div class="school">
            <h5>所属院校/专业</h5>
            <div class="select">
                <div class="left">
                    <el-select
                        v-model="schoolID"
                        :filterable = "true"
                        :remote = "true"
                        placeholder="请输入学校关键词"
                        :remote-method="remoteSchoolMethod"
                        :loading="loading">
                        <el-option
                        v-for="item in schools"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                        </el-option>
                    </el-select>
                </div>
                <div class="right">
                    <el-select
                            v-model="departmentID"
                            :filterable = "true"
                            :remote = "true"
                            placeholder="请输入专业关键词"
                            :remote-method="remoteDepartmentMethod"
                            :loading="loading2">
                        <el-option
                            v-for="item in departments"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </div>
            </div>
        </div>
        <div class="info">
            <div class="content">
                <div class="left">
                    <div class="disc">我的头像</div>
                    <div class="pic">
                        <input type="file" class="file" ref="inputFile" @change="fileChange"/>
                        <img :src="avatorURL" @click="avatorImg"/>
                    </div>
                </div>
                <div class="right">
                    <div class="disc">性别</div>
                    <div class="radio">
                        <el-radio v-model="sex" label="0">男</el-radio>
                        <el-radio v-model="sex" label="1">女</el-radio>
                    </div>
                </div>
            </div>
        </div>
        <div class="info-bottom">
            <ul>
                <li>
                    <span>手机号码</span><br>
                    <input type="text" v-model="phone" placeholder="请输入手机号码">
                </li>
                <li>
                    <span>我的昵称</span><br>
                    <input type="text" v-model="nickname" placeholder="请输入您的昵称">
                </li>
            </ul>
        </div>
        <div class="space"></div>
        <div class="commit" @click="commitUserInfo">提交</div>
    </div>
</template>
<script>
import storage from 'good-storage';
import API from 'api/api';
import AvatarDefault from './avatar.png';
import {mapGetters} from 'vuex';
const querystring = require('querystring');

export default{
    data(){
        return {
            schools: [],
            schoolID: '',
            schoolName: '',
            loading: false,
            departments: [],
            departmentName: '',
            departmentID: '',
            loading2: false,
            sex: '0',
            avatorBase64: '',
            avatorURL: AvatarDefault,
            nickname: '',
            phone: ''
        }
    },
    computed: {
        login_info(){
            return storage.session.get('login_info')
        },
        ...mapGetters(['userInfo'])
    },
    mounted(){

    },
    methods:{
        // 学校搜索
        remoteSchoolMethod(query) {
            if (query !== '') {
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                    this.getSchoolList(query, 1);
                }, 200);
            } else {
                this.schools = [];
            }
        },
        // 获取学校列表
        getSchoolList(name,page){
            this.$http({
                url: API.Interface.getSchoolList(name,page),
                method: 'get',
                headers: {
                'timestamp':  API.timeStr,
                'access_token': this.login_info.access_token
                }
            }).then((res) => {
                if(res.data.code == 200){
                    this.schools = res.data.data;
                }
            }).catch((error) => {
                console.log(error);
            })
        },
        // 搜索专业
        remoteDepartmentMethod(query){
            if (!this.schoolID){
                return;
            };
            if (query !== '') {
                this.loading2 = true;
                setTimeout(() => {
                    this.loading2 = false;
                    this.getMagorList(this.schoolID, query, 1);
                }, 200);
            } else {
                this.departments = [];
            }
        },
        // 获取专业列表
        getMagorList(number,name,page){
            this.$http({
                url: API.Interface.getMagorList(number,name,page),
                method: 'get',
                headers: {
                    'timestamp':  API.timeStr,
                    'access_token': this.login_info.access_token
                }
            }).then((res) => {
                if(res.data.code == 200){
                    this.departments = res.data.data;
                }
            }).catch((error) => {
                console.log(error);
            })
        },
        // 点击选择图片
        avatorImg(){
            this.$refs['inputFile'].click();
        },
        // 图片改变
        fileChange(e){
            let _this = this;
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = function(){
                let dataURL = reader.result;
                _this.avatorBase64 = dataURL.split('base64,')[1];
                _this.uploadAvator();
            }
        },
        // 上传图片
        uploadAvator(){
            if(!this.avatorBase64){
                return;
            }
            this.$http({
                url: API.Interface.uploadPicture(),
                method: 'post',
                data: querystring.stringify({'':this.avatorBase64}),
                headers: {
                    'timestamp':  API.timeStr,
                    'access_token': this.login_info.access_token
                }
            }).then((res) => {
                if(res.data.code == 200){
                    this.avatorURL = res.data.data;
                }
            }).catch((error) => {
                console.log(error)
            })
        },
        // 提交完善个人信息
        commitUserInfo(){
            if(this.schools.length){
                this.schools.forEach((item)=>{
                    if(item.id == this.schoolID){
                        this.schoolName = item.name;
                    }
                });
            }else{
                alert('请完善所在学校!');
                return;
            }
            if(this.departments.length){
                this.departments.forEach((item)=>{
                    if(item.id == this.departmentID){
                        this.departmentName = item.name;
                    }
                });
            }else{
                alert('请完善您的专业!');
                return;
            }
            let reg = /^1[3578]\d{9}$/img
            if(!reg.test(this.phone)){
                alert('您输入的手机号!');
                return;
            }
            if(!this.nickname){
                alert('昵称不能为空!');
                return;
            }
            if(!this.avatorURL){
                alert('请选择头像!');
                return;
            }
            this.setUserInfo({
                id: this.userInfo.id,
                name: this.nickname,
                head: this.avatorURL,
                sex: this.sex,
                phone: this.phone,
                schoolID: this.schoolID,
                schoolName: this.schoolName,
                specialityId: this.departmentID,
                specialityName: this.departmentName
            })
        },
        // 设置个人信息
        setUserInfo(options){
            this.$http({
                url: API.Interface.completeUserInfo(),
                method: 'post',
                data: querystring.stringify({
                    id: options.id,
                    name: options.name,
                    headPictureUrl: options.head,
                    sex: options.sex,
                    phoneNumber: options.phone,
                    schoolId: options.schoolID,
                    schoolName: options.schoolName,
                    schoolSpecialityId: options.specialityId,
                    schoolSpecialityName: options.specialityName
                }),
                headers: {
                    'timestamp':  API.timeStr,
                    'access_token': this.login_info.access_token
                }
            }).then((res)=>{
                console.log(res);
            }).catch((error)=>{
                console.log(error);
            });
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.add-container
    height: 100%
    .bg-img
        img
            width: 100%
            height: auto
    .school
        margin-top: 27px
        padding-left: 11px
        padding-right: 11px
        h5
            font-size: 12px
            color: #87807f
            letter-spacing: 2px
        .select
            border-bottom: 1px solid #e5e5e5
            margin-top: 5px
            display: flex
            height: 28px
            line-height: 28px
            .el-input__inner
                padding: 0 10px
                height: 28px
                color: #333
                border: none
            .left
                flex: 1
            .right
                flex: 1
    .info
        margin-top: 22px
        padding: 0 11px
        .content
            display: flex
            padding-bottom: 20px
            border-bottom: 1px solid #e5e5e5
            .left
                flex: 1
                overflow: hidden
                height: 116px
                .disc
                    float: left
                    width: 60px
                    color: #87807f
                    font-size: 12px
                    padding-top: 2px
                .pic
                    height: 116px
                    margin-left: 60px
                    overflow: hidden
                    .file
                        display: none
                    img
                        width: 100%
                        height: auto
            .right
                flex: 1
                .disc
                    font-size: 12px
                    color: #87807f
                    padding-left: 10px
                .radio
                    .el-radio
                        overflow: hidden
                        display: block
                        height: 23px
                        padding-top: 12px
                        .el-radio__label
                            padding-left: 35px
                        .el-radio__input
                            float: right
                            margin-right: 10px
                        .el-radio__inner
                            float: left
                            font-size: 13px
                            color: #333
                    .el-radio+.el-radio
                        margin-left: 0
    .info-bottom
        padding: 0 11px
        ul
            li
                border-bottom: 1px solid #e5e5e5
                height: 65px
                text-align: center
                span
                    display: block
                    margin-top: 16px
                    color: #87807f
                    font-size: 12px
                    letter-spacing: 1px
                input
                    width: 100%
                    text-align: center
                    outline: none
                    font-size: 13px
                    color: #333
                    letter-spacing: 1px
    .space
        height: 48px
        width: 100%
    .commit
        height: 48px
        width: 100%
        background: #fc5558
        line-height: 48px
        font-size: 15px
        color: #fff
        text-align: center
        position: fixed
        left: 0
        bottom: 0
    
</style>