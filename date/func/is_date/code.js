
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
