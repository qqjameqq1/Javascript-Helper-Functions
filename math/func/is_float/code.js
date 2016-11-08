
function is_float(val){
//-------------------------------------------------------
//是否為浮點數
//-------------------------------------------------------
//val 值
//-------------------------------------------------------

    //參數檢驗
    if((val==undefined)||(trim(val)=='')||(isNaN(val))){
        return false;
    }

    //處理
    if((val.toString()).indexOf(".")!=-1){
        return true;
    }else{
        return false;
    }

    //子函式
    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}
