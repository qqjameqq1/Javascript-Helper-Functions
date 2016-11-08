
function ch_isnumeric(val){
//-------------------------------------------------------
//函式: ch_isnumeric()
//用途: 檢核是否是數字
//-------------------------------------------------------
//val   值
//-------------------------------------------------------

    //檢核參數
    if((val==undefined)||(trim(val)=='')){
        return false;
    }

    //驗證
    if(isNaN(val)){
        return false;
    }else{
        return true;
    }

    function trim(str){
    //去除字串前後空白
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}
