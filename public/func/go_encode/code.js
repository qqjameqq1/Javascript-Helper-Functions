
function go_encode(arry_arg,url,target){
//-------------------------------------------------------
//重導頁面,參數會進行編碼
//-------------------------------------------------------
//arry_arg  參數物件(json格式)
//url       網址
//target    框架(self,parent)
//-------------------------------------------------------

    if((arry_arg==undefined)||(arry_arg=='')){
        arry_arg={};
    }
    if((url==undefined)||(url=='')){
        url='';
    }
    if((target==undefined)||(target=='')){
        target='self';
    }

    var dchr='&';
    var out =[];
    for(var key in arry_arg){
        var val=encodeURI(trim(arry_arg[key]));
        out.push(key+'='+val);
    }

    if(out.length!=0){
    //有參數
        url=url+"?"+out.join(dchr);

        var estr=target+'.location.href="'+url+'"';
        eval(estr);
    }else{
    //無參數
        var estr=target+'.location.href="'+url+'"';
        eval(estr);
    }

    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}
