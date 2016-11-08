
function ch_email(val){
//-------------------------------------------------------
//函式: ch_email()
//用途: 檢核電子郵件
//-------------------------------------------------------
//val   值
//-------------------------------------------------------

    //檢核參數
    if((val==undefined)||(trim(val)=='')){
        return false;
    }

    //驗證
    var exp=/^[a-zA-Z0-9]+[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
    if(exp.test(trim(val))){
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
