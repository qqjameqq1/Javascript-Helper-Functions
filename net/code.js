//-------------------------------------------------------
//net
//-------------------------------------------------------
//setCookie()       設定cookie
//getCookie()       取得cookie值
//deleteCookie()    刪除cookie值
//url_encode()      建立參數經 encodeURI 處理過的網址

function setCookie(name,value,expires,path,domain,secure){
//-------------------------------------------------------
//設定cookie
//-------------------------------------------------------
//name      cookie的名稱
//value     cookie的值,注意:超出4000個字元,會被截斷
//expires   cookie的有效時間,注意:傳入的是日期物件
//path      cookie的允許路徑
//domain    cookie的允許網域
//secure    cookie的傳遞是否須在加密環境Https,true | false
//-----------------------------------------------------------
//name      必須
//value     必須
//expires   非必須,表示僅存活在本次session
//path      非必須
//domain    非必須
//secure    非必須
//-----------------------------------------------------------

    var _arry   =[];
    var _cookie ='';

    _arry.push(name+"="+escape(value));
    if(expires){
        _arry.push("expires"+"="+ expires.toGMTString());
    }
    if(path){
        _arry.push("path"+"="+ path);
    }
    if(domain){
        _arry.push("domain"+"="+ domain);
    }
    if(secure){
        _arry.push("secure");
    }
    _cookie=_arry.join("; ");

    if((name+"="+escape(value)).length <= 4000){
        document.cookie=_cookie;
    }else{
        //Cookie exceeds 4KB and will be cut!
        document.cookie=_cookie;
    }

    return true;
}

function getCookie(name) {
//-------------------------------------------------------
//取得cookie值
//-------------------------------------------------------
//name  cookie的名稱
//-------------------------------------------------------
    var prefix=name+"=";

    var _sinx=document.cookie.indexOf(prefix);
    if (_sinx==-1){
        return null;
    }

    var _einx=document.cookie.indexOf(";",_sinx+prefix.length);
    if (_einx==-1){
        _einx=document.cookie.length;
    }

    var _value=unescape(document.cookie.substring(_sinx+prefix.length,_einx));
    return _value;
}

function deleteCookie(name,path,domain) {
//-------------------------------------------------------
//刪除cookie值
//-------------------------------------------------------
//name      cookie的名稱
//path      cookie的允許路徑
//domain    cookie的允許網域
//-------------------------------------------------------
//name      必須
//path      非必須
//domain    非必須
//-----------------------------------------------------------

    if(getCookie(name)){

        var _arry   =[];
        var _cookie ='';

        _arry.push(name+"="+"");
        _arry.push("expires"+"="+"Thu,01-Jan-70 00:00:01 GMT");

        if(path){
            _arry.push("path"+"="+ path);
        }
        if(domain){
            _arry.push("domain"+"="+ domain);
        }
        _cookie=_arry.join("; ");

        document.cookie=_cookie;

        return true;
    }else{
        return false;
    }
}


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
