<template>
    <div class="address-list">
        <ul>
            <li v-for="(item, index) in addresslist" :key="index">
                <div class="info">
                    <span>老张头</span>
                    <b>185****3687</b>
                    <i></i>
                </div>
                <p class="disc">{{item.address}}</p>
                <div class="opa">
                    <span :class="{'selected':item.isDefault}"></span>
                    <b @click="showDeleteMask(item.id)"></b>
                </div>
            </li>
        </ul>
        <div class="commit" @click="showAddressBox">
            <span>添加新地址</span>
        </div>
        <div class="mask" @click="hideDeleteMask" v-show="deleteMask"></div>
        <div class="delbox" v-show="deleteMask">
            <p>确定要进行删除吗</p>
            <div>
                <span>取消</span>
                <span>确定</span>
            </div>
        </div>
        <div class="addAddress" v-show="addAddressShow">
            <ul class="add-item">
                <li>
                    <div class="left">收货人</div>
                    <div class="right">
                        <el-input v-model="name" placeholder="请输入您的姓名"></el-input>
                    </div>
                </li>
                <li>
                    <div class="left">手机号码</div>
                    <div class="right">
                        <el-input v-model="telephone" placeholder="请输入手机号码"></el-input>
                    </div>
                </li>
                <li>
                    <div class="left">所在地区</div>
                    <div class="right">
                        <el-input @focus="selectCity" :readonly="true" v-model="city" placeholder="请选择省市区"></el-input>
                    </div>
                </li>
                <li>
                    <div class="left">详细地址</div>
                    <div class="right">
                        <el-input v-model="adress" placeholder="请输入详细地址"></el-input>
                    </div>
                </li>
                <li>
                    <div class="left">邮政编码</div>
                    <div class="right">
                        <el-input v-model="code" placeholder="请输入邮政编码"></el-input>
                    </div>
                </li>
            </ul>
            <div class="set-default">
                <span @click="selectDefault" :class="{'actived': defaultAdress == 1}">设为默认地址</span>
            </div>
            <div class="attr-zTree-box" v-show = "cityShow">
                <div class="ztree" id="attr_zTree"></div>
            </div>
            <div class="save" @click="saveAddress">保存</div>
            <div class="citymask" v-show = "cityShow"></div>
        </div>
    </div>
</template>
<script>
import storage from 'good-storage';
import API from 'api/api';
import city from './city';
import {mapGetters, mapMutations} from 'vuex';
const querystring = require('querystring');

