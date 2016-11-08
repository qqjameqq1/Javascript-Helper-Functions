
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
