
function ch_cellphone(val){
//-------------------------------------------------------
//函式: ch_cellphone()
//用途: 檢核手機
//-------------------------------------------------------
//val   值
//
//規則:
//1.手機號碼 10碼
//2.手機號碼 均數字
//3.手機號碼 開頭為09
//-------------------------------------------------------

    //檢核參數
    if((val==undefined)||(trim(val)=='')){
        return false;
    }

    //驗證
    var exp=/^(09){1}(\d){8}$/;
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
