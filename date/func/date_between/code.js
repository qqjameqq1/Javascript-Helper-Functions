
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
