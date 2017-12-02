const city = [
    {
        "id": "120502",
        "title": "安次区",
        "parentId": "1205",
        "pinyin": "anciqu",
        "initial": "A"
    },
    {
        "id": "120607",
        "title": "安平县",
        "parentId": "1206",
        "pinyin": "anpingxian",
        "initial": "A"
    },
    {
        "id": "120716",
        "title": "安新县",
        "parentId": "1207",
        "pinyin": "anxinxian",
        "initial": "A"
    },
    {
        "id": "120725",
        "title": "安国市",
        "parentId": "1207",
        "pinyin": "anguoshi",
        "initial": "A"
    },
    {
        "id": "130303",
        "title": "阿荣旗",
        "parentId": "1303",
        "pinyin": "arongqi",
        "initial": "A"
    },
    {
        "id": "130402",
        "title": "阿尔山市",
        "parentId": "1304",
        "pinyin": "aershanshi",
        "initial": "A"
    },
    {
        "id": "130605",
        "title": "阿鲁科尔沁旗",
        "parentId": "1306",
        "pinyin": "alukeerqinqi",
        "initial": "A"
    },
    {
        "id": "130613",
        "title": "敖汉旗",
        "parentId": "1306",
        "pinyin": "aohanqi",
        "initial": "A"
    },
    {
        "id": "130703",
        "title": "阿巴嘎旗",
        "parentId": "1307",
        "pinyin": "abagaqi",
        "initial": "A"
    },
    {
        "id": "1312",
        "title": "阿拉善盟",
        "parentId": "13",
        "pinyin": "alashanmeng",
        "initial": "A"
    },
    {
        "id": "131201",
        "title": "阿拉善左旗",
        "parentId": "1312",
        "pinyin": "alashanzuoqi",
        "initial": "A"
    },
    {
        "id": "131202",
        "title": "阿拉善右旗",
        "parentId": "1312",
        "pinyin": "alashanyouqi",
        "initial": "A"
    },
    {
        "id": "140908",
        "title": "安泽县",
        "parentId": "1409",
        "pinyin": "anzexian",
        "initial": "A"
    },
    {
        "id": "2003",
        "title": "鞍山市",
        "parentId": "20",
        "pinyin": "anshanshi",
        "initial": "A"
    },
    {
        "id": "210908",
        "title": "安图县",
        "parentId": "2109",
        "pinyin": "antuxian",
        "initial": "A"
    },
    {
        "id": "220109",
        "title": "阿城区",
        "parentId": "2201",
        "pinyin": "achengqu",
        "initial": "A"
    },
    {
        "id": "220205",
        "title": "昂昂溪区",
        "parentId": "2202",
        "pinyin": "angangxiqu",
        "initial": "A"
    },
    {
        "id": "221004",
        "title": "爱民区",
        "parentId": "2210",
        "pinyin": "aiminqu",
        "initial": "A"
    },
    {
        "id": "221102",
        "title": "爱辉区",
        "parentId": "2211",
        "pinyin": "aihuiqu",
        "initial": "A"
    },
    {
        "id": "221209",
        "title": "安达市",
        "parentId": "2212",
        "pinyin": "andashi",
        "initial": "A"
    },
    {
        "id": "320611",
        "title": "安丘市",
        "parentId": "3206",
        "pinyin": "anqiushi",
        "initial": "A"
    },
    {
        "id": "33",
        "title": "安徽省",
        "parentId": null,
        "pinyin": "anhuisheng",
        "initial": "A"
    },
    {
        "id": "3307",
        "title": "安庆市",
        "parentId": "33",
        "pinyin": "anqingshi",
        "initial": "A"
    },
    {
        "id": "340407",
        "title": "安溪县",
        "parentId": "3404",
        "pinyin": "anxixian",
        "initial": "A"
    },
    {
        "id": "350506",
        "title": "安吉县",
        "parentId": "3505",
        "pinyin": "anjixian",
        "initial": "A"
    },
    {
        "id": "360109",
        "title": "安义县",
        "parentId": "3601",
        "pinyin": "anyixian",
        "initial": "A"
    },
    {
        "id": "360302",
        "title": "安源区",
        "parentId": "3603",
        "pinyin": "anyuanqu",
        "initial": "A"
    },
    {
        "id": "360708",
        "title": "安远县",
        "parentId": "3607",
        "pinyin": "anyuanxian",
        "initial": "A"
    },
    {
        "id": "360812",
        "title": "安福县",
        "parentId": "3608",
        "pinyin": "anfuxian",
        "initial": "A"
    },
    {
        "id": "610306",
        "title": "安县",
        "parentId": "6103",
        "pinyin": "anxian",
        "initial": "A"
    },
    {
        "id": "611203",
        "title": "安居区",
        "parentId": "6112",
        "pinyin": "anjuqu",
        "initial": "A"
    },
    {
        "id": "611703",
        "title": "安岳县",
        "parentId": "6117",
        "pinyin": "anyuexian",
        "initial": "A"
    },
    {
        "id": "6118",
        "title": "阿坝州",
        "parentId": "61",
        "pinyin": "abazhou",
        "initial": "A"
    },
    {
        "id": "611811",
        "title": "阿坝县",
        "parentId": "6118",
        "pinyin": "abaxian",
        "initial": "A"
    },
    {
        "id": "620115",
        "title": "安宁市",
        "parentId": "6201",
        "pinyin": "anningshi",
        "initial": "A"
    },
    {
        "id": "6304",
        "title": "安顺市",
        "parentId": "63",
        "pinyin": "anshunshi",
        "initial": "A"
    },
    {
        "id": "630508",
        "title": "安龙县",
        "parentId": "6305",
        "pinyin": "anlongxian",
        "initial": "A"
    },
    {
        "id": "640207",
        "title": "昂仁县",
        "parentId": "6402",
        "pinyin": "angrenxian",
        "initial": "A"
    },
    {
        "id": "640605",
        "title": "安多县",
        "parentId": "6406",
        "pinyin": "anduoxian",
        "initial": "A"
    },
    {
        "id": "6407",
        "title": "阿里地区",
        "parentId": "64",
        "pinyin": "alidiqu",
        "initial": "A"
    },
    {
        "id": "7004",
        "title": "安阳市",
        "parentId": "70",
        "pinyin": "anyangshi",
        "initial": "A"
    },
    {
        "id": "700406",
        "title": "安阳县",
        "parentId": "7004",
        "pinyin": "anyangxian",
        "initial": "A"
    },
    {
        "id": "710907",
        "title": "安陆市",
        "parentId": "7109",
        "pinyin": "anlushi",
        "initial": "A"
    },
    {
        "id": "720506",
        "title": "安化县",
        "parentId": "7205",
        "pinyin": "anhuaxian",
        "initial": "A"
    },
    {
        "id": "720604",
        "title": "安乡县",
        "parentId": "7206",
        "pinyin": "anxiangxian",
        "initial": "A"
    },
    {
        "id": "720911",
        "title": "安仁县",
        "parentId": "7209",
        "pinyin": "anrenxian",
        "initial": "A"
    },
    {
        "id": "800506",
        "title": "安塞县",
        "parentId": "8005",
        "pinyin": "ansaixian",
        "initial": "A"
    },
    {
        "id": "8009",
        "title": "安康市",
        "parentId": "80",
        "pinyin": "ankangshi",
        "initial": "A"
    },
    {
        "id": "8303",
        "title": "阿勒泰地区",
        "parentId": "83",
        "pinyin": "aletaidiqu",
        "initial": "A"
    },
    {
        "id": "830301",
        "title": "阿勒泰市",
        "parentId": "8303",
        "pinyin": "aletaishi",
        "initial": "A"
    },
    {
        "id": "8311",
        "title": "阿克苏地区",
        "parentId": "83",
        "pinyin": "akesudiqu",
        "initial": "A"
    },
    {
        "id": "831101",
        "title": "阿克苏市",
        "parentId": "8311",
        "pinyin": "akesushi",
        "initial": "A"
    },
    {
        "id": "831108",
        "title": "阿瓦提县",
        "parentId": "8311",
        "pinyin": "awatixian",
        "initial": "A"
    },
    {
        "id": "831201",
        "title": "阿图什市",
        "parentId": "8312",
        "pinyin": "atushishi",
        "initial": "A"
    },
    {
        "id": "831202",
        "title": "阿克陶县",
        "parentId": "8312",
        "pinyin": "aketaoxian",
        "initial": "A"
    },
    {
        "id": "831203",
        "title": "阿合奇县",
        "parentId": "8312",
        "pinyin": "aheqixian",
        "initial": "A"
    },
    {
        "id": "8317",
        "title": "阿拉尔市",
        "parentId": "83",
        "pinyin": "alaershi",
        "initial": "A"
    },
    {
        "id": "840105",
        "title": "安宁区",
        "parentId": "8401",
        "pinyin": "anningqu",
        "initial": "A"
    },
    {
        "id": "840606",
        "title": "阿克塞县",
        "parentId": "8406",
        "pinyin": "akesaixian",
        "initial": "A"
    },
    {
        "id": "841102",
        "title": "安定区",
        "parentId": "8411",
        "pinyin": "andingqu",
        "initial": "A"
    },
    {
        "id": "91",
        "title": "澳门",
        "parentId": null,
        "pinyin": "aomen",
        "initial": "A"
    },
    {
        "id": "10",
        "title": "北京市",
        "parentId": "0",
        "pinyin": "beijingshi",
        "initial": "B"
    },
    {
        "id": "1107",
        "title": "滨海新区",
        "parentId": "11",
        "pinyin": "binhaixinqu",
        "initial": "B"
    },
    {
        "id": "1113",
        "title": "北辰区",
        "parentId": "11",
        "pinyin": "beichenqu",
        "initial": "B"
    },
    {
        "id": "1115",
        "title": "宝坻区",
        "parentId": "11",
        "pinyin": "baozuoqu",
        "initial": "B"
    },
    {
        "id": "120204",
        "title": "北戴河区",
        "parentId": "1202",
        "pinyin": "beidaihequ",
        "initial": "B"
    },
    {
        "id": "120510",
        "title": "霸州市",
        "parentId": "1205",
        "pinyin": "bazhoushi",
        "initial": "B"
    },
    {
        "id": "1207",
        "title": "保定市",
        "parentId": "12",
        "pinyin": "baodingshi",
        "initial": "B"
    },
    {
        "id": "120702",
        "title": "北市区",
        "parentId": "1207",
        "pinyin": "beishiqu",
        "initial": "B"
    },
    {
        "id": "120721",
        "title": "博野县",
        "parentId": "1207",
        "pinyin": "boyexian",
        "initial": "B"
    },
    {
        "id": "120907",
        "title": "柏乡县",
        "parentId": "1209",
        "pinyin": "baixiangxian",
        "initial": "B"
    },
    {
        "id": "121014",
        "title": "泊头市",
        "parentId": "1210",
        "pinyin": "botoushi",
        "initial": "B"
    },
    {
        "id": "1302",
        "title": "包头市",
        "parentId": "13",
        "pinyin": "baotoushi",
        "initial": "B"
    },
    {
        "id": "130206",
        "title": "白云鄂博",
        "parentId": "1302",
        "pinyin": "baiyunebo",
        "initial": "B"
    },
    {
        "id": "130606",
        "title": "巴林左旗",
        "parentId": "1306",
        "pinyin": "balinzuoqi",
        "initial": "B"
    },
    {
        "id": "130607",
        "title": "巴林右旗",
        "parentId": "1306",
        "pinyin": "balinyouqi",
        "initial": "B"
    },
    {
        "id": "1310",
        "title": "巴彦淖尔市",
        "parentId": "13",
        "pinyin": "bayannaoershi",
        "initial": "B"
    },
    {
        "id": "140713",
        "title": "保德县",
        "parentId": "1407",
        "pinyin": "baodexian",
        "initial": "B"
    },
    {
        "id": "200408",
        "title": "北镇市",
        "parentId": "2004",
        "pinyin": "beizhenshi",
        "initial": "B"
    },
    {
        "id": "201002",
        "title": "白塔区",
        "parentId": "2010",
        "pinyin": "baitaqu",
        "initial": "B"
    },
    {
        "id": "2012",
        "title": "本溪市",
        "parentId": "20",
        "pinyin": "benxishi",
        "initial": "B"
    },
    {
        "id": "201206",
        "title": "本溪县",
        "parentId": "2012",
        "pinyin": "benxixian",
        "initial": "B"
    },
    {
        "id": "201307",
        "title": "北票市",
        "parentId": "2013",
        "pinyin": "beipiaoshi",
        "initial": "B"
    },
    {
        "id": "2106",
        "title": "白山市",
        "parentId": "21",
        "pinyin": "baishanshi",
        "initial": "B"
    },
    {
        "id": "210602",
        "title": "八道江区",
        "parentId": "2106",
        "pinyin": "badaojiangqu",
        "initial": "B"
    },
    {
        "id": "2108",
        "title": "白城市",
        "parentId": "21",
        "pinyin": "baichengshi",
        "initial": "B"
    },
    {
        "id": "220112",
        "title": "宾县",
        "parentId": "2201",
        "pinyin": "binxian",
        "initial": "B"
    },
    {
        "id": "220113",
        "title": "巴彦县",
        "parentId": "2201",
        "pinyin": "bayanxian",
        "initial": "B"
    },
    {
        "id": "220216",
        "title": "拜泉县",
        "parentId": "2202",
        "pinyin": "baiquanxian",
        "initial": "B"
    },
    {
        "id": "220505",
        "title": "宝山区",
        "parentId": "2205",
        "pinyin": "baoshanqu",
        "initial": "B"
    },
    {
        "id": "220508",
        "title": "宝清县",
        "parentId": "2205",
        "pinyin": "baoqingxian",
        "initial": "B"
    },
    {
        "id": "220905",
        "title": "勃利县",
        "parentId": "2209",
        "pinyin": "bolixian",
        "initial": "B"
    },
    {
        "id": "221106",
        "title": "北安市",
        "parentId": "2211",
        "pinyin": "beianshi",
        "initial": "B"
    },
    {
        "id": "221202",
        "title": "北林区",
        "parentId": "2212",
        "pinyin": "beilinqu",
        "initial": "B"
    },
    {
        "id": "3001",
        "title": "宝山区",
        "parentId": "30",
        "pinyin": "baoshanqu",
        "initial": "B"
    },
    {
        "id": "310103",
        "title": "白下区",
        "parentId": "3101",
        "pinyin": "baixiaqu",
        "initial": "B"
    },
    {
        "id": "310304",
        "title": "北塘区",
        "parentId": "3103",
        "pinyin": "beitangqu",
        "initial": "B"
    },
    {
        "id": "310307",
        "title": "滨湖区",
        "parentId": "3103",
        "pinyin": "binhuqu",
        "initial": "B"
    },
    {
        "id": "310505",
        "title": "宝应县",
        "parentId": "3105",
        "pinyin": "baoyingxian",
        "initial": "B"
    },
    {
        "id": "311005",
        "title": "滨海县",
        "parentId": "3110",
        "pinyin": "binhaixian",
        "initial": "B"
    },
    {
        "id": "320404",
        "title": "博山区",
        "parentId": "3204",
        "pinyin": "boshanqu",
        "initial": "B"
    },
    {
        "id": "3213",
        "title": "滨州市",
        "parentId": "32",
        "pinyin": "binzhoushi",
        "initial": "B"
    },
    {
        "id": "321302",
        "title": "滨城区",
        "parentId": "3213",
        "pinyin": "binchengqu",
        "initial": "B"
    },
    {
        "id": "321307",
        "title": "博兴县",
        "parentId": "3213",
        "pinyin": "boxingxian",
        "initial": "B"
    },
    {
        "id": "330105",
        "title": "包河区",
        "parentId": "3301",
        "pinyin": "baohequ",
        "initial": "B"
    },
    {
        "id": "3303",
        "title": "蚌埠市",
        "parentId": "33",
        "pinyin": "bangbushi",
        "initial": "B"
    },
    {
        "id": "330303",
        "title": "蚌山区",
        "parentId": "3303",
        "pinyin": "bangshanqu",
        "initial": "B"
    },
    {
        "id": "331205",
        "title": "八公山区",
        "parentId": "3312",
        "pinyin": "bagongshanqu",
        "initial": "B"
    },
    {
        "id": "350107",
        "title": "滨江区",
        "parentId": "3501",
        "pinyin": "binjiangqu",
        "initial": "B"
    },
    {
        "id": "350205",
        "title": "北仑区",
        "parentId": "3502",
        "pinyin": "beilunqu",
        "initial": "B"
    },
    {
        "id": "400106",
        "title": "白云区",
        "parentId": "4001",
        "pinyin": "baiyunqu",
        "initial": "B"
    },
    {
        "id": "400205",
        "title": "宝安区",
        "parentId": "4002",
        "pinyin": "baoanqu",
        "initial": "B"
    },
    {
        "id": "400804",
        "title": "博罗县",
        "parentId": "4008",
        "pinyin": "boluoxian",
        "initial": "B"
    },
    {
        "id": "410112",
        "title": "宾阳县",
        "parentId": "4101",
        "pinyin": "binyangxian",
        "initial": "B"
    },
    {
        "id": "4105",
        "title": "北海市",
        "parentId": "41",
        "pinyin": "beihaishi",
        "initial": "B"
    },
    {
        "id": "410905",
        "title": "博白县",
        "parentId": "4109",
        "pinyin": "bobaixian",
        "initial": "B"
    },
    {
        "id": "410907",
        "title": "北流市",
        "parentId": "4109",
        "pinyin": "beiliushi",
        "initial": "B"
    },
    {
        "id": "4110",
        "title": "百色市",
        "parentId": "41",
        "pinyin": "baiseshi",
        "initial": "B"
    },
    {
        "id": "411102",
        "title": "八步区",
        "parentId": "4111",
        "pinyin": "babuqu",
        "initial": "B"
    },
    {
        "id": "411209",
        "title": "巴马县",
        "parentId": "4112",
        "pinyin": "bamaxian",
        "initial": "B"
    },
    {
        "id": "4215",
        "title": "保亭县",
        "parentId": "42",
        "pinyin": "baotingxian",
        "initial": "B"
    },
    {
        "id": "4218",
        "title": "白沙县",
        "parentId": "42",
        "pinyin": "baishaxian",
        "initial": "B"
    },
    {
        "id": "6009",
        "title": "北碚区",
        "parentId": "60",
        "pinyin": "beizuoqu",
        "initial": "B"
    },
    {
        "id": "6013",
        "title": "巴南区",
        "parentId": "60",
        "pinyin": "bananqu",
        "initial": "B"
    },
    {
        "id": "610308",
        "title": "北川县",
        "parentId": "6103",
        "pinyin": "beichuanxian",
        "initial": "B"
    },
    {
        "id": "611109",
        "title": "宝兴县",
        "parentId": "6111",
        "pinyin": "baoxingxian",
        "initial": "B"
    },
    {
        "id": "6114",
        "title": "巴中市",
        "parentId": "61",
        "pinyin": "bazhongshi",
        "initial": "B"
    },
    {
        "id": "611402",
        "title": "巴州区",
        "parentId": "6114",
        "pinyin": "bazhouqu",
        "initial": "B"
    },
    {
        "id": "612011",
        "title": "白玉县",
        "parentId": "6120",
        "pinyin": "baiyuxian",
        "initial": "B"
    },
    {
        "id": "612015",
        "title": "巴塘县",
        "parentId": "6120",
        "pinyin": "batangxian",
        "initial": "B"
    },
    {
        "id": "612109",
        "title": "布拖县",
        "parentId": "6121",
        "pinyin": "butuoxian",
        "initial": "B"
    },
    {
        "id": "621204",
        "title": "宾川县",
        "parentId": "6212",
        "pinyin": "binchuanxian",
        "initial": "B"
    },
    {
        "id": "6213",
        "title": "保山市",
        "parentId": "62",
        "pinyin": "baoshanshi",
        "initial": "B"
    },
    {
        "id": "630106",
        "title": "白云区",
        "parentId": "6301",
        "pinyin": "baiyunqu",
        "initial": "B"
    },
    {
        "id": "6308",
        "title": "毕节地区",
        "parentId": "63",
        "pinyin": "bijiediqu",
        "initial": "B"
    },
    {
        "id": "630801",
        "title": "毕节市",
        "parentId": "6308",
        "pinyin": "bijieshi",
        "initial": "B"
    },
    {
        "id": "640209",
        "title": "白朗县",
        "parentId": "6402",
        "pinyin": "bailangxian",
        "initial": "B"
    },
    {
        "id": "640405",
        "title": "波密县",
        "parentId": "6404",
        "pinyin": "bomixian",
        "initial": "B"
    },
    {
        "id": "640507",
        "title": "八宿县",
        "parentId": "6405",
        "pinyin": "basuxian",
        "initial": "B"
    },
    {
        "id": "640511",
        "title": "边坝县",
        "parentId": "6405",
        "pinyin": "bianbaxian",
        "initial": "B"
    },
    {
        "id": "640603",
        "title": "比如县",
        "parentId": "6406",
        "pinyin": "biruxian",
        "initial": "B"
    },
    {
        "id": "640608",
        "title": "班戈县",
        "parentId": "6406",
        "pinyin": "bangexian",
        "initial": "B"
    },
    {
        "id": "640609",
        "title": "巴青县",
        "parentId": "6406",
        "pinyin": "baqingxian",
        "initial": "B"
    },
    {
        "id": "700403",
        "title": "北关区",
        "parentId": "7004",
        "pinyin": "beiguanqu",
        "initial": "B"
    },
    {
        "id": "700707",
        "title": "博爱县",
        "parentId": "7007",
        "pinyin": "boaixian",
        "initial": "B"
    },
    {
        "id": "701306",
        "title": "宝丰县",
        "parentId": "7013",
        "pinyin": "baofengxian",
        "initial": "B"
    },
    {
        "id": "710307",
        "title": "保康县",
        "parentId": "7103",
        "pinyin": "baokangxian",
        "initial": "B"
    },
    {
        "id": "711304",
        "title": "巴东县",
        "parentId": "7113",
        "pinyin": "badongxian",
        "initial": "B"
    },
    {
        "id": "720804",
        "title": "北塔区",
        "parentId": "7208",
        "pinyin": "beitaqu",
        "initial": "B"
    },
    {
        "id": "720902",
        "title": "北湖区",
        "parentId": "7209",
        "pinyin": "beihuqu",
        "initial": "B"
    },
    {
        "id": "721405",
        "title": "保靖县",
        "parentId": "7214",
        "pinyin": "baojingxian",
        "initial": "B"
    },
    {
        "id": "800103",
        "title": "碑林区",
        "parentId": "8001",
        "pinyin": "beilinqu",
        "initial": "B"
    },
    {
        "id": "8002",
        "title": "宝鸡市",
        "parentId": "80",
        "pinyin": "baojishi",
        "initial": "B"
    },
    {
        "id": "800310",
        "title": "彬县",
        "parentId": "8003",
        "pinyin": "binxian",
        "initial": "B"
    },
    {
        "id": "800409",
        "title": "白水县",
        "parentId": "8004",
        "pinyin": "baishuixian",
        "initial": "B"
    },
    {
        "id": "800502",
        "title": "宝塔区",
        "parentId": "8005",
        "pinyin": "baotaqu",
        "initial": "B"
    },
    {
        "id": "800911",
        "title": "白河县",
        "parentId": "8009",
        "pinyin": "baihexian",
        "initial": "B"
    },
    {
        "id": "810702",
        "title": "班玛县",
        "parentId": "8107",
        "pinyin": "banmaxian",
        "initial": "B"
    },
    {
        "id": "830302",
        "title": "布尔津县",
        "parentId": "8303",
        "pinyin": "buerjinxian",
        "initial": "B"
    },
    {
        "id": "8305",
        "title": "博尔塔拉",
        "parentId": "83",
        "pinyin": "boertala",
        "initial": "B"
    },
    {
        "id": "830501",
        "title": "博乐市",
        "parentId": "8305",
        "pinyin": "boleshi",
        "initial": "B"
    },
    {
        "id": "8308",
        "title": "巴音郭楞",
        "parentId": "83",
        "pinyin": "bayinguoleng",
        "initial": "B"
    },
    {
        "id": "830809",
        "title": "博湖县",
        "parentId": "8308",
        "pinyin": "bohuxian",
        "initial": "B"
    },
    {
        "id": "830902",
        "title": "巴里坤县",
        "parentId": "8309",
        "pinyin": "balikunxian",
        "initial": "B"
    },
    {
        "id": "831106",
        "title": "拜城县",
        "parentId": "8311",
        "pinyin": "baichengxian",
        "initial": "B"
    },
    {
        "id": "831311",
        "title": "巴楚县",
        "parentId": "8313",
        "pinyin": "bachuxian",
        "initial": "B"
    },
    {
        "id": "831404",
        "title": "白碱滩区",
        "parentId": "8314",
        "pinyin": "baijiantanqu",
        "initial": "B"
    },
    {
        "id": "8410",
        "title": "白银市",
        "parentId": "84",
        "pinyin": "baiyinshi",
        "initial": "B"
    },
    {
        "id": "841002",
        "title": "白银区",
        "parentId": "8410",
        "pinyin": "baiyinqu",
        "initial": "B"
    },
    {
        "id": "1005",
        "title": "朝阳区",
        "parentId": "10",
        "pinyin": "chaoyangqu",
        "initial": "C"
    },
    {
        "id": "1010",
        "title": "昌平区",
        "parentId": "10",
        "pinyin": "changpingqu",
        "initial": "C"
    },
    {
        "id": "120102",
        "title": "长安区",
        "parentId": "1201",
        "pinyin": "changanqu",
        "initial": "C"
    },
    {
        "id": "120206",
        "title": "昌黎县",
        "parentId": "1202",
        "pinyin": "changlixian",
        "initial": "C"
    },
    {
        "id": "120417",
        "title": "赤城县",
        "parentId": "1204",
        "pinyin": "chichengxian",
        "initial": "C"
    },
    {
        "id": "120418",
        "title": "崇礼县",
        "parentId": "1204",
        "pinyin": "chonglixian",
        "initial": "C"
    },
    {
        "id": "1208",
        "title": "承德市",
        "parentId": "12",
        "pinyin": "chengdeshi",
        "initial": "C"
    },
    {
        "id": "120805",
        "title": "承德县",
        "parentId": "1208",
        "pinyin": "chengdexian",
        "initial": "C"
    },
    {
        "id": "1210",
        "title": "沧州市",
        "parentId": "12",
        "pinyin": "cangzhoushi",
        "initial": "C"
    },
    {
        "id": "121004",
        "title": "沧县",
        "parentId": "1210",
        "pinyin": "cangxian",
        "initial": "C"
    },
    {
        "id": "121103",
        "title": "丛台区",
        "parentId": "1211",
        "pinyin": "congtaiqu",
        "initial": "C"
    },
    {
        "id": "121108",
        "title": "成安县",
        "parentId": "1211",
        "pinyin": "chenganxian",
        "initial": "C"
    },
    {
        "id": "121111",
        "title": "磁县",
        "parentId": "1211",
        "pinyin": "cixian",
        "initial": "C"
    },
    {
        "id": "130307",
        "title": "陈巴尔虎旗",
        "parentId": "1303",
        "pinyin": "chenbaerhuqi",
        "initial": "C"
    },
    {
        "id": "1306",
        "title": "赤峰市",
        "parentId": "13",
        "pinyin": "chifengshi",
        "initial": "C"
    },
    {
        "id": "130808",
        "title": "察右前旗",
        "parentId": "1308",
        "pinyin": "chayouqianqi",
        "initial": "C"
    },
    {
        "id": "130809",
        "title": "察右中旗",
        "parentId": "1308",
        "pinyin": "chayouzhongqi",
        "initial": "C"
    },
    {
        "id": "130810",
        "title": "察右后旗",
        "parentId": "1308",
        "pinyin": "chayouhouqi",
        "initial": "C"
    },
    {
        "id": "140202",
        "title": "城区",
        "parentId": "1402",
        "pinyin": "chengqu",
        "initial": "C"
    },
    {
        "id": "140302",
        "title": "城区",
        "parentId": "1403",
        "pinyin": "chengqu",
        "initial": "C"
    },
    {
        "id": "1404",
        "title": "长治市",
        "parentId": "14",
        "pinyin": "changzhishi",
        "initial": "C"
    },
    {
        "id": "140402",
        "title": "城区",
        "parentId": "1404",
        "pinyin": "chengqu",
        "initial": "C"
    },
    {
        "id": "140404",
        "title": "长治县",
        "parentId": "1404",
        "pinyin": "changzhixian",
        "initial": "C"
    },
    {
        "id": "140410",
        "title": "长子县",
        "parentId": "1404",
        "pinyin": "changzixian",
        "initial": "C"
    },
    {
        "id": "140502",
        "title": "城区",
        "parentId": "1405",
        "pinyin": "chengqu",
        "initial": "C"
    },
    {
        "id": "200208",
        "title": "长海县",
        "parentId": "2002",
        "pinyin": "changhaixian",
        "initial": "C"
    },
    {
        "id": "200706",
        "title": "昌图县",
        "parentId": "2007",
        "pinyin": "changtuxian",
        "initial": "C"
    },
    {
        "id": "2013",
        "title": "朝阳市",
        "parentId": "20",
        "pinyin": "chaoyangshi",
        "initial": "C"
    },
    {
        "id": "201304",
        "title": "朝阳县",
        "parentId": "2013",
        "pinyin": "chaoyangxian",
        "initial": "C"
    },
    {
        "id": "2101",
        "title": "长春市",
        "parentId": "21",
        "pinyin": "changchunshi",
        "initial": "C"
    },
    {
        "id": "210104",
        "title": "朝阳区",
        "parentId": "2101",
        "pinyin": "chaoyangqu",
        "initial": "C"
    },
    {
        "id": "210202",
        "title": "昌邑区",
        "parentId": "2102",
        "pinyin": "changyiqu",
        "initial": "C"
    },
    {
        "id": "210204",
        "title": "船营区",
        "parentId": "2102",
        "pinyin": "chuanyingqu",
        "initial": "C"
    },
    {
        "id": "210606",
        "title": "长白县",
        "parentId": "2106",
        "pinyin": "changbaixian",
        "initial": "C"
    },
    {
        "id": "210704",
        "title": "长岭县",
        "parentId": "2107",
        "pinyin": "changlingxian",
        "initial": "C"
    },
    {
        "id": "220306",
        "title": "城子河区",
        "parentId": "2203",
        "pinyin": "chengzihequ",
        "initial": "C"
    },
    {
        "id": "220706",
        "title": "翠峦区",
        "parentId": "2207",
        "pinyin": "cuiluanqu",
        "initial": "C"
    },
    {
        "id": "3004",
        "title": "长宁区",
        "parentId": "30",
        "pinyin": "changningqu",
        "initial": "C"
    },
    {
        "id": "3007",
        "title": "崇明县",
        "parentId": "30",
        "pinyin": "chongmingxian",
        "initial": "C"
    },
    {
        "id": "310202",
        "title": "沧浪区",
        "parentId": "3102",
        "pinyin": "canglangqu",
        "initial": "C"
    },
    {
        "id": "310208",
        "title": "常熟市",
        "parentId": "3102",
        "pinyin": "changshushi",
        "initial": "C"
    },
    {
        "id": "310302",
        "title": "崇安区",
        "parentId": "3103",
        "pinyin": "chonganqu",
        "initial": "C"
    },
    {
        "id": "310602",
        "title": "崇川区",
        "parentId": "3106",
        "pinyin": "chongchuanqu",
        "initial": "C"
    },
    {
        "id": "3107",
        "title": "常州市",
        "parentId": "31",
        "pinyin": "changzhoushi",
        "initial": "C"
    },
    {
        "id": "311103",
        "title": "楚州区",
        "parentId": "3111",
        "pinyin": "chuzhouqu",
        "initial": "C"
    },
    {
        "id": "320107",
        "title": "长清区",
        "parentId": "3201",
        "pinyin": "changqingqu",
        "initial": "C"
    },
    {
        "id": "320208",
        "title": "城阳区",
        "parentId": "3202",
        "pinyin": "chengyangqu",
        "initial": "C"
    },
    {
        "id": "320306",
        "title": "长岛县",
        "parentId": "3203",
        "pinyin": "changdaoxian",
        "initial": "C"
    },
    {
        "id": "320607",
        "title": "昌乐县",
        "parentId": "3206",
        "pinyin": "changlexian",
        "initial": "C"
    },
    {
        "id": "320613",
        "title": "昌邑市",
        "parentId": "3206",
        "pinyin": "changyishi",
        "initial": "C"
    },
    {
        "id": "321603",
        "title": "曹县",
        "parentId": "3216",
        "pinyin": "caoxian",
        "initial": "C"
    },
    {
        "id": "321605",
        "title": "成武县",
        "parentId": "3216",
        "pinyin": "chengwuxian",
        "initial": "C"
    },
    {
        "id": "321708",
        "title": "苍山县",
        "parentId": "3217",
        "pinyin": "cangshanxian",
        "initial": "C"
    },
    {
        "id": "330106",
        "title": "长丰县",
        "parentId": "3301",
        "pinyin": "changfengxian",
        "initial": "C"
    },
    {
        "id": "3309",
        "title": "滁州市",
        "parentId": "33",
        "pinyin": "chuzhoushi",
        "initial": "C"
    },
    {
        "id": "3311",
        "title": "池州市",
        "parentId": "33",
        "pinyin": "chizhoushi",
        "initial": "C"
    },
    {
        "id": "3313",
        "title": "巢湖市",
        "parentId": "33",
        "pinyin": "chaohushi",
        "initial": "C"
    },
    {
        "id": "340104",
        "title": "仓山区",
        "parentId": "3401",
        "pinyin": "cangshanqu",
        "initial": "C"
    },
    {
        "id": "340114",
        "title": "长乐市",
        "parentId": "3401",
        "pinyin": "changleshi",
        "initial": "C"
    },
    {
        "id": "340307",
        "title": "长泰县",
        "parentId": "3403",
        "pinyin": "changtaixian",
        "initial": "C"
    },
    {
        "id": "340502",
        "title": "城厢区",
        "parentId": "3405",
        "pinyin": "chengxiangqu",
        "initial": "C"
    },
    {
        "id": "340803",
        "title": "长汀县",
        "parentId": "3408",
        "pinyin": "changtingxian",
        "initial": "C"
    },
    {
        "id": "350111",
        "title": "淳安县",
        "parentId": "3501",
        "pinyin": "chunanxian",
        "initial": "C"
    },
    {
        "id": "350211",
        "title": "慈溪市",
        "parentId": "3502",
        "pinyin": "cixishi",
        "initial": "C"
    },
    {
        "id": "350308",
        "title": "苍南县",
        "parentId": "3503",
        "pinyin": "cangnanxian",
        "initial": "C"
    },
    {
        "id": "350505",
        "title": "长兴县",
        "parentId": "3505",
        "pinyin": "changxingxian",
        "initial": "C"
    },
    {
        "id": "350804",
        "title": "常山县",
        "parentId": "3508",
        "pinyin": "changshanxian",
        "initial": "C"
    },
    {
        "id": "360202",
        "title": "昌江区",
        "parentId": "3602",
        "pinyin": "changjiangqu",
        "initial": "C"
    },
    {
        "id": "360707",
        "title": "崇义县",
        "parentId": "3607",
        "pinyin": "chongyixian",
        "initial": "C"
    },
    {
        "id": "361006",
        "title": "崇仁县",
        "parentId": "3610",
        "pinyin": "chongrenxian",
        "initial": "C"
    },
    {
        "id": "400113",
        "title": "从化市",
        "parentId": "4001",
        "pinyin": "conghuashi",
        "initial": "C"
    },
    {
        "id": "400405",
        "title": "潮阳区",
        "parentId": "4004",
        "pinyin": "chaoyangqu",
        "initial": "C"
    },
    {
        "id": "400406",
        "title": "潮南区",
        "parentId": "4004",
        "pinyin": "chaonanqu",
        "initial": "C"
    },
    {
        "id": "400407",
        "title": "澄海区",
        "parentId": "4004",
        "pinyin": "chenghaiqu",
        "initial": "C"
    },
    {
        "id": "400902",
        "title": "城区",
        "parentId": "4009",
        "pinyin": "chengqu",
        "initial": "C"
    },
    {
        "id": "401502",
        "title": "赤坎区",
        "parentId": "4015",
        "pinyin": "chikanqu",
        "initial": "C"
    },
    {
        "id": "4019",
        "title": "潮州市",
        "parentId": "40",
        "pinyin": "chaozhoushi",
        "initial": "C"
    },
    {
        "id": "401903",
        "title": "潮安县",
        "parentId": "4019",
        "pinyin": "chaoanxian",
        "initial": "C"
    },
    {
        "id": "410202",
        "title": "城中区",
        "parentId": "4102",
        "pinyin": "chengzhongqu",
        "initial": "C"
    },
    {
        "id": "410404",
        "title": "长洲区",
        "parentId": "4104",
        "pinyin": "changzhouqu",
        "initial": "C"
    },
    {
        "id": "410405",
        "title": "苍梧县",
        "parentId": "4104",
        "pinyin": "cangwuxian",
        "initial": "C"
    },
    {
        "id": "4114",
        "title": "崇左市",
        "parentId": "41",
        "pinyin": "chongzuoshi",
        "initial": "C"
    },
    {
        "id": "4211",
        "title": "澄迈县",
        "parentId": "42",
        "pinyin": "chengmaixian",
        "initial": "C"
    },
    {
        "id": "4217",
        "title": "昌江县",
        "parentId": "42",
        "pinyin": "changjiangxian",
        "initial": "C"
    },
    {
        "id": "60",
        "title": "重庆市",
        "parentId": "0",
        "pinyin": "chongqingshi",
        "initial": "C"
    },
    {
        "id": "6015",
        "title": "长寿区",
        "parentId": "60",
        "pinyin": "changshouqu",
        "initial": "C"
    },
    {
        "id": "6027",
        "title": "城口县",
        "parentId": "60",
        "pinyin": "chengkouxian",
        "initial": "C"
    },
    {
        "id": "6101",
        "title": "成都市",
        "parentId": "61",
        "pinyin": "chengdushi",
        "initial": "C"
    },
    {
        "id": "610106",
        "title": "成华区",
        "parentId": "6101",
        "pinyin": "chenghuaqu",
        "initial": "C"
    },
    {
        "id": "610120",
        "title": "崇州市",
        "parentId": "6101",
        "pinyin": "chongzhoushi",
        "initial": "C"
    },
    {
        "id": "610902",
        "title": "翠屏区",
        "parentId": "6109",
        "pinyin": "cuipingqu",
        "initial": "C"
    },
    {
        "id": "610906",
        "title": "长宁县",
        "parentId": "6109",
        "pinyin": "changningxian",
        "initial": "C"
    },
    {
        "id": "611202",
        "title": "船山区",
        "parentId": "6112",
        "pinyin": "chuanshanqu",
        "initial": "C"
    },
    {
        "id": "611504",
        "title": "朝天区",
        "parentId": "6115",
        "pinyin": "chaotianqu",
        "initial": "C"
    },
    {
        "id": "611508",
        "title": "苍溪县",
        "parentId": "6115",
        "pinyin": "cangxixian",
        "initial": "C"
    },
    {
        "id": "620107",
        "title": "呈贡县",
        "parentId": "6201",
        "pinyin": "chenggongxian",
        "initial": "C"
    },
    {
        "id": "620304",
        "title": "澄江县",
        "parentId": "6203",
        "pinyin": "chengjiangxian",
        "initial": "C"
    },
    {
        "id": "6205",
        "title": "楚雄州",
        "parentId": "62",
        "pinyin": "chuxiongzhou",
        "initial": "C"
    },
    {
        "id": "620501",
        "title": "楚雄市",
        "parentId": "6205",
        "pinyin": "chuxiongshi",
        "initial": "C"
    },
    {
        "id": "621306",
        "title": "昌宁县",
        "parentId": "6213",
        "pinyin": "changningxian",
        "initial": "C"
    },
    {
        "id": "621609",
        "title": "沧源县",
        "parentId": "6216",
        "pinyin": "cangyuanxian",
        "initial": "C"
    },
    {
        "id": "630214",
        "title": "赤水市",
        "parentId": "6302",
        "pinyin": "chishuishi",
        "initial": "C"
    },
    {
        "id": "630507",
        "title": "册亨县",
        "parentId": "6305",
        "pinyin": "cehengxian",
        "initial": "C"
    },
    {
        "id": "630609",
        "title": "长顺县",
        "parentId": "6306",
        "pinyin": "changshunxian",
        "initial": "C"
    },
    {
        "id": "630913",
        "title": "从江县",
        "parentId": "6309",
        "pinyin": "congjiangxian",
        "initial": "C"
    },
    {
        "id": "640102",
        "title": "城关区",
        "parentId": "6401",
        "pinyin": "chengguanqu",
        "initial": "C"
    },
    {
        "id": "640307",
        "title": "措美县",
        "parentId": "6403",
        "pinyin": "cuomeixian",
        "initial": "C"
    },
    {
        "id": "640311",
        "title": "错那县",
        "parentId": "6403",
        "pinyin": "cuonaxian",
        "initial": "C"
    },
    {
        "id": "640406",
        "title": "察隅县",
        "parentId": "6404",
        "pinyin": "chayuxian",
        "initial": "C"
    },
    {
        "id": "6405",
        "title": "昌都地区",
        "parentId": "64",
        "pinyin": "changdudiqu",
        "initial": "C"
    },
    {
        "id": "640501",
        "title": "昌都县",
        "parentId": "6405",
        "pinyin": "changduxian",
        "initial": "C"
    },
    {
        "id": "640506",
        "title": "察雅县",
        "parentId": "6405",
        "pinyin": "chayaxian",
        "initial": "C"
    },
    {
        "id": "640707",
        "title": "措勤县",
        "parentId": "6407",
        "pinyin": "cuoqinxian",
        "initial": "C"
    },
    {
        "id": "700511",
        "title": "长垣县",
        "parentId": "7005",
        "pinyin": "changyuanxian",
        "initial": "C"
    },
    {
        "id": "701107",
        "title": "长葛市",
        "parentId": "7011",
        "pinyin": "changgeshi",
        "initial": "C"
    },
    {
        "id": "701502",
        "title": "川汇区",
        "parentId": "7015",
        "pinyin": "chuanhuiqu",
        "initial": "C"
    },
    {
        "id": "710104",
        "title": "楚口区",
        "parentId": "7101",
        "pinyin": "chukouqu",
        "initial": "C"
    },
    {
        "id": "710111",
        "title": "蔡甸区",
        "parentId": "7101",
        "pinyin": "caidianqu",
        "initial": "C"
    },
    {
        "id": "710610",
        "title": "长阳县",
        "parentId": "7106",
        "pinyin": "changyangxian",
        "initial": "C"
    },
    {
        "id": "711105",
        "title": "崇阳县",
        "parentId": "7111",
        "pinyin": "chongyangxian",
        "initial": "C"
    },
    {
        "id": "711107",
        "title": "赤壁市",
        "parentId": "7111",
        "pinyin": "chibishi",
        "initial": "C"
    },
    {
        "id": "7201",
        "title": "长沙市",
        "parentId": "72",
        "pinyin": "changshashi",
        "initial": "C"
    },
    {
        "id": "720107",
        "title": "长沙县",
        "parentId": "7201",
        "pinyin": "changshaxian",
        "initial": "C"
    },
    {
        "id": "720208",
        "title": "茶陵县",
        "parentId": "7202",
        "pinyin": "chalingxian",
        "initial": "C"
    },
    {
        "id": "720413",
        "title": "常宁市",
        "parentId": "7204",
        "pinyin": "changningshi",
        "initial": "C"
    },
    {
        "id": "7206",
        "title": "常德市",
        "parentId": "72",
        "pinyin": "changdeshi",
        "initial": "C"
    },
    {
        "id": "720812",
        "title": "城步县",
        "parentId": "7208",
        "pinyin": "chengbuxian",
        "initial": "C"
    },
    {
        "id": "7209",
        "title": "郴州市",
        "parentId": "72",
        "pinyin": "chenzhoushi",
        "initial": "C"
    },
    {
        "id": "721205",
        "title": "辰溪县",
        "parentId": "7212",
        "pinyin": "chenxixian",
        "initial": "C"
    },
    {
        "id": "721304",
        "title": "慈利县",
        "parentId": "7213",
        "pinyin": "cilixian",
        "initial": "C"
    },
    {
        "id": "800110",
        "title": "长安区",
        "parentId": "8001",
        "pinyin": "changanqu",
        "initial": "C"
    },
    {
        "id": "800204",
        "title": "陈仓区",
        "parentId": "8002",
        "pinyin": "chencangqu",
        "initial": "C"
    },
    {
        "id": "800311",
        "title": "长武县",
        "parentId": "8003",
        "pinyin": "changwuxian",
        "initial": "C"
    },
    {
        "id": "800313",
        "title": "淳化县",
        "parentId": "8003",
        "pinyin": "chunhuaxian",
        "initial": "C"
    },
    {
        "id": "800407",
        "title": "澄城县",
        "parentId": "8004",
        "pinyin": "chengchengxian",
        "initial": "C"
    },
    {
        "id": "800804",
        "title": "城固县",
        "parentId": "8008",
        "pinyin": "chengguxian",
        "initial": "C"
    },
    {
        "id": "810102",
        "title": "城东区",
        "parentId": "8101",
        "pinyin": "chengdongqu",
        "initial": "C"
    },
    {
        "id": "810103",
        "title": "城中区",
        "parentId": "8101",
        "pinyin": "chengzhongqu",
        "initial": "C"
    },
    {
        "id": "810104",
        "title": "城西区",
        "parentId": "8101",
        "pinyin": "chengxiqu",
        "initial": "C"
    },
    {
        "id": "810105",
        "title": "城北区",
        "parentId": "8101",
        "pinyin": "chengbeiqu",
        "initial": "C"
    },
    {
        "id": "810803",
        "title": "称多县",
        "parentId": "8108",
        "pinyin": "chengduoxian",
        "initial": "C"
    },
    {
        "id": "830204",
        "title": "察布查尔",
        "parentId": "8302",
        "pinyin": "chabuchaer",
        "initial": "C"
    },
    {
        "id": "8306",
        "title": "昌吉",
        "parentId": "83",
        "pinyin": "changji",
        "initial": "C"
    },
    {
        "id": "830601",
        "title": "昌吉市",
        "parentId": "8306",
        "pinyin": "changjishi",
        "initial": "C"
    },
    {
        "id": "831006",
        "title": "策勒县",
        "parentId": "8310",
        "pinyin": "celexian",
        "initial": "C"
    },
    {
        "id": "840102",
        "title": "城关区",
        "parentId": "8401",
        "pinyin": "chengguanqu",
        "initial": "C"
    },
    {
        "id": "840905",
        "title": "崇信县",
        "parentId": "8409",
        "pinyin": "chongxinxian",
        "initial": "C"
    },
    {
        "id": "841203",
        "title": "成县",
        "parentId": "8412",
        "pinyin": "chengxian",
        "initial": "C"
    },
    {
        "id": "1001",
        "title": "东城区",
        "parentId": "10",
        "pinyin": "dongchengqu",
        "initial": "D"
    },
    {
        "id": "1014",
        "title": "大兴区",
        "parentId": "10",
        "pinyin": "daxingqu",
        "initial": "D"
    },
    {
        "id": "1110",
        "title": "东丽区",
        "parentId": "11",
        "pinyin": "dongliqu",
        "initial": "D"
    },
    {
        "id": "120507",
        "title": "大城县",
        "parentId": "1205",
        "pinyin": "dachengxian",
        "initial": "D"
    },
    {
        "id": "120509",
        "title": "大厂县",
        "parentId": "1205",
        "pinyin": "dachangxian",
        "initial": "D"
    },
    {
        "id": "120710",
        "title": "定兴县",
        "parentId": "1207",
        "pinyin": "dingxingxian",
        "initial": "D"
    },
    {
        "id": "120724",
        "title": "定州市",
        "parentId": "1207",
        "pinyin": "dingzhoushi",
        "initial": "D"
    },
    {
        "id": "121006",
        "title": "东光县",
        "parentId": "1210",
        "pinyin": "dongguangxian",
        "initial": "D"
    },
    {
        "id": "121109",
        "title": "大名县",
        "parentId": "1211",
        "pinyin": "damingxian",
        "initial": "D"
    },
    {
        "id": "130202",
        "title": "东河区",
        "parentId": "1302",
        "pinyin": "donghequ",
        "initial": "D"
    },
    {
        "id": "130210",
        "title": "达茂联合旗",
        "parentId": "1302",
        "pinyin": "damaolianheqi",
        "initial": "D"
    },
    {
        "id": "130706",
        "title": "东乌珠穆沁旗",
        "parentId": "1307",
        "pinyin": "dongwuzhumuqinqi",
        "initial": "D"
    },
    {
        "id": "130712",
        "title": "多伦县",
        "parentId": "1307",
        "pinyin": "duolunxian",
        "initial": "D"
    },
    {
        "id": "130902",
        "title": "东胜区",
        "parentId": "1309",
        "pinyin": "dongshengqu",
        "initial": "D"
    },
    {
        "id": "130903",
        "title": "达拉特旗",
        "parentId": "1309",
        "pinyin": "dalateqi",
        "initial": "D"
    },
    {
        "id": "1402",
        "title": "大同市",
        "parentId": "14",
        "pinyin": "datongshi",
        "initial": "D"
    },
    {
        "id": "140212",
        "title": "大同县",
        "parentId": "1402",
        "pinyin": "datongxian",
        "initial": "D"
    },
    {
        "id": "140703",
        "title": "定襄县",
        "parentId": "1407",
        "pinyin": "dingxiangxian",
        "initial": "D"
    },
    {
        "id": "140705",
        "title": "代县",
        "parentId": "1407",
        "pinyin": "daixian",
        "initial": "D"
    },
    {
        "id": "140912",
        "title": "大宁县",
        "parentId": "1409",
        "pinyin": "daningxian",
        "initial": "D"
    },
    {
        "id": "200104",
        "title": "大东区",
        "parentId": "2001",
        "pinyin": "dadongqu",
        "initial": "D"
    },
    {
        "id": "200108",
        "title": "东陵区",
        "parentId": "2001",
        "pinyin": "donglingqu",
        "initial": "D"
    },
    {
        "id": "2002",
        "title": "大连市",
        "parentId": "20",
        "pinyin": "dalianshi",
        "initial": "D"
    },
    {
        "id": "2005",
        "title": "丹东市",
        "parentId": "20",
        "pinyin": "dandongshi",
        "initial": "D"
    },
    {
        "id": "200506",
        "title": "东港市",
        "parentId": "2005",
        "pinyin": "donggangshi",
        "initial": "D"
    },
    {
        "id": "200604",
        "title": "大洼县",
        "parentId": "2006",
        "pinyin": "dawaxian",
        "initial": "D"
    },
    {
        "id": "200707",
        "title": "调兵山市",
        "parentId": "2007",
        "pinyin": "diaobingshanshi",
        "initial": "D"
    },
    {
        "id": "200803",
        "title": "东洲区",
        "parentId": "2008",
        "pinyin": "dongzhouqu",
        "initial": "D"
    },
    {
        "id": "200907",
        "title": "大石桥市",
        "parentId": "2009",
        "pinyin": "dashiqiaoshi",
        "initial": "D"
    },
    {
        "id": "201008",
        "title": "灯塔市",
        "parentId": "2010",
        "pinyin": "dengtashi",
        "initial": "D"
    },
    {
        "id": "210111",
        "title": "德惠市",
        "parentId": "2101",
        "pinyin": "dehuishi",
        "initial": "D"
    },
    {
        "id": "210404",
        "title": "东丰县",
        "parentId": "2104",
        "pinyin": "dongfengxian",
        "initial": "D"
    },
    {
        "id": "210405",
        "title": "东辽县",
        "parentId": "2104",
        "pinyin": "dongliaoxian",
        "initial": "D"
    },
    {
        "id": "210502",
        "title": "东昌区",
        "parentId": "2105",
        "pinyin": "dongchangqu",
        "initial": "D"
    },
    {
        "id": "210806",
        "title": "大安市",
        "parentId": "2108",
        "pinyin": "daanshi",
        "initial": "D"
    },
    {
        "id": "210903",
        "title": "敦化市",
        "parentId": "2109",
        "pinyin": "dunhuashi",
        "initial": "D"
    },
    {
        "id": "220102",
        "title": "道里区",
        "parentId": "2201",
        "pinyin": "daoliqu",
        "initial": "D"
    },
    {
        "id": "220104",
        "title": "道外区",
        "parentId": "2201",
        "pinyin": "daowaiqu",
        "initial": "D"
    },
    {
        "id": "220304",
        "title": "滴道区",
        "parentId": "2203",
        "pinyin": "didaoqu",
        "initial": "D"
    },
    {
        "id": "220406",
        "title": "东山区",
        "parentId": "2204",
        "pinyin": "dongshanqu",
        "initial": "D"
    },
    {
        "id": "2206",
        "title": "大庆市",
        "parentId": "22",
        "pinyin": "daqingshi",
        "initial": "D"
    },
    {
        "id": "220606",
        "title": "大同区",
        "parentId": "2206",
        "pinyin": "datongqu",
        "initial": "D"
    },
    {
        "id": "220610",
        "title": "杜尔伯特县",
        "parentId": "2206",
        "pinyin": "duerbotexian",
        "initial": "D"
    },
    {
        "id": "220713",
        "title": "带岭区",
        "parentId": "2207",
        "pinyin": "dailingqu",
        "initial": "D"
    },
    {
        "id": "220804",
        "title": "东风区",
        "parentId": "2208",
        "pinyin": "dongfengqu",
        "initial": "D"
    },
    {
        "id": "221002",
        "title": "东安区",
        "parentId": "2210",
        "pinyin": "donganqu",
        "initial": "D"
    },
    {
        "id": "221006",
        "title": "东宁县",
        "parentId": "2210",
        "pinyin": "dongningxian",
        "initial": "D"
    },
    {
        "id": "2213",
        "title": "大兴安岭地区",
        "parentId": "22",
        "pinyin": "daxinganlingdiqu",
        "initial": "D"
    },
    {
        "id": "310404",
        "title": "丹徒区",
        "parentId": "3104",
        "pinyin": "dantuqu",
        "initial": "D"
    },
    {
        "id": "310405",
        "title": "丹阳市",
        "parentId": "3104",
        "pinyin": "danyangshi",
        "initial": "D"
    },
    {
        "id": "310906",
        "title": "东海县",
        "parentId": "3109",
        "pinyin": "donghaixian",
        "initial": "D"
    },
    {
        "id": "311009",
        "title": "东台市",
        "parentId": "3110",
        "pinyin": "dongtaishi",
        "initial": "D"
    },
    {
        "id": "311010",
        "title": "大丰市",
        "parentId": "3110",
        "pinyin": "dafengshi",
        "initial": "D"
    },
    {
        "id": "320505",
        "title": "东平县",
        "parentId": "3205",
        "pinyin": "dongpingxian",
        "initial": "D"
    },
    {
        "id": "3209",
        "title": "德州市",
        "parentId": "32",
        "pinyin": "dezhoushi",
        "initial": "D"
    },
    {
        "id": "320902",
        "title": "德城区",
        "parentId": "3209",
        "pinyin": "dechengqu",
        "initial": "D"
    },
    {
        "id": "321102",
        "title": "东港区",
        "parentId": "3211",
        "pinyin": "donggangqu",
        "initial": "D"
    },
    {
        "id": "3214",
        "title": "东营市",
        "parentId": "32",
        "pinyin": "dongyingshi",
        "initial": "D"
    },
    {
        "id": "321402",
        "title": "东营区",
        "parentId": "3214",
        "pinyin": "dongyingqu",
        "initial": "D"
    },
    {
        "id": "321502",
        "title": "东昌府区",
        "parentId": "3215",
        "pinyin": "dongchangfuqu",
        "initial": "D"
    },
    {
        "id": "321506",
        "title": "东阿县",
        "parentId": "3215",
        "pinyin": "dongaxian",
        "initial": "D"
    },
    {
        "id": "321604",
        "title": "单县",
        "parentId": "3216",
        "pinyin": "danxian",
        "initial": "D"
    },
    {
        "id": "321609",
        "title": "定陶县",
        "parentId": "3216",
        "pinyin": "dingtaoxian",
        "initial": "D"
    },
    {
        "id": "321610",
        "title": "东明县",
        "parentId": "3216",
        "pinyin": "dongmingxian",
        "initial": "D"
    },
    {
        "id": "330405",
        "title": "当涂县",
        "parentId": "3304",
        "pinyin": "dangtuxian",
        "initial": "D"
    },
    {
        "id": "330502",
        "title": "杜集区",
        "parentId": "3305",
        "pinyin": "dujiqu",
        "initial": "D"
    },
    {
        "id": "330703",
        "title": "大观区",
        "parentId": "3307",
        "pinyin": "daguanqu",
        "initial": "D"
    },
    {
        "id": "330906",
        "title": "定远县",
        "parentId": "3309",
        "pinyin": "dingyuanxian",
        "initial": "D"
    },
    {
        "id": "331103",
        "title": "东至县",
        "parentId": "3311",
        "pinyin": "dongzhixian",
        "initial": "D"
    },
    {
        "id": "331202",
        "title": "大通区",
        "parentId": "3312",
        "pinyin": "datongqu",
        "initial": "D"
    },
    {
        "id": "340308",
        "title": "东山县",
        "parentId": "3403",
        "pinyin": "dongshanxian",
        "initial": "D"
    },
    {
        "id": "340409",
        "title": "德化县",
        "parentId": "3404",
        "pinyin": "dehuaxian",
        "initial": "D"
    },
    {
        "id": "340607",
        "title": "大田县",
        "parentId": "3406",
        "pinyin": "datianxian",
        "initial": "D"
    },
    {
        "id": "350305",
        "title": "洞头县",
        "parentId": "3503",
        "pinyin": "dongtouxian",
        "initial": "D"
    },
    {
        "id": "350504",
        "title": "德清县",
        "parentId": "3505",
        "pinyin": "deqingxian",
        "initial": "D"
    },
    {
        "id": "350709",
        "title": "东阳市",
        "parentId": "3507",
        "pinyin": "dongyangshi",
        "initial": "D"
    },
    {
        "id": "350902",
        "title": "定海区",
        "parentId": "3509",
        "pinyin": "dinghaiqu",
        "initial": "D"
    },
    {
        "id": "360102",
        "title": "东湖区",
        "parentId": "3601",
        "pinyin": "donghuqu",
        "initial": "D"
    },
    {
        "id": "360408",
        "title": "德安县",
        "parentId": "3604",
        "pinyin": "deanxian",
        "initial": "D"
    },
    {
        "id": "360410",
        "title": "都昌县",
        "parentId": "3604",
        "pinyin": "duchangxian",
        "initial": "D"
    },
    {
        "id": "360705",
        "title": "大余县",
        "parentId": "3607",
        "pinyin": "dayuxian",
        "initial": "D"
    },
    {
        "id": "360710",
        "title": "定南县",
        "parentId": "3607",
        "pinyin": "dingnanxian",
        "initial": "D"
    },
    {
        "id": "361011",
        "title": "东乡县",
        "parentId": "3610",
        "pinyin": "dongxiangxian",
        "initial": "D"
    },
    {
        "id": "361113",
        "title": "德兴市",
        "parentId": "3611",
        "pinyin": "dexingshi",
        "initial": "D"
    },
    {
        "id": "400303",
        "title": "斗门区",
        "parentId": "4003",
        "pinyin": "doumenqu",
        "initial": "D"
    },
    {
        "id": "400607",
        "title": "东源县",
        "parentId": "4006",
        "pinyin": "dongyuanxian",
        "initial": "D"
    },
    {
        "id": "400704",
        "title": "大埔县",
        "parentId": "4007",
        "pinyin": "dapuxian",
        "initial": "D"
    },
    {
        "id": "4010",
        "title": "东莞市",
        "parentId": "40",
        "pinyin": "dongzuoshi",
        "initial": "D"
    },
    {
        "id": "401604",
        "title": "电白县",
        "parentId": "4016",
        "pinyin": "dianbaixian",
        "initial": "D"
    },
    {
        "id": "401702",
        "title": "端州区",
        "parentId": "4017",
        "pinyin": "duanzhouqu",
        "initial": "D"
    },
    {
        "id": "401703",
        "title": "鼎湖区",
        "parentId": "4017",
        "pinyin": "dinghuqu",
        "initial": "D"
    },
    {
        "id": "401707",
        "title": "德庆县",
        "parentId": "4017",
        "pinyin": "deqingxian",
        "initial": "D"
    },
    {
        "id": "410303",
        "title": "叠彩区",
        "parentId": "4103",
        "pinyin": "diecaiqu",
        "initial": "D"
    },
    {
        "id": "410403",
        "title": "蝶山区",
        "parentId": "4104",
        "pinyin": "dieshanqu",
        "initial": "D"
    },
    {
        "id": "410605",
        "title": "东兴市",
        "parentId": "4106",
        "pinyin": "dongxingshi",
        "initial": "D"
    },
    {
        "id": "411006",
        "title": "德保县",
        "parentId": "4110",
        "pinyin": "debaoxian",
        "initial": "D"
    },
    {
        "id": "411206",
        "title": "东兰县",
        "parentId": "4112",
        "pinyin": "donglanxian",
        "initial": "D"
    },
    {
        "id": "411210",
        "title": "都安县",
        "parentId": "4112",
        "pinyin": "duanxian",
        "initial": "D"
    },
    {
        "id": "411211",
        "title": "大化县",
        "parentId": "4112",
        "pinyin": "dahuaxian",
        "initial": "D"
    },
    {
        "id": "411406",
        "title": "大新县",
        "parentId": "4114",
        "pinyin": "daxinxian",
        "initial": "D"
    },
    {
        "id": "4206",
        "title": "东方市",
        "parentId": "42",
        "pinyin": "dongfangshi",
        "initial": "D"
    },
    {
        "id": "4209",
        "title": "定安县",
        "parentId": "42",
        "pinyin": "dinganxian",
        "initial": "D"
    },
    {
        "id": "6004",
        "title": "大渡口区",
        "parentId": "60",
        "pinyin": "dadukouqu",
        "initial": "D"
    },
    {
        "id": "6023",
        "title": "大足县",
        "parentId": "60",
        "pinyin": "dazuxian",
        "initial": "D"
    },
    {
        "id": "6029",
        "title": "垫江县",
        "parentId": "60",
        "pinyin": "dianjiangxian",
        "initial": "D"
    },
    {
        "id": "610114",
        "title": "大邑县",
        "parentId": "6101",
        "pinyin": "dayixian",
        "initial": "D"
    },
    {
        "id": "610117",
        "title": "都江堰市",
        "parentId": "6101",
        "pinyin": "dujiangyanshi",
        "initial": "D"
    },
    {
        "id": "6102",
        "title": "德阳市",
        "parentId": "61",
        "pinyin": "deyangshi",
        "initial": "D"
    },
    {
        "id": "610402",
        "title": "东坡区",
        "parentId": "6104",
        "pinyin": "dongpoqu",
        "initial": "D"
    },
    {
        "id": "610406",
        "title": "丹棱县",
        "parentId": "6104",
        "pinyin": "danlengxian",
        "initial": "D"
    },
    {
        "id": "610704",
        "title": "大安区",
        "parentId": "6107",
        "pinyin": "daanqu",
        "initial": "D"
    },
    {
        "id": "610803",
        "title": "东兴区",
        "parentId": "6108",
        "pinyin": "dongxingqu",
        "initial": "D"
    },
    {
        "id": "611206",
        "title": "大英县",
        "parentId": "6112",
        "pinyin": "dayingxian",
        "initial": "D"
    },
    {
        "id": "6113",
        "title": "达州市",
        "parentId": "61",
        "pinyin": "dazhoushi",
        "initial": "D"
    },
    {
        "id": "611303",
        "title": "达县",
        "parentId": "6113",
        "pinyin": "daxian",
        "initial": "D"
    },
    {
        "id": "611306",
        "title": "大竹县",
        "parentId": "6113",
        "pinyin": "dazhuxian",
        "initial": "D"
    },
    {
        "id": "611902",
        "title": "东区",
        "parentId": "6119",
        "pinyin": "dongqu",
        "initial": "D"
    },
    {
        "id": "612003",
        "title": "丹巴县",
        "parentId": "6120",
        "pinyin": "danbaxian",
        "initial": "D"
    },
    {
        "id": "612006",
        "title": "道孚县",
        "parentId": "6120",
        "pinyin": "daozuoxian",
        "initial": "D"
    },
    {
        "id": "612010",
        "title": "德格县",
        "parentId": "6120",
        "pinyin": "degexian",
        "initial": "D"
    },
    {
        "id": "612017",
        "title": "稻城县",
        "parentId": "6120",
        "pinyin": "daochengxian",
        "initial": "D"
    },
    {
        "id": "612018",
        "title": "得荣县",
        "parentId": "6120",
        "pinyin": "derongxian",
        "initial": "D"
    },
    {
        "id": "612104",
        "title": "德昌县",
        "parentId": "6121",
        "pinyin": "dechangxian",
        "initial": "D"
    },
    {
        "id": "620106",
        "title": "东川区",
        "parentId": "6201",
        "pinyin": "dongchuanqu",
        "initial": "D"
    },
    {
        "id": "620406",
        "title": "大关县",
        "parentId": "6204",
        "pinyin": "daguanxian",
        "initial": "D"
    },
    {
        "id": "620506",
        "title": "大姚县",
        "parentId": "6205",
        "pinyin": "dayaoxian",
        "initial": "D"
    },
    {
        "id": "6208",
        "title": "迪庆州",
        "parentId": "62",
        "pinyin": "diqingzhou",
        "initial": "D"
    },
    {
        "id": "620802",
        "title": "德钦县",
        "parentId": "6208",
        "pinyin": "deqinxian",
        "initial": "D"
    },
    {
        "id": "6212",
        "title": "大理",
        "parentId": "62",
        "pinyin": "dali",
        "initial": "D"
    },
    {
        "id": "621201",
        "title": "大理市",
        "parentId": "6212",
        "pinyin": "dalishi",
        "initial": "D"
    },
    {
        "id": "6214",
        "title": "德宏",
        "parentId": "62",
        "pinyin": "dehong",
        "initial": "D"
    },
    {
        "id": "630208",
        "title": "道真仡佬族县",
        "parentId": "6302",
        "pinyin": "daozhenzuolaozuxian",
        "initial": "D"
    },
    {
        "id": "630601",
        "title": "都匀市",
        "parentId": "6306",
        "pinyin": "duyunshi",
        "initial": "D"
    },
    {
        "id": "630606",
        "title": "独山县",
        "parentId": "6306",
        "pinyin": "dushanxian",
        "initial": "D"
    },
    {
        "id": "630707",
        "title": "德江县",
        "parentId": "6307",
        "pinyin": "dejiangxian",
        "initial": "D"
    },
    {
        "id": "630802",
        "title": "大方县",
        "parentId": "6308",
        "pinyin": "dafangxian",
        "initial": "D"
    },
    {
        "id": "630916",
        "title": "丹寨县",
        "parentId": "6309",
        "pinyin": "danzhaixian",
        "initial": "D"
    },
    {
        "id": "640104",
        "title": "当雄县",
        "parentId": "6401",
        "pinyin": "dangxiongxian",
        "initial": "D"
    },
    {
        "id": "640107",
        "title": "堆龙德庆县",
        "parentId": "6401",
        "pinyin": "duilongdeqingxian",
        "initial": "D"
    },
    {
        "id": "640108",
        "title": "达孜县",
        "parentId": "6401",
        "pinyin": "dazixian",
        "initial": "D"
    },
    {
        "id": "640204",
        "title": "定日县",
        "parentId": "6402",
        "pinyin": "dingrixian",
        "initial": "D"
    },
    {
        "id": "640212",
        "title": "定结县",
        "parentId": "6402",
        "pinyin": "dingjiexian",
        "initial": "D"
    },
    {
        "id": "640505",
        "title": "丁青县",
        "parentId": "6405",
        "pinyin": "dingqingxian",
        "initial": "D"
    },
    {
        "id": "700113",
        "title": "登封市",
        "parentId": "7001",
        "pinyin": "dengfengshi",
        "initial": "D"
    },
    {
        "id": "701507",
        "title": "郸城县",
        "parentId": "7015",
        "pinyin": "danchengxian",
        "initial": "D"
    },
    {
        "id": "701614",
        "title": "邓州市",
        "parentId": "7016",
        "pinyin": "dengzhoushi",
        "initial": "D"
    },
    {
        "id": "710109",
        "title": "东西湖区",
        "parentId": "7101",
        "pinyin": "dongxihuqu",
        "initial": "D"
    },
    {
        "id": "710207",
        "title": "大冶市",
        "parentId": "7102",
        "pinyin": "dayeshi",
        "initial": "D"
    },
    {
        "id": "710409",
        "title": "丹江口市",
        "parentId": "7104",
        "pinyin": "danjiangkoushi",
        "initial": "D"
    },
    {
        "id": "710604",
        "title": "点军区",
        "parentId": "7106",
        "pinyin": "dianjunqu",
        "initial": "D"
    },
    {
        "id": "710613",
        "title": "当阳市",
        "parentId": "7106",
        "pinyin": "dangyangshi",
        "initial": "D"
    },
    {
        "id": "710702",
        "title": "东宝区",
        "parentId": "7107",
        "pinyin": "dongbaoqu",
        "initial": "D"
    },
    {
        "id": "710703",
        "title": "掇刀区",
        "parentId": "7107",
        "pinyin": "duodaoqu",
        "initial": "D"
    },
    {
        "id": "710904",
        "title": "大悟县",
        "parentId": "7109",
        "pinyin": "dawuxian",
        "initial": "D"
    },
    {
        "id": "720603",
        "title": "鼎城区",
        "parentId": "7206",
        "pinyin": "dingchengqu",
        "initial": "D"
    },
    {
        "id": "720803",
        "title": "大祥区",
        "parentId": "7208",
        "pinyin": "daxiangqu",
        "initial": "D"
    },
    {
        "id": "720809",
        "title": "洞口县",
        "parentId": "7208",
        "pinyin": "dongkouxian",
        "initial": "D"
    },
    {
        "id": "721105",
        "title": "东安县",
        "parentId": "7211",
        "pinyin": "donganxian",
        "initial": "D"
    },
    {
        "id": "721107",
        "title": "道县",
        "parentId": "7211",
        "pinyin": "daoxian",
        "initial": "D"
    },
    {
        "id": "800405",
        "title": "大荔县",
        "parentId": "8004",
        "pinyin": "dalixian",
        "initial": "D"
    },
    {
        "id": "800607",
        "title": "定边县",
        "parentId": "8006",
        "pinyin": "dingbianxian",
        "initial": "D"
    },
    {
        "id": "801004",
        "title": "丹凤县",
        "parentId": "8010",
        "pinyin": "danfengxian",
        "initial": "D"
    },
    {
        "id": "810106",
        "title": "大通县",
        "parentId": "8101",
        "pinyin": "datongxian",
        "initial": "D"
    },
    {
        "id": "810502",
        "title": "德令哈市",
        "parentId": "8105",
        "pinyin": "delinghashi",
        "initial": "D"
    },
    {
        "id": "810504",
        "title": "都兰县",
        "parentId": "8105",
        "pinyin": "dulanxian",
        "initial": "D"
    },
    {
        "id": "810704",
        "title": "达日县",
        "parentId": "8107",
        "pinyin": "darixian",
        "initial": "D"
    },
    {
        "id": "820202",
        "title": "大武口区",
        "parentId": "8202",
        "pinyin": "dawukouqu",
        "initial": "D"
    },
    {
        "id": "830107",
        "title": "达坂城区",
        "parentId": "8301",
        "pinyin": "dazuochengqu",
        "initial": "D"
    },
    {
        "id": "831402",
        "title": "独山子区",
        "parentId": "8314",
        "pinyin": "dushanziqu",
        "initial": "D"
    },
    {
        "id": "840608",
        "title": "敦煌市",
        "parentId": "8406",
        "pinyin": "dunhuangshi",
        "initial": "D"
    },
    {
        "id": "8411",
        "title": "定西市",
        "parentId": "84",
        "pinyin": "dingxishi",
        "initial": "D"
    },
    {
        "id": "841307",
        "title": "东乡族自治县",
        "parentId": "8413",
        "pinyin": "dongxiangzuzizhixian",
        "initial": "D"
    },
    {
        "id": "841405",
        "title": "迭部县",
        "parentId": "8414",
        "pinyin": "diebuxian",
        "initial": "D"
    },
    {
        "id": "130305",
        "title": "鄂伦春自治旗",
        "parentId": "1303",
        "pinyin": "elunchunzizhiqi",
        "initial": "E"
    },
    {
        "id": "130306",
        "title": "鄂温克旗",
        "parentId": "1303",
        "pinyin": "ewenkeqi",
        "initial": "E"
    },
    {
        "id": "130313",
        "title": "额尔古纳市",
        "parentId": "1303",
        "pinyin": "eergunashi",
        "initial": "E"
    },
    {
        "id": "1309",
        "title": "鄂尔多斯市",
        "parentId": "13",
        "pinyin": "eerduosishi",
        "initial": "E"
    },
    {
        "id": "130905",
        "title": "鄂托克前旗",
        "parentId": "1309",
        "pinyin": "etuokeqianqi",
        "initial": "E"
    },
    {
        "id": "130906",
        "title": "鄂托克旗",
        "parentId": "1309",
        "pinyin": "etuokeqi",
        "initial": "E"
    },
    {
        "id": "131203",
        "title": "额济纳旗",
        "parentId": "1312",
        "pinyin": "ejinaqi",
        "initial": "E"
    },
    {
        "id": "1314",
        "title": "二连浩特",
        "parentId": "13",
        "pinyin": "erlianhaote",
        "initial": "E"
    },
    {
        "id": "210105",
        "title": "二道区",
        "parentId": "2101",
        "pinyin": "erdaoqu",
        "initial": "E"
    },
    {
        "id": "210503",
        "title": "二道江区",
        "parentId": "2105",
        "pinyin": "erdaojiangqu",
        "initial": "E"
    },
    {
        "id": "401208",
        "title": "恩平市",
        "parentId": "4012",
        "pinyin": "enpingshi",
        "initial": "E"
    },
    {
        "id": "611010",
        "title": "峨边县",
        "parentId": "6110",
        "pinyin": "ebianxian",
        "initial": "E"
    },
    {
        "id": "611012",
        "title": "峨眉山市",
        "parentId": "6110",
        "pinyin": "emeishanshi",
        "initial": "E"
    },
    {
        "id": "620308",
        "title": "峨山县",
        "parentId": "6203",
        "pinyin": "eshanxian",
        "initial": "E"
    },
    {
        "id": "621210",
        "title": "洱源县",
        "parentId": "6212",
        "pinyin": "eryuanxian",
        "initial": "E"
    },
    {
        "id": "700103",
        "title": "二七区",
        "parentId": "7001",
        "pinyin": "erqiqu",
        "initial": "E"
    },
    {
        "id": "7108",
        "title": "鄂州市",
        "parentId": "71",
        "pinyin": "ezhoushi",
        "initial": "E"
    },
    {
        "id": "710804",
        "title": "鄂城区",
        "parentId": "7108",
        "pinyin": "echengqu",
        "initial": "E"
    },
    {
        "id": "7113",
        "title": "恩施",
        "parentId": "71",
        "pinyin": "enshi",
        "initial": "E"
    },
    {
        "id": "711301",
        "title": "恩施市",
        "parentId": "7113",
        "pinyin": "enshishi",
        "initial": "E"
    },
    {
        "id": "830403",
        "title": "额敏县",
        "parentId": "8304",
        "pinyin": "eminxian",
        "initial": "E"
    },
    {
        "id": "1007",
        "title": "丰台区",
        "parentId": "10",
        "pinyin": "fengtaiqu",
        "initial": "F"
    },
    {
        "id": "1013",
        "title": "房山区",
        "parentId": "10",
        "pinyin": "fangshanqu",
        "initial": "F"
    },
    {
        "id": "120207",
        "title": "抚宁县",
        "parentId": "1202",
        "pinyin": "funingxian",
        "initial": "F"
    },
    {
        "id": "120306",
        "title": "丰南区",
        "parentId": "1203",
        "pinyin": "fengnanqu",
        "initial": "F"
    },
    {
        "id": "120307",
        "title": "丰润区",
        "parentId": "1203",
        "pinyin": "fengrunqu",
        "initial": "F"
    },
    {
        "id": "120610",
        "title": "阜城县",
        "parentId": "1206",
        "pinyin": "fuchengxian",
        "initial": "F"
    },
    {
        "id": "120708",
        "title": "阜平县",
        "parentId": "1207",
        "pinyin": "fupingxian",
        "initial": "F"
    },
    {
        "id": "120810",
        "title": "丰宁县",
        "parentId": "1208",
        "pinyin": "fengningxian",
        "initial": "F"
    },
    {
        "id": "121104",
        "title": "复兴区",
        "parentId": "1211",
        "pinyin": "fuxingqu",
        "initial": "F"
    },
    {
        "id": "121105",
        "title": "峰峰矿区",
        "parentId": "1211",
        "pinyin": "fengfengkuangqu",
        "initial": "F"
    },
    {
        "id": "121112",
        "title": "肥乡县",
        "parentId": "1211",
        "pinyin": "feixiangxian",
        "initial": "F"
    },
    {
        "id": "130812",
        "title": "丰镇市",
        "parentId": "1308",
        "pinyin": "fengzhenshi",
        "initial": "F"
    },
    {
        "id": "140706",
        "title": "繁峙县",
        "parentId": "1407",
        "pinyin": "fanzhixian",
        "initial": "F"
    },
    {
        "id": "140909",
        "title": "浮山县",
        "parentId": "1409",
        "pinyin": "fushanxian",
        "initial": "F"
    },
    {
        "id": "140916",
        "title": "汾西县",
        "parentId": "1409",
        "pinyin": "fenxixian",
        "initial": "F"
    },
    {
        "id": "141010",
        "title": "方山县",
        "parentId": "1410",
        "pinyin": "fangshanxian",
        "initial": "F"
    },
    {
        "id": "141014",
        "title": "汾阳市",
        "parentId": "1410",
        "pinyin": "fenyangshi",
        "initial": "F"
    },
    {
        "id": "200113",
        "title": "法库县",
        "parentId": "2001",
        "pinyin": "fakuxian",
        "initial": "F"
    },
    {
        "id": "200507",
        "title": "凤城市",
        "parentId": "2005",
        "pinyin": "fengchengshi",
        "initial": "F"
    },
    {
        "id": "2008",
        "title": "抚顺市",
        "parentId": "20",
        "pinyin": "fushunshi",
        "initial": "F"
    },
    {
        "id": "200806",
        "title": "抚顺县",
        "parentId": "2008",
        "pinyin": "fushunxian",
        "initial": "F"
    },
    {
        "id": "2011",
        "title": "阜新市",
        "parentId": "20",
        "pinyin": "fuxinshi",
        "initial": "F"
    },
    {
        "id": "201107",
        "title": "阜新县",
        "parentId": "2011",
        "pinyin": "fuxinxian",
        "initial": "F"
    },
    {
        "id": "210205",
        "title": "丰满区",
        "parentId": "2102",
        "pinyin": "fengmanqu",
        "initial": "F"
    },
    {
        "id": "210604",
        "title": "抚松县",
        "parentId": "2106",
        "pinyin": "fusongxian",
        "initial": "F"
    },
    {
        "id": "210706",
        "title": "扶余县",
        "parentId": "2107",
        "pinyin": "fuyuxian",
        "initial": "F"
    },
    {
        "id": "220111",
        "title": "方正县",
        "parentId": "2201",
        "pinyin": "fangzhengxian",
        "initial": "F"
    },
    {
        "id": "220206",
        "title": "富拉尔基区",
        "parentId": "2202",
        "pinyin": "fulaerjiqu",
        "initial": "F"
    },
    {
        "id": "220213",
        "title": "富裕县",
        "parentId": "2202",
        "pinyin": "fuyuxian",
        "initial": "F"
    },
    {
        "id": "220809",
        "title": "抚远县",
        "parentId": "2208",
        "pinyin": "fuyuanxian",
        "initial": "F"
    },
    {
        "id": "220811",
        "title": "富锦市",
        "parentId": "2208",
        "pinyin": "fujinshi",
        "initial": "F"
    },
    {
        "id": "3010",
        "title": "奉贤区",
        "parentId": "30",
        "pinyin": "fengxianqu",
        "initial": "F"
    },
    {
        "id": "310807",
        "title": "丰县",
        "parentId": "3108",
        "pinyin": "fengxian",
        "initial": "F"
    },
    {
        "id": "311006",
        "title": "阜宁县",
        "parentId": "3110",
        "pinyin": "funingxian",
        "initial": "F"
    },
    {
        "id": "320303",
        "title": "福山区",
        "parentId": "3203",
        "pinyin": "fushanqu",
        "initial": "F"
    },
    {
        "id": "320507",
        "title": "肥城市",
        "parentId": "3205",
        "pinyin": "feichengshi",
        "initial": "F"
    },
    {
        "id": "320604",
        "title": "坊子区",
        "parentId": "3206",
        "pinyin": "fangziqu",
        "initial": "F"
    },
    {
        "id": "321709",
        "title": "费县",
        "parentId": "3217",
        "pinyin": "feixian",
        "initial": "F"
    },
    {
        "id": "330107",
        "title": "肥东县",
        "parentId": "3301",
        "pinyin": "feidongxian",
        "initial": "F"
    },
    {
        "id": "330108",
        "title": "肥西县",
        "parentId": "3301",
        "pinyin": "feixixian",
        "initial": "F"
    },
    {
        "id": "330207",
        "title": "繁昌县",
        "parentId": "3302",
        "pinyin": "fanchangxian",
        "initial": "F"
    },
    {
        "id": "330907",
        "title": "凤阳县",
        "parentId": "3309",
        "pinyin": "fengyangxian",
        "initial": "F"
    },
    {
        "id": "331207",
        "title": "凤台县",
        "parentId": "3312",
        "pinyin": "fengtaixian",
        "initial": "F"
    },
    {
        "id": "3314",
        "title": "阜阳市",
        "parentId": "33",
        "pinyin": "fuyangshi",
        "initial": "F"
    },
    {
        "id": "331407",
        "title": "阜南县",
        "parentId": "3314",
        "pinyin": "funanxian",
        "initial": "F"
    },
    {
        "id": "34",
        "title": "福建省",
        "parentId": null,
        "pinyin": "fujiansheng",
        "initial": "F"
    },
    {
        "id": "3401",
        "title": "福州市",
        "parentId": "34",
        "pinyin": "fuzhoushi",
        "initial": "F"
    },
    {
        "id": "340113",
        "title": "福清市",
        "parentId": "3401",
        "pinyin": "fuqingshi",
        "initial": "F"
    },
    {
        "id": "340403",
        "title": "丰泽区",
        "parentId": "3404",
        "pinyin": "fengzequ",
        "initial": "F"
    },
    {
        "id": "340909",
        "title": "福安市",
        "parentId": "3409",
        "pinyin": "fuanshi",
        "initial": "F"
    },
    {
        "id": "340910",
        "title": "福鼎市",
        "parentId": "3409",
        "pinyin": "fudingshi",
        "initial": "F"
    },
    {
        "id": "350113",
        "title": "富阳市",
        "parentId": "3501",
        "pinyin": "fuyangshi",
        "initial": "F"
    },
    {
        "id": "350212",
        "title": "奉化市",
        "parentId": "3502",
        "pinyin": "fenghuashi",
        "initial": "F"
    },
    {
        "id": "360204",
        "title": "浮梁县",
        "parentId": "3602",
        "pinyin": "fuliangxian",
        "initial": "F"
    },
    {
        "id": "360503",
        "title": "分宜县",
        "parentId": "3605",
        "pinyin": "fenyixian",
        "initial": "F"
    },
    {
        "id": "360903",
        "title": "奉新县",
        "parentId": "3609",
        "pinyin": "fengxinxian",
        "initial": "F"
    },
    {
        "id": "360909",
        "title": "丰城市",
        "parentId": "3609",
        "pinyin": "fengchengshi",
        "initial": "F"
    },
    {
        "id": "3610",
        "title": "抚州市",
        "parentId": "36",
        "pinyin": "fuzhoushi1",
        "initial": "F"
    },
    {
        "id": "400108",
        "title": "番禺区",
        "parentId": "4001",
        "pinyin": "fanzuoqu",
        "initial": "F"
    },
    {
        "id": "400203",
        "title": "福田区",
        "parentId": "4002",
        "pinyin": "futianqu",
        "initial": "F"
    },
    {
        "id": "400705",
        "title": "丰顺县",
        "parentId": "4007",
        "pinyin": "fengshunxian",
        "initial": "F"
    },
    {
        "id": "4013",
        "title": "佛山市",
        "parentId": "40",
        "pinyin": "foshanshi",
        "initial": "F"
    },
    {
        "id": "401706",
        "title": "封开县",
        "parentId": "4017",
        "pinyin": "fengkaixian",
        "initial": "F"
    },
    {
        "id": "401803",
        "title": "佛冈县",
        "parentId": "4018",
        "pinyin": "fogangxian",
        "initial": "F"
    },
    {
        "id": "4106",
        "title": "防城港市",
        "parentId": "41",
        "pinyin": "fangchenggangshi",
        "initial": "F"
    },
    {
        "id": "410603",
        "title": "防城区",
        "parentId": "4106",
        "pinyin": "fangchengqu",
        "initial": "F"
    },
    {
        "id": "411105",
        "title": "富川县",
        "parentId": "4111",
        "pinyin": "fuchuanxian",
        "initial": "F"
    },
    {
        "id": "411205",
        "title": "凤山县",
        "parentId": "4112",
        "pinyin": "fengshanxian",
        "initial": "F"
    },
    {
        "id": "411403",
        "title": "扶绥县",
        "parentId": "4114",
        "pinyin": "fusuixian",
        "initial": "F"
    },
    {
        "id": "6002",
        "title": "涪陵区",
        "parentId": "60",
        "pinyin": "fulingqu",
        "initial": "F"
    },
    {
        "id": "6028",
        "title": "丰都县",
        "parentId": "60",
        "pinyin": "fengduxian",
        "initial": "F"
    },
    {
        "id": "6034",
        "title": "奉节县",
        "parentId": "60",
        "pinyin": "fengjiexian",
        "initial": "F"
    },
    {
        "id": "610302",
        "title": "涪城区",
        "parentId": "6103",
        "pinyin": "fuchengqu",
        "initial": "F"
    },
    {
        "id": "610707",
        "title": "富顺县",
        "parentId": "6107",
        "pinyin": "fushunxian",
        "initial": "F"
    },
    {
        "id": "620109",
        "title": "富民县",
        "parentId": "6201",
        "pinyin": "fuminxian",
        "initial": "F"
    },
    {
        "id": "620207",
        "title": "富源县",
        "parentId": "6202",
        "pinyin": "fuyuanxian",
        "initial": "F"
    },
    {
        "id": "620908",
        "title": "富宁县",
        "parentId": "6209",
        "pinyin": "funingxian",
        "initial": "F"
    },
    {
        "id": "621502",
        "title": "福贡县",
        "parentId": "6215",
        "pinyin": "fugongxian",
        "initial": "F"
    },
    {
        "id": "621603",
        "title": "凤庆县",
        "parentId": "6216",
        "pinyin": "fengqingxian",
        "initial": "F"
    },
    {
        "id": "630210",
        "title": "凤冈县",
        "parentId": "6302",
        "pinyin": "fenggangxian",
        "initial": "F"
    },
    {
        "id": "630602",
        "title": "福泉市",
        "parentId": "6306",
        "pinyin": "fuquanshi",
        "initial": "F"
    },
    {
        "id": "700504",
        "title": "凤泉区",
        "parentId": "7005",
        "pinyin": "fengquanqu",
        "initial": "F"
    },
    {
        "id": "700510",
        "title": "封丘县",
        "parentId": "7005",
        "pinyin": "fengqiuxian",
        "initial": "F"
    },
    {
        "id": "700605",
        "title": "范县",
        "parentId": "7006",
        "pinyin": "fanxian",
        "initial": "F"
    },
    {
        "id": "701503",
        "title": "扶沟县",
        "parentId": "7015",
        "pinyin": "fugouxian",
        "initial": "F"
    },
    {
        "id": "701605",
        "title": "方城县",
        "parentId": "7016",
        "pinyin": "fangchengxian",
        "initial": "F"
    },
    {
        "id": "710303",
        "title": "樊城区",
        "parentId": "7103",
        "pinyin": "fanchengqu",
        "initial": "F"
    },
    {
        "id": "710408",
        "title": "房县",
        "parentId": "7104",
        "pinyin": "fangxian",
        "initial": "F"
    },
    {
        "id": "721403",
        "title": "凤凰县",
        "parentId": "7214",
        "pinyin": "fenghuangxian",
        "initial": "F"
    },
    {
        "id": "800205",
        "title": "凤翔县",
        "parentId": "8002",
        "pinyin": "fengxiangxian",
        "initial": "F"
    },
    {
        "id": "800207",
        "title": "扶风县",
        "parentId": "8002",
        "pinyin": "fufengxian",
        "initial": "F"
    },
    {
        "id": "800212",
        "title": "凤县",
        "parentId": "8002",
        "pinyin": "fengxian",
        "initial": "F"
    },
    {
        "id": "800410",
        "title": "富平县",
        "parentId": "8004",
        "pinyin": "fupingxian",
        "initial": "F"
    },
    {
        "id": "800510",
        "title": "富县",
        "parentId": "8005",
        "pinyin": "fuxian",
        "initial": "F"
    },
    {
        "id": "800604",
        "title": "府谷县",
        "parentId": "8006",
        "pinyin": "fuguxian",
        "initial": "F"
    },
    {
        "id": "800812",
        "title": "佛坪县",
        "parentId": "8008",
        "pinyin": "fopingxian",
        "initial": "F"
    },
    {
        "id": "830303",
        "title": "富蕴县",
        "parentId": "8303",
        "pinyin": "fuyunxian",
        "initial": "F"
    },
    {
        "id": "830304",
        "title": "福海县",
        "parentId": "8303",
        "pinyin": "fuhaixian",
        "initial": "F"
    },
    {
        "id": "830602",
        "title": "阜康市",
        "parentId": "8306",
        "pinyin": "fukangshi",
        "initial": "F"
    },
    {
        "id": "120113",
        "title": "高邑县",
        "parentId": "1201",
        "pinyin": "gaoyixian",
        "initial": "G"
    },
    {
        "id": "120125",
        "title": "高新区",
        "parentId": "1201",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "120304",
        "title": "古冶区",
        "parentId": "1203",
        "pinyin": "guyequ",
        "initial": "G"
    },
    {
        "id": "120409",
        "title": "沽源县",
        "parentId": "1204",
        "pinyin": "guyuanxian",
        "initial": "G"
    },
    {
        "id": "120503",
        "title": "广阳区",
        "parentId": "1205",
        "pinyin": "guangyangqu",
        "initial": "G"
    },
    {
        "id": "120504",
        "title": "固安县",
        "parentId": "1205",
        "pinyin": "guanxian",
        "initial": "G"
    },
    {
        "id": "120608",
        "title": "故城县",
        "parentId": "1206",
        "pinyin": "guchengxian",
        "initial": "G"
    },
    {
        "id": "120712",
        "title": "高阳县",
        "parentId": "1207",
        "pinyin": "gaoyangxian",
        "initial": "G"
    },
    {
        "id": "120726",
        "title": "高碑店市",
        "parentId": "1207",
        "pinyin": "gaobeidianshi",
        "initial": "G"
    },
    {
        "id": "120727",
        "title": "高新区",
        "parentId": "1207",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "120914",
        "title": "广宗县",
        "parentId": "1209",
        "pinyin": "guangzongxian",
        "initial": "G"
    },
    {
        "id": "121116",
        "title": "广平县",
        "parentId": "1211",
        "pinyin": "guangpingxian",
        "initial": "G"
    },
    {
        "id": "121117",
        "title": "馆陶县",
        "parentId": "1211",
        "pinyin": "guantaoxian",
        "initial": "G"
    },
    {
        "id": "130209",
        "title": "固阳县",
        "parentId": "1302",
        "pinyin": "guyangxian",
        "initial": "G"
    },
    {
        "id": "130211",
        "title": "高新区",
        "parentId": "1302",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "130314",
        "title": "根河市",
        "parentId": "1303",
        "pinyin": "genheshi",
        "initial": "G"
    },
    {
        "id": "140111",
        "title": "古交市",
        "parentId": "1401",
        "pinyin": "gujiaoshi",
        "initial": "G"
    },
    {
        "id": "140208",
        "title": "广灵县",
        "parentId": "1402",
        "pinyin": "guanglingxian",
        "initial": "G"
    },
    {
        "id": "140507",
        "title": "高平市",
        "parentId": "1405",
        "pinyin": "gaopingshi",
        "initial": "G"
    },
    {
        "id": "140907",
        "title": "古县",
        "parentId": "1409",
        "pinyin": "guxian",
        "initial": "G"
    },
    {
        "id": "200205",
        "title": "甘井子区",
        "parentId": "2002",
        "pinyin": "ganjingziqu",
        "initial": "G"
    },
    {
        "id": "200309",
        "title": "高新区",
        "parentId": "2003",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "200402",
        "title": "古塔区",
        "parentId": "2004",
        "pinyin": "gutaqu",
        "initial": "G"
    },
    {
        "id": "200906",
        "title": "盖州市",
        "parentId": "2009",
        "pinyin": "gaizhoushi",
        "initial": "G"
    },
    {
        "id": "201005",
        "title": "弓长岭区",
        "parentId": "2010",
        "pinyin": "gongchanglingqu",
        "initial": "G"
    },
    {
        "id": "201009",
        "title": "高新区",
        "parentId": "2010",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "210306",
        "title": "公主岭市",
        "parentId": "2103",
        "pinyin": "gongzhulingshi",
        "initial": "G"
    },
    {
        "id": "210909",
        "title": "高新区",
        "parentId": "2109",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "220212",
        "title": "甘南县",
        "parentId": "2202",
        "pinyin": "gannanxian",
        "initial": "G"
    },
    {
        "id": "220218",
        "title": "高新区",
        "parentId": "2202",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "220403",
        "title": "工农区",
        "parentId": "2204",
        "pinyin": "gongnongqu",
        "initial": "G"
    },
    {
        "id": "220611",
        "title": "高新区",
        "parentId": "2206",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "310106",
        "title": "鼓楼区",
        "parentId": "3101",
        "pinyin": "gulouqu",
        "initial": "G"
    },
    {
        "id": "310114",
        "title": "高淳县",
        "parentId": "3101",
        "pinyin": "gaochunxian",
        "initial": "G"
    },
    {
        "id": "310213",
        "title": "工业园区",
        "parentId": "3102",
        "pinyin": "gongyeyuanqu",
        "initial": "G"
    },
    {
        "id": "310214",
        "title": "高新区",
        "parentId": "3102",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "310310",
        "title": "高新区",
        "parentId": "3103",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "310502",
        "title": "广陵区",
        "parentId": "3105",
        "pinyin": "guanglingqu",
        "initial": "G"
    },
    {
        "id": "310507",
        "title": "高邮市",
        "parentId": "3105",
        "pinyin": "gaoyoushi",
        "initial": "G"
    },
    {
        "id": "310603",
        "title": "港闸区",
        "parentId": "3106",
        "pinyin": "gangzhaqu",
        "initial": "G"
    },
    {
        "id": "310802",
        "title": "鼓楼区",
        "parentId": "3108",
        "pinyin": "gulouqu",
        "initial": "G"
    },
    {
        "id": "310905",
        "title": "赣榆县",
        "parentId": "3109",
        "pinyin": "ganyuxian",
        "initial": "G"
    },
    {
        "id": "310907",
        "title": "灌云县",
        "parentId": "3109",
        "pinyin": "guanyunxian",
        "initial": "G"
    },
    {
        "id": "310908",
        "title": "灌南县",
        "parentId": "3109",
        "pinyin": "guannanxian",
        "initial": "G"
    },
    {
        "id": "311203",
        "title": "高港区",
        "parentId": "3112",
        "pinyin": "gaogangqu",
        "initial": "G"
    },
    {
        "id": "311208",
        "title": "高新区",
        "parentId": "3112",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "320112",
        "title": "高新区",
        "parentId": "3201",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "320314",
        "title": "高新区",
        "parentId": "3203",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "320408",
        "title": "高青县",
        "parentId": "3204",
        "pinyin": "gaoqingxian",
        "initial": "G"
    },
    {
        "id": "320410",
        "title": "高新区",
        "parentId": "3204",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "320612",
        "title": "高密市",
        "parentId": "3206",
        "pinyin": "gaomishi",
        "initial": "G"
    },
    {
        "id": "320714",
        "title": "高新区",
        "parentId": "3207",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "320808",
        "title": "高新区",
        "parentId": "3208",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "321203",
        "title": "钢城区",
        "parentId": "3212",
        "pinyin": "gangchengqu",
        "initial": "G"
    },
    {
        "id": "321406",
        "title": "广饶县",
        "parentId": "3214",
        "pinyin": "guangraoxian",
        "initial": "G"
    },
    {
        "id": "321507",
        "title": "冠县",
        "parentId": "3215",
        "pinyin": "guanxian",
        "initial": "G"
    },
    {
        "id": "321508",
        "title": "高唐县",
        "parentId": "3215",
        "pinyin": "gaotangxian",
        "initial": "G"
    },
    {
        "id": "321510",
        "title": "高新区",
        "parentId": "3215",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "330308",
        "title": "固镇县",
        "parentId": "3303",
        "pinyin": "guzhenxian",
        "initial": "G"
    },
    {
        "id": "330309",
        "title": "高新区",
        "parentId": "3303",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "331102",
        "title": "贵池区",
        "parentId": "3311",
        "pinyin": "guichiqu",
        "initial": "G"
    },
    {
        "id": "331604",
        "title": "广德县",
        "parentId": "3316",
        "pinyin": "guangdexian",
        "initial": "G"
    },
    {
        "id": "340102",
        "title": "鼓楼区",
        "parentId": "3401",
        "pinyin": "gulouqu",
        "initial": "G"
    },
    {
        "id": "340705",
        "title": "光泽县",
        "parentId": "3407",
        "pinyin": "guangzexian",
        "initial": "G"
    },
    {
        "id": "340904",
        "title": "古田县",
        "parentId": "3409",
        "pinyin": "gutianxian",
        "initial": "G"
    },
    {
        "id": "350105",
        "title": "拱墅区",
        "parentId": "3501",
        "pinyin": "gongshuqu",
        "initial": "G"
    },
    {
        "id": "360206",
        "title": "高新区",
        "parentId": "3602",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "360504",
        "title": "高新区",
        "parentId": "3605",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "360604",
        "title": "贵溪市",
        "parentId": "3606",
        "pinyin": "guixishi",
        "initial": "G"
    },
    {
        "id": "3607",
        "title": "赣州市",
        "parentId": "36",
        "pinyin": "ganzhoushi",
        "initial": "G"
    },
    {
        "id": "360703",
        "title": "赣县",
        "parentId": "3607",
        "pinyin": "ganxian",
        "initial": "G"
    },
    {
        "id": "360911",
        "title": "高安市",
        "parentId": "3609",
        "pinyin": "gaoanshi",
        "initial": "G"
    },
    {
        "id": "361012",
        "title": "广昌县",
        "parentId": "3610",
        "pinyin": "guangchangxian",
        "initial": "G"
    },
    {
        "id": "361104",
        "title": "广丰县",
        "parentId": "3611",
        "pinyin": "guangfengxian",
        "initial": "G"
    },
    {
        "id": "40",
        "title": "广东省",
        "parentId": null,
        "pinyin": "guangdongsheng",
        "initial": "G"
    },
    {
        "id": "4001",
        "title": "广州市",
        "parentId": "40",
        "pinyin": "guangzhoushi",
        "initial": "G"
    },
    {
        "id": "400208",
        "title": "高新区",
        "parentId": "4002",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "400305",
        "title": "高新区",
        "parentId": "4003",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "400807",
        "title": "高新区",
        "parentId": "4008",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "401001",
        "title": "高新区",
        "parentId": "4010",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "401101",
        "title": "高新区",
        "parentId": "4011",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "401209",
        "title": "高新区",
        "parentId": "4012",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "401306",
        "title": "高明区",
        "parentId": "4013",
        "pinyin": "gaomingqu",
        "initial": "G"
    },
    {
        "id": "401307",
        "title": "高新区",
        "parentId": "4013",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "401605",
        "title": "高州市",
        "parentId": "4016",
        "pinyin": "gaozhoushi",
        "initial": "G"
    },
    {
        "id": "401704",
        "title": "广宁县",
        "parentId": "4017",
        "pinyin": "guangningxian",
        "initial": "G"
    },
    {
        "id": "401708",
        "title": "高要市",
        "parentId": "4017",
        "pinyin": "gaoyaoshi",
        "initial": "G"
    },
    {
        "id": "401710",
        "title": "高新区",
        "parentId": "4017",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "41",
        "title": "广西",
        "parentId": null,
        "pinyin": "guangxi",
        "initial": "G"
    },
    {
        "id": "410212",
        "title": "高新区",
        "parentId": "4102",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "4103",
        "title": "桂林市",
        "parentId": "41",
        "pinyin": "guilinshi",
        "initial": "G"
    },
    {
        "id": "410313",
        "title": "灌阳县",
        "parentId": "4103",
        "pinyin": "guanyangxian",
        "initial": "G"
    },
    {
        "id": "410318",
        "title": "恭城县",
        "parentId": "4103",
        "pinyin": "gongchengxian",
        "initial": "G"
    },
    {
        "id": "410319",
        "title": "高新区",
        "parentId": "4103",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "410602",
        "title": "港口区",
        "parentId": "4106",
        "pinyin": "gangkouqu",
        "initial": "G"
    },
    {
        "id": "4108",
        "title": "贵港市",
        "parentId": "41",
        "pinyin": "guigangshi",
        "initial": "G"
    },
    {
        "id": "410802",
        "title": "港北区",
        "parentId": "4108",
        "pinyin": "gangbeiqu",
        "initial": "G"
    },
    {
        "id": "410803",
        "title": "港南区",
        "parentId": "4108",
        "pinyin": "gangnanqu",
        "initial": "G"
    },
    {
        "id": "410806",
        "title": "桂平市",
        "parentId": "4108",
        "pinyin": "guipingshi",
        "initial": "G"
    },
    {
        "id": "420106",
        "title": "高新区",
        "parentId": "4201",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "610121",
        "title": "高新区",
        "parentId": "6101",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "610205",
        "title": "广汉市",
        "parentId": "6102",
        "pinyin": "guanghanshi",
        "initial": "G"
    },
    {
        "id": "610311",
        "title": "高新区",
        "parentId": "6103",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "610508",
        "title": "古蔺县",
        "parentId": "6105",
        "pinyin": "guzuoxian",
        "initial": "G"
    },
    {
        "id": "610603",
        "title": "高坪区",
        "parentId": "6106",
        "pinyin": "gaopingqu",
        "initial": "G"
    },
    {
        "id": "610703",
        "title": "贡井区",
        "parentId": "6107",
        "pinyin": "gongjingqu",
        "initial": "G"
    },
    {
        "id": "610708",
        "title": "高新区",
        "parentId": "6107",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "610907",
        "title": "高县",
        "parentId": "6109",
        "pinyin": "gaoxian",
        "initial": "G"
    },
    {
        "id": "6115",
        "title": "广元市",
        "parentId": "61",
        "pinyin": "guangyuanshi",
        "initial": "G"
    },
    {
        "id": "6116",
        "title": "广安市",
        "parentId": "61",
        "pinyin": "guanganshi",
        "initial": "G"
    },
    {
        "id": "611602",
        "title": "广安区",
        "parentId": "6116",
        "pinyin": "guanganqu",
        "initial": "G"
    },
    {
        "id": "6120",
        "title": "甘孜州",
        "parentId": "61",
        "pinyin": "ganzizhou",
        "initial": "G"
    },
    {
        "id": "612008",
        "title": "甘孜县",
        "parentId": "6120",
        "pinyin": "ganzixian",
        "initial": "G"
    },
    {
        "id": "612115",
        "title": "甘洛县",
        "parentId": "6121",
        "pinyin": "ganluoxian",
        "initial": "G"
    },
    {
        "id": "620104",
        "title": "官渡区",
        "parentId": "6201",
        "pinyin": "guanduqu",
        "initial": "G"
    },
    {
        "id": "620601",
        "title": "个旧市",
        "parentId": "6206",
        "pinyin": "gejiushi",
        "initial": "G"
    },
    {
        "id": "620702",
        "title": "古城区",
        "parentId": "6207",
        "pinyin": "guchengqu",
        "initial": "G"
    },
    {
        "id": "620907",
        "title": "广南县",
        "parentId": "6209",
        "pinyin": "guangnanxian",
        "initial": "G"
    },
    {
        "id": "621503",
        "title": "贡山县",
        "parentId": "6215",
        "pinyin": "gongshanxian",
        "initial": "G"
    },
    {
        "id": "621608",
        "title": "耿马傣族县",
        "parentId": "6216",
        "pinyin": "gengmadaizuxian",
        "initial": "G"
    },
    {
        "id": "63",
        "title": "贵州省",
        "parentId": null,
        "pinyin": "guizhousheng",
        "initial": "G"
    },
    {
        "id": "6301",
        "title": "贵阳市",
        "parentId": "63",
        "pinyin": "guiyangshi",
        "initial": "G"
    },
    {
        "id": "630406",
        "title": "关岭布依族县",
        "parentId": "6304",
        "pinyin": "guanlingbuyizuxian",
        "initial": "G"
    },
    {
        "id": "630604",
        "title": "贵定县",
        "parentId": "6306",
        "pinyin": "guidingxian",
        "initial": "G"
    },
    {
        "id": "640218",
        "title": "岗巴县",
        "parentId": "6402",
        "pinyin": "gangbaxian",
        "initial": "G"
    },
    {
        "id": "640303",
        "title": "贡嘎县",
        "parentId": "6403",
        "pinyin": "gonggaxian",
        "initial": "G"
    },
    {
        "id": "640402",
        "title": "工布江达县",
        "parentId": "6404",
        "pinyin": "gongbujiangdaxian",
        "initial": "G"
    },
    {
        "id": "640503",
        "title": "贡觉县",
        "parentId": "6405",
        "pinyin": "gongjuexian",
        "initial": "G"
    },
    {
        "id": "640703",
        "title": "噶尔县",
        "parentId": "6407",
        "pinyin": "gaerxian",
        "initial": "G"
    },
    {
        "id": "640705",
        "title": "革吉县",
        "parentId": "6407",
        "pinyin": "gejixian",
        "initial": "G"
    },
    {
        "id": "640706",
        "title": "改则县",
        "parentId": "6407",
        "pinyin": "gaizexian",
        "initial": "G"
    },
    {
        "id": "700104",
        "title": "管城回族区",
        "parentId": "7001",
        "pinyin": "guanchenghuizuqu",
        "initial": "G"
    },
    {
        "id": "700109",
        "title": "巩义市",
        "parentId": "7001",
        "pinyin": "gongyishi",
        "initial": "G"
    },
    {
        "id": "700116",
        "title": "高新区",
        "parentId": "7001",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "700217",
        "title": "高新区",
        "parentId": "7002",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "700304",
        "title": "鼓楼区",
        "parentId": "7003",
        "pinyin": "gulouqu",
        "initial": "G"
    },
    {
        "id": "700411",
        "title": "高新区",
        "parentId": "7004",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "701615",
        "title": "高新区",
        "parentId": "7016",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "701705",
        "title": "光山县",
        "parentId": "7017",
        "pinyin": "guangshanxian",
        "initial": "G"
    },
    {
        "id": "701708",
        "title": "固始县",
        "parentId": "7017",
        "pinyin": "gushixian",
        "initial": "G"
    },
    {
        "id": "710306",
        "title": "谷城县",
        "parentId": "7103",
        "pinyin": "guchengxian",
        "initial": "G"
    },
    {
        "id": "710504",
        "title": "公安县",
        "parentId": "7105",
        "pinyin": "gonganxian",
        "initial": "G"
    },
    {
        "id": "710615",
        "title": "高新区",
        "parentId": "7106",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "711203",
        "title": "广水市",
        "parentId": "7112",
        "pinyin": "guangshuishi",
        "initial": "G"
    },
    {
        "id": "720211",
        "title": "高新区",
        "parentId": "7202",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "720307",
        "title": "高新区",
        "parentId": "7203",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "720508",
        "title": "高新区",
        "parentId": "7205",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "720904",
        "title": "桂阳县",
        "parentId": "7209",
        "pinyin": "guiyangxian",
        "initial": "G"
    },
    {
        "id": "720910",
        "title": "桂东县",
        "parentId": "7209",
        "pinyin": "guidongxian",
        "initial": "G"
    },
    {
        "id": "721406",
        "title": "古丈县",
        "parentId": "7214",
        "pinyin": "guzhangxian",
        "initial": "G"
    },
    {
        "id": "800114",
        "title": "高陵县",
        "parentId": "8001",
        "pinyin": "gaolingxian",
        "initial": "G"
    },
    {
        "id": "800116",
        "title": "高新区",
        "parentId": "8001",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "800214",
        "title": "高新区",
        "parentId": "8002",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "800413",
        "title": "高新区",
        "parentId": "8004",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "800509",
        "title": "甘泉县",
        "parentId": "8005",
        "pinyin": "ganquanxian",
        "initial": "G"
    },
    {
        "id": "810301",
        "title": "共和县",
        "parentId": "8103",
        "pinyin": "gonghexian",
        "initial": "G"
    },
    {
        "id": "810303",
        "title": "贵德县",
        "parentId": "8103",
        "pinyin": "guidexian",
        "initial": "G"
    },
    {
        "id": "810305",
        "title": "贵南县",
        "parentId": "8103",
        "pinyin": "guinanxian",
        "initial": "G"
    },
    {
        "id": "810404",
        "title": "刚察县",
        "parentId": "8104",
        "pinyin": "gangchaxian",
        "initial": "G"
    },
    {
        "id": "810501",
        "title": "格尔木市",
        "parentId": "8105",
        "pinyin": "geermushi",
        "initial": "G"
    },
    {
        "id": "8107",
        "title": "果洛州",
        "parentId": "81",
        "pinyin": "guoluozhou",
        "initial": "G"
    },
    {
        "id": "810703",
        "title": "甘德县",
        "parentId": "8107",
        "pinyin": "gandexian",
        "initial": "G"
    },
    {
        "id": "8204",
        "title": "固原市",
        "parentId": "82",
        "pinyin": "guyuanshi",
        "initial": "G"
    },
    {
        "id": "830206",
        "title": "巩留县",
        "parentId": "8302",
        "pinyin": "gongliuxian",
        "initial": "G"
    },
    {
        "id": "830608",
        "title": "高新区",
        "parentId": "8306",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "84",
        "title": "甘肃省",
        "parentId": null,
        "pinyin": "gansusheng",
        "initial": "G"
    },
    {
        "id": "840108",
        "title": "皋兰县",
        "parentId": "8401",
        "pinyin": "gaolanxian",
        "initial": "G"
    },
    {
        "id": "840206",
        "title": "甘谷县",
        "parentId": "8402",
        "pinyin": "ganguxian",
        "initial": "G"
    },
    {
        "id": "840404",
        "title": "古浪县",
        "parentId": "8404",
        "pinyin": "gulangxian",
        "initial": "G"
    },
    {
        "id": "840604",
        "title": "瓜州县",
        "parentId": "8406",
        "pinyin": "guazhouxian",
        "initial": "G"
    },
    {
        "id": "840702",
        "title": "甘州区",
        "parentId": "8407",
        "pinyin": "ganzhouqu",
        "initial": "G"
    },
    {
        "id": "840706",
        "title": "高台县",
        "parentId": "8407",
        "pinyin": "gaotaixian",
        "initial": "G"
    },
    {
        "id": "841007",
        "title": "高新区",
        "parentId": "8410",
        "pinyin": "gaoxinqu",
        "initial": "G"
    },
    {
        "id": "841305",
        "title": "广河县",
        "parentId": "8413",
        "pinyin": "guanghexian",
        "initial": "G"
    },
    {
        "id": "8414",
        "title": "甘南州",
        "parentId": "84",
        "pinyin": "gannanzhou",
        "initial": "G"
    },
    {
        "id": "93",
        "title": "国外",
        "parentId": null,
        "pinyin": "guowai",
        "initial": "G"
    },
    {
        "id": "1006",
        "title": "海淀区",
        "parentId": "10",
        "pinyin": "haidianqu",
        "initial": "H"
    },
    {
        "id": "1016",
        "title": "怀柔区",
        "parentId": "10",
        "pinyin": "huairouqu",
        "initial": "H"
    },
    {
        "id": "1101",
        "title": "和平区",
        "parentId": "11",
        "pinyin": "hepingqu",
        "initial": "H"
    },
    {
        "id": "1102",
        "title": "河北区",
        "parentId": "11",
        "pinyin": "hebeiqu",
        "initial": "H"
    },
    {
        "id": "1103",
        "title": "河东区",
        "parentId": "11",
        "pinyin": "hedongqu",
        "initial": "H"
    },
    {
        "id": "1104",
        "title": "河西区",
        "parentId": "11",
        "pinyin": "hexiqu",
        "initial": "H"
    },
    {
        "id": "1106",
        "title": "红桥区",
        "parentId": "11",
        "pinyin": "hongqiaoqu",
        "initial": "H"
    },
    {
        "id": "12",
        "title": "河北省",
        "parentId": null,
        "pinyin": "hebeisheng",
        "initial": "H"
    },
    {
        "id": "120202",
        "title": "海港区",
        "parentId": "1202",
        "pinyin": "haigangqu",
        "initial": "H"
    },
    {
        "id": "120413",
        "title": "怀安县",
        "parentId": "1204",
        "pinyin": "huaianxian",
        "initial": "H"
    },
    {
        "id": "120415",
        "title": "怀来县",
        "parentId": "1204",
        "pinyin": "huailaixian",
        "initial": "H"
    },
    {
        "id": "1206",
        "title": "衡水市",
        "parentId": "12",
        "pinyin": "hengshuishi",
        "initial": "H"
    },
    {
        "id": "121007",
        "title": "海兴县",
        "parentId": "1210",
        "pinyin": "haixingxian",
        "initial": "H"
    },
    {
        "id": "121016",
        "title": "黄骅市",
        "parentId": "1210",
        "pinyin": "huangzuoshi",
        "initial": "H"
    },
    {
        "id": "121017",
        "title": "河间市",
        "parentId": "1210",
        "pinyin": "hejianshi",
        "initial": "H"
    },
    {
        "id": "1211",
        "title": "邯郸市",
        "parentId": "12",
        "pinyin": "handanshi",
        "initial": "H"
    },
    {
        "id": "121102",
        "title": "邯山区",
        "parentId": "1211",
        "pinyin": "hanshanqu",
        "initial": "H"
    },
    {
        "id": "121106",
        "title": "邯郸县",
        "parentId": "1211",
        "pinyin": "handanxian",
        "initial": "H"
    },
    {
        "id": "1301",
        "title": "呼和浩特市",
        "parentId": "13",
        "pinyin": "huhehaoteshi",
        "initial": "H"
    },
    {
        "id": "130103",
        "title": "回民区",
        "parentId": "1301",
        "pinyin": "huiminqu",
        "initial": "H"
    },
    {
        "id": "130108",
        "title": "和林格尔县",
        "parentId": "1301",
        "pinyin": "helingeerxian",
        "initial": "H"
    },
    {
        "id": "1303",
        "title": "呼伦贝尔市",
        "parentId": "13",
        "pinyin": "hulunbeiershi",
        "initial": "H"
    },
    {
        "id": "130302",
        "title": "海拉尔区",
        "parentId": "1303",
        "pinyin": "hailaerqu",
        "initial": "H"
    },
    {
        "id": "130509",
        "title": "霍林郭勒市",
        "parentId": "1305",
        "pinyin": "huolinguoleshi",
        "initial": "H"
    },
    {
        "id": "130602",
        "title": "红山区",
        "parentId": "1306",
        "pinyin": "hongshanqu",
        "initial": "H"
    },
    {
        "id": "130804",
        "title": "化德县",
        "parentId": "1308",
        "pinyin": "huadexian",
        "initial": "H"
    },
    {
        "id": "130907",
        "title": "杭锦旗",
        "parentId": "1309",
        "pinyin": "hangjinqi",
        "initial": "H"
    },
    {
        "id": "131008",
        "title": "杭锦后旗",
        "parentId": "1310",
        "pinyin": "hangjinhouqi",
        "initial": "H"
    },
    {
        "id": "131102",
        "title": "海勃湾区",
        "parentId": "1311",
        "pinyin": "haibowanqu",
        "initial": "H"
    },
    {
        "id": "131103",
        "title": "海南区",
        "parentId": "1311",
        "pinyin": "hainanqu",
        "initial": "H"
    },
    {
        "id": "140210",
        "title": "浑源县",
        "parentId": "1402",
        "pinyin": "hunyuanxian",
        "initial": "H"
    },
    {
        "id": "140409",
        "title": "壶关县",
        "parentId": "1404",
        "pinyin": "huguanxian",
        "initial": "H"
    },
    {
        "id": "140607",
        "title": "怀仁县",
        "parentId": "1406",
        "pinyin": "huairenxian",
        "initial": "H"
    },
    {
        "id": "140712",
        "title": "河曲县",
        "parentId": "1407",
        "pinyin": "hequxian",
        "initial": "H"
    },
    {
        "id": "140805",
        "title": "和顺县",
        "parentId": "1408",
        "pinyin": "heshunxian",
        "initial": "H"
    },
    {
        "id": "140906",
        "title": "洪洞县",
        "parentId": "1409",
        "pinyin": "hongdongxian",
        "initial": "H"
    },
    {
        "id": "140917",
        "title": "侯马市",
        "parentId": "1409",
        "pinyin": "houmashi",
        "initial": "H"
    },
    {
        "id": "140918",
        "title": "霍州市",
        "parentId": "1409",
        "pinyin": "huozhoushi",
        "initial": "H"
    },
    {
        "id": "141114",
        "title": "河津市",
        "parentId": "1411",
        "pinyin": "hejinshi",
        "initial": "H"
    },
    {
        "id": "200102",
        "title": "和平区",
        "parentId": "2001",
        "pinyin": "hepingqu",
        "initial": "H"
    },
    {
        "id": "200105",
        "title": "皇姑区",
        "parentId": "2001",
        "pinyin": "huangguqu",
        "initial": "H"
    },
    {
        "id": "200115",
        "title": "浑南新区",
        "parentId": "2001",
        "pinyin": "hunnanxinqu",
        "initial": "H"
    },
    {
        "id": "200308",
        "title": "海城市",
        "parentId": "2003",
        "pinyin": "haichengshi",
        "initial": "H"
    },
    {
        "id": "200405",
        "title": "黑山县",
        "parentId": "2004",
        "pinyin": "heishanxian",
        "initial": "H"
    },
    {
        "id": "201004",
        "title": "宏伟区",
        "parentId": "2010",
        "pinyin": "hongweiqu",
        "initial": "H"
    },
    {
        "id": "201102",
        "title": "海州区",
        "parentId": "2011",
        "pinyin": "haizhouqu",
        "initial": "H"
    },
    {
        "id": "201207",
        "title": "桓仁县",
        "parentId": "2012",
        "pinyin": "huanrenxian",
        "initial": "H"
    },
    {
        "id": "2014",
        "title": "葫芦岛市",
        "parentId": "20",
        "pinyin": "huludaoshi",
        "initial": "H"
    },
    {
        "id": "210505",
        "title": "辉南县",
        "parentId": "2105",
        "pinyin": "huinanxian",
        "initial": "H"
    },
    {
        "id": "210906",
        "title": "和龙市",
        "parentId": "2109",
        "pinyin": "helongshi",
        "initial": "H"
    },
    {
        "id": "22",
        "title": "黑龙江省",
        "parentId": null,
        "pinyin": "heilongjiangsheng",
        "initial": "H"
    },
    {
        "id": "2201",
        "title": "哈尔滨市",
        "parentId": "22",
        "pinyin": "haerbinshi",
        "initial": "H"
    },
    {
        "id": "220108",
        "title": "呼兰区",
        "parentId": "2201",
        "pinyin": "hulanqu",
        "initial": "H"
    },
    {
        "id": "220303",
        "title": "恒山区",
        "parentId": "2203",
        "pinyin": "hengshanqu",
        "initial": "H"
    },
    {
        "id": "220309",
        "title": "虎林市",
        "parentId": "2203",
        "pinyin": "hulinshi",
        "initial": "H"
    },
    {
        "id": "2204",
        "title": "鹤岗市",
        "parentId": "22",
        "pinyin": "hegangshi",
        "initial": "H"
    },
    {
        "id": "220605",
        "title": "红岗区",
        "parentId": "2206",
        "pinyin": "honggangqu",
        "initial": "H"
    },
    {
        "id": "220715",
        "title": "红星区",
        "parentId": "2207",
        "pinyin": "hongxingqu",
        "initial": "H"
    },
    {
        "id": "221009",
        "title": "海林市",
        "parentId": "2210",
        "pinyin": "hailinshi",
        "initial": "H"
    },
    {
        "id": "2211",
        "title": "黑河市",
        "parentId": "22",
        "pinyin": "heiheshi",
        "initial": "H"
    },
    {
        "id": "221211",
        "title": "海伦市",
        "parentId": "2212",
        "pinyin": "hailunshi",
        "initial": "H"
    },
    {
        "id": "221304",
        "title": "呼中区",
        "parentId": "2213",
        "pinyin": "huzhongqu",
        "initial": "H"
    },
    {
        "id": "221305",
        "title": "呼玛县",
        "parentId": "2213",
        "pinyin": "humaxian",
        "initial": "H"
    },
    {
        "id": "3013",
        "title": "虹口区",
        "parentId": "30",
        "pinyin": "hongkouqu",
        "initial": "H"
    },
    {
        "id": "3016",
        "title": "黄浦区",
        "parentId": "30",
        "pinyin": "huangpuqu",
        "initial": "H"
    },
    {
        "id": "310205",
        "title": "虎丘区",
        "parentId": "3102",
        "pinyin": "huqiuqu",
        "initial": "H"
    },
    {
        "id": "310306",
        "title": "惠山区",
        "parentId": "3103",
        "pinyin": "huishanqu",
        "initial": "H"
    },
    {
        "id": "310604",
        "title": "海安县",
        "parentId": "3106",
        "pinyin": "haianxian",
        "initial": "H"
    },
    {
        "id": "310609",
        "title": "海门市",
        "parentId": "3106",
        "pinyin": "haimenshi",
        "initial": "H"
    },
    {
        "id": "310904",
        "title": "海州区",
        "parentId": "3109",
        "pinyin": "haizhouqu",
        "initial": "H"
    },
    {
        "id": "3111",
        "title": "淮安市",
        "parentId": "31",
        "pinyin": "huaianshi",
        "initial": "H"
    },
    {
        "id": "311104",
        "title": "淮阴区",
        "parentId": "3111",
        "pinyin": "huaiyinqu",
        "initial": "H"
    },
    {
        "id": "311107",
        "title": "洪泽县",
        "parentId": "3111",
        "pinyin": "hongzexian",
        "initial": "H"
    },
    {
        "id": "311202",
        "title": "海陵区",
        "parentId": "3112",
        "pinyin": "hailingqu",
        "initial": "H"
    },
    {
        "id": "320104",
        "title": "槐荫区",
        "parentId": "3201",
        "pinyin": "huaiyinqu",
        "initial": "H"
    },
    {
        "id": "320205",
        "title": "黄岛区",
        "parentId": "3202",
        "pinyin": "huangdaoqu",
        "initial": "H"
    },
    {
        "id": "320313",
        "title": "海阳市",
        "parentId": "3203",
        "pinyin": "haiyangshi",
        "initial": "H"
    },
    {
        "id": "320407",
        "title": "桓台县",
        "parentId": "3204",
        "pinyin": "huantaixian",
        "initial": "H"
    },
    {
        "id": "320603",
        "title": "寒亭区",
        "parentId": "3206",
        "pinyin": "hantingqu",
        "initial": "H"
    },
    {
        "id": "321002",
        "title": "环翠区",
        "parentId": "3210",
        "pinyin": "huancuiqu",
        "initial": "H"
    },
    {
        "id": "321303",
        "title": "惠民县",
        "parentId": "3213",
        "pinyin": "huiminxian",
        "initial": "H"
    },
    {
        "id": "321403",
        "title": "河口区",
        "parentId": "3214",
        "pinyin": "hekouqu",
        "initial": "H"
    },
    {
        "id": "3216",
        "title": "菏泽市",
        "parentId": "32",
        "pinyin": "hezeshi",
        "initial": "H"
    },
    {
        "id": "321704",
        "title": "河东区",
        "parentId": "3217",
        "pinyin": "hedongqu",
        "initial": "H"
    },
    {
        "id": "3301",
        "title": "合肥市",
        "parentId": "33",
        "pinyin": "hefeishi",
        "initial": "H"
    },
    {
        "id": "330305",
        "title": "淮上区",
        "parentId": "3303",
        "pinyin": "huaishangqu",
        "initial": "H"
    },
    {
        "id": "330306",
        "title": "怀远县",
        "parentId": "3303",
        "pinyin": "huaiyuanxian",
        "initial": "H"
    },
    {
        "id": "330403",
        "title": "花山区",
        "parentId": "3304",
        "pinyin": "huashanqu",
        "initial": "H"
    },
    {
        "id": "3305",
        "title": "淮北市",
        "parentId": "33",
        "pinyin": "huaibeishi",
        "initial": "H"
    },
    {
        "id": "330705",
        "title": "怀宁县",
        "parentId": "3307",
        "pinyin": "huainingxian",
        "initial": "H"
    },
    {
        "id": "3308",
        "title": "黄山市",
        "parentId": "33",
        "pinyin": "huangshanshi",
        "initial": "H"
    },
    {
        "id": "330803",
        "title": "黄山区",
        "parentId": "3308",
        "pinyin": "huangshanqu",
        "initial": "H"
    },
    {
        "id": "330804",
        "title": "徽州区",
        "parentId": "3308",
        "pinyin": "huizhouqu",
        "initial": "H"
    },
    {
        "id": "3312",
        "title": "淮南市",
        "parentId": "33",
        "pinyin": "huainanshi",
        "initial": "H"
    },
    {
        "id": "331305",
        "title": "含山县",
        "parentId": "3313",
        "pinyin": "hanshanxian",
        "initial": "H"
    },
    {
        "id": "331306",
        "title": "和县",
        "parentId": "3313",
        "pinyin": "hexian",
        "initial": "H"
    },
    {
        "id": "331505",
        "title": "霍邱县",
        "parentId": "3315",
        "pinyin": "huoqiuxian",
        "initial": "H"
    },
    {
        "id": "331508",
        "title": "霍山县",
        "parentId": "3315",
        "pinyin": "huoshanxian",
        "initial": "H"
    },
    {
        "id": "340203",
        "title": "海沧区",
        "parentId": "3402",
        "pinyin": "haicangqu",
        "initial": "H"
    },
    {
        "id": "340204",
        "title": "湖里区",
        "parentId": "3402",
        "pinyin": "huliqu",
        "initial": "H"
    },
    {
        "id": "340311",
        "title": "华安县",
        "parentId": "3403",
        "pinyin": "huaanxian",
        "initial": "H"
    },
    {
        "id": "340406",
        "title": "惠安县",
        "parentId": "3404",
        "pinyin": "huianxian",
        "initial": "H"
    },
    {
        "id": "340503",
        "title": "涵江区",
        "parentId": "3405",
        "pinyin": "hanjiangqu",
        "initial": "H"
    },
    {
        "id": "3501",
        "title": "杭州市",
        "parentId": "35",
        "pinyin": "hangzhoushi",
        "initial": "H"
    },
    {
        "id": "350202",
        "title": "海曙区",
        "parentId": "3502",
        "pinyin": "haishuqu",
        "initial": "H"
    },
    {
        "id": "350405",
        "title": "海盐县",
        "parentId": "3504",
        "pinyin": "haiyanxian",
        "initial": "H"
    },
    {
        "id": "350406",
        "title": "海宁市",
        "parentId": "3504",
        "pinyin": "hainingshi",
        "initial": "H"
    },
    {
        "id": "3505",
        "title": "湖州市",
        "parentId": "35",
        "pinyin": "huzhoushi",
        "initial": "H"
    },
    {
        "id": "351003",
        "title": "黄岩区",
        "parentId": "3510",
        "pinyin": "huangyanqu",
        "initial": "H"
    },
    {
        "id": "360411",
        "title": "湖口县",
        "parentId": "3604",
        "pinyin": "hukouxian",
        "initial": "H"
    },
    {
        "id": "360715",
        "title": "会昌县",
        "parentId": "3607",
        "pinyin": "huichangxian",
        "initial": "H"
    },
    {
        "id": "361107",
        "title": "横峰县",
        "parentId": "3611",
        "pinyin": "hengfengxian",
        "initial": "H"
    },
    {
        "id": "400104",
        "title": "海珠区",
        "parentId": "4001",
        "pinyin": "haizhuqu",
        "initial": "H"
    },
    {
        "id": "400107",
        "title": "黄埔区",
        "parentId": "4001",
        "pinyin": "huangpuqu",
        "initial": "H"
    },
    {
        "id": "400109",
        "title": "花都区",
        "parentId": "4001",
        "pinyin": "huaduqu",
        "initial": "H"
    },
    {
        "id": "4006",
        "title": "河源市",
        "parentId": "40",
        "pinyin": "heyuanshi",
        "initial": "H"
    },
    {
        "id": "400606",
        "title": "和平县",
        "parentId": "4006",
        "pinyin": "hepingxian",
        "initial": "H"
    },
    {
        "id": "4008",
        "title": "惠州市",
        "parentId": "40",
        "pinyin": "huizhoushi",
        "initial": "H"
    },
    {
        "id": "400802",
        "title": "惠城区",
        "parentId": "4008",
        "pinyin": "huichengqu",
        "initial": "H"
    },
    {
        "id": "400803",
        "title": "惠阳区",
        "parentId": "4008",
        "pinyin": "huiyangqu",
        "initial": "H"
    },
    {
        "id": "400805",
        "title": "惠东县",
        "parentId": "4008",
        "pinyin": "huidongxian",
        "initial": "H"
    },
    {
        "id": "400903",
        "title": "海丰县",
        "parentId": "4009",
        "pinyin": "haifengxian",
        "initial": "H"
    },
    {
        "id": "401207",
        "title": "鹤山市",
        "parentId": "4012",
        "pinyin": "heshanshi",
        "initial": "H"
    },
    {
        "id": "401606",
        "title": "化州市",
        "parentId": "4016",
        "pinyin": "huazhoushi",
        "initial": "H"
    },
    {
        "id": "401705",
        "title": "怀集县",
        "parentId": "4017",
        "pinyin": "huaijixian",
        "initial": "H"
    },
    {
        "id": "402005",
        "title": "惠来县",
        "parentId": "4020",
        "pinyin": "huilaixian",
        "initial": "H"
    },
    {
        "id": "410113",
        "title": "横县",
        "parentId": "4101",
        "pinyin": "hengxian",
        "initial": "H"
    },
    {
        "id": "410502",
        "title": "海城区",
        "parentId": "4105",
        "pinyin": "haichengqu",
        "initial": "H"
    },
    {
        "id": "410505",
        "title": "合浦县",
        "parentId": "4105",
        "pinyin": "hepuxian",
        "initial": "H"
    },
    {
        "id": "4111",
        "title": "贺州市",
        "parentId": "41",
        "pinyin": "hezhoushi",
        "initial": "H"
    },
    {
        "id": "4112",
        "title": "河池市",
        "parentId": "41",
        "pinyin": "hechishi",
        "initial": "H"
    },
    {
        "id": "411208",
        "title": "环江县",
        "parentId": "4112",
        "pinyin": "huanjiangxian",
        "initial": "H"
    },
    {
        "id": "411307",
        "title": "合山市",
        "parentId": "4113",
        "pinyin": "heshanshi",
        "initial": "H"
    },
    {
        "id": "42",
        "title": "海南省",
        "parentId": null,
        "pinyin": "hainansheng",
        "initial": "H"
    },
    {
        "id": "4201",
        "title": "海口市",
        "parentId": "42",
        "pinyin": "haikoushi",
        "initial": "H"
    },
    {
        "id": "6017",
        "title": "合川区",
        "parentId": "60",
        "pinyin": "hechuanqu",
        "initial": "H"
    },
    {
        "id": "610405",
        "title": "洪雅县",
        "parentId": "6104",
        "pinyin": "hongyaxian",
        "initial": "H"
    },
    {
        "id": "610506",
        "title": "合江县",
        "parentId": "6105",
        "pinyin": "hejiangxian",
        "initial": "H"
    },
    {
        "id": "611105",
        "title": "汉源县",
        "parentId": "6111",
        "pinyin": "hanyuanxian",
        "initial": "H"
    },
    {
        "id": "611606",
        "title": "华蓥市",
        "parentId": "6116",
        "pinyin": "huazuoshi",
        "initial": "H"
    },
    {
        "id": "611808",
        "title": "黑水县",
        "parentId": "6118",
        "pinyin": "heishuixian",
        "initial": "H"
    },
    {
        "id": "611813",
        "title": "红原县",
        "parentId": "6118",
        "pinyin": "hongyuanxian",
        "initial": "H"
    },
    {
        "id": "612105",
        "title": "会理县",
        "parentId": "6121",
        "pinyin": "huilixian",
        "initial": "H"
    },
    {
        "id": "612106",
        "title": "会东县",
        "parentId": "6121",
        "pinyin": "huidongxian",
        "initial": "H"
    },
    {
        "id": "620208",
        "title": "会泽县",
        "parentId": "6202",
        "pinyin": "huizexian",
        "initial": "H"
    },
    {
        "id": "620302",
        "title": "红塔区",
        "parentId": "6203",
        "pinyin": "hongtaqu",
        "initial": "H"
    },
    {
        "id": "620306",
        "title": "华宁县",
        "parentId": "6203",
        "pinyin": "huaningxian",
        "initial": "H"
    },
    {
        "id": "6206",
        "title": "红河哈尼族州",
        "parentId": "62",
        "pinyin": "honghehanizuzhou",
        "initial": "H"
    },
    {
        "id": "620610",
        "title": "红河县",
        "parentId": "6206",
        "pinyin": "honghexian",
        "initial": "H"
    },
    {
        "id": "620613",
        "title": "河口县",
        "parentId": "6206",
        "pinyin": "hekouxian",
        "initial": "H"
    },
    {
        "id": "620705",
        "title": "华坪县",
        "parentId": "6207",
        "pinyin": "huapingxian",
        "initial": "H"
    },
    {
        "id": "621212",
        "title": "鹤庆县",
        "parentId": "6212",
        "pinyin": "heqingxian",
        "initial": "H"
    },
    {
        "id": "630104",
        "title": "花溪区",
        "parentId": "6301",
        "pinyin": "huaxiqu",
        "initial": "H"
    },
    {
        "id": "630202",
        "title": "红花岗区",
        "parentId": "6302",
        "pinyin": "honghuagangqu",
        "initial": "H"
    },
    {
        "id": "630203",
        "title": "汇川区",
        "parentId": "6302",
        "pinyin": "huichuanqu",
        "initial": "H"
    },
    {
        "id": "630611",
        "title": "惠水县",
        "parentId": "6306",
        "pinyin": "huishuixian",
        "initial": "H"
    },
    {
        "id": "630808",
        "title": "赫章县",
        "parentId": "6308",
        "pinyin": "hezhangxian",
        "initial": "H"
    },
    {
        "id": "630902",
        "title": "黄平县",
        "parentId": "6309",
        "pinyin": "huangpingxian",
        "initial": "H"
    },
    {
        "id": "70",
        "title": "河南省",
        "parentId": null,
        "pinyin": "henansheng",
        "initial": "H"
    },
    {
        "id": "700107",
        "title": "惠济区",
        "parentId": "7001",
        "pinyin": "huijiqu",
        "initial": "H"
    },
    {
        "id": "700204",
        "title": "瀍河回族区",
        "parentId": "7002",
        "pinyin": "hehuizuqu",
        "initial": "H"
    },
    {
        "id": "700408",
        "title": "滑县",
        "parentId": "7004",
        "pinyin": "huaxian",
        "initial": "H"
    },
    {
        "id": "700502",
        "title": "红旗区",
        "parentId": "7005",
        "pinyin": "hongqiqu",
        "initial": "H"
    },
    {
        "id": "700507",
        "title": "获嘉县",
        "parentId": "7005",
        "pinyin": "huojiaxian",
        "initial": "H"
    },
    {
        "id": "700513",
        "title": "辉县市",
        "parentId": "7005",
        "pinyin": "huixianshi",
        "initial": "H"
    },
    {
        "id": "700602",
        "title": "华龙区",
        "parentId": "7006",
        "pinyin": "hualongqu",
        "initial": "H"
    },
    {
        "id": "7008",
        "title": "鹤壁市",
        "parentId": "70",
        "pinyin": "hebishi",
        "initial": "H"
    },
    {
        "id": "700802",
        "title": "鹤山区",
        "parentId": "7008",
        "pinyin": "heshanqu",
        "initial": "H"
    },
    {
        "id": "700902",
        "title": "湖滨区",
        "parentId": "7009",
        "pinyin": "hubinqu",
        "initial": "H"
    },
    {
        "id": "701508",
        "title": "淮阳县",
        "parentId": "7015",
        "pinyin": "huaiyangxian",
        "initial": "H"
    },
    {
        "id": "701702",
        "title": "浉河区",
        "parentId": "7017",
        "pinyin": "hequ",
        "initial": "H"
    },
    {
        "id": "701710",
        "title": "淮滨县",
        "parentId": "7017",
        "pinyin": "huaibinxian",
        "initial": "H"
    },
    {
        "id": "71",
        "title": "湖北省",
        "parentId": null,
        "pinyin": "hubeisheng",
        "initial": "H"
    },
    {
        "id": "710105",
        "title": "汉阳区",
        "parentId": "7101",
        "pinyin": "hanyangqu",
        "initial": "H"
    },
    {
        "id": "710108",
        "title": "洪山区",
        "parentId": "7101",
        "pinyin": "hongshanqu",
        "initial": "H"
    },
    {
        "id": "710110",
        "title": "汉南区",
        "parentId": "7101",
        "pinyin": "hannanqu",
        "initial": "H"
    },
    {
        "id": "710113",
        "title": "黄陂区",
        "parentId": "7101",
        "pinyin": "huangzuoqu",
        "initial": "H"
    },
    {
        "id": "7102",
        "title": "黄石市",
        "parentId": "71",
        "pinyin": "huangshishi",
        "initial": "H"
    },
    {
        "id": "710202",
        "title": "黄石港区",
        "parentId": "7102",
        "pinyin": "huangshigangqu",
        "initial": "H"
    },
    {
        "id": "710508",
        "title": "洪湖市",
        "parentId": "7105",
        "pinyin": "honghushi",
        "initial": "H"
    },
    {
        "id": "710803",
        "title": "华容区",
        "parentId": "7108",
        "pinyin": "huarongqu",
        "initial": "H"
    },
    {
        "id": "710908",
        "title": "汉川市",
        "parentId": "7109",
        "pinyin": "hanchuanshi",
        "initial": "H"
    },
    {
        "id": "7110",
        "title": "黄冈市",
        "parentId": "71",
        "pinyin": "huanggangshi",
        "initial": "H"
    },
    {
        "id": "711002",
        "title": "黄州区",
        "parentId": "7110",
        "pinyin": "huangzhouqu",
        "initial": "H"
    },
    {
        "id": "711004",
        "title": "红安县",
        "parentId": "7110",
        "pinyin": "honganxian",
        "initial": "H"
    },
    {
        "id": "711009",
        "title": "黄梅县",
        "parentId": "7110",
        "pinyin": "huangmeixian",
        "initial": "H"
    },
    {
        "id": "711308",
        "title": "鹤峰县",
        "parentId": "7113",
        "pinyin": "hefengxian",
        "initial": "H"
    },
    {
        "id": "72",
        "title": "湖南省",
        "parentId": null,
        "pinyin": "hunansheng",
        "initial": "H"
    },
    {
        "id": "720202",
        "title": "荷塘区",
        "parentId": "7202",
        "pinyin": "hetangqu",
        "initial": "H"
    },
    {
        "id": "7204",
        "title": "衡阳市",
        "parentId": "72",
        "pinyin": "hengyangshi",
        "initial": "H"
    },
    {
        "id": "720407",
        "title": "衡阳县",
        "parentId": "7204",
        "pinyin": "hengyangxian",
        "initial": "H"
    },
    {
        "id": "720408",
        "title": "衡南县",
        "parentId": "7204",
        "pinyin": "hengnanxian",
        "initial": "H"
    },
    {
        "id": "720409",
        "title": "衡山县",
        "parentId": "7204",
        "pinyin": "hengshanxian",
        "initial": "H"
    },
    {
        "id": "720410",
        "title": "衡东县",
        "parentId": "7204",
        "pinyin": "hengdongxian",
        "initial": "H"
    },
    {
        "id": "720503",
        "title": "赫山区",
        "parentId": "7205",
        "pinyin": "heshanqu",
        "initial": "H"
    },
    {
        "id": "720605",
        "title": "汉寿县",
        "parentId": "7206",
        "pinyin": "hanshouxian",
        "initial": "H"
    },
    {
        "id": "720706",
        "title": "华容县",
        "parentId": "7207",
        "pinyin": "huarongxian",
        "initial": "H"
    },
    {
        "id": "7212",
        "title": "怀化市",
        "parentId": "72",
        "pinyin": "huaihuashi",
        "initial": "H"
    },
    {
        "id": "721202",
        "title": "鹤城区",
        "parentId": "7212",
        "pinyin": "hechengqu",
        "initial": "H"
    },
    {
        "id": "721207",
        "title": "会同县",
        "parentId": "7212",
        "pinyin": "huitongxian",
        "initial": "H"
    },
    {
        "id": "721213",
        "title": "洪江市",
        "parentId": "7212",
        "pinyin": "hongjiangshi",
        "initial": "H"
    },
    {
        "id": "721404",
        "title": "花垣县",
        "parentId": "7214",
        "pinyin": "huayuanxian",
        "initial": "H"
    },
    {
        "id": "800113",
        "title": "户县",
        "parentId": "8001",
        "pinyin": "huxian",
        "initial": "H"
    },
    {
        "id": "800403",
        "title": "华县",
        "parentId": "8004",
        "pinyin": "huaxian",
        "initial": "H"
    },
    {
        "id": "800406",
        "title": "合阳县",
        "parentId": "8004",
        "pinyin": "heyangxian",
        "initial": "H"
    },
    {
        "id": "800411",
        "title": "韩城市",
        "parentId": "8004",
        "pinyin": "hanchengshi",
        "initial": "H"
    },
    {
        "id": "800412",
        "title": "华阴市",
        "parentId": "8004",
        "pinyin": "huayinshi",
        "initial": "H"
    },
    {
        "id": "800513",
        "title": "黄龙县",
        "parentId": "8005",
        "pinyin": "huanglongxian",
        "initial": "H"
    },
    {
        "id": "800514",
        "title": "黄陵县",
        "parentId": "8005",
        "pinyin": "huanglingxian",
        "initial": "H"
    },
    {
        "id": "800605",
        "title": "横山县",
        "parentId": "8006",
        "pinyin": "hengshanxian",
        "initial": "H"
    },
    {
        "id": "8008",
        "title": "汉中市",
        "parentId": "80",
        "pinyin": "hanzhongshi",
        "initial": "H"
    },
    {
        "id": "800802",
        "title": "汉台区",
        "parentId": "8008",
        "pinyin": "hantaiqu",
        "initial": "H"
    },
    {
        "id": "800902",
        "title": "汉滨区",
        "parentId": "8009",
        "pinyin": "hanbinqu",
        "initial": "H"
    },
    {
        "id": "800903",
        "title": "汉阴县",
        "parentId": "8009",
        "pinyin": "hanyinxian",
        "initial": "H"
    },
    {
        "id": "8102",
        "title": "海东地区",
        "parentId": "81",
        "pinyin": "haidongdiqu",
        "initial": "H"
    },
    {
        "id": "810204",
        "title": "互助县",
        "parentId": "8102",
        "pinyin": "huzhuxian",
        "initial": "H"
    },
    {
        "id": "810205",
        "title": "化隆县",
        "parentId": "8102",
        "pinyin": "hualongxian",
        "initial": "H"
    },
    {
        "id": "8103",
        "title": "海南州",
        "parentId": "81",
        "pinyin": "hainanzhou",
        "initial": "H"
    },
    {
        "id": "8104",
        "title": "海北州",
        "parentId": "81",
        "pinyin": "haibeizhou",
        "initial": "H"
    },
    {
        "id": "810403",
        "title": "海晏县",
        "parentId": "8104",
        "pinyin": "haizuoxian",
        "initial": "H"
    },
    {
        "id": "8105",
        "title": "海西蒙古族州",
        "parentId": "81",
        "pinyin": "haiximengguzuzhou",
        "initial": "H"
    },
    {
        "id": "8106",
        "title": "黄南州",
        "parentId": "81",
        "pinyin": "huangnanzhou",
        "initial": "H"
    },
    {
        "id": "810604",
        "title": "河南县",
        "parentId": "8106",
        "pinyin": "henanxian",
        "initial": "H"
    },
    {
        "id": "820106",
        "title": "贺兰县",
        "parentId": "8201",
        "pinyin": "helanxian",
        "initial": "H"
    },
    {
        "id": "820203",
        "title": "惠农区",
        "parentId": "8202",
        "pinyin": "huinongqu",
        "initial": "H"
    },
    {
        "id": "820504",
        "title": "海原县",
        "parentId": "8205",
        "pinyin": "haiyuanxian",
        "initial": "H"
    },
    {
        "id": "830205",
        "title": "霍城县",
        "parentId": "8302",
        "pinyin": "huochengxian",
        "initial": "H"
    },
    {
        "id": "830305",
        "title": "哈巴河县",
        "parentId": "8303",
        "pinyin": "habahexian",
        "initial": "H"
    },
    {
        "id": "830407",
        "title": "和布克赛尔",
        "parentId": "8304",
        "pinyin": "hebukesaier",
        "initial": "H"
    },
    {
        "id": "830603",
        "title": "呼图壁县",
        "parentId": "8306",
        "pinyin": "hutubixian",
        "initial": "H"
    },
    {
        "id": "830807",
        "title": "和静县",
        "parentId": "8308",
        "pinyin": "hejingxian",
        "initial": "H"
    },
    {
        "id": "830808",
        "title": "和硕县",
        "parentId": "8308",
        "pinyin": "heshuoxian",
        "initial": "H"
    },
    {
        "id": "8309",
        "title": "哈密地区",
        "parentId": "83",
        "pinyin": "hamidiqu",
        "initial": "H"
    },
    {
        "id": "830901",
        "title": "哈密市",
        "parentId": "8309",
        "pinyin": "hamishi",
        "initial": "H"
    },
    {
        "id": "8310",
        "title": "和田地区",
        "parentId": "83",
        "pinyin": "hetiandiqu",
        "initial": "H"
    },
    {
        "id": "831001",
        "title": "和田市",
        "parentId": "8310",
        "pinyin": "hetianshi",
        "initial": "H"
    },
    {
        "id": "831002",
        "title": "和田县",
        "parentId": "8310",
        "pinyin": "hetianxian",
        "initial": "H"
    },
    {
        "id": "840106",
        "title": "红古区",
        "parentId": "8401",
        "pinyin": "hongguqu",
        "initial": "H"
    },
    {
        "id": "840804",
        "title": "环县",
        "parentId": "8408",
        "pinyin": "huanxian",
        "initial": "H"
    },
    {
        "id": "840805",
        "title": "华池县",
        "parentId": "8408",
        "pinyin": "huachixian",
        "initial": "H"
    },
    {
        "id": "840806",
        "title": "合水县",
        "parentId": "8408",
        "pinyin": "heshuixian",
        "initial": "H"
    },
    {
        "id": "840906",
        "title": "华亭县",
        "parentId": "8409",
        "pinyin": "huatingxian",
        "initial": "H"
    },
    {
        "id": "841005",
        "title": "会宁县",
        "parentId": "8410",
        "pinyin": "huiningxian",
        "initial": "H"
    },
    {
        "id": "841209",
        "title": "徽县",
        "parentId": "8412",
        "pinyin": "huixian",
        "initial": "H"
    },
    {
        "id": "841306",
        "title": "和政县",
        "parentId": "8413",
        "pinyin": "hezhengxian",
        "initial": "H"
    },
    {
        "id": "841401",
        "title": "合作市",
        "parentId": "8414",
        "pinyin": "hezuoshi",
        "initial": "H"
    },
    {
        "id": "1112",
        "title": "津南区",
        "parentId": "11",
        "pinyin": "jinnanqu",
        "initial": "J"
    },
    {
        "id": "1116",
        "title": "蓟县",
        "parentId": "11",
        "pinyin": "jixian",
        "initial": "J"
    },
    {
        "id": "1118",
        "title": "静海县",
        "parentId": "11",
        "pinyin": "jinghaixian",
        "initial": "J"
    },
    {
        "id": "120106",
        "title": "井陉矿区",
        "parentId": "1201",
        "pinyin": "jingzuokuangqu",
        "initial": "J"
    },
    {
        "id": "120108",
        "title": "井陉县",
        "parentId": "1201",
        "pinyin": "jingzuoxian",
        "initial": "J"
    },
    {
        "id": "120122",
        "title": "晋州市",
        "parentId": "1201",
        "pinyin": "jinzhoushi",
        "initial": "J"
    },
    {
        "id": "120609",
        "title": "景县",
        "parentId": "1206",
        "pinyin": "jingxian",
        "initial": "J"
    },
    {
        "id": "120611",
        "title": "冀州市",
        "parentId": "1206",
        "pinyin": "jizhoushi",
        "initial": "J"
    },
    {
        "id": "120912",
        "title": "巨鹿县",
        "parentId": "1209",
        "pinyin": "juluxian",
        "initial": "J"
    },
    {
        "id": "121115",
        "title": "鸡泽县",
        "parentId": "1211",
        "pinyin": "jizexian",
        "initial": "J"
    },
    {
        "id": "130207",
        "title": "九原区",
        "parentId": "1302",
        "pinyin": "jiuyuanqu",
        "initial": "J"
    },
    {
        "id": "130802",
        "title": "集宁区",
        "parentId": "1308",
        "pinyin": "jiningqu",
        "initial": "J"
    },
    {
        "id": "140105",
        "title": "尖草坪区",
        "parentId": "1401",
        "pinyin": "jiancaopingqu",
        "initial": "J"
    },
    {
        "id": "140107",
        "title": "晋源区",
        "parentId": "1401",
        "pinyin": "jinyuanqu",
        "initial": "J"
    },
    {
        "id": "140304",
        "title": "郊区",
        "parentId": "1403",
        "pinyin": "jiaoqu",
        "initial": "J"
    },
    {
        "id": "140403",
        "title": "郊区",
        "parentId": "1404",
        "pinyin": "jiaoqu",
        "initial": "J"
    },
    {
        "id": "1405",
        "title": "晋城市",
        "parentId": "14",
        "pinyin": "jinchengshi",
        "initial": "J"
    },
    {
        "id": "140708",
        "title": "静乐县",
        "parentId": "1407",
        "pinyin": "jinglexian",
        "initial": "J"
    },
    {
        "id": "1408",
        "title": "晋中市",
        "parentId": "14",
        "pinyin": "jinzhongshi",
        "initial": "J"
    },
    {
        "id": "140812",
        "title": "介休市",
        "parentId": "1408",
        "pinyin": "jiexiushi",
        "initial": "J"
    },
    {
        "id": "140910",
        "title": "吉县",
        "parentId": "1409",
        "pinyin": "jixian",
        "initial": "J"
    },
    {
        "id": "141004",
        "title": "交城县",
        "parentId": "1410",
        "pinyin": "jiaochengxian",
        "initial": "J"
    },
    {
        "id": "141012",
        "title": "交口县",
        "parentId": "1410",
        "pinyin": "jiaokouxian",
        "initial": "J"
    },
    {
        "id": "200207",
        "title": "金州区",
        "parentId": "2002",
        "pinyin": "jinzhouqu",
        "initial": "J"
    },
    {
        "id": "2004",
        "title": "锦州市",
        "parentId": "20",
        "pinyin": "jinzhoushi",
        "initial": "J"
    },
    {
        "id": "201305",
        "title": "建平县",
        "parentId": "2013",
        "pinyin": "jianpingxian",
        "initial": "J"
    },
    {
        "id": "201406",
        "title": "建昌县",
        "parentId": "2014",
        "pinyin": "jianchangxian",
        "initial": "J"
    },
    {
        "id": "21",
        "title": "吉林省",
        "parentId": null,
        "pinyin": "jilinsheng",
        "initial": "J"
    },
    {
        "id": "210109",
        "title": "九台市",
        "parentId": "2101",
        "pinyin": "jiutaishi",
        "initial": "J"
    },
    {
        "id": "2102",
        "title": "吉林市",
        "parentId": "21",
        "pinyin": "jilinshi",
        "initial": "J"
    },
    {
        "id": "210508",
        "title": "集安市",
        "parentId": "2105",
        "pinyin": "jianshi",
        "initial": "J"
    },
    {
        "id": "210603",
        "title": "江源区",
        "parentId": "2106",
        "pinyin": "jiangyuanqu",
        "initial": "J"
    },
    {
        "id": "210605",
        "title": "靖宇县",
        "parentId": "2106",
        "pinyin": "jingyuxian",
        "initial": "J"
    },
    {
        "id": "220203",
        "title": "建华区",
        "parentId": "2202",
        "pinyin": "jianhuaqu",
        "initial": "J"
    },
    {
        "id": "2203",
        "title": "鸡西市",
        "parentId": "22",
        "pinyin": "jixishi",
        "initial": "J"
    },
    {
        "id": "220302",
        "title": "鸡冠区",
        "parentId": "2203",
        "pinyin": "jiguanqu",
        "initial": "J"
    },
    {
        "id": "220308",
        "title": "鸡东县",
        "parentId": "2203",
        "pinyin": "jidongxian",
        "initial": "J"
    },
    {
        "id": "220502",
        "title": "尖山区",
        "parentId": "2205",
        "pinyin": "jianshanqu",
        "initial": "J"
    },
    {
        "id": "220506",
        "title": "集贤县",
        "parentId": "2205",
        "pinyin": "jixianxian",
        "initial": "J"
    },
    {
        "id": "220709",
        "title": "金山屯区",
        "parentId": "2207",
        "pinyin": "jinshantunqu",
        "initial": "J"
    },
    {
        "id": "220717",
        "title": "嘉荫县",
        "parentId": "2207",
        "pinyin": "jiayinxian",
        "initial": "J"
    },
    {
        "id": "2208",
        "title": "佳木斯市",
        "parentId": "22",
        "pinyin": "jiamusishi",
        "initial": "J"
    },
    {
        "id": "220805",
        "title": "郊区",
        "parentId": "2208",
        "pinyin": "jiaoqu",
        "initial": "J"
    },
    {
        "id": "221301",
        "title": "加格达奇区",
        "parentId": "2213",
        "pinyin": "jiagedaqiqu",
        "initial": "J"
    },
    {
        "id": "3002",
        "title": "金山区",
        "parentId": "30",
        "pinyin": "jinshanqu",
        "initial": "J"
    },
    {
        "id": "3005",
        "title": "静安区",
        "parentId": "30",
        "pinyin": "jinganqu",
        "initial": "J"
    },
    {
        "id": "3019",
        "title": "嘉定区",
        "parentId": "30",
        "pinyin": "jiadingqu",
        "initial": "J"
    },
    {
        "id": "31",
        "title": "江苏省",
        "parentId": null,
        "pinyin": "jiangsusheng",
        "initial": "J"
    },
    {
        "id": "310105",
        "title": "建邺区",
        "parentId": "3101",
        "pinyin": "jianzuoqu",
        "initial": "J"
    },
    {
        "id": "310111",
        "title": "江宁区",
        "parentId": "3101",
        "pinyin": "jiangningqu",
        "initial": "J"
    },
    {
        "id": "310204",
        "title": "金阊区",
        "parentId": "3102",
        "pinyin": "jinzuoqu",
        "initial": "J"
    },
    {
        "id": "310308",
        "title": "江阴市",
        "parentId": "3103",
        "pinyin": "jiangyinshi",
        "initial": "J"
    },
    {
        "id": "310402",
        "title": "京口区",
        "parentId": "3104",
        "pinyin": "jingkouqu",
        "initial": "J"
    },
    {
        "id": "310407",
        "title": "句容市",
        "parentId": "3104",
        "pinyin": "jurongshi",
        "initial": "J"
    },
    {
        "id": "310508",
        "title": "江都区",
        "parentId": "3105",
        "pinyin": "jiangduqu",
        "initial": "J"
    },
    {
        "id": "310708",
        "title": "金坛市",
        "parentId": "3107",
        "pinyin": "jintanshi",
        "initial": "J"
    },
    {
        "id": "310804",
        "title": "九里区",
        "parentId": "3108",
        "pinyin": "jiuliqu",
        "initial": "J"
    },
    {
        "id": "310805",
        "title": "贾汪区",
        "parentId": "3108",
        "pinyin": "jiawangqu",
        "initial": "J"
    },
    {
        "id": "311008",
        "title": "建湖县",
        "parentId": "3110",
        "pinyin": "jianhuxian",
        "initial": "J"
    },
    {
        "id": "311109",
        "title": "金湖县",
        "parentId": "3111",
        "pinyin": "jinhuxian",
        "initial": "J"
    },
    {
        "id": "311205",
        "title": "靖江市",
        "parentId": "3112",
        "pinyin": "jingjiangshi",
        "initial": "J"
    },
    {
        "id": "311207",
        "title": "姜堰市",
        "parentId": "3112",
        "pinyin": "jiangyanshi",
        "initial": "J"
    },
    {
        "id": "3201",
        "title": "济南市",
        "parentId": "32",
        "pinyin": "jinanshi",
        "initial": "J"
    },
    {
        "id": "320109",
        "title": "济阳县",
        "parentId": "3201",
        "pinyin": "jiyangxian",
        "initial": "J"
    },
    {
        "id": "320209",
        "title": "胶州市",
        "parentId": "3202",
        "pinyin": "jiaozhoushi",
        "initial": "J"
    },
    {
        "id": "320210",
        "title": "即墨市",
        "parentId": "3202",
        "pinyin": "jimoshi",
        "initial": "J"
    },
    {
        "id": "320212",
        "title": "胶南市",
        "parentId": "3202",
        "pinyin": "jiaonanshi",
        "initial": "J"
    },
    {
        "id": "3207",
        "title": "济宁市",
        "parentId": "32",
        "pinyin": "jiningshi",
        "initial": "J"
    },
    {
        "id": "320706",
        "title": "金乡县",
        "parentId": "3207",
        "pinyin": "jinxiangxian",
        "initial": "J"
    },
    {
        "id": "320707",
        "title": "嘉祥县",
        "parentId": "3207",
        "pinyin": "jiaxiangxian",
        "initial": "J"
    },
    {
        "id": "321606",
        "title": "巨野县",
        "parentId": "3216",
        "pinyin": "juyexian",
        "initial": "J"
    },
    {
        "id": "330202",
        "title": "镜湖区",
        "parentId": "3302",
        "pinyin": "jinghuqu",
        "initial": "J"
    },
    {
        "id": "330402",
        "title": "金家庄区",
        "parentId": "3304",
        "pinyin": "jinjiazhuangqu",
        "initial": "J"
    },
    {
        "id": "330604",
        "title": "郊区",
        "parentId": "3306",
        "pinyin": "jiaoqu",
        "initial": "J"
    },
    {
        "id": "331302",
        "title": "居巢区",
        "parentId": "3313",
        "pinyin": "juchaoqu",
        "initial": "J"
    },
    {
        "id": "331409",
        "title": "界首市",
        "parentId": "3314",
        "pinyin": "jieshoushi",
        "initial": "J"
    },
    {
        "id": "331502",
        "title": "金安区",
        "parentId": "3315",
        "pinyin": "jinanqu",
        "initial": "J"
    },
    {
        "id": "331507",
        "title": "金寨县",
        "parentId": "3315",
        "pinyin": "jinzhaixian",
        "initial": "J"
    },
    {
        "id": "331606",
        "title": "绩溪县",
        "parentId": "3316",
        "pinyin": "jixixian",
        "initial": "J"
    },
    {
        "id": "340106",
        "title": "晋安区",
        "parentId": "3401",
        "pinyin": "jinanqu",
        "initial": "J"
    },
    {
        "id": "340205",
        "title": "集美区",
        "parentId": "3402",
        "pinyin": "jimeiqu",
        "initial": "J"
    },
    {
        "id": "340410",
        "title": "金门县",
        "parentId": "3404",
        "pinyin": "jinmenxian",
        "initial": "J"
    },
    {
        "id": "340412",
        "title": "晋江市",
        "parentId": "3404",
        "pinyin": "jinjiangshi",
        "initial": "J"
    },
    {
        "id": "340610",
        "title": "将乐县",
        "parentId": "3406",
        "pinyin": "jianglexian",
        "initial": "J"
    },
    {
        "id": "340612",
        "title": "建宁县",
        "parentId": "3406",
        "pinyin": "jianningxian",
        "initial": "J"
    },
    {
        "id": "340710",
        "title": "建瓯市",
        "parentId": "3407",
        "pinyin": "jianzuoshi",
        "initial": "J"
    },
    {
        "id": "340711",
        "title": "建阳市",
        "parentId": "3407",
        "pinyin": "jianyangshi",
        "initial": "J"
    },
    {
        "id": "340902",
        "title": "蕉城区",
        "parentId": "3409",
        "pinyin": "jiaochengqu",
        "initial": "J"
    },
    {
        "id": "350104",
        "title": "江干区",
        "parentId": "3501",
        "pinyin": "jiangganqu",
        "initial": "J"
    },
    {
        "id": "350112",
        "title": "建德市",
        "parentId": "3501",
        "pinyin": "jiandeshi",
        "initial": "J"
    },
    {
        "id": "350203",
        "title": "江东区",
        "parentId": "3502",
        "pinyin": "jiangdongqu",
        "initial": "J"
    },
    {
        "id": "350204",
        "title": "江北区",
        "parentId": "3502",
        "pinyin": "jiangbeiqu",
        "initial": "J"
    },
    {
        "id": "3504",
        "title": "嘉兴市",
        "parentId": "35",
        "pinyin": "jiaxingshi",
        "initial": "J"
    },
    {
        "id": "350404",
        "title": "嘉善县",
        "parentId": "3504",
        "pinyin": "jiashanxian",
        "initial": "J"
    },
    {
        "id": "3507",
        "title": "金华市",
        "parentId": "35",
        "pinyin": "jinhuashi",
        "initial": "J"
    },
    {
        "id": "350703",
        "title": "金东区",
        "parentId": "3507",
        "pinyin": "jindongqu",
        "initial": "J"
    },
    {
        "id": "350807",
        "title": "江山市",
        "parentId": "3508",
        "pinyin": "jiangshanshi",
        "initial": "J"
    },
    {
        "id": "351002",
        "title": "椒江区",
        "parentId": "3510",
        "pinyin": "jiaojiangqu",
        "initial": "J"
    },
    {
        "id": "351109",
        "title": "景宁县",
        "parentId": "3511",
        "pinyin": "jingningxian",
        "initial": "J"
    },
    {
        "id": "36",
        "title": "江西省",
        "parentId": null,
        "pinyin": "jiangxisheng",
        "initial": "J"
    },
    {
        "id": "360110",
        "title": "进贤县",
        "parentId": "3601",
        "pinyin": "jinxianxian",
        "initial": "J"
    },
    {
        "id": "3602",
        "title": "景德镇市",
        "parentId": "36",
        "pinyin": "jingdezhenshi",
        "initial": "J"
    },
    {
        "id": "3604",
        "title": "九江市",
        "parentId": "36",
        "pinyin": "jiujiangshi",
        "initial": "J"
    },
    {
        "id": "360404",
        "title": "九江县",
        "parentId": "3604",
        "pinyin": "jiujiangxian",
        "initial": "J"
    },
    {
        "id": "3608",
        "title": "吉安市",
        "parentId": "36",
        "pinyin": "jianshi",
        "initial": "J"
    },
    {
        "id": "360802",
        "title": "吉州区",
        "parentId": "3608",
        "pinyin": "jizhouqu",
        "initial": "J"
    },
    {
        "id": "360804",
        "title": "吉安县",
        "parentId": "3608",
        "pinyin": "jianxian",
        "initial": "J"
    },
    {
        "id": "360805",
        "title": "吉水县",
        "parentId": "3608",
        "pinyin": "jishuixian",
        "initial": "J"
    },
    {
        "id": "360814",
        "title": "井冈山市",
        "parentId": "3608",
        "pinyin": "jinggangshanshi",
        "initial": "J"
    },
    {
        "id": "360907",
        "title": "靖安县",
        "parentId": "3609",
        "pinyin": "jinganxian",
        "initial": "J"
    },
    {
        "id": "361009",
        "title": "金溪县",
        "parentId": "3610",
        "pinyin": "jinxixian",
        "initial": "J"
    },
    {
        "id": "400304",
        "title": "金湾区",
        "parentId": "4003",
        "pinyin": "jinwanqu",
        "initial": "J"
    },
    {
        "id": "400403",
        "title": "金平区",
        "parentId": "4004",
        "pinyin": "jinpingqu",
        "initial": "J"
    },
    {
        "id": "400708",
        "title": "蕉岭县",
        "parentId": "4007",
        "pinyin": "jiaolingxian",
        "initial": "J"
    },
    {
        "id": "4012",
        "title": "江门市",
        "parentId": "40",
        "pinyin": "jiangmenshi",
        "initial": "J"
    },
    {
        "id": "401203",
        "title": "江海区",
        "parentId": "4012",
        "pinyin": "jianghaiqu",
        "initial": "J"
    },
    {
        "id": "401402",
        "title": "江城区",
        "parentId": "4014",
        "pinyin": "jiangchengqu",
        "initial": "J"
    },
    {
        "id": "4020",
        "title": "揭阳市",
        "parentId": "40",
        "pinyin": "jieyangshi",
        "initial": "J"
    },
    {
        "id": "402003",
        "title": "揭东县",
        "parentId": "4020",
        "pinyin": "jiedongxian",
        "initial": "J"
    },
    {
        "id": "402004",
        "title": "揭西县",
        "parentId": "4020",
        "pinyin": "jiexixian",
        "initial": "J"
    },
    {
        "id": "410104",
        "title": "江南区",
        "parentId": "4101",
        "pinyin": "jiangnanqu",
        "initial": "J"
    },
    {
        "id": "411007",
        "title": "靖西县",
        "parentId": "4110",
        "pinyin": "jingxixian",
        "initial": "J"
    },
    {
        "id": "411202",
        "title": "金城江区",
        "parentId": "4112",
        "pinyin": "jinchengjiangqu",
        "initial": "J"
    },
    {
        "id": "411306",
        "title": "金秀县",
        "parentId": "4113",
        "pinyin": "jinxiuxian",
        "initial": "J"
    },
    {
        "id": "411402",
        "title": "江洲区",
        "parentId": "4114",
        "pinyin": "jiangzhouqu",
        "initial": "J"
    },
    {
        "id": "6005",
        "title": "江北区",
        "parentId": "60",
        "pinyin": "jiangbeiqu",
        "initial": "J"
    },
    {
        "id": "6007",
        "title": "九龙坡区",
        "parentId": "60",
        "pinyin": "jiulongpoqu",
        "initial": "J"
    },
    {
        "id": "6016",
        "title": "江津区",
        "parentId": "60",
        "pinyin": "jiangjinqu",
        "initial": "J"
    },
    {
        "id": "610102",
        "title": "锦江区",
        "parentId": "6101",
        "pinyin": "jinjiangqu",
        "initial": "J"
    },
    {
        "id": "610104",
        "title": "金牛区",
        "parentId": "6101",
        "pinyin": "jinniuqu",
        "initial": "J"
    },
    {
        "id": "610111",
        "title": "金堂县",
        "parentId": "6101",
        "pinyin": "jintangxian",
        "initial": "J"
    },
    {
        "id": "610310",
        "title": "江油市",
        "parentId": "6103",
        "pinyin": "jiangyoushi",
        "initial": "J"
    },
    {
        "id": "610502",
        "title": "江阳区",
        "parentId": "6105",
        "pinyin": "jiangyangqu",
        "initial": "J"
    },
    {
        "id": "610604",
        "title": "嘉陵区",
        "parentId": "6106",
        "pinyin": "jialingqu",
        "initial": "J"
    },
    {
        "id": "610905",
        "title": "江安县",
        "parentId": "6109",
        "pinyin": "jianganxian",
        "initial": "J"
    },
    {
        "id": "611005",
        "title": "金口河区",
        "parentId": "6110",
        "pinyin": "jinkouhequ",
        "initial": "J"
    },
    {
        "id": "611007",
        "title": "井研县",
        "parentId": "6110",
        "pinyin": "jingyanxian",
        "initial": "J"
    },
    {
        "id": "611008",
        "title": "夹江县",
        "parentId": "6110",
        "pinyin": "jiajiangxian",
        "initial": "J"
    },
    {
        "id": "611507",
        "title": "剑阁县",
        "parentId": "6115",
        "pinyin": "jiangexian",
        "initial": "J"
    },
    {
        "id": "611705",
        "title": "简阳市",
        "parentId": "6117",
        "pinyin": "jianyangshi",
        "initial": "J"
    },
    {
        "id": "611805",
        "title": "九寨沟县",
        "parentId": "6118",
        "pinyin": "jiuzhaigouxian",
        "initial": "J"
    },
    {
        "id": "611806",
        "title": "金川县",
        "parentId": "6118",
        "pinyin": "jinchuanxian",
        "initial": "J"
    },
    {
        "id": "612004",
        "title": "九龙县",
        "parentId": "6120",
        "pinyin": "jiulongxian",
        "initial": "J"
    },
    {
        "id": "612110",
        "title": "金阳县",
        "parentId": "6121",
        "pinyin": "jinyangxian",
        "initial": "J"
    },
    {
        "id": "620108",
        "title": "晋宁县",
        "parentId": "6201",
        "pinyin": "jinningxian",
        "initial": "J"
    },
    {
        "id": "620303",
        "title": "江川县",
        "parentId": "6203",
        "pinyin": "jiangchuanxian",
        "initial": "J"
    },
    {
        "id": "620605",
        "title": "建水县",
        "parentId": "6206",
        "pinyin": "jianshuixian",
        "initial": "J"
    },
    {
        "id": "620611",
        "title": "金平县",
        "parentId": "6206",
        "pinyin": "jinpingxian",
        "initial": "J"
    },
    {
        "id": "621001",
        "title": "景洪市",
        "parentId": "6210",
        "pinyin": "jinghongshi",
        "initial": "J"
    },
    {
        "id": "621105",
        "title": "景东县",
        "parentId": "6211",
        "pinyin": "jingdongxian",
        "initial": "J"
    },
    {
        "id": "621106",
        "title": "景谷傣族县",
        "parentId": "6211",
        "pinyin": "jinggudaizuxian",
        "initial": "J"
    },
    {
        "id": "621108",
        "title": "江城哈尼族县",
        "parentId": "6211",
        "pinyin": "jiangchenghanizuxian",
        "initial": "J"
    },
    {
        "id": "621211",
        "title": "剑川县",
        "parentId": "6212",
        "pinyin": "jianchuanxian",
        "initial": "J"
    },
    {
        "id": "630702",
        "title": "江口县",
        "parentId": "6307",
        "pinyin": "jiangkouxian",
        "initial": "J"
    },
    {
        "id": "630804",
        "title": "金沙县",
        "parentId": "6308",
        "pinyin": "jinshaxian",
        "initial": "J"
    },
    {
        "id": "630908",
        "title": "锦屏县",
        "parentId": "6309",
        "pinyin": "jinpingxian",
        "initial": "J"
    },
    {
        "id": "630909",
        "title": "剑河县",
        "parentId": "6309",
        "pinyin": "jianhexian",
        "initial": "J"
    },
    {
        "id": "640203",
        "title": "江孜县",
        "parentId": "6402",
        "pinyin": "jiangzixian",
        "initial": "J"
    },
    {
        "id": "640215",
        "title": "吉隆县",
        "parentId": "6402",
        "pinyin": "jilongxian",
        "initial": "J"
    },
    {
        "id": "640309",
        "title": "加查县",
        "parentId": "6403",
        "pinyin": "jiachaxian",
        "initial": "J"
    },
    {
        "id": "640502",
        "title": "江达县",
        "parentId": "6405",
        "pinyin": "jiangdaxian",
        "initial": "J"
    },
    {
        "id": "640602",
        "title": "嘉黎县",
        "parentId": "6406",
        "pinyin": "jialixian",
        "initial": "J"
    },
    {
        "id": "700105",
        "title": "金水区",
        "parentId": "7001",
        "pinyin": "jinshuiqu",
        "initial": "J"
    },
    {
        "id": "700114",
        "title": "经济开发区",
        "parentId": "7001",
        "pinyin": "jingjikaifaqu",
        "initial": "J"
    },
    {
        "id": "700205",
        "title": "涧西区",
        "parentId": "7002",
        "pinyin": "jianxiqu",
        "initial": "J"
    },
    {
        "id": "700206",
        "title": "吉利区",
        "parentId": "7002",
        "pinyin": "jiliqu",
        "initial": "J"
    },
    {
        "id": "700306",
        "title": "金明区",
        "parentId": "7003",
        "pinyin": "jinmingqu",
        "initial": "J"
    },
    {
        "id": "7007",
        "title": "焦作市",
        "parentId": "70",
        "pinyin": "jiaozuoshi",
        "initial": "J"
    },
    {
        "id": "700702",
        "title": "解放区",
        "parentId": "7007",
        "pinyin": "jiefangqu",
        "initial": "J"
    },
    {
        "id": "700805",
        "title": "浚县",
        "parentId": "7008",
        "pinyin": "junxian",
        "initial": "J"
    },
    {
        "id": "7018",
        "title": "济源市",
        "parentId": "70",
        "pinyin": "jiyuanshi",
        "initial": "J"
    },
    {
        "id": "710102",
        "title": "江岸区",
        "parentId": "7101",
        "pinyin": "jianganqu",
        "initial": "J"
    },
    {
        "id": "710103",
        "title": "江汉区",
        "parentId": "7101",
        "pinyin": "jianghanqu",
        "initial": "J"
    },
    {
        "id": "710112",
        "title": "江夏区",
        "parentId": "7101",
        "pinyin": "jiangxiaqu",
        "initial": "J"
    },
    {
        "id": "7105",
        "title": "荆州市",
        "parentId": "71",
        "pinyin": "jingzhoushi",
        "initial": "J"
    },
    {
        "id": "710503",
        "title": "荆州区",
        "parentId": "7105",
        "pinyin": "jingzhouqu",
        "initial": "J"
    },
    {
        "id": "710505",
        "title": "监利县",
        "parentId": "7105",
        "pinyin": "jianlixian",
        "initial": "J"
    },
    {
        "id": "710506",
        "title": "江陵县",
        "parentId": "7105",
        "pinyin": "jianglingxian",
        "initial": "J"
    },
    {
        "id": "7107",
        "title": "荆门市",
        "parentId": "71",
        "pinyin": "jingmenshi",
        "initial": "J"
    },
    {
        "id": "710704",
        "title": "京山县",
        "parentId": "7107",
        "pinyin": "jingshanxian",
        "initial": "J"
    },
    {
        "id": "711103",
        "title": "嘉鱼县",
        "parentId": "7111",
        "pinyin": "jiayuxian",
        "initial": "J"
    },
    {
        "id": "711303",
        "title": "建始县",
        "parentId": "7113",
        "pinyin": "jianshixian",
        "initial": "J"
    },
    {
        "id": "720610",
        "title": "津市市",
        "parentId": "7206",
        "pinyin": "jinshishi",
        "initial": "J"
    },
    {
        "id": "720704",
        "title": "君山区",
        "parentId": "7207",
        "pinyin": "junshanqu",
        "initial": "J"
    },
    {
        "id": "720907",
        "title": "嘉禾县",
        "parentId": "7209",
        "pinyin": "jiahexian",
        "initial": "J"
    },
    {
        "id": "721108",
        "title": "江永县",
        "parentId": "7211",
        "pinyin": "jiangyongxian",
        "initial": "J"
    },
    {
        "id": "721112",
        "title": "江华县",
        "parentId": "7211",
        "pinyin": "jianghuaxian",
        "initial": "J"
    },
    {
        "id": "721211",
        "title": "靖州苗族县",
        "parentId": "7212",
        "pinyin": "jingzhoumiaozuxian",
        "initial": "J"
    },
    {
        "id": "721401",
        "title": "吉首市",
        "parentId": "7214",
        "pinyin": "jishoushi",
        "initial": "J"
    },
    {
        "id": "800115",
        "title": "经济开发区",
        "parentId": "8001",
        "pinyin": "jingjikaifaqu",
        "initial": "J"
    },
    {
        "id": "800203",
        "title": "金台区",
        "parentId": "8002",
        "pinyin": "jintaiqu",
        "initial": "J"
    },
    {
        "id": "800606",
        "title": "靖边县",
        "parentId": "8006",
        "pinyin": "jingbianxian",
        "initial": "J"
    },
    {
        "id": "800610",
        "title": "佳县",
        "parentId": "8006",
        "pinyin": "jiaxian",
        "initial": "J"
    },
    {
        "id": "810602",
        "title": "尖扎县",
        "parentId": "8106",
        "pinyin": "jianzhaxian",
        "initial": "J"
    },
    {
        "id": "810705",
        "title": "久治县",
        "parentId": "8107",
        "pinyin": "jiuzhixian",
        "initial": "J"
    },
    {
        "id": "820104",
        "title": "金凤区",
        "parentId": "8201",
        "pinyin": "jinfengqu",
        "initial": "J"
    },
    {
        "id": "830307",
        "title": "吉木乃县",
        "parentId": "8303",
        "pinyin": "jimunaixian",
        "initial": "J"
    },
    {
        "id": "830502",
        "title": "精河县",
        "parentId": "8305",
        "pinyin": "jinghexian",
        "initial": "J"
    },
    {
        "id": "830606",
        "title": "吉木萨尔县",
        "parentId": "8306",
        "pinyin": "jimusaerxian",
        "initial": "J"
    },
    {
        "id": "8403",
        "title": "嘉峪关市",
        "parentId": "84",
        "pinyin": "jiayuguanshi",
        "initial": "J"
    },
    {
        "id": "8405",
        "title": "金昌市",
        "parentId": "84",
        "pinyin": "jinchangshi",
        "initial": "J"
    },
    {
        "id": "840502",
        "title": "金川区",
        "parentId": "8405",
        "pinyin": "jinchuanqu",
        "initial": "J"
    },
    {
        "id": "8406",
        "title": "酒泉市",
        "parentId": "84",
        "pinyin": "jiuquanshi",
        "initial": "J"
    },
    {
        "id": "840603",
        "title": "金塔县",
        "parentId": "8406",
        "pinyin": "jintaxian",
        "initial": "J"
    },
    {
        "id": "840908",
        "title": "静宁县",
        "parentId": "8409",
        "pinyin": "jingningxian",
        "initial": "J"
    },
    {
        "id": "841004",
        "title": "靖远县",
        "parentId": "8410",
        "pinyin": "jingyuanxian",
        "initial": "J"
    },
    {
        "id": "841006",
        "title": "景泰县",
        "parentId": "8410",
        "pinyin": "jingtaixian",
        "initial": "J"
    },
    {
        "id": "841308",
        "title": "积石山县",
        "parentId": "8413",
        "pinyin": "jishishanxian",
        "initial": "J"
    },
    {
        "id": "1119",
        "title": "开发区",
        "parentId": "11",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "120209",
        "title": "开发区",
        "parentId": "1202",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "120305",
        "title": "开平区",
        "parentId": "1203",
        "pinyin": "kaipingqu",
        "initial": "K"
    },
    {
        "id": "120408",
        "title": "康保县",
        "parentId": "1204",
        "pinyin": "kangbaoxian",
        "initial": "K"
    },
    {
        "id": "120512",
        "title": "开发区",
        "parentId": "1205",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "120811",
        "title": "宽城县",
        "parentId": "1208",
        "pinyin": "kuanchengxian",
        "initial": "K"
    },
    {
        "id": "121018",
        "title": "开发区",
        "parentId": "1210",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "130111",
        "title": "开发区",
        "parentId": "1301",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "130203",
        "title": "昆都仑区",
        "parentId": "1302",
        "pinyin": "kundulunqu",
        "initial": "K"
    },
    {
        "id": "130403",
        "title": "科右前旗",
        "parentId": "1304",
        "pinyin": "keyouqianqi",
        "initial": "K"
    },
    {
        "id": "130404",
        "title": "科右中旗",
        "parentId": "1304",
        "pinyin": "keyouzhongqi",
        "initial": "K"
    },
    {
        "id": "130502",
        "title": "科尔沁区",
        "parentId": "1305",
        "pinyin": "keerqinqu",
        "initial": "K"
    },
    {
        "id": "130503",
        "title": "科左中旗",
        "parentId": "1305",
        "pinyin": "kezuozhongqi",
        "initial": "K"
    },
    {
        "id": "130504",
        "title": "科左后旗",
        "parentId": "1305",
        "pinyin": "kezuohouqi",
        "initial": "K"
    },
    {
        "id": "130505",
        "title": "开鲁县",
        "parentId": "1305",
        "pinyin": "kailuxian",
        "initial": "K"
    },
    {
        "id": "130506",
        "title": "库伦旗",
        "parentId": "1305",
        "pinyin": "kulunqi",
        "initial": "K"
    },
    {
        "id": "130609",
        "title": "克什克腾旗",
        "parentId": "1306",
        "pinyin": "keshiketengqi",
        "initial": "K"
    },
    {
        "id": "130611",
        "title": "喀喇沁旗",
        "parentId": "1306",
        "pinyin": "kalaqinqi",
        "initial": "K"
    },
    {
        "id": "140112",
        "title": "开发区",
        "parentId": "1401",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "140203",
        "title": "矿区",
        "parentId": "1402",
        "pinyin": "kuangqu",
        "initial": "K"
    },
    {
        "id": "140213",
        "title": "开发区",
        "parentId": "1402",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "140303",
        "title": "矿区",
        "parentId": "1403",
        "pinyin": "kuangqu",
        "initial": "K"
    },
    {
        "id": "200112",
        "title": "康平县",
        "parentId": "2001",
        "pinyin": "kangpingxian",
        "initial": "K"
    },
    {
        "id": "200212",
        "title": "开发区",
        "parentId": "2002",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "200409",
        "title": "开发区",
        "parentId": "2004",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "200505",
        "title": "宽甸县",
        "parentId": "2005",
        "pinyin": "kuandianxian",
        "initial": "K"
    },
    {
        "id": "200708",
        "title": "开原市",
        "parentId": "2007",
        "pinyin": "kaiyuanshi",
        "initial": "K"
    },
    {
        "id": "200908",
        "title": "开发区",
        "parentId": "2009",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "201306",
        "title": "喀左县",
        "parentId": "2013",
        "pinyin": "kazuoxian",
        "initial": "K"
    },
    {
        "id": "210103",
        "title": "宽城区",
        "parentId": "2101",
        "pinyin": "kuanchengqu",
        "initial": "K"
    },
    {
        "id": "210112",
        "title": "开发区",
        "parentId": "2101",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "210211",
        "title": "开发区",
        "parentId": "2102",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "210308",
        "title": "开发区",
        "parentId": "2103",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "220120",
        "title": "开发区",
        "parentId": "2201",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "220214",
        "title": "克山县",
        "parentId": "2202",
        "pinyin": "keshanxian",
        "initial": "K"
    },
    {
        "id": "220215",
        "title": "克东县",
        "parentId": "2202",
        "pinyin": "kedongxian",
        "initial": "K"
    },
    {
        "id": "310115",
        "title": "开发区",
        "parentId": "3101",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "310210",
        "title": "昆山市",
        "parentId": "3102",
        "pinyin": "kunshanshi",
        "initial": "K"
    },
    {
        "id": "310408",
        "title": "开发区",
        "parentId": "3104",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "310509",
        "title": "开发区",
        "parentId": "3105",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "310610",
        "title": "开发区",
        "parentId": "3106",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "310813",
        "title": "开发区",
        "parentId": "3108",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "310909",
        "title": "开发区",
        "parentId": "3109",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "311011",
        "title": "开发区",
        "parentId": "3110",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "311110",
        "title": "开发区",
        "parentId": "3111",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "320214",
        "title": "开发区",
        "parentId": "3202",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "320315",
        "title": "开发区",
        "parentId": "3203",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "320605",
        "title": "奎文区",
        "parentId": "3206",
        "pinyin": "kuiwenqu",
        "initial": "K"
    },
    {
        "id": "320614",
        "title": "开发区",
        "parentId": "3206",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "321006",
        "title": "开发区",
        "parentId": "3210",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "321106",
        "title": "开发区",
        "parentId": "3211",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "321404",
        "title": "垦利县",
        "parentId": "3214",
        "pinyin": "kenlixian",
        "initial": "K"
    },
    {
        "id": "321407",
        "title": "开发区",
        "parentId": "3214",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "321714",
        "title": "开发区",
        "parentId": "3217",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "330109",
        "title": "开发区",
        "parentId": "3301",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "330209",
        "title": "开发区",
        "parentId": "3302",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "330406",
        "title": "开发区",
        "parentId": "3304",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "330606",
        "title": "开发区",
        "parentId": "3306",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "330713",
        "title": "开发区",
        "parentId": "3307",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "340115",
        "title": "开发区",
        "parentId": "3401",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "340208",
        "title": "开发区",
        "parentId": "3402",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "340313",
        "title": "开发区",
        "parentId": "3403",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "340414",
        "title": "开发区",
        "parentId": "3404",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "350115",
        "title": "开发区",
        "parentId": "3501",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "350213",
        "title": "开发区",
        "parentId": "3502",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "350313",
        "title": "开发区",
        "parentId": "3503",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "350409",
        "title": "开发区",
        "parentId": "3504",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "350507",
        "title": "开发区",
        "parentId": "3505",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "350608",
        "title": "开发区",
        "parentId": "3506",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "350711",
        "title": "开发区",
        "parentId": "3507",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "350802",
        "title": "柯城区",
        "parentId": "3508",
        "pinyin": "kechengqu",
        "initial": "K"
    },
    {
        "id": "350805",
        "title": "开化县",
        "parentId": "3508",
        "pinyin": "kaihuaxian",
        "initial": "K"
    },
    {
        "id": "360111",
        "title": "开发区",
        "parentId": "3601",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "360307",
        "title": "开发区",
        "parentId": "3603",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "360414",
        "title": "开发区",
        "parentId": "3604",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "360720",
        "title": "开发区",
        "parentId": "3607",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "361114",
        "title": "开发区",
        "parentId": "3611",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "400114",
        "title": "开发区",
        "parentId": "4001",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "401206",
        "title": "开平市",
        "parentId": "4012",
        "pinyin": "kaipingshi",
        "initial": "K"
    },
    {
        "id": "401511",
        "title": "开发区",
        "parentId": "4015",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "410114",
        "title": "开发区",
        "parentId": "4101",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "410706",
        "title": "开发区",
        "parentId": "4107",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "421902",
        "title": "开发区",
        "parentId": "4219",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "6032",
        "title": "开县",
        "parentId": "60",
        "pinyin": "kaixian",
        "initial": "K"
    },
    {
        "id": "6041",
        "title": "开发区",
        "parentId": "60",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "610122",
        "title": "开发区",
        "parentId": "6101",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "610208",
        "title": "开发区",
        "parentId": "6102",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "611305",
        "title": "开江县",
        "parentId": "6113",
        "pinyin": "kaijiangxian",
        "initial": "K"
    },
    {
        "id": "611607",
        "title": "开发区",
        "parentId": "6116",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "612001",
        "title": "康定县",
        "parentId": "6120",
        "pinyin": "kangdingxian",
        "initial": "K"
    },
    {
        "id": "6201",
        "title": "昆明市",
        "parentId": "62",
        "pinyin": "kunmingshi",
        "initial": "K"
    },
    {
        "id": "620116",
        "title": "开发区",
        "parentId": "6201",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "620211",
        "title": "开发区",
        "parentId": "6202",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "620602",
        "title": "开远市",
        "parentId": "6206",
        "pinyin": "kaiyuanshi",
        "initial": "K"
    },
    {
        "id": "630108",
        "title": "开阳县",
        "parentId": "6301",
        "pinyin": "kaiyangxian",
        "initial": "K"
    },
    {
        "id": "630112",
        "title": "开发区",
        "parentId": "6301",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "630216",
        "title": "开发区",
        "parentId": "6302",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "630901",
        "title": "凯里市",
        "parentId": "6309",
        "pinyin": "kailishi",
        "initial": "K"
    },
    {
        "id": "640110",
        "title": "开发区",
        "parentId": "6401",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "640211",
        "title": "康马县",
        "parentId": "6402",
        "pinyin": "kangmaxian",
        "initial": "K"
    },
    {
        "id": "7003",
        "title": "开封市",
        "parentId": "70",
        "pinyin": "kaifengshi",
        "initial": "K"
    },
    {
        "id": "700310",
        "title": "开封县",
        "parentId": "7003",
        "pinyin": "kaifengxian",
        "initial": "K"
    },
    {
        "id": "700312",
        "title": "开发区",
        "parentId": "7003",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "700807",
        "title": "开发区",
        "parentId": "7008",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "701108",
        "title": "开发区",
        "parentId": "7011",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "701207",
        "title": "开发区",
        "parentId": "7012",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "710115",
        "title": "开发区",
        "parentId": "7101",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "710208",
        "title": "开发区",
        "parentId": "7102",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "710311",
        "title": "开发区",
        "parentId": "7103",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "720105",
        "title": "开福区",
        "parentId": "7201",
        "pinyin": "kaifuqu",
        "initial": "K"
    },
    {
        "id": "720111",
        "title": "开发区",
        "parentId": "7201",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "720611",
        "title": "开发区",
        "parentId": "7206",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "720711",
        "title": "开发区",
        "parentId": "7207",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "810109",
        "title": "开发区",
        "parentId": "8101",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "820108",
        "title": "开发区",
        "parentId": "8201",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "830202",
        "title": "奎屯市",
        "parentId": "8302",
        "pinyin": "kuitunshi",
        "initial": "K"
    },
    {
        "id": "830801",
        "title": "库尔勒市",
        "parentId": "8308",
        "pinyin": "kuerleshi",
        "initial": "K"
    },
    {
        "id": "831103",
        "title": "库车县",
        "parentId": "8311",
        "pinyin": "kuchexian",
        "initial": "K"
    },
    {
        "id": "831109",
        "title": "柯坪县",
        "parentId": "8311",
        "pinyin": "kepingxian",
        "initial": "K"
    },
    {
        "id": "8312",
        "title": "克孜勒苏",
        "parentId": "83",
        "pinyin": "kezilesu",
        "initial": "K"
    },
    {
        "id": "8313",
        "title": "喀什地区",
        "parentId": "83",
        "pinyin": "kashidiqu",
        "initial": "K"
    },
    {
        "id": "831301",
        "title": "喀什市",
        "parentId": "8313",
        "pinyin": "kashishi",
        "initial": "K"
    },
    {
        "id": "8314",
        "title": "克拉玛依市",
        "parentId": "83",
        "pinyin": "kelamayishi",
        "initial": "K"
    },
    {
        "id": "831403",
        "title": "克拉玛依区",
        "parentId": "8314",
        "pinyin": "kelamayiqu",
        "initial": "K"
    },
    {
        "id": "840110",
        "title": "开发区",
        "parentId": "8401",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "840209",
        "title": "开发区",
        "parentId": "8402",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "840504",
        "title": "开发区",
        "parentId": "8405",
        "pinyin": "kaifaqu",
        "initial": "K"
    },
    {
        "id": "841206",
        "title": "康县",
        "parentId": "8412",
        "pinyin": "kangxian",
        "initial": "K"
    },
    {
        "id": "841303",
        "title": "康乐县",
        "parentId": "8413",
        "pinyin": "kanglexian",
        "initial": "K"
    },
    {
        "id": "120112",
        "title": "灵寿县",
        "parentId": "1201",
        "pinyin": "lingshouxian",
        "initial": "L"
    },
    {
        "id": "120124",
        "title": "鹿泉市",
        "parentId": "1201",
        "pinyin": "luquanshi",
        "initial": "L"
    },
    {
        "id": "120208",
        "title": "卢龙县",
        "parentId": "1202",
        "pinyin": "lulongxian",
        "initial": "L"
    },
    {
        "id": "120302",
        "title": "路南区",
        "parentId": "1203",
        "pinyin": "lunanqu",
        "initial": "L"
    },
    {
        "id": "120303",
        "title": "路北区",
        "parentId": "1203",
        "pinyin": "lubeiqu",
        "initial": "L"
    },
    {
        "id": "120308",
        "title": "滦县",
        "parentId": "1203",
        "pinyin": "luanxian",
        "initial": "L"
    },
    {
        "id": "120309",
        "title": "滦南县",
        "parentId": "1203",
        "pinyin": "luannanxian",
        "initial": "L"
    },
    {
        "id": "120310",
        "title": "乐亭县",
        "parentId": "1203",
        "pinyin": "letingxian",
        "initial": "L"
    },
    {
        "id": "1205",
        "title": "廊坊市",
        "parentId": "12",
        "pinyin": "langfangshi",
        "initial": "L"
    },
    {
        "id": "120808",
        "title": "滦平县",
        "parentId": "1208",
        "pinyin": "luanpingxian",
        "initial": "L"
    },
    {
        "id": "120809",
        "title": "隆化县",
        "parentId": "1208",
        "pinyin": "longhuaxian",
        "initial": "L"
    },
    {
        "id": "120905",
        "title": "临城县",
        "parentId": "1209",
        "pinyin": "linchengxian",
        "initial": "L"
    },
    {
        "id": "120908",
        "title": "隆尧县",
        "parentId": "1209",
        "pinyin": "longyaoxian",
        "initial": "L"
    },
    {
        "id": "120918",
        "title": "临西县",
        "parentId": "1209",
        "pinyin": "linxixian",
        "initial": "L"
    },
    {
        "id": "121107",
        "title": "临漳县",
        "parentId": "1211",
        "pinyin": "linzhangxian",
        "initial": "L"
    },
    {
        "id": "130608",
        "title": "林西县",
        "parentId": "1306",
        "pinyin": "linxixian",
        "initial": "L"
    },
    {
        "id": "130807",
        "title": "凉城县",
        "parentId": "1308",
        "pinyin": "liangchengxian",
        "initial": "L"
    },
    {
        "id": "131002",
        "title": "临河区",
        "parentId": "1310",
        "pinyin": "linhequ",
        "initial": "L"
    },
    {
        "id": "140110",
        "title": "娄烦县",
        "parentId": "1401",
        "pinyin": "loufanxian",
        "initial": "L"
    },
    {
        "id": "140209",
        "title": "灵丘县",
        "parentId": "1402",
        "pinyin": "lingqiuxian",
        "initial": "L"
    },
    {
        "id": "140408",
        "title": "黎城县",
        "parentId": "1404",
        "pinyin": "lichengxian",
        "initial": "L"
    },
    {
        "id": "140414",
        "title": "潞城市",
        "parentId": "1404",
        "pinyin": "luchengshi",
        "initial": "L"
    },
    {
        "id": "140505",
        "title": "陵川县",
        "parentId": "1405",
        "pinyin": "lingchuanxian",
        "initial": "L"
    },
    {
        "id": "140811",
        "title": "灵石县",
        "parentId": "1408",
        "pinyin": "lingshixian",
        "initial": "L"
    },
    {
        "id": "1409",
        "title": "临汾市",
        "parentId": "14",
        "pinyin": "linfenshi",
        "initial": "L"
    },
    {
        "id": "1410",
        "title": "吕梁市",
        "parentId": "14",
        "pinyin": "lvliangshi",
        "initial": "L"
    },
    {
        "id": "141002",
        "title": "离石区",
        "parentId": "1410",
        "pinyin": "lishiqu",
        "initial": "L"
    },
    {
        "id": "141006",
        "title": "临县",
        "parentId": "1410",
        "pinyin": "linxian",
        "initial": "L"
    },
    {
        "id": "141007",
        "title": "柳林县",
        "parentId": "1410",
        "pinyin": "liulinxian",
        "initial": "L"
    },
    {
        "id": "141103",
        "title": "临猗县",
        "parentId": "1411",
        "pinyin": "linzuoxian",
        "initial": "L"
    },
    {
        "id": "20",
        "title": "辽宁省",
        "parentId": null,
        "pinyin": "liaoningsheng",
        "initial": "L"
    },
    {
        "id": "200111",
        "title": "辽中县",
        "parentId": "2001",
        "pinyin": "liaozhongxian",
        "initial": "L"
    },
    {
        "id": "200206",
        "title": "旅顺口区",
        "parentId": "2002",
        "pinyin": "lvshunkouqu",
        "initial": "L"
    },
    {
        "id": "200304",
        "title": "立山区",
        "parentId": "2003",
        "pinyin": "lishanqu",
        "initial": "L"
    },
    {
        "id": "200403",
        "title": "凌河区",
        "parentId": "2004",
        "pinyin": "linghequ",
        "initial": "L"
    },
    {
        "id": "200407",
        "title": "凌海市",
        "parentId": "2004",
        "pinyin": "linghaishi",
        "initial": "L"
    },
    {
        "id": "200905",
        "title": "老边区",
        "parentId": "2009",
        "pinyin": "laobianqu",
        "initial": "L"
    },
    {
        "id": "2010",
        "title": "辽阳市",
        "parentId": "20",
        "pinyin": "liaoyangshi",
        "initial": "L"
    },
    {
        "id": "201007",
        "title": "辽阳县",
        "parentId": "2010",
        "pinyin": "liaoyangxian",
        "initial": "L"
    },
    {
        "id": "201303",
        "title": "龙城区",
        "parentId": "2013",
        "pinyin": "longchengqu",
        "initial": "L"
    },
    {
        "id": "201308",
        "title": "凌源市",
        "parentId": "2013",
        "pinyin": "lingyuanshi",
        "initial": "L"
    },
    {
        "id": "201402",
        "title": "连山区",
        "parentId": "2014",
        "pinyin": "lianshanqu",
        "initial": "L"
    },
    {
        "id": "201403",
        "title": "龙港区",
        "parentId": "2014",
        "pinyin": "longgangqu",
        "initial": "L"
    },
    {
        "id": "210106",
        "title": "绿园区",
        "parentId": "2101",
        "pinyin": "lvyuanqu",
        "initial": "L"
    },
    {
        "id": "210203",
        "title": "龙潭区",
        "parentId": "2102",
        "pinyin": "longtanqu",
        "initial": "L"
    },
    {
        "id": "210304",
        "title": "梨树县",
        "parentId": "2103",
        "pinyin": "lishuxian",
        "initial": "L"
    },
    {
        "id": "2104",
        "title": "辽源市",
        "parentId": "21",
        "pinyin": "liaoyuanshi",
        "initial": "L"
    },
    {
        "id": "210402",
        "title": "龙山区",
        "parentId": "2104",
        "pinyin": "longshanqu",
        "initial": "L"
    },
    {
        "id": "210506",
        "title": "柳河县",
        "parentId": "2105",
        "pinyin": "liuhexian",
        "initial": "L"
    },
    {
        "id": "210607",
        "title": "临江市",
        "parentId": "2106",
        "pinyin": "linjiangshi",
        "initial": "L"
    },
    {
        "id": "210905",
        "title": "龙井市",
        "parentId": "2109",
        "pinyin": "longjingshi",
        "initial": "L"
    },
    {
        "id": "220202",
        "title": "龙沙区",
        "parentId": "2202",
        "pinyin": "longshaqu",
        "initial": "L"
    },
    {
        "id": "220209",
        "title": "龙江县",
        "parentId": "2202",
        "pinyin": "longjiangxian",
        "initial": "L"
    },
    {
        "id": "220305",
        "title": "梨树区",
        "parentId": "2203",
        "pinyin": "lishuqu",
        "initial": "L"
    },
    {
        "id": "220408",
        "title": "萝北县",
        "parentId": "2204",
        "pinyin": "luobeixian",
        "initial": "L"
    },
    {
        "id": "220503",
        "title": "岭东区",
        "parentId": "2205",
        "pinyin": "lingdongqu",
        "initial": "L"
    },
    {
        "id": "220603",
        "title": "龙凤区",
        "parentId": "2206",
        "pinyin": "longfengqu",
        "initial": "L"
    },
    {
        "id": "220609",
        "title": "林甸县",
        "parentId": "2206",
        "pinyin": "lindianxian",
        "initial": "L"
    },
    {
        "id": "221007",
        "title": "林口县",
        "parentId": "2210",
        "pinyin": "linkouxian",
        "initial": "L"
    },
    {
        "id": "221204",
        "title": "兰西县",
        "parentId": "2212",
        "pinyin": "lanxixian",
        "initial": "L"
    },
    {
        "id": "310112",
        "title": "六合区",
        "parentId": "3101",
        "pinyin": "liuhequ",
        "initial": "L"
    },
    {
        "id": "3109",
        "title": "连云港市",
        "parentId": "31",
        "pinyin": "lianyungangshi",
        "initial": "L"
    },
    {
        "id": "310902",
        "title": "连云区",
        "parentId": "3109",
        "pinyin": "lianyunqu",
        "initial": "L"
    },
    {
        "id": "311106",
        "title": "涟水县",
        "parentId": "3111",
        "pinyin": "lianshuixian",
        "initial": "L"
    },
    {
        "id": "320102",
        "title": "历下区",
        "parentId": "3201",
        "pinyin": "lixiaqu",
        "initial": "L"
    },
    {
        "id": "320106",
        "title": "历城区",
        "parentId": "3201",
        "pinyin": "lichengqu",
        "initial": "L"
    },
    {
        "id": "320207",
        "title": "李沧区",
        "parentId": "3202",
        "pinyin": "licangqu",
        "initial": "L"
    },
    {
        "id": "320213",
        "title": "莱西市",
        "parentId": "3202",
        "pinyin": "laixishi",
        "initial": "L"
    },
    {
        "id": "320305",
        "title": "莱山区",
        "parentId": "3203",
        "pinyin": "laishanqu",
        "initial": "L"
    },
    {
        "id": "320307",
        "title": "龙口市",
        "parentId": "3203",
        "pinyin": "longkoushi",
        "initial": "L"
    },
    {
        "id": "320308",
        "title": "莱阳市",
        "parentId": "3203",
        "pinyin": "laiyangshi",
        "initial": "L"
    },
    {
        "id": "320309",
        "title": "莱州市",
        "parentId": "3203",
        "pinyin": "laizhoushi",
        "initial": "L"
    },
    {
        "id": "320405",
        "title": "临淄区",
        "parentId": "3204",
        "pinyin": "linziqu",
        "initial": "L"
    },
    {
        "id": "320606",
        "title": "临朐县",
        "parentId": "3206",
        "pinyin": "linzuoxian",
        "initial": "L"
    },
    {
        "id": "320710",
        "title": "梁山县",
        "parentId": "3207",
        "pinyin": "liangshanxian",
        "initial": "L"
    },
    {
        "id": "320903",
        "title": "陵县",
        "parentId": "3209",
        "pinyin": "lingxian",
        "initial": "L"
    },
    {
        "id": "320906",
        "title": "临邑县",
        "parentId": "3209",
        "pinyin": "linyixian",
        "initial": "L"
    },
    {
        "id": "320911",
        "title": "乐陵市",
        "parentId": "3209",
        "pinyin": "lelingshi",
        "initial": "L"
    },
    {
        "id": "3212",
        "title": "莱芜市",
        "parentId": "32",
        "pinyin": "laiwushi",
        "initial": "L"
    },
    {
        "id": "321202",
        "title": "莱城区",
        "parentId": "3212",
        "pinyin": "laichengqu",
        "initial": "L"
    },
    {
        "id": "321405",
        "title": "利津县",
        "parentId": "3214",
        "pinyin": "lijinxian",
        "initial": "L"
    },
    {
        "id": "3215",
        "title": "聊城市",
        "parentId": "32",
        "pinyin": "liaochengshi",
        "initial": "L"
    },
    {
        "id": "321509",
        "title": "临清市",
        "parentId": "3215",
        "pinyin": "linqingshi",
        "initial": "L"
    },
    {
        "id": "3217",
        "title": "临沂市",
        "parentId": "32",
        "pinyin": "linyishi",
        "initial": "L"
    },
    {
        "id": "321702",
        "title": "兰山区",
        "parentId": "3217",
        "pinyin": "lanshanqu",
        "initial": "L"
    },
    {
        "id": "321703",
        "title": "罗庄区",
        "parentId": "3217",
        "pinyin": "luozhuangqu",
        "initial": "L"
    },
    {
        "id": "321713",
        "title": "临沭县",
        "parentId": "3217",
        "pinyin": "linzuoxian",
        "initial": "L"
    },
    {
        "id": "330103",
        "title": "庐阳区",
        "parentId": "3301",
        "pinyin": "luyangqu",
        "initial": "L"
    },
    {
        "id": "330302",
        "title": "龙子湖区",
        "parentId": "3303",
        "pinyin": "longzihuqu",
        "initial": "L"
    },
    {
        "id": "330504",
        "title": "烈山区",
        "parentId": "3305",
        "pinyin": "lieshanqu",
        "initial": "L"
    },
    {
        "id": "330902",
        "title": "琅琊区",
        "parentId": "3309",
        "pinyin": "langzuoqu",
        "initial": "L"
    },
    {
        "id": "330904",
        "title": "来安县",
        "parentId": "3309",
        "pinyin": "laianxian",
        "initial": "L"
    },
    {
        "id": "331005",
        "title": "灵璧县",
        "parentId": "3310",
        "pinyin": "lingzuoxian",
        "initial": "L"
    },
    {
        "id": "331303",
        "title": "庐江县",
        "parentId": "3313",
        "pinyin": "lujiangxian",
        "initial": "L"
    },
    {
        "id": "331405",
        "title": "临泉县",
        "parentId": "3314",
        "pinyin": "linquanxian",
        "initial": "L"
    },
    {
        "id": "3315",
        "title": "六安市",
        "parentId": "33",
        "pinyin": "liuanshi",
        "initial": "L"
    },
    {
        "id": "331603",
        "title": "郎溪县",
        "parentId": "3316",
        "pinyin": "langxixian",
        "initial": "L"
    },
    {
        "id": "331705",
        "title": "利辛县",
        "parentId": "3317",
        "pinyin": "lixinxian",
        "initial": "L"
    },
    {
        "id": "340108",
        "title": "连江县",
        "parentId": "3401",
        "pinyin": "lianjiangxian",
        "initial": "L"
    },
    {
        "id": "340109",
        "title": "罗源县",
        "parentId": "3401",
        "pinyin": "luoyuanxian",
        "initial": "L"
    },
    {
        "id": "340303",
        "title": "龙文区",
        "parentId": "3403",
        "pinyin": "longwenqu",
        "initial": "L"
    },
    {
        "id": "340312",
        "title": "龙海市",
        "parentId": "3403",
        "pinyin": "longhaishi",
        "initial": "L"
    },
    {
        "id": "340402",
        "title": "鲤城区",
        "parentId": "3404",
        "pinyin": "lichengqu",
        "initial": "L"
    },
    {
        "id": "340404",
        "title": "洛江区",
        "parentId": "3404",
        "pinyin": "luojiangqu",
        "initial": "L"
    },
    {
        "id": "340504",
        "title": "荔城区",
        "parentId": "3405",
        "pinyin": "lichengqu",
        "initial": "L"
    },
    {
        "id": "3408",
        "title": "龙岩市",
        "parentId": "34",
        "pinyin": "longyanshi",
        "initial": "L"
    },
    {
        "id": "340807",
        "title": "连城县",
        "parentId": "3408",
        "pinyin": "lianchengxian",
        "initial": "L"
    },
    {
        "id": "350114",
        "title": "临安市",
        "parentId": "3501",
        "pinyin": "linanshi",
        "initial": "L"
    },
    {
        "id": "350302",
        "title": "鹿城区",
        "parentId": "3503",
        "pinyin": "luchengqu",
        "initial": "L"
    },
    {
        "id": "350303",
        "title": "龙湾区",
        "parentId": "3503",
        "pinyin": "longwanqu",
        "initial": "L"
    },
    {
        "id": "350312",
        "title": "乐清市",
        "parentId": "3503",
        "pinyin": "leqingshi",
        "initial": "L"
    },
    {
        "id": "350707",
        "title": "兰溪市",
        "parentId": "3507",
        "pinyin": "lanxishi",
        "initial": "L"
    },
    {
        "id": "350806",
        "title": "龙游县",
        "parentId": "3508",
        "pinyin": "longyouxian",
        "initial": "L"
    },
    {
        "id": "351004",
        "title": "路桥区",
        "parentId": "3510",
        "pinyin": "luqiaoqu",
        "initial": "L"
    },
    {
        "id": "351010",
        "title": "临海市",
        "parentId": "3510",
        "pinyin": "linhaishi",
        "initial": "L"
    },
    {
        "id": "3511",
        "title": "丽水市",
        "parentId": "35",
        "pinyin": "lishuishi",
        "initial": "L"
    },
    {
        "id": "351102",
        "title": "莲都区",
        "parentId": "3511",
        "pinyin": "lianduqu",
        "initial": "L"
    },
    {
        "id": "351110",
        "title": "龙泉市",
        "parentId": "3511",
        "pinyin": "longquanshi",
        "initial": "L"
    },
    {
        "id": "360205",
        "title": "乐平市",
        "parentId": "3602",
        "pinyin": "lepingshi",
        "initial": "L"
    },
    {
        "id": "360304",
        "title": "莲花县",
        "parentId": "3603",
        "pinyin": "lianhuaxian",
        "initial": "L"
    },
    {
        "id": "360306",
        "title": "芦溪县",
        "parentId": "3603",
        "pinyin": "luxixian",
        "initial": "L"
    },
    {
        "id": "360402",
        "title": "庐山区",
        "parentId": "3604",
        "pinyin": "lushanqu",
        "initial": "L"
    },
    {
        "id": "360709",
        "title": "龙南县",
        "parentId": "3607",
        "pinyin": "longnanxian",
        "initial": "L"
    },
    {
        "id": "361002",
        "title": "临川区",
        "parentId": "3610",
        "pinyin": "linchuanqu",
        "initial": "L"
    },
    {
        "id": "361004",
        "title": "黎川县",
        "parentId": "3610",
        "pinyin": "lichuanxian",
        "initial": "L"
    },
    {
        "id": "361007",
        "title": "乐安县",
        "parentId": "3610",
        "pinyin": "leanxian",
        "initial": "L"
    },
    {
        "id": "400102",
        "title": "荔湾区",
        "parentId": "4001",
        "pinyin": "liwanqu",
        "initial": "L"
    },
    {
        "id": "400111",
        "title": "萝岗区",
        "parentId": "4001",
        "pinyin": "luogangqu",
        "initial": "L"
    },
    {
        "id": "400202",
        "title": "罗湖区",
        "parentId": "4002",
        "pinyin": "luohuqu",
        "initial": "L"
    },
    {
        "id": "400206",
        "title": "龙岗区",
        "parentId": "4002",
        "pinyin": "longgangqu",
        "initial": "L"
    },
    {
        "id": "400402",
        "title": "龙湖区",
        "parentId": "4004",
        "pinyin": "longhuqu",
        "initial": "L"
    },
    {
        "id": "400510",
        "title": "乐昌市",
        "parentId": "4005",
        "pinyin": "lechangshi",
        "initial": "L"
    },
    {
        "id": "400604",
        "title": "龙川县",
        "parentId": "4006",
        "pinyin": "longchuanxian",
        "initial": "L"
    },
    {
        "id": "400605",
        "title": "连平县",
        "parentId": "4006",
        "pinyin": "lianpingxian",
        "initial": "L"
    },
    {
        "id": "400806",
        "title": "龙门县",
        "parentId": "4008",
        "pinyin": "longmenxian",
        "initial": "L"
    },
    {
        "id": "400904",
        "title": "陆河县",
        "parentId": "4009",
        "pinyin": "luhexian",
        "initial": "L"
    },
    {
        "id": "400905",
        "title": "陆丰市",
        "parentId": "4009",
        "pinyin": "lufengshi",
        "initial": "L"
    },
    {
        "id": "401508",
        "title": "廉江市",
        "parentId": "4015",
        "pinyin": "lianjiangshi",
        "initial": "L"
    },
    {
        "id": "401509",
        "title": "雷州市",
        "parentId": "4015",
        "pinyin": "leizhoushi",
        "initial": "L"
    },
    {
        "id": "401805",
        "title": "连山县",
        "parentId": "4018",
        "pinyin": "lianshanxian",
        "initial": "L"
    },
    {
        "id": "401806",
        "title": "连南县",
        "parentId": "4018",
        "pinyin": "liannanxian",
        "initial": "L"
    },
    {
        "id": "401809",
        "title": "连州市",
        "parentId": "4018",
        "pinyin": "lianzhoushi",
        "initial": "L"
    },
    {
        "id": "402106",
        "title": "罗定市",
        "parentId": "4021",
        "pinyin": "luodingshi",
        "initial": "L"
    },
    {
        "id": "410106",
        "title": "良庆区",
        "parentId": "4101",
        "pinyin": "liangqingqu",
        "initial": "L"
    },
    {
        "id": "410109",
        "title": "隆安县",
        "parentId": "4101",
        "pinyin": "longanxian",
        "initial": "L"
    },
    {
        "id": "4102",
        "title": "柳州市",
        "parentId": "41",
        "pinyin": "liuzhoushi",
        "initial": "L"
    },
    {
        "id": "410204",
        "title": "柳南区",
        "parentId": "4102",
        "pinyin": "liunanqu",
        "initial": "L"
    },
    {
        "id": "410205",
        "title": "柳北区",
        "parentId": "4102",
        "pinyin": "liubeiqu",
        "initial": "L"
    },
    {
        "id": "410206",
        "title": "柳江县",
        "parentId": "4102",
        "pinyin": "liujiangxian",
        "initial": "L"
    },
    {
        "id": "410207",
        "title": "柳城县",
        "parentId": "4102",
        "pinyin": "liuchengxian",
        "initial": "L"
    },
    {
        "id": "410208",
        "title": "鹿寨县",
        "parentId": "4102",
        "pinyin": "luzhaixian",
        "initial": "L"
    },
    {
        "id": "410308",
        "title": "临桂县",
        "parentId": "4103",
        "pinyin": "linguixian",
        "initial": "L"
    },
    {
        "id": "410309",
        "title": "灵川县",
        "parentId": "4103",
        "pinyin": "lingchuanxian",
        "initial": "L"
    },
    {
        "id": "410314",
        "title": "龙胜县",
        "parentId": "4103",
        "pinyin": "longshengxian",
        "initial": "L"
    },
    {
        "id": "410317",
        "title": "荔蒲县",
        "parentId": "4103",
        "pinyin": "lipuxian",
        "initial": "L"
    },
    {
        "id": "410704",
        "title": "灵山县",
        "parentId": "4107",
        "pinyin": "lingshanxian",
        "initial": "L"
    },
    {
        "id": "410904",
        "title": "陆川县",
        "parentId": "4109",
        "pinyin": "luchuanxian",
        "initial": "L"
    },
    {
        "id": "411009",
        "title": "凌云县",
        "parentId": "4110",
        "pinyin": "lingyunxian",
        "initial": "L"
    },
    {
        "id": "411010",
        "title": "乐业县",
        "parentId": "4110",
        "pinyin": "leyexian",
        "initial": "L"
    },
    {
        "id": "411013",
        "title": "隆林县",
        "parentId": "4110",
        "pinyin": "longlinxian",
        "initial": "L"
    },
    {
        "id": "411207",
        "title": "罗城县",
        "parentId": "4112",
        "pinyin": "luochengxian",
        "initial": "L"
    },
    {
        "id": "4113",
        "title": "来宾市",
        "parentId": "41",
        "pinyin": "laibinshi",
        "initial": "L"
    },
    {
        "id": "411405",
        "title": "龙州县",
        "parentId": "4114",
        "pinyin": "longzhouxian",
        "initial": "L"
    },
    {
        "id": "420103",
        "title": "龙华区",
        "parentId": "4201",
        "pinyin": "longhuaqu",
        "initial": "L"
    },
    {
        "id": "4212",
        "title": "临高县",
        "parentId": "42",
        "pinyin": "lingaoxian",
        "initial": "L"
    },
    {
        "id": "4213",
        "title": "陵水县",
        "parentId": "42",
        "pinyin": "lingshuixian",
        "initial": "L"
    },
    {
        "id": "4216",
        "title": "乐东县",
        "parentId": "42",
        "pinyin": "ledongxian",
        "initial": "L"
    },
    {
        "id": "6026",
        "title": "梁平县",
        "parentId": "60",
        "pinyin": "liangpingxian",
        "initial": "L"
    },
    {
        "id": "610107",
        "title": "龙泉驿区",
        "parentId": "6101",
        "pinyin": "longquanzuoqu",
        "initial": "L"
    },
    {
        "id": "610204",
        "title": "罗江县",
        "parentId": "6102",
        "pinyin": "luojiangxian",
        "initial": "L"
    },
    {
        "id": "610504",
        "title": "龙马潭区",
        "parentId": "6105",
        "pinyin": "longmatanqu",
        "initial": "L"
    },
    {
        "id": "610806",
        "title": "隆昌县",
        "parentId": "6108",
        "pinyin": "longchangxian",
        "initial": "L"
    },
    {
        "id": "6110",
        "title": "乐山市",
        "parentId": "61",
        "pinyin": "leshanshi",
        "initial": "L"
    },
    {
        "id": "611108",
        "title": "芦山县",
        "parentId": "6111",
        "pinyin": "lushanxian",
        "initial": "L"
    },
    {
        "id": "611605",
        "title": "邻水县",
        "parentId": "6116",
        "pinyin": "linshuixian",
        "initial": "L"
    },
    {
        "id": "611704",
        "title": "乐至县",
        "parentId": "6117",
        "pinyin": "lezhixian",
        "initial": "L"
    },
    {
        "id": "611802",
        "title": "理县",
        "parentId": "6118",
        "pinyin": "lixian",
        "initial": "L"
    },
    {
        "id": "612007",
        "title": "炉霍县",
        "parentId": "6120",
        "pinyin": "luhuoxian",
        "initial": "L"
    },
    {
        "id": "612014",
        "title": "理塘县",
        "parentId": "6120",
        "pinyin": "litangxian",
        "initial": "L"
    },
    {
        "id": "6121",
        "title": "凉山州",
        "parentId": "61",
        "pinyin": "liangshanzhou",
        "initial": "L"
    },
    {
        "id": "612117",
        "title": "雷波县",
        "parentId": "6121",
        "pinyin": "leiboxian",
        "initial": "L"
    },
    {
        "id": "620113",
        "title": "禄劝县",
        "parentId": "6201",
        "pinyin": "luquanxian",
        "initial": "L"
    },
    {
        "id": "620204",
        "title": "陆良县",
        "parentId": "6202",
        "pinyin": "luliangxian",
        "initial": "L"
    },
    {
        "id": "620206",
        "title": "罗平县",
        "parentId": "6202",
        "pinyin": "luopingxian",
        "initial": "L"
    },
    {
        "id": "620403",
        "title": "鲁甸县",
        "parentId": "6204",
        "pinyin": "ludianxian",
        "initial": "L"
    },
    {
        "id": "620510",
        "title": "禄丰县",
        "parentId": "6205",
        "pinyin": "lufengxian",
        "initial": "L"
    },
    {
        "id": "620612",
        "title": "绿春县",
        "parentId": "6206",
        "pinyin": "lvchunxian",
        "initial": "L"
    },
    {
        "id": "6207",
        "title": "丽江市",
        "parentId": "62",
        "pinyin": "lijiangshi",
        "initial": "L"
    },
    {
        "id": "621110",
        "title": "澜沧县",
        "parentId": "6211",
        "pinyin": "lancangxian",
        "initial": "L"
    },
    {
        "id": "621302",
        "title": "隆阳区",
        "parentId": "6213",
        "pinyin": "longyangqu",
        "initial": "L"
    },
    {
        "id": "621305",
        "title": "龙陵县",
        "parentId": "6213",
        "pinyin": "longlingxian",
        "initial": "L"
    },
    {
        "id": "621402",
        "title": "潞西市",
        "parentId": "6214",
        "pinyin": "luxishi",
        "initial": "L"
    },
    {
        "id": "621403",
        "title": "梁河县",
        "parentId": "6214",
        "pinyin": "lianghexian",
        "initial": "L"
    },
    {
        "id": "621405",
        "title": "陇川县",
        "parentId": "6214",
        "pinyin": "longchuanxian",
        "initial": "L"
    },
    {
        "id": "621504",
        "title": "兰坪县",
        "parentId": "6215",
        "pinyin": "lanpingxian",
        "initial": "L"
    },
    {
        "id": "6216",
        "title": "临沧市",
        "parentId": "62",
        "pinyin": "lincangshi",
        "initial": "L"
    },
    {
        "id": "621602",
        "title": "临翔区",
        "parentId": "6216",
        "pinyin": "linxiangqu",
        "initial": "L"
    },
    {
        "id": "6303",
        "title": "六盘水市",
        "parentId": "63",
        "pinyin": "liupanshuishi",
        "initial": "L"
    },
    {
        "id": "630302",
        "title": "六枝特区",
        "parentId": "6303",
        "pinyin": "liuzhitequ",
        "initial": "L"
    },
    {
        "id": "630603",
        "title": "荔波县",
        "parentId": "6306",
        "pinyin": "liboxian",
        "initial": "L"
    },
    {
        "id": "630608",
        "title": "罗甸县",
        "parentId": "6306",
        "pinyin": "luodianxian",
        "initial": "L"
    },
    {
        "id": "630610",
        "title": "龙里县",
        "parentId": "6306",
        "pinyin": "longlixian",
        "initial": "L"
    },
    {
        "id": "630911",
        "title": "黎平县",
        "parentId": "6309",
        "pinyin": "lipingxian",
        "initial": "L"
    },
    {
        "id": "630914",
        "title": "雷山县",
        "parentId": "6309",
        "pinyin": "leishanxian",
        "initial": "L"
    },
    {
        "id": "6401",
        "title": "拉萨市",
        "parentId": "64",
        "pinyin": "lasashi",
        "initial": "L"
    },
    {
        "id": "640103",
        "title": "林周县",
        "parentId": "6401",
        "pinyin": "linzhouxian",
        "initial": "L"
    },
    {
        "id": "640206",
        "title": "拉孜县",
        "parentId": "6402",
        "pinyin": "lazixian",
        "initial": "L"
    },
    {
        "id": "640308",
        "title": "洛扎县",
        "parentId": "6403",
        "pinyin": "luozhaxian",
        "initial": "L"
    },
    {
        "id": "640310",
        "title": "隆子县",
        "parentId": "6403",
        "pinyin": "longzixian",
        "initial": "L"
    },
    {
        "id": "640312",
        "title": "浪卡子县",
        "parentId": "6403",
        "pinyin": "langkazixian",
        "initial": "L"
    },
    {
        "id": "6404",
        "title": "林芝地区",
        "parentId": "64",
        "pinyin": "linzhidiqu",
        "initial": "L"
    },
    {
        "id": "640401",
        "title": "林芝县",
        "parentId": "6404",
        "pinyin": "linzhixian",
        "initial": "L"
    },
    {
        "id": "640407",
        "title": "朗县",
        "parentId": "6404",
        "pinyin": "langxian",
        "initial": "L"
    },
    {
        "id": "640504",
        "title": "类乌齐县",
        "parentId": "6405",
        "pinyin": "leiwuqixian",
        "initial": "L"
    },
    {
        "id": "640510",
        "title": "洛隆县",
        "parentId": "6405",
        "pinyin": "luolongxian",
        "initial": "L"
    },
    {
        "id": "7002",
        "title": "洛阳市",
        "parentId": "70",
        "pinyin": "luoyangshi",
        "initial": "L"
    },
    {
        "id": "700202",
        "title": "老城区",
        "parentId": "7002",
        "pinyin": "laochengqu",
        "initial": "L"
    },
    {
        "id": "700207",
        "title": "洛龙区",
        "parentId": "7002",
        "pinyin": "luolongqu",
        "initial": "L"
    },
    {
        "id": "700214",
        "title": "洛宁县",
        "parentId": "7002",
        "pinyin": "luoningxian",
        "initial": "L"
    },
    {
        "id": "700302",
        "title": "龙亭区",
        "parentId": "7003",
        "pinyin": "longtingqu",
        "initial": "L"
    },
    {
        "id": "700311",
        "title": "兰考县",
        "parentId": "7003",
        "pinyin": "lankaoxian",
        "initial": "L"
    },
    {
        "id": "700405",
        "title": "龙安区",
        "parentId": "7004",
        "pinyin": "longanqu",
        "initial": "L"
    },
    {
        "id": "700410",
        "title": "林州市",
        "parentId": "7004",
        "pinyin": "linzhoushi",
        "initial": "L"
    },
    {
        "id": "700905",
        "title": "卢氏县",
        "parentId": "7009",
        "pinyin": "lushixian",
        "initial": "L"
    },
    {
        "id": "700907",
        "title": "灵宝市",
        "parentId": "7009",
        "pinyin": "lingbaoshi",
        "initial": "L"
    },
    {
        "id": "701002",
        "title": "梁园区",
        "parentId": "7010",
        "pinyin": "liangyuanqu",
        "initial": "L"
    },
    {
        "id": "701206",
        "title": "临颍县",
        "parentId": "7012",
        "pinyin": "linzuoxian",
        "initial": "L"
    },
    {
        "id": "701308",
        "title": "鲁山县",
        "parentId": "7013",
        "pinyin": "lushanxian",
        "initial": "L"
    },
    {
        "id": "701510",
        "title": "鹿邑县",
        "parentId": "7015",
        "pinyin": "luyixian",
        "initial": "L"
    },
    {
        "id": "701704",
        "title": "罗山县",
        "parentId": "7017",
        "pinyin": "luoshanxian",
        "initial": "L"
    },
    {
        "id": "710308",
        "title": "老河口市",
        "parentId": "7103",
        "pinyin": "laohekoushi",
        "initial": "L"
    },
    {
        "id": "710802",
        "title": "梁子湖区",
        "parentId": "7108",
        "pinyin": "liangzihuqu",
        "initial": "L"
    },
    {
        "id": "711005",
        "title": "罗田县",
        "parentId": "7110",
        "pinyin": "luotianxian",
        "initial": "L"
    },
    {
        "id": "711302",
        "title": "利川市",
        "parentId": "7113",
        "pinyin": "lichuanshi",
        "initial": "L"
    },
    {
        "id": "711307",
        "title": "来凤县",
        "parentId": "7113",
        "pinyin": "laifengxian",
        "initial": "L"
    },
    {
        "id": "720203",
        "title": "芦淞区",
        "parentId": "7202",
        "pinyin": "luzuoqu",
        "initial": "L"
    },
    {
        "id": "720607",
        "title": "临澧县",
        "parentId": "7206",
        "pinyin": "linzuoxian",
        "initial": "L"
    },
    {
        "id": "720710",
        "title": "临湘市",
        "parentId": "7207",
        "pinyin": "linxiangshi",
        "initial": "L"
    },
    {
        "id": "720808",
        "title": "隆回县",
        "parentId": "7208",
        "pinyin": "longhuixian",
        "initial": "L"
    },
    {
        "id": "720908",
        "title": "临武县",
        "parentId": "7209",
        "pinyin": "linwuxian",
        "initial": "L"
    },
    {
        "id": "7210",
        "title": "娄底市",
        "parentId": "72",
        "pinyin": "loudishi",
        "initial": "L"
    },
    {
        "id": "721002",
        "title": "娄星区",
        "parentId": "7210",
        "pinyin": "louxingqu",
        "initial": "L"
    },
    {
        "id": "721005",
        "title": "冷水江市",
        "parentId": "7210",
        "pinyin": "lengshuijiangshi",
        "initial": "L"
    },
    {
        "id": "721006",
        "title": "涟源市",
        "parentId": "7210",
        "pinyin": "lianyuanshi",
        "initial": "L"
    },
    {
        "id": "721102",
        "title": "零陵区",
        "parentId": "7211",
        "pinyin": "linglingqu",
        "initial": "L"
    },
    {
        "id": "721103",
        "title": "冷水滩区",
        "parentId": "7211",
        "pinyin": "lengshuitanqu",
        "initial": "L"
    },
    {
        "id": "721110",
        "title": "蓝山县",
        "parentId": "7211",
        "pinyin": "lanshanxian",
        "initial": "L"
    },
    {
        "id": "721408",
        "title": "龙山县",
        "parentId": "7214",
        "pinyin": "longshanxian",
        "initial": "L"
    },
    {
        "id": "800104",
        "title": "莲湖区",
        "parentId": "8001",
        "pinyin": "lianhuqu",
        "initial": "L"
    },
    {
        "id": "800109",
        "title": "临潼区",
        "parentId": "8001",
        "pinyin": "linzuoqu",
        "initial": "L"
    },
    {
        "id": "800111",
        "title": "蓝田县",
        "parentId": "8001",
        "pinyin": "lantianxian",
        "initial": "L"
    },
    {
        "id": "800209",
        "title": "陇县",
        "parentId": "8002",
        "pinyin": "longxian",
        "initial": "L"
    },
    {
        "id": "800308",
        "title": "礼泉县",
        "parentId": "8003",
        "pinyin": "liquanxian",
        "initial": "L"
    },
    {
        "id": "800402",
        "title": "临渭区",
        "parentId": "8004",
        "pinyin": "linweiqu",
        "initial": "L"
    },
    {
        "id": "800511",
        "title": "洛川县",
        "parentId": "8005",
        "pinyin": "luochuanxian",
        "initial": "L"
    },
    {
        "id": "800809",
        "title": "略阳县",
        "parentId": "8008",
        "pinyin": "lueyangxian",
        "initial": "L"
    },
    {
        "id": "800811",
        "title": "留坝县",
        "parentId": "8008",
        "pinyin": "liubaxian",
        "initial": "L"
    },
    {
        "id": "801003",
        "title": "洛南县",
        "parentId": "8010",
        "pinyin": "luonanxian",
        "initial": "L"
    },
    {
        "id": "810203",
        "title": "乐都县",
        "parentId": "8102",
        "pinyin": "leduxian",
        "initial": "L"
    },
    {
        "id": "820107",
        "title": "灵武市",
        "parentId": "8201",
        "pinyin": "lingwushi",
        "initial": "L"
    },
    {
        "id": "820302",
        "title": "利通区",
        "parentId": "8203",
        "pinyin": "litongqu",
        "initial": "L"
    },
    {
        "id": "820404",
        "title": "隆德县",
        "parentId": "8204",
        "pinyin": "longdexian",
        "initial": "L"
    },
    {
        "id": "830802",
        "title": "轮台县",
        "parentId": "8308",
        "pinyin": "luntaixian",
        "initial": "L"
    },
    {
        "id": "831005",
        "title": "洛浦县",
        "parentId": "8310",
        "pinyin": "luopuxian",
        "initial": "L"
    },
    {
        "id": "8401",
        "title": "兰州市",
        "parentId": "84",
        "pinyin": "lanzhoushi",
        "initial": "L"
    },
    {
        "id": "840402",
        "title": "凉州区",
        "parentId": "8404",
        "pinyin": "liangzhouqu",
        "initial": "L"
    },
    {
        "id": "840705",
        "title": "临泽县",
        "parentId": "8407",
        "pinyin": "linzexian",
        "initial": "L"
    },
    {
        "id": "840904",
        "title": "灵台县",
        "parentId": "8409",
        "pinyin": "lingtaixian",
        "initial": "L"
    },
    {
        "id": "841104",
        "title": "陇西县",
        "parentId": "8411",
        "pinyin": "longxixian",
        "initial": "L"
    },
    {
        "id": "841106",
        "title": "临洮县",
        "parentId": "8411",
        "pinyin": "linzuoxian",
        "initial": "L"
    },
    {
        "id": "8412",
        "title": "陇南市",
        "parentId": "84",
        "pinyin": "longnanshi",
        "initial": "L"
    },
    {
        "id": "841208",
        "title": "礼县",
        "parentId": "8412",
        "pinyin": "lixian",
        "initial": "L"
    },
    {
        "id": "841210",
        "title": "两当县",
        "parentId": "8412",
        "pinyin": "liangdangxian",
        "initial": "L"
    },
    {
        "id": "8413",
        "title": "临夏",
        "parentId": "84",
        "pinyin": "linxia",
        "initial": "L"
    },
    {
        "id": "841301",
        "title": "临夏市",
        "parentId": "8413",
        "pinyin": "linxiashi",
        "initial": "L"
    },
    {
        "id": "841302",
        "title": "临夏县",
        "parentId": "8413",
        "pinyin": "linxiaxian",
        "initial": "L"
    },
    {
        "id": "841402",
        "title": "临潭县",
        "parentId": "8414",
        "pinyin": "lintanxian",
        "initial": "L"
    },
    {
        "id": "841407",
        "title": "碌曲县",
        "parentId": "8414",
        "pinyin": "luquxian",
        "initial": "L"
    },
    {
        "id": "1011",
        "title": "门头沟区",
        "parentId": "10",
        "pinyin": "mentougouqu",
        "initial": "M"
    },
    {
        "id": "1018",
        "title": "密云县",
        "parentId": "10",
        "pinyin": "miyunxian",
        "initial": "M"
    },
    {
        "id": "120705",
        "title": "满城县",
        "parentId": "1207",
        "pinyin": "manchengxian",
        "initial": "M"
    },
    {
        "id": "121013",
        "title": "孟村县",
        "parentId": "1210",
        "pinyin": "mengcunxian",
        "initial": "M"
    },
    {
        "id": "130304",
        "title": "莫旗",
        "parentId": "1303",
        "pinyin": "moqi",
        "initial": "M"
    },
    {
        "id": "1313",
        "title": "满洲里",
        "parentId": "13",
        "pinyin": "manzhouli",
        "initial": "M"
    },
    {
        "id": "201204",
        "title": "明山区",
        "parentId": "2012",
        "pinyin": "mingshanqu",
        "initial": "M"
    },
    {
        "id": "210507",
        "title": "梅河口市",
        "parentId": "2105",
        "pinyin": "meihekoushi",
        "initial": "M"
    },
    {
        "id": "220114",
        "title": "木兰县",
        "parentId": "2201",
        "pinyin": "mulanxian",
        "initial": "M"
    },
    {
        "id": "220208",
        "title": "梅里斯区",
        "parentId": "2202",
        "pinyin": "meilisiqu",
        "initial": "M"
    },
    {
        "id": "220307",
        "title": "麻山区",
        "parentId": "2203",
        "pinyin": "mashanqu",
        "initial": "M"
    },
    {
        "id": "220310",
        "title": "密山市",
        "parentId": "2203",
        "pinyin": "mishanshi",
        "initial": "M"
    },
    {
        "id": "220708",
        "title": "美溪区",
        "parentId": "2207",
        "pinyin": "meixiqu",
        "initial": "M"
    },
    {
        "id": "2210",
        "title": "牡丹江市",
        "parentId": "22",
        "pinyin": "mudanjiangshi",
        "initial": "M"
    },
    {
        "id": "221011",
        "title": "穆棱市",
        "parentId": "2210",
        "pinyin": "mulengshi",
        "initial": "M"
    },
    {
        "id": "221207",
        "title": "明水县",
        "parentId": "2212",
        "pinyin": "mingshuixian",
        "initial": "M"
    },
    {
        "id": "221307",
        "title": "漠河县",
        "parentId": "2213",
        "pinyin": "mohexian",
        "initial": "M"
    },
    {
        "id": "320304",
        "title": "牟平区",
        "parentId": "3203",
        "pinyin": "moupingqu",
        "initial": "M"
    },
    {
        "id": "321602",
        "title": "牡丹区",
        "parentId": "3216",
        "pinyin": "mudanqu",
        "initial": "M"
    },
    {
        "id": "321712",
        "title": "蒙阴县",
        "parentId": "3217",
        "pinyin": "mengyinxian",
        "initial": "M"
    },
    {
        "id": "3304",
        "title": "马鞍山市",
        "parentId": "33",
        "pinyin": "maanshanshi",
        "initial": "M"
    },
    {
        "id": "330909",
        "title": "明光市",
        "parentId": "3309",
        "pinyin": "mingguangshi",
        "initial": "M"
    },
    {
        "id": "331704",
        "title": "蒙城县",
        "parentId": "3317",
        "pinyin": "mengchengxian",
        "initial": "M"
    },
    {
        "id": "340105",
        "title": "马尾区",
        "parentId": "3401",
        "pinyin": "maweiqu",
        "initial": "M"
    },
    {
        "id": "340107",
        "title": "闽侯县",
        "parentId": "3401",
        "pinyin": "minhouxian",
        "initial": "M"
    },
    {
        "id": "340110",
        "title": "闽清县",
        "parentId": "3401",
        "pinyin": "minqingxian",
        "initial": "M"
    },
    {
        "id": "340602",
        "title": "梅列区",
        "parentId": "3406",
        "pinyin": "meiliequ",
        "initial": "M"
    },
    {
        "id": "340604",
        "title": "明溪县",
        "parentId": "3406",
        "pinyin": "mingxixian",
        "initial": "M"
    },
    {
        "id": "4007",
        "title": "梅州市",
        "parentId": "40",
        "pinyin": "meizhoushi",
        "initial": "M"
    },
    {
        "id": "400702",
        "title": "梅江区",
        "parentId": "4007",
        "pinyin": "meijiangqu",
        "initial": "M"
    },
    {
        "id": "400703",
        "title": "梅县",
        "parentId": "4007",
        "pinyin": "meixian",
        "initial": "M"
    },
    {
        "id": "401505",
        "title": "麻章区",
        "parentId": "4015",
        "pinyin": "mazhangqu",
        "initial": "M"
    },
    {
        "id": "4016",
        "title": "茂名市",
        "parentId": "40",
        "pinyin": "maomingshi",
        "initial": "M"
    },
    {
        "id": "401602",
        "title": "茂南区",
        "parentId": "4016",
        "pinyin": "maonanqu",
        "initial": "M"
    },
    {
        "id": "401603",
        "title": "茂港区",
        "parentId": "4016",
        "pinyin": "maogangqu",
        "initial": "M"
    },
    {
        "id": "410110",
        "title": "马山县",
        "parentId": "4101",
        "pinyin": "mashanxian",
        "initial": "M"
    },
    {
        "id": "410407",
        "title": "蒙山县",
        "parentId": "4104",
        "pinyin": "mengshanxian",
        "initial": "M"
    },
    {
        "id": "420105",
        "title": "美兰区",
        "parentId": "4201",
        "pinyin": "meilanqu",
        "initial": "M"
    },
    {
        "id": "610207",
        "title": "绵竹市",
        "parentId": "6102",
        "pinyin": "mianzhushi",
        "initial": "M"
    },
    {
        "id": "6103",
        "title": "绵阳市",
        "parentId": "61",
        "pinyin": "mianyangshi",
        "initial": "M"
    },
    {
        "id": "6104",
        "title": "眉山市",
        "parentId": "61",
        "pinyin": "meishanshi",
        "initial": "M"
    },
    {
        "id": "611011",
        "title": "马边县",
        "parentId": "6110",
        "pinyin": "mabianxian",
        "initial": "M"
    },
    {
        "id": "611103",
        "title": "名山县",
        "parentId": "6111",
        "pinyin": "mingshanxian",
        "initial": "M"
    },
    {
        "id": "611803",
        "title": "茂县",
        "parentId": "6118",
        "pinyin": "maoxian",
        "initial": "M"
    },
    {
        "id": "611809",
        "title": "马尔康县",
        "parentId": "6118",
        "pinyin": "maerkangxian",
        "initial": "M"
    },
    {
        "id": "611905",
        "title": "米易县",
        "parentId": "6119",
        "pinyin": "miyixian",
        "initial": "M"
    },
    {
        "id": "612102",
        "title": "木里县",
        "parentId": "6121",
        "pinyin": "mulixian",
        "initial": "M"
    },
    {
        "id": "612113",
        "title": "冕宁县",
        "parentId": "6121",
        "pinyin": "mianningxian",
        "initial": "M"
    },
    {
        "id": "612116",
        "title": "美姑县",
        "parentId": "6121",
        "pinyin": "meiguxian",
        "initial": "M"
    },
    {
        "id": "620203",
        "title": "马龙县",
        "parentId": "6202",
        "pinyin": "malongxian",
        "initial": "M"
    },
    {
        "id": "620503",
        "title": "牟定县",
        "parentId": "6205",
        "pinyin": "moudingxian",
        "initial": "M"
    },
    {
        "id": "620603",
        "title": "蒙自县",
        "parentId": "6206",
        "pinyin": "mengzixian",
        "initial": "M"
    },
    {
        "id": "620607",
        "title": "弥勒县",
        "parentId": "6206",
        "pinyin": "milexian",
        "initial": "M"
    },
    {
        "id": "620904",
        "title": "麻栗坡县",
        "parentId": "6209",
        "pinyin": "malipoxian",
        "initial": "M"
    },
    {
        "id": "620905",
        "title": "马关县",
        "parentId": "6209",
        "pinyin": "maguanxian",
        "initial": "M"
    },
    {
        "id": "621104",
        "title": "墨江县",
        "parentId": "6211",
        "pinyin": "mojiangxian",
        "initial": "M"
    },
    {
        "id": "621109",
        "title": "孟连县",
        "parentId": "6211",
        "pinyin": "menglianxian",
        "initial": "M"
    },
    {
        "id": "621205",
        "title": "弥渡县",
        "parentId": "6212",
        "pinyin": "miduxian",
        "initial": "M"
    },
    {
        "id": "630915",
        "title": "麻江县",
        "parentId": "6309",
        "pinyin": "majiangxian",
        "initial": "M"
    },
    {
        "id": "640109",
        "title": "墨竹工卡县",
        "parentId": "6401",
        "pinyin": "mozhugongkaxian",
        "initial": "M"
    },
    {
        "id": "640403",
        "title": "米林县",
        "parentId": "6404",
        "pinyin": "milinxian",
        "initial": "M"
    },
    {
        "id": "640404",
        "title": "墨脱县",
        "parentId": "6404",
        "pinyin": "motuoxian",
        "initial": "M"
    },
    {
        "id": "640509",
        "title": "芒康县",
        "parentId": "6405",
        "pinyin": "mangkangxian",
        "initial": "M"
    },
    {
        "id": "700208",
        "title": "孟津县",
        "parentId": "7002",
        "pinyin": "mengjinxian",
        "initial": "M"
    },
    {
        "id": "700505",
        "title": "牧野区",
        "parentId": "7005",
        "pinyin": "muyequ",
        "initial": "M"
    },
    {
        "id": "700704",
        "title": "马村区",
        "parentId": "7007",
        "pinyin": "macunqu",
        "initial": "M"
    },
    {
        "id": "700711",
        "title": "孟州市",
        "parentId": "7007",
        "pinyin": "mengzhoushi",
        "initial": "M"
    },
    {
        "id": "701004",
        "title": "民权县",
        "parentId": "7010",
        "pinyin": "minquanxian",
        "initial": "M"
    },
    {
        "id": "701408",
        "title": "泌阳县",
        "parentId": "7014",
        "pinyin": "miyangxian",
        "initial": "M"
    },
    {
        "id": "710402",
        "title": "茅箭区",
        "parentId": "7104",
        "pinyin": "maojianqu",
        "initial": "M"
    },
    {
        "id": "711010",
        "title": "麻城市",
        "parentId": "7110",
        "pinyin": "machengshi",
        "initial": "M"
    },
    {
        "id": "721208",
        "title": "麻阳县",
        "parentId": "7212",
        "pinyin": "mayangxian",
        "initial": "M"
    },
    {
        "id": "800208",
        "title": "眉县",
        "parentId": "8002",
        "pinyin": "meixian",
        "initial": "M"
    },
    {
        "id": "800609",
        "title": "米脂县",
        "parentId": "8006",
        "pinyin": "mizhixian",
        "initial": "M"
    },
    {
        "id": "800807",
        "title": "勉县",
        "parentId": "8008",
        "pinyin": "mianxian",
        "initial": "M"
    },
    {
        "id": "810202",
        "title": "民和县",
        "parentId": "8102",
        "pinyin": "minhexian",
        "initial": "M"
    },
    {
        "id": "810401",
        "title": "门源县",
        "parentId": "8104",
        "pinyin": "menyuanxian",
        "initial": "M"
    },
    {
        "id": "810701",
        "title": "玛沁县",
        "parentId": "8107",
        "pinyin": "maqinxian",
        "initial": "M"
    },
    {
        "id": "810706",
        "title": "玛多县",
        "parentId": "8107",
        "pinyin": "maduoxian",
        "initial": "M"
    },
    {
        "id": "830108",
        "title": "米东区",
        "parentId": "8301",
        "pinyin": "midongqu",
        "initial": "M"
    },
    {
        "id": "830604",
        "title": "玛纳斯县",
        "parentId": "8306",
        "pinyin": "manasixian",
        "initial": "M"
    },
    {
        "id": "830607",
        "title": "木垒县",
        "parentId": "8306",
        "pinyin": "muleixian",
        "initial": "M"
    },
    {
        "id": "831003",
        "title": "墨玉县",
        "parentId": "8310",
        "pinyin": "moyuxian",
        "initial": "M"
    },
    {
        "id": "831008",
        "title": "民丰县",
        "parentId": "8310",
        "pinyin": "minfengxian",
        "initial": "M"
    },
    {
        "id": "831308",
        "title": "麦盖提县",
        "parentId": "8313",
        "pinyin": "maigaitixian",
        "initial": "M"
    },
    {
        "id": "840203",
        "title": "麦积区",
        "parentId": "8402",
        "pinyin": "maijiqu",
        "initial": "M"
    },
    {
        "id": "840403",
        "title": "民勤县",
        "parentId": "8404",
        "pinyin": "minqinxian",
        "initial": "M"
    },
    {
        "id": "840704",
        "title": "民乐县",
        "parentId": "8407",
        "pinyin": "minlexian",
        "initial": "M"
    },
    {
        "id": "841406",
        "title": "玛曲县",
        "parentId": "8414",
        "pinyin": "maquxian",
        "initial": "M"
    },
    {
        "id": "1105",
        "title": "南开区",
        "parentId": "11",
        "pinyin": "nankaiqu",
        "initial": "N"
    },
    {
        "id": "1117",
        "title": "宁河县",
        "parentId": "11",
        "pinyin": "ninghexian",
        "initial": "N"
    },
    {
        "id": "120703",
        "title": "南市区",
        "parentId": "1207",
        "pinyin": "nanshiqu",
        "initial": "N"
    },
    {
        "id": "120906",
        "title": "内丘县",
        "parentId": "1209",
        "pinyin": "neiqiuxian",
        "initial": "N"
    },
    {
        "id": "120910",
        "title": "南和县",
        "parentId": "1209",
        "pinyin": "nanhexian",
        "initial": "N"
    },
    {
        "id": "120911",
        "title": "宁晋县",
        "parentId": "1209",
        "pinyin": "ningjinxian",
        "initial": "N"
    },
    {
        "id": "120919",
        "title": "南宫市",
        "parentId": "1209",
        "pinyin": "nangongshi",
        "initial": "N"
    },
    {
        "id": "121010",
        "title": "南皮县",
        "parentId": "1210",
        "pinyin": "nanpixian",
        "initial": "N"
    },
    {
        "id": "13",
        "title": "内蒙古",
        "parentId": null,
        "pinyin": "neimenggu",
        "initial": "N"
    },
    {
        "id": "130507",
        "title": "奈曼旗",
        "parentId": "1305",
        "pinyin": "naimanqi",
        "initial": "N"
    },
    {
        "id": "130612",
        "title": "宁城县",
        "parentId": "1306",
        "pinyin": "ningchengxian",
        "initial": "N"
    },
    {
        "id": "140204",
        "title": "南郊区",
        "parentId": "1402",
        "pinyin": "nanjiaoqu",
        "initial": "N"
    },
    {
        "id": "140707",
        "title": "宁武县",
        "parentId": "1407",
        "pinyin": "ningwuxian",
        "initial": "N"
    },
    {
        "id": "201205",
        "title": "南芬区",
        "parentId": "2012",
        "pinyin": "nanfenqu",
        "initial": "N"
    },
    {
        "id": "201404",
        "title": "南票区",
        "parentId": "2014",
        "pinyin": "nanpiaoqu",
        "initial": "N"
    },
    {
        "id": "210102",
        "title": "南关区",
        "parentId": "2101",
        "pinyin": "nanguanqu",
        "initial": "N"
    },
    {
        "id": "210108",
        "title": "农安县",
        "parentId": "2101",
        "pinyin": "nonganxian",
        "initial": "N"
    },
    {
        "id": "210702",
        "title": "宁江区",
        "parentId": "2107",
        "pinyin": "ningjiangqu",
        "initial": "N"
    },
    {
        "id": "220103",
        "title": "南岗区",
        "parentId": "2201",
        "pinyin": "nangangqu",
        "initial": "N"
    },
    {
        "id": "220207",
        "title": "碾子山区",
        "parentId": "2202",
        "pinyin": "nianzishanqu",
        "initial": "N"
    },
    {
        "id": "220404",
        "title": "南山区",
        "parentId": "2204",
        "pinyin": "nanshanqu",
        "initial": "N"
    },
    {
        "id": "220703",
        "title": "南岔区",
        "parentId": "2207",
        "pinyin": "nanchaqu",
        "initial": "N"
    },
    {
        "id": "221010",
        "title": "宁安市",
        "parentId": "2210",
        "pinyin": "ninganshi",
        "initial": "N"
    },
    {
        "id": "221103",
        "title": "嫩江县",
        "parentId": "2211",
        "pinyin": "nenjiangxian",
        "initial": "N"
    },
    {
        "id": "3101",
        "title": "南京市",
        "parentId": "31",
        "pinyin": "nanjingshi",
        "initial": "N"
    },
    {
        "id": "310303",
        "title": "南长区",
        "parentId": "3103",
        "pinyin": "nanchangqu",
        "initial": "N"
    },
    {
        "id": "3106",
        "title": "南通市",
        "parentId": "31",
        "pinyin": "nantongshi",
        "initial": "N"
    },
    {
        "id": "320504",
        "title": "宁阳县",
        "parentId": "3205",
        "pinyin": "ningyangxian",
        "initial": "N"
    },
    {
        "id": "320904",
        "title": "宁津县",
        "parentId": "3209",
        "pinyin": "ningjinxian",
        "initial": "N"
    },
    {
        "id": "330208",
        "title": "南陵县",
        "parentId": "3302",
        "pinyin": "nanlingxian",
        "initial": "N"
    },
    {
        "id": "330903",
        "title": "南谯区",
        "parentId": "3309",
        "pinyin": "nanzuoqu",
        "initial": "N"
    },
    {
        "id": "331608",
        "title": "宁国市",
        "parentId": "3316",
        "pinyin": "ningguoshi",
        "initial": "N"
    },
    {
        "id": "340309",
        "title": "南靖县",
        "parentId": "3403",
        "pinyin": "nanjingxian",
        "initial": "N"
    },
    {
        "id": "340413",
        "title": "南安市",
        "parentId": "3404",
        "pinyin": "nananshi",
        "initial": "N"
    },
    {
        "id": "340606",
        "title": "宁化县",
        "parentId": "3406",
        "pinyin": "ninghuaxian",
        "initial": "N"
    },
    {
        "id": "3407",
        "title": "南平市",
        "parentId": "34",
        "pinyin": "nanpingshi",
        "initial": "N"
    },
    {
        "id": "3409",
        "title": "宁德市",
        "parentId": "34",
        "pinyin": "ningdeshi",
        "initial": "N"
    },
    {
        "id": "3502",
        "title": "宁波市",
        "parentId": "35",
        "pinyin": "ningboshi",
        "initial": "N"
    },
    {
        "id": "350209",
        "title": "宁海县",
        "parentId": "3502",
        "pinyin": "ninghaixian",
        "initial": "N"
    },
    {
        "id": "350402",
        "title": "南湖区",
        "parentId": "3504",
        "pinyin": "nanhuqu",
        "initial": "N"
    },
    {
        "id": "350503",
        "title": "南浔区",
        "parentId": "3505",
        "pinyin": "nanzuoqu",
        "initial": "N"
    },
    {
        "id": "3601",
        "title": "南昌市",
        "parentId": "36",
        "pinyin": "nanchangshi",
        "initial": "N"
    },
    {
        "id": "360107",
        "title": "南昌县",
        "parentId": "3601",
        "pinyin": "nanchangxian",
        "initial": "N"
    },
    {
        "id": "360712",
        "title": "宁都县",
        "parentId": "3607",
        "pinyin": "ningduxian",
        "initial": "N"
    },
    {
        "id": "360719",
        "title": "南康市",
        "parentId": "3607",
        "pinyin": "nankangshi",
        "initial": "N"
    },
    {
        "id": "361003",
        "title": "南城县",
        "parentId": "3610",
        "pinyin": "nanchengxian",
        "initial": "N"
    },
    {
        "id": "361005",
        "title": "南丰县",
        "parentId": "3610",
        "pinyin": "nanfengxian",
        "initial": "N"
    },
    {
        "id": "400110",
        "title": "南沙区",
        "parentId": "4001",
        "pinyin": "nanshaqu",
        "initial": "N"
    },
    {
        "id": "400204",
        "title": "南山区",
        "parentId": "4002",
        "pinyin": "nanshanqu",
        "initial": "N"
    },
    {
        "id": "400408",
        "title": "南澳县",
        "parentId": "4004",
        "pinyin": "nanaoxian",
        "initial": "N"
    },
    {
        "id": "400511",
        "title": "南雄市",
        "parentId": "4005",
        "pinyin": "nanxiongshi",
        "initial": "N"
    },
    {
        "id": "401303",
        "title": "南海区",
        "parentId": "4013",
        "pinyin": "nanhaiqu",
        "initial": "N"
    },
    {
        "id": "4101",
        "title": "南宁市",
        "parentId": "41",
        "pinyin": "nanningshi",
        "initial": "N"
    },
    {
        "id": "411008",
        "title": "那坡县",
        "parentId": "4110",
        "pinyin": "napoxian",
        "initial": "N"
    },
    {
        "id": "411203",
        "title": "南丹县",
        "parentId": "4112",
        "pinyin": "nandanxian",
        "initial": "N"
    },
    {
        "id": "411404",
        "title": "宁明县",
        "parentId": "4114",
        "pinyin": "ningmingxian",
        "initial": "N"
    },
    {
        "id": "6008",
        "title": "南岸区",
        "parentId": "60",
        "pinyin": "nananqu",
        "initial": "N"
    },
    {
        "id": "6019",
        "title": "南川区",
        "parentId": "60",
        "pinyin": "nanchuanqu",
        "initial": "N"
    },
    {
        "id": "610503",
        "title": "纳溪区",
        "parentId": "6105",
        "pinyin": "naxiqu",
        "initial": "N"
    },
    {
        "id": "6106",
        "title": "南充市",
        "parentId": "61",
        "pinyin": "nanchongshi",
        "initial": "N"
    },
    {
        "id": "610605",
        "title": "南部县",
        "parentId": "6106",
        "pinyin": "nanbuxian",
        "initial": "N"
    },
    {
        "id": "6108",
        "title": "内江市",
        "parentId": "61",
        "pinyin": "neijiangshi",
        "initial": "N"
    },
    {
        "id": "610904",
        "title": "南溪县",
        "parentId": "6109",
        "pinyin": "nanxixian",
        "initial": "N"
    },
    {
        "id": "611404",
        "title": "南江县",
        "parentId": "6114",
        "pinyin": "nanjiangxian",
        "initial": "N"
    },
    {
        "id": "612107",
        "title": "宁南县",
        "parentId": "6121",
        "pinyin": "ningnanxian",
        "initial": "N"
    },
    {
        "id": "620504",
        "title": "南华县",
        "parentId": "6205",
        "pinyin": "nanhuaxian",
        "initial": "N"
    },
    {
        "id": "620706",
        "title": "宁蒗县",
        "parentId": "6207",
        "pinyin": "ningzuoxian",
        "initial": "N"
    },
    {
        "id": "621103",
        "title": "宁洱哈尼族县",
        "parentId": "6211",
        "pinyin": "ningerhanizuxian",
        "initial": "N"
    },
    {
        "id": "621206",
        "title": "南涧县",
        "parentId": "6212",
        "pinyin": "nanjianxian",
        "initial": "N"
    },
    {
        "id": "6215",
        "title": "怒江",
        "parentId": "62",
        "pinyin": "nujiang",
        "initial": "N"
    },
    {
        "id": "630102",
        "title": "南明区",
        "parentId": "6301",
        "pinyin": "nanmingqu",
        "initial": "N"
    },
    {
        "id": "630806",
        "title": "纳雍县",
        "parentId": "6308",
        "pinyin": "nayongxian",
        "initial": "N"
    },
    {
        "id": "640105",
        "title": "尼木县",
        "parentId": "6401",
        "pinyin": "nimuxian",
        "initial": "N"
    },
    {
        "id": "640202",
        "title": "南木林县",
        "parentId": "6402",
        "pinyin": "nanmulinxian",
        "initial": "N"
    },
    {
        "id": "640216",
        "title": "聂拉木县",
        "parentId": "6402",
        "pinyin": "nielamuxian",
        "initial": "N"
    },
    {
        "id": "640301",
        "title": "乃东县",
        "parentId": "6403",
        "pinyin": "naidongxian",
        "initial": "N"
    },
    {
        "id": "6406",
        "title": "那曲地区",
        "parentId": "64",
        "pinyin": "naqudiqu",
        "initial": "N"
    },
    {
        "id": "640601",
        "title": "那曲县",
        "parentId": "6406",
        "pinyin": "naquxian",
        "initial": "N"
    },
    {
        "id": "640604",
        "title": "聂荣县",
        "parentId": "6406",
        "pinyin": "nierongxian",
        "initial": "N"
    },
    {
        "id": "640610",
        "title": "尼玛县",
        "parentId": "6406",
        "pinyin": "nimaxian",
        "initial": "N"
    },
    {
        "id": "700409",
        "title": "内黄县",
        "parentId": "7004",
        "pinyin": "neihuangxian",
        "initial": "N"
    },
    {
        "id": "700604",
        "title": "南乐县",
        "parentId": "7006",
        "pinyin": "nanlexian",
        "initial": "N"
    },
    {
        "id": "701006",
        "title": "宁陵县",
        "parentId": "7010",
        "pinyin": "ninglingxian",
        "initial": "N"
    },
    {
        "id": "7016",
        "title": "南阳市",
        "parentId": "70",
        "pinyin": "nanyangshi",
        "initial": "N"
    },
    {
        "id": "701604",
        "title": "南召县",
        "parentId": "7016",
        "pinyin": "nanzhaoxian",
        "initial": "N"
    },
    {
        "id": "701608",
        "title": "内乡县",
        "parentId": "7016",
        "pinyin": "neixiangxian",
        "initial": "N"
    },
    {
        "id": "710305",
        "title": "南漳县",
        "parentId": "7103",
        "pinyin": "nanzhangxian",
        "initial": "N"
    },
    {
        "id": "720109",
        "title": "宁乡县",
        "parentId": "7201",
        "pinyin": "ningxiangxian",
        "initial": "N"
    },
    {
        "id": "720406",
        "title": "南岳区",
        "parentId": "7204",
        "pinyin": "nanyuequ",
        "initial": "N"
    },
    {
        "id": "720504",
        "title": "南县",
        "parentId": "7205",
        "pinyin": "nanxian",
        "initial": "N"
    },
    {
        "id": "721109",
        "title": "宁远县",
        "parentId": "7211",
        "pinyin": "ningyuanxian",
        "initial": "N"
    },
    {
        "id": "800803",
        "title": "南郑县",
        "parentId": "8008",
        "pinyin": "nanzhengxian",
        "initial": "N"
    },
    {
        "id": "800808",
        "title": "宁强县",
        "parentId": "8008",
        "pinyin": "ningqiangxian",
        "initial": "N"
    },
    {
        "id": "800905",
        "title": "宁陕县",
        "parentId": "8009",
        "pinyin": "ningshanxian",
        "initial": "N"
    },
    {
        "id": "801101",
        "title": "农业示范区",
        "parentId": "8011",
        "pinyin": "nongyeshifanqu",
        "initial": "N"
    },
    {
        "id": "810805",
        "title": "囊谦县",
        "parentId": "8108",
        "pinyin": "nangqianxian",
        "initial": "N"
    },
    {
        "id": "82",
        "title": "宁夏",
        "parentId": null,
        "pinyin": "ningxia",
        "initial": "N"
    },
    {
        "id": "830210",
        "title": "尼勒克县",
        "parentId": "8302",
        "pinyin": "nilekexian",
        "initial": "N"
    },
    {
        "id": "840808",
        "title": "宁县",
        "parentId": "8408",
        "pinyin": "ningxian",
        "initial": "N"
    },
    {
        "id": "1017",
        "title": "平谷区",
        "parentId": "10",
        "pinyin": "pingguqu",
        "initial": "P"
    },
    {
        "id": "120117",
        "title": "平山县",
        "parentId": "1201",
        "pinyin": "pingshanxian",
        "initial": "P"
    },
    {
        "id": "120807",
        "title": "平泉县",
        "parentId": "1208",
        "pinyin": "pingquanxian",
        "initial": "P"
    },
    {
        "id": "120915",
        "title": "平乡县",
        "parentId": "1209",
        "pinyin": "pingxiangxian",
        "initial": "P"
    },
    {
        "id": "140305",
        "title": "平定县",
        "parentId": "1403",
        "pinyin": "pingdingxian",
        "initial": "P"
    },
    {
        "id": "140407",
        "title": "平顺县",
        "parentId": "1404",
        "pinyin": "pingshunxian",
        "initial": "P"
    },
    {
        "id": "140603",
        "title": "平鲁区",
        "parentId": "1406",
        "pinyin": "pingluqu",
        "initial": "P"
    },
    {
        "id": "140714",
        "title": "偏关县",
        "parentId": "1407",
        "pinyin": "pianguanxian",
        "initial": "P"
    },
    {
        "id": "140810",
        "title": "平遥县",
        "parentId": "1408",
        "pinyin": "pingyaoxian",
        "initial": "P"
    },
    {
        "id": "140915",
        "title": "蒲县",
        "parentId": "1409",
        "pinyin": "puxian",
        "initial": "P"
    },
    {
        "id": "141111",
        "title": "平陆县",
        "parentId": "1411",
        "pinyin": "pingluxian",
        "initial": "P"
    },
    {
        "id": "200210",
        "title": "普兰店市",
        "parentId": "2002",
        "pinyin": "pulandianshi",
        "initial": "P"
    },
    {
        "id": "2006",
        "title": "盘锦市",
        "parentId": "20",
        "pinyin": "panjinshi",
        "initial": "P"
    },
    {
        "id": "200605",
        "title": "盘山县",
        "parentId": "2006",
        "pinyin": "panshanxian",
        "initial": "P"
    },
    {
        "id": "201202",
        "title": "平山区",
        "parentId": "2012",
        "pinyin": "pingshanqu",
        "initial": "P"
    },
    {
        "id": "210210",
        "title": "磐石市",
        "parentId": "2102",
        "pinyin": "panshishi",
        "initial": "P"
    },
    {
        "id": "220105",
        "title": "平房区",
        "parentId": "2201",
        "pinyin": "pingfangqu",
        "initial": "P"
    },
    {
        "id": "3011",
        "title": "浦东新区",
        "parentId": "30",
        "pinyin": "pudongxinqu",
        "initial": "P"
    },
    {
        "id": "3014",
        "title": "普陀区",
        "parentId": "30",
        "pinyin": "putuoqu",
        "initial": "P"
    },
    {
        "id": "310108",
        "title": "浦口区",
        "parentId": "3101",
        "pinyin": "pukouqu",
        "initial": "P"
    },
    {
        "id": "310203",
        "title": "平江区",
        "parentId": "3102",
        "pinyin": "pingjiangqu",
        "initial": "P"
    },
    {
        "id": "310808",
        "title": "沛县",
        "parentId": "3108",
        "pinyin": "peixian",
        "initial": "P"
    },
    {
        "id": "320108",
        "title": "平阴县",
        "parentId": "3201",
        "pinyin": "pingyinxian",
        "initial": "P"
    },
    {
        "id": "320211",
        "title": "平度市",
        "parentId": "3202",
        "pinyin": "pingdushi",
        "initial": "P"
    },
    {
        "id": "320310",
        "title": "蓬莱市",
        "parentId": "3203",
        "pinyin": "penglaishi",
        "initial": "P"
    },
    {
        "id": "320908",
        "title": "平原县",
        "parentId": "3209",
        "pinyin": "pingyuanxian",
        "initial": "P"
    },
    {
        "id": "321710",
        "title": "平邑县",
        "parentId": "3217",
        "pinyin": "pingyixian",
        "initial": "P"
    },
    {
        "id": "331206",
        "title": "潘集区",
        "parentId": "3312",
        "pinyin": "panjiqu",
        "initial": "P"
    },
    {
        "id": "340112",
        "title": "平潭县",
        "parentId": "3401",
        "pinyin": "pingtanxian",
        "initial": "P"
    },
    {
        "id": "340310",
        "title": "平和县",
        "parentId": "3403",
        "pinyin": "pinghexian",
        "initial": "P"
    },
    {
        "id": "3405",
        "title": "莆田市",
        "parentId": "34",
        "pinyin": "putianshi",
        "initial": "P"
    },
    {
        "id": "340704",
        "title": "浦城县",
        "parentId": "3407",
        "pinyin": "puchengxian",
        "initial": "P"
    },
    {
        "id": "340905",
        "title": "屏南县",
        "parentId": "3409",
        "pinyin": "pingnanxian",
        "initial": "P"
    },
    {
        "id": "350307",
        "title": "平阳县",
        "parentId": "3503",
        "pinyin": "pingyangxian",
        "initial": "P"
    },
    {
        "id": "350407",
        "title": "平湖市",
        "parentId": "3504",
        "pinyin": "pinghushi",
        "initial": "P"
    },
    {
        "id": "350705",
        "title": "浦江县",
        "parentId": "3507",
        "pinyin": "pujiangxian",
        "initial": "P"
    },
    {
        "id": "350706",
        "title": "磐安县",
        "parentId": "3507",
        "pinyin": "pananxian",
        "initial": "P"
    },
    {
        "id": "350903",
        "title": "普陀区",
        "parentId": "3509",
        "pinyin": "putuoqu",
        "initial": "P"
    },
    {
        "id": "3603",
        "title": "萍乡市",
        "parentId": "36",
        "pinyin": "pingxiangshi",
        "initial": "P"
    },
    {
        "id": "360412",
        "title": "彭泽县",
        "parentId": "3604",
        "pinyin": "pengzexian",
        "initial": "P"
    },
    {
        "id": "400707",
        "title": "平远县",
        "parentId": "4007",
        "pinyin": "pingyuanxian",
        "initial": "P"
    },
    {
        "id": "401202",
        "title": "蓬江区",
        "parentId": "4012",
        "pinyin": "pengjiangqu",
        "initial": "P"
    },
    {
        "id": "401504",
        "title": "坡头区",
        "parentId": "4015",
        "pinyin": "potouqu",
        "initial": "P"
    },
    {
        "id": "402006",
        "title": "普宁市",
        "parentId": "4020",
        "pinyin": "puningshi",
        "initial": "P"
    },
    {
        "id": "410316",
        "title": "平乐县",
        "parentId": "4103",
        "pinyin": "pinglexian",
        "initial": "P"
    },
    {
        "id": "410705",
        "title": "浦北县",
        "parentId": "4107",
        "pinyin": "pubeixian",
        "initial": "P"
    },
    {
        "id": "410805",
        "title": "平南县",
        "parentId": "4108",
        "pinyin": "pingnanxian",
        "initial": "P"
    },
    {
        "id": "411005",
        "title": "平果县",
        "parentId": "4110",
        "pinyin": "pingguoxian",
        "initial": "P"
    },
    {
        "id": "411408",
        "title": "凭祥市",
        "parentId": "4114",
        "pinyin": "pingxiangshi",
        "initial": "P"
    },
    {
        "id": "6040",
        "title": "彭水苗族县",
        "parentId": "60",
        "pinyin": "pengshuimiaozuxian",
        "initial": "P"
    },
    {
        "id": "610115",
        "title": "蒲江县",
        "parentId": "6101",
        "pinyin": "pujiangxian",
        "initial": "P"
    },
    {
        "id": "610118",
        "title": "彭州市",
        "parentId": "6101",
        "pinyin": "pengzhoushi",
        "initial": "P"
    },
    {
        "id": "610309",
        "title": "平武县",
        "parentId": "6103",
        "pinyin": "pingwuxian",
        "initial": "P"
    },
    {
        "id": "610404",
        "title": "彭山县",
        "parentId": "6104",
        "pinyin": "pengshanxian",
        "initial": "P"
    },
    {
        "id": "610607",
        "title": "蓬安县",
        "parentId": "6106",
        "pinyin": "penganxian",
        "initial": "P"
    },
    {
        "id": "610911",
        "title": "屏山县",
        "parentId": "6109",
        "pinyin": "pingshanxian",
        "initial": "P"
    },
    {
        "id": "611204",
        "title": "蓬溪县",
        "parentId": "6112",
        "pinyin": "pengxixian",
        "initial": "P"
    },
    {
        "id": "611405",
        "title": "平昌县",
        "parentId": "6114",
        "pinyin": "pingchangxian",
        "initial": "P"
    },
    {
        "id": "6119",
        "title": "攀枝花市",
        "parentId": "61",
        "pinyin": "panzhihuashi",
        "initial": "P"
    },
    {
        "id": "612108",
        "title": "普格县",
        "parentId": "6121",
        "pinyin": "pugexian",
        "initial": "P"
    },
    {
        "id": "620103",
        "title": "盘龙区",
        "parentId": "6201",
        "pinyin": "panlongqu",
        "initial": "P"
    },
    {
        "id": "620604",
        "title": "屏边县",
        "parentId": "6206",
        "pinyin": "pingbianxian",
        "initial": "P"
    },
    {
        "id": "6211",
        "title": "普洱市",
        "parentId": "62",
        "pinyin": "puershi",
        "initial": "P"
    },
    {
        "id": "630304",
        "title": "盘县",
        "parentId": "6303",
        "pinyin": "panxian",
        "initial": "P"
    },
    {
        "id": "630403",
        "title": "平坝县",
        "parentId": "6304",
        "pinyin": "pingbaxian",
        "initial": "P"
    },
    {
        "id": "630404",
        "title": "普定县",
        "parentId": "6304",
        "pinyin": "pudingxian",
        "initial": "P"
    },
    {
        "id": "630503",
        "title": "普安县",
        "parentId": "6305",
        "pinyin": "puanxian",
        "initial": "P"
    },
    {
        "id": "630607",
        "title": "平塘县",
        "parentId": "6306",
        "pinyin": "pingtangxian",
        "initial": "P"
    },
    {
        "id": "640701",
        "title": "普兰县",
        "parentId": "6407",
        "pinyin": "pulanxian",
        "initial": "P"
    },
    {
        "id": "7013",
        "title": "平顶山市",
        "parentId": "70",
        "pinyin": "pingdingshanshi",
        "initial": "P"
    },
    {
        "id": "701405",
        "title": "平舆县",
        "parentId": "7014",
        "pinyin": "pingyuxian",
        "initial": "P"
    },
    {
        "id": "701703",
        "title": "平桥区",
        "parentId": "7017",
        "pinyin": "pingqiaoqu",
        "initial": "P"
    },
    {
        "id": "720708",
        "title": "平江县",
        "parentId": "7207",
        "pinyin": "pingjiangxian",
        "initial": "P"
    },
    {
        "id": "800408",
        "title": "蒲城县",
        "parentId": "8004",
        "pinyin": "puchengxian",
        "initial": "P"
    },
    {
        "id": "800908",
        "title": "平利县",
        "parentId": "8009",
        "pinyin": "pinglixian",
        "initial": "P"
    },
    {
        "id": "810201",
        "title": "平安县",
        "parentId": "8102",
        "pinyin": "pinganxian",
        "initial": "P"
    },
    {
        "id": "820204",
        "title": "平罗县",
        "parentId": "8202",
        "pinyin": "pingluoxian",
        "initial": "P"
    },
    {
        "id": "820406",
        "title": "彭阳县",
        "parentId": "8204",
        "pinyin": "pengyangxian",
        "initial": "P"
    },
    {
        "id": "831004",
        "title": "皮山县",
        "parentId": "8310",
        "pinyin": "pishanxian",
        "initial": "P"
    },
    {
        "id": "8409",
        "title": "平凉市",
        "parentId": "84",
        "pinyin": "pingliangshi",
        "initial": "P"
    },
    {
        "id": "841003",
        "title": "平川区",
        "parentId": "8410",
        "pinyin": "pingchuanqu",
        "initial": "P"
    },
    {
        "id": "120103",
        "title": "桥东区",
        "parentId": "1201",
        "pinyin": "qiaodongqu",
        "initial": "Q"
    },
    {
        "id": "120104",
        "title": "桥西区",
        "parentId": "1201",
        "pinyin": "qiaoxiqu",
        "initial": "Q"
    },
    {
        "id": "1202",
        "title": "秦皇岛市",
        "parentId": "12",
        "pinyin": "qinhuangdaoshi",
        "initial": "Q"
    },
    {
        "id": "120205",
        "title": "青龙县",
        "parentId": "1202",
        "pinyin": "qinglongxian",
        "initial": "Q"
    },
    {
        "id": "120311",
        "title": "迁西县",
        "parentId": "1203",
        "pinyin": "qianxixian",
        "initial": "Q"
    },
    {
        "id": "120315",
        "title": "迁安市",
        "parentId": "1203",
        "pinyin": "qiananshi",
        "initial": "Q"
    },
    {
        "id": "120402",
        "title": "桥东区",
        "parentId": "1204",
        "pinyin": "qiaodongqu",
        "initial": "Q"
    },
    {
        "id": "120403",
        "title": "桥西区",
        "parentId": "1204",
        "pinyin": "qiaoxiqu",
        "initial": "Q"
    },
    {
        "id": "120706",
        "title": "清苑县",
        "parentId": "1207",
        "pinyin": "qingyuanxian",
        "initial": "Q"
    },
    {
        "id": "120718",
        "title": "曲阳县",
        "parentId": "1207",
        "pinyin": "quyangxian",
        "initial": "Q"
    },
    {
        "id": "120902",
        "title": "桥东区",
        "parentId": "1209",
        "pinyin": "qiaodongqu",
        "initial": "Q"
    },
    {
        "id": "120903",
        "title": "桥西区",
        "parentId": "1209",
        "pinyin": "qiaoxiqu",
        "initial": "Q"
    },
    {
        "id": "120917",
        "title": "清河县",
        "parentId": "1209",
        "pinyin": "qinghexian",
        "initial": "Q"
    },
    {
        "id": "121005",
        "title": "青县",
        "parentId": "1210",
        "pinyin": "qingxian",
        "initial": "Q"
    },
    {
        "id": "121114",
        "title": "邱县",
        "parentId": "1211",
        "pinyin": "qiuxian",
        "initial": "Q"
    },
    {
        "id": "121119",
        "title": "曲周县",
        "parentId": "1211",
        "pinyin": "quzhouxian",
        "initial": "Q"
    },
    {
        "id": "130109",
        "title": "清水河县",
        "parentId": "1301",
        "pinyin": "qingshuihexian",
        "initial": "Q"
    },
    {
        "id": "130204",
        "title": "青山区",
        "parentId": "1302",
        "pinyin": "qingshanqu",
        "initial": "Q"
    },
    {
        "id": "140108",
        "title": "清徐县",
        "parentId": "1401",
        "pinyin": "qingxuxian",
        "initial": "Q"
    },
    {
        "id": "140412",
        "title": "沁县",
        "parentId": "1404",
        "pinyin": "qinxian",
        "initial": "Q"
    },
    {
        "id": "140413",
        "title": "沁源县",
        "parentId": "1404",
        "pinyin": "qinyuanxian",
        "initial": "Q"
    },
    {
        "id": "140503",
        "title": "沁水县",
        "parentId": "1405",
        "pinyin": "qinshuixian",
        "initial": "Q"
    },
    {
        "id": "140809",
        "title": "祁县",
        "parentId": "1408",
        "pinyin": "qixian",
        "initial": "Q"
    },
    {
        "id": "140903",
        "title": "曲沃县",
        "parentId": "1409",
        "pinyin": "quwoxian",
        "initial": "Q"
    },
    {
        "id": "200305",
        "title": "千山区",
        "parentId": "2003",
        "pinyin": "qianshanqu",
        "initial": "Q"
    },
    {
        "id": "200703",
        "title": "清河区",
        "parentId": "2007",
        "pinyin": "qinghequ",
        "initial": "Q"
    },
    {
        "id": "200808",
        "title": "清原县",
        "parentId": "2008",
        "pinyin": "qingyuanxian",
        "initial": "Q"
    },
    {
        "id": "201105",
        "title": "清河门区",
        "parentId": "2011",
        "pinyin": "qinghemenqu",
        "initial": "Q"
    },
    {
        "id": "210703",
        "title": "前郭县",
        "parentId": "2107",
        "pinyin": "qianguoxian",
        "initial": "Q"
    },
    {
        "id": "210705",
        "title": "乾安县",
        "parentId": "2107",
        "pinyin": "qiananxian",
        "initial": "Q"
    },
    {
        "id": "2202",
        "title": "齐齐哈尔市",
        "parentId": "22",
        "pinyin": "qiqihaershi",
        "initial": "Q"
    },
    {
        "id": "220803",
        "title": "前进区",
        "parentId": "2208",
        "pinyin": "qianjinqu",
        "initial": "Q"
    },
    {
        "id": "2209",
        "title": "七台河市",
        "parentId": "22",
        "pinyin": "qitaiheshi",
        "initial": "Q"
    },
    {
        "id": "220904",
        "title": "茄子河区",
        "parentId": "2209",
        "pinyin": "qiezihequ",
        "initial": "Q"
    },
    {
        "id": "221205",
        "title": "青冈县",
        "parentId": "2212",
        "pinyin": "qinggangxian",
        "initial": "Q"
    },
    {
        "id": "221206",
        "title": "庆安县",
        "parentId": "2212",
        "pinyin": "qinganxian",
        "initial": "Q"
    },
    {
        "id": "3006",
        "title": "青浦区",
        "parentId": "30",
        "pinyin": "qingpuqu",
        "initial": "Q"
    },
    {
        "id": "310104",
        "title": "秦淮区",
        "parentId": "3101",
        "pinyin": "qinhuaiqu",
        "initial": "Q"
    },
    {
        "id": "310109",
        "title": "栖霞区",
        "parentId": "3101",
        "pinyin": "qixiaqu",
        "initial": "Q"
    },
    {
        "id": "310606",
        "title": "启东市",
        "parentId": "3106",
        "pinyin": "qidongshi",
        "initial": "Q"
    },
    {
        "id": "310704",
        "title": "戚墅堰区",
        "parentId": "3107",
        "pinyin": "qishuyanqu",
        "initial": "Q"
    },
    {
        "id": "310806",
        "title": "泉山区",
        "parentId": "3108",
        "pinyin": "quanshanqu",
        "initial": "Q"
    },
    {
        "id": "311102",
        "title": "清河区",
        "parentId": "3111",
        "pinyin": "qinghequ",
        "initial": "Q"
    },
    {
        "id": "311105",
        "title": "清浦区",
        "parentId": "3111",
        "pinyin": "qingpuqu",
        "initial": "Q"
    },
    {
        "id": "3202",
        "title": "青岛市",
        "parentId": "32",
        "pinyin": "qingdaoshi",
        "initial": "Q"
    },
    {
        "id": "320312",
        "title": "栖霞市",
        "parentId": "3203",
        "pinyin": "qixiashi",
        "initial": "Q"
    },
    {
        "id": "320608",
        "title": "青州市",
        "parentId": "3206",
        "pinyin": "qingzhoushi",
        "initial": "Q"
    },
    {
        "id": "320711",
        "title": "曲阜市",
        "parentId": "3207",
        "pinyin": "qufushi",
        "initial": "Q"
    },
    {
        "id": "320905",
        "title": "庆云县",
        "parentId": "3209",
        "pinyin": "qingyunxian",
        "initial": "Q"
    },
    {
        "id": "320907",
        "title": "齐河县",
        "parentId": "3209",
        "pinyin": "qihexian",
        "initial": "Q"
    },
    {
        "id": "330707",
        "title": "潜山县",
        "parentId": "3307",
        "pinyin": "qianshanxian",
        "initial": "Q"
    },
    {
        "id": "330808",
        "title": "祁门县",
        "parentId": "3308",
        "pinyin": "qimenxian",
        "initial": "Q"
    },
    {
        "id": "330905",
        "title": "全椒县",
        "parentId": "3309",
        "pinyin": "quanjiaoxian",
        "initial": "Q"
    },
    {
        "id": "331002",
        "title": "埇桥区",
        "parentId": "3310",
        "pinyin": "qiaoqu",
        "initial": "Q"
    },
    {
        "id": "331105",
        "title": "青阳县",
        "parentId": "3311",
        "pinyin": "qingyangxian",
        "initial": "Q"
    },
    {
        "id": "3404",
        "title": "泉州市",
        "parentId": "34",
        "pinyin": "quanzhoushi",
        "initial": "Q"
    },
    {
        "id": "340405",
        "title": "泉港区",
        "parentId": "3404",
        "pinyin": "quangangqu",
        "initial": "Q"
    },
    {
        "id": "340605",
        "title": "清流县",
        "parentId": "3406",
        "pinyin": "qingliuxian",
        "initial": "Q"
    },
    {
        "id": "351103",
        "title": "青田县",
        "parentId": "3511",
        "pinyin": "qingtianxian",
        "initial": "Q"
    },
    {
        "id": "351108",
        "title": "庆元县",
        "parentId": "3511",
        "pinyin": "qingyuanxian",
        "initial": "Q"
    },
    {
        "id": "360104",
        "title": "青云谱区",
        "parentId": "3601",
        "pinyin": "qingyunpuqu",
        "initial": "Q"
    },
    {
        "id": "360106",
        "title": "青山湖区",
        "parentId": "3601",
        "pinyin": "qingshanhuqu",
        "initial": "Q"
    },
    {
        "id": "360711",
        "title": "全南县",
        "parentId": "3607",
        "pinyin": "quannanxian",
        "initial": "Q"
    },
    {
        "id": "360803",
        "title": "青原区",
        "parentId": "3608",
        "pinyin": "qingyuanqu",
        "initial": "Q"
    },
    {
        "id": "361106",
        "title": "铅山县",
        "parentId": "3611",
        "pinyin": "qianshanxian",
        "initial": "Q"
    },
    {
        "id": "400504",
        "title": "曲江区",
        "parentId": "4005",
        "pinyin": "qujiangqu",
        "initial": "Q"
    },
    {
        "id": "4018",
        "title": "清远市",
        "parentId": "40",
        "pinyin": "qingyuanshi",
        "initial": "Q"
    },
    {
        "id": "401802",
        "title": "清城区",
        "parentId": "4018",
        "pinyin": "qingchengqu",
        "initial": "Q"
    },
    {
        "id": "401807",
        "title": "清新县",
        "parentId": "4018",
        "pinyin": "qingxinxian",
        "initial": "Q"
    },
    {
        "id": "410103",
        "title": "青秀区",
        "parentId": "4101",
        "pinyin": "qingxiuqu",
        "initial": "Q"
    },
    {
        "id": "410305",
        "title": "七星区",
        "parentId": "4103",
        "pinyin": "qixingqu",
        "initial": "Q"
    },
    {
        "id": "410310",
        "title": "全州县",
        "parentId": "4103",
        "pinyin": "quanzhouxian",
        "initial": "Q"
    },
    {
        "id": "4107",
        "title": "钦州市",
        "parentId": "41",
        "pinyin": "qinzhoushi",
        "initial": "Q"
    },
    {
        "id": "410702",
        "title": "钦南区",
        "parentId": "4107",
        "pinyin": "qinnanqu",
        "initial": "Q"
    },
    {
        "id": "410703",
        "title": "钦北区",
        "parentId": "4107",
        "pinyin": "qinbeiqu",
        "initial": "Q"
    },
    {
        "id": "420104",
        "title": "琼山区",
        "parentId": "4201",
        "pinyin": "qiongshanqu",
        "initial": "Q"
    },
    {
        "id": "4203",
        "title": "琼海市",
        "parentId": "42",
        "pinyin": "qionghaishi",
        "initial": "Q"
    },
    {
        "id": "4214",
        "title": "琼中县",
        "parentId": "42",
        "pinyin": "qiongzhongxian",
        "initial": "Q"
    },
    {
        "id": "6014",
        "title": "黔江区",
        "parentId": "60",
        "pinyin": "qianjiangqu",
        "initial": "Q"
    },
    {
        "id": "610103",
        "title": "青羊区",
        "parentId": "6101",
        "pinyin": "qingyangqu",
        "initial": "Q"
    },
    {
        "id": "610108",
        "title": "青白江区",
        "parentId": "6101",
        "pinyin": "qingbaijiangqu",
        "initial": "Q"
    },
    {
        "id": "610407",
        "title": "青神县",
        "parentId": "6104",
        "pinyin": "qingshenxian",
        "initial": "Q"
    },
    {
        "id": "611307",
        "title": "渠县",
        "parentId": "6113",
        "pinyin": "quxian",
        "initial": "Q"
    },
    {
        "id": "611506",
        "title": "青川县",
        "parentId": "6115",
        "pinyin": "qingchuanxian",
        "initial": "Q"
    },
    {
        "id": "6202",
        "title": "曲靖市",
        "parentId": "62",
        "pinyin": "qujingshi",
        "initial": "Q"
    },
    {
        "id": "620404",
        "title": "巧家县",
        "parentId": "6204",
        "pinyin": "qiaojiaxian",
        "initial": "Q"
    },
    {
        "id": "620906",
        "title": "丘北县",
        "parentId": "6209",
        "pinyin": "qiubeixian",
        "initial": "Q"
    },
    {
        "id": "630111",
        "title": "清镇市",
        "parentId": "6301",
        "pinyin": "qingzhenshi",
        "initial": "Q"
    },
    {
        "id": "6305",
        "title": "黔西南",
        "parentId": "63",
        "pinyin": "qianxinan",
        "initial": "Q"
    },
    {
        "id": "630504",
        "title": "晴隆县",
        "parentId": "6305",
        "pinyin": "qinglongxian",
        "initial": "Q"
    },
    {
        "id": "6306",
        "title": "黔南",
        "parentId": "63",
        "pinyin": "qiannan",
        "initial": "Q"
    },
    {
        "id": "630803",
        "title": "黔西县",
        "parentId": "6308",
        "pinyin": "qianxixian",
        "initial": "Q"
    },
    {
        "id": "6309",
        "title": "黔东南",
        "parentId": "63",
        "pinyin": "qiandongnan",
        "initial": "Q"
    },
    {
        "id": "640106",
        "title": "曲水县",
        "parentId": "6401",
        "pinyin": "qushuixian",
        "initial": "Q"
    },
    {
        "id": "640305",
        "title": "琼结县",
        "parentId": "6403",
        "pinyin": "qiongjiexian",
        "initial": "Q"
    },
    {
        "id": "640306",
        "title": "曲松县",
        "parentId": "6403",
        "pinyin": "qusongxian",
        "initial": "Q"
    },
    {
        "id": "700603",
        "title": "清丰县",
        "parentId": "7006",
        "pinyin": "qingfengxian",
        "initial": "Q"
    },
    {
        "id": "700710",
        "title": "沁阳市",
        "parentId": "7007",
        "pinyin": "qinyangshi",
        "initial": "Q"
    },
    {
        "id": "701407",
        "title": "确山县",
        "parentId": "7014",
        "pinyin": "queshanxian",
        "initial": "Q"
    },
    {
        "id": "710107",
        "title": "青山区",
        "parentId": "7101",
        "pinyin": "qingshanqu",
        "initial": "Q"
    },
    {
        "id": "7114",
        "title": "潜江市",
        "parentId": "71",
        "pinyin": "qianjiangshi",
        "initial": "Q"
    },
    {
        "id": "720411",
        "title": "祁东县",
        "parentId": "7204",
        "pinyin": "qidongxian",
        "initial": "Q"
    },
    {
        "id": "721104",
        "title": "祁阳县",
        "parentId": "7211",
        "pinyin": "qiyangxian",
        "initial": "Q"
    },
    {
        "id": "800210",
        "title": "千阳县",
        "parentId": "8002",
        "pinyin": "qianyangxian",
        "initial": "Q"
    },
    {
        "id": "800302",
        "title": "秦都区",
        "parentId": "8003",
        "pinyin": "qinduqu",
        "initial": "Q"
    },
    {
        "id": "800307",
        "title": "乾县",
        "parentId": "8003",
        "pinyin": "qianxian",
        "initial": "Q"
    },
    {
        "id": "800612",
        "title": "清涧县",
        "parentId": "8006",
        "pinyin": "qingjianxian",
        "initial": "Q"
    },
    {
        "id": "81",
        "title": "青海省",
        "parentId": null,
        "pinyin": "qinghaisheng",
        "initial": "Q"
    },
    {
        "id": "810402",
        "title": "祁连县",
        "parentId": "8104",
        "pinyin": "qilianxian",
        "initial": "Q"
    },
    {
        "id": "810806",
        "title": "曲麻莱县",
        "parentId": "8108",
        "pinyin": "qumalaixian",
        "initial": "Q"
    },
    {
        "id": "820305",
        "title": "青铜峡市",
        "parentId": "8203",
        "pinyin": "qingtongxiashi",
        "initial": "Q"
    },
    {
        "id": "830306",
        "title": "青河县",
        "parentId": "8303",
        "pinyin": "qinghexian",
        "initial": "Q"
    },
    {
        "id": "830605",
        "title": "奇台县",
        "parentId": "8306",
        "pinyin": "qitaixian",
        "initial": "Q"
    },
    {
        "id": "830805",
        "title": "且末县",
        "parentId": "8308",
        "pinyin": "qiemoxian",
        "initial": "Q"
    },
    {
        "id": "840103",
        "title": "七里河区",
        "parentId": "8401",
        "pinyin": "qilihequ",
        "initial": "Q"
    },
    {
        "id": "840202",
        "title": "秦州区",
        "parentId": "8402",
        "pinyin": "qinzhouqu",
        "initial": "Q"
    },
    {
        "id": "840204",
        "title": "清水县",
        "parentId": "8402",
        "pinyin": "qingshuixian",
        "initial": "Q"
    },
    {
        "id": "840205",
        "title": "秦安县",
        "parentId": "8402",
        "pinyin": "qinanxian",
        "initial": "Q"
    },
    {
        "id": "8408",
        "title": "庆阳市",
        "parentId": "84",
        "pinyin": "qingyangshi",
        "initial": "Q"
    },
    {
        "id": "840803",
        "title": "庆城县",
        "parentId": "8408",
        "pinyin": "qingchengxian",
        "initial": "Q"
    },
    {
        "id": "120606",
        "title": "饶阳县",
        "parentId": "1206",
        "pinyin": "raoyangxian",
        "initial": "R"
    },
    {
        "id": "120713",
        "title": "容城县",
        "parentId": "1207",
        "pinyin": "rongchengxian",
        "initial": "R"
    },
    {
        "id": "120909",
        "title": "任县",
        "parentId": "1209",
        "pinyin": "renxian",
        "initial": "R"
    },
    {
        "id": "121015",
        "title": "任丘市",
        "parentId": "1210",
        "pinyin": "renqiushi",
        "initial": "R"
    },
    {
        "id": "220509",
        "title": "饶河县",
        "parentId": "2205",
        "pinyin": "raohexian",
        "initial": "R"
    },
    {
        "id": "220604",
        "title": "让胡路区",
        "parentId": "2206",
        "pinyin": "ranghuluqu",
        "initial": "R"
    },
    {
        "id": "310403",
        "title": "润州区",
        "parentId": "3104",
        "pinyin": "runzhouqu",
        "initial": "R"
    },
    {
        "id": "310605",
        "title": "如东县",
        "parentId": "3106",
        "pinyin": "rudongxian",
        "initial": "R"
    },
    {
        "id": "310607",
        "title": "如皋市",
        "parentId": "3106",
        "pinyin": "rugaoshi",
        "initial": "R"
    },
    {
        "id": "320703",
        "title": "任城区",
        "parentId": "3207",
        "pinyin": "renchengqu",
        "initial": "R"
    },
    {
        "id": "321004",
        "title": "荣成市",
        "parentId": "3210",
        "pinyin": "rongchengshi",
        "initial": "R"
    },
    {
        "id": "321005",
        "title": "乳山市",
        "parentId": "3210",
        "pinyin": "rushanshi",
        "initial": "R"
    },
    {
        "id": "3211",
        "title": "日照市",
        "parentId": "32",
        "pinyin": "rizhaoshi",
        "initial": "R"
    },
    {
        "id": "350311",
        "title": "瑞安市",
        "parentId": "3503",
        "pinyin": "ruianshi",
        "initial": "R"
    },
    {
        "id": "360413",
        "title": "瑞昌市",
        "parentId": "3604",
        "pinyin": "ruichangshi",
        "initial": "R"
    },
    {
        "id": "360718",
        "title": "瑞金市",
        "parentId": "3607",
        "pinyin": "ruijinshi",
        "initial": "R"
    },
    {
        "id": "400506",
        "title": "仁化县",
        "parentId": "4005",
        "pinyin": "renhuaxian",
        "initial": "R"
    },
    {
        "id": "400508",
        "title": "乳源县",
        "parentId": "4005",
        "pinyin": "ruyuanxian",
        "initial": "R"
    },
    {
        "id": "401904",
        "title": "饶平县",
        "parentId": "4019",
        "pinyin": "raopingxian",
        "initial": "R"
    },
    {
        "id": "410209",
        "title": "融安县",
        "parentId": "4102",
        "pinyin": "ronganxian",
        "initial": "R"
    },
    {
        "id": "410210",
        "title": "融水县",
        "parentId": "4102",
        "pinyin": "rongshuixian",
        "initial": "R"
    },
    {
        "id": "410903",
        "title": "容县",
        "parentId": "4109",
        "pinyin": "rongxian",
        "initial": "R"
    },
    {
        "id": "6024",
        "title": "荣昌县",
        "parentId": "60",
        "pinyin": "rongchangxian",
        "initial": "R"
    },
    {
        "id": "610403",
        "title": "仁寿县",
        "parentId": "6104",
        "pinyin": "renshouxian",
        "initial": "R"
    },
    {
        "id": "610706",
        "title": "荣县",
        "parentId": "6107",
        "pinyin": "rongxian",
        "initial": "R"
    },
    {
        "id": "611810",
        "title": "壤塘县",
        "parentId": "6118",
        "pinyin": "rangtangxian",
        "initial": "R"
    },
    {
        "id": "611812",
        "title": "若尔盖县",
        "parentId": "6118",
        "pinyin": "ruoergaixian",
        "initial": "R"
    },
    {
        "id": "611904",
        "title": "仁和区",
        "parentId": "6119",
        "pinyin": "renhequ",
        "initial": "R"
    },
    {
        "id": "621401",
        "title": "瑞丽市",
        "parentId": "6214",
        "pinyin": "ruilishi",
        "initial": "R"
    },
    {
        "id": "630215",
        "title": "仁怀市",
        "parentId": "6302",
        "pinyin": "renhuaishi",
        "initial": "R"
    },
    {
        "id": "6402",
        "title": "日喀则地区",
        "parentId": "64",
        "pinyin": "rikazediqu",
        "initial": "R"
    },
    {
        "id": "640201",
        "title": "日喀则市",
        "parentId": "6402",
        "pinyin": "rikazeshi",
        "initial": "R"
    },
    {
        "id": "640210",
        "title": "仁布县",
        "parentId": "6402",
        "pinyin": "renbuxian",
        "initial": "R"
    },
    {
        "id": "640704",
        "title": "日土县",
        "parentId": "6407",
        "pinyin": "rituxian",
        "initial": "R"
    },
    {
        "id": "700212",
        "title": "汝阳县",
        "parentId": "7002",
        "pinyin": "ruyangxian",
        "initial": "R"
    },
    {
        "id": "701311",
        "title": "汝州市",
        "parentId": "7013",
        "pinyin": "ruzhoushi",
        "initial": "R"
    },
    {
        "id": "701409",
        "title": "汝南县",
        "parentId": "7014",
        "pinyin": "runanxian",
        "initial": "R"
    },
    {
        "id": "720909",
        "title": "汝城县",
        "parentId": "7209",
        "pinyin": "ruchengxian",
        "initial": "R"
    },
    {
        "id": "830804",
        "title": "若羌县",
        "parentId": "8308",
        "pinyin": "ruoqiangxian",
        "initial": "R"
    },
    {
        "id": "1008",
        "title": "石景山区",
        "parentId": "10",
        "pinyin": "shijingshanqu",
        "initial": "S"
    },
    {
        "id": "1009",
        "title": "顺义区",
        "parentId": "10",
        "pinyin": "shunyiqu",
        "initial": "S"
    },
    {
        "id": "1201",
        "title": "石家庄市",
        "parentId": "12",
        "pinyin": "shijiazhuangshi",
        "initial": "S"
    },
    {
        "id": "120114",
        "title": "深泽县",
        "parentId": "1201",
        "pinyin": "shenzexian",
        "initial": "S"
    },
    {
        "id": "120203",
        "title": "山海关区",
        "parentId": "1202",
        "pinyin": "shanhaiguanqu",
        "initial": "S"
    },
    {
        "id": "120410",
        "title": "尚义县",
        "parentId": "1204",
        "pinyin": "shangyixian",
        "initial": "S"
    },
    {
        "id": "120511",
        "title": "三河市",
        "parentId": "1205",
        "pinyin": "sanheshi",
        "initial": "S"
    },
    {
        "id": "120612",
        "title": "深州市",
        "parentId": "1206",
        "pinyin": "shenzhoushi",
        "initial": "S"
    },
    {
        "id": "120720",
        "title": "顺平县",
        "parentId": "1207",
        "pinyin": "shunpingxian",
        "initial": "S"
    },
    {
        "id": "120802",
        "title": "双桥区",
        "parentId": "1208",
        "pinyin": "shuangqiaoqu",
        "initial": "S"
    },
    {
        "id": "120803",
        "title": "双滦区",
        "parentId": "1208",
        "pinyin": "shuangluanqu",
        "initial": "S"
    },
    {
        "id": "120920",
        "title": "沙河市",
        "parentId": "1209",
        "pinyin": "shaheshi",
        "initial": "S"
    },
    {
        "id": "121009",
        "title": "肃宁县",
        "parentId": "1210",
        "pinyin": "suningxian",
        "initial": "S"
    },
    {
        "id": "121110",
        "title": "涉县",
        "parentId": "1211",
        "pinyin": "shexian",
        "initial": "S"
    },
    {
        "id": "130105",
        "title": "赛罕区",
        "parentId": "1301",
        "pinyin": "saihanqu",
        "initial": "S"
    },
    {
        "id": "130205",
        "title": "石拐区",
        "parentId": "1302",
        "pinyin": "shiguaiqu",
        "initial": "S"
    },
    {
        "id": "130604",
        "title": "松山区",
        "parentId": "1306",
        "pinyin": "songshanqu",
        "initial": "S"
    },
    {
        "id": "130704",
        "title": "苏尼特左旗",
        "parentId": "1307",
        "pinyin": "sunitezuoqi",
        "initial": "S"
    },
    {
        "id": "130705",
        "title": "苏尼特右旗",
        "parentId": "1307",
        "pinyin": "suniteyouqi",
        "initial": "S"
    },
    {
        "id": "130805",
        "title": "商都县",
        "parentId": "1308",
        "pinyin": "shangduxian",
        "initial": "S"
    },
    {
        "id": "130811",
        "title": "四子王旗",
        "parentId": "1308",
        "pinyin": "siziwangqi",
        "initial": "S"
    },
    {
        "id": "14",
        "title": "山西省",
        "parentId": null,
        "pinyin": "shanxisheng",
        "initial": "S"
    },
    {
        "id": "1406",
        "title": "朔州市",
        "parentId": "14",
        "pinyin": "shuozhoushi",
        "initial": "S"
    },
    {
        "id": "140602",
        "title": "朔城区",
        "parentId": "1406",
        "pinyin": "shuochengqu",
        "initial": "S"
    },
    {
        "id": "140604",
        "title": "山阴县",
        "parentId": "1406",
        "pinyin": "shanyinxian",
        "initial": "S"
    },
    {
        "id": "140709",
        "title": "神池县",
        "parentId": "1407",
        "pinyin": "shenchixian",
        "initial": "S"
    },
    {
        "id": "140807",
        "title": "寿阳县",
        "parentId": "1408",
        "pinyin": "shouyangxian",
        "initial": "S"
    },
    {
        "id": "141008",
        "title": "石楼县",
        "parentId": "1410",
        "pinyin": "shilouxian",
        "initial": "S"
    },
    {
        "id": "2001",
        "title": "沈阳市",
        "parentId": "20",
        "pinyin": "shenyangshi",
        "initial": "S"
    },
    {
        "id": "200103",
        "title": "沈河区",
        "parentId": "2001",
        "pinyin": "shenhequ",
        "initial": "S"
    },
    {
        "id": "200107",
        "title": "苏家屯区",
        "parentId": "2001",
        "pinyin": "sujiatunqu",
        "initial": "S"
    },
    {
        "id": "200109",
        "title": "沈北新区",
        "parentId": "2001",
        "pinyin": "shenbeixinqu",
        "initial": "S"
    },
    {
        "id": "200204",
        "title": "沙河口区",
        "parentId": "2002",
        "pinyin": "shahekouqu",
        "initial": "S"
    },
    {
        "id": "200602",
        "title": "双台子区",
        "parentId": "2006",
        "pinyin": "shuangtaiziqu",
        "initial": "S"
    },
    {
        "id": "200805",
        "title": "顺城区",
        "parentId": "2008",
        "pinyin": "shunchengqu",
        "initial": "S"
    },
    {
        "id": "201302",
        "title": "双塔区",
        "parentId": "2013",
        "pinyin": "shuangtaqu",
        "initial": "S"
    },
    {
        "id": "201405",
        "title": "绥中县",
        "parentId": "2014",
        "pinyin": "suizhongxian",
        "initial": "S"
    },
    {
        "id": "210107",
        "title": "双阳区",
        "parentId": "2101",
        "pinyin": "shuangyangqu",
        "initial": "S"
    },
    {
        "id": "210209",
        "title": "舒兰市",
        "parentId": "2102",
        "pinyin": "shulanshi",
        "initial": "S"
    },
    {
        "id": "2103",
        "title": "四平市",
        "parentId": "21",
        "pinyin": "sipingshi",
        "initial": "S"
    },
    {
        "id": "210307",
        "title": "双辽市",
        "parentId": "2103",
        "pinyin": "shuangliaoshi",
        "initial": "S"
    },
    {
        "id": "2107",
        "title": "松原市",
        "parentId": "21",
        "pinyin": "songyuanshi",
        "initial": "S"
    },
    {
        "id": "220106",
        "title": "松北区",
        "parentId": "2201",
        "pinyin": "songbeiqu",
        "initial": "S"
    },
    {
        "id": "220117",
        "title": "双城市",
        "parentId": "2201",
        "pinyin": "shuangchengshi",
        "initial": "S"
    },
    {
        "id": "220118",
        "title": "尚志市",
        "parentId": "2201",
        "pinyin": "shangzhishi",
        "initial": "S"
    },
    {
        "id": "220409",
        "title": "绥滨县",
        "parentId": "2204",
        "pinyin": "suibinxian",
        "initial": "S"
    },
    {
        "id": "2205",
        "title": "双鸭山市",
        "parentId": "22",
        "pinyin": "shuangyashanshi",
        "initial": "S"
    },
    {
        "id": "220504",
        "title": "四方台区",
        "parentId": "2205",
        "pinyin": "sifangtaiqu",
        "initial": "S"
    },
    {
        "id": "220602",
        "title": "萨尔图区",
        "parentId": "2206",
        "pinyin": "saertuqu",
        "initial": "S"
    },
    {
        "id": "220716",
        "title": "上甘岭区",
        "parentId": "2207",
        "pinyin": "shangganlingqu",
        "initial": "S"
    },
    {
        "id": "221008",
        "title": "绥芬河市",
        "parentId": "2210",
        "pinyin": "suifenheshi",
        "initial": "S"
    },
    {
        "id": "221105",
        "title": "孙吴县",
        "parentId": "2211",
        "pinyin": "sunwuxian",
        "initial": "S"
    },
    {
        "id": "2212",
        "title": "绥化市",
        "parentId": "22",
        "pinyin": "suihuashi",
        "initial": "S"
    },
    {
        "id": "221208",
        "title": "绥棱县",
        "parentId": "2212",
        "pinyin": "suilengxian",
        "initial": "S"
    },
    {
        "id": "221302",
        "title": "松岭区",
        "parentId": "2213",
        "pinyin": "songlingqu",
        "initial": "S"
    },
    {
        "id": "30",
        "title": "上海市",
        "parentId": "0",
        "pinyin": "shanghaishi",
        "initial": "S"
    },
    {
        "id": "3009",
        "title": "松江区",
        "parentId": "30",
        "pinyin": "songjiangqu",
        "initial": "S"
    },
    {
        "id": "3102",
        "title": "苏州市",
        "parentId": "31",
        "pinyin": "suzhoushi",
        "initial": "S"
    },
    {
        "id": "311007",
        "title": "射阳县",
        "parentId": "3110",
        "pinyin": "sheyangxian",
        "initial": "S"
    },
    {
        "id": "3113",
        "title": "宿迁市",
        "parentId": "31",
        "pinyin": "suqianshi",
        "initial": "S"
    },
    {
        "id": "311302",
        "title": "宿城区",
        "parentId": "3113",
        "pinyin": "suchengqu",
        "initial": "S"
    },
    {
        "id": "311303",
        "title": "宿豫区",
        "parentId": "3113",
        "pinyin": "suyuqu",
        "initial": "S"
    },
    {
        "id": "32",
        "title": "山东省",
        "parentId": null,
        "pinyin": "shandongsheng",
        "initial": "S"
    },
    {
        "id": "320103",
        "title": "市中区",
        "parentId": "3201",
        "pinyin": "shizhongqu",
        "initial": "S"
    },
    {
        "id": "320110",
        "title": "商河县",
        "parentId": "3201",
        "pinyin": "shanghexian",
        "initial": "S"
    },
    {
        "id": "320202",
        "title": "市南区",
        "parentId": "3202",
        "pinyin": "shinanqu",
        "initial": "S"
    },
    {
        "id": "320203",
        "title": "市北区",
        "parentId": "3202",
        "pinyin": "shibeiqu",
        "initial": "S"
    },
    {
        "id": "320204",
        "title": "四方区",
        "parentId": "3202",
        "pinyin": "sifangqu",
        "initial": "S"
    },
    {
        "id": "320610",
        "title": "寿光市",
        "parentId": "3206",
        "pinyin": "shouguangshi",
        "initial": "S"
    },
    {
        "id": "320702",
        "title": "市中区",
        "parentId": "3207",
        "pinyin": "shizhongqu",
        "initial": "S"
    },
    {
        "id": "320802",
        "title": "市中区",
        "parentId": "3208",
        "pinyin": "shizhongqu",
        "initial": "S"
    },
    {
        "id": "320806",
        "title": "山亭区",
        "parentId": "3208",
        "pinyin": "shantingqu",
        "initial": "S"
    },
    {
        "id": "330104",
        "title": "蜀山区",
        "parentId": "3301",
        "pinyin": "shushanqu",
        "initial": "S"
    },
    {
        "id": "330205",
        "title": "三山区",
        "parentId": "3302",
        "pinyin": "sanshanqu",
        "initial": "S"
    },
    {
        "id": "330603",
        "title": "狮子山区",
        "parentId": "3306",
        "pinyin": "shizishanqu",
        "initial": "S"
    },
    {
        "id": "330709",
        "title": "宿松县",
        "parentId": "3307",
        "pinyin": "susongxian",
        "initial": "S"
    },
    {
        "id": "3310",
        "title": "宿州市",
        "parentId": "33",
        "pinyin": "suzhoushi1",
        "initial": "S"
    },
    {
        "id": "331104",
        "title": "石台县",
        "parentId": "3311",
        "pinyin": "shitaixian",
        "initial": "S"
    },
    {
        "id": "331504",
        "title": "寿县",
        "parentId": "3315",
        "pinyin": "shouxian",
        "initial": "S"
    },
    {
        "id": "331506",
        "title": "舒城县",
        "parentId": "3315",
        "pinyin": "shuchengxian",
        "initial": "S"
    },
    {
        "id": "340202",
        "title": "思明区",
        "parentId": "3402",
        "pinyin": "simingqu",
        "initial": "S"
    },
    {
        "id": "340411",
        "title": "石狮市",
        "parentId": "3404",
        "pinyin": "shishishi",
        "initial": "S"
    },
    {
        "id": "3406",
        "title": "三明市",
        "parentId": "34",
        "pinyin": "sanmingshi",
        "initial": "S"
    },
    {
        "id": "340603",
        "title": "三元区",
        "parentId": "3406",
        "pinyin": "sanyuanqu",
        "initial": "S"
    },
    {
        "id": "340609",
        "title": "沙县",
        "parentId": "3406",
        "pinyin": "shaxian",
        "initial": "S"
    },
    {
        "id": "340703",
        "title": "顺昌县",
        "parentId": "3407",
        "pinyin": "shunchangxian",
        "initial": "S"
    },
    {
        "id": "340706",
        "title": "松溪县",
        "parentId": "3407",
        "pinyin": "songxixian",
        "initial": "S"
    },
    {
        "id": "340708",
        "title": "邵武市",
        "parentId": "3407",
        "pinyin": "shaowushi",
        "initial": "S"
    },
    {
        "id": "340805",
        "title": "上杭县",
        "parentId": "3408",
        "pinyin": "shanghangxian",
        "initial": "S"
    },
    {
        "id": "340906",
        "title": "寿宁县",
        "parentId": "3409",
        "pinyin": "shouningxian",
        "initial": "S"
    },
    {
        "id": "350102",
        "title": "上城区",
        "parentId": "3501",
        "pinyin": "shangchengqu",
        "initial": "S"
    },
    {
        "id": "3506",
        "title": "绍兴市",
        "parentId": "35",
        "pinyin": "shaoxingshi",
        "initial": "S"
    },
    {
        "id": "350603",
        "title": "绍兴县",
        "parentId": "3506",
        "pinyin": "shaoxingxian",
        "initial": "S"
    },
    {
        "id": "350606",
        "title": "上虞市",
        "parentId": "3506",
        "pinyin": "shangyushi",
        "initial": "S"
    },
    {
        "id": "351006",
        "title": "三门县",
        "parentId": "3510",
        "pinyin": "sanmenxian",
        "initial": "S"
    },
    {
        "id": "351105",
        "title": "遂昌县",
        "parentId": "3511",
        "pinyin": "suichangxian",
        "initial": "S"
    },
    {
        "id": "351106",
        "title": "松阳县",
        "parentId": "3511",
        "pinyin": "songyangxian",
        "initial": "S"
    },
    {
        "id": "360305",
        "title": "上栗县",
        "parentId": "3603",
        "pinyin": "shanglixian",
        "initial": "S"
    },
    {
        "id": "360706",
        "title": "上犹县",
        "parentId": "3607",
        "pinyin": "shangyouxian",
        "initial": "S"
    },
    {
        "id": "360717",
        "title": "石城县",
        "parentId": "3607",
        "pinyin": "shichengxian",
        "initial": "S"
    },
    {
        "id": "360810",
        "title": "遂川县",
        "parentId": "3608",
        "pinyin": "suichuanxian",
        "initial": "S"
    },
    {
        "id": "360905",
        "title": "上高县",
        "parentId": "3609",
        "pinyin": "shanggaoxian",
        "initial": "S"
    },
    {
        "id": "3611",
        "title": "上饶市",
        "parentId": "36",
        "pinyin": "shangraoshi",
        "initial": "S"
    },
    {
        "id": "361103",
        "title": "上饶县",
        "parentId": "3611",
        "pinyin": "shangraoxian",
        "initial": "S"
    },
    {
        "id": "4002",
        "title": "深圳市",
        "parentId": "40",
        "pinyin": "shenzhenshi",
        "initial": "S"
    },
    {
        "id": "4004",
        "title": "汕头市",
        "parentId": "40",
        "pinyin": "shantoushi",
        "initial": "S"
    },
    {
        "id": "4005",
        "title": "韶关市",
        "parentId": "40",
        "pinyin": "shaoguanshi",
        "initial": "S"
    },
    {
        "id": "400505",
        "title": "始兴县",
        "parentId": "4005",
        "pinyin": "shixingxian",
        "initial": "S"
    },
    {
        "id": "4009",
        "title": "汕尾市",
        "parentId": "40",
        "pinyin": "shanweishi",
        "initial": "S"
    },
    {
        "id": "401304",
        "title": "顺德区",
        "parentId": "4013",
        "pinyin": "shundequ",
        "initial": "S"
    },
    {
        "id": "401305",
        "title": "三水区",
        "parentId": "4013",
        "pinyin": "sanshuiqu",
        "initial": "S"
    },
    {
        "id": "401506",
        "title": "遂溪县",
        "parentId": "4015",
        "pinyin": "suixixian",
        "initial": "S"
    },
    {
        "id": "401709",
        "title": "四会市",
        "parentId": "4017",
        "pinyin": "sihuishi",
        "initial": "S"
    },
    {
        "id": "410111",
        "title": "上林县",
        "parentId": "4101",
        "pinyin": "shanglinxian",
        "initial": "S"
    },
    {
        "id": "410211",
        "title": "三江县",
        "parentId": "4102",
        "pinyin": "sanjiangxian",
        "initial": "S"
    },
    {
        "id": "410604",
        "title": "上思县",
        "parentId": "4106",
        "pinyin": "shangsixian",
        "initial": "S"
    },
    {
        "id": "4202",
        "title": "三亚市",
        "parentId": "42",
        "pinyin": "sanyashi",
        "initial": "S"
    },
    {
        "id": "6006",
        "title": "沙坪坝区",
        "parentId": "60",
        "pinyin": "shapingbaqu",
        "initial": "S"
    },
    {
        "id": "6011",
        "title": "双桥区",
        "parentId": "60",
        "pinyin": "shuangqiaoqu",
        "initial": "S"
    },
    {
        "id": "6037",
        "title": "石柱县",
        "parentId": "60",
        "pinyin": "shizhuxian",
        "initial": "S"
    },
    {
        "id": "61",
        "title": "四川省",
        "parentId": null,
        "pinyin": "sichuansheng",
        "initial": "S"
    },
    {
        "id": "610112",
        "title": "双流县",
        "parentId": "6101",
        "pinyin": "shuangliuxian",
        "initial": "S"
    },
    {
        "id": "610206",
        "title": "什邡市",
        "parentId": "6102",
        "pinyin": "shizuoshi",
        "initial": "S"
    },
    {
        "id": "610304",
        "title": "三台县",
        "parentId": "6103",
        "pinyin": "santaixian",
        "initial": "S"
    },
    {
        "id": "610602",
        "title": "顺庆区",
        "parentId": "6106",
        "pinyin": "shunqingqu",
        "initial": "S"
    },
    {
        "id": "610802",
        "title": "市中区",
        "parentId": "6108",
        "pinyin": "shizhongqu",
        "initial": "S"
    },
    {
        "id": "611002",
        "title": "市中区",
        "parentId": "6110",
        "pinyin": "shizhongqu",
        "initial": "S"
    },
    {
        "id": "611003",
        "title": "沙湾区",
        "parentId": "6110",
        "pinyin": "shawanqu",
        "initial": "S"
    },
    {
        "id": "611106",
        "title": "石棉县",
        "parentId": "6111",
        "pinyin": "shimianxian",
        "initial": "S"
    },
    {
        "id": "6112",
        "title": "遂宁市",
        "parentId": "61",
        "pinyin": "suiningshi",
        "initial": "S"
    },
    {
        "id": "611205",
        "title": "射洪县",
        "parentId": "6112",
        "pinyin": "shehongxian",
        "initial": "S"
    },
    {
        "id": "611502",
        "title": "市中区",
        "parentId": "6115",
        "pinyin": "shizhongqu",
        "initial": "S"
    },
    {
        "id": "611804",
        "title": "松潘县",
        "parentId": "6118",
        "pinyin": "songpanxian",
        "initial": "S"
    },
    {
        "id": "612012",
        "title": "石渠县",
        "parentId": "6120",
        "pinyin": "shiquxian",
        "initial": "S"
    },
    {
        "id": "612013",
        "title": "色达县",
        "parentId": "6120",
        "pinyin": "sedaxian",
        "initial": "S"
    },
    {
        "id": "620111",
        "title": "石林县",
        "parentId": "6201",
        "pinyin": "shilinxian",
        "initial": "S"
    },
    {
        "id": "620205",
        "title": "师宗县",
        "parentId": "6202",
        "pinyin": "shizongxian",
        "initial": "S"
    },
    {
        "id": "620408",
        "title": "绥江县",
        "parentId": "6204",
        "pinyin": "suijiangxian",
        "initial": "S"
    },
    {
        "id": "620412",
        "title": "水富县",
        "parentId": "6204",
        "pinyin": "shuifuxian",
        "initial": "S"
    },
    {
        "id": "620502",
        "title": "双柏县",
        "parentId": "6205",
        "pinyin": "shuangbaixian",
        "initial": "S"
    },
    {
        "id": "620606",
        "title": "石屏县",
        "parentId": "6206",
        "pinyin": "shipingxian",
        "initial": "S"
    },
    {
        "id": "621102",
        "title": "思茅区",
        "parentId": "6211",
        "pinyin": "simaoqu",
        "initial": "S"
    },
    {
        "id": "621303",
        "title": "施甸县",
        "parentId": "6213",
        "pinyin": "shidianxian",
        "initial": "S"
    },
    {
        "id": "621607",
        "title": "双江县",
        "parentId": "6216",
        "pinyin": "shuangjiangxian",
        "initial": "S"
    },
    {
        "id": "630206",
        "title": "绥阳县",
        "parentId": "6302",
        "pinyin": "suiyangxian",
        "initial": "S"
    },
    {
        "id": "630303",
        "title": "水城县",
        "parentId": "6303",
        "pinyin": "shuichengxian",
        "initial": "S"
    },
    {
        "id": "630612",
        "title": "三都县",
        "parentId": "6306",
        "pinyin": "sanduxian",
        "initial": "S"
    },
    {
        "id": "630704",
        "title": "石阡县",
        "parentId": "6307",
        "pinyin": "shizuoxian",
        "initial": "S"
    },
    {
        "id": "630705",
        "title": "思南县",
        "parentId": "6307",
        "pinyin": "sinanxian",
        "initial": "S"
    },
    {
        "id": "630709",
        "title": "松桃县",
        "parentId": "6307",
        "pinyin": "songtaoxian",
        "initial": "S"
    },
    {
        "id": "630903",
        "title": "施秉县",
        "parentId": "6309",
        "pinyin": "shibingxian",
        "initial": "S"
    },
    {
        "id": "630904",
        "title": "三穗县",
        "parentId": "6309",
        "pinyin": "sansuixian",
        "initial": "S"
    },
    {
        "id": "640205",
        "title": "萨迦县",
        "parentId": "6402",
        "pinyin": "sazuoxian",
        "initial": "S"
    },
    {
        "id": "640217",
        "title": "萨嘎县",
        "parentId": "6402",
        "pinyin": "sagaxian",
        "initial": "S"
    },
    {
        "id": "6403",
        "title": "山南地区",
        "parentId": "64",
        "pinyin": "shannandiqu",
        "initial": "S"
    },
    {
        "id": "640304",
        "title": "桑日县",
        "parentId": "6403",
        "pinyin": "sangrixian",
        "initial": "S"
    },
    {
        "id": "640606",
        "title": "申扎县",
        "parentId": "6406",
        "pinyin": "shenzhaxian",
        "initial": "S"
    },
    {
        "id": "640607",
        "title": "索县",
        "parentId": "6406",
        "pinyin": "suoxian",
        "initial": "S"
    },
    {
        "id": "700106",
        "title": "上街区",
        "parentId": "7001",
        "pinyin": "shangjiequ",
        "initial": "S"
    },
    {
        "id": "700303",
        "title": "顺河回族区",
        "parentId": "7003",
        "pinyin": "shunhehuizuqu",
        "initial": "S"
    },
    {
        "id": "700705",
        "title": "山阳区",
        "parentId": "7007",
        "pinyin": "shanyangqu",
        "initial": "S"
    },
    {
        "id": "700803",
        "title": "山城区",
        "parentId": "7008",
        "pinyin": "shanchengqu",
        "initial": "S"
    },
    {
        "id": "7009",
        "title": "三门峡市",
        "parentId": "70",
        "pinyin": "sanmenxiashi",
        "initial": "S"
    },
    {
        "id": "700904",
        "title": "陕县",
        "parentId": "7009",
        "pinyin": "shanxian",
        "initial": "S"
    },
    {
        "id": "7010",
        "title": "商丘市",
        "parentId": "70",
        "pinyin": "shangqiushi",
        "initial": "S"
    },
    {
        "id": "701304",
        "title": "石龙区",
        "parentId": "7013",
        "pinyin": "shilongqu",
        "initial": "S"
    },
    {
        "id": "701404",
        "title": "上蔡县",
        "parentId": "7014",
        "pinyin": "shangcaixian",
        "initial": "S"
    },
    {
        "id": "701410",
        "title": "遂平县",
        "parentId": "7014",
        "pinyin": "suipingxian",
        "initial": "S"
    },
    {
        "id": "701505",
        "title": "商水县",
        "parentId": "7015",
        "pinyin": "shangshuixian",
        "initial": "S"
    },
    {
        "id": "701506",
        "title": "沈丘县",
        "parentId": "7015",
        "pinyin": "shenqiuxian",
        "initial": "S"
    },
    {
        "id": "701610",
        "title": "社旗县",
        "parentId": "7016",
        "pinyin": "sheqixian",
        "initial": "S"
    },
    {
        "id": "701707",
        "title": "商城县",
        "parentId": "7017",
        "pinyin": "shangchengxian",
        "initial": "S"
    },
    {
        "id": "7104",
        "title": "十堰市",
        "parentId": "71",
        "pinyin": "shiyanshi",
        "initial": "S"
    },
    {
        "id": "710507",
        "title": "石首市",
        "parentId": "7105",
        "pinyin": "shishoushi",
        "initial": "S"
    },
    {
        "id": "710509",
        "title": "松滋市",
        "parentId": "7105",
        "pinyin": "songzishi",
        "initial": "S"
    },
    {
        "id": "710705",
        "title": "沙洋县",
        "parentId": "7107",
        "pinyin": "shayangxian",
        "initial": "S"
    },
    {
        "id": "7112",
        "title": "随州市",
        "parentId": "71",
        "pinyin": "suizhoushi",
        "initial": "S"
    },
    {
        "id": "7117",
        "title": "神农架林区",
        "parentId": "71",
        "pinyin": "shennongjialinqu",
        "initial": "S"
    },
    {
        "id": "720204",
        "title": "石峰区",
        "parentId": "7202",
        "pinyin": "shifengqu",
        "initial": "S"
    },
    {
        "id": "720306",
        "title": "韶山市",
        "parentId": "7203",
        "pinyin": "shaoshanshi",
        "initial": "S"
    },
    {
        "id": "720404",
        "title": "石鼓区",
        "parentId": "7204",
        "pinyin": "shiguqu",
        "initial": "S"
    },
    {
        "id": "720609",
        "title": "石门县",
        "parentId": "7206",
        "pinyin": "shimenxian",
        "initial": "S"
    },
    {
        "id": "7208",
        "title": "邵阳市",
        "parentId": "72",
        "pinyin": "shaoyangshi",
        "initial": "S"
    },
    {
        "id": "720802",
        "title": "双清区",
        "parentId": "7208",
        "pinyin": "shuangqingqu",
        "initial": "S"
    },
    {
        "id": "720805",
        "title": "邵东县",
        "parentId": "7208",
        "pinyin": "shaodongxian",
        "initial": "S"
    },
    {
        "id": "720807",
        "title": "邵阳县",
        "parentId": "7208",
        "pinyin": "shaoyangxian",
        "initial": "S"
    },
    {
        "id": "720810",
        "title": "绥宁县",
        "parentId": "7208",
        "pinyin": "suiningxian",
        "initial": "S"
    },
    {
        "id": "720903",
        "title": "苏仙区",
        "parentId": "7209",
        "pinyin": "suxianqu",
        "initial": "S"
    },
    {
        "id": "721003",
        "title": "双峰县",
        "parentId": "7210",
        "pinyin": "shuangfengxian",
        "initial": "S"
    },
    {
        "id": "721106",
        "title": "双牌县",
        "parentId": "7211",
        "pinyin": "shuangpaixian",
        "initial": "S"
    },
    {
        "id": "721305",
        "title": "桑植县",
        "parentId": "7213",
        "pinyin": "sangzhixian",
        "initial": "S"
    },
    {
        "id": "80",
        "title": "陕西省",
        "parentId": null,
        "pinyin": "shanxisheng",
        "initial": "S"
    },
    {
        "id": "800305",
        "title": "三原县",
        "parentId": "8003",
        "pinyin": "sanyuanxian",
        "initial": "S"
    },
    {
        "id": "800603",
        "title": "神木县",
        "parentId": "8006",
        "pinyin": "shenmuxian",
        "initial": "S"
    },
    {
        "id": "800608",
        "title": "绥德县",
        "parentId": "8006",
        "pinyin": "suidexian",
        "initial": "S"
    },
    {
        "id": "800904",
        "title": "石泉县",
        "parentId": "8009",
        "pinyin": "shiquanxian",
        "initial": "S"
    },
    {
        "id": "8010",
        "title": "商洛市",
        "parentId": "80",
        "pinyin": "shangluoshi",
        "initial": "S"
    },
    {
        "id": "801002",
        "title": "商州区",
        "parentId": "8010",
        "pinyin": "shangzhouqu",
        "initial": "S"
    },
    {
        "id": "801005",
        "title": "商南县",
        "parentId": "8010",
        "pinyin": "shangnanxian",
        "initial": "S"
    },
    {
        "id": "801006",
        "title": "山阳县",
        "parentId": "8010",
        "pinyin": "shanyangxian",
        "initial": "S"
    },
    {
        "id": "8202",
        "title": "石嘴山市",
        "parentId": "82",
        "pinyin": "shizuishanshi",
        "initial": "S"
    },
    {
        "id": "820502",
        "title": "沙坡头区",
        "parentId": "8205",
        "pinyin": "shapotouqu",
        "initial": "S"
    },
    {
        "id": "830103",
        "title": "沙依巴克区",
        "parentId": "8301",
        "pinyin": "shayibakequ",
        "initial": "S"
    },
    {
        "id": "830105",
        "title": "水磨沟区",
        "parentId": "8301",
        "pinyin": "shuimogouqu",
        "initial": "S"
    },
    {
        "id": "830404",
        "title": "沙湾县",
        "parentId": "8304",
        "pinyin": "shawanxian",
        "initial": "S"
    },
    {
        "id": "831104",
        "title": "沙雅县",
        "parentId": "8311",
        "pinyin": "shayaxian",
        "initial": "S"
    },
    {
        "id": "831302",
        "title": "疏附县",
        "parentId": "8313",
        "pinyin": "shufuxian",
        "initial": "S"
    },
    {
        "id": "831303",
        "title": "疏勒县",
        "parentId": "8313",
        "pinyin": "shulexian",
        "initial": "S"
    },
    {
        "id": "831306",
        "title": "莎车县",
        "parentId": "8313",
        "pinyin": "shachexian",
        "initial": "S"
    },
    {
        "id": "8315",
        "title": "石河子市",
        "parentId": "83",
        "pinyin": "shihezishi",
        "initial": "S"
    },
    {
        "id": "840602",
        "title": "肃州区",
        "parentId": "8406",
        "pinyin": "suzhouqu",
        "initial": "S"
    },
    {
        "id": "840605",
        "title": "肃北县",
        "parentId": "8406",
        "pinyin": "subeixian",
        "initial": "S"
    },
    {
        "id": "840703",
        "title": "肃南县",
        "parentId": "8407",
        "pinyin": "sunanxian",
        "initial": "S"
    },
    {
        "id": "840707",
        "title": "山丹县",
        "parentId": "8407",
        "pinyin": "shandanxian",
        "initial": "S"
    },
    {
        "id": "1012",
        "title": "通州区",
        "parentId": "10",
        "pinyin": "tongzhouqu",
        "initial": "T"
    },
    {
        "id": "11",
        "title": "天津市",
        "parentId": "0",
        "pinyin": "tianjinshi",
        "initial": "T"
    },
    {
        "id": "1203",
        "title": "唐山市",
        "parentId": "12",
        "pinyin": "tangshanshi",
        "initial": "T"
    },
    {
        "id": "120313",
        "title": "唐海县",
        "parentId": "1203",
        "pinyin": "tanghaixian",
        "initial": "T"
    },
    {
        "id": "120602",
        "title": "桃城区",
        "parentId": "1206",
        "pinyin": "taochengqu",
        "initial": "T"
    },
    {
        "id": "120711",
        "title": "唐县",
        "parentId": "1207",
        "pinyin": "tangxian",
        "initial": "T"
    },
    {
        "id": "130106",
        "title": "土默特左旗",
        "parentId": "1301",
        "pinyin": "tumotezuoqi",
        "initial": "T"
    },
    {
        "id": "130107",
        "title": "托克托县",
        "parentId": "1301",
        "pinyin": "tuoketuoxian",
        "initial": "T"
    },
    {
        "id": "130208",
        "title": "土默特右旗",
        "parentId": "1302",
        "pinyin": "tumoteyouqi",
        "initial": "T"
    },
    {
        "id": "130406",
        "title": "突泉县",
        "parentId": "1304",
        "pinyin": "tuquanxian",
        "initial": "T"
    },
    {
        "id": "1305",
        "title": "通辽市",
        "parentId": "13",
        "pinyin": "tongliaoshi",
        "initial": "T"
    },
    {
        "id": "130708",
        "title": "太仆寺旗",
        "parentId": "1307",
        "pinyin": "taipusiqi",
        "initial": "T"
    },
    {
        "id": "1401",
        "title": "太原市",
        "parentId": "14",
        "pinyin": "taiyuanshi",
        "initial": "T"
    },
    {
        "id": "140207",
        "title": "天镇县",
        "parentId": "1402",
        "pinyin": "tianzhenxian",
        "initial": "T"
    },
    {
        "id": "140406",
        "title": "屯留县",
        "parentId": "1404",
        "pinyin": "tunliuxian",
        "initial": "T"
    },
    {
        "id": "140808",
        "title": "太谷县",
        "parentId": "1408",
        "pinyin": "taiguxian",
        "initial": "T"
    },
    {
        "id": "200106",
        "title": "铁西区",
        "parentId": "2001",
        "pinyin": "tiexiqu",
        "initial": "T"
    },
    {
        "id": "200302",
        "title": "铁东区",
        "parentId": "2003",
        "pinyin": "tiedongqu",
        "initial": "T"
    },
    {
        "id": "200303",
        "title": "铁西区",
        "parentId": "2003",
        "pinyin": "tiexiqu",
        "initial": "T"
    },
    {
        "id": "200306",
        "title": "台安县",
        "parentId": "2003",
        "pinyin": "taianxian",
        "initial": "T"
    },
    {
        "id": "200404",
        "title": "太和区",
        "parentId": "2004",
        "pinyin": "taihequ",
        "initial": "T"
    },
    {
        "id": "2007",
        "title": "铁岭市",
        "parentId": "20",
        "pinyin": "tielingshi",
        "initial": "T"
    },
    {
        "id": "200704",
        "title": "铁岭县",
        "parentId": "2007",
        "pinyin": "tielingxian",
        "initial": "T"
    },
    {
        "id": "201006",
        "title": "太子河区",
        "parentId": "2010",
        "pinyin": "taizihequ",
        "initial": "T"
    },
    {
        "id": "201104",
        "title": "太平区",
        "parentId": "2011",
        "pinyin": "taipingqu",
        "initial": "T"
    },
    {
        "id": "210302",
        "title": "铁西区",
        "parentId": "2103",
        "pinyin": "tiexiqu",
        "initial": "T"
    },
    {
        "id": "210303",
        "title": "铁东区",
        "parentId": "2103",
        "pinyin": "tiedongqu",
        "initial": "T"
    },
    {
        "id": "2105",
        "title": "通化市",
        "parentId": "21",
        "pinyin": "tonghuashi",
        "initial": "T"
    },
    {
        "id": "210504",
        "title": "通化县",
        "parentId": "2105",
        "pinyin": "tonghuaxian",
        "initial": "T"
    },
    {
        "id": "210804",
        "title": "通榆县",
        "parentId": "2108",
        "pinyin": "tongyuxian",
        "initial": "T"
    },
    {
        "id": "210902",
        "title": "图们市",
        "parentId": "2109",
        "pinyin": "tumenshi",
        "initial": "T"
    },
    {
        "id": "220115",
        "title": "通河县",
        "parentId": "2201",
        "pinyin": "tonghexian",
        "initial": "T"
    },
    {
        "id": "220204",
        "title": "铁锋区",
        "parentId": "2202",
        "pinyin": "tiefengqu",
        "initial": "T"
    },
    {
        "id": "220211",
        "title": "泰来县",
        "parentId": "2202",
        "pinyin": "tailaixian",
        "initial": "T"
    },
    {
        "id": "220712",
        "title": "汤旺河区",
        "parentId": "2207",
        "pinyin": "tangwanghequ",
        "initial": "T"
    },
    {
        "id": "220718",
        "title": "铁力市",
        "parentId": "2207",
        "pinyin": "tielishi",
        "initial": "T"
    },
    {
        "id": "220808",
        "title": "汤原县",
        "parentId": "2208",
        "pinyin": "tangyuanxian",
        "initial": "T"
    },
    {
        "id": "220810",
        "title": "同江市",
        "parentId": "2208",
        "pinyin": "tongjiangshi",
        "initial": "T"
    },
    {
        "id": "220903",
        "title": "桃山区",
        "parentId": "2209",
        "pinyin": "taoshanqu",
        "initial": "T"
    },
    {
        "id": "221306",
        "title": "塔河县",
        "parentId": "2213",
        "pinyin": "tahexian",
        "initial": "T"
    },
    {
        "id": "310212",
        "title": "太仓市",
        "parentId": "3102",
        "pinyin": "taicangshi",
        "initial": "T"
    },
    {
        "id": "310608",
        "title": "通州市",
        "parentId": "3106",
        "pinyin": "tongzhoushi",
        "initial": "T"
    },
    {
        "id": "310702",
        "title": "天宁区",
        "parentId": "3107",
        "pinyin": "tianningqu",
        "initial": "T"
    },
    {
        "id": "310809",
        "title": "铜山县",
        "parentId": "3108",
        "pinyin": "tongshanxian",
        "initial": "T"
    },
    {
        "id": "311002",
        "title": "亭湖区",
        "parentId": "3110",
        "pinyin": "tinghuqu",
        "initial": "T"
    },
    {
        "id": "3112",
        "title": "泰州市",
        "parentId": "31",
        "pinyin": "taizhoushi",
        "initial": "T"
    },
    {
        "id": "311206",
        "title": "泰兴市",
        "parentId": "3112",
        "pinyin": "taixingshi",
        "initial": "T"
    },
    {
        "id": "320105",
        "title": "天桥区",
        "parentId": "3201",
        "pinyin": "tianqiaoqu",
        "initial": "T"
    },
    {
        "id": "3205",
        "title": "泰安市",
        "parentId": "32",
        "pinyin": "taianshi",
        "initial": "T"
    },
    {
        "id": "320502",
        "title": "泰山区",
        "parentId": "3205",
        "pinyin": "taishanqu",
        "initial": "T"
    },
    {
        "id": "320805",
        "title": "台儿庄区",
        "parentId": "3208",
        "pinyin": "taierzhuangqu",
        "initial": "T"
    },
    {
        "id": "3306",
        "title": "铜陵市",
        "parentId": "33",
        "pinyin": "tonglingshi",
        "initial": "T"
    },
    {
        "id": "330602",
        "title": "铜官山区",
        "parentId": "3306",
        "pinyin": "tongguanshanqu",
        "initial": "T"
    },
    {
        "id": "330605",
        "title": "铜陵县",
        "parentId": "3306",
        "pinyin": "tonglingxian",
        "initial": "T"
    },
    {
        "id": "330708",
        "title": "太湖县",
        "parentId": "3307",
        "pinyin": "taihuxian",
        "initial": "T"
    },
    {
        "id": "330712",
        "title": "桐城市",
        "parentId": "3307",
        "pinyin": "tongchengshi",
        "initial": "T"
    },
    {
        "id": "330802",
        "title": "屯溪区",
        "parentId": "3308",
        "pinyin": "tunxiqu",
        "initial": "T"
    },
    {
        "id": "330908",
        "title": "天长市",
        "parentId": "3309",
        "pinyin": "tianchangshi",
        "initial": "T"
    },
    {
        "id": "331203",
        "title": "田家庵区",
        "parentId": "3312",
        "pinyin": "tianjiazuoqu",
        "initial": "T"
    },
    {
        "id": "331406",
        "title": "太和县",
        "parentId": "3314",
        "pinyin": "taihexian",
        "initial": "T"
    },
    {
        "id": "340103",
        "title": "台江区",
        "parentId": "3401",
        "pinyin": "taijiangqu",
        "initial": "T"
    },
    {
        "id": "340206",
        "title": "同安区",
        "parentId": "3402",
        "pinyin": "tonganqu",
        "initial": "T"
    },
    {
        "id": "340611",
        "title": "泰宁县",
        "parentId": "3406",
        "pinyin": "tainingxian",
        "initial": "T"
    },
    {
        "id": "350110",
        "title": "桐庐县",
        "parentId": "3501",
        "pinyin": "tongluxian",
        "initial": "T"
    },
    {
        "id": "350310",
        "title": "泰顺县",
        "parentId": "3503",
        "pinyin": "taishunxian",
        "initial": "T"
    },
    {
        "id": "350408",
        "title": "桐乡市",
        "parentId": "3504",
        "pinyin": "tongxiangshi",
        "initial": "T"
    },
    {
        "id": "3510",
        "title": "台州市",
        "parentId": "35",
        "pinyin": "taizhoushi1",
        "initial": "T"
    },
    {
        "id": "351007",
        "title": "天台县",
        "parentId": "3510",
        "pinyin": "tiantaixian",
        "initial": "T"
    },
    {
        "id": "360809",
        "title": "泰和县",
        "parentId": "3608",
        "pinyin": "taihexian",
        "initial": "T"
    },
    {
        "id": "360908",
        "title": "铜鼓县",
        "parentId": "3609",
        "pinyin": "tongguxian",
        "initial": "T"
    },
    {
        "id": "400105",
        "title": "天河区",
        "parentId": "4001",
        "pinyin": "tianhequ",
        "initial": "T"
    },
    {
        "id": "401205",
        "title": "台山市",
        "parentId": "4012",
        "pinyin": "taishanshi",
        "initial": "T"
    },
    {
        "id": "410406",
        "title": "藤县",
        "parentId": "4104",
        "pinyin": "tengxian",
        "initial": "T"
    },
    {
        "id": "410504",
        "title": "铁山港区",
        "parentId": "4105",
        "pinyin": "tieshangangqu",
        "initial": "T"
    },
    {
        "id": "411003",
        "title": "田阳县",
        "parentId": "4110",
        "pinyin": "tianyangxian",
        "initial": "T"
    },
    {
        "id": "411004",
        "title": "田东县",
        "parentId": "4110",
        "pinyin": "tiandongxian",
        "initial": "T"
    },
    {
        "id": "411011",
        "title": "田林县",
        "parentId": "4110",
        "pinyin": "tianlinxian",
        "initial": "T"
    },
    {
        "id": "411204",
        "title": "天峨县",
        "parentId": "4112",
        "pinyin": "tianexian",
        "initial": "T"
    },
    {
        "id": "411407",
        "title": "天等县",
        "parentId": "4114",
        "pinyin": "tiandengxian",
        "initial": "T"
    },
    {
        "id": "4210",
        "title": "屯昌县",
        "parentId": "42",
        "pinyin": "tunchangxian",
        "initial": "T"
    },
    {
        "id": "6022",
        "title": "铜梁县",
        "parentId": "60",
        "pinyin": "tongliangxian",
        "initial": "T"
    },
    {
        "id": "611107",
        "title": "天全县",
        "parentId": "6111",
        "pinyin": "tianquanxian",
        "initial": "T"
    },
    {
        "id": "611302",
        "title": "通川区",
        "parentId": "6113",
        "pinyin": "tongchuanqu",
        "initial": "T"
    },
    {
        "id": "611403",
        "title": "通江县",
        "parentId": "6114",
        "pinyin": "tongjiangxian",
        "initial": "T"
    },
    {
        "id": "620305",
        "title": "通海县",
        "parentId": "6203",
        "pinyin": "tonghaixian",
        "initial": "T"
    },
    {
        "id": "621304",
        "title": "腾冲县",
        "parentId": "6213",
        "pinyin": "tengchongxian",
        "initial": "T"
    },
    {
        "id": "630205",
        "title": "桐梓县",
        "parentId": "6302",
        "pinyin": "tongzuoxian",
        "initial": "T"
    },
    {
        "id": "6307",
        "title": "铜仁地区",
        "parentId": "63",
        "pinyin": "tongrendiqu",
        "initial": "T"
    },
    {
        "id": "630701",
        "title": "铜仁市",
        "parentId": "6307",
        "pinyin": "tongrenshi",
        "initial": "T"
    },
    {
        "id": "630907",
        "title": "天柱县",
        "parentId": "6309",
        "pinyin": "tianzhuxian",
        "initial": "T"
    },
    {
        "id": "630910",
        "title": "台江县",
        "parentId": "6309",
        "pinyin": "taijiangxian",
        "initial": "T"
    },
    {
        "id": "700308",
        "title": "通许县",
        "parentId": "7003",
        "pinyin": "tongxuxian",
        "initial": "T"
    },
    {
        "id": "700407",
        "title": "汤阴县",
        "parentId": "7004",
        "pinyin": "tangyinxian",
        "initial": "T"
    },
    {
        "id": "700606",
        "title": "台前县",
        "parentId": "7006",
        "pinyin": "taiqianxian",
        "initial": "T"
    },
    {
        "id": "701509",
        "title": "太康县",
        "parentId": "7015",
        "pinyin": "taikangxian",
        "initial": "T"
    },
    {
        "id": "701611",
        "title": "唐河县",
        "parentId": "7016",
        "pinyin": "tanghexian",
        "initial": "T"
    },
    {
        "id": "701613",
        "title": "桐柏县",
        "parentId": "7016",
        "pinyin": "tongbaixian",
        "initial": "T"
    },
    {
        "id": "710205",
        "title": "铁山区",
        "parentId": "7102",
        "pinyin": "tieshanqu",
        "initial": "T"
    },
    {
        "id": "710605",
        "title": "猇亭区",
        "parentId": "7106",
        "pinyin": "tingqu",
        "initial": "T"
    },
    {
        "id": "711003",
        "title": "团风县",
        "parentId": "7110",
        "pinyin": "tuanfengxian",
        "initial": "T"
    },
    {
        "id": "711104",
        "title": "通城县",
        "parentId": "7111",
        "pinyin": "tongchengxian",
        "initial": "T"
    },
    {
        "id": "711106",
        "title": "通山县",
        "parentId": "7111",
        "pinyin": "tongshanxian",
        "initial": "T"
    },
    {
        "id": "7116",
        "title": "天门市",
        "parentId": "71",
        "pinyin": "tianmenshi",
        "initial": "T"
    },
    {
        "id": "720103",
        "title": "天心区",
        "parentId": "7201",
        "pinyin": "tianxinqu",
        "initial": "T"
    },
    {
        "id": "720205",
        "title": "天元区",
        "parentId": "7202",
        "pinyin": "tianyuanqu",
        "initial": "T"
    },
    {
        "id": "720505",
        "title": "桃江县",
        "parentId": "7205",
        "pinyin": "taojiangxian",
        "initial": "T"
    },
    {
        "id": "720608",
        "title": "桃源县",
        "parentId": "7206",
        "pinyin": "taoyuanxian",
        "initial": "T"
    },
    {
        "id": "721212",
        "title": "通道县",
        "parentId": "7212",
        "pinyin": "tongdaoxian",
        "initial": "T"
    },
    {
        "id": "800213",
        "title": "太白县",
        "parentId": "8002",
        "pinyin": "taibaixian",
        "initial": "T"
    },
    {
        "id": "8007",
        "title": "铜川市",
        "parentId": "80",
        "pinyin": "tongchuanshi",
        "initial": "T"
    },
    {
        "id": "810302",
        "title": "同德县",
        "parentId": "8103",
        "pinyin": "tongdexian",
        "initial": "T"
    },
    {
        "id": "810505",
        "title": "天峻县",
        "parentId": "8105",
        "pinyin": "tianjunxian",
        "initial": "T"
    },
    {
        "id": "810601",
        "title": "同仁县",
        "parentId": "8106",
        "pinyin": "tongrenxian",
        "initial": "T"
    },
    {
        "id": "820304",
        "title": "同心县",
        "parentId": "8203",
        "pinyin": "tongxinxian",
        "initial": "T"
    },
    {
        "id": "830102",
        "title": "天山区",
        "parentId": "8301",
        "pinyin": "tianshanqu",
        "initial": "T"
    },
    {
        "id": "830106",
        "title": "头屯河区(开发区)",
        "parentId": "8301",
        "pinyin": "toutunhequ(kaifaqu)",
        "initial": "T"
    },
    {
        "id": "830209",
        "title": "特克斯县",
        "parentId": "8302",
        "pinyin": "tekesixian",
        "initial": "T"
    },
    {
        "id": "8304",
        "title": "塔城地区",
        "parentId": "83",
        "pinyin": "tachengdiqu",
        "initial": "T"
    },
    {
        "id": "830401",
        "title": "塔城市",
        "parentId": "8304",
        "pinyin": "tachengshi",
        "initial": "T"
    },
    {
        "id": "830405",
        "title": "托里县",
        "parentId": "8304",
        "pinyin": "tuolixian",
        "initial": "T"
    },
    {
        "id": "8307",
        "title": "吐鲁番地区",
        "parentId": "83",
        "pinyin": "tulufandiqu",
        "initial": "T"
    },
    {
        "id": "830701",
        "title": "吐鲁番市",
        "parentId": "8307",
        "pinyin": "tulufanshi",
        "initial": "T"
    },
    {
        "id": "830703",
        "title": "托克逊县",
        "parentId": "8307",
        "pinyin": "tuokexunxian",
        "initial": "T"
    },
    {
        "id": "831312",
        "title": "塔什库尔干",
        "parentId": "8313",
        "pinyin": "tashikuergan",
        "initial": "T"
    },
    {
        "id": "8318",
        "title": "图木舒克市",
        "parentId": "83",
        "pinyin": "tumushukeshi",
        "initial": "T"
    },
    {
        "id": "8402",
        "title": "天水市",
        "parentId": "84",
        "pinyin": "tianshuishi",
        "initial": "T"
    },
    {
        "id": "840405",
        "title": "天祝县",
        "parentId": "8404",
        "pinyin": "tianzhuxian",
        "initial": "T"
    },
    {
        "id": "841103",
        "title": "通渭县",
        "parentId": "8411",
        "pinyin": "tongweixian",
        "initial": "T"
    },
    {
        "id": "92",
        "title": "台湾",
        "parentId": null,
        "pinyin": "taiwan",
        "initial": "T"
    },
    {
        "id": "1114",
        "title": "武清区",
        "parentId": "11",
        "pinyin": "wuqingqu",
        "initial": "W"
    },
    {
        "id": "120116",
        "title": "无极县",
        "parentId": "1201",
        "pinyin": "wujixian",
        "initial": "W"
    },
    {
        "id": "120411",
        "title": "蔚县",
        "parentId": "1204",
        "pinyin": "weixian",
        "initial": "W"
    },
    {
        "id": "120414",
        "title": "万全县",
        "parentId": "1204",
        "pinyin": "wanquanxian",
        "initial": "W"
    },
    {
        "id": "120508",
        "title": "文安县",
        "parentId": "1205",
        "pinyin": "wenanxian",
        "initial": "W"
    },
    {
        "id": "120604",
        "title": "武邑县",
        "parentId": "1206",
        "pinyin": "wuyixian",
        "initial": "W"
    },
    {
        "id": "120605",
        "title": "武强县",
        "parentId": "1206",
        "pinyin": "wuqiangxian",
        "initial": "W"
    },
    {
        "id": "120715",
        "title": "望都县",
        "parentId": "1207",
        "pinyin": "wangduxian",
        "initial": "W"
    },
    {
        "id": "120812",
        "title": "围场县",
        "parentId": "1208",
        "pinyin": "weichangxian",
        "initial": "W"
    },
    {
        "id": "120916",
        "title": "威县",
        "parentId": "1209",
        "pinyin": "weixian",
        "initial": "W"
    },
    {
        "id": "121011",
        "title": "吴桥县",
        "parentId": "1210",
        "pinyin": "wuqiaoxian",
        "initial": "W"
    },
    {
        "id": "121118",
        "title": "魏县",
        "parentId": "1211",
        "pinyin": "weixian",
        "initial": "W"
    },
    {
        "id": "121120",
        "title": "武安市",
        "parentId": "1211",
        "pinyin": "wuanshi",
        "initial": "W"
    },
    {
        "id": "130110",
        "title": "武川县",
        "parentId": "1301",
        "pinyin": "wuchuanxian",
        "initial": "W"
    },
    {
        "id": "130401",
        "title": "乌兰浩特市",
        "parentId": "1304",
        "pinyin": "wulanhaoteshi",
        "initial": "W"
    },
    {
        "id": "130610",
        "title": "翁牛特旗",
        "parentId": "1306",
        "pinyin": "wengniuteqi",
        "initial": "W"
    },
    {
        "id": "1308",
        "title": "乌兰察布市",
        "parentId": "13",
        "pinyin": "wulanchabushi",
        "initial": "W"
    },
    {
        "id": "130908",
        "title": "乌审旗",
        "parentId": "1309",
        "pinyin": "wushenqi",
        "initial": "W"
    },
    {
        "id": "131003",
        "title": "五原县",
        "parentId": "1310",
        "pinyin": "wuyuanxian",
        "initial": "W"
    },
    {
        "id": "131005",
        "title": "乌拉特前旗",
        "parentId": "1310",
        "pinyin": "wulateqianqi",
        "initial": "W"
    },
    {
        "id": "131006",
        "title": "乌拉特中旗",
        "parentId": "1310",
        "pinyin": "wulatezhongqi",
        "initial": "W"
    },
    {
        "id": "131007",
        "title": "乌拉特后旗",
        "parentId": "1310",
        "pinyin": "wulatehouqi",
        "initial": "W"
    },
    {
        "id": "1311",
        "title": "乌海市",
        "parentId": "13",
        "pinyin": "wuhaishi",
        "initial": "W"
    },
    {
        "id": "131104",
        "title": "乌达区",
        "parentId": "1311",
        "pinyin": "wudaqu",
        "initial": "W"
    },
    {
        "id": "140106",
        "title": "万柏林区",
        "parentId": "1401",
        "pinyin": "wanbailinqu",
        "initial": "W"
    },
    {
        "id": "140411",
        "title": "武乡县",
        "parentId": "1404",
        "pinyin": "wuxiangxian",
        "initial": "W"
    },
    {
        "id": "140704",
        "title": "五台县",
        "parentId": "1407",
        "pinyin": "wutaixian",
        "initial": "W"
    },
    {
        "id": "140710",
        "title": "五寨县",
        "parentId": "1407",
        "pinyin": "wuzhaixian",
        "initial": "W"
    },
    {
        "id": "141003",
        "title": "文水县",
        "parentId": "1410",
        "pinyin": "wenshuixian",
        "initial": "W"
    },
    {
        "id": "141104",
        "title": "万荣县",
        "parentId": "1411",
        "pinyin": "wanrongxian",
        "initial": "W"
    },
    {
        "id": "141105",
        "title": "闻喜县",
        "parentId": "1411",
        "pinyin": "wenxixian",
        "initial": "W"
    },
    {
        "id": "200209",
        "title": "瓦房店市",
        "parentId": "2002",
        "pinyin": "wafangdianshi",
        "initial": "W"
    },
    {
        "id": "200804",
        "title": "望花区",
        "parentId": "2008",
        "pinyin": "wanghuaqu",
        "initial": "W"
    },
    {
        "id": "201003",
        "title": "文圣区",
        "parentId": "2010",
        "pinyin": "wenshengqu",
        "initial": "W"
    },
    {
        "id": "210907",
        "title": "汪清县",
        "parentId": "2109",
        "pinyin": "wangqingxian",
        "initial": "W"
    },
    {
        "id": "220119",
        "title": "五常市",
        "parentId": "2201",
        "pinyin": "wuchangshi",
        "initial": "W"
    },
    {
        "id": "220710",
        "title": "五营区",
        "parentId": "2207",
        "pinyin": "wuyingqu",
        "initial": "W"
    },
    {
        "id": "220711",
        "title": "乌马河区",
        "parentId": "2207",
        "pinyin": "wumahequ",
        "initial": "W"
    },
    {
        "id": "220714",
        "title": "乌伊岭区",
        "parentId": "2207",
        "pinyin": "wuyilingqu",
        "initial": "W"
    },
    {
        "id": "221107",
        "title": "五大连池市",
        "parentId": "2211",
        "pinyin": "wudalianchishi",
        "initial": "W"
    },
    {
        "id": "221203",
        "title": "望奎县",
        "parentId": "2212",
        "pinyin": "wangkuixian",
        "initial": "W"
    },
    {
        "id": "310206",
        "title": "吴中区",
        "parentId": "3102",
        "pinyin": "wuzhongqu",
        "initial": "W"
    },
    {
        "id": "310211",
        "title": "吴江市",
        "parentId": "3102",
        "pinyin": "wujiangshi",
        "initial": "W"
    },
    {
        "id": "3103",
        "title": "无锡市",
        "parentId": "31",
        "pinyin": "wuxishi",
        "initial": "W"
    },
    {
        "id": "310706",
        "title": "武进区",
        "parentId": "3107",
        "pinyin": "wujinqu",
        "initial": "W"
    },
    {
        "id": "3206",
        "title": "潍坊市",
        "parentId": "32",
        "pinyin": "weifangshi",
        "initial": "W"
    },
    {
        "id": "320602",
        "title": "潍城区",
        "parentId": "3206",
        "pinyin": "weichengqu",
        "initial": "W"
    },
    {
        "id": "320704",
        "title": "微山县",
        "parentId": "3207",
        "pinyin": "weishanxian",
        "initial": "W"
    },
    {
        "id": "320910",
        "title": "武城县",
        "parentId": "3209",
        "pinyin": "wuchengxian",
        "initial": "W"
    },
    {
        "id": "3210",
        "title": "威海市",
        "parentId": "32",
        "pinyin": "weihaishi",
        "initial": "W"
    },
    {
        "id": "321003",
        "title": "文登市",
        "parentId": "3210",
        "pinyin": "wendengshi",
        "initial": "W"
    },
    {
        "id": "321104",
        "title": "五莲县",
        "parentId": "3211",
        "pinyin": "wulianxian",
        "initial": "W"
    },
    {
        "id": "321305",
        "title": "无棣县",
        "parentId": "3213",
        "pinyin": "wuzuoxian",
        "initial": "W"
    },
    {
        "id": "3302",
        "title": "芜湖市",
        "parentId": "33",
        "pinyin": "wuhushi",
        "initial": "W"
    },
    {
        "id": "330206",
        "title": "芜湖县",
        "parentId": "3302",
        "pinyin": "wuhuxian",
        "initial": "W"
    },
    {
        "id": "330307",
        "title": "五河县",
        "parentId": "3303",
        "pinyin": "wuhexian",
        "initial": "W"
    },
    {
        "id": "330710",
        "title": "望江县",
        "parentId": "3307",
        "pinyin": "wangjiangxian",
        "initial": "W"
    },
    {
        "id": "331304",
        "title": "无为县",
        "parentId": "3313",
        "pinyin": "wuweixian",
        "initial": "W"
    },
    {
        "id": "331703",
        "title": "涡阳县",
        "parentId": "3317",
        "pinyin": "woyangxian",
        "initial": "W"
    },
    {
        "id": "340709",
        "title": "武夷山市",
        "parentId": "3407",
        "pinyin": "wuyishanshi",
        "initial": "W"
    },
    {
        "id": "340806",
        "title": "武平县",
        "parentId": "3408",
        "pinyin": "wupingxian",
        "initial": "W"
    },
    {
        "id": "3503",
        "title": "温州市",
        "parentId": "35",
        "pinyin": "wenzhoushi",
        "initial": "W"
    },
    {
        "id": "350309",
        "title": "文成县",
        "parentId": "3503",
        "pinyin": "wenchengxian",
        "initial": "W"
    },
    {
        "id": "350502",
        "title": "吴兴区",
        "parentId": "3505",
        "pinyin": "wuxingqu",
        "initial": "W"
    },
    {
        "id": "350704",
        "title": "武义县",
        "parentId": "3507",
        "pinyin": "wuyixian",
        "initial": "W"
    },
    {
        "id": "351009",
        "title": "温岭市",
        "parentId": "3510",
        "pinyin": "wenlingshi",
        "initial": "W"
    },
    {
        "id": "360105",
        "title": "湾里区",
        "parentId": "3601",
        "pinyin": "wanliqu",
        "initial": "W"
    },
    {
        "id": "360405",
        "title": "武宁县",
        "parentId": "3604",
        "pinyin": "wuningxian",
        "initial": "W"
    },
    {
        "id": "360811",
        "title": "万安县",
        "parentId": "3608",
        "pinyin": "wananxian",
        "initial": "W"
    },
    {
        "id": "360904",
        "title": "万载县",
        "parentId": "3609",
        "pinyin": "wanzaixian",
        "initial": "W"
    },
    {
        "id": "361111",
        "title": "万年县",
        "parentId": "3611",
        "pinyin": "wannianxian",
        "initial": "W"
    },
    {
        "id": "400502",
        "title": "武江区",
        "parentId": "4005",
        "pinyin": "wujiangqu",
        "initial": "W"
    },
    {
        "id": "400507",
        "title": "翁源县",
        "parentId": "4005",
        "pinyin": "wengyuanxian",
        "initial": "W"
    },
    {
        "id": "400706",
        "title": "五华县",
        "parentId": "4007",
        "pinyin": "wuhuaxian",
        "initial": "W"
    },
    {
        "id": "401510",
        "title": "吴川市",
        "parentId": "4015",
        "pinyin": "wuchuanshi",
        "initial": "W"
    },
    {
        "id": "410108",
        "title": "武鸣县",
        "parentId": "4101",
        "pinyin": "wumingxian",
        "initial": "W"
    },
    {
        "id": "4104",
        "title": "梧州市",
        "parentId": "41",
        "pinyin": "wuzhoushi",
        "initial": "W"
    },
    {
        "id": "410402",
        "title": "万秀区",
        "parentId": "4104",
        "pinyin": "wanxiuqu",
        "initial": "W"
    },
    {
        "id": "411305",
        "title": "武宣县",
        "parentId": "4113",
        "pinyin": "wuxuanxian",
        "initial": "W"
    },
    {
        "id": "4205",
        "title": "文昌市",
        "parentId": "42",
        "pinyin": "wenchangshi",
        "initial": "W"
    },
    {
        "id": "4207",
        "title": "五指山市",
        "parentId": "42",
        "pinyin": "wuzhishanshi",
        "initial": "W"
    },
    {
        "id": "4208",
        "title": "万宁市",
        "parentId": "42",
        "pinyin": "wanningshi",
        "initial": "W"
    },
    {
        "id": "6001",
        "title": "万州区",
        "parentId": "60",
        "pinyin": "wanzhouqu",
        "initial": "W"
    },
    {
        "id": "6010",
        "title": "万盛区",
        "parentId": "60",
        "pinyin": "wanshengqu",
        "initial": "W"
    },
    {
        "id": "6030",
        "title": "武隆县",
        "parentId": "60",
        "pinyin": "wulongxian",
        "initial": "W"
    },
    {
        "id": "6035",
        "title": "巫山县",
        "parentId": "60",
        "pinyin": "wushanxian",
        "initial": "W"
    },
    {
        "id": "6036",
        "title": "巫溪县",
        "parentId": "60",
        "pinyin": "wuxixian",
        "initial": "W"
    },
    {
        "id": "610105",
        "title": "武侯区",
        "parentId": "6101",
        "pinyin": "wuhouqu",
        "initial": "W"
    },
    {
        "id": "610110",
        "title": "温江区",
        "parentId": "6101",
        "pinyin": "wenjiangqu",
        "initial": "W"
    },
    {
        "id": "610804",
        "title": "威远县",
        "parentId": "6108",
        "pinyin": "weiyuanxian",
        "initial": "W"
    },
    {
        "id": "611004",
        "title": "五通桥区",
        "parentId": "6110",
        "pinyin": "wutongqiaoqu",
        "initial": "W"
    },
    {
        "id": "611308",
        "title": "万源市",
        "parentId": "6113",
        "pinyin": "wanyuanshi",
        "initial": "W"
    },
    {
        "id": "611505",
        "title": "旺苍县",
        "parentId": "6115",
        "pinyin": "wangcangxian",
        "initial": "W"
    },
    {
        "id": "611604",
        "title": "武胜县",
        "parentId": "6116",
        "pinyin": "wushengxian",
        "initial": "W"
    },
    {
        "id": "620102",
        "title": "五华区",
        "parentId": "6201",
        "pinyin": "wuhuaqu",
        "initial": "W"
    },
    {
        "id": "620411",
        "title": "威信县",
        "parentId": "6204",
        "pinyin": "weixinxian",
        "initial": "W"
    },
    {
        "id": "620509",
        "title": "武定县",
        "parentId": "6205",
        "pinyin": "wudingxian",
        "initial": "W"
    },
    {
        "id": "620803",
        "title": "维西县",
        "parentId": "6208",
        "pinyin": "weixixian",
        "initial": "W"
    },
    {
        "id": "6209",
        "title": "文山州",
        "parentId": "62",
        "pinyin": "wenshanzhou",
        "initial": "W"
    },
    {
        "id": "620901",
        "title": "文山县",
        "parentId": "6209",
        "pinyin": "wenshanxian",
        "initial": "W"
    },
    {
        "id": "621207",
        "title": "巍山彝族县",
        "parentId": "6212",
        "pinyin": "weishanyizuxian",
        "initial": "W"
    },
    {
        "id": "630105",
        "title": "乌当区",
        "parentId": "6301",
        "pinyin": "wudangqu",
        "initial": "W"
    },
    {
        "id": "630209",
        "title": "务川仡佬族县",
        "parentId": "6302",
        "pinyin": "wuchuanzuolaozuxian",
        "initial": "W"
    },
    {
        "id": "630506",
        "title": "望谟县",
        "parentId": "6305",
        "pinyin": "wangzuoxian",
        "initial": "W"
    },
    {
        "id": "630605",
        "title": "瓮安县",
        "parentId": "6306",
        "pinyin": "wenganxian",
        "initial": "W"
    },
    {
        "id": "630710",
        "title": "万山特区",
        "parentId": "6307",
        "pinyin": "wanshantequ",
        "initial": "W"
    },
    {
        "id": "630807",
        "title": "威宁县",
        "parentId": "6308",
        "pinyin": "weiningxian",
        "initial": "W"
    },
    {
        "id": "700309",
        "title": "尉氏县",
        "parentId": "7003",
        "pinyin": "weishixian",
        "initial": "W"
    },
    {
        "id": "700402",
        "title": "文峰区",
        "parentId": "7004",
        "pinyin": "wenfengqu",
        "initial": "W"
    },
    {
        "id": "700503",
        "title": "卫滨区",
        "parentId": "7005",
        "pinyin": "weibinqu",
        "initial": "W"
    },
    {
        "id": "700512",
        "title": "卫辉市",
        "parentId": "7005",
        "pinyin": "weihuishi",
        "initial": "W"
    },
    {
        "id": "700708",
        "title": "武陟县",
        "parentId": "7007",
        "pinyin": "wuzuoxian",
        "initial": "W"
    },
    {
        "id": "700709",
        "title": "温县",
        "parentId": "7007",
        "pinyin": "wenxian",
        "initial": "W"
    },
    {
        "id": "701102",
        "title": "魏都区",
        "parentId": "7011",
        "pinyin": "weiduqu",
        "initial": "W"
    },
    {
        "id": "701205",
        "title": "舞阳县",
        "parentId": "7012",
        "pinyin": "wuyangxian",
        "initial": "W"
    },
    {
        "id": "701303",
        "title": "卫东区",
        "parentId": "7013",
        "pinyin": "weidongqu",
        "initial": "W"
    },
    {
        "id": "701310",
        "title": "舞钢市",
        "parentId": "7013",
        "pinyin": "wugangshi",
        "initial": "W"
    },
    {
        "id": "701602",
        "title": "宛城区",
        "parentId": "7016",
        "pinyin": "wanchengqu",
        "initial": "W"
    },
    {
        "id": "701603",
        "title": "卧龙区",
        "parentId": "7016",
        "pinyin": "wolongqu",
        "initial": "W"
    },
    {
        "id": "7101",
        "title": "武汉市",
        "parentId": "71",
        "pinyin": "wuhanshi",
        "initial": "W"
    },
    {
        "id": "710106",
        "title": "武昌区",
        "parentId": "7101",
        "pinyin": "wuchangqu",
        "initial": "W"
    },
    {
        "id": "710603",
        "title": "伍家岗区",
        "parentId": "7106",
        "pinyin": "wujiagangqu",
        "initial": "W"
    },
    {
        "id": "710611",
        "title": "五峰县",
        "parentId": "7106",
        "pinyin": "wufengxian",
        "initial": "W"
    },
    {
        "id": "711011",
        "title": "武穴市",
        "parentId": "7110",
        "pinyin": "wuxueshi",
        "initial": "W"
    },
    {
        "id": "720108",
        "title": "望城县",
        "parentId": "7201",
        "pinyin": "wangchengxian",
        "initial": "W"
    },
    {
        "id": "720602",
        "title": "武陵区",
        "parentId": "7206",
        "pinyin": "wulingqu",
        "initial": "W"
    },
    {
        "id": "720813",
        "title": "武冈市",
        "parentId": "7208",
        "pinyin": "wugangshi",
        "initial": "W"
    },
    {
        "id": "721303",
        "title": "武陵源区",
        "parentId": "7213",
        "pinyin": "wulingyuanqu",
        "initial": "W"
    },
    {
        "id": "800106",
        "title": "未央区",
        "parentId": "8001",
        "pinyin": "weiyangqu",
        "initial": "W"
    },
    {
        "id": "800202",
        "title": "渭滨区",
        "parentId": "8002",
        "pinyin": "weibinqu",
        "initial": "W"
    },
    {
        "id": "800304",
        "title": "渭城区",
        "parentId": "8003",
        "pinyin": "weichengqu",
        "initial": "W"
    },
    {
        "id": "800314",
        "title": "武功县",
        "parentId": "8003",
        "pinyin": "wugongxian",
        "initial": "W"
    },
    {
        "id": "8004",
        "title": "渭南市",
        "parentId": "80",
        "pinyin": "weinanshi",
        "initial": "W"
    },
    {
        "id": "800508",
        "title": "吴起县",
        "parentId": "8005",
        "pinyin": "wuqixian",
        "initial": "W"
    },
    {
        "id": "800611",
        "title": "吴堡县",
        "parentId": "8006",
        "pinyin": "wubaoxian",
        "initial": "W"
    },
    {
        "id": "800702",
        "title": "王益区",
        "parentId": "8007",
        "pinyin": "wangyiqu",
        "initial": "W"
    },
    {
        "id": "810503",
        "title": "乌兰县",
        "parentId": "8105",
        "pinyin": "wulanxian",
        "initial": "W"
    },
    {
        "id": "8203",
        "title": "吴忠市",
        "parentId": "82",
        "pinyin": "wuzhongshi",
        "initial": "W"
    },
    {
        "id": "8301",
        "title": "乌鲁木齐市",
        "parentId": "83",
        "pinyin": "wulumuqishi",
        "initial": "W"
    },
    {
        "id": "830109",
        "title": "乌鲁木齐县",
        "parentId": "8301",
        "pinyin": "wulumuqixian",
        "initial": "W"
    },
    {
        "id": "830402",
        "title": "乌苏市",
        "parentId": "8304",
        "pinyin": "wusushi",
        "initial": "W"
    },
    {
        "id": "830503",
        "title": "温泉县",
        "parentId": "8305",
        "pinyin": "wenquanxian",
        "initial": "W"
    },
    {
        "id": "830803",
        "title": "尉犁县",
        "parentId": "8308",
        "pinyin": "weilixian",
        "initial": "W"
    },
    {
        "id": "831102",
        "title": "温宿县",
        "parentId": "8311",
        "pinyin": "wensuxian",
        "initial": "W"
    },
    {
        "id": "831107",
        "title": "乌什县",
        "parentId": "8311",
        "pinyin": "wushixian",
        "initial": "W"
    },
    {
        "id": "831204",
        "title": "乌恰县",
        "parentId": "8312",
        "pinyin": "wuqiaxian",
        "initial": "W"
    },
    {
        "id": "831405",
        "title": "乌尔禾区",
        "parentId": "8314",
        "pinyin": "wuerhequ",
        "initial": "W"
    },
    {
        "id": "8316",
        "title": "五家渠市",
        "parentId": "83",
        "pinyin": "wujiaqushi",
        "initial": "W"
    },
    {
        "id": "840207",
        "title": "武山县",
        "parentId": "8402",
        "pinyin": "wushanxian",
        "initial": "W"
    },
    {
        "id": "8404",
        "title": "武威市",
        "parentId": "84",
        "pinyin": "wuweishi",
        "initial": "W"
    },
    {
        "id": "841105",
        "title": "渭源县",
        "parentId": "8411",
        "pinyin": "weiyuanxian",
        "initial": "W"
    },
    {
        "id": "841202",
        "title": "武都区",
        "parentId": "8412",
        "pinyin": "wuduqu",
        "initial": "W"
    },
    {
        "id": "841204",
        "title": "文县",
        "parentId": "8412",
        "pinyin": "wenxian",
        "initial": "W"
    },
    {
        "id": "1002",
        "title": "西城区",
        "parentId": "10",
        "pinyin": "xichengqu",
        "initial": "X"
    },
    {
        "id": "1111",
        "title": "西青区",
        "parentId": "11",
        "pinyin": "xiqingqu",
        "initial": "X"
    },
    {
        "id": "120105",
        "title": "新华区",
        "parentId": "1201",
        "pinyin": "xinhuaqu",
        "initial": "X"
    },
    {
        "id": "120111",
        "title": "行唐县",
        "parentId": "1201",
        "pinyin": "xingtangxian",
        "initial": "X"
    },
    {
        "id": "120120",
        "title": "辛集市",
        "parentId": "1201",
        "pinyin": "xinjishi",
        "initial": "X"
    },
    {
        "id": "120123",
        "title": "新乐市",
        "parentId": "1201",
        "pinyin": "xinleshi",
        "initial": "X"
    },
    {
        "id": "120404",
        "title": "宣化区",
        "parentId": "1204",
        "pinyin": "xuanhuaqu",
        "initial": "X"
    },
    {
        "id": "120405",
        "title": "下花园区",
        "parentId": "1204",
        "pinyin": "xiahuayuanqu",
        "initial": "X"
    },
    {
        "id": "120406",
        "title": "宣化县",
        "parentId": "1204",
        "pinyin": "xuanhuaxian",
        "initial": "X"
    },
    {
        "id": "120506",
        "title": "香河县",
        "parentId": "1205",
        "pinyin": "xianghexian",
        "initial": "X"
    },
    {
        "id": "120701",
        "title": "新市区",
        "parentId": "1207",
        "pinyin": "xinshiqu",
        "initial": "X"
    },
    {
        "id": "120709",
        "title": "徐水县",
        "parentId": "1207",
        "pinyin": "xushuixian",
        "initial": "X"
    },
    {
        "id": "120722",
        "title": "雄县",
        "parentId": "1207",
        "pinyin": "xiongxian",
        "initial": "X"
    },
    {
        "id": "120806",
        "title": "兴隆县",
        "parentId": "1208",
        "pinyin": "xinglongxian",
        "initial": "X"
    },
    {
        "id": "1209",
        "title": "邢台市",
        "parentId": "12",
        "pinyin": "xingtaishi",
        "initial": "X"
    },
    {
        "id": "120904",
        "title": "邢台县",
        "parentId": "1209",
        "pinyin": "xingtaixian",
        "initial": "X"
    },
    {
        "id": "120913",
        "title": "新河县",
        "parentId": "1209",
        "pinyin": "xinhexian",
        "initial": "X"
    },
    {
        "id": "121002",
        "title": "新华区",
        "parentId": "1210",
        "pinyin": "xinhuaqu",
        "initial": "X"
    },
    {
        "id": "121012",
        "title": "献县",
        "parentId": "1210",
        "pinyin": "xianxian",
        "initial": "X"
    },
    {
        "id": "130102",
        "title": "新城区",
        "parentId": "1301",
        "pinyin": "xinchengqu",
        "initial": "X"
    },
    {
        "id": "130308",
        "title": "新巴尔虎左旗",
        "parentId": "1303",
        "pinyin": "xinbaerhuzuoqi",
        "initial": "X"
    },
    {
        "id": "130309",
        "title": "新巴尔虎右旗",
        "parentId": "1303",
        "pinyin": "xinbaerhuyouqi",
        "initial": "X"
    },
    {
        "id": "1304",
        "title": "兴安盟",
        "parentId": "13",
        "pinyin": "xinganmeng",
        "initial": "X"
    },
    {
        "id": "1307",
        "title": "锡林郭勒盟",
        "parentId": "13",
        "pinyin": "xilinguolemeng",
        "initial": "X"
    },
    {
        "id": "130702",
        "title": "锡林浩特市",
        "parentId": "1307",
        "pinyin": "xilinhaoteshi",
        "initial": "X"
    },
    {
        "id": "130707",
        "title": "西乌珠穆沁旗",
        "parentId": "1307",
        "pinyin": "xiwuzhumuqinqi",
        "initial": "X"
    },
    {
        "id": "130709",
        "title": "镶黄旗",
        "parentId": "1307",
        "pinyin": "xianghuangqi",
        "initial": "X"
    },
    {
        "id": "130806",
        "title": "兴和县",
        "parentId": "1308",
        "pinyin": "xinghexian",
        "initial": "X"
    },
    {
        "id": "140102",
        "title": "小店区",
        "parentId": "1401",
        "pinyin": "xiaodianqu",
        "initial": "X"
    },
    {
        "id": "140104",
        "title": "杏花岭区",
        "parentId": "1401",
        "pinyin": "xinghualingqu",
        "initial": "X"
    },
    {
        "id": "140205",
        "title": "新荣区",
        "parentId": "1402",
        "pinyin": "xinrongqu",
        "initial": "X"
    },
    {
        "id": "140405",
        "title": "襄垣县",
        "parentId": "1404",
        "pinyin": "xiangyuanxian",
        "initial": "X"
    },
    {
        "id": "1407",
        "title": "忻州市",
        "parentId": "14",
        "pinyin": "xinzhoushi",
        "initial": "X"
    },
    {
        "id": "140702",
        "title": "忻府区",
        "parentId": "1407",
        "pinyin": "xinfuqu",
        "initial": "X"
    },
    {
        "id": "140806",
        "title": "昔阳县",
        "parentId": "1408",
        "pinyin": "xiyangxian",
        "initial": "X"
    },
    {
        "id": "140905",
        "title": "襄汾县",
        "parentId": "1409",
        "pinyin": "xiangfenxian",
        "initial": "X"
    },
    {
        "id": "140911",
        "title": "乡宁县",
        "parentId": "1409",
        "pinyin": "xiangningxian",
        "initial": "X"
    },
    {
        "id": "141005",
        "title": "兴县",
        "parentId": "1410",
        "pinyin": "xingxian",
        "initial": "X"
    },
    {
        "id": "141013",
        "title": "孝义市",
        "parentId": "1410",
        "pinyin": "xiaoyishi",
        "initial": "X"
    },
    {
        "id": "141107",
        "title": "新绛县",
        "parentId": "1411",
        "pinyin": "xinzuoxian",
        "initial": "X"
    },
    {
        "id": "141110",
        "title": "夏县",
        "parentId": "1411",
        "pinyin": "xiaxian",
        "initial": "X"
    },
    {
        "id": "200114",
        "title": "新民市",
        "parentId": "2001",
        "pinyin": "xinminshi",
        "initial": "X"
    },
    {
        "id": "200203",
        "title": "西岗区",
        "parentId": "2002",
        "pinyin": "xigangqu",
        "initial": "X"
    },
    {
        "id": "200603",
        "title": "兴隆台区",
        "parentId": "2006",
        "pinyin": "xinglongtaiqu",
        "initial": "X"
    },
    {
        "id": "200705",
        "title": "西丰县",
        "parentId": "2007",
        "pinyin": "xifengxian",
        "initial": "X"
    },
    {
        "id": "200802",
        "title": "新抚区",
        "parentId": "2008",
        "pinyin": "xinfuqu",
        "initial": "X"
    },
    {
        "id": "200807",
        "title": "新宾县",
        "parentId": "2008",
        "pinyin": "xinbinxian",
        "initial": "X"
    },
    {
        "id": "201103",
        "title": "新邱区",
        "parentId": "2011",
        "pinyin": "xinqiuqu",
        "initial": "X"
    },
    {
        "id": "201106",
        "title": "细河区",
        "parentId": "2011",
        "pinyin": "xihequ",
        "initial": "X"
    },
    {
        "id": "201203",
        "title": "溪湖区",
        "parentId": "2012",
        "pinyin": "xihuqu",
        "initial": "X"
    },
    {
        "id": "201407",
        "title": "兴城市",
        "parentId": "2014",
        "pinyin": "xingchengshi",
        "initial": "X"
    },
    {
        "id": "210403",
        "title": "西安区",
        "parentId": "2104",
        "pinyin": "xianqu",
        "initial": "X"
    },
    {
        "id": "220107",
        "title": "香坊区",
        "parentId": "2201",
        "pinyin": "xiangfangqu",
        "initial": "X"
    },
    {
        "id": "220402",
        "title": "向阳区",
        "parentId": "2204",
        "pinyin": "xiangyangqu",
        "initial": "X"
    },
    {
        "id": "220405",
        "title": "兴安区",
        "parentId": "2204",
        "pinyin": "xinganqu",
        "initial": "X"
    },
    {
        "id": "220407",
        "title": "兴山区",
        "parentId": "2204",
        "pinyin": "xingshanqu",
        "initial": "X"
    },
    {
        "id": "220705",
        "title": "西林区",
        "parentId": "2207",
        "pinyin": "xilinqu",
        "initial": "X"
    },
    {
        "id": "220707",
        "title": "新青区",
        "parentId": "2207",
        "pinyin": "xinqingqu",
        "initial": "X"
    },
    {
        "id": "220802",
        "title": "向阳区",
        "parentId": "2208",
        "pinyin": "xiangyangqu",
        "initial": "X"
    },
    {
        "id": "220902",
        "title": "新兴区",
        "parentId": "2209",
        "pinyin": "xinxingqu",
        "initial": "X"
    },
    {
        "id": "221005",
        "title": "西安区",
        "parentId": "2210",
        "pinyin": "xianqu",
        "initial": "X"
    },
    {
        "id": "221104",
        "title": "逊克县",
        "parentId": "2211",
        "pinyin": "xunkexian",
        "initial": "X"
    },
    {
        "id": "221303",
        "title": "新林区",
        "parentId": "2213",
        "pinyin": "xinlinqu",
        "initial": "X"
    },
    {
        "id": "3018",
        "title": "徐汇区",
        "parentId": "30",
        "pinyin": "xuhuiqu",
        "initial": "X"
    },
    {
        "id": "310102",
        "title": "玄武区",
        "parentId": "3101",
        "pinyin": "xuanwuqu",
        "initial": "X"
    },
    {
        "id": "310107",
        "title": "下关区",
        "parentId": "3101",
        "pinyin": "xiaguanqu",
        "initial": "X"
    },
    {
        "id": "310207",
        "title": "相城区",
        "parentId": "3102",
        "pinyin": "xiangchengqu",
        "initial": "X"
    },
    {
        "id": "310305",
        "title": "锡山区",
        "parentId": "3103",
        "pinyin": "xishanqu",
        "initial": "X"
    },
    {
        "id": "310705",
        "title": "新北区",
        "parentId": "3107",
        "pinyin": "xinbeiqu",
        "initial": "X"
    },
    {
        "id": "3108",
        "title": "徐州市",
        "parentId": "31",
        "pinyin": "xuzhoushi",
        "initial": "X"
    },
    {
        "id": "310811",
        "title": "新沂市",
        "parentId": "3108",
        "pinyin": "xinyishi",
        "initial": "X"
    },
    {
        "id": "310903",
        "title": "新浦区",
        "parentId": "3109",
        "pinyin": "xinpuqu",
        "initial": "X"
    },
    {
        "id": "311004",
        "title": "响水县",
        "parentId": "3110",
        "pinyin": "xiangshuixian",
        "initial": "X"
    },
    {
        "id": "311204",
        "title": "兴化市",
        "parentId": "3112",
        "pinyin": "xinghuashi",
        "initial": "X"
    },
    {
        "id": "320506",
        "title": "新泰市",
        "parentId": "3205",
        "pinyin": "xintaishi",
        "initial": "X"
    },
    {
        "id": "320803",
        "title": "薛城区",
        "parentId": "3208",
        "pinyin": "xuechengqu",
        "initial": "X"
    },
    {
        "id": "320909",
        "title": "夏津县",
        "parentId": "3209",
        "pinyin": "xiajinxian",
        "initial": "X"
    },
    {
        "id": "330503",
        "title": "相山区",
        "parentId": "3305",
        "pinyin": "xiangshanqu",
        "initial": "X"
    },
    {
        "id": "330806",
        "title": "休宁县",
        "parentId": "3308",
        "pinyin": "xiuningxian",
        "initial": "X"
    },
    {
        "id": "331004",
        "title": "萧县",
        "parentId": "3310",
        "pinyin": "xiaoxian",
        "initial": "X"
    },
    {
        "id": "331204",
        "title": "谢家集区",
        "parentId": "3312",
        "pinyin": "xiejiajiqu",
        "initial": "X"
    },
    {
        "id": "3316",
        "title": "宣城市",
        "parentId": "33",
        "pinyin": "xuanchengshi",
        "initial": "X"
    },
    {
        "id": "331602",
        "title": "宣州区",
        "parentId": "3316",
        "pinyin": "xuanzhouqu",
        "initial": "X"
    },
    {
        "id": "3402",
        "title": "厦门市",
        "parentId": "34",
        "pinyin": "xiamenshi",
        "initial": "X"
    },
    {
        "id": "340207",
        "title": "翔安区",
        "parentId": "3402",
        "pinyin": "xianganqu",
        "initial": "X"
    },
    {
        "id": "340505",
        "title": "秀屿区",
        "parentId": "3405",
        "pinyin": "xiuyuqu",
        "initial": "X"
    },
    {
        "id": "340506",
        "title": "仙游县",
        "parentId": "3405",
        "pinyin": "xianyouxian",
        "initial": "X"
    },
    {
        "id": "340802",
        "title": "新罗区",
        "parentId": "3408",
        "pinyin": "xinluoqu",
        "initial": "X"
    },
    {
        "id": "340903",
        "title": "霞浦县",
        "parentId": "3409",
        "pinyin": "xiapuxian",
        "initial": "X"
    },
    {
        "id": "350103",
        "title": "下城区",
        "parentId": "3501",
        "pinyin": "xiachengqu",
        "initial": "X"
    },
    {
        "id": "350106",
        "title": "西湖区",
        "parentId": "3501",
        "pinyin": "xihuqu",
        "initial": "X"
    },
    {
        "id": "350108",
        "title": "萧山区",
        "parentId": "3501",
        "pinyin": "xiaoshanqu",
        "initial": "X"
    },
    {
        "id": "350208",
        "title": "象山县",
        "parentId": "3502",
        "pinyin": "xiangshanxian",
        "initial": "X"
    },
    {
        "id": "350403",
        "title": "秀洲区",
        "parentId": "3504",
        "pinyin": "xiuzhouqu",
        "initial": "X"
    },
    {
        "id": "350604",
        "title": "新昌县",
        "parentId": "3506",
        "pinyin": "xinchangxian",
        "initial": "X"
    },
    {
        "id": "351008",
        "title": "仙居县",
        "parentId": "3510",
        "pinyin": "xianjuxian",
        "initial": "X"
    },
    {
        "id": "360103",
        "title": "西湖区",
        "parentId": "3601",
        "pinyin": "xihuqu",
        "initial": "X"
    },
    {
        "id": "360108",
        "title": "新建县",
        "parentId": "3601",
        "pinyin": "xinjianxian",
        "initial": "X"
    },
    {
        "id": "360303",
        "title": "湘东区",
        "parentId": "3603",
        "pinyin": "xiangdongqu",
        "initial": "X"
    },
    {
        "id": "360406",
        "title": "修水县",
        "parentId": "3604",
        "pinyin": "xiushuixian",
        "initial": "X"
    },
    {
        "id": "360409",
        "title": "星子县",
        "parentId": "3604",
        "pinyin": "xingzixian",
        "initial": "X"
    },
    {
        "id": "3605",
        "title": "新余市",
        "parentId": "36",
        "pinyin": "xinyushi",
        "initial": "X"
    },
    {
        "id": "360704",
        "title": "信丰县",
        "parentId": "3607",
        "pinyin": "xinfengxian",
        "initial": "X"
    },
    {
        "id": "360714",
        "title": "兴国县",
        "parentId": "3607",
        "pinyin": "xingguoxian",
        "initial": "X"
    },
    {
        "id": "360716",
        "title": "寻乌县",
        "parentId": "3607",
        "pinyin": "xunwuxian",
        "initial": "X"
    },
    {
        "id": "360806",
        "title": "峡江县",
        "parentId": "3608",
        "pinyin": "xiajiangxian",
        "initial": "X"
    },
    {
        "id": "360807",
        "title": "新干县",
        "parentId": "3608",
        "pinyin": "xinganxian",
        "initial": "X"
    },
    {
        "id": "361102",
        "title": "信州区",
        "parentId": "3611",
        "pinyin": "xinzhouqu",
        "initial": "X"
    },
    {
        "id": "400302",
        "title": "香洲区",
        "parentId": "4003",
        "pinyin": "xiangzhouqu",
        "initial": "X"
    },
    {
        "id": "400509",
        "title": "新丰县",
        "parentId": "4005",
        "pinyin": "xinfengxian",
        "initial": "X"
    },
    {
        "id": "400709",
        "title": "兴宁市",
        "parentId": "4007",
        "pinyin": "xingningshi",
        "initial": "X"
    },
    {
        "id": "401204",
        "title": "新会区",
        "parentId": "4012",
        "pinyin": "xinhuiqu",
        "initial": "X"
    },
    {
        "id": "401503",
        "title": "霞山区",
        "parentId": "4015",
        "pinyin": "xiashanqu",
        "initial": "X"
    },
    {
        "id": "401507",
        "title": "徐闻县",
        "parentId": "4015",
        "pinyin": "xuwenxian",
        "initial": "X"
    },
    {
        "id": "401607",
        "title": "信宜市",
        "parentId": "4016",
        "pinyin": "xinyishi",
        "initial": "X"
    },
    {
        "id": "401902",
        "title": "湘桥区",
        "parentId": "4019",
        "pinyin": "xiangqiaoqu",
        "initial": "X"
    },
    {
        "id": "402103",
        "title": "新兴县",
        "parentId": "4021",
        "pinyin": "xinxingxian",
        "initial": "X"
    },
    {
        "id": "410102",
        "title": "兴宁区",
        "parentId": "4101",
        "pinyin": "xingningqu",
        "initial": "X"
    },
    {
        "id": "410105",
        "title": "西乡塘区",
        "parentId": "4101",
        "pinyin": "xixiangtangqu",
        "initial": "X"
    },
    {
        "id": "410302",
        "title": "秀峰区",
        "parentId": "4103",
        "pinyin": "xiufengqu",
        "initial": "X"
    },
    {
        "id": "410304",
        "title": "象山区",
        "parentId": "4103",
        "pinyin": "xiangshanqu",
        "initial": "X"
    },
    {
        "id": "410311",
        "title": "兴安县",
        "parentId": "4103",
        "pinyin": "xinganxian",
        "initial": "X"
    },
    {
        "id": "410906",
        "title": "兴业县",
        "parentId": "4109",
        "pinyin": "xingyexian",
        "initial": "X"
    },
    {
        "id": "411012",
        "title": "西林县",
        "parentId": "4110",
        "pinyin": "xilinxian",
        "initial": "X"
    },
    {
        "id": "411302",
        "title": "兴宾区",
        "parentId": "4113",
        "pinyin": "xingbinqu",
        "initial": "X"
    },
    {
        "id": "411303",
        "title": "忻城县",
        "parentId": "4113",
        "pinyin": "xinchengxian",
        "initial": "X"
    },
    {
        "id": "411304",
        "title": "象州县",
        "parentId": "4113",
        "pinyin": "xiangzhouxian",
        "initial": "X"
    },
    {
        "id": "420102",
        "title": "秀英区",
        "parentId": "4201",
        "pinyin": "xiuyingqu",
        "initial": "X"
    },
    {
        "id": "6038",
        "title": "秀山县",
        "parentId": "60",
        "pinyin": "xiushanxian",
        "initial": "X"
    },
    {
        "id": "610109",
        "title": "新都区",
        "parentId": "6101",
        "pinyin": "xinduqu",
        "initial": "X"
    },
    {
        "id": "610116",
        "title": "新津县",
        "parentId": "6101",
        "pinyin": "xinjinxian",
        "initial": "X"
    },
    {
        "id": "610507",
        "title": "叙永县",
        "parentId": "6105",
        "pinyin": "xuyongxian",
        "initial": "X"
    },
    {
        "id": "610609",
        "title": "西充县",
        "parentId": "6106",
        "pinyin": "xichongxian",
        "initial": "X"
    },
    {
        "id": "610910",
        "title": "兴文县",
        "parentId": "6109",
        "pinyin": "xingwenxian",
        "initial": "X"
    },
    {
        "id": "611304",
        "title": "宣汉县",
        "parentId": "6113",
        "pinyin": "xuanhanxian",
        "initial": "X"
    },
    {
        "id": "611807",
        "title": "小金县",
        "parentId": "6118",
        "pinyin": "xiaojinxian",
        "initial": "X"
    },
    {
        "id": "611903",
        "title": "西区",
        "parentId": "6119",
        "pinyin": "xiqu",
        "initial": "X"
    },
    {
        "id": "612009",
        "title": "新龙县",
        "parentId": "6120",
        "pinyin": "xinlongxian",
        "initial": "X"
    },
    {
        "id": "612016",
        "title": "乡城县",
        "parentId": "6120",
        "pinyin": "xiangchengxian",
        "initial": "X"
    },
    {
        "id": "612101",
        "title": "西昌市",
        "parentId": "6121",
        "pinyin": "xichangshi",
        "initial": "X"
    },
    {
        "id": "612112",
        "title": "喜德县",
        "parentId": "6121",
        "pinyin": "xidexian",
        "initial": "X"
    },
    {
        "id": "620105",
        "title": "西山区",
        "parentId": "6201",
        "pinyin": "xishanqu",
        "initial": "X"
    },
    {
        "id": "620114",
        "title": "寻甸回族县",
        "parentId": "6201",
        "pinyin": "xundianhuizuxian",
        "initial": "X"
    },
    {
        "id": "620210",
        "title": "宣威市",
        "parentId": "6202",
        "pinyin": "xuanweishi",
        "initial": "X"
    },
    {
        "id": "620309",
        "title": "新平县",
        "parentId": "6203",
        "pinyin": "xinpingxian",
        "initial": "X"
    },
    {
        "id": "620801",
        "title": "香格里拉县",
        "parentId": "6208",
        "pinyin": "xianggelilaxian",
        "initial": "X"
    },
    {
        "id": "620903",
        "title": "西畴县",
        "parentId": "6209",
        "pinyin": "xichouxian",
        "initial": "X"
    },
    {
        "id": "6210",
        "title": "西双版纳州",
        "parentId": "62",
        "pinyin": "xishuangbannazhou",
        "initial": "X"
    },
    {
        "id": "621111",
        "title": "西盟县",
        "parentId": "6211",
        "pinyin": "ximengxian",
        "initial": "X"
    },
    {
        "id": "621203",
        "title": "祥云县",
        "parentId": "6212",
        "pinyin": "xiangyunxian",
        "initial": "X"
    },
    {
        "id": "630107",
        "title": "小河区",
        "parentId": "6301",
        "pinyin": "xiaohequ",
        "initial": "X"
    },
    {
        "id": "630109",
        "title": "息烽县",
        "parentId": "6301",
        "pinyin": "xifengxian",
        "initial": "X"
    },
    {
        "id": "630110",
        "title": "修文县",
        "parentId": "6301",
        "pinyin": "xiuwenxian",
        "initial": "X"
    },
    {
        "id": "630213",
        "title": "习水县",
        "parentId": "6302",
        "pinyin": "xishuixian",
        "initial": "X"
    },
    {
        "id": "630402",
        "title": "西秀区",
        "parentId": "6304",
        "pinyin": "xixiuqu",
        "initial": "X"
    },
    {
        "id": "630501",
        "title": "兴义市",
        "parentId": "6305",
        "pinyin": "xingyishi",
        "initial": "X"
    },
    {
        "id": "630502",
        "title": "兴仁县",
        "parentId": "6305",
        "pinyin": "xingrenxian",
        "initial": "X"
    },
    {
        "id": "64",
        "title": "西藏",
        "parentId": null,
        "pinyin": "xicang",
        "initial": "X"
    },
    {
        "id": "640208",
        "title": "谢通门县",
        "parentId": "6402",
        "pinyin": "xietongmenxian",
        "initial": "X"
    },
    {
        "id": "700111",
        "title": "新密市",
        "parentId": "7001",
        "pinyin": "xinmishi",
        "initial": "X"
    },
    {
        "id": "700112",
        "title": "新郑市",
        "parentId": "7001",
        "pinyin": "xinzhengshi",
        "initial": "X"
    },
    {
        "id": "700203",
        "title": "西工区",
        "parentId": "7002",
        "pinyin": "xigongqu",
        "initial": "X"
    },
    {
        "id": "700209",
        "title": "新安县",
        "parentId": "7002",
        "pinyin": "xinanxian",
        "initial": "X"
    },
    {
        "id": "7005",
        "title": "新乡市",
        "parentId": "70",
        "pinyin": "xinxiangshi",
        "initial": "X"
    },
    {
        "id": "700506",
        "title": "新乡县",
        "parentId": "7005",
        "pinyin": "xinxiangxian",
        "initial": "X"
    },
    {
        "id": "700706",
        "title": "修武县",
        "parentId": "7007",
        "pinyin": "xiuwuxian",
        "initial": "X"
    },
    {
        "id": "701009",
        "title": "夏邑县",
        "parentId": "7010",
        "pinyin": "xiayixian",
        "initial": "X"
    },
    {
        "id": "7011",
        "title": "许昌市",
        "parentId": "70",
        "pinyin": "xuchangshi",
        "initial": "X"
    },
    {
        "id": "701103",
        "title": "许昌县",
        "parentId": "7011",
        "pinyin": "xuchangxian",
        "initial": "X"
    },
    {
        "id": "701105",
        "title": "襄城县",
        "parentId": "7011",
        "pinyin": "xiangchengxian",
        "initial": "X"
    },
    {
        "id": "701302",
        "title": "新华区",
        "parentId": "7013",
        "pinyin": "xinhuaqu",
        "initial": "X"
    },
    {
        "id": "701403",
        "title": "西平县",
        "parentId": "7014",
        "pinyin": "xipingxian",
        "initial": "X"
    },
    {
        "id": "701411",
        "title": "新蔡县",
        "parentId": "7014",
        "pinyin": "xincaixian",
        "initial": "X"
    },
    {
        "id": "701504",
        "title": "西华县",
        "parentId": "7015",
        "pinyin": "xihuaxian",
        "initial": "X"
    },
    {
        "id": "701511",
        "title": "项城市",
        "parentId": "7015",
        "pinyin": "xiangchengshi",
        "initial": "X"
    },
    {
        "id": "701606",
        "title": "西峡县",
        "parentId": "7016",
        "pinyin": "xixiaxian",
        "initial": "X"
    },
    {
        "id": "701612",
        "title": "新野县",
        "parentId": "7016",
        "pinyin": "xinyexian",
        "initial": "X"
    },
    {
        "id": "7017",
        "title": "信阳市",
        "parentId": "70",
        "pinyin": "xinyangshi",
        "initial": "X"
    },
    {
        "id": "701706",
        "title": "新县",
        "parentId": "7017",
        "pinyin": "xinxian",
        "initial": "X"
    },
    {
        "id": "701711",
        "title": "息县",
        "parentId": "7017",
        "pinyin": "xixian",
        "initial": "X"
    },
    {
        "id": "710114",
        "title": "新洲区",
        "parentId": "7101",
        "pinyin": "xinzhouqu",
        "initial": "X"
    },
    {
        "id": "710203",
        "title": "西塞山区",
        "parentId": "7102",
        "pinyin": "xisaishanqu",
        "initial": "X"
    },
    {
        "id": "710204",
        "title": "下陆区",
        "parentId": "7102",
        "pinyin": "xialuqu",
        "initial": "X"
    },
    {
        "id": "7103",
        "title": "襄阳市",
        "parentId": "71",
        "pinyin": "xiangyangshi",
        "initial": "X"
    },
    {
        "id": "710302",
        "title": "襄城区",
        "parentId": "7103",
        "pinyin": "xiangchengqu",
        "initial": "X"
    },
    {
        "id": "710304",
        "title": "襄州区",
        "parentId": "7103",
        "pinyin": "xiangzhouqu",
        "initial": "X"
    },
    {
        "id": "710602",
        "title": "西陵区",
        "parentId": "7106",
        "pinyin": "xilingqu",
        "initial": "X"
    },
    {
        "id": "710608",
        "title": "兴山县",
        "parentId": "7106",
        "pinyin": "xingshanxian",
        "initial": "X"
    },
    {
        "id": "7109",
        "title": "孝感市",
        "parentId": "71",
        "pinyin": "xiaoganshi",
        "initial": "X"
    },
    {
        "id": "710902",
        "title": "孝南区",
        "parentId": "7109",
        "pinyin": "xiaonanqu",
        "initial": "X"
    },
    {
        "id": "710903",
        "title": "孝昌县",
        "parentId": "7109",
        "pinyin": "xiaochangxian",
        "initial": "X"
    },
    {
        "id": "7111",
        "title": "咸宁市",
        "parentId": "71",
        "pinyin": "xianningshi",
        "initial": "X"
    },
    {
        "id": "711102",
        "title": "咸安区",
        "parentId": "7111",
        "pinyin": "xiananqu",
        "initial": "X"
    },
    {
        "id": "711305",
        "title": "宣恩县",
        "parentId": "7113",
        "pinyin": "xuanenxian",
        "initial": "X"
    },
    {
        "id": "711306",
        "title": "咸丰县",
        "parentId": "7113",
        "pinyin": "xianfengxian",
        "initial": "X"
    },
    {
        "id": "7115",
        "title": "仙桃市",
        "parentId": "71",
        "pinyin": "xiantaoshi",
        "initial": "X"
    },
    {
        "id": "7203",
        "title": "湘潭市",
        "parentId": "72",
        "pinyin": "xiangtanshi",
        "initial": "X"
    },
    {
        "id": "720304",
        "title": "湘潭县",
        "parentId": "7203",
        "pinyin": "xiangtanxian",
        "initial": "X"
    },
    {
        "id": "720305",
        "title": "湘乡市",
        "parentId": "7203",
        "pinyin": "xiangxiangshi",
        "initial": "X"
    },
    {
        "id": "720707",
        "title": "湘阴县",
        "parentId": "7207",
        "pinyin": "xiangyinxian",
        "initial": "X"
    },
    {
        "id": "720806",
        "title": "新邵县",
        "parentId": "7208",
        "pinyin": "xinshaoxian",
        "initial": "X"
    },
    {
        "id": "720811",
        "title": "新宁县",
        "parentId": "7208",
        "pinyin": "xinningxian",
        "initial": "X"
    },
    {
        "id": "721004",
        "title": "新化县",
        "parentId": "7210",
        "pinyin": "xinhuaxian",
        "initial": "X"
    },
    {
        "id": "721111",
        "title": "新田县",
        "parentId": "7211",
        "pinyin": "xintianxian",
        "initial": "X"
    },
    {
        "id": "721209",
        "title": "新晃县",
        "parentId": "7212",
        "pinyin": "xinhuangxian",
        "initial": "X"
    },
    {
        "id": "7214",
        "title": "湘西",
        "parentId": "72",
        "pinyin": "xiangxi",
        "initial": "X"
    },
    {
        "id": "8001",
        "title": "西安市",
        "parentId": "80",
        "pinyin": "xianshi",
        "initial": "X"
    },
    {
        "id": "800102",
        "title": "新城区",
        "parentId": "8001",
        "pinyin": "xinchengqu",
        "initial": "X"
    },
    {
        "id": "8003",
        "title": "咸阳市",
        "parentId": "80",
        "pinyin": "xianyangshi",
        "initial": "X"
    },
    {
        "id": "800312",
        "title": "旬邑县",
        "parentId": "8003",
        "pinyin": "xunyixian",
        "initial": "X"
    },
    {
        "id": "800315",
        "title": "兴平市",
        "parentId": "8003",
        "pinyin": "xingpingshi",
        "initial": "X"
    },
    {
        "id": "800806",
        "title": "西乡县",
        "parentId": "8008",
        "pinyin": "xixiangxian",
        "initial": "X"
    },
    {
        "id": "800910",
        "title": "旬阳县",
        "parentId": "8009",
        "pinyin": "xunyangxian",
        "initial": "X"
    },
    {
        "id": "8101",
        "title": "西宁市",
        "parentId": "81",
        "pinyin": "xiningshi",
        "initial": "X"
    },
    {
        "id": "810206",
        "title": "循化县",
        "parentId": "8102",
        "pinyin": "xunhuaxian",
        "initial": "X"
    },
    {
        "id": "810304",
        "title": "兴海县",
        "parentId": "8103",
        "pinyin": "xinghaixian",
        "initial": "X"
    },
    {
        "id": "820102",
        "title": "兴庆区",
        "parentId": "8201",
        "pinyin": "xingqingqu",
        "initial": "X"
    },
    {
        "id": "820103",
        "title": "西夏区",
        "parentId": "8201",
        "pinyin": "xixiaqu",
        "initial": "X"
    },
    {
        "id": "820403",
        "title": "西吉县",
        "parentId": "8204",
        "pinyin": "xijixian",
        "initial": "X"
    },
    {
        "id": "83",
        "title": "新疆",
        "parentId": null,
        "pinyin": "xinjiang",
        "initial": "X"
    },
    {
        "id": "830110",
        "title": "新市区(高新区)",
        "parentId": "8301",
        "pinyin": "xinshiqu(gaoxinqu)",
        "initial": "X"
    },
    {
        "id": "830207",
        "title": "新源县",
        "parentId": "8302",
        "pinyin": "xinyuanxian",
        "initial": "X"
    },
    {
        "id": "831105",
        "title": "新和县",
        "parentId": "8311",
        "pinyin": "xinhexian",
        "initial": "X"
    },
    {
        "id": "840104",
        "title": "西固区",
        "parentId": "8401",
        "pinyin": "xiguqu",
        "initial": "X"
    },
    {
        "id": "840802",
        "title": "西峰区",
        "parentId": "8408",
        "pinyin": "xifengqu",
        "initial": "X"
    },
    {
        "id": "841207",
        "title": "西和县",
        "parentId": "8412",
        "pinyin": "xihexian",
        "initial": "X"
    },
    {
        "id": "841408",
        "title": "夏河县",
        "parentId": "8414",
        "pinyin": "xiahexian",
        "initial": "X"
    },
    {
        "id": "90",
        "title": "香港",
        "parentId": null,
        "pinyin": "xianggang",
        "initial": "X"
    },
    {
        "id": "1015",
        "title": "延庆县",
        "parentId": "10",
        "pinyin": "yanqingxian",
        "initial": "Y"
    },
    {
        "id": "1019",
        "title": "亦庄开发区",
        "parentId": "10",
        "pinyin": "yizhuangkaifaqu",
        "initial": "Y"
    },
    {
        "id": "120107",
        "title": "裕华区",
        "parentId": "1201",
        "pinyin": "yuhuaqu",
        "initial": "Y"
    },
    {
        "id": "120118",
        "title": "元氏县",
        "parentId": "1201",
        "pinyin": "yuanshixian",
        "initial": "Y"
    },
    {
        "id": "120312",
        "title": "玉田县",
        "parentId": "1203",
        "pinyin": "yutianxian",
        "initial": "Y"
    },
    {
        "id": "120412",
        "title": "阳原县",
        "parentId": "1204",
        "pinyin": "yangyuanxian",
        "initial": "Y"
    },
    {
        "id": "120505",
        "title": "永清县",
        "parentId": "1205",
        "pinyin": "yongqingxian",
        "initial": "Y"
    },
    {
        "id": "120717",
        "title": "易县",
        "parentId": "1207",
        "pinyin": "yixian",
        "initial": "Y"
    },
    {
        "id": "120804",
        "title": "鹰手营子",
        "parentId": "1208",
        "pinyin": "yingshouyingzi",
        "initial": "Y"
    },
    {
        "id": "121003",
        "title": "运河区",
        "parentId": "1210",
        "pinyin": "yunhequ",
        "initial": "Y"
    },
    {
        "id": "121008",
        "title": "盐山县",
        "parentId": "1210",
        "pinyin": "yanshanxian",
        "initial": "Y"
    },
    {
        "id": "121113",
        "title": "永年县",
        "parentId": "1211",
        "pinyin": "yongnianxian",
        "initial": "Y"
    },
    {
        "id": "130104",
        "title": "玉泉区",
        "parentId": "1301",
        "pinyin": "yuquanqu",
        "initial": "Y"
    },
    {
        "id": "130311",
        "title": "牙克石市",
        "parentId": "1303",
        "pinyin": "yakeshishi",
        "initial": "Y"
    },
    {
        "id": "130603",
        "title": "元宝山区",
        "parentId": "1306",
        "pinyin": "yuanbaoshanqu",
        "initial": "Y"
    },
    {
        "id": "130909",
        "title": "伊金霍洛旗",
        "parentId": "1309",
        "pinyin": "yijinhuoluoqi",
        "initial": "Y"
    },
    {
        "id": "140103",
        "title": "迎泽区",
        "parentId": "1401",
        "pinyin": "yingzequ",
        "initial": "Y"
    },
    {
        "id": "140109",
        "title": "阳曲县",
        "parentId": "1401",
        "pinyin": "yangquxian",
        "initial": "Y"
    },
    {
        "id": "140206",
        "title": "阳高县",
        "parentId": "1402",
        "pinyin": "yanggaoxian",
        "initial": "Y"
    },
    {
        "id": "1403",
        "title": "阳泉市",
        "parentId": "14",
        "pinyin": "yangquanshi",
        "initial": "Y"
    },
    {
        "id": "140306",
        "title": "盂县",
        "parentId": "1403",
        "pinyin": "yuxian",
        "initial": "Y"
    },
    {
        "id": "140504",
        "title": "阳城县",
        "parentId": "1405",
        "pinyin": "yangchengxian",
        "initial": "Y"
    },
    {
        "id": "140605",
        "title": "应县",
        "parentId": "1406",
        "pinyin": "yingxian",
        "initial": "Y"
    },
    {
        "id": "140606",
        "title": "右玉县",
        "parentId": "1406",
        "pinyin": "youyuxian",
        "initial": "Y"
    },
    {
        "id": "140715",
        "title": "原平市",
        "parentId": "1407",
        "pinyin": "yuanpingshi",
        "initial": "Y"
    },
    {
        "id": "140802",
        "title": "榆次区",
        "parentId": "1408",
        "pinyin": "yuciqu",
        "initial": "Y"
    },
    {
        "id": "140803",
        "title": "榆社县",
        "parentId": "1408",
        "pinyin": "yushexian",
        "initial": "Y"
    },
    {
        "id": "140902",
        "title": "尧都区",
        "parentId": "1409",
        "pinyin": "yaoduqu",
        "initial": "Y"
    },
    {
        "id": "140904",
        "title": "翼城县",
        "parentId": "1409",
        "pinyin": "yichengxian",
        "initial": "Y"
    },
    {
        "id": "140914",
        "title": "永和县",
        "parentId": "1409",
        "pinyin": "yonghexian",
        "initial": "Y"
    },
    {
        "id": "1411",
        "title": "运城市",
        "parentId": "14",
        "pinyin": "yunchengshi",
        "initial": "Y"
    },
    {
        "id": "141102",
        "title": "盐湖区",
        "parentId": "1411",
        "pinyin": "yanhuqu",
        "initial": "Y"
    },
    {
        "id": "141109",
        "title": "垣曲县",
        "parentId": "1411",
        "pinyin": "yuanquxian",
        "initial": "Y"
    },
    {
        "id": "141113",
        "title": "永济市",
        "parentId": "1411",
        "pinyin": "yongjishi",
        "initial": "Y"
    },
    {
        "id": "200110",
        "title": "于洪区",
        "parentId": "2001",
        "pinyin": "yuhongqu",
        "initial": "Y"
    },
    {
        "id": "200406",
        "title": "义县",
        "parentId": "2004",
        "pinyin": "yixian",
        "initial": "Y"
    },
    {
        "id": "200502",
        "title": "元宝区",
        "parentId": "2005",
        "pinyin": "yuanbaoqu",
        "initial": "Y"
    },
    {
        "id": "200702",
        "title": "银州区",
        "parentId": "2007",
        "pinyin": "yinzhouqu",
        "initial": "Y"
    },
    {
        "id": "2009",
        "title": "营口市",
        "parentId": "20",
        "pinyin": "yingkoushi",
        "initial": "Y"
    },
    {
        "id": "210110",
        "title": "榆树市",
        "parentId": "2101",
        "pinyin": "yushushi",
        "initial": "Y"
    },
    {
        "id": "210206",
        "title": "永吉县",
        "parentId": "2102",
        "pinyin": "yongjixian",
        "initial": "Y"
    },
    {
        "id": "210305",
        "title": "伊通县",
        "parentId": "2103",
        "pinyin": "yitongxian",
        "initial": "Y"
    },
    {
        "id": "2109",
        "title": "延边州",
        "parentId": "21",
        "pinyin": "yanbianzhou",
        "initial": "Y"
    },
    {
        "id": "210901",
        "title": "延吉市",
        "parentId": "2109",
        "pinyin": "yanjishi",
        "initial": "Y"
    },
    {
        "id": "220110",
        "title": "依兰县",
        "parentId": "2201",
        "pinyin": "yilanxian",
        "initial": "Y"
    },
    {
        "id": "220116",
        "title": "延寿县",
        "parentId": "2201",
        "pinyin": "yanshouxian",
        "initial": "Y"
    },
    {
        "id": "220210",
        "title": "依安县",
        "parentId": "2202",
        "pinyin": "yianxian",
        "initial": "Y"
    },
    {
        "id": "220507",
        "title": "友谊县",
        "parentId": "2205",
        "pinyin": "youyixian",
        "initial": "Y"
    },
    {
        "id": "2207",
        "title": "伊春市",
        "parentId": "22",
        "pinyin": "yichunshi",
        "initial": "Y"
    },
    {
        "id": "220702",
        "title": "伊春区",
        "parentId": "2207",
        "pinyin": "yichunqu",
        "initial": "Y"
    },
    {
        "id": "220704",
        "title": "友好区",
        "parentId": "2207",
        "pinyin": "youhaoqu",
        "initial": "Y"
    },
    {
        "id": "221003",
        "title": "阳明区",
        "parentId": "2210",
        "pinyin": "yangmingqu",
        "initial": "Y"
    },
    {
        "id": "3012",
        "title": "杨浦区",
        "parentId": "30",
        "pinyin": "yangpuqu",
        "initial": "Y"
    },
    {
        "id": "310110",
        "title": "雨花台区",
        "parentId": "3101",
        "pinyin": "yuhuataiqu",
        "initial": "Y"
    },
    {
        "id": "310309",
        "title": "宜兴市",
        "parentId": "3103",
        "pinyin": "yixingshi",
        "initial": "Y"
    },
    {
        "id": "310406",
        "title": "扬中市",
        "parentId": "3104",
        "pinyin": "yangzhongshi",
        "initial": "Y"
    },
    {
        "id": "3105",
        "title": "扬州市",
        "parentId": "31",
        "pinyin": "yangzhoushi",
        "initial": "Y"
    },
    {
        "id": "310506",
        "title": "仪征市",
        "parentId": "3105",
        "pinyin": "yizhengshi",
        "initial": "Y"
    },
    {
        "id": "310803",
        "title": "云龙区",
        "parentId": "3108",
        "pinyin": "yunlongqu",
        "initial": "Y"
    },
    {
        "id": "3110",
        "title": "盐城市",
        "parentId": "31",
        "pinyin": "yanchengshi",
        "initial": "Y"
    },
    {
        "id": "311003",
        "title": "盐都区",
        "parentId": "3110",
        "pinyin": "yanduqu",
        "initial": "Y"
    },
    {
        "id": "3203",
        "title": "烟台市",
        "parentId": "32",
        "pinyin": "yantaishi",
        "initial": "Y"
    },
    {
        "id": "320409",
        "title": "沂源县",
        "parentId": "3204",
        "pinyin": "yiyuanxian",
        "initial": "Y"
    },
    {
        "id": "320705",
        "title": "鱼台县",
        "parentId": "3207",
        "pinyin": "yutaixian",
        "initial": "Y"
    },
    {
        "id": "320912",
        "title": "禹城市",
        "parentId": "3209",
        "pinyin": "yuchengshi",
        "initial": "Y"
    },
    {
        "id": "321304",
        "title": "阳信县",
        "parentId": "3213",
        "pinyin": "yangxinxian",
        "initial": "Y"
    },
    {
        "id": "321503",
        "title": "阳谷县",
        "parentId": "3215",
        "pinyin": "yangguxian",
        "initial": "Y"
    },
    {
        "id": "321705",
        "title": "沂南县",
        "parentId": "3217",
        "pinyin": "yinanxian",
        "initial": "Y"
    },
    {
        "id": "321707",
        "title": "沂水县",
        "parentId": "3217",
        "pinyin": "yishuixian",
        "initial": "Y"
    },
    {
        "id": "330102",
        "title": "瑶海区",
        "parentId": "3301",
        "pinyin": "yaohaiqu",
        "initial": "Y"
    },
    {
        "id": "330304",
        "title": "禹会区",
        "parentId": "3303",
        "pinyin": "yuhuiqu",
        "initial": "Y"
    },
    {
        "id": "330404",
        "title": "雨山区",
        "parentId": "3304",
        "pinyin": "yushanqu",
        "initial": "Y"
    },
    {
        "id": "330702",
        "title": "迎江区",
        "parentId": "3307",
        "pinyin": "yingjiangqu",
        "initial": "Y"
    },
    {
        "id": "330704",
        "title": "宜秀区",
        "parentId": "3307",
        "pinyin": "yixiuqu",
        "initial": "Y"
    },
    {
        "id": "330711",
        "title": "岳西县",
        "parentId": "3307",
        "pinyin": "yuexixian",
        "initial": "Y"
    },
    {
        "id": "331503",
        "title": "裕安区",
        "parentId": "3315",
        "pinyin": "yuanqu",
        "initial": "Y"
    },
    {
        "id": "340111",
        "title": "永泰县",
        "parentId": "3401",
        "pinyin": "yongtaixian",
        "initial": "Y"
    },
    {
        "id": "340304",
        "title": "云霄县",
        "parentId": "3403",
        "pinyin": "yunxiaoxian",
        "initial": "Y"
    },
    {
        "id": "340408",
        "title": "永春县",
        "parentId": "3404",
        "pinyin": "yongchunxian",
        "initial": "Y"
    },
    {
        "id": "340608",
        "title": "尤溪县",
        "parentId": "3406",
        "pinyin": "youxixian",
        "initial": "Y"
    },
    {
        "id": "340613",
        "title": "永安市",
        "parentId": "3406",
        "pinyin": "yonganshi",
        "initial": "Y"
    },
    {
        "id": "340702",
        "title": "延平区",
        "parentId": "3407",
        "pinyin": "yanpingqu",
        "initial": "Y"
    },
    {
        "id": "340804",
        "title": "永定县",
        "parentId": "3408",
        "pinyin": "yongdingxian",
        "initial": "Y"
    },
    {
        "id": "350109",
        "title": "余杭区",
        "parentId": "3501",
        "pinyin": "yuhangqu",
        "initial": "Y"
    },
    {
        "id": "350210",
        "title": "余姚市",
        "parentId": "3502",
        "pinyin": "yuyaoshi",
        "initial": "Y"
    },
    {
        "id": "350306",
        "title": "永嘉县",
        "parentId": "3503",
        "pinyin": "yongjiaxian",
        "initial": "Y"
    },
    {
        "id": "350602",
        "title": "越城区",
        "parentId": "3506",
        "pinyin": "yuechengqu",
        "initial": "Y"
    },
    {
        "id": "350708",
        "title": "义乌市",
        "parentId": "3507",
        "pinyin": "yiwushi",
        "initial": "Y"
    },
    {
        "id": "350710",
        "title": "永康市",
        "parentId": "3507",
        "pinyin": "yongkangshi",
        "initial": "Y"
    },
    {
        "id": "351005",
        "title": "玉环县",
        "parentId": "3510",
        "pinyin": "yuhuanxian",
        "initial": "Y"
    },
    {
        "id": "351107",
        "title": "云和县",
        "parentId": "3511",
        "pinyin": "yunhexian",
        "initial": "Y"
    },
    {
        "id": "360407",
        "title": "永修县",
        "parentId": "3604",
        "pinyin": "yongxiuxian",
        "initial": "Y"
    },
    {
        "id": "360502",
        "title": "渝水区",
        "parentId": "3605",
        "pinyin": "yushuiqu",
        "initial": "Y"
    },
    {
        "id": "3606",
        "title": "鹰潭市",
        "parentId": "36",
        "pinyin": "yingtanshi",
        "initial": "Y"
    },
    {
        "id": "360602",
        "title": "月湖区",
        "parentId": "3606",
        "pinyin": "yuehuqu",
        "initial": "Y"
    },
    {
        "id": "360603",
        "title": "余江县",
        "parentId": "3606",
        "pinyin": "yujiangxian",
        "initial": "Y"
    },
    {
        "id": "360713",
        "title": "于都县",
        "parentId": "3607",
        "pinyin": "yuduxian",
        "initial": "Y"
    },
    {
        "id": "360808",
        "title": "永丰县",
        "parentId": "3608",
        "pinyin": "yongfengxian",
        "initial": "Y"
    },
    {
        "id": "360813",
        "title": "永新县",
        "parentId": "3608",
        "pinyin": "yongxinxian",
        "initial": "Y"
    },
    {
        "id": "3609",
        "title": "宜春市",
        "parentId": "36",
        "pinyin": "yichunshi1",
        "initial": "Y"
    },
    {
        "id": "360902",
        "title": "袁州区",
        "parentId": "3609",
        "pinyin": "yuanzhouqu",
        "initial": "Y"
    },
    {
        "id": "360906",
        "title": "宜丰县",
        "parentId": "3609",
        "pinyin": "yifengxian",
        "initial": "Y"
    },
    {
        "id": "361008",
        "title": "宜黄县",
        "parentId": "3610",
        "pinyin": "yihuangxian",
        "initial": "Y"
    },
    {
        "id": "361105",
        "title": "玉山县",
        "parentId": "3611",
        "pinyin": "yushanxian",
        "initial": "Y"
    },
    {
        "id": "361109",
        "title": "余干县",
        "parentId": "3611",
        "pinyin": "yuganxian",
        "initial": "Y"
    },
    {
        "id": "400103",
        "title": "越秀区",
        "parentId": "4001",
        "pinyin": "yuexiuqu",
        "initial": "Y"
    },
    {
        "id": "400207",
        "title": "盐田区",
        "parentId": "4002",
        "pinyin": "yantianqu",
        "initial": "Y"
    },
    {
        "id": "400602",
        "title": "源城区",
        "parentId": "4006",
        "pinyin": "yuanchengqu",
        "initial": "Y"
    },
    {
        "id": "4014",
        "title": "阳江市",
        "parentId": "40",
        "pinyin": "yangjiangshi",
        "initial": "Y"
    },
    {
        "id": "401403",
        "title": "阳西县",
        "parentId": "4014",
        "pinyin": "yangxixian",
        "initial": "Y"
    },
    {
        "id": "401404",
        "title": "阳东县",
        "parentId": "4014",
        "pinyin": "yangdongxian",
        "initial": "Y"
    },
    {
        "id": "401405",
        "title": "阳春市",
        "parentId": "4014",
        "pinyin": "yangchunshi",
        "initial": "Y"
    },
    {
        "id": "401804",
        "title": "阳山县",
        "parentId": "4018",
        "pinyin": "yangshanxian",
        "initial": "Y"
    },
    {
        "id": "401808",
        "title": "英德市",
        "parentId": "4018",
        "pinyin": "yingdeshi",
        "initial": "Y"
    },
    {
        "id": "4021",
        "title": "云浮市",
        "parentId": "40",
        "pinyin": "yunfushi",
        "initial": "Y"
    },
    {
        "id": "402102",
        "title": "云城区",
        "parentId": "4021",
        "pinyin": "yunchengqu",
        "initial": "Y"
    },
    {
        "id": "402104",
        "title": "郁南县",
        "parentId": "4021",
        "pinyin": "yunanxian",
        "initial": "Y"
    },
    {
        "id": "402105",
        "title": "云安县",
        "parentId": "4021",
        "pinyin": "yunanxian",
        "initial": "Y"
    },
    {
        "id": "410203",
        "title": "鱼峰区",
        "parentId": "4102",
        "pinyin": "yufengqu",
        "initial": "Y"
    },
    {
        "id": "410306",
        "title": "雁山区",
        "parentId": "4103",
        "pinyin": "yanshanqu",
        "initial": "Y"
    },
    {
        "id": "410307",
        "title": "阳朔县",
        "parentId": "4103",
        "pinyin": "yangshuoxian",
        "initial": "Y"
    },
    {
        "id": "410312",
        "title": "永福县",
        "parentId": "4103",
        "pinyin": "yongfuxian",
        "initial": "Y"
    },
    {
        "id": "410503",
        "title": "银海区",
        "parentId": "4105",
        "pinyin": "yinhaiqu",
        "initial": "Y"
    },
    {
        "id": "4109",
        "title": "玉林市",
        "parentId": "41",
        "pinyin": "yulinshi",
        "initial": "Y"
    },
    {
        "id": "410902",
        "title": "玉州区",
        "parentId": "4109",
        "pinyin": "yuzhouqu",
        "initial": "Y"
    },
    {
        "id": "411002",
        "title": "右江区",
        "parentId": "4110",
        "pinyin": "youjiangqu",
        "initial": "Y"
    },
    {
        "id": "411212",
        "title": "宜州市",
        "parentId": "4112",
        "pinyin": "yizhoushi",
        "initial": "Y"
    },
    {
        "id": "4219",
        "title": "洋浦",
        "parentId": "42",
        "pinyin": "yangpu",
        "initial": "Y"
    },
    {
        "id": "6003",
        "title": "渝中区",
        "parentId": "60",
        "pinyin": "yuzhongqu",
        "initial": "Y"
    },
    {
        "id": "6012",
        "title": "渝北区",
        "parentId": "60",
        "pinyin": "yubeiqu",
        "initial": "Y"
    },
    {
        "id": "6018",
        "title": "永川区",
        "parentId": "60",
        "pinyin": "yongchuanqu",
        "initial": "Y"
    },
    {
        "id": "6033",
        "title": "云阳县",
        "parentId": "60",
        "pinyin": "yunyangxian",
        "initial": "Y"
    },
    {
        "id": "6039",
        "title": "酉阳县",
        "parentId": "60",
        "pinyin": "youyangxian",
        "initial": "Y"
    },
    {
        "id": "610303",
        "title": "游仙区",
        "parentId": "6103",
        "pinyin": "youxianqu",
        "initial": "Y"
    },
    {
        "id": "610305",
        "title": "盐亭县",
        "parentId": "6103",
        "pinyin": "yantingxian",
        "initial": "Y"
    },
    {
        "id": "610606",
        "title": "营山县",
        "parentId": "6106",
        "pinyin": "yingshanxian",
        "initial": "Y"
    },
    {
        "id": "610608",
        "title": "仪陇县",
        "parentId": "6106",
        "pinyin": "yilongxian",
        "initial": "Y"
    },
    {
        "id": "610705",
        "title": "沿滩区",
        "parentId": "6107",
        "pinyin": "yantanqu",
        "initial": "Y"
    },
    {
        "id": "6109",
        "title": "宜宾市",
        "parentId": "61",
        "pinyin": "yibinshi",
        "initial": "Y"
    },
    {
        "id": "610903",
        "title": "宜宾县",
        "parentId": "6109",
        "pinyin": "yibinxian",
        "initial": "Y"
    },
    {
        "id": "6111",
        "title": "雅安市",
        "parentId": "61",
        "pinyin": "yaanshi",
        "initial": "Y"
    },
    {
        "id": "611102",
        "title": "雨城区",
        "parentId": "6111",
        "pinyin": "yuchengqu",
        "initial": "Y"
    },
    {
        "id": "611503",
        "title": "元坝区",
        "parentId": "6115",
        "pinyin": "yuanbaqu",
        "initial": "Y"
    },
    {
        "id": "611603",
        "title": "岳池县",
        "parentId": "6116",
        "pinyin": "yuechixian",
        "initial": "Y"
    },
    {
        "id": "611702",
        "title": "雁江区",
        "parentId": "6117",
        "pinyin": "yanjiangqu",
        "initial": "Y"
    },
    {
        "id": "611906",
        "title": "盐边县",
        "parentId": "6119",
        "pinyin": "yanbianxian",
        "initial": "Y"
    },
    {
        "id": "612005",
        "title": "雅江县",
        "parentId": "6120",
        "pinyin": "yajiangxian",
        "initial": "Y"
    },
    {
        "id": "612103",
        "title": "盐源县",
        "parentId": "6121",
        "pinyin": "yanyuanxian",
        "initial": "Y"
    },
    {
        "id": "612114",
        "title": "越西县",
        "parentId": "6121",
        "pinyin": "yuexixian",
        "initial": "Y"
    },
    {
        "id": "62",
        "title": "云南省",
        "parentId": null,
        "pinyin": "yunnansheng",
        "initial": "Y"
    },
    {
        "id": "620110",
        "title": "宜良县",
        "parentId": "6201",
        "pinyin": "yiliangxian",
        "initial": "Y"
    },
    {
        "id": "6203",
        "title": "玉溪市",
        "parentId": "62",
        "pinyin": "yuxishi",
        "initial": "Y"
    },
    {
        "id": "620307",
        "title": "易门县",
        "parentId": "6203",
        "pinyin": "yimenxian",
        "initial": "Y"
    },
    {
        "id": "620310",
        "title": "元江哈尼族县",
        "parentId": "6203",
        "pinyin": "yuanjianghanizuxian",
        "initial": "Y"
    },
    {
        "id": "620405",
        "title": "盐津县",
        "parentId": "6204",
        "pinyin": "yanjinxian",
        "initial": "Y"
    },
    {
        "id": "620407",
        "title": "永善县",
        "parentId": "6204",
        "pinyin": "yongshanxian",
        "initial": "Y"
    },
    {
        "id": "620410",
        "title": "彝良县",
        "parentId": "6204",
        "pinyin": "yiliangxian",
        "initial": "Y"
    },
    {
        "id": "620505",
        "title": "姚安县",
        "parentId": "6205",
        "pinyin": "yaoanxian",
        "initial": "Y"
    },
    {
        "id": "620507",
        "title": "永仁县",
        "parentId": "6205",
        "pinyin": "yongrenxian",
        "initial": "Y"
    },
    {
        "id": "620508",
        "title": "元谋县",
        "parentId": "6205",
        "pinyin": "yuanmouxian",
        "initial": "Y"
    },
    {
        "id": "620609",
        "title": "元阳县",
        "parentId": "6206",
        "pinyin": "yuanyangxian",
        "initial": "Y"
    },
    {
        "id": "620703",
        "title": "玉龙县",
        "parentId": "6207",
        "pinyin": "yulongxian",
        "initial": "Y"
    },
    {
        "id": "620704",
        "title": "永胜县",
        "parentId": "6207",
        "pinyin": "yongshengxian",
        "initial": "Y"
    },
    {
        "id": "620902",
        "title": "砚山县",
        "parentId": "6209",
        "pinyin": "yanshanxian",
        "initial": "Y"
    },
    {
        "id": "621202",
        "title": "漾濞县",
        "parentId": "6212",
        "pinyin": "yangzuoxian",
        "initial": "Y"
    },
    {
        "id": "621208",
        "title": "永平县",
        "parentId": "6212",
        "pinyin": "yongpingxian",
        "initial": "Y"
    },
    {
        "id": "621209",
        "title": "云龙县",
        "parentId": "6212",
        "pinyin": "yunlongxian",
        "initial": "Y"
    },
    {
        "id": "621404",
        "title": "盈江县",
        "parentId": "6214",
        "pinyin": "yingjiangxian",
        "initial": "Y"
    },
    {
        "id": "621604",
        "title": "云县",
        "parentId": "6216",
        "pinyin": "yunxian",
        "initial": "Y"
    },
    {
        "id": "621605",
        "title": "永德县",
        "parentId": "6216",
        "pinyin": "yongdexian",
        "initial": "Y"
    },
    {
        "id": "630103",
        "title": "云岩区",
        "parentId": "6301",
        "pinyin": "yunyanqu",
        "initial": "Y"
    },
    {
        "id": "630212",
        "title": "余庆县",
        "parentId": "6302",
        "pinyin": "yuqingxian",
        "initial": "Y"
    },
    {
        "id": "630703",
        "title": "玉屏县",
        "parentId": "6307",
        "pinyin": "yupingxian",
        "initial": "Y"
    },
    {
        "id": "630706",
        "title": "印江县",
        "parentId": "6307",
        "pinyin": "yinjiangxian",
        "initial": "Y"
    },
    {
        "id": "630708",
        "title": "沿河县",
        "parentId": "6307",
        "pinyin": "yanhexian",
        "initial": "Y"
    },
    {
        "id": "640214",
        "title": "亚东县",
        "parentId": "6402",
        "pinyin": "yadongxian",
        "initial": "Y"
    },
    {
        "id": "700213",
        "title": "宜阳县",
        "parentId": "7002",
        "pinyin": "yiyangxian",
        "initial": "Y"
    },
    {
        "id": "700215",
        "title": "伊川县",
        "parentId": "7002",
        "pinyin": "yichuanxian",
        "initial": "Y"
    },
    {
        "id": "700305",
        "title": "禹王台区",
        "parentId": "7003",
        "pinyin": "yuwangtaiqu",
        "initial": "Y"
    },
    {
        "id": "700404",
        "title": "殷都区",
        "parentId": "7004",
        "pinyin": "yinduqu",
        "initial": "Y"
    },
    {
        "id": "700508",
        "title": "原阳县",
        "parentId": "7005",
        "pinyin": "yuanyangxian",
        "initial": "Y"
    },
    {
        "id": "700509",
        "title": "延津县",
        "parentId": "7005",
        "pinyin": "yanjinxian",
        "initial": "Y"
    },
    {
        "id": "700906",
        "title": "义马市",
        "parentId": "7009",
        "pinyin": "yimashi",
        "initial": "Y"
    },
    {
        "id": "701008",
        "title": "虞城县",
        "parentId": "7010",
        "pinyin": "yuchengxian",
        "initial": "Y"
    },
    {
        "id": "701010",
        "title": "永城市",
        "parentId": "7010",
        "pinyin": "yongchengshi",
        "initial": "Y"
    },
    {
        "id": "701106",
        "title": "禹州市",
        "parentId": "7011",
        "pinyin": "yuzhoushi",
        "initial": "Y"
    },
    {
        "id": "701202",
        "title": "源汇区",
        "parentId": "7012",
        "pinyin": "yuanhuiqu",
        "initial": "Y"
    },
    {
        "id": "701307",
        "title": "叶县",
        "parentId": "7013",
        "pinyin": "yexian",
        "initial": "Y"
    },
    {
        "id": "710206",
        "title": "阳新县",
        "parentId": "7102",
        "pinyin": "yangxinxian",
        "initial": "Y"
    },
    {
        "id": "710310",
        "title": "宜城市",
        "parentId": "7103",
        "pinyin": "yichengshi",
        "initial": "Y"
    },
    {
        "id": "710404",
        "title": "郧县",
        "parentId": "7104",
        "pinyin": "yunxian",
        "initial": "Y"
    },
    {
        "id": "710405",
        "title": "郧西县",
        "parentId": "7104",
        "pinyin": "yunxixian",
        "initial": "Y"
    },
    {
        "id": "7106",
        "title": "宜昌市",
        "parentId": "71",
        "pinyin": "yichangshi",
        "initial": "Y"
    },
    {
        "id": "710606",
        "title": "夷陵区",
        "parentId": "7106",
        "pinyin": "yilingqu",
        "initial": "Y"
    },
    {
        "id": "710607",
        "title": "远安县",
        "parentId": "7106",
        "pinyin": "yuananxian",
        "initial": "Y"
    },
    {
        "id": "710612",
        "title": "宜都市",
        "parentId": "7106",
        "pinyin": "yidushi",
        "initial": "Y"
    },
    {
        "id": "710905",
        "title": "云梦县",
        "parentId": "7109",
        "pinyin": "yunmengxian",
        "initial": "Y"
    },
    {
        "id": "710906",
        "title": "应城市",
        "parentId": "7109",
        "pinyin": "yingchengshi",
        "initial": "Y"
    },
    {
        "id": "711006",
        "title": "英山县",
        "parentId": "7110",
        "pinyin": "yingshanxian",
        "initial": "Y"
    },
    {
        "id": "720104",
        "title": "岳麓区",
        "parentId": "7201",
        "pinyin": "yueluqu",
        "initial": "Y"
    },
    {
        "id": "720106",
        "title": "雨花区",
        "parentId": "7201",
        "pinyin": "yuhuaqu",
        "initial": "Y"
    },
    {
        "id": "720209",
        "title": "炎陵县",
        "parentId": "7202",
        "pinyin": "yanlingxian",
        "initial": "Y"
    },
    {
        "id": "720302",
        "title": "雨湖区",
        "parentId": "7203",
        "pinyin": "yuhuqu",
        "initial": "Y"
    },
    {
        "id": "720303",
        "title": "岳塘区",
        "parentId": "7203",
        "pinyin": "yuetangqu",
        "initial": "Y"
    },
    {
        "id": "720403",
        "title": "雁峰区",
        "parentId": "7204",
        "pinyin": "yanfengqu",
        "initial": "Y"
    },
    {
        "id": "7205",
        "title": "益阳市",
        "parentId": "72",
        "pinyin": "yiyangshi",
        "initial": "Y"
    },
    {
        "id": "7207",
        "title": "岳阳市",
        "parentId": "72",
        "pinyin": "yueyangshi",
        "initial": "Y"
    },
    {
        "id": "720702",
        "title": "岳阳楼区",
        "parentId": "7207",
        "pinyin": "yueyanglouqu",
        "initial": "Y"
    },
    {
        "id": "720703",
        "title": "云溪区",
        "parentId": "7207",
        "pinyin": "yunxiqu",
        "initial": "Y"
    },
    {
        "id": "720705",
        "title": "岳阳县",
        "parentId": "7207",
        "pinyin": "yueyangxian",
        "initial": "Y"
    },
    {
        "id": "720905",
        "title": "宜章县",
        "parentId": "7209",
        "pinyin": "yizhangxian",
        "initial": "Y"
    },
    {
        "id": "720906",
        "title": "永兴县",
        "parentId": "7209",
        "pinyin": "yongxingxian",
        "initial": "Y"
    },
    {
        "id": "7211",
        "title": "永州市",
        "parentId": "72",
        "pinyin": "yongzhoushi",
        "initial": "Y"
    },
    {
        "id": "721302",
        "title": "永定区",
        "parentId": "7213",
        "pinyin": "yongdingqu",
        "initial": "Y"
    },
    {
        "id": "721407",
        "title": "永顺县",
        "parentId": "7214",
        "pinyin": "yongshunxian",
        "initial": "Y"
    },
    {
        "id": "800107",
        "title": "雁塔区",
        "parentId": "8001",
        "pinyin": "yantaqu",
        "initial": "Y"
    },
    {
        "id": "800108",
        "title": "阎良区",
        "parentId": "8001",
        "pinyin": "yanliangqu",
        "initial": "Y"
    },
    {
        "id": "800309",
        "title": "永寿县",
        "parentId": "8003",
        "pinyin": "yongshouxian",
        "initial": "Y"
    },
    {
        "id": "8005",
        "title": "延安市",
        "parentId": "80",
        "pinyin": "yananshi",
        "initial": "Y"
    },
    {
        "id": "800503",
        "title": "延长县",
        "parentId": "8005",
        "pinyin": "yanchangxian",
        "initial": "Y"
    },
    {
        "id": "800504",
        "title": "延川县",
        "parentId": "8005",
        "pinyin": "yanchuanxian",
        "initial": "Y"
    },
    {
        "id": "800512",
        "title": "宜川县",
        "parentId": "8005",
        "pinyin": "yichuanxian",
        "initial": "Y"
    },
    {
        "id": "8006",
        "title": "榆林市",
        "parentId": "80",
        "pinyin": "yulinshi1",
        "initial": "Y"
    },
    {
        "id": "800602",
        "title": "榆阳区",
        "parentId": "8006",
        "pinyin": "yuyangqu",
        "initial": "Y"
    },
    {
        "id": "800703",
        "title": "印台区",
        "parentId": "8007",
        "pinyin": "yintaiqu",
        "initial": "Y"
    },
    {
        "id": "800704",
        "title": "耀州区",
        "parentId": "8007",
        "pinyin": "yaozhouqu",
        "initial": "Y"
    },
    {
        "id": "800705",
        "title": "宜君县",
        "parentId": "8007",
        "pinyin": "yijunxian",
        "initial": "Y"
    },
    {
        "id": "800805",
        "title": "洋县",
        "parentId": "8008",
        "pinyin": "yangxian",
        "initial": "Y"
    },
    {
        "id": "8011",
        "title": "杨凌",
        "parentId": "80",
        "pinyin": "yangling",
        "initial": "Y"
    },
    {
        "id": "8108",
        "title": "玉树州",
        "parentId": "81",
        "pinyin": "yushuzhou",
        "initial": "Y"
    },
    {
        "id": "810801",
        "title": "玉树县",
        "parentId": "8108",
        "pinyin": "yushuxian",
        "initial": "Y"
    },
    {
        "id": "8201",
        "title": "银川市",
        "parentId": "82",
        "pinyin": "yinchuanshi",
        "initial": "Y"
    },
    {
        "id": "820105",
        "title": "永宁县",
        "parentId": "8201",
        "pinyin": "yongningxian",
        "initial": "Y"
    },
    {
        "id": "820303",
        "title": "盐池县",
        "parentId": "8203",
        "pinyin": "yanchixian",
        "initial": "Y"
    },
    {
        "id": "820402",
        "title": "原州区",
        "parentId": "8204",
        "pinyin": "yuanzhouqu",
        "initial": "Y"
    },
    {
        "id": "8302",
        "title": "伊犁州",
        "parentId": "83",
        "pinyin": "yilizhou",
        "initial": "Y"
    },
    {
        "id": "830201",
        "title": "伊宁市",
        "parentId": "8302",
        "pinyin": "yiningshi",
        "initial": "Y"
    },
    {
        "id": "830203",
        "title": "伊宁县",
        "parentId": "8302",
        "pinyin": "yiningxian",
        "initial": "Y"
    },
    {
        "id": "830406",
        "title": "裕民县",
        "parentId": "8304",
        "pinyin": "yuminxian",
        "initial": "Y"
    },
    {
        "id": "830806",
        "title": "焉耆县",
        "parentId": "8308",
        "pinyin": "yanzuoxian",
        "initial": "Y"
    },
    {
        "id": "830903",
        "title": "伊吾县",
        "parentId": "8309",
        "pinyin": "yiwuxian",
        "initial": "Y"
    },
    {
        "id": "831007",
        "title": "于田县",
        "parentId": "8310",
        "pinyin": "yutianxian",
        "initial": "Y"
    },
    {
        "id": "831304",
        "title": "英吉沙县",
        "parentId": "8313",
        "pinyin": "yingjishaxian",
        "initial": "Y"
    },
    {
        "id": "831307",
        "title": "叶城县",
        "parentId": "8313",
        "pinyin": "yechengxian",
        "initial": "Y"
    },
    {
        "id": "831309",
        "title": "岳普湖县",
        "parentId": "8313",
        "pinyin": "yuepuhuxian",
        "initial": "Y"
    },
    {
        "id": "840107",
        "title": "永登县",
        "parentId": "8401",
        "pinyin": "yongdengxian",
        "initial": "Y"
    },
    {
        "id": "840109",
        "title": "榆中县",
        "parentId": "8401",
        "pinyin": "yuzhongxian",
        "initial": "Y"
    },
    {
        "id": "840503",
        "title": "永昌县",
        "parentId": "8405",
        "pinyin": "yongchangxian",
        "initial": "Y"
    },
    {
        "id": "840607",
        "title": "玉门市",
        "parentId": "8406",
        "pinyin": "yumenshi",
        "initial": "Y"
    },
    {
        "id": "841304",
        "title": "永靖县",
        "parentId": "8413",
        "pinyin": "yongjingxian",
        "initial": "Y"
    },
    {
        "id": "120109",
        "title": "正定县",
        "parentId": "1201",
        "pinyin": "zhengdingxian",
        "initial": "Z"
    },
    {
        "id": "120110",
        "title": "栾城县",
        "parentId": "1201",
        "pinyin": "zuochengxian",
        "initial": "Z"
    },
    {
        "id": "120115",
        "title": "赞皇县",
        "parentId": "1201",
        "pinyin": "zanhuangxian",
        "initial": "Z"
    },
    {
        "id": "120119",
        "title": "赵县",
        "parentId": "1201",
        "pinyin": "zhaoxian",
        "initial": "Z"
    },
    {
        "id": "120121",
        "title": "藁城市",
        "parentId": "1201",
        "pinyin": "zuochengshi",
        "initial": "Z"
    },
    {
        "id": "120314",
        "title": "遵化市",
        "parentId": "1203",
        "pinyin": "zunhuashi",
        "initial": "Z"
    },
    {
        "id": "1204",
        "title": "张家口市",
        "parentId": "12",
        "pinyin": "zhangjiakoushi",
        "initial": "Z"
    },
    {
        "id": "120407",
        "title": "张北县",
        "parentId": "1204",
        "pinyin": "zhangbeixian",
        "initial": "Z"
    },
    {
        "id": "120416",
        "title": "涿鹿县",
        "parentId": "1204",
        "pinyin": "zuoluxian",
        "initial": "Z"
    },
    {
        "id": "120603",
        "title": "枣强县",
        "parentId": "1206",
        "pinyin": "zaoqiangxian",
        "initial": "Z"
    },
    {
        "id": "120707",
        "title": "涞水县",
        "parentId": "1207",
        "pinyin": "zuoshuixian",
        "initial": "Z"
    },
    {
        "id": "120714",
        "title": "涞源县",
        "parentId": "1207",
        "pinyin": "zuoyuanxian",
        "initial": "Z"
    },
    {
        "id": "120719",
        "title": "蠡县",
        "parentId": "1207",
        "pinyin": "zuoxian",
        "initial": "Z"
    },
    {
        "id": "120723",
        "title": "涿州市",
        "parentId": "1207",
        "pinyin": "zuozhoushi",
        "initial": "Z"
    },
    {
        "id": "130312",
        "title": "扎兰屯市",
        "parentId": "1303",
        "pinyin": "zhalantunshi",
        "initial": "Z"
    },
    {
        "id": "130405",
        "title": "扎赉特旗",
        "parentId": "1304",
        "pinyin": "zhazuoteqi",
        "initial": "Z"
    },
    {
        "id": "130508",
        "title": "扎鲁特旗",
        "parentId": "1305",
        "pinyin": "zhaluteqi",
        "initial": "Z"
    },
    {
        "id": "130710",
        "title": "正镶白旗",
        "parentId": "1307",
        "pinyin": "zhengxiangbaiqi",
        "initial": "Z"
    },
    {
        "id": "130711",
        "title": "正蓝旗",
        "parentId": "1307",
        "pinyin": "zhenglanqi",
        "initial": "Z"
    },
    {
        "id": "130803",
        "title": "卓资县",
        "parentId": "1308",
        "pinyin": "zhuozixian",
        "initial": "Z"
    },
    {
        "id": "130904",
        "title": "准格尔旗",
        "parentId": "1309",
        "pinyin": "zhungeerqi",
        "initial": "Z"
    },
    {
        "id": "131004",
        "title": "磴口县",
        "parentId": "1310",
        "pinyin": "zuokouxian",
        "initial": "Z"
    },
    {
        "id": "140211",
        "title": "左云县",
        "parentId": "1402",
        "pinyin": "zuoyunxian",
        "initial": "Z"
    },
    {
        "id": "140506",
        "title": "泽州县",
        "parentId": "1405",
        "pinyin": "zezhouxian",
        "initial": "Z"
    },
    {
        "id": "140711",
        "title": "岢岚县",
        "parentId": "1407",
        "pinyin": "zuozuoxian",
        "initial": "Z"
    },
    {
        "id": "140804",
        "title": "左权县",
        "parentId": "1408",
        "pinyin": "zuoquanxian",
        "initial": "Z"
    },
    {
        "id": "140913",
        "title": "隰县",
        "parentId": "1409",
        "pinyin": "zuoxian",
        "initial": "Z"
    },
    {
        "id": "141009",
        "title": "岚县",
        "parentId": "1410",
        "pinyin": "zuoxian",
        "initial": "Z"
    },
    {
        "id": "141011",
        "title": "中阳县",
        "parentId": "1410",
        "pinyin": "zhongyangxian",
        "initial": "Z"
    },
    {
        "id": "141106",
        "title": "稷山县",
        "parentId": "1411",
        "pinyin": "zuoshanxian",
        "initial": "Z"
    },
    {
        "id": "141108",
        "title": "绛县",
        "parentId": "1411",
        "pinyin": "zuoxian",
        "initial": "Z"
    },
    {
        "id": "141112",
        "title": "芮城县",
        "parentId": "1411",
        "pinyin": "zuochengxian",
        "initial": "Z"
    },
    {
        "id": "200202",
        "title": "中山区",
        "parentId": "2002",
        "pinyin": "zhongshanqu",
        "initial": "Z"
    },
    {
        "id": "200211",
        "title": "庄河市",
        "parentId": "2002",
        "pinyin": "zhuangheshi",
        "initial": "Z"
    },
    {
        "id": "200307",
        "title": "岫岩县",
        "parentId": "2003",
        "pinyin": "zuoyanxian",
        "initial": "Z"
    },
    {
        "id": "200503",
        "title": "振兴区",
        "parentId": "2005",
        "pinyin": "zhenxingqu",
        "initial": "Z"
    },
    {
        "id": "200504",
        "title": "振安区",
        "parentId": "2005",
        "pinyin": "zhenanqu",
        "initial": "Z"
    },
    {
        "id": "200902",
        "title": "站前区",
        "parentId": "2009",
        "pinyin": "zhanqianqu",
        "initial": "Z"
    },
    {
        "id": "200904",
        "title": "鲅鱼圈区",
        "parentId": "2009",
        "pinyin": "zuoyuquanqu",
        "initial": "Z"
    },
    {
        "id": "201108",
        "title": "彰武县",
        "parentId": "2011",
        "pinyin": "zhangwuxian",
        "initial": "Z"
    },
    {
        "id": "210207",
        "title": "蛟河市",
        "parentId": "2102",
        "pinyin": "zuoheshi",
        "initial": "Z"
    },
    {
        "id": "210208",
        "title": "桦甸市",
        "parentId": "2102",
        "pinyin": "zuodianshi",
        "initial": "Z"
    },
    {
        "id": "210802",
        "title": "洮北区",
        "parentId": "2108",
        "pinyin": "zuobeiqu",
        "initial": "Z"
    },
    {
        "id": "210803",
        "title": "镇赉县",
        "parentId": "2108",
        "pinyin": "zhenzuoxian",
        "initial": "Z"
    },
    {
        "id": "210805",
        "title": "洮南市",
        "parentId": "2108",
        "pinyin": "zuonanshi",
        "initial": "Z"
    },
    {
        "id": "210904",
        "title": "珲春市",
        "parentId": "2109",
        "pinyin": "zuochunshi",
        "initial": "Z"
    },
    {
        "id": "220217",
        "title": "讷河市",
        "parentId": "2202",
        "pinyin": "zuoheshi",
        "initial": "Z"
    },
    {
        "id": "220607",
        "title": "肇州县",
        "parentId": "2206",
        "pinyin": "zhaozhouxian",
        "initial": "Z"
    },
    {
        "id": "220608",
        "title": "肇源县",
        "parentId": "2206",
        "pinyin": "zhaoyuanxian",
        "initial": "Z"
    },
    {
        "id": "220806",
        "title": "桦南县",
        "parentId": "2208",
        "pinyin": "zuonanxian",
        "initial": "Z"
    },
    {
        "id": "220807",
        "title": "桦川县",
        "parentId": "2208",
        "pinyin": "zuochuanxian",
        "initial": "Z"
    },
    {
        "id": "221210",
        "title": "肇东市",
        "parentId": "2212",
        "pinyin": "zhaodongshi",
        "initial": "Z"
    },
    {
        "id": "3015",
        "title": "闸北区",
        "parentId": "30",
        "pinyin": "zhabeiqu",
        "initial": "Z"
    },
    {
        "id": "3017",
        "title": "闵行区",
        "parentId": "30",
        "pinyin": "zuoxingqu",
        "initial": "Z"
    },
    {
        "id": "310113",
        "title": "溧水县",
        "parentId": "3101",
        "pinyin": "zuoshuixian",
        "initial": "Z"
    },
    {
        "id": "310209",
        "title": "张家港市",
        "parentId": "3102",
        "pinyin": "zhangjiagangshi",
        "initial": "Z"
    },
    {
        "id": "3104",
        "title": "镇江市",
        "parentId": "31",
        "pinyin": "zhenjiangshi",
        "initial": "Z"
    },
    {
        "id": "310503",
        "title": "邗江区",
        "parentId": "3105",
        "pinyin": "zuojiangqu",
        "initial": "Z"
    },
    {
        "id": "310703",
        "title": "钟楼区",
        "parentId": "3107",
        "pinyin": "zhonglouqu",
        "initial": "Z"
    },
    {
        "id": "310707",
        "title": "溧阳市",
        "parentId": "3107",
        "pinyin": "zuoyangshi",
        "initial": "Z"
    },
    {
        "id": "310810",
        "title": "睢宁县",
        "parentId": "3108",
        "pinyin": "zuoningxian",
        "initial": "Z"
    },
    {
        "id": "310812",
        "title": "邳州市",
        "parentId": "3108",
        "pinyin": "zuozhoushi1",
        "initial": "Z"
    },
    {
        "id": "311108",
        "title": "盱眙县",
        "parentId": "3111",
        "pinyin": "zuozuoxian",
        "initial": "Z"
    },
    {
        "id": "311304",
        "title": "沭阳县",
        "parentId": "3113",
        "pinyin": "zuoyangxian",
        "initial": "Z"
    },
    {
        "id": "311305",
        "title": "泗阳县",
        "parentId": "3113",
        "pinyin": "zuoyangxian",
        "initial": "Z"
    },
    {
        "id": "311306",
        "title": "泗洪县",
        "parentId": "3113",
        "pinyin": "zuohongxian",
        "initial": "Z"
    },
    {
        "id": "320111",
        "title": "章丘市",
        "parentId": "3201",
        "pinyin": "zhangqiushi",
        "initial": "Z"
    },
    {
        "id": "320206",
        "title": "崂山区",
        "parentId": "3202",
        "pinyin": "zuoshanqu",
        "initial": "Z"
    },
    {
        "id": "320302",
        "title": "芝罘区",
        "parentId": "3203",
        "pinyin": "zhizuoqu",
        "initial": "Z"
    },
    {
        "id": "320311",
        "title": "招远市",
        "parentId": "3203",
        "pinyin": "zhaoyuanshi",
        "initial": "Z"
    },
    {
        "id": "3204",
        "title": "淄博市",
        "parentId": "32",
        "pinyin": "ziboshi",
        "initial": "Z"
    },
    {
        "id": "320402",
        "title": "淄川区",
        "parentId": "3204",
        "pinyin": "zichuanqu",
        "initial": "Z"
    },
    {
        "id": "320403",
        "title": "张店区",
        "parentId": "3204",
        "pinyin": "zhangdianqu",
        "initial": "Z"
    },
    {
        "id": "320406",
        "title": "周村区",
        "parentId": "3204",
        "pinyin": "zhoucunqu",
        "initial": "Z"
    },
    {
        "id": "320503",
        "title": "岱岳区",
        "parentId": "3205",
        "pinyin": "zuoyuequ",
        "initial": "Z"
    },
    {
        "id": "320609",
        "title": "诸城市",
        "parentId": "3206",
        "pinyin": "zhuchengshi",
        "initial": "Z"
    },
    {
        "id": "320708",
        "title": "汶上县",
        "parentId": "3207",
        "pinyin": "zuoshangxian",
        "initial": "Z"
    },
    {
        "id": "320709",
        "title": "泗水县",
        "parentId": "3207",
        "pinyin": "zuoshuixian",
        "initial": "Z"
    },
    {
        "id": "320712",
        "title": "兖州市",
        "parentId": "3207",
        "pinyin": "zuozhoushi2",
        "initial": "Z"
    },
    {
        "id": "320713",
        "title": "邹城市",
        "parentId": "3207",
        "pinyin": "zouchengshi",
        "initial": "Z"
    },
    {
        "id": "3208",
        "title": "枣庄市",
        "parentId": "32",
        "pinyin": "zaozhuangshi",
        "initial": "Z"
    },
    {
        "id": "320804",
        "title": "峄城区",
        "parentId": "3208",
        "pinyin": "zuochengqu",
        "initial": "Z"
    },
    {
        "id": "320807",
        "title": "滕州市",
        "parentId": "3208",
        "pinyin": "zuozhoushi3",
        "initial": "Z"
    },
    {
        "id": "321103",
        "title": "岚山区",
        "parentId": "3211",
        "pinyin": "zuoshanqu",
        "initial": "Z"
    },
    {
        "id": "321105",
        "title": "莒县",
        "parentId": "3211",
        "pinyin": "zuoxian",
        "initial": "Z"
    },
    {
        "id": "321306",
        "title": "沾化县",
        "parentId": "3213",
        "pinyin": "zhanhuaxian",
        "initial": "Z"
    },
    {
        "id": "321308",
        "title": "邹平县",
        "parentId": "3213",
        "pinyin": "zoupingxian",
        "initial": "Z"
    },
    {
        "id": "321504",
        "title": "莘县",
        "parentId": "3215",
        "pinyin": "zuoxian",
        "initial": "Z"
    },
    {
        "id": "321505",
        "title": "茌平县",
        "parentId": "3215",
        "pinyin": "zuopingxian",
        "initial": "Z"
    },
    {
        "id": "321607",
        "title": "郓城县",
        "parentId": "3216",
        "pinyin": "zuochengxian",
        "initial": "Z"
    },
    {
        "id": "321608",
        "title": "鄄城县",
        "parentId": "3216",
        "pinyin": "zuochengxian",
        "initial": "Z"
    },
    {
        "id": "321706",
        "title": "郯城县",
        "parentId": "3217",
        "pinyin": "zuochengxian",
        "initial": "Z"
    },
    {
        "id": "321711",
        "title": "莒南县",
        "parentId": "3217",
        "pinyin": "zuonanxian",
        "initial": "Z"
    },
    {
        "id": "330203",
        "title": "弋江区",
        "parentId": "3302",
        "pinyin": "zuojiangqu",
        "initial": "Z"
    },
    {
        "id": "330204",
        "title": "鸠江区",
        "parentId": "3302",
        "pinyin": "zuojiangqu",
        "initial": "Z"
    },
    {
        "id": "330505",
        "title": "濉溪县",
        "parentId": "3305",
        "pinyin": "zuoxixian",
        "initial": "Z"
    },
    {
        "id": "330706",
        "title": "枞阳县",
        "parentId": "3307",
        "pinyin": "zuoyangxian",
        "initial": "Z"
    },
    {
        "id": "330805",
        "title": "歙县",
        "parentId": "3308",
        "pinyin": "zuoxian",
        "initial": "Z"
    },
    {
        "id": "330807",
        "title": "黟县",
        "parentId": "3308",
        "pinyin": "zuoxian",
        "initial": "Z"
    },
    {
        "id": "331003",
        "title": "砀山县",
        "parentId": "3310",
        "pinyin": "zuoshanxian",
        "initial": "Z"
    },
    {
        "id": "331006",
        "title": "泗县",
        "parentId": "3310",
        "pinyin": "zuoxian",
        "initial": "Z"
    },
    {
        "id": "331402",
        "title": "颍州区",
        "parentId": "3314",
        "pinyin": "zuozhouqu",
        "initial": "Z"
    },
    {
        "id": "331403",
        "title": "颍东区",
        "parentId": "3314",
        "pinyin": "zuodongqu",
        "initial": "Z"
    },
    {
        "id": "331404",
        "title": "颍泉区",
        "parentId": "3314",
        "pinyin": "zuoquanqu",
        "initial": "Z"
    },
    {
        "id": "331408",
        "title": "颍上县",
        "parentId": "3314",
        "pinyin": "zuoshangxian",
        "initial": "Z"
    },
    {
        "id": "331605",
        "title": "泾县",
        "parentId": "3316",
        "pinyin": "zuoxian",
        "initial": "Z"
    },
    {
        "id": "331607",
        "title": "旌德县",
        "parentId": "3316",
        "pinyin": "zuodexian",
        "initial": "Z"
    },
    {
        "id": "3317",
        "title": "亳州市",
        "parentId": "33",
        "pinyin": "zuozhoushi4",
        "initial": "Z"
    },
    {
        "id": "331702",
        "title": "谯城区",
        "parentId": "3317",
        "pinyin": "zuochengqu",
        "initial": "Z"
    },
    {
        "id": "3403",
        "title": "漳州市",
        "parentId": "34",
        "pinyin": "zhangzhoushi",
        "initial": "Z"
    },
    {
        "id": "340302",
        "title": "芗城区",
        "parentId": "3403",
        "pinyin": "zuochengqu",
        "initial": "Z"
    },
    {
        "id": "340305",
        "title": "漳浦县",
        "parentId": "3403",
        "pinyin": "zhangpuxian",
        "initial": "Z"
    },
    {
        "id": "340306",
        "title": "诏安县",
        "parentId": "3403",
        "pinyin": "zuoanxian",
        "initial": "Z"
    },
    {
        "id": "340707",
        "title": "政和县",
        "parentId": "3407",
        "pinyin": "zhenghexian",
        "initial": "Z"
    },
    {
        "id": "340808",
        "title": "漳平市",
        "parentId": "3408",
        "pinyin": "zhangpingshi",
        "initial": "Z"
    },
    {
        "id": "340907",
        "title": "周宁县",
        "parentId": "3409",
        "pinyin": "zhouningxian",
        "initial": "Z"
    },
    {
        "id": "340908",
        "title": "柘荣县",
        "parentId": "3409",
        "pinyin": "zuorongxian",
        "initial": "Z"
    },
    {
        "id": "35",
        "title": "浙江省",
        "parentId": null,
        "pinyin": "zhejiangsheng",
        "initial": "Z"
    },
    {
        "id": "350206",
        "title": "镇海区",
        "parentId": "3502",
        "pinyin": "zhenhaiqu",
        "initial": "Z"
    },
    {
        "id": "350207",
        "title": "鄞州区",
        "parentId": "3502",
        "pinyin": "zuozhouqu",
        "initial": "Z"
    },
    {
        "id": "350304",
        "title": "瓯海区",
        "parentId": "3503",
        "pinyin": "zuohaiqu",
        "initial": "Z"
    },
    {
        "id": "350605",
        "title": "诸暨市",
        "parentId": "3506",
        "pinyin": "zhuzuoshi",
        "initial": "Z"
    },
    {
        "id": "350607",
        "title": "嵊州市",
        "parentId": "3506",
        "pinyin": "zuozhoushi5",
        "initial": "Z"
    },
    {
        "id": "350702",
        "title": "婺城区",
        "parentId": "3507",
        "pinyin": "zuochengqu",
        "initial": "Z"
    },
    {
        "id": "3508",
        "title": "衢州市",
        "parentId": "35",
        "pinyin": "zuozhoushi6",
        "initial": "Z"
    },
    {
        "id": "350803",
        "title": "衢江区",
        "parentId": "3508",
        "pinyin": "zuojiangqu",
        "initial": "Z"
    },
    {
        "id": "3509",
        "title": "舟山市",
        "parentId": "35",
        "pinyin": "zhoushanshi",
        "initial": "Z"
    },
    {
        "id": "350904",
        "title": "岱山县",
        "parentId": "3509",
        "pinyin": "zuoshanxian",
        "initial": "Z"
    },
    {
        "id": "350905",
        "title": "嵊泗县",
        "parentId": "3509",
        "pinyin": "zuozuoxian",
        "initial": "Z"
    },
    {
        "id": "351104",
        "title": "缙云县",
        "parentId": "3511",
        "pinyin": "zuoyunxian",
        "initial": "Z"
    },
    {
        "id": "360203",
        "title": "珠山区",
        "parentId": "3602",
        "pinyin": "zhushanqu",
        "initial": "Z"
    },
    {
        "id": "360403",
        "title": "浔阳区",
        "parentId": "3604",
        "pinyin": "zuoyangqu",
        "initial": "Z"
    },
    {
        "id": "360702",
        "title": "章贡区",
        "parentId": "3607",
        "pinyin": "zhanggongqu",
        "initial": "Z"
    },
    {
        "id": "360910",
        "title": "樟树市",
        "parentId": "3609",
        "pinyin": "zhangshushi",
        "initial": "Z"
    },
    {
        "id": "361010",
        "title": "资溪县",
        "parentId": "3610",
        "pinyin": "zixixian",
        "initial": "Z"
    },
    {
        "id": "361108",
        "title": "弋阳县",
        "parentId": "3611",
        "pinyin": "zuoyangxian",
        "initial": "Z"
    },
    {
        "id": "361110",
        "title": "鄱阳县",
        "parentId": "3611",
        "pinyin": "zuoyangxian",
        "initial": "Z"
    },
    {
        "id": "361112",
        "title": "婺源县",
        "parentId": "3611",
        "pinyin": "zuoyuanxian",
        "initial": "Z"
    },
    {
        "id": "400112",
        "title": "增城市",
        "parentId": "4001",
        "pinyin": "zengchengshi",
        "initial": "Z"
    },
    {
        "id": "4003",
        "title": "珠海市",
        "parentId": "40",
        "pinyin": "zhuhaishi",
        "initial": "Z"
    },
    {
        "id": "400404",
        "title": "濠江区",
        "parentId": "4004",
        "pinyin": "zuojiangqu",
        "initial": "Z"
    },
    {
        "id": "400503",
        "title": "浈江区",
        "parentId": "4005",
        "pinyin": "zuojiangqu",
        "initial": "Z"
    },
    {
        "id": "400603",
        "title": "紫金县",
        "parentId": "4006",
        "pinyin": "zijinxian",
        "initial": "Z"
    },
    {
        "id": "4011",
        "title": "中山市",
        "parentId": "40",
        "pinyin": "zhongshanshi",
        "initial": "Z"
    },
    {
        "id": "401302",
        "title": "禅城区",
        "parentId": "4013",
        "pinyin": "zuochengqu",
        "initial": "Z"
    },
    {
        "id": "4015",
        "title": "湛江市",
        "parentId": "40",
        "pinyin": "zhanjiangshi",
        "initial": "Z"
    },
    {
        "id": "4017",
        "title": "肇庆市",
        "parentId": "40",
        "pinyin": "zhaoqingshi",
        "initial": "Z"
    },
    {
        "id": "402002",
        "title": "榕城区",
        "parentId": "4020",
        "pinyin": "zuochengqu",
        "initial": "Z"
    },
    {
        "id": "410107",
        "title": "邕宁区",
        "parentId": "4101",
        "pinyin": "zuoningqu",
        "initial": "Z"
    },
    {
        "id": "410315",
        "title": "资源县",
        "parentId": "4103",
        "pinyin": "ziyuanxian",
        "initial": "Z"
    },
    {
        "id": "410408",
        "title": "岑溪市",
        "parentId": "4104",
        "pinyin": "zuoxishi",
        "initial": "Z"
    },
    {
        "id": "410804",
        "title": "覃塘区",
        "parentId": "4108",
        "pinyin": "zuotangqu",
        "initial": "Z"
    },
    {
        "id": "411103",
        "title": "昭平县",
        "parentId": "4111",
        "pinyin": "zhaopingxian",
        "initial": "Z"
    },
    {
        "id": "411104",
        "title": "钟山县",
        "parentId": "4111",
        "pinyin": "zhongshanxian",
        "initial": "Z"
    },
    {
        "id": "4204",
        "title": "儋州市",
        "parentId": "42",
        "pinyin": "zuozhoushi7",
        "initial": "Z"
    },
    {
        "id": "6020",
        "title": "綦江县",
        "parentId": "60",
        "pinyin": "zuojiangxian",
        "initial": "Z"
    },
    {
        "id": "6021",
        "title": "潼南县",
        "parentId": "60",
        "pinyin": "zuonanxian",
        "initial": "Z"
    },
    {
        "id": "6025",
        "title": "璧山县",
        "parentId": "60",
        "pinyin": "zuoshanxian",
        "initial": "Z"
    },
    {
        "id": "6031",
        "title": "忠县",
        "parentId": "60",
        "pinyin": "zhongxian",
        "initial": "Z"
    },
    {
        "id": "610113",
        "title": "郫县",
        "parentId": "6101",
        "pinyin": "zuoxian",
        "initial": "Z"
    },
    {
        "id": "610119",
        "title": "邛崃市",
        "parentId": "6101",
        "pinyin": "zuozuoshi",
        "initial": "Z"
    },
    {
        "id": "610202",
        "title": "旌阳区",
        "parentId": "6102",
        "pinyin": "zuoyangqu",
        "initial": "Z"
    },
    {
        "id": "610203",
        "title": "中江县",
        "parentId": "6102",
        "pinyin": "zhongjiangxian",
        "initial": "Z"
    },
    {
        "id": "610307",
        "title": "梓潼县",
        "parentId": "6103",
        "pinyin": "zuozuoxian",
        "initial": "Z"
    },
    {
        "id": "6105",
        "title": "泸州市",
        "parentId": "61",
        "pinyin": "zuozhoushi8",
        "initial": "Z"
    },
    {
        "id": "610505",
        "title": "泸县",
        "parentId": "6105",
        "pinyin": "zuoxian",
        "initial": "Z"
    },
    {
        "id": "610610",
        "title": "阆中市",
        "parentId": "6106",
        "pinyin": "zuozhongshi",
        "initial": "Z"
    },
    {
        "id": "6107",
        "title": "自贡市",
        "parentId": "61",
        "pinyin": "zigongshi",
        "initial": "Z"
    },
    {
        "id": "610702",
        "title": "自流井区",
        "parentId": "6107",
        "pinyin": "ziliujingqu",
        "initial": "Z"
    },
    {
        "id": "610805",
        "title": "资中县",
        "parentId": "6108",
        "pinyin": "zizhongxian",
        "initial": "Z"
    },
    {
        "id": "610908",
        "title": "珙县",
        "parentId": "6109",
        "pinyin": "zuoxian",
        "initial": "Z"
    },
    {
        "id": "610909",
        "title": "筠连县",
        "parentId": "6109",
        "pinyin": "zuolianxian",
        "initial": "Z"
    },
    {
        "id": "611006",
        "title": "犍为县",
        "parentId": "6110",
        "pinyin": "zuoweixian",
        "initial": "Z"
    },
    {
        "id": "611009",
        "title": "沐川县",
        "parentId": "6110",
        "pinyin": "zuochuanxian",
        "initial": "Z"
    },
    {
        "id": "611104",
        "title": "荥经县",
        "parentId": "6111",
        "pinyin": "zuojingxian",
        "initial": "Z"
    },
    {
        "id": "6117",
        "title": "资阳市",
        "parentId": "61",
        "pinyin": "ziyangshi",
        "initial": "Z"
    },
    {
        "id": "611801",
        "title": "汶川县",
        "parentId": "6118",
        "pinyin": "zuochuanxian",
        "initial": "Z"
    },
    {
        "id": "612002",
        "title": "泸定县",
        "parentId": "6120",
        "pinyin": "zuodingxian",
        "initial": "Z"
    },
    {
        "id": "612111",
        "title": "昭觉县",
        "parentId": "6121",
        "pinyin": "zhaojuexian",
        "initial": "Z"
    },
    {
        "id": "620112",
        "title": "嵩明县",
        "parentId": "6201",
        "pinyin": "zuomingxian",
        "initial": "Z"
    },
    {
        "id": "620202",
        "title": "麒麟区",
        "parentId": "6202",
        "pinyin": "zuozuoqu",
        "initial": "Z"
    },
    {
        "id": "620209",
        "title": "沾益县",
        "parentId": "6202",
        "pinyin": "zhanyixian",
        "initial": "Z"
    },
    {
        "id": "6204",
        "title": "昭通市",
        "parentId": "62",
        "pinyin": "zhaotongshi",
        "initial": "Z"
    },
    {
        "id": "620402",
        "title": "昭阳区",
        "parentId": "6204",
        "pinyin": "zhaoyangqu",
        "initial": "Z"
    },
    {
        "id": "620409",
        "title": "镇雄县",
        "parentId": "6204",
        "pinyin": "zhenxiongxian",
        "initial": "Z"
    },
    {
        "id": "620608",
        "title": "泸西县",
        "parentId": "6206",
        "pinyin": "zuoxixian",
        "initial": "Z"
    },
    {
        "id": "621002",
        "title": "勐海县",
        "parentId": "6210",
        "pinyin": "zuohaixian",
        "initial": "Z"
    },
    {
        "id": "621003",
        "title": "勐腊县",
        "parentId": "6210",
        "pinyin": "zuolaxian",
        "initial": "Z"
    },
    {
        "id": "621107",
        "title": "镇沅县",
        "parentId": "6211",
        "pinyin": "zhenzuoxian",
        "initial": "Z"
    },
    {
        "id": "621501",
        "title": "泸水县",
        "parentId": "6215",
        "pinyin": "zuoshuixian",
        "initial": "Z"
    },
    {
        "id": "621606",
        "title": "镇康县",
        "parentId": "6216",
        "pinyin": "zhenkangxian",
        "initial": "Z"
    },
    {
        "id": "6302",
        "title": "遵义市",
        "parentId": "63",
        "pinyin": "zunyishi",
        "initial": "Z"
    },
    {
        "id": "630204",
        "title": "遵义县",
        "parentId": "6302",
        "pinyin": "zunyixian",
        "initial": "Z"
    },
    {
        "id": "630207",
        "title": "正安县",
        "parentId": "6302",
        "pinyin": "zhenganxian",
        "initial": "Z"
    },
    {
        "id": "630211",
        "title": "湄潭县",
        "parentId": "6302",
        "pinyin": "zuotanxian",
        "initial": "Z"
    },
    {
        "id": "630301",
        "title": "钟山区",
        "parentId": "6303",
        "pinyin": "zhongshanqu",
        "initial": "Z"
    },
    {
        "id": "630405",
        "title": "镇宁布依族县",
        "parentId": "6304",
        "pinyin": "zhenningbuyizuxian",
        "initial": "Z"
    },
    {
        "id": "630407",
        "title": "紫云县",
        "parentId": "6304",
        "pinyin": "ziyunxian",
        "initial": "Z"
    },
    {
        "id": "630505",
        "title": "贞丰县",
        "parentId": "6305",
        "pinyin": "zhenfengxian",
        "initial": "Z"
    },
    {
        "id": "630805",
        "title": "织金县",
        "parentId": "6308",
        "pinyin": "zhijinxian",
        "initial": "Z"
    },
    {
        "id": "630905",
        "title": "镇远县",
        "parentId": "6309",
        "pinyin": "zhenyuanxian",
        "initial": "Z"
    },
    {
        "id": "630906",
        "title": "岑巩县",
        "parentId": "6309",
        "pinyin": "zuogongxian",
        "initial": "Z"
    },
    {
        "id": "630912",
        "title": "榕江县",
        "parentId": "6309",
        "pinyin": "zuojiangxian",
        "initial": "Z"
    },
    {
        "id": "640213",
        "title": "仲巴县",
        "parentId": "6402",
        "pinyin": "zhongbaxian",
        "initial": "Z"
    },
    {
        "id": "640302",
        "title": "扎囊县",
        "parentId": "6403",
        "pinyin": "zhanangxian",
        "initial": "Z"
    },
    {
        "id": "640508",
        "title": "左贡县",
        "parentId": "6405",
        "pinyin": "zuogongxian",
        "initial": "Z"
    },
    {
        "id": "640702",
        "title": "札达县",
        "parentId": "6407",
        "pinyin": "zhadaxian",
        "initial": "Z"
    },
    {
        "id": "7001",
        "title": "郑州",
        "parentId": "70",
        "pinyin": "zhengzhou",
        "initial": "Z"
    },
    {
        "id": "700102",
        "title": "中原区",
        "parentId": "7001",
        "pinyin": "zhongyuanqu",
        "initial": "Z"
    },
    {
        "id": "700108",
        "title": "中牟县",
        "parentId": "7001",
        "pinyin": "zhongmouxian",
        "initial": "Z"
    },
    {
        "id": "700110",
        "title": "荥阳市",
        "parentId": "7001",
        "pinyin": "zuoyangshi",
        "initial": "Z"
    },
    {
        "id": "700115",
        "title": "郑东新区",
        "parentId": "7001",
        "pinyin": "zhengdongxinqu",
        "initial": "Z"
    },
    {
        "id": "700210",
        "title": "栾川县",
        "parentId": "7002",
        "pinyin": "zuochuanxian",
        "initial": "Z"
    },
    {
        "id": "700211",
        "title": "嵩县",
        "parentId": "7002",
        "pinyin": "zuoxian",
        "initial": "Z"
    },
    {
        "id": "700216",
        "title": "偃师市",
        "parentId": "7002",
        "pinyin": "zuoshishi",
        "initial": "Z"
    },
    {
        "id": "700307",
        "title": "杞县",
        "parentId": "7003",
        "pinyin": "zuoxian",
        "initial": "Z"
    },
    {
        "id": "7006",
        "title": "濮阳市",
        "parentId": "70",
        "pinyin": "zuoyangshi",
        "initial": "Z"
    },
    {
        "id": "700607",
        "title": "濮阳县",
        "parentId": "7006",
        "pinyin": "zuoyangxian",
        "initial": "Z"
    },
    {
        "id": "700703",
        "title": "中站区",
        "parentId": "7007",
        "pinyin": "zhongzhanqu",
        "initial": "Z"
    },
    {
        "id": "700804",
        "title": "淇滨区",
        "parentId": "7008",
        "pinyin": "zuobinqu",
        "initial": "Z"
    },
    {
        "id": "700806",
        "title": "淇县",
        "parentId": "7008",
        "pinyin": "zuoxian",
        "initial": "Z"
    },
    {
        "id": "700903",
        "title": "渑池县",
        "parentId": "7009",
        "pinyin": "zuochixian",
        "initial": "Z"
    },
    {
        "id": "701003",
        "title": "睢阳区",
        "parentId": "7010",
        "pinyin": "zuoyangqu",
        "initial": "Z"
    },
    {
        "id": "701005",
        "title": "睢县",
        "parentId": "7010",
        "pinyin": "zuoxian",
        "initial": "Z"
    },
    {
        "id": "701007",
        "title": "柘城县",
        "parentId": "7010",
        "pinyin": "zuochengxian",
        "initial": "Z"
    },
    {
        "id": "701104",
        "title": "鄢陵县",
        "parentId": "7011",
        "pinyin": "zuolingxian",
        "initial": "Z"
    },
    {
        "id": "7012",
        "title": "漯河市",
        "parentId": "70",
        "pinyin": "zuoheshi",
        "initial": "Z"
    },
    {
        "id": "701203",
        "title": "郾城区",
        "parentId": "7012",
        "pinyin": "zuochengqu",
        "initial": "Z"
    },
    {
        "id": "701204",
        "title": "召陵区",
        "parentId": "7012",
        "pinyin": "zhaolingqu",
        "initial": "Z"
    },
    {
        "id": "701305",
        "title": "湛河区",
        "parentId": "7013",
        "pinyin": "zhanhequ",
        "initial": "Z"
    },
    {
        "id": "701309",
        "title": "郏县",
        "parentId": "7013",
        "pinyin": "zuoxian",
        "initial": "Z"
    },
    {
        "id": "7014",
        "title": "驻马店市",
        "parentId": "70",
        "pinyin": "zhumadianshi",
        "initial": "Z"
    },
    {
        "id": "701402",
        "title": "驿城区",
        "parentId": "7014",
        "pinyin": "zuochengqu",
        "initial": "Z"
    },
    {
        "id": "701406",
        "title": "正阳县",
        "parentId": "7014",
        "pinyin": "zhengyangxian",
        "initial": "Z"
    },
    {
        "id": "7015",
        "title": "周口市",
        "parentId": "70",
        "pinyin": "zhoukoushi",
        "initial": "Z"
    },
    {
        "id": "701607",
        "title": "镇平县",
        "parentId": "7016",
        "pinyin": "zhenpingxian",
        "initial": "Z"
    },
    {
        "id": "701609",
        "title": "淅川县",
        "parentId": "7016",
        "pinyin": "zuochuanxian",
        "initial": "Z"
    },
    {
        "id": "701709",
        "title": "潢川县",
        "parentId": "7017",
        "pinyin": "zuochuanxian",
        "initial": "Z"
    },
    {
        "id": "710309",
        "title": "枣阳市",
        "parentId": "7103",
        "pinyin": "zaoyangshi",
        "initial": "Z"
    },
    {
        "id": "710403",
        "title": "张湾区",
        "parentId": "7104",
        "pinyin": "zhangwanqu",
        "initial": "Z"
    },
    {
        "id": "710406",
        "title": "竹山县",
        "parentId": "7104",
        "pinyin": "zhushanxian",
        "initial": "Z"
    },
    {
        "id": "710407",
        "title": "竹溪县",
        "parentId": "7104",
        "pinyin": "zhuxixian",
        "initial": "Z"
    },
    {
        "id": "710609",
        "title": "秭归县",
        "parentId": "7106",
        "pinyin": "zuoguixian",
        "initial": "Z"
    },
    {
        "id": "710614",
        "title": "枝江市",
        "parentId": "7106",
        "pinyin": "zhijiangshi",
        "initial": "Z"
    },
    {
        "id": "710706",
        "title": "钟祥市",
        "parentId": "7107",
        "pinyin": "zhongxiangshi",
        "initial": "Z"
    },
    {
        "id": "711007",
        "title": "浠水县",
        "parentId": "7110",
        "pinyin": "zuoshuixian",
        "initial": "Z"
    },
    {
        "id": "711008",
        "title": "蕲春县",
        "parentId": "7110",
        "pinyin": "zuochunxian",
        "initial": "Z"
    },
    {
        "id": "711202",
        "title": "曾都区",
        "parentId": "7112",
        "pinyin": "zengduqu",
        "initial": "Z"
    },
    {
        "id": "720102",
        "title": "芙蓉区",
        "parentId": "7201",
        "pinyin": "zuorongqu",
        "initial": "Z"
    },
    {
        "id": "720110",
        "title": "浏阳市",
        "parentId": "7201",
        "pinyin": "zuoyangshi",
        "initial": "Z"
    },
    {
        "id": "7202",
        "title": "株洲市",
        "parentId": "72",
        "pinyin": "zhuzhoushi",
        "initial": "Z"
    },
    {
        "id": "720206",
        "title": "株洲县",
        "parentId": "7202",
        "pinyin": "zhuzhouxian",
        "initial": "Z"
    },
    {
        "id": "720207",
        "title": "攸县",
        "parentId": "7202",
        "pinyin": "zuoxian",
        "initial": "Z"
    },
    {
        "id": "720210",
        "title": "醴陵市",
        "parentId": "7202",
        "pinyin": "zuolingshi",
        "initial": "Z"
    },
    {
        "id": "720402",
        "title": "珠晖区",
        "parentId": "7204",
        "pinyin": "zhuzuoqu",
        "initial": "Z"
    },
    {
        "id": "720405",
        "title": "蒸湘区",
        "parentId": "7204",
        "pinyin": "zhengxiangqu",
        "initial": "Z"
    },
    {
        "id": "720412",
        "title": "耒阳市",
        "parentId": "7204",
        "pinyin": "zuoyangshi",
        "initial": "Z"
    },
    {
        "id": "720502",
        "title": "资阳区",
        "parentId": "7205",
        "pinyin": "ziyangqu",
        "initial": "Z"
    },
    {
        "id": "720507",
        "title": "沅江市",
        "parentId": "7205",
        "pinyin": "zuojiangshi",
        "initial": "Z"
    },
    {
        "id": "720606",
        "title": "澧县",
        "parentId": "7206",
        "pinyin": "zuoxian",
        "initial": "Z"
    },
    {
        "id": "720709",
        "title": "汨罗市",
        "parentId": "7207",
        "pinyin": "zuoluoshi",
        "initial": "Z"
    },
    {
        "id": "720912",
        "title": "资兴市",
        "parentId": "7209",
        "pinyin": "zixingshi",
        "initial": "Z"
    },
    {
        "id": "721203",
        "title": "中方县",
        "parentId": "7212",
        "pinyin": "zhongfangxian",
        "initial": "Z"
    },
    {
        "id": "721204",
        "title": "沅陵县",
        "parentId": "7212",
        "pinyin": "zuolingxian",
        "initial": "Z"
    },
    {
        "id": "721206",
        "title": "溆浦县",
        "parentId": "7212",
        "pinyin": "zuopuxian",
        "initial": "Z"
    },
    {
        "id": "721210",
        "title": "芷江县",
        "parentId": "7212",
        "pinyin": "zuojiangxian",
        "initial": "Z"
    },
    {
        "id": "7213",
        "title": "张家界市",
        "parentId": "72",
        "pinyin": "zhangjiajieshi",
        "initial": "Z"
    },
    {
        "id": "721402",
        "title": "泸溪县",
        "parentId": "7214",
        "pinyin": "zuoxixian",
        "initial": "Z"
    },
    {
        "id": "800105",
        "title": "灞桥区",
        "parentId": "8001",
        "pinyin": "zuoqiaoqu",
        "initial": "Z"
    },
    {
        "id": "800112",
        "title": "周至县",
        "parentId": "8001",
        "pinyin": "zhouzhixian",
        "initial": "Z"
    },
    {
        "id": "800206",
        "title": "岐山县",
        "parentId": "8002",
        "pinyin": "zuoshanxian",
        "initial": "Z"
    },
    {
        "id": "800211",
        "title": "麟游县",
        "parentId": "8002",
        "pinyin": "zuoyouxian",
        "initial": "Z"
    },
    {
        "id": "800306",
        "title": "泾阳县",
        "parentId": "8003",
        "pinyin": "zuoyangxian",
        "initial": "Z"
    },
    {
        "id": "800404",
        "title": "潼关县",
        "parentId": "8004",
        "pinyin": "zuoguanxian",
        "initial": "Z"
    },
    {
        "id": "800505",
        "title": "子长县",
        "parentId": "8005",
        "pinyin": "zichangxian",
        "initial": "Z"
    },
    {
        "id": "800507",
        "title": "志丹县",
        "parentId": "8005",
        "pinyin": "zhidanxian",
        "initial": "Z"
    },
    {
        "id": "800613",
        "title": "子洲县",
        "parentId": "8006",
        "pinyin": "zizhouxian",
        "initial": "Z"
    },
    {
        "id": "800810",
        "title": "镇巴县",
        "parentId": "8008",
        "pinyin": "zhenbaxian",
        "initial": "Z"
    },
    {
        "id": "800906",
        "title": "紫阳县",
        "parentId": "8009",
        "pinyin": "ziyangxian",
        "initial": "Z"
    },
    {
        "id": "800907",
        "title": "岚皋县",
        "parentId": "8009",
        "pinyin": "zuogaoxian",
        "initial": "Z"
    },
    {
        "id": "800909",
        "title": "镇坪县",
        "parentId": "8009",
        "pinyin": "zhenpingxian",
        "initial": "Z"
    },
    {
        "id": "801007",
        "title": "镇安县",
        "parentId": "8010",
        "pinyin": "zhenanxian",
        "initial": "Z"
    },
    {
        "id": "801008",
        "title": "柞水县",
        "parentId": "8010",
        "pinyin": "zuoshuixian",
        "initial": "Z"
    },
    {
        "id": "810107",
        "title": "湟中县",
        "parentId": "8101",
        "pinyin": "zuozhongxian",
        "initial": "Z"
    },
    {
        "id": "810108",
        "title": "湟源县",
        "parentId": "8101",
        "pinyin": "zuoyuanxian",
        "initial": "Z"
    },
    {
        "id": "810603",
        "title": "泽库县",
        "parentId": "8106",
        "pinyin": "zekuxian",
        "initial": "Z"
    },
    {
        "id": "810802",
        "title": "杂多县",
        "parentId": "8108",
        "pinyin": "zaduoxian",
        "initial": "Z"
    },
    {
        "id": "810804",
        "title": "治多县",
        "parentId": "8108",
        "pinyin": "zhiduoxian",
        "initial": "Z"
    },
    {
        "id": "820405",
        "title": "泾源县",
        "parentId": "8204",
        "pinyin": "zuoyuanxian",
        "initial": "Z"
    },
    {
        "id": "8205",
        "title": "中卫市",
        "parentId": "82",
        "pinyin": "zhongweishi",
        "initial": "Z"
    },
    {
        "id": "820503",
        "title": "中宁县",
        "parentId": "8205",
        "pinyin": "zhongningxian",
        "initial": "Z"
    },
    {
        "id": "830208",
        "title": "昭苏县",
        "parentId": "8302",
        "pinyin": "zhaosuxian",
        "initial": "Z"
    },
    {
        "id": "830702",
        "title": "鄯善县",
        "parentId": "8307",
        "pinyin": "zuoshanxian",
        "initial": "Z"
    },
    {
        "id": "831305",
        "title": "泽普县",
        "parentId": "8313",
        "pinyin": "zepuxian",
        "initial": "Z"
    },
    {
        "id": "831310",
        "title": "伽师县",
        "parentId": "8313",
        "pinyin": "zuoshixian",
        "initial": "Z"
    },
    {
        "id": "840208",
        "title": "张家川县",
        "parentId": "8402",
        "pinyin": "zhangjiachuanxian",
        "initial": "Z"
    },
    {
        "id": "8407",
        "title": "张掖市",
        "parentId": "84",
        "pinyin": "zhangyeshi",
        "initial": "Z"
    },
    {
        "id": "840807",
        "title": "正宁县",
        "parentId": "8408",
        "pinyin": "zhengningxian",
        "initial": "Z"
    },
    {
        "id": "840809",
        "title": "镇原县",
        "parentId": "8408",
        "pinyin": "zhenyuanxian",
        "initial": "Z"
    },
    {
        "id": "840902",
        "title": "崆峒区",
        "parentId": "8409",
        "pinyin": "zuozuoqu",
        "initial": "Z"
    },
    {
        "id": "840903",
        "title": "泾川县",
        "parentId": "8409",
        "pinyin": "zuochuanxian",
        "initial": "Z"
    },
    {
        "id": "840907",
        "title": "庄浪县",
        "parentId": "8409",
        "pinyin": "zhuanglangxian",
        "initial": "Z"
    },
    {
        "id": "841107",
        "title": "漳县",
        "parentId": "8411",
        "pinyin": "zhangxian",
        "initial": "Z"
    },
    {
        "id": "841108",
        "title": "岷县",
        "parentId": "8411",
        "pinyin": "zuoxian",
        "initial": "Z"
    },
    {
        "id": "841205",
        "title": "宕昌县",
        "parentId": "8412",
        "pinyin": "zuochangxian",
        "initial": "Z"
    },
    {
        "id": "841403",
        "title": "卓尼县",
        "parentId": "8414",
        "pinyin": "zhuonixian",
        "initial": "Z"
    },
    {
        "id": "841404",
        "title": "舟曲县",
        "parentId": "8414",
        "pinyin": "zhouquxian",
        "initial": "Z"
    }
]
export default city;