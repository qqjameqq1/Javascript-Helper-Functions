//-------------------------------------------------------
//form
//-------------------------------------------------------
//array_city.js         縣市鄉鎮含郵遞區號_陣列清單
//bcalendar_sel()       動態生成年月日下拉
//bind()                資料繫結
//bmonth_sel()          動態生成月下拉
//byear_sel()           動態生成年下拉
//city_region_sel()     縣市鄉鎮下拉
//create_checkbox()     動態生成CHECKBOX
//create_radio()        動態生成RADIO
//create_select()       動態生成下拉選單
//create_text()         動態建立文件方塊
//db_checkbox()         資料繫結核取方塊
//db_radio()            資料繫結圈選方塊
//db_select()           資料繫結下拉選單
//db_textarea()         繫結文字欄位
//db_txt()              繫結文字欄位
//get_checkbox_val()    取得核取方塊選取值
//get_radio_val()       取得radio元件選取值
//get_select_val()      取得下拉選單選取值
//month_sel()           繫結月下拉
//year_sel()            繫結年下拉
//checkbox_ischeck()    checkbox是否勾選
//radio_ischeck()       radio是否勾選
//texts_hasval()        texts是否輸入

//------------------------------------------------
//縣市鄉鎮含郵遞區號_陣列清單
//------------------------------------------------
array_city={
    '請選擇':{
                '請選擇':'0'
            },
    '基隆市':{
                '請選擇':'0',
                '仁愛區':'200',
                '信義區':'201',
                '中正區':'202',
                '中山區':'203',
                '安樂區':'204',
                '暖暖區':'205',
                '七堵區':'206'
            },
    '台北市':{
                '請選擇':'0',
                '中正區':'100',
                '大同區':'103',
                '中山區':'104',
                '松山區':'105',
                '大安區':'106',
                '萬華區':'108',
                '信義區':'110',
                '士林區':'111',
                '北投區':'112',
                '內湖區':'114',
                '南港區':'115',
                '文山區':'116'
            },
    '新北市':{
                '請選擇':'0',
                '萬里區':'207',
                '金山區':'208',
                '板橋區':'220',
                '汐止區':'221',
                '深坑區':'222',
                '石碇區':'223',
                '瑞芳區':'224',
                '平溪區':'226',
                '雙溪區':'227',
                '貢寮區':'228',
                '新店區':'231',
                '坪林區':'232',
                '烏來區':'233',
                '永和區':'234',
                '中和區':'235',
                '土城區':'236',
                '三峽區':'237',
                '樹林區':'238',
                '鶯歌區':'239',
                '三重區':'241',
                '新莊區':'242',
                '泰山區':'243',
                '林口區':'244',
                '蘆洲區':'247',
                '五股區':'248',
                '八里區':'249',
                '淡水區':'251',
                '三芝區':'252',
                '石門區':'253'
            },
    '桃園縣':{
                '請選擇':'0',
                '中壢市':'320',
                '平鎮市':'324',
                '龍潭鄉':'325',
                '楊梅市':'326',
                '新屋鄉':'327',
                '觀音鄉':'328',
                '桃園市':'330',
                '龜山鄉':'333',
                '八德市':'334',
                '大溪鎮':'335',
                '復興鄉':'336',
                '大園鄉':'337',
                '蘆竹鄉':'338'
            },
    '新竹市':{
                '請選擇':'0',
                '東區':'300',
                '北區':'300',
                '香山區':'300'
            },
    '新竹縣':{
                '請選擇':'0',
                '竹北市':'302',
                '湖口鄉':'303',
                '新豐鄉':'304',
                '新埔鎮':'305',
                '關西鎮':'306',
                '芎林鄉':'307',
                '寶山鄉':'308',
                '竹東鎮':'310',
                '五峰鄉':'311',
                '橫山鄉':'312',
                '尖石鄉':'313',
                '北埔鄉':'314',
                '峨眉鄉':'315'
            },
    '苗栗縣':{
                '請選擇':'0',
                '竹南鎮':'350',
                '頭份鎮':'351',
                '三灣鄉':'352',
                '南庄鄉':'353',
                '獅潭鄉':'354',
                '後龍鎮':'356',
                '通霄鎮':'357',
                '苑裡鎮':'358',
                '苗栗市':'360',
                '造橋鄉':'361',
                '頭屋鄉':'362',
                '公館鄉':'363',
                '大湖鄉':'364',
                '泰安鄉':'365',
                '銅鑼鄉':'366',
                '三義鄉':'367',
                '西湖鄉':'368',
                '卓蘭鎮':'369'
            },
    '台中市':{
                '請選擇':'0',
                '中區':'400',
                '東區':'401',
                '南區':'402',
                '西區':'403',
                '北區':'404',
                '北屯區':'406',
                '西屯區':'407',
                '南屯區':'408',
                '太平區':'411',
                '大里區':'412',
                '霧峰區':'413',
                '烏日區':'414',
                '豐原區':'420',
                '后里區':'421',
                '石岡區':'422',
                '東勢區':'423',
                '和平區':'424',
                '新社區':'426',
                '潭子區':'427',
                '大雅區':'428',
                '神岡區':'429',
                '大肚區':'432',
                '沙鹿區':'433',
                '龍井區':'434',
                '梧棲區':'435',
                '清水區':'436',
                '大甲區':'437',
                '外埔區':'438',
                '大安區':'439'
            },
    '彰化縣':{
                '請選擇':'0',
                '彰化市':'500',
                '芬園鄉':'502',
                '花壇鄉':'503',
                '秀水鄉':'504',
                '鹿港鎮':'505',
                '福興鄉':'506',
                '線西鄉':'507',
                '和美鎮':'508',
                '伸港鄉':'509',
                '員林鎮':'510',
                '社頭鄉':'511',
                '永靖鄉':'512',
                '埔心鄉':'513',
                '溪湖鎮':'514',
                '大村鄉':'515',
                '埔鹽鄉':'516',
                '田中鎮':'520',
                '北斗鎮':'521',
                '田尾鄉':'522',
                '埤頭鄉':'523',
                '溪州鄉':'524',
                '竹塘鄉':'525',
                '二林鎮':'526',
                '大城鄉':'527',
                '芳苑鄉':'528',
                '二水鄉':'530'
            },
    '南投縣':{
                '請選擇':'0',
                '南投市':'540',
                '中寮鄉':'541',
                '草屯鎮':'542',
                '國姓鄉':'544',
                '埔里鎮':'545',
                '仁愛鄉':'546',
                '名間鄉':'551',
                '集集鎮':'552',
                '水里鄉':'553',
                '魚池鄉':'555',
                '信義鄉':'556',
                '竹山鎮':'557',
                '鹿谷鄉':'558'
            },

    '雲林縣':{
                '請選擇':'0',
                '斗南鎮':'630',
                '大埤鄉':'631',
                '虎尾鎮':'632',
                '土庫鎮':'633',
                '褒忠鄉':'634',
                '東勢鄉':'635',
                '台西鄉':'636',
                '崙背鄉':'637',
                '麥寮鄉':'638',
                '斗六市':'640',
                '林內鄉':'643',
                '古坑鄉':'646',
                '莿桐鄉':'647',
                '西螺鎮':'648',
                '二崙鄉':'649',
                '北港鎮':'651',
                '水林鄉':'652',
                '口湖鄉':'653',
                '四湖鄉':'654',
                '元長鄉':'655'
            },
    '嘉義市':{
                '請選擇':'0',
                '東區':'600',
                '西區':'600'
            },
    '嘉義縣':{
                '請選擇':'0',
                '番路鄉':'602',
                '梅山鄉':'603',
                '竹崎鄉':'604',
                '阿里山':'605',
                '中埔鄉':'606',
                '大埔鄉':'607',
                '水上鄉':'608',
                '鹿草鄉':'611',
                '太保市':'612',
                '朴子市':'613',
                '東石鄉':'614',
                '六腳鄉':'615',
                '新港鄉':'616',
                '民雄鄉':'621',
                '大林鎮':'622',
                '溪口鄉':'623',
                '義竹鄉':'624',
                '布袋鎮':'625'
            },
    '台南市':{
                '請選擇':'0',
                '中西區':'700',
                '東區':'701',
                '南區':'702',
                '北區':'704',
                '安平區':'708',
                '安南區':'709',
                '永康區':'710',
                '歸仁區':'711',
                '新化區':'712',
                '左鎮區':'713',
                '玉井區':'714',
                '楠西區':'715',
                '南化區':'716',
                '仁德區':'717',
                '關廟區':'718',
                '龍崎區':'719',
                '官田區':'720',
                '麻豆區':'721',
                '佳里區':'722',
                '西港區':'723',
                '七股區':'724',
                '將軍區':'725',
                '學甲區':'726',
                '北門區':'727',
                '新營區':'730',
                '後壁區':'731',
                '白河區':'732',
                '東山區':'733',
                '六甲區':'734',
                '下營區':'735',
                '柳營區':'736',
                '鹽水區':'737',
                '善化區':'741',
                '大內區':'742',
                '山上區':'743',
                '新市區':'744',
                '安定區':'745'
            },
    '高雄市':{
                '請選擇':'0',
                '新興區':'800',
                '前金區':'801',
                '苓雅區':'802',
                '鹽埕區':'803',
                '鼓山區':'804',
                '旗津區':'805',
                '前鎮區':'806',
                '三民區':'807',
                '楠梓區':'811',
                '小港區':'812',
                '左營區':'813',
                '仁武區':'814',
                '大社區':'815',
                '岡山區':'820',
                '路竹區':'821',
                '阿蓮區':'822',
                '田寮區':'823',
                '燕巢區':'824',
                '橋頭區':'825',
                '梓官區':'826',
                '彌陀區':'827',
                '永安區':'828',
                '湖內區':'829',
                '鳳山區':'830',
                '大寮區':'831',
                '林園區':'832',
                '鳥松區':'833',
                '大樹區':'840',
                '旗山區':'842',
                '美濃區':'843',
                '六龜區':'844',
                '內門區':'845',
                '杉林區':'846',
                '甲仙區':'847',
                '桃源區':'848',
                '那瑪夏':'849',
                '茂林區':'851',
                '茄萣區':'852'
            },
    '屏東縣':{
                '請選擇':'0',
                '屏東市':'900',
                '三地門':'901',
                '霧台鄉':'902',
                '瑪家鄉':'903',
                '九如鄉':'904',
                '里港鄉':'905',
                '高樹鄉':'906',
                '鹽埔鄉':'907',
                '長治鄉':'908',
                '麟洛鄉':'909',
                '竹田鄉':'911',
                '內埔鄉':'912',
                '萬丹鄉':'913',
                '潮州鎮':'920',
                '泰武鄉':'921',
                '來義鄉':'922',
                '萬巒鄉':'923',
                '崁頂鄉':'924',
                '新埤鄉':'925',
                '南州鄉':'926',
                '林邊鄉':'927',
                '東港鎮':'928',
                '琉球鄉':'929',
                '佳冬鄉':'931',
                '新園鄉':'932',
                '枋寮鄉':'940',
                '枋山鄉':'941',
                '春日鄉':'942',
                '獅子鄉':'943',
                '車城鄉':'944',
                '牡丹鄉':'945',
                '恆春鎮':'946',
                '滿州鄉':'947'
            },
    '台東縣':{
                '請選擇':'0',
                '台東市':'950',
                '綠島鄉':'951',
                '蘭嶼鄉':'952',
                '延平鄉':'953',
                '卑南鄉':'954',
                '鹿野鄉':'955',
                '關山鎮':'956',
                '海端鄉':'957',
                '池上鄉':'958',
                '東河鄉':'959',
                '成功鎮':'961',
                '長濱鄉':'962',
                '太麻里':'963',
                '金峰鄉':'964',
                '大武鄉':'965',
                '達仁鄉':'966'
            },
    '花蓮縣':{
                '請選擇':'0',
                '花蓮市':'970',
                '新城鄉':'971',
                '秀林鄉':'972',
                '吉安鄉':'973',
                '壽豐鄉':'974',
                '鳳林鎮':'975',
                '光復鄉':'976',
                '豐濱鄉':'977',
                '瑞穗鄉':'978',
                '萬榮鄉':'979',
                '玉里鎮':'981',
                '卓溪鄉':'982',
                '富里鄉':'983'
            },
    '宜蘭縣':{
                '請選擇':'0',
                '宜蘭市':'260',
                '頭城鎮':'261',
                '礁溪鄉':'262',
                '壯圍鄉':'263',
                '員山鄉':'264',
                '羅東鎮':'265',
                '三星鄉':'266',
                '大同鄉':'267',
                '五結鄉':'268',
                '冬山鄉':'269',
                '蘇澳鎮':'270',
                '南澳鄉':'272'
            },
    '澎湖縣':{
                '請選擇':'0',
                '馬公市':'880',
                '西嶼鄉':'881',
                '望安鄉':'882',
                '七美鄉':'883',
                '白沙鄉':'884',
                '湖西鄉':'885'
            },
    '金門縣':{
                '請選擇':'0',
                '金沙鎮':'890',
                '金湖鎮':'891',
                '金寧鄉':'892',
                '金城鎮':'893',
                '烈嶼鄉':'894',
                '烏坵鄉':'896'
            },
    '連江縣':{
                '請選擇':'0',
                '南竿鄉':'209',
                '北竿鄉':'210',
                '莒光鄉':'211',
                '東引鄉':'212'
            }
};

