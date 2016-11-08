
function url_encode(url,arry_arg){
//-------------------------------------------------------
//建立參數經 encodeURI 處理過的網址
//-------------------------------------------------------
//url       網址
//arry_arg  參數陣列
//
//假設: url =01.php
//假設: 參數陣列如下
//      arry_arg['id']  =1
//      arry_arg['name']='姓名'
//
//則本函式傳回
//  01.php?id=1&name=%E5%A7%93%E5%90%8D
//-------------------------------------------------------

    if((arry_arg==undefined)||(arry_arg=='')){
        return url;
    }else{
        var tmp=[];
        for(var key in arry_arg){
            var val=trim(arry_arg[key]);
            tmp.push(key+'='+encodeURI(val));
        }

        return url+'?'+tmp.join('&');
    }

    function trim(str){
    //去除字串前後空白

        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}