export default{
    data(){
        return {
            addresslist: [],
            deleteMask: false,
            cityShow: false,
            addAddressShow: false,
            name: '',
            telephone: '',
            city: '',
            cityId : '',
            adress: '',
            code: '',
            defaultAdress: 0
        }
    },
    computed: {
        login_info(){
            return storage.session.get('login_info')
        }
    },
    mounted(){
        // this.getUserAddress();
        this.drawZtree(city);
    },
    methods: {
        // 选择城市弹框
        selectCity(){
            this.cityShow = true;
        },
        // 画出城市树
        drawZtree(data){
            let zTreeNodes = [];
            data.forEach((item, index)=>{
                if(!item.parentId){
                    zTreeNodes.push({
                        id: item.id,
                        pId: 0,
                        name: item.title
                    })
                }else if(item.parentId){
                    zTreeNodes.push({
                        id: item.id,
                        pId: item.parentId,
                        name: item.title
                    })
                }
            });
            let ztreeSetting = {
                view: {
                    selectedMulti: false,
                    showLine: false,
                    showIcon: false
                },
                data: {
                    simpleData: {
                        enable: true
                    }
                },
                callback: {
                    onClick: this.zTreeOnClick
                }
            };
            $.fn.zTree.init($("#attr_zTree"), ztreeSetting, zTreeNodes);
        },
        zTreeOnClick(event, zTreeID, zTreeNode){
            if(!zTreeNode.children){
                this.city = zTreeNode.name;
                this.cityId = zTreeNode.id;
                this.cityShow = false;
            }else{
                var zTree = $.fn.zTree.getZTreeObj("attr_zTree");
			    zTree.expandNode(zTreeNode);
            };
        },
        selectDefault(){
            this.defaultAdress == 0 ? this.defaultAdress = 1 : this.defaultAdress = 0;
            alert(this.defaultAdress)
        },
        // 添加收货地址
        saveAddress(){
            let regTel = /^1[3578]\d{9}$/img;
            if(!regTel.test(this.telephone)){
                alert('请输入正确格式的手机号!');
                return;
            }
            if(!this.name){
                alert('昵称不能为空!');
                return;
            }
            let regCode = /^\d{6}$/img;
            if(!regCode.test(this.code)){
                alert('请输入正确格式的邮政编码!');
                return;
            }
            if(!this.cityId){
                alert('请选择城市!');
                return;
            }
            if(!this.adress){
                alert('收货详细地址不能为空!');
                return;
            }
            this.$http({
                url: API.Interface.addUserAddress(),
                method: 'post',
                data: querystring.stringify({
                    name: this.name,
                    phoneNumber: this.telephone,
                    postCode: this.code,
                    code: this.cityId,
                    title: this.city,
                    content: this.adress,
                    isDefault: this.defaultAdress == 0 ? 'false' : true
                }),
                headers: {
                    'timestamp':  API.timeStr,
                    'access_token': this.login_info.access_token
                }
            }).then((res)=>{
                if(res.data.code == 200){
                    this.$message({
                        message: '恭喜你，添加成功',
                        type: 'success'
                    });
                    this.addAddressShow = false;
                }
            }).catch((error)=>{
                console.log(error);
            });
        },
        // 获取收货地址列表
        getUserAddress(){
            this.$http({
                url: API.Interface.getUserAddress(),
                method: 'get',
                params: {
                    page: 1
                },
                headers: {
                    'timestamp':  API.timeStr,
                    'access_token': this.login_info.access_token
                }
            }).then((res) => {
                if(res.data.code == 200){
                    this.addresslist= res.data.data;
                }
            }).catch((error) => {
                console.log(error);
            })
        },
        showDeleteMask(){
            this.deleteMask = true
        },
        hideDeleteMask(){
            this.deleteMask = false
        },
        showAddressBox(){
            this.addAddressShow = true
        }
    },
    components: {

    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.address-list
    width: 100%
    background: #f1efed
    position: absolute
    top: 0
    bottom: 0
    letter-spacing: 1px
    -webkit-box-sizing: border-box
    -moz-box-sizing: border-box
    -o-box-sizing: border-box
    box-sizing: border-box
    ul
        li
            padding-left: 11px
            background: #fff
            margin-bottom: 10px
            .info
                padding-top: 16px
                font-size: 0
                position: relative
                span
                    display: inline-block
                    font-size: 15px 
                    color: #333
                    font-weight: bold
                b
                    display: inline-block
                    margin-left: 27px
                    font-size: 15px
                    color: #333
                    font-weight: bold
                i
                   width: 47px
                   height: 14px
                   position: absolute
                   top: 16px
                   right: 11px
                   background: url('./edit.png') no-repeat
                   background-size: 47px 14px 
            .disc
                margin-top: 11px
                font-size: 13px
                color: #87807f
                line-height: 17px
                border-bottom: 1px solid #e5e5e5
                padding-bottom: 8px
            .opa
                height: 36px
                overflow: hidden
                span
                    float: left
                    margin-top: 14px
                    width: 70px
                    height: 12px
                    background: url('./select.png') no-repeat
                    background-size: 70px 12px
                .selected 
                    background: url('./default-select.png') no-repeat
                    background-size: 70px 12px
                b
                    float: right
                    width: 45px
                    height: 14px
                    margin-top: 11px
                    margin-right: 11px
                    background: url('./delete.png') no-repeat
                    background-size: 45px 12px
    .commit
        position: fixed
        width: 100%
        left: 0
        bottom: 0
        height: 49px
        line-height: 49px
        font-size: 15px
        color: #fff
        text-align: center
        background: #fc5558
    .mask
        position: absolute 
        top: 0
        bottom: 0
        left: 0
        right: 0
        z-index: 100
        background: rgba(0,0,0, 0.5) 
    .delbox
        position: absolute
        width: 220px
        height: 160px
        background: #fff
        border-radius: 8px
        top: 45%
        left: 50%
        margin-top: -80px
        margin-left: -120px
        z-index: 110
        padding-left: 10px
        padding-right: 10px
        p
            margin-top: 44px
            text-align: center
            font-size: 18px
            color: #333
        div
            display: flex
            margin-top: 48px
            border-top: 1px solid #e5e5e5
            span
                flex: 1
                height: 48px
                line-height: 48px
                text-align: center
                font-size: 18px
                color: #333
                border-right: 1px solid #e5e5e5
                &:last-child
                    border-right: none
    .addAddress
        position: absolute 
        top: 0
        bottom: 0
        left: 0
        right: 0
        z-index: 200
        background: #f1efed
        .add-item
            margin-top: 12px
            padding-left: 12px
            background: #fff
            li
                height: 38px
                line-height: 38px
                border-bottom: 1px solid #e5e5e5
                display: flex
                overflow: hidden
                margin-bottom: 0
                .left
                    flex: 0 0 104px
                    font-size: 15px
                    color: #333
                .right
                    flex: 1
                    color: #87807f
                    font-size: 13px
                    .el-input
                        input
                            border: none
                            height: 38px
                            padding: 0
        .set-default
            margin-top: 20px
            height: 36px
            line-height: 36px
            text-align: center
            span 
                font-size: 13px
                color: #333
                background: #fff
                display:inline-block
                width: 100%
                height: 100%
            .actived
                background: #fc5558
                color: #fff
        .attr-zTree-box
            border-radius: 8px
            height: 340px
            overflow: scroll
            position: absolute
            top: 50%
            left: 20px
            right: 20px
            -webkit-transform: translateY(-50%)
            z-index: 200
            background: #fff
            li
                line-height: 22px
                margin-bottom: 5px
                a
                    height: 22px
        .save
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
        .citymask
            position: absolute
            top: 0
            bottom: 0
            left: 0
            right: 0
            z-index: 100
            background: rgba(0,0,0, 0.5) 


</style>
