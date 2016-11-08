
function size_to(val,sunit,tunit){
//-------------------------------------------------------
//單位互轉
//-------------------------------------------------------
//val   值(bytes)
//sunit 來源單位 {'bytes'|'kb'|'mb'|'gb'|'tb'}
//tunit 目的單位 {'bytes'|'kb'|'mb'|'gb'|'tb'}
//-------------------------------------------------------

    if((val==undefined)||(val=='')||(isNaN(val))){
        return false;
    }

    var size=1024;
    var arry_unit=['bytes','kb','mb','gb','tb'];

    var cno1=0;
    var cno2=0;
    for(var i=0;i<arry_unit.length;i++){
        if((trim(sunit)).toLowerCase()==arry_unit[i]){
            cno1++;
            break;
        }
    }
    for(var i=0;i<arry_unit.length;i++){
        if((trim(tunit)).toLowerCase()==arry_unit[i]){
            cno2++;
            break;
        }
    }
    if((cno1==0)||(cno2==0)){
        return false;
    }

    //先轉成bytes
    switch(sunit.toLowerCase()){
        case 'bytes':
            val=val*Math.pow(size,0);
            val=val.toFixed(2);
            break;
        case 'kb':
            val=val*Math.pow(size,1);
            val=val.toFixed(2);
            break;
        case 'mb':
            val=val*Math.pow(size,2);
            val=val.toFixed(2);
            break;
        case 'gb':
            val=val*Math.pow(size,3);
            val=val.toFixed(2);
            break;
        case 'tb':
            val=val*Math.pow(size,4);
            val=val.toFixed(2);
            break;
    }

    //再轉成其他單位
    switch(tunit.toLowerCase()){
        case 'bytes':
            val=val/Math.pow(size,0);
            val=val.toFixed(2);
            break;
        case 'kb':
            val=val/Math.pow(size,1);
            val=val.toFixed(2);
            break;
        case 'mb':
            val=val/Math.pow(size,2);
            val=val.toFixed(2);
            break;
        case 'gb':
            val=val/Math.pow(size,3);
            val=val.toFixed(2);
            break;
        case 'tb':
            val=val/Math.pow(size,4);
            val=val.toFixed(2);
            break;
    }

    //回傳
    return val;

    function trim(str){
    //字串去空白
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}
