
function str2array(str,dchr,flag){
//-------------------------------------------------------
//字串轉陣列
//-------------------------------------------------------
//str   字串
//dchr  串接字元,預設 ','
//flag  允許空元素,預設 true
//-------------------------------------------------------

    if((str==undefined)||(str=='')){
        return false;
    }
    if((dchr==undefined)||(dchr=='')){
        dchr=',';
    }
    if(flag==undefined){
        flag=true;
    }

    if(flag==true){
        return str.split(dchr);
    }else{
        var arry=str.split(dchr);
        var tmp =[];
        for(key in arry){
            var val=arry[key];

            //排除空的
            if(trim(val)!=''){
               tmp.push(val);
            }
        }

        return tmp;
    }

    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}
