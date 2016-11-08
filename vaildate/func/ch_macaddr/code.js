
function ch_macaddr(val){
//-------------------------------------------------------
//函式: ch_macaddr()
//用途: 檢核網卡mac
//-------------------------------------------------------
//val   值
//-------------------------------------------------------
//00-0C-6E-65-DE-D6
//00:0C:6E:65:DE:D6
//-------------------------------------------------------

    //參數檢驗
    if((val=="")||(val==undefined)){return false;}
    
    //正規式
    var exp1=/^[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}$/;
    var exp2=/^[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}$/;

    //驗證
    val=trim(val);

    if(exp1.test(val)){
        return true;
    }else if(exp2.test(val)){
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
