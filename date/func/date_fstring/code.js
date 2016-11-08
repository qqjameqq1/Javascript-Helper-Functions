
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
