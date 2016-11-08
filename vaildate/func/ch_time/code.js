
function ch_time(val){
//-------------------------------------------------------
//函式: ch_time()
//用途: 檢核時間
//-------------------------------------------------------
//val   值
//-------------------------------------------------------
//格式: hh:mm:ss
//值域: 00:00:00 ~ 23:59:59
//
//本函式允許下列時間表示法
//
//hh:mm:ss  補零    01:02:03
//hh:mm:ss  不補零  1:2:3
//hh:mm:ss  混雜    01:2:3
//-------------------------------------------------------

    if((val==undefined)||(val=='')){
        return false;
    }

    var exp_hour="(0{1,2}|0?[1-9]|1[0-9]|2[0-3])";
    var exp_min ="(0{1,2}|0?[1-9]|[1-5][0-9])";
    var exp_sec ="(0{1,2}|0?[1-9]|[1-5][0-9])";
    var exp_del =":";

    //hh:mm:ss
    val=trim(val);
    var exp1="^"+exp_hour+exp_del+exp_min+exp_del+exp_sec+"$";
    var exp1=new RegExp(exp1);
    if(exp1.test(val)){

        var arry=val.split(exp_del);
        var hour=arry[0];
        var min =arry[1];
        var sec =arry[2];

        return true;
    }else{
        return false;
    }

    function trim(str){
    //去除字串前後空白
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}
