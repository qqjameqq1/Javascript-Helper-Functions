
function array_escape(arry){
//-------------------------------------------------------
//陣列元素值 escape
//-------------------------------------------------------
//escape('值1')='%u503C1'
//escape('值2')='%u503C2'
//escape('值3')='%u503C3'
//-------------------------------------------------------

    if((arry==undefined)||(arry=='')){
        return false;
    }

    for(var key in arry){
        var val=trim(arry[key]);
        arry[key]=escape(val);
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
