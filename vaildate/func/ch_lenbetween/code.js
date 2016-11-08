
function ch_lenbetween(val,min,max,has_sp){
//-------------------------------------------------------
//函式: ch_lenbetween()
//用途: 檢核長度範圍
//-------------------------------------------------------
//val       值
//min       最小長度
//max       最大長度
//has_sp    是否含前後空白
//          true : 含前後空白
//          false: 不含前後空白,預設
//-------------------------------------------------------

    //檢核參數
    if((!val)||(val=='')){
        return false;
    }
    if((!min)||(min=='')||(isNaN(min))){
        return false;
    }
    if((!max)||(max=='')||(isNaN(max))){
        return false;
    }
    if((has_sp==undefined)||(has_sp=='')){
        has_sp=false;
    }

    //強制轉換
    min=parseInt(min);
    max=parseInt(max);

    //驗證
    if(has_sp==false){
        //不含前後空白
        val=trim(val);
    }

    if((val.length<min)||(val.length>max)){
        return false;
    }else{
        return true;
    }

    function trim(str){
    //去除字串前後空白
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}
