
function ch_homephone(val){
//-------------------------------------------------------
//函式: ch_homephone()
//用途: 檢核台灣地區電話
//-------------------------------------------------------
//val   值
//
//規則: 區碼-號碼
//區碼:需0開頭,接者是2開始到9,長度2到4
//號碼:至少6碼,全部都是數字0到9
//-------------------------------------------------------

    //檢核參數
    if((val==undefined)||(trim(val)=='')){
        return false;
    }

    //驗證
    var exp=/^(0){1}[2-9]{1,3}-(\d){6,}$/;
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
