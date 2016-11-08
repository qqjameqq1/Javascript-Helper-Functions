
function ch_month(val){
//-------------------------------------------------------
//函式: ch_month()
//用途: 檢核月份
//-------------------------------------------------------
//格式: 01-09|10|11|12
//格式: 1-9|10|11|12
//-------------------------------------------------------

    //檢核參數
    if((val==undefined)||(trim(val)=='')){
        return false;
    }

    //驗證
    var exp=new RegExp("^(0?[1-9]|10|11|12)$");
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
