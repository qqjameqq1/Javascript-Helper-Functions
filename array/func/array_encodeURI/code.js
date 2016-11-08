
function array_encodeURI(arry){
//-------------------------------------------------------
//陣列元素值 encodeURI
//-------------------------------------------------------
    if((arry==undefined)||(arry=='')){
        return false;
    }

    for(var key in arry){
        var val=trim(arry[key]);
        arry[key]=encodeURI(val);
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
