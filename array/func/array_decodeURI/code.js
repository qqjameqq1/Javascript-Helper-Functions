
function array_decodeURI(arry){
//-------------------------------------------------------
//陣列元素值 decodeURI
//-------------------------------------------------------

    if((arry==undefined)||(arry=='')){
        return false;
    }

    for(var key in arry){
        var val=trim(arry[key]);
        arry[key]=decodeURI(val);
    }

    return arry;

    function trim(str){
    //去除字串前後空白

        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}
