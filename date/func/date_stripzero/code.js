
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
