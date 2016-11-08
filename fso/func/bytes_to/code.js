
function bytes_to(val,unit){
//-------------------------------------------------------
//bytes轉其他單位
//-------------------------------------------------------
//val   值(bytes)
//unit  單位 {'bytes'|'kb'|'mb'|'gb'|'tb'}
//-------------------------------------------------------

    if((val==undefined)||(val=='')||(isNaN(val))){
        return false;
    }

    var size=1024;
    var arry_unit=['bytes','kb','mb','gb','tb'];

    var cno=0;
    for(var i=0;i<arry_unit.length;i++){
        if((trim(unit)).toLowerCase()==arry_unit[i]){
            cno++;
            break;
        }
    }
    if(cno==0){
        return false;
    }

    switch(unit.toLowerCase()){
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
