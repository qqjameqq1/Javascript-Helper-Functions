
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