function bcalendar_sel(con_id,year,month,day,field_name){
//-------------------------------------------------------
//動態生成年月日下拉
//-------------------------------------------------------
//con_id        容器id
//year          年
//month         月
//day           日
//field_name    欄位名稱
//-------------------------------------------------------

    //---------------------------------------------------
    //容器物件
    //---------------------------------------------------
    var oCon=document.getElementById(con_id);

    //---------------------------------------------------
    //建立年下拉物件
    //---------------------------------------------------
        var oyear   =document.createElement("SELECT");
        var year_id =con_id+'_'+'year';
        var unit    =5;
        var arry_val=[];
        var arry_txt=[];
        oyear.id=year_id;

        for(var i=year-unit;i<=year+unit;i++){
            arry_val.push(i);
            arry_txt.push(""+i+"年");
        }

        for(i=0;i<arry_val.length;i++){
            //建立option物件
            var oOpt=document.createElement("OPTION");
            oOpt.value=arry_val[i];
            oOpt.text =arry_txt[i];

            //附加
            oyear.options.add(oOpt);

            //選取預設年
            if(arry_val[i]==year){
                oOpt.selected=true;
            }
        }

    //---------------------------------------------------
    //建立月下拉物件
    //---------------------------------------------------
        var omonth  =document.createElement("SELECT");
        var month_id=con_id+'_'+'month';
        var arry_val=[];
        var arry_txt=[];
        omonth.id=month_id;

        for(var i=1;i<=12;i++){
            arry_val.push(i);
            arry_txt.push(""+i+"月");
        }

        for(i=0;i<arry_val.length;i++){
            //建立option物件
            var oOpt=document.createElement("OPTION");
            oOpt.value=arry_val[i];
            oOpt.text =arry_txt[i];

            //附加
            omonth.options.add(oOpt);

            //選取預設月
            if(arry_val[i]==month){
                oOpt.selected=true;
            }
        }

    //---------------------------------------------------
    //建立日下拉物件
    //---------------------------------------------------
    var oday    =document.createElement("SELECT");
    var day_id  =con_id+'_'+'day';
    var days    =(new Date(year,month,0)).getDate();
    var arry_val=[];
    var arry_txt=[];
    oday.id=day_id;

    //alert(days);
    for(var i=1;i<=days;i++){
        arry_val.push(i);
        arry_txt.push(""+i+"日");
    }

    for(i=0;i<arry_val.length;i++){
        //建立option物件
        var oOpt=document.createElement("OPTION");
        oOpt.value=arry_val[i];
        oOpt.text =arry_txt[i];

        //附加
        oday.options.add(oOpt);

        //選取預設月
        if(arry_val[i]==day){
            oOpt.selected=true;
        }
    }

    //---------------------------------------------------
    //建立文字方塊物件
    //---------------------------------------------------
    var otxt    =document.createElement("INPUT");
    var txt_id  =con_id+'_'+'txt';
    otxt.type ='text';
    otxt.id   =txt_id;
    otxt.name =field_name;
    otxt.value=year+"-"+month+"-"+day;
    otxt.style.display='none';

    //---------------------------------------------------
    //連動處理
    //---------------------------------------------------

        //FOR 年下拉
        oyear.setAttribute('year_id',oyear.id);
        oyear.setAttribute('month_id',omonth.id);
        oyear.setAttribute('day_id',oday.id);
        oyear.setAttribute('txt_id',otxt.id);
        oyear.onchange=function(){
            var year_id =this.getAttribute('year_id');
            var month_id=this.getAttribute('month_id');
            var day_id  =this.getAttribute('day_id');
            var txt_id  =this.getAttribute('txt_id');
            var oyear   =document.getElementById(year_id);
            var omonth  =document.getElementById(month_id);
            var oday    =document.getElementById(day_id);
            var otxt    =document.getElementById(txt_id);
            var year    =parseInt(oyear.value);
            var month   =parseInt(omonth.value);
            var day     =parseInt(oday.value);
            var days    =(new Date(year,month,0)).getDate();

            tday=(day<=days)?day:1;
            otxt.value=year+"-"+month+"-"+tday;
            //alert(year+','+month+','+day+','+days);

            //-------------------------------------------
            //For 年下拉
            //-------------------------------------------
                var unit=5;
                arry_val=[];
                arry_txt=[];
                this.innerHTML='';

                for(var i=year-unit;i<=year+unit;i++){
                    arry_val.push(i);
                    arry_txt.push(""+i+"年");
                }

                for(i=0;i<arry_val.length;i++){
                    var oOpt=document.createElement("OPTION");
                    oOpt.value=arry_val[i];
                    oOpt.text =arry_txt[i];
                    this.options.add(oOpt);

                    if(arry_val[i]==year){
                        oOpt.selected=true;
                    }
                }

            //-------------------------------------------
            //For 日下拉
            //-------------------------------------------
                day=(day<=days)?day:1;

                arry_val=[];
                arry_txt=[];
                oday.innerHTML='';
                for(var i=1;i<=days;i++){
                    arry_val.push(i);
                    arry_txt.push(""+i+"日");
                }

                for(i=0;i<arry_val.length;i++){
                    var oOpt=document.createElement("OPTION");
                    oOpt.value=arry_val[i];
                    oOpt.text =arry_txt[i];

                    oday.options.add(oOpt);

                    if(arry_val[i]==day){
                        oOpt.selected=true;
                    }
                }
        }

        //FOR 月下拉
        omonth.setAttribute('year_id',oyear.id);
        omonth.setAttribute('month_id',omonth.id);
        omonth.setAttribute('day_id',oday.id);
        omonth.setAttribute('txt_id',otxt.id);
        omonth.onchange=function(){
            var year_id =this.getAttribute('year_id');
            var month_id=this.getAttribute('month_id');
            var day_id  =this.getAttribute('day_id');
            var txt_id  =this.getAttribute('txt_id');
            var oyear   =document.getElementById(year_id);
            var omonth  =document.getElementById(month_id);
            var oday    =document.getElementById(day_id);
            var otxt    =document.getElementById(txt_id);
            var year    =parseInt(oyear.value);
            var month   =parseInt(omonth.value);
            var day     =parseInt(oday.value);
            var days    =(new Date(year,month,0)).getDate();

            otxt.value=year+"-"+month+"-"+day;
            //alert(year+','+month+','+day+','+days);

            //清空
            arry_val=[];
            arry_txt=[];
            oday.innerHTML='';

            for(var i=1;i<=days;i++){
                arry_val.push(i);
                arry_txt.push(""+i+"日");
            }

            for(i=0;i<arry_val.length;i++){
                //建立option物件
                var oOpt=document.createElement("OPTION");
                oOpt.value=arry_val[i];
                oOpt.text =arry_txt[i];

                //附加
                oday.options.add(oOpt);

                if(arry_val[i]==day){
                    oOpt.selected=true;
                }
            }

        }


        //FOR 日下拉
        oday.setAttribute('year_id',oyear.id);
        oday.setAttribute('month_id',omonth.id);
        oday.setAttribute('day_id',oday.id);
        oday.setAttribute('txt_id',otxt.id);
        oday.onchange=function(){
            var year_id =this.getAttribute('year_id');
            var month_id=this.getAttribute('month_id');
            var day_id  =this.getAttribute('day_id');
            var txt_id  =this.getAttribute('txt_id');
            var oyear   =document.getElementById(year_id);
            var omonth  =document.getElementById(month_id);
            var oday    =document.getElementById(day_id);
            var otxt    =document.getElementById(txt_id);
            var year    =parseInt(oyear.value);
            var month   =parseInt(omonth.value);
            var day     =parseInt(oday.value);
            var days    =(new Date(year,month,0)).getDate();

            otxt.value=year+"-"+month+"-"+day;
            //alert(year+','+month+','+day+','+days);
        }

    //---------------------------------------------------
    //附加到容器裡
    //---------------------------------------------------
    oCon.appendChild(oyear);
    oCon.appendChild(omonth);
    oCon.appendChild(oday);
    oCon.appendChild(otxt);
    oCon.oyear  =oyear;
    oCon.omonth =omonth;
    oCon.oday   =oday;
    oCon.otxt   =otxt;
    return oCon;
}

