
function ch_isfloat(val,sign){
//-------------------------------------------------------
//函式: ch_isfloat()
//用途: 檢核是否為浮點數
//-------------------------------------------------------
//val   值
//sign  是否允許有負的
//      true  --> 值可以為正或負
//      false --> 值僅可以為正
//-------------------------------------------------------

    //檢核參數
    if((val==undefined)||(trim(val)=='')){
        return false;
    }
    if(sign==undefined){
        sign=true;
    }

    //驗證
    val=trim(val);
    if(isNaN(val)){
        return false;
    }

    if(sign==false){
        var exp=/^(\d)+(\.){1}(\d)+$/;
        if(!exp.test(val)){
            return false;
        }else{
            return true;
        }
    }else{
        var exp=/^(\-)?(\d)+(\.){1}(\d)+$/;
        if(!exp.test(val)){
            return false;
        }else{
            return true;
        }
    }

    function trim(str){
    //去除字串前後空白
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}
