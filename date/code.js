//-------------------------------------------------------
//date
//-------------------------------------------------------
//date_add()            日期運算
//date_addzero()        日期時間補零
//date_ampm()           判斷時間是am,pm
//date_array()          日期陣列
//date_between()        是否在指定日期間格內
//date_compare()        日期比較
//date_fstring()        取回日期時間字串
//date_monthdays()      取回月份天數
//date_scompare()       日期比較
//date_sort()           日期排序
//date_string()         取回日期時間字串
//date_stripzero()      日期時間去零
//date_week_array()     週區段陣列
//date_weekname()       取回中文禮拜幾名稱
//date_ymbetween()      根據 起始年,月 至 終止年,月 取得起始日到終止日資訊
//day_range()           日期區段
//is_date()             是不是日期

function date_add(unit,number,date){
//-------------------------------------------------------
//日期運算
//-------------------------------------------------------
//$unit		單位		year,month,day,hour,min,sec
//$number	數值
//$date		日期字串
//                      格式1:yyyy/mm/dd hh:ii:ss
//                      格式2:yyyy/mm/dd
//                      預設 :yyyy/mm/dd hh:ii:ss (今天)
//
//回傳類型	yyyy/mm/dd hh:ii:ss
//-------------------------------------------------------

    //參數檢驗
    var arry_unit=['year','month','day','hour','min','sec'];

    if((unit==undefined)||(trim(unit)=="")){
        return false;
    }else{
        if(!in_array(unit,arry_unit)){
            return false;
        }
    }
    if((number==undefined)||(trim(number)=="")||(isNaN(number))){
        return false;
    }else{
        number=parseInt(number);
    }
    if((date==undefined)||(trim(date)=="")){
        var date=new Date();
    }else{
        date=new Date(date);
    }

    //計算處理
    switch (unit.toLowerCase()){
        case "year":
          date.setYear(date.getFullYear()+number);
          break;
        case "month":
          date.setMonth(date.getMonth()+number);
          break;
        case "day":
          date.setDate(date.getDate()+number);
          break;
        case "hour":
          date.setHours(date.getHours()+number);
          break;
        case "min":
          date.setMinutes(date.getMinutes()+number);
          break;
        case "sec":
          date.setSeconds(date.getSeconds()+number);
          break;
    }

    //回傳處理
    var year =date.getFullYear();
    var month=date.getMonth()+1;
    var day  =date.getDate();
    var hour =date.getHours();
    var min  =date.getMinutes();
    var sec  =date.getSeconds();

    month=(((month.toString()).length)==2)?month:"0"+month;
    day  =(((day.toString()).length)==2)?day:"0"+day;
    hour =(((hour.toString()).length)==2)?hour:"0"+hour;
    min  =(((min.toString()).length)==2)?min:"0"+min;
    sec  =(((sec.toString()).length)==2)?sec:"0"+sec;

    //回傳
    var out="";
    out+=year+"/"+month+"/"+day+" ";
    out+=hour+":"+min+":"+sec+"";
    return out;

    //公用子函式
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

function date_addzero(date){
//-------------------------------------------------------
//日期時間補零
//-------------------------------------------------------
//date  日期,格式 yyyy/mm/dd [hh:ii:ss]
//-------------------------------------------------------

    //參數檢驗
    if((date==undefined)||(date=='')){
        return false;
    }

    //日期時間
    var has_time=((date.indexOf(":")==-1))?false:true;
    date=new Date(date);

    //日期時間拆解
    var year =date.getFullYear();
    var month=date.getMonth()+1;
    var day  =date.getDate();
    var hour =date.getHours();
    var min  =date.getMinutes();
    var sec  =date.getSeconds();

    //補零
    month=((month.toString()).length==2)?month:"0"+month;
    day  =((day  .toString()).length==2)?day  :"0"+day  ;
    hour =((hour .toString()).length==2)?hour :"0"+hour ;
    min  =((min  .toString()).length==2)?min  :"0"+min  ;
    sec  =((sec  .toString()).length==2)?sec  :"0"+sec  ;

    var yd="/";
    var td=":";
    var yarry=[year,month,day];
    var tarry=[hour,min,sec];
    var yp=yarry.join(yd);
    var tp=tarry.join(td);

    if(has_time){
    //有時間部分
        return yp+" "+tp;
    }else{
    //無時間部分
        return yp;
    }
}

function date_ampm(date){
//-------------------------------------------------------
//判斷時間是am,pm
//-------------------------------------------------------
//date  日期,預設 今天
//
//本函式會傳回下面的中文代碼
//
//回傳 午夜 --> 當 hour=0
//回傳 零晨 --> 當 hour=1~5
//回傳 上午 --> 當 hour=6~11
//回傳 中午 --> 當 hour=12
//回傳 下午 --> 當 hour=13~17
//回傳 夜間 --> 當 hour=18~24
//-------------------------------------------------------

    //參數檢驗
    if((date==undefined)||(trim(date)=='')){
        date=new Date();
    }else{
        date=new Date(date);
    }

    //處理
    var year =date.getFullYear();
    var month=date.getMonth()+1;
    var day  =date.getDate();
    var hour =date.getHours();
    var min  =date.getMinutes();
    var sec  =date.getSeconds();

    if(parseInt(hour)==0){
    //case 0
        return "午夜";
    }
    if((parseInt(hour)>=1)&&(parseInt(hour)<=5)){
    //case 1,2,3,4,5
        return "零晨"
    }
    if((parseInt(hour)>=6)&&(parseInt(hour)<=11)){
    //case 6,7,8,9,10,11
        return "上午"
    }
    if(parseInt(hour)==12){
    //case 12
        return "中午";
    }
    if((parseInt(hour)>=13)&&(parseInt(hour)<=17)){
    //case 13,14,15,16,17:
        return "下午"
    }
    if((parseInt(hour)>=18)&&(parseInt(hour)<=23)){
    //case 18,19,20,21,22,23:
        return "夜間"
    }

    //子函式
    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function date_array(sdate,edate){
//-------------------------------------------------------
//日期陣列
//-------------------------------------------------------
//sdate    起始日期,格式 yyyy/mm/dd
//edate    終止日期,格式 yyyy/mm/dd
//
//本函式會傳回起始日期至終止日期間的日期陣列
//-------------------------------------------------------

    //參數檢驗
    if((sdate==undefined)||(trim(sdate)=='')){
        return [];
    }
    if((edate==undefined)||(trim(edate)=='')){
        return [];
    }

    //處理
    var sts=(new Date(sdate)).valueOf();
    var ets=(new Date(edate)).valueOf();

    if(sts>ets){
        tmp=sts;
        sts=ets;
        ets=tmp;
    }

    days=[];
    while(sts<=ets){
        tmp=date_string(new Date(sts));

        days.push(tmp);
        sts+=86400*1000;
    }
    return days;

    //子函式
    function date_string(date){

        var year =date.getFullYear();
        var month=date.getMonth()+1;
        var day  =date.getDate();
        var hour =date.getHours();
        var min  =date.getMinutes();
        var sec  =date.getSeconds();

        //補零
        month=((month.toString()).length==2)?month:"0"+month;
        day  =((day  .toString()).length==2)?day  :"0"+day  ;
        hour =((hour .toString()).length==2)?hour :"0"+hour ;
        min  =((min  .toString()).length==2)?min  :"0"+min  ;
        sec  =((sec  .toString()).length==2)?sec  :"0"+sec  ;

        //處理
        var yd   ="/";
        var td   =":";
        var yarry=[year,month,day];
        var tarry=[hour,min,sec];
        var ypart=(yarry.join(yd));
        var tpart=(tarry.join(td));

        return ypart;
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

function date_between(sdate,edate,tdate){
//-------------------------------------------------------
//是否在指定日期間格內
//-------------------------------------------------------
//sdate 起始日期
//edate 終止日期
//tdate 測試日期
//
//日期格式  : yyyy/mm/dd [hh:ii:ss]
//
//如果測試日期在指定日期間格內,函式回傳true
//-------------------------------------------------------

    var sts=sdate.valueOf();
    var tts=tdate.valueOf();
    var ets=edate.valueOf();

    if((tts>=sts)&&(tts<=ets)){
        return true;
    }else{
        return false;
    }
}

function date_compare(date1,date2){
//-------------------------------------------------------
//日期比較
//-------------------------------------------------------
//date1     日期1,格式 yyyy/mm/dd [hh:ii:ss]
//date2     日期2,格式 yyyy/mm/dd [hh:ii:ss]
//
//回傳值格式
//date1 = date2	傳回0
//date1 > date2	傳回1
//date1 < date2	傳回-1
//-------------------------------------------------------

    var ts1=(new Date(date1)).valueOf();
    var ts2=(new Date(date2)).valueOf();

    if(ts1==ts2){
        return 0;
    }else if(ts1>ts2){
        return 1;
    }else if(ts1<ts2){
        return -1;
    }

    //公用子函式
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

function date_fstring(date,yd,td,type){
//-------------------------------------------------------
//取回日期時間字串
//-------------------------------------------------------
//date  日期,預設 今天
//yd    日期傳接字串,預設 /
//td    時間傳接字串,預設 :
//type  回傳類型,預設 datetime
//
//      datetime  日期時間  yyyy/mm/dd hh:ii:ss
//      date  僅日期部分    yyyy/mm/dd
//      time  僅時間部分    hh:ii:ss
//-------------------------------------------------------

    //定義
    var arry_type=['datetime','date','time'];

    //參數檢驗
    if((date==undefined)||(trim(date)=='')){
        date=new Date();
    }else{
        date=new Date(date);
    }
    if((yd==undefined)||(trim(yd)=='')){
        yd="/";
    }
    if((td==undefined)||(trim(td)=='')){
        td=":";
    }
    if((type==undefined)||(trim(type)=='')){
        type="datetime";
    }else{
        if(!in_array(type,arry_type)){
            type="datetime";
        }
    }

    //日期時間拆解
    var year =date.getFullYear();
    var month=date.getMonth()+1;
    var day  =date.getDate();
    var hour =date.getHours();
    var min  =date.getMinutes();
    var sec  =date.getSeconds();

    //補零
    month=((month.toString()).length==2)?month:"0"+month;
    day  =((day  .toString()).length==2)?day  :"0"+day  ;
    hour =((hour .toString()).length==2)?hour :"0"+hour ;
    min  =((min  .toString()).length==2)?min  :"0"+min  ;
    sec  =((sec  .toString()).length==2)?sec  :"0"+sec  ;

    //處理
    var yarry=[year,month,day];
    var tarry=[hour,min,sec];
    var ypart=(yarry.join(yd));
    var tpart=(tarry.join(td));

    switch(type.toLowerCase()){
        case "datetime":
            return ypart+" "+tpart;
            break;
        case "date":
            return ypart;
            break;
        case "time":
            return tpart;
            break;
        default:
            return ypart+" "+tpart;
            break;
    }

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

function date_monthdays(year,month){
//-------------------------------------------------------
//取回月份天數
//-------------------------------------------------------
//year  年
//month 月
//-------------------------------------------------------

    //參數檢驗
    var yexp=/^\d+$/;
    var mexp=/^(0?[1-9]|1[012])$/;

    if(!year.toString().match(yexp)){
        return false;
    }
    if(!month.toString().match(mexp)){
        return false;
    }

    //取回天數
    var date=new Date(year,month,0);
    day=date.getDate();

    //回傳
    return day;
}

function date_scompare(date1,date2,flag){
//-------------------------------------------------------
//日期比較
//-------------------------------------------------------
//date1     日期1,格式 yyyy/mm/dd [hh:ii:ss]
//date2     日期2,格式 yyyy/mm/dd [hh:ii:ss]
//flag      比較符 >,>=,=,<=,<
//-------------------------------------------------------

    var ts1=(new Date(date1)).valueOf();
    var ts2=(new Date(date2)).valueOf();

    switch(flag){
        case ">":
            if(ts1 > ts2){
                return true;
            }
            else{
                return false;
            }
            break;
        case ">=":
            if(ts1 >= ts2){
                return true;
            }
            else{
                return false;
            }
            break;
        case "<":
            if(ts1 < ts2){
                return true;
            }
            else{
                return false;
            }
            break;
        case "<=":
            if(ts1 <= ts2){
                return true;
            }
            else{
                return false;
            }
            break;
        case "=":
            if(ts1 == ts2){
                return true;
            }
            else{
                return false;
            }
            break;
    }

    //公用子函式
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

function date_sort(array,order){
//-------------------------------------------------------
//日期排序
//-------------------------------------------------------
//array	    日期陣列
//order	    遞增排序asc,遞減排序desc, 預設asc
//-------------------------------------------------------

    //定義
    var arry_order=['asc','desc'];

    //參數檢驗
    if((array==undefined)||(trim(array)=='')){
        return false;
    }
    if((order==undefined)||(trim(order)=='')){
        order='asc';
    }else{
        if(!in_array(order,arry_order)){
            order='asc';
        }
    }

    if(array.length==1){
        return array;
    }else{

        var tmp=(array.join(",")).split(",");
        for(var i=0;i<tmp.length;i++){
            tmp[i]=date_addzero(tmp[i]);
        }

        switch(order.toLowerCase()){
            case "asc":
                return (tmp.sort());
                break;
            case "desc":
                return (tmp.sort()).reverse();
                break;
            default:
                return (tmp.sort());
                break;
        }
    }

    //---------------------------------------------------
    //子函式
    //---------------------------------------------------
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

    function date_addzero(date){
    //---------------------------------------------------
    //日期時間補零
    //---------------------------------------------------
    //date  日期,格式 yyyy/mm/dd [hh:ii:ss]
    //---------------------------------------------------

        //參數檢驗
        if((date==undefined)||(date=='')){
            return false;
        }

        //日期時間
        var has_time=((date.indexOf(":")==-1))?false:true;
        date=new Date(date);

        //日期時間拆解
        var year =date.getFullYear();
        var month=date.getMonth()+1;
        var day  =date.getDate();
        var hour =date.getHours();
        var min  =date.getMinutes();
        var sec  =date.getSeconds();

        //補零
        month=((month.toString()).length==2)?month:"0"+month;
        day  =((day  .toString()).length==2)?day  :"0"+day  ;
        hour =((hour .toString()).length==2)?hour :"0"+hour ;
        min  =((min  .toString()).length==2)?min  :"0"+min  ;
        sec  =((sec  .toString()).length==2)?sec  :"0"+sec  ;

        var yd="/";
        var td=":";
        var yarry=[year,month,day];
        var tarry=[hour,min,sec];
        var yp=yarry.join(yd);
        var tp=tarry.join(td);

        if(has_time){
        //有時間部分
            return yp+" "+tp;
        }else{
        //無時間部分
            return yp;
        }
    }
}

function date_string(date,type){
//-------------------------------------------------------
//取回日期時間字串
//-------------------------------------------------------
//date  日期,預設 今天
//type  回傳類型,預設 datetime
//
//      datetime  日期時間  yyyy/mm/dd hh:ii:ss
//      date  僅日期部分    yyyy/mm/dd
//      time  僅時間部分    hh:ii:ss
//-------------------------------------------------------

    //定義
    var arry_type=['datetime','date','time'];

    //參數檢驗
    if((date==undefined)||(trim(date)=='')){
        date=new Date();
    }else{
        date=new Date(date);
    }

    if((type==undefined)||(trim(type)=='')){
        type="datetime";
    }else{
        if(!in_array(type,arry_type)){
            type="datetime";
        }
    }

    //日期時間拆解
    var year =date.getFullYear();
    var month=date.getMonth()+1;
    var day  =date.getDate();
    var hour =date.getHours();
    var min  =date.getMinutes();
    var sec  =date.getSeconds();

    //補零
    month=((month.toString()).length==2)?month:"0"+month;
    day  =((day  .toString()).length==2)?day  :"0"+day  ;
    hour =((hour .toString()).length==2)?hour :"0"+hour ;
    min  =((min  .toString()).length==2)?min  :"0"+min  ;
    sec  =((sec  .toString()).length==2)?sec  :"0"+sec  ;

    //處理
    var yd   ="/";
    var td   =":";
    var yarry=[year,month,day];
    var tarry=[hour,min,sec];
    var ypart=(yarry.join(yd));
    var tpart=(tarry.join(td));

    switch(type.toLowerCase()){
        case "datetime":
            return ypart+" "+tpart;
            break;
        case "date":
            return ypart;
            break;
        case "time":
            return tpart;
            break;
        default:
            return ypart+" "+tpart;
            break;
    }

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

function date_stripzero(date){
//-------------------------------------------------------
//日期時間去零
//-------------------------------------------------------
//date  日期,格式 yyyy/mm/dd [hh:ii:ss]
//-------------------------------------------------------

    //參數檢驗
    if((date==undefined)||(date=='')){
        return false;
    }

    //日期時間
    var has_time=((date.indexOf(":")==-1))?false:true;
    date=new Date(date);

    //日期時間拆解
    var year =date.getFullYear();
    var month=date.getMonth()+1;
    var day  =date.getDate();
    var hour =date.getHours();
    var min  =date.getMinutes();
    var sec  =date.getSeconds();

    //去零
    month=((month.toString()).substr(0,1)=='0')?parseInt(month):month;
    day  =((day.toString()).substr(0,1)=='0')?parseInt(day):day ;
    hour =((hour.toString()).substr(0,1)=='0')?parseInt(hour):hour;
    min  =((min.toString()).substr(0,1)=='0')?parseInt(min):min ;
    sec  =((sec.toString()).substr(0,1)=='0')?parseInt(sec):sec ;

    var yd="/";
    var td=":";
    var yarry=[year,month,day];
    var tarry=[hour,min,sec];
    var yp=yarry.join(yd);
    var tp=tarry.join(td);

    if(has_time){
    //有時間部分
        return yp+" "+tp;
    }else{
    //無時間部分
        return yp;
    }
}

function date_weekname(key){
//-------------------------------------------------------
//取回中文禮拜幾名稱
//-------------------------------------------------------
//key  鍵值,可能型態如下
//
//      型態='numeric'   0-6
//        0     --> 禮拜日
//        6     --> 禮拜六
//      型態='string'    sun,mon,tue,wed,thu,fri,sat
//        sun   --> 禮拜日
//        sat   --> 禮拜六
//-------------------------------------------------------

    //定義
    var arry_type=['numeric','string'];

    var arry_weekname={};
    arry_weekname[0]    ="禮拜日";
    arry_weekname[1]    ="禮拜一";
    arry_weekname[2]    ="禮拜二";
    arry_weekname[3]    ="禮拜三";
    arry_weekname[4]    ="禮拜四";
    arry_weekname[5]    ="禮拜五";
    arry_weekname[6]    ="禮拜六";
    arry_weekname["sun"]="禮拜日";
    arry_weekname["mon"]="禮拜一";
    arry_weekname["tue"]="禮拜二";
    arry_weekname["wed"]="禮拜三";
    arry_weekname["thu"]="禮拜四";
    arry_weekname["fri"]="禮拜五";
    arry_weekname["sat"]="禮拜六";


    //參數檢驗
    if((key==undefined)||(trim(key)=='')){
        return false;
    }

    //處理
    key =key.toString().toLowerCase();

    //回傳
    return arry_weekname[key];

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

function date_week_array(year,month){
//-------------------------------------------------------
//週區段陣列
//-------------------------------------------------------
//year     年
//month    月
//
//
//本函式會傳回某年某月,每一週的起始與終止日的資訊
//如果該月月初,非禮拜一,則要往前推至禮拜一
//如果該月月尾,非禮拜日,則要往後推至禮拜日
//
//範例如下,假設2012年2月為我們的目標月份,則本函式推出
//
//第1週 --> 起始日: 2012-01-30,終止日 2012-02-05
//第2週 --> 起始日: 2012-02-06,終止日 2012-02-12
//第3週 --> 起始日: 2012-02-13,終止日 2012-02-19
//第4週 --> 起始日: 2012-02-20,終止日 2012-02-26
//第5週 --> 起始日: 2012-02-27,終止日 2012-03-04
//-------------------------------------------------------

    //參數檢驗
    if((year==undefined)||isNaN(year)){
        return [];
    }
    if((month==undefined)||isNaN(month)){
        return [];
    }

    //週區段參數陣列
    arry={
        0:{'f':6,'b':0}, //禮拜日
        1:{'f':0,'b':6}, //禮拜一
        2:{'f':1,'b':5}, //禮拜二
        3:{'f':2,'b':4}, //禮拜三
        4:{'f':3,'b':3}, //禮拜四
        5:{'f':4,'b':2}, //禮拜五
        6:{'f':5,'b':1}  //禮拜六
    };

    //變數設定
    arry_week=[];
    arry_week_first  =[];
    arry_week_between=[];
    arry_week_last   =[];

    //第一天,最末天
    first_date=year+"/"+month+"/"+"01";
    last_date ="";
    last_day  =(new Date(year,month,0)).getDate();
    last_date =year+'/'+month+'/'+last_day;

    //---------------------------------------------------
    //推最各週,起始日,終止日
    //---------------------------------------------------

        //第一週
        week      =(new Date(first_date)).getDay();
        sday      =arry[week]['f'];
        eday      =arry[week]['b'];
        sdate     =date_string(new Date(Date.parse(first_date)-(sday)*86400*1000));
        edate     =date_string(new Date(Date.parse(first_date)+(eday)*86400*1000));
        other_s   =date_string(new Date(Date.parse(edate)+(1)*86400*1000));
        arry_week_first.push({'sdate':sdate,'edate':edate});

        //最末週
        week      =(new Date(last_date)).getDay();
        sday      =arry[week]['f'];
        eday      =arry[week]['b'];
        sdate     =date_string(new Date(Date.parse(last_date)-(sday)*86400*1000));
        edate     =date_string(new Date(Date.parse(last_date)+(eday)*86400*1000));
        other_e   =date_string(new Date(Date.parse(sdate)-(1)*86400*1000));
        arry_week_last.push({'sdate':sdate,'edate':edate});

        //其他週
        st=Date.parse(other_s);
        et=Date.parse(other_e);
        while(st<et){
            sdate=date_string(new Date(st));
            edate=date_string(new Date(st+(86400*1000*6)));
            arry_week_between.push({'sdate':sdate,'edate':edate});
            st+=(86400*1000*7);
        }
    //---------------------------------------------------
    //回傳
    //---------------------------------------------------
        arry_week=arry_week.concat(arry_week_first);
        arry_week=arry_week.concat(arry_week_between);
        arry_week=arry_week.concat(arry_week_last);

        return arry_week;

    //---------------------------------------------------
    //子函式
    //---------------------------------------------------

        function date_string(date){
        //-----------------------------------------------
        //日期格式字串
        //-----------------------------------------------
        //date 日期物件
        //
        //本函式回傳 yyyy/mm/dd 日期格式字串
        //-----------------------------------------------

            //日期時間拆解
            var year =date.getFullYear();
            var month=date.getMonth()+1;
            var day  =date.getDate();
            var hour =date.getHours();
            var min  =date.getMinutes();
            var sec  =date.getSeconds();

            //補零
            month=((month.toString()).length==2)?month:"0"+month;
            day  =((day  .toString()).length==2)?day  :"0"+day  ;
            hour =((hour .toString()).length==2)?hour :"0"+hour ;
            min  =((min  .toString()).length==2)?min  :"0"+min  ;
            sec  =((sec  .toString()).length==2)?sec  :"0"+sec  ;

            //處理
            var yd   ="/";
            var yarry=[year,month,day];
            var ypart=(yarry.join(yd));

            return ypart;
        }
}

function date_ymbetween(syear,smonth,eyear,emonth){
//-------------------------------------------------------
//根據 起始年,月 至 終止年,月 取得起始日到終止日資訊
//-------------------------------------------------------
//syear    起始年
//smonth   起始月
//eyear    終止年
//emonth   終止月
//
//本函式回傳回下列格式資料
//
//['s']['syear']    起始年
//['s']['smonth']   起始月
//['s']['sdays']    起始日該月天數
//['s']['sdate']    起始日
//
//['e']['eyear']    終止年
//['e']['emonth']   終止月
//['e']['edays']    終止日該月天數
//['e']['edate']    終止日
//-------------------------------------------------------

    //日期比較
    var sdate='';
    var edate='';
    sts=new Date(syear+'/'+smonth+'/'+1);
    ets=new Date(eyear+'/'+emonth+'/'+1);

    //先以1號比較
    tmp={};
    if(sts>ets){
    //起始大於終止
        tmp['year'] =syear;
        tmp['month']=smonth;
        syear =eyear;
        smonth=emonth;
        eyear =tmp['year'];
        emonth=tmp['month'];

        sdays =(new Date(syear,smonth,0)).getDate();
        edays =(new Date(eyear,emonth,0)).getDate();

        //補零
        smonth=((smonth.toString()).length!=2)?'0'+(smonth.toString()):smonth;
        sdays =((sdays.toString()).length!=2)?'0'+(sdays.toString()):sdays;
        emonth=((emonth.toString()).length!=2)?'0'+(emonth.toString()):emonth;
        edays =((edays.toString()).length!=2)?'0'+(edays.toString()):edays;

        //串接
        sdate=syear+'/'+smonth+'/'+'01';
        edate=eyear+'/'+emonth+'/'+edays;
    }else{
    //起始未大於終止
        sdays =(new Date(syear,smonth,0)).getDate();
        edays =(new Date(eyear,emonth,0)).getDate();

        //補零
        smonth=((smonth.toString()).length!=2)?'0'+(smonth.toString()):smonth;
        sdays =((sdays.toString()).length!=2)?'0'+(sdays.toString()):sdays;
        emonth=((emonth.toString()).length!=2)?'0'+(emonth.toString()):emonth;
        edays =((edays.toString()).length!=2)?'0'+(edays.toString()):edays;

        //串接
        sdate=syear+'/'+smonth+'/'+'01';
        edate=eyear+'/'+emonth+'/'+edays;
    }

    //回傳
    var info={};
    info['s']={'syear':syear,'smonth':smonth,'sdays':sdays,'sdate':sdate};
    info['e']={'eyear':eyear,'emonth':emonth,'edays':edays,'edate':edate};
    return info;
}

function day_range(date,dayno){
//-------------------------------------------------------
//日期區段
//-------------------------------------------------------
//date     日期,預設 今天
//dayno    天數,值可以為正或負
//
//本函式會傳回指定日期往前推n日或往後推n日的日期陣列
//
//  dayno為正時,則往後推
//  dayno為負時,則往前推
//-------------------------------------------------------

    //參數檢驗
    if((date==undefined)||(trim(date)=='')){
        date=new Date();
    }else{
        date=new Date(date);
    }

    if((dayno==undefined)||(isNaN(dayno))){
        return [];
    }

    //處理
    if(dayno<0){
        sdate=date.valueOf();
        edate=date.valueOf()+((dayno+1)*86400*1000);
    }else if(dayno>0){
        sdate=date.valueOf();
        edate=date.valueOf()+((dayno-1)*86400*1000);
    }else{
        return [date_string(new Date(date))];
    }

    if(sdate>edate){
        tmp=sdate;
        sdate=edate;
        edate=tmp;
    }

    days=[];
    while(sdate<=edate){
        tmp=date_string(new Date(sdate));

        days.push(tmp);
        sdate+=86400*1000;
    }
    return days;

    //子函式
    function date_string(date){

        var year =date.getFullYear();
        var month=date.getMonth()+1;
        var day  =date.getDate();
        var hour =date.getHours();
        var min  =date.getMinutes();
        var sec  =date.getSeconds();

        //補零
        month=((month.toString()).length==2)?month:"0"+month;
        day  =((day  .toString()).length==2)?day  :"0"+day  ;
        hour =((hour .toString()).length==2)?hour :"0"+hour ;
        min  =((min  .toString()).length==2)?min  :"0"+min  ;
        sec  =((sec  .toString()).length==2)?sec  :"0"+sec  ;

        //處理
        var yd   ="/";
        var td   =":";
        var yarry=[year,month,day];
        var tarry=[hour,min,sec];
        var ypart=(yarry.join(yd));
        var tpart=(tarry.join(td));

        return ypart;
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

function is_date(date){
//-------------------------------------------------------
//是不是日期
//-------------------------------------------------------
//date  日期,格式 yyyy/mm/dd
//-------------------------------------------------------

    var exp_year="[0-9]+";
    var exp_mon ="(0?[1-9]|1[012])";
    var exp_date="(0?[1-9]|(1|2)[0-9]|3[01])";
    var exp_del ="/";

    var exp="^"+exp_year+exp_del+exp_mon+exp_del+exp_date+"$";
    var exp=new RegExp(exp);
    if(exp.test(date)){

        var arry=date.split(exp_del);
        var year=arry[0];
        var mon =arry[1];
        var date=arry[2];

        //檢查天數
        if(date<=(new Date(year,mon,0).getDate())){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}