function bind_text(id,val){
//-------------------------------------------------------
//資料繫結,text
//-------------------------------------------------------
//name  物件name屬性
//val   值
//-------------------------------------------------------

    var obj=document.getElementById(id);
    if(obj){
        obj.value=val;
        return obj;
    }

    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function bind_radio(name,val){
//-------------------------------------------------------
//資料繫結,radio
//-------------------------------------------------------
//name  物件name屬性
//val   值
//---------------------------------------------------

    var objs=document.getElementsByName(name);
    for(var i=0;i<objs.length;i++){
        var obj=objs[i];
        if(trim(obj.value)==val){
            obj.checked=true;
            return obj;
            break;
        }
    }

    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}


function bind_checkbox(name,vals){
//-------------------------------------------------------
//資料繫結,checkbox
//-------------------------------------------------------
//name  物件name屬性
//vals  值串列
//-------------------------------------------------------

    var arry=vals.split(',');
    var objs=document.getElementsByName(name);
    var tmp =[];
    for(var i=0;i<objs.length;i++){
        var obj=objs[i];
        if(in_array(trim(obj.value),arry)){
            obj.checked=true;
            tmp.push(obj);
        }
    }
    return tmp;

    function in_array(val,arry){
        for(var i=0;i<arry.length;i++){
            if(val==arry[i]){
                return true;
                break;
            }
        }
        return false;
    }

    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function bind_select(name,vals,by){
//-------------------------------------------------------
//資料繫結,select
//-------------------------------------------------------
//name  物件name屬性
//vals  值串列
//by    比對值,或比對文字,預設 'val'
//      'val'  比對值
//      'txt'  比對文字
//-------------------------------------------------------
    if((by==undefined)||(by=='')){
        by='val';
    }

    var arry=vals.split(',');
    var obj=document.getElementById(name);

    for(var i=0;i<obj.options.length;i++){
        var opt=obj.options[i];

        if(by=='val'){
            if(in_array(trim(opt.value),arry)){
                opt.selected=true;
            }
        }else{
            if(in_array(trim(opt.text),arry)){
                opt.selected=true;
            }
        }
    }
    return obj;

    function in_array(val,arry){
        for(var i=0;i<arry.length;i++){
            if(val==arry[i]){
                return true;
                break;
            }
        }
        return false;
    }

    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function bmonth_sel(con_id,field_name,month,disabled){
//-------------------------------------------------------
//動態生成月下拉
//-------------------------------------------------------
//con_id        容器id
//field_name    欄位名稱
//month         月,預設今月
//disabled      停用,預設false
//-------------------------------------------------------

    //---------------------------------------------------
    //參數檢驗
    //---------------------------------------------------
    if((con_id==undefined)||(con_id=='')){
        return false;
    }
    if((field_name==undefined)||(field_name=='')){
        return false;
    }
    if((month==undefined)||(month=='')||(isNaN(month))){
        month=((new Date()).getMonth())+1;
    }
    if((disabled==undefined)||(disabled=='')){
        disabled=false;
    }

    //---------------------------------------------------
    //容器物件
    //---------------------------------------------------
    var oCon=document.getElementById(con_id);
    if(!oCon){
        return false;
    }

    //---------------------------------------------------
    //建立月下拉物件
    //---------------------------------------------------
        var omonth　=document.createElement("SELECT");
        var arry_val=[];
        var arry_txt=[];
        omonth.id  =field_name;
        omonth.name=field_name;

        for(var i=1;i<=12;i++){
            arry_val.push(i);
            arry_txt.push(""+i+"月");
        }

        for(i=0;i<arry_val.length;i++){

            var oOpt=document.createElement("OPTION");
            oOpt.value=arry_val[i];
            oOpt.text =arry_txt[i];

            omonth.options.add(oOpt);

            if(arry_val[i]==month){
                oOpt.selected=true;
            }
        }

    //停用
    if(disabled==true){
        omonth.disabled=true;
    }

    //---------------------------------------------------
    //附加到容器裡
    //---------------------------------------------------
    oCon.appendChild(omonth);
    oCon.omonth=omonth;
    return oCon;
}

function byear_sel(con_id,field_name,year,unit,disabled){
//-------------------------------------------------------
//動態生成年下拉
//-------------------------------------------------------
//con_id        容器id
//field_name    欄位名稱
//year          年,預設今年
//unit          跨矩,預設5
//disabled      停用,預設false
//-------------------------------------------------------

    //---------------------------------------------------
    //參數檢驗
    //---------------------------------------------------
    if((con_id==undefined)||(con_id=='')){
        return false;
    }
    if((field_name==undefined)||(field_name=='')){
        return false;
    }
    if((year==undefined)||(year=='')||(isNaN(year))){
        year=(new Date()).getFullYear();
    }
    if((unit==undefined)||(unit=='')||(isNaN(unit))){
        unit=5;
    }
    if((disabled==undefined)||(disabled=='')){
        disabled=false;
    }

    //---------------------------------------------------
    //容器物件
    //---------------------------------------------------
    var oCon=document.getElementById(con_id);
    if(!oCon){
        return false;
    }

    //---------------------------------------------------
    //建立年下拉物件
    //---------------------------------------------------
        var oyear   =document.createElement("SELECT");
        var arry_val=[];
        var arry_txt=[];
        oyear.id  =field_name;
        oyear.name=field_name;

        for(var i=year-unit;i<=year+unit;i++){
            arry_val.push(i);
            arry_txt.push(""+i+"年");
        }

        for(i=0;i<arry_val.length;i++){

            var oOpt=document.createElement("OPTION");
            oOpt.value=arry_val[i];
            oOpt.text =arry_txt[i];

            oyear.options.add(oOpt);

            if(arry_val[i]==year){
                oOpt.selected=true;
            }
        }

    //---------------------------------------------------
    //連動處理
    //---------------------------------------------------
        //FOR 年下拉
        oyear.setAttribute('year_id',oyear.id);
        oyear.setAttribute('unit',unit);
        oyear.onchange=function(){
            var year_id=this.getAttribute('year_id');
            var unit   =this.getAttribute('unit');

            var oyear=document.getElementById(year_id);
            var year =parseInt(oyear.value);
            var unit =parseInt(unit);

            //-------------------------------------------
            //For 年下拉
            //-------------------------------------------

                arry_val=[];
                arry_txt=[];
                this.innerHTML='';

                for(var i=year-unit;i<=year+unit;i++){
                    arry_val.push(i);
                    arry_txt.push(""+i+"年");
                }

                for(i=0;i<arry_val.length;i++){
                    var oOpt=document.createElement("OPTION");
                    oOpt.value=arry_val[i];
                    oOpt.text =arry_txt[i];
                    this.options.add(oOpt);

                    if(arry_val[i]==year){
                        oOpt.selected=true;
                    }
                }
    }

    //停用
    if(disabled==true){
        oyear.disabled=true;
    }

    //---------------------------------------------------
    //附加到容器裡
    //---------------------------------------------------
    oCon.appendChild(oyear);
    oCon.oyear  =oyear;
    return oCon;
}

function city_region_sel(city_id,region_id,city_val,region_val,use_type){
//-------------------------------------------------------
//縣市鄉鎮下拉
//-------------------------------------------------------
//city_id       縣市id
//region_id     鄉鎮id
//city_val      縣市值,預設 '請選擇'
//region_val    鄉鎮值,預設 '請選擇'
//use_type      用途: form|query,預設 'form'
//              form  用在一般表單裡,即無'請選擇'選項
//              query 用在查詢表單裡,即有'請選擇'選項
//-------------------------------------------------------

    //縣市鄉鎮陣列
    array_city={
        '請選擇':{
                    '請選擇':'0'
                },
        '基隆市':{
                    '請選擇':'0',
                    '仁愛區':'200',
                    '信義區':'201',
                    '中正區':'202',
                    '中山區':'203',
                    '安樂區':'204',
                    '暖暖區':'205',
                    '七堵區':'206'
                },
        '台北市':{
                    '請選擇':'0',
                    '中正區':'100',
                    '大同區':'103',
                    '中山區':'104',
                    '松山區':'105',
                    '大安區':'106',
                    '萬華區':'108',
                    '信義區':'110',
                    '士林區':'111',
                    '北投區':'112',
                    '內湖區':'114',
                    '南港區':'115',
                    '文山區':'116'
                },
        '新北市':{
                    '請選擇':'0',
                    '萬里區':'207',
                    '金山區':'208',
                    '板橋區':'220',
                    '汐止區':'221',
                    '深坑區':'222',
                    '石碇區':'223',
                    '瑞芳區':'224',
                    '平溪區':'226',
                    '雙溪區':'227',
                    '貢寮區':'228',
                    '新店區':'231',
                    '坪林區':'232',
                    '烏來區':'233',
                    '永和區':'234',
                    '中和區':'235',
                    '土城區':'236',
                    '三峽區':'237',
                    '樹林區':'238',
                    '鶯歌區':'239',
                    '三重區':'241',
                    '新莊區':'242',
                    '泰山區':'243',
                    '林口區':'244',
                    '蘆洲區':'247',
                    '五股區':'248',
                    '八里區':'249',
                    '淡水區':'251',
                    '三芝區':'252',
                    '石門區':'253'
                },
        '桃園縣':{
                    '請選擇':'0',
                    '中壢市':'320',
                    '平鎮市':'324',
                    '龍潭鄉':'325',
                    '楊梅市':'326',
                    '新屋鄉':'327',
                    '觀音鄉':'328',
                    '桃園市':'330',
                    '龜山鄉':'333',
                    '八德市':'334',
                    '大溪鎮':'335',
                    '復興鄉':'336',
                    '大園鄉':'337',
                    '蘆竹鄉':'338'
                },
        '新竹市':{
                    '請選擇':'0',
                    '東區':'300',
                    '北區':'300',
                    '香山區':'300'
                },
        '新竹縣':{
                    '請選擇':'0',
                    '竹北市':'302',
                    '湖口鄉':'303',
                    '新豐鄉':'304',
                    '新埔鎮':'305',
                    '關西鎮':'306',
                    '芎林鄉':'307',
                    '寶山鄉':'308',
                    '竹東鎮':'310',
                    '五峰鄉':'311',
                    '橫山鄉':'312',
                    '尖石鄉':'313',
                    '北埔鄉':'314',
                    '峨眉鄉':'315'
                },
        '苗栗縣':{
                    '請選擇':'0',
                    '竹南鎮':'350',
                    '頭份鎮':'351',
                    '三灣鄉':'352',
                    '南庄鄉':'353',
                    '獅潭鄉':'354',
                    '後龍鎮':'356',
                    '通霄鎮':'357',
                    '苑裡鎮':'358',
                    '苗栗市':'360',
                    '造橋鄉':'361',
                    '頭屋鄉':'362',
                    '公館鄉':'363',
                    '大湖鄉':'364',
                    '泰安鄉':'365',
                    '銅鑼鄉':'366',
                    '三義鄉':'367',
                    '西湖鄉':'368',
                    '卓蘭鎮':'369'
                },
        '台中市':{
                    '請選擇':'0',
                    '中區':'400',
                    '東區':'401',
                    '南區':'402',
                    '西區':'403',
                    '北區':'404',
                    '北屯區':'406',
                    '西屯區':'407',
                    '南屯區':'408',
                    '太平區':'411',
                    '大里區':'412',
                    '霧峰區':'413',
                    '烏日區':'414',
                    '豐原區':'420',
                    '后里區':'421',
                    '石岡區':'422',
                    '東勢區':'423',
                    '和平區':'424',
                    '新社區':'426',
                    '潭子區':'427',
                    '大雅區':'428',
                    '神岡區':'429',
                    '大肚區':'432',
                    '沙鹿區':'433',
                    '龍井區':'434',
                    '梧棲區':'435',
                    '清水區':'436',
                    '大甲區':'437',
                    '外埔區':'438',
                    '大安區':'439'
                },
        '彰化縣':{
                    '請選擇':'0',
                    '彰化市':'500',
                    '芬園鄉':'502',
                    '花壇鄉':'503',
                    '秀水鄉':'504',
                    '鹿港鎮':'505',
                    '福興鄉':'506',
                    '線西鄉':'507',
                    '和美鎮':'508',
                    '伸港鄉':'509',
                    '員林鎮':'510',
                    '社頭鄉':'511',
                    '永靖鄉':'512',
                    '埔心鄉':'513',
                    '溪湖鎮':'514',
                    '大村鄉':'515',
                    '埔鹽鄉':'516',
                    '田中鎮':'520',
                    '北斗鎮':'521',
                    '田尾鄉':'522',
                    '埤頭鄉':'523',
                    '溪州鄉':'524',
                    '竹塘鄉':'525',
                    '二林鎮':'526',
                    '大城鄉':'527',
                    '芳苑鄉':'528',
                    '二水鄉':'530'
                },
        '南投縣':{
                    '請選擇':'0',
                    '南投市':'540',
                    '中寮鄉':'541',
                    '草屯鎮':'542',
                    '國姓鄉':'544',
                    '埔里鎮':'545',
                    '仁愛鄉':'546',
                    '名間鄉':'551',
                    '集集鎮':'552',
                    '水里鄉':'553',
                    '魚池鄉':'555',
                    '信義鄉':'556',
                    '竹山鎮':'557',
                    '鹿谷鄉':'558'
                },

        '雲林縣':{
                    '請選擇':'0',
                    '斗南鎮':'630',
                    '大埤鄉':'631',
                    '虎尾鎮':'632',
                    '土庫鎮':'633',
                    '褒忠鄉':'634',
                    '東勢鄉':'635',
                    '台西鄉':'636',
                    '崙背鄉':'637',
                    '麥寮鄉':'638',
                    '斗六市':'640',
                    '林內鄉':'643',
                    '古坑鄉':'646',
                    '莿桐鄉':'647',
                    '西螺鎮':'648',
                    '二崙鄉':'649',
                    '北港鎮':'651',
                    '水林鄉':'652',
                    '口湖鄉':'653',
                    '四湖鄉':'654',
                    '元長鄉':'655'
                },
        '嘉義市':{
                    '請選擇':'0',
                    '東區':'600',
                    '西區':'600'
                },
        '嘉義縣':{
                    '請選擇':'0',
                    '番路鄉':'602',
                    '梅山鄉':'603',
                    '竹崎鄉':'604',
                    '阿里山':'605',
                    '中埔鄉':'606',
                    '大埔鄉':'607',
                    '水上鄉':'608',
                    '鹿草鄉':'611',
                    '太保市':'612',
                    '朴子市':'613',
                    '東石鄉':'614',
                    '六腳鄉':'615',
                    '新港鄉':'616',
                    '民雄鄉':'621',
                    '大林鎮':'622',
                    '溪口鄉':'623',
                    '義竹鄉':'624',
                    '布袋鎮':'625'
                },
        '台南市':{
                    '請選擇':'0',
                    '中西區':'700',
                    '東區':'701',
                    '南區':'702',
                    '北區':'704',
                    '安平區':'708',
                    '安南區':'709',
                    '永康區':'710',
                    '歸仁區':'711',
                    '新化區':'712',
                    '左鎮區':'713',
                    '玉井區':'714',
                    '楠西區':'715',
                    '南化區':'716',
                    '仁德區':'717',
                    '關廟區':'718',
                    '龍崎區':'719',
                    '官田區':'720',
                    '麻豆區':'721',
                    '佳里區':'722',
                    '西港區':'723',
                    '七股區':'724',
                    '將軍區':'725',
                    '學甲區':'726',
                    '北門區':'727',
                    '新營區':'730',
                    '後壁區':'731',
                    '白河區':'732',
                    '東山區':'733',
                    '六甲區':'734',
                    '下營區':'735',
                    '柳營區':'736',
                    '鹽水區':'737',
                    '善化區':'741',
                    '大內區':'742',
                    '山上區':'743',
                    '新市區':'744',
                    '安定區':'745'
                },
        '高雄市':{
                    '請選擇':'0',
                    '新興區':'800',
                    '前金區':'801',
                    '苓雅區':'802',
                    '鹽埕區':'803',
                    '鼓山區':'804',
                    '旗津區':'805',
                    '前鎮區':'806',
                    '三民區':'807',
                    '楠梓區':'811',
                    '小港區':'812',
                    '左營區':'813',
                    '仁武區':'814',
                    '大社區':'815',
                    '岡山區':'820',
                    '路竹區':'821',
                    '阿蓮區':'822',
                    '田寮區':'823',
                    '燕巢區':'824',
                    '橋頭區':'825',
                    '梓官區':'826',
                    '彌陀區':'827',
                    '永安區':'828',
                    '湖內區':'829',
                    '鳳山區':'830',
                    '大寮區':'831',
                    '林園區':'832',
                    '鳥松區':'833',
                    '大樹區':'840',
                    '旗山區':'842',
                    '美濃區':'843',
                    '六龜區':'844',
                    '內門區':'845',
                    '杉林區':'846',
                    '甲仙區':'847',
                    '桃源區':'848',
                    '那瑪夏':'849',
                    '茂林區':'851',
                    '茄萣區':'852'
                },
        '屏東縣':{
                    '請選擇':'0',
                    '屏東市':'900',
                    '三地門':'901',
                    '霧台鄉':'902',
                    '瑪家鄉':'903',
                    '九如鄉':'904',
                    '里港鄉':'905',
                    '高樹鄉':'906',
                    '鹽埔鄉':'907',
                    '長治鄉':'908',
                    '麟洛鄉':'909',
                    '竹田鄉':'911',
                    '內埔鄉':'912',
                    '萬丹鄉':'913',
                    '潮州鎮':'920',
                    '泰武鄉':'921',
                    '來義鄉':'922',
                    '萬巒鄉':'923',
                    '崁頂鄉':'924',
                    '新埤鄉':'925',
                    '南州鄉':'926',
                    '林邊鄉':'927',
                    '東港鎮':'928',
                    '琉球鄉':'929',
                    '佳冬鄉':'931',
                    '新園鄉':'932',
                    '枋寮鄉':'940',
                    '枋山鄉':'941',
                    '春日鄉':'942',
                    '獅子鄉':'943',
                    '車城鄉':'944',
                    '牡丹鄉':'945',
                    '恆春鎮':'946',
                    '滿州鄉':'947'
                },
        '台東縣':{
                    '請選擇':'0',
                    '台東市':'950',
                    '綠島鄉':'951',
                    '蘭嶼鄉':'952',
                    '延平鄉':'953',
                    '卑南鄉':'954',
                    '鹿野鄉':'955',
                    '關山鎮':'956',
                    '海端鄉':'957',
                    '池上鄉':'958',
                    '東河鄉':'959',
                    '成功鎮':'961',
                    '長濱鄉':'962',
                    '太麻里':'963',
                    '金峰鄉':'964',
                    '大武鄉':'965',
                    '達仁鄉':'966'
                },
        '花蓮縣':{
                    '請選擇':'0',
                    '花蓮市':'970',
                    '新城鄉':'971',
                    '秀林鄉':'972',
                    '吉安鄉':'973',
                    '壽豐鄉':'974',
                    '鳳林鎮':'975',
                    '光復鄉':'976',
                    '豐濱鄉':'977',
                    '瑞穗鄉':'978',
                    '萬榮鄉':'979',
                    '玉里鎮':'981',
                    '卓溪鄉':'982',
                    '富里鄉':'983'
                },
        '宜蘭縣':{
                    '請選擇':'0',
                    '宜蘭市':'260',
                    '頭城鎮':'261',
                    '礁溪鄉':'262',
                    '壯圍鄉':'263',
                    '員山鄉':'264',
                    '羅東鎮':'265',
                    '三星鄉':'266',
                    '大同鄉':'267',
                    '五結鄉':'268',
                    '冬山鄉':'269',
                    '蘇澳鎮':'270',
                    '南澳鄉':'272'
                },
        '澎湖縣':{
                    '請選擇':'0',
                    '馬公市':'880',
                    '西嶼鄉':'881',
                    '望安鄉':'882',
                    '七美鄉':'883',
                    '白沙鄉':'884',
                    '湖西鄉':'885'
                },
        '金門縣':{
                    '請選擇':'0',
                    '金沙鎮':'890',
                    '金湖鎮':'891',
                    '金寧鄉':'892',
                    '金城鎮':'893',
                    '烈嶼鄉':'894',
                    '烏坵鄉':'896'
                },
        '連江縣':{
                    '請選擇':'0',
                    '南竿鄉':'209',
                    '北竿鄉':'210',
                    '莒光鄉':'211',
                    '東引鄉':'212'
                }
    };

    //預設值
    city_def  ='桃園縣';
    region_def='桃園市';

    //參數檢驗
    if((city_id==undefined)||(trim(city_id)=='')){
        return false;
    }
    if((region_id==undefined)||(trim(region_id)=='')){
        return false;
    }
    if((use_type==undefined)||(trim(use_type)=='')){
        use_type='form';
    }
    if((city_val==undefined)||(trim(city_val)==''||(trim(city_val)=='請選擇'))){
        if(use_type.toLowerCase()=='form'){
            city_val=city_def;
        }else{
            city_val='請選擇';
        }
    }
    if((region_val==undefined)||(trim(region_val)==''||(trim(region_val)=='請選擇'))){
        if(use_type.toLowerCase()=='form'){
            region_val=region_def;
        }else{
            region_val='請選擇';
        }
    }

    //縣市鄉鎮下拉
    var ocity   =document.getElementById(city_id);
    var oregion =document.getElementById(region_id);
    if((!ocity)||(!oregion)){
        return false;
    }

    //縣市
    for(var key in array_city){
        if(use_type.toLowerCase()=='form'){
            if(key.toLowerCase()=='請選擇'){
                continue;
            }
        }
        var o_opt=document.createElement('OPTION');
        o_opt.value=key;
        o_opt.text =key;
        ocity.options.add(o_opt);

        if(key.toLowerCase()==city_val){
           o_opt.selected=true;
        }
    }

    //鄉鎮
    for(var key in array_city[city_val]){
        if(use_type.toLowerCase()=='form'){
            if(key.toLowerCase()=='請選擇'){
                continue;
            }
        }

        var o_opt=document.createElement('OPTION');
        o_opt.value=key;
        o_opt.text =key;
        oregion.options.add(o_opt);

        if(key.toLowerCase()==region_val){
           o_opt.selected=true;
        }
    }

    //連動處理
    ocity.setAttribute('region_id',region_id);
    ocity.setAttribute('use_type',use_type);
    ocity.onchange=function(){

        //屬性
        var region_id=this.getAttribute('region_id');
        var use_type     =this.getAttribute('use_type');

        //取回鄉鎮下拉
        var oregion=document.getElementById(region_id);

        //取回縣市名稱
        var city=this.value;

        //取回對應鄉鎮區名稱
        var regions=[];

        for(var key in array_city[city]){
            if(use_type.toLowerCase()=='form'){
                if(key.toLowerCase()=='請選擇'){
                    continue;
                }
            }
            var zip=array_city[city][key];
            regions.push(key);
        }

        //清掉鄉鎮下拉既有選項
        oregion.innerHTML='';

        //回填新的項目
        for(var i=0;i<regions.length;i++){
            var o_opt=document.createElement('OPTION');
            o_opt.value=regions[i];
            o_opt.text =regions[i];
            oregion.options.add(o_opt);
        }
    }

    function trim(str){
    //去字串前後空白
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function create_checkbox(target,field,arry_sels,arry_vals,arry_txts){
//-------------------------------------------------------
//動態生成CHECKBOX
//-------------------------------------------------------
//target        容器物件,或容器id
//field         CHECKBOX物件id,name值
//arry_sels     預選值
//arry_vals     項目值陣列
//arry_txts     項目文字陣列
//
//本函式執行成功,會傳回容器物件,並可以利用下面方式
//取得CHECKBOX物件.
//  ocon=create_checkbox(參數..)
//  ocon.ochs
//
//本函式執行失敗,回傳false
//-------------------------------------------------------

    //參數檢驗
    if(typeof(target)=='object'){
       var ocon=target;
    }else{
        if((target==undefined)||(trim(target)=='')){
            return false;
        }
        var ocon=document.getElementById(target);
        if(!ocon){
            return false;
        }
    }
    if((arry_vals==undefined)||(arry_vals.toString()=='')){
        return false;
    }
    if((arry_txts==undefined)||(arry_txts.toString()=='')){
        return false;
    }
    ocon.innerHTML="";

    //處理
    var ochs=[];
    for(var i=0;i<arry_vals.length;i++){
        var value=arry_vals[i];
        var text =arry_txts[i];

        var och =createElement('INPUT',field);
        var otxt=document.createTextNode(text);

        och.name =field;
        och.type ="CHECKBOX";
        och.value=value;
        och.setAttribute('text',text);

        //附加
        ocon.appendChild(och);
        ocon.appendChild(otxt);
        ochs.push(och);
    }

    //核取
    var objs=document.getElementsByName(field);
    for(var i=0;i<objs.length;i++){
        var obj=objs[i];

        if(in_array(obj.value,arry_sels)){
            obj.checked=true;
        }
    }

    //回傳
    ocon.ochs=ochs;
    return ocon;

    //子函式
    function createElement(type,name){
        var element=null;

        try{
        //FOR IE
            element=document.createElement('<'+type+' name="'+name+'">');
        }
        catch(e){}

        if(!element){
          element=document.createElement(type);
          element.name=name;
        }
        return element;
    }
    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
    function in_array(val,array){
        for(var i=0;i<array.length;i++){
            if(val==array[i]){
                return true;
            }
        }
        return false;
    }
}

function create_radio(target,field,val,arry_vals,arry_txts){
//-------------------------------------------------------
//動態生成RADIO
//-------------------------------------------------------
//target        容器物件,或容器id
//field         RADIO物件id,name值
//val           預選值
//arry_vals     項目值陣列
//arry_txts     項目文字陣列
//
//本函式執行成功,會傳回容器物件,並可以利用下面方式
//取得所有RADIO物件.
//  ocon=create_radio(參數..)
//  ocon.ords
//
//本函式執行失敗,回傳false
//-------------------------------------------------------

    //參數檢驗
    if(typeof(target)=='object'){
       var ocon=target;
    }else{
        if((target==undefined)||(trim(target)=='')){
            return false;
        }
        var ocon=document.getElementById(target);
        if(!ocon){
            return false;
        }
    }
    if((arry_vals==undefined)||(arry_vals.toString()=='')){
        return false;
    }
    if((arry_txts==undefined)||(arry_txts.toString()=='')){
        return false;
    }
    ocon.innerHTML="";

    //處理
    var ords=[];
    for(var i=0;i<arry_vals.length;i++){
        var value=arry_vals[i];
        var text =arry_txts[i];

        var ord =createElement('INPUT',field);
        var otxt=document.createTextNode(text);

        ord.name =field;
        ord.type ="RADIO";
        ord.value=value;
        ord.setAttribute('text',text);

        //附加
        ocon.appendChild(ord);
        ocon.appendChild(otxt);
        ords.push(ord);
    }

    //核取
    var objs=document.getElementsByName(field);
    for(var i=0;i<objs.length;i++){
        var obj=objs[i];

        if(obj.value==val){
            obj.checked=true;
            break;
        }
    }

    //回傳
    ocon.ords=ords;
    return ocon;

    //子函式
    function createElement(type,name){
        var element=null;

        try{
        //FOR IE
            element=document.createElement('<'+type+' name="'+name+'">');
        }
        catch(e){}

        if(!element){
          element=document.createElement(type);
          element.name=name;
        }
        return element;
    }
    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
    function in_array(val,array){
        for(var i=0;i<array.length;i++){
            if(val==array[i]){
                return true;
            }
        }
        return false;
    }
}

function create_select(target,field,arry_sels,arry_vals,arry_txts,multiple,size){
//-------------------------------------------------------
//動態生成下拉選單
//-------------------------------------------------------
//target        容器物件,或容器id
//field         下拉選單id,name值
//arry_sels     預選值陣列
//arry_vals     項目值陣列
//arry_txts     項目文字陣列
//multiple      是否複選,預設 false
//arry_txts     顯示個數,預設 1
//
//本函式執行成功,會傳回容器物件,並可以利用下面方式
//取得下拉選單物件.
//  ocon=create_select(參數..)
//  ocon.osel
//
//本函式執行失敗,回傳false
//-------------------------------------------------------

    //參數檢驗
    if(typeof(target)=='object'){
       var oCon=target;
    }else{
        if((target==undefined)||(trim(target)=='')){
            return false;
        }
        var oCon=document.getElementById(target);
        if(!oCon){
            return false;
        }
    }
    if((arry_vals==undefined)||(arry_vals.toString()=='')){
        return false;
    }
    if((arry_txts==undefined)||(arry_txts.toString()=='')){
        return false;
    }
    var multiple=multiple||false;
    var size    =size||1;

    if(multiple==true){
    //多選
        try{
            //For IE6,多選修正,避免無法複選
            var oSel=document.createElement('<select multiple>');

            oSel.multiple=true;
            oSel.setAttribute("multiple","multiple");
            oSel.setAttribute("size",size);

            oSel.id  =field;
            oSel.name=field;
        }catch(event){
            //For other
            var oSel=document.createElement('select');

            oSel.multiple=true;
            oSel.setAttribute("multiple","multiple");
            oSel.setAttribute("size",size);

            oSel.id  =field;
            oSel.name=field;
        }
    }else{
    //單選
        var oSel=document.createElement('select');
        oSel.setAttribute("size",size);
        oSel.id  =field;
        oSel.name=field;
    }

    //建立option
    for(var i=0;i<arry_vals.length;i++){
        var oOpt=document.createElement("option");
        oOpt.value=arry_vals[i];
        oOpt.text =arry_txts[i];

        //附加option
        oSel.options.add(oOpt);

        //核取
        if(in_array(arry_vals[i],arry_sels)){
            oOpt.selected=true;
        }
    }

    //附加select
    oCon.innerHTML="";
    oCon.appendChild(oSel);
    oCon.osel=oSel;

    //回傳
    return oCon;

    //子函式
    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
    function in_array(val,array){
        for(var i=0;i<array.length;i++){
            if(val==array[i]){
                return true;
            }
        }
        return false;
    }
}

function create_text(target,field,val){
//-------------------------------------------------------
//動態建立文件方塊
//-------------------------------------------------------
//target    容器物件,或容器id
//field     文件方塊id,name值
//val       欄位值
//
//本函式執行成功,會傳回容器物件,並可以利用下面方式
//取得文件方塊物件.
//  ocon=create_text(參數..)
//  ocon.otxt
//
//本函式執行失敗,回傳false
//-------------------------------------------------------

    //參數檢驗
    if(typeof(target)=='object'){
       var ocon=target;
    }else{
        if((target==undefined)||(trim(target)=='')){
            return false;
        }
        var ocon=document.getElementById(target);
        if(!ocon){
            return false;
        }
    }
    ocon.innerHTML="";

    //建立
    var oTxt=document.createElement("INPUT");

    oTxt.type ="TEXT";
    oTxt.id   =field;
    oTxt.name =field;
    oTxt.value=val;

    //附加
    ocon.appendChild(oTxt);

    //回傳
    ocon.otxt=oTxt;
    return ocon;

    //子函式
    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
    function in_array(val,array){
        for(var i=0;i<array.length;i++){
            if(val==array[i]){
                return true;
            }
        }
        return false;
    }
}

function db_checkbox(id,arry_sel,arry_op){
//-------------------------------------------------------
//資料繫結核取方塊
//-------------------------------------------------------
//id        核取方塊 id
//arry_sel  選取值陣列
//arry_op   設定參數陣列
//-------------------------------------------------------

    //取物件
    var oChs=document.getElementsByName(id);
    if(!oChs){
        return false;
    }

    //核取處理
    if(arry_sel){
        for(var i=0;i<oChs.length;i++)
        {
            var oCh=oChs[i];
            for(var j=0;j<arry_sel.length;j++)
            {
                if(oCh.value==arry_sel[j]){
                    oCh.checked=true;
                    break;
                }
            }
        }
    }

    //設定參數陣列
    if(arry_op){
        try{
        //-----------------------------------------------
        //套用設定
        //-----------------------------------------------

            //列舉設定
            var out='';
            for(key in arry_op){
                var val=arry_op[key];
                out+=key+'='+val+'\n';
            }
            //alert(out);

            //套用設定
            if(arry_op['disabled']!=undefined){
                var bool=(arry_op['disabled']==1)?true:false;
                for(var i=0;i<oChs.length;i++){
                    oChs[i].disabled=bool;
                }
            }
        }catch(e){
            return false;
        }
    }
}

function db_radio(id,sel,arry_op){
//-------------------------------------------------------
//資料繫結圈選方塊
//-------------------------------------------------------
//id        圈選方塊 id
//sel       選取值
//arry_op   設定參數陣列
//-------------------------------------------------------

    //取物件
    var oRds=document.getElementsByName(id);
    if(!oRds){
        return false;
    }

    //核取處理
    for(var i=0;i<oRds.length;i++)
    {
        var oRd=oRds[i];

        if(oRd.value==sel){
            oRd.checked=true;
        }
    }

    //設定參數陣列
    if(arry_op){
        try{
        //-----------------------------------------------
        //套用設定
        //-----------------------------------------------

            //列舉設定
            var out='';
            for(key in arry_op){
                var val=arry_op[key];
                out+=key+'='+val+'\n';
            }
            //alert(out);

            //套用設定
            if(arry_op['disabled']!=undefined){
                var bool=(arry_op['disabled']==1)?true:false;
                for(var i=0;i<oRds.length;i++){
                    oRds[i].disabled=bool;
                }
            }
        }catch(e){
            return false;
        }
    }
}

function db_select(id,by,create,sel,arry_val,arry_txt,arry_op){
//-------------------------------------------------------
//資料繫結下拉選單
//-------------------------------------------------------
//id        下拉選單 id
//by        val=值比對,txt=文字比對
//create    是否新建
//sel       選取值
//arry_val  選項值陣列
//arry_txt  選項文字陣列
//arry_op   設定參數陣列
//-------------------------------------------------------

    //取物件
    var oSel=document.getElementById(id);
    if(!oSel){
        return false;
    }

    //核取處理
    for(var i=0;i<arry_val.length;i++){

        //是否新建
        if(create==1){
            var oOpt=document.createElement('option');
            oOpt.value=arry_val[i];
            oOpt.text =arry_txt[i];

            oSel.options.add(oOpt);
        }else{
            try{
                var oOpt=oSel.options[i];
            }catch(e){}
        }

        try{
            if(by=='val'){
            //選項值比對
                if(arry_val[i]==sel){
                    oSel.focus();
                    oOpt.selected=true;
                }
            }else{
            //選項文字比對
                if(arry_txt[i]==sel){
                    oSel.focus();
                    oOpt.selected=true;
                }
            }
        }catch(e){}
    }

    //設定參數陣列
    if(arry_op){
        try{
        //-----------------------------------------------
        //套用設定
        //-----------------------------------------------

            //列舉設定
            var out='';
            for(key in arry_op){
                var val=arry_op[key];
                out+=key+'='+val+'\n';
            }
            //alert(out);

            //套用設定
            if(arry_op['disabled']!=undefined){
                var bool=(arry_op['disabled']==1)?true:false;
                oSel.disabled=bool;
            }
        }catch(e){
            return false;
        }
    }
}
function db_textarea(id,val,arry_op){
//-------------------------------------------------------
//繫結文字欄位
//-------------------------------------------------------
//id        文字欄位id
//val       欄位值
//arry_op   設定參數陣列
//-------------------------------------------------------

    var oTxta=document.getElementById(id);

    if(oTxta){
        oTxta.value=val;
    }

    //設定參數陣列
    if(arry_op){
        try{
        //-----------------------------------------------
        //套用設定
        //-----------------------------------------------

            //列舉設定
            var out='';
            for(key in arry_op){
                var val=arry_op[key];
                out+=key+'='+val+'\n';
            }
            //alert(out);

            //套用設定
            if(arry_op['readonly']!=undefined){
                var bool=(arry_op['readonly']==1)?true:false;
                oTxta.readOnly=bool;
            }

            if(arry_op['disabled']!=undefined){
                var bool=(arry_op['disabled']==1)?true:false;
                oTxta.disabled=bool;
            }
        }catch(e){
            return false;
        }
    }
}

function db_txt(id,val,arry_op){
//-------------------------------------------------------
//繫結文字欄位
//-------------------------------------------------------
//id        文字欄位id
//val       欄位值
//arry_op   設定參數陣列
//-------------------------------------------------------

    var oTxt=document.getElementById(id);

    if(oTxt){
        oTxt.value=val;
    }

    //設定參數陣列
    if(arry_op){
        try{
        //-----------------------------------------------
        //套用設定
        //-----------------------------------------------

            //列舉設定
            var out='';
            for(key in arry_op){
                var val=arry_op[key];
                out+=key+'='+val+'\n';
            }
            //alert(out);

            //套用設定
            if(arry_op['readonly']!=undefined){
                var bool=(arry_op['readonly']==1)?true:false;
                oTxt.readOnly=bool;
            }

            if(arry_op['disabled']!=undefined){
                var bool=(arry_op['disabled']==1)?true:false;
                oTxt.disabled=bool;
            }
        }catch(e){
            return false;
        }
    }
}

function get_checkbox_val(target){
//-------------------------------------------------------
//取得核取方塊選取值
//-------------------------------------------------------
//target    物件,或id
//
//本函式成功時,會傳回選取值陣列
//本函式失敗時,會傳回空陣列
//-------------------------------------------------------

    //參數檢驗
    if(typeof(target)=='object'){
       var ochs=target;
    }else{
        if((target==undefined)||(trim(target)=='')){
            return [];
        }
        var ochs=document.getElementsByName(target);
        if(!ochs){
            return [];
        }
    }

    //處理
    var arry=[];
    for(var i=0;i<ochs.length;i++){
        var och=ochs[i];

        if(och.checked){
            arry.push(och.value);
        }
    }
    return arry;

    //子函式
    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
    function in_array(val,array){
        for(var i=0;i<array.length;i++){
            if(val==array[i]){
                return true;
            }
        }
        return false;
    }
}

function get_radio_val(name){
//-------------------------------------------------------
//取得radio元件選取值
//-------------------------------------------------------
//name  radio元件的name屬性
//-------------------------------------------------------

    //參數檢驗
    if((name==undefined)||(trim(name)=='')){
        return '';
    }
    var ords=document.getElementsByName(name);
    if(!ords){
        return '';
    }

    var val="";
    for(var i=0;i<ords.length;i++){
        var ord=ords[i];

        if(ord.checked){
            val=ord.value;
            break;
        }
    }
    return val;

    //子函式
    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
    function in_array(val,array){
        for(var i=0;i<array.length;i++){
            if(val==array[i]){
                return true;
            }
        }
        return false;
    }
}

function get_select_val(target){
//-------------------------------------------------------
//取得下拉選單選取值
//-------------------------------------------------------
//target    物件,或id
//
//本函式成功時,會傳回選取值陣列
//本函式失敗時,會傳回空陣列
//-------------------------------------------------------

    //參數檢驗
    if(typeof(target)=='object'){
       var oSel=target;
    }else{
        if((target==undefined)||(trim(target)=='')){
            return [];
        }
        var oSel=document.getElementById(target);
        if(!oSel){
            return [];
        }
    }

    //處理
    var arry=[];
    for(var i=0;i<oSel.options.length;i++){
        var oOpt=oSel.options[i];

        if(oOpt.selected){
            arry.push(oOpt.value);
        }
    }

    //回傳
    return arry;

    //子函式
    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
    function in_array(val,array){
        for(var i=0;i<array.length;i++){
            if(val==array[i]){
                return true;
            }
        }
        return false;
    }
}

function month_sel(id,month,disabled){
//-------------------------------------------------------
//繫結月下拉
//-------------------------------------------------------
//id        物件id
//month     月份,預設本月
//disabled  停用,預設false
//-------------------------------------------------------

    //---------------------------------------------------
    //參數檢驗
    //---------------------------------------------------

    if((id==undefined)||(id=='')){
        return false;
    }
    if((month==undefined)||(month=='')||(isNaN(month))){
        var exp=new RegExp("^(0?[1-9]|10|11|12)");
        if(!exp.test(month)){
            month=((new Date()).getMonth())+1;
        }
    }
    if((disabled==undefined)||(disabled=='')){
        disabled=false;
    }

    //---------------------------------------------------
    //建立月下拉物件
    //---------------------------------------------------

        var omonth=document.getElementById(id);
        if(!omonth){
            return false;
        }

        var arry_val=[];
        var arry_txt=[];

        for(var i=1;i<=12;i++){
            arry_val.push(i);
            arry_txt.push(""+i+"月");
        }

        for(i=0;i<arry_val.length;i++){
            var oOpt=document.createElement("OPTION");
            oOpt.value=arry_val[i];
            oOpt.text =arry_txt[i];

            omonth.options.add(oOpt);

            if(arry_val[i]==month){
                oOpt.selected=true;
            }
        }

    //---------------------------------------------------
    //連動處理
    //---------------------------------------------------

        //FOR 月下拉
        omonth.setAttribute('month_id',omonth.id);
        omonth.onchange=function(){
            var month_id=this.getAttribute('month_id');

            var omonth=document.getElementById(month_id);
            var month =parseInt(omonth.value);

            //-------------------------------------------
            //For 月下拉
            //-------------------------------------------
                arry_val=[];
                arry_txt=[];
                this.innerHTML='';

                for(var i=1;i<=12;i++){
                    arry_val.push(i);
                    arry_txt.push(""+i+"月");
                }

                for(i=0;i<arry_val.length;i++){
                    var oOpt=document.createElement("OPTION");
                    oOpt.value=arry_val[i];
                    oOpt.text =arry_txt[i];
                    this.options.add(oOpt);

                    if(arry_val[i]==month){
                        oOpt.selected=true;
                    }
                }
    }

    //停用
    if(disabled==true){
        omonth.disabled=true;
    }
    return omonth;
}

function year_sel(id,year,unit,disabled){
//-------------------------------------------------------
//年下拉
//-------------------------------------------------------
//id        物件id
//year      年,預設今年
//unit      跨矩,預設5
//disabled  停用,預設false
//-------------------------------------------------------

    //---------------------------------------------------
    //參數檢驗
    //---------------------------------------------------
    if((id==undefined)||(id=='')){
        return false;
    }
    if((year==undefined)||(year=='')||(isNaN(year))){
        year=(new Date()).getFullYear();
    }
    if((unit==undefined)||(unit=='')||(isNaN(unit))){
        unit=5;
    }
    if((disabled==undefined)||(disabled=='')){
        disabled=false;
    }

    //---------------------------------------------------
    //建立年下拉物件
    //---------------------------------------------------
        var oyear=document.getElementById(id);
        if(!oyear){
            return false;
        }

        var arry_val=[];
        var arry_txt=[];
        year=parseInt(year);

        for(var i=year-unit;i<=year+unit;i++){
            arry_val.push(i);
            arry_txt.push(""+i+"年");
        }

        for(i=0;i<arry_val.length;i++){
            var oOpt=document.createElement("OPTION");
            oOpt.value=arry_val[i];
            oOpt.text =arry_txt[i];

            oyear.options.add(oOpt);

            if(arry_val[i]==year){
                oOpt.selected=true;
            }
        }

    //---------------------------------------------------
    //連動處理
    //---------------------------------------------------

        //FOR 年下拉
        oyear.setAttribute('year_id',oyear.id);
        oyear.setAttribute('unit',unit);
        oyear.onchange=function(){
            var year_id=this.getAttribute('year_id');
            var unit   =this.getAttribute('unit');

            var oyear=document.getElementById(year_id);
            var year =parseInt(oyear.value);
            var unit =parseInt(unit);

            //---------------------------------------
            //For 年下拉
            //---------------------------------------
                arry_val=[];
                arry_txt=[];
                this.innerHTML='';

                for(var i=year-unit;i<=year+unit;i++){
                    arry_val.push(i);
                    arry_txt.push(""+i+"年");
                }

                for(i=0;i<arry_val.length;i++){
                    var oOpt=document.createElement("OPTION");
                    oOpt.value=arry_val[i];
                    oOpt.text =arry_txt[i];
                    this.options.add(oOpt);

                    if(arry_val[i]==year){
                        oOpt.selected=true;
                    }
                }
    }

    //停用
    if(disabled==true){
        oyear.disabled=true;
    }
    return oyear;
}

function checkbox_ischeck(target,type){
//-------------------------------------------------------
//函式: checkbox_ischeck()
//用途: checkbox是否勾選
//-------------------------------------------------------
//target    name屬性,或物件
//type      回傳值型態
//          obj: 回傳選取物件陣列,預設
//          val: 回傳選取值陣列
//-------------------------------------------------------

    if((target==undefined)||(target=='')){
        return false;
    }

    if((type==undefined)||(type=='')){
        type='obj';
    }

    if(typeof(target)=='object'){
        var objs=target;
    }else{
        var objs=document.getElementsByName(target);
        if(!objs){
            return false;
        }
    }

    var has_ch=0;
    var val_arry=[];
    var obj_arry=[];
    for(var i=0;i<objs.length;i++){
        var obj=objs[i];
        if(obj.checked){
            has_ch++;
            val_arry.push(obj.value);
            obj_arry.push(obj);
        }
    }

    if(has_ch==0){
        return false;
    }else{
        if(type=='obj'){
            return obj_arry;
        }else{
            return val_arry;
        }
    }
}

function radio_ischeck(target){
//-------------------------------------------------------
//函式: radio_ischeck()
//用途: radio是否勾選
//-------------------------------------------------------
//target    name屬性,或物件
//
//本函式會檢查指定的radio是否有被勾選,若有勾選,傳回
//被勾選的物件,反之傳回false
//-------------------------------------------------------

    if((target==undefined)||(target=='')){
        return false;
    }

    if(typeof(target)=='object'){
        var objs=target;
    }else{
        var objs=document.getElementsByName(target);
    }

    var has_ch=false;
    var val='';
    for(var i=0;i<objs.length;i++){
        var obj=objs[i];
        if(obj.checked){
            has_ch=true;
            break;
        }
    }
    if(has_ch){
        return obj;
    }else{
        return false;
    }
}

function texts_hasval(target,type){
//-------------------------------------------------------
//函式: texts_hasval()
//用途: texts是否輸入
//-------------------------------------------------------
//target    name屬性,或物件
//type      回傳值型態
//          obj: 回傳選取物件陣列,預設
//          val: 回傳選取值陣列
//-------------------------------------------------------

    if((target==undefined)||(target=='')){
        return false;
    }

    if((type==undefined)||(type=='')){
        type='obj';
    }

    if(typeof(target)=='object'){
        var objs=target;
    }else{
        var objs=document.getElementsByName(target);
        if(!objs){
            return false;
        }
    }

    var has_ch=0;
    var val_arry=[];
    var obj_arry=[];
    for(var i=0;i<objs.length;i++){
        var obj=objs[i];
        if(trim(obj.value)!=''){
            has_ch++;
            val_arry.push(obj.value);
            obj_arry.push(obj);
        }
    }

    if(has_ch==0){
        return false;
    }else{
        if(type=='obj'){
            return obj_arry;
        }else{
            return val_arry;
        }
    }

    function trim(str){
    //去除字串前後空白
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}
