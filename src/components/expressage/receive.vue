<template>
<div class="receive-container">
    <div class="content">
        <ul>
            <li>
                <div class="tit">收件人姓名</div>
                <div class="con">
                    <el-input v-model="name" placeholder="请输入姓名"></el-input>
                </div>
            </li>
            <li>
                <div class="tit">收件人电话</div>
                <div class="con">
                    <el-input v-model="phone" placeholder="请填写手机号码"></el-input>
                </div>
            </li>
            <li>
                <div class="tit">收货人地址</div>
                <div class="con" @click="selectAddress">
                    <el-input :disabled="true" v-model="addressDetail" suffix-icon="el-icon-arrow-right" placeholder="默认地址"></el-input>
                </div>
            </li>
            <li class="msg">
                <div class="tit">货物清单</div>
                <div class="con">
                    <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="获取清单"
                    v-model="inventory">
                    </el-input>
                </div>
            </li>
            <li class="msg">
                <div class="tit">物流信息</div>
                <div class="con">
                    <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请详细的填写收件的物流或其他信息"
                    v-model="logistics">
                    </el-input>
                </div>
            </li>
            <li class="weight">
                <div class="tit">货物重量</div>
                <div class="con">
                    <el-select v-model="weight" placeholder="请选择货物重量" @change="weightChange">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <p class="explain" @click="desciptionShow"><查看货物重量资费说明></p>
                </div>
            </li>
            <li class="cost">
                <div class="tit">费用</div>
                <div class="con">
                    <p class="cost-text">{{charges}}元</p>
                </div>
            </li>
        </ul>
    </div>
    <div class="commit-btn">
        <div @click="publish">提交取送快递请求</div>
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
    <div class="mask" @click="desciptionHide" v-show="desciptionStatus"></div>
    <div class="state" v-show="desciptionStatus">
        <h4>货物重量资费说明</h4>
        <h5>校园帮客</h5>
        <p>详细说明详细说明详细说明详细说明详细说明</p>
    </div>
</div>
</template>
<script>
import storage from 'good-storage';
import API from 'api/api';
import {mapGetters} from 'vuex';
const querystring = require('querystring');

export default{
    data(){
        return {
            selectedPage: 0,
            name: '',
            phone: '',
            addressDetail: '',
            address: '',
            code: '',
            detailAddress: '',
            inventory: '',
            logistics: '',
            weight: '',
            weightText: '',
            charges: '',
            options: [],
            payStandardList: [],
            desciptionStatus: false
        }
    },
    computed: {
        login_info(){
            return storage.session.get('login_info')
        }
    },
    mounted(){
        this.getDefaultAddress();
        this.receivePayList();
    },
    methods: {
        // 选择当前页
        selectCurrentPage(page){
            this.selectedPage = page;
        },
        desciptionShow(){
            this.desciptionStatus = true
        },
        desciptionHide(){
            this.desciptionStatus = false
        },
        // 获取收费标准
        receivePayList(){
            this.$http({
                url: API.Interface.receivePayList(),
                method: 'get',
                headers: {
                    'timestamp':  API.timeStr,
                    'access_token': this.login_info.access_token
                }
            }).then((res) => {
                if(res.data.code == 200){
                    this.payStandardList = res.data.data
                    this.payStandardList.forEach((item)=>{
                        this.options.push({
                            value: item.id,
                            label: item.title
                        })
                    })
                    console.log(this.options)
                }
            }).catch((error) => {
                console.log(error);
            })
        },
        // 获取默认收货地址
        getDefaultAddress(){
            this.$http({
                url: API.Interface.getDefaultUserAddress(),
                method: 'get',
                headers: {
                    'timestamp':  API.timeStr,
                    'access_token': this.login_info.access_token
                }
            }).then((res)=>{
                if(res.data.code == 200){
                    let data = res.data.data;
                    this.name = data.name;
                    this.phone = data.phoneNumber;
                    this.address = data.title;
                    this.code = data.code;
                    this.detailAddress = data.address;
                    this.addressDetail = `${data.title}/${data.address}`;
                }
            }).catch((error)=>{
                console.log(error)
            });
        },
        // 收货人地址
        selectAddress(){
            this.$router.push({
                path: `/address-manage`
            })
        },
        // 重量改变
        weightChange(){
            this.payStandardList.forEach((item)=>{
                if(item.id == this.weight){
                    this.weightText = item.endHeight;
                    this.charges = item.money;
                }
            })
        },
        // 发布提交收快递申请
        publish(){
            this.$http({
                url: API.Interface.receivePublish(),
                method: 'post',
                data: querystring.stringify({
                    name: this.name,            // 收件人姓名
                    mobile: this.phone,         // 收件人手机号
                    addressCode: this.code,  // 省市县code
                    addressTitle: this.address,   // 省市县名称
                    address: this.detailAddress,	    // 收件人详细地址
                    goodsList: this.inventory,      // 商品清单
                    logistics: this.logistics,      // 物流公司信息
                    weight: this.weightText,	        // 重量(单位：公斤)
                    charges: this.charges         // 相应费用
                }),
                headers: {
                    'timestamp':  API.timeStr,
                    'access_token': this.login_info.access_token
                }
            }).then((res)=>{
                if(res.data.code == 200){
                    this.$router.push({
                        path: '/receive-list'
                    })
                }
            }).catch((error)=>{
                console.log(error)
            })
        }
    },
    components: {

    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.receive-container
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
    padding: 16px 11px 0 11px
    .content
        background: #fff
        ul
            padding: 0 5px
            li
                display: flex
                border-bottom: 1px solid #e5e5e5
                height: 48px
                line-height: 48px
                .tit
                    flex: 0 0 90px
                    -webkit-box-sizing: border-box
                    -moz-box-sizing: border-box
                    -o-box-sizing: border-box
                    box-sizing: border-box
                    padding-left: 15px
                    color: #333
                    font-size: 13px
                .con 
                    flex: 1
                    .explain
                        font-size: 10px
                        color: #e5e5e5
                        line-height: 12px
                        padding-left: 15px
                .el-input__inner
                    border: none
                .el-select
                    width: 100%
            .msg
                height: 105px
                .el-textarea__inner
                    border: none
                    height: 105px
                    resize: none
            .weight
                height: 65px
            .cost
                height: 56px
                line-height: 56px
                border-bottom: none
                .cost-text
                    padding-left: 15px
                    font-size: 12px
                    color: #87807f
    .commit-btn
        position: fixed
        bottom: 53px
        left: 11px
        right: 11px
        div
            height: 36px
            background: #fc5459
            line-height: 36px
            text-align: center
            font-size: 13px
            color: #fff

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
    .mask
        position: absolute 
        top: 0
        bottom: 0
        left: 0
        right: 0
        z-index: 100
        background: rgba(0,0,0, 0.5) 
    .state
        position: absolute
        top: 64px
        bottom: 64px
        left: 30px
        right: 30px
        z-index: 100
        background: #fff
        border-radius: 5px
        overflow: scroll
        -webkit-box-sizing: border-box
        -moz-box-sizing: border-box
        -o-box-sizing: border-box
        box-sizing: border-box
        padding: 22px 17px
        h4
            font-size: 14px
            color: #333
            text-align: center
            text-decoration: underline
        h5
            margin-top: 8px
            font-size: 12px
            color: #87807f
            text-align: center
        p
            font-size: 10px
            color: #333
            line-height: 14px
            margin-top: 12px
            text-decoration: underline

</style>
