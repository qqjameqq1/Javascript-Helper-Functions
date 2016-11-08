
function ucfirst(string){
//-------------------------------------------------------
//函式: ucfirst()
//用途: 字首大寫
//-------------------------------------------------------

    //參數檢驗
    if((string==undefined)||(trim(string)=='')){
        return '';
    }

    string=string.toString();

    //處理
    if(trim(string.length)===1){
        var result=string.toUpperCase();
    }else{
        var len   =string.length;
        var first =string.substr(0,1);
        var part  =string.substr(1,len-1);
        var result=(first.toUpperCase())+part;
    }

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
