
function ch_valbetween(val,min,max){
//-------------------------------------------------------
//函式: ch_valbetween()
//用途: 檢核值範圍
//-------------------------------------------------------
//val       值
//min       最小值
//max       最大值
//-------------------------------------------------------

    //檢核參數
    if((trim(val)=='')||(isNaN(val))){
        return false;
    }
    if((trim(min)=='')||(isNaN(min))){
        return false;
    }
    if((trim(max)=='')||(isNaN(max))){
        return false;
    }

    //判斷型別
    var exp=/^(-)?(\d)+(\.){1}(\d)+$/;
    if(exp.test(val)){
        //浮點數
        val=parseFloat(val);
        //alert(1)
    }else{
        //整數
        val=parseInt(val);
        //alert(2)
    }

    if(exp.test(min)){
        //浮點數
        min=parseFloat(min);
    }else{
        //整數
        min=parseInt(min);
    }

    if(exp.test(max)){
        //浮點數
        max=parseFloat(max);
    }else{
        //整數
        max=parseInt(max);
    }

    var out='';
    out+=val+'\n';
    out+=min+'\n';
    out+=max+'\n';
    //alert(out);

    //驗證
    if((val>=min)&&(val<=max)){
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
