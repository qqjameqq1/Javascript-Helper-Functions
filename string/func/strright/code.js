
function strright(string,n){
//-------------------------------------------------------
//函式: strright()
//用途: 由右至左依序取回N個字元
//-------------------------------------------------------

    //參數檢驗
    if((string==undefined)||(trim(string)=='')){
        return '';
    }
    if((n==undefined)||(isNaN(n))){
        return '';
    }

    string=string.toString();
    n=parseInt(n);

    //處理
    var result=string.substr((string.length-1)-(n-1),n);

    //回傳
    return result;

    //子函式
    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}
