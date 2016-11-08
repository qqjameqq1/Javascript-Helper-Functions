
function lcfirst(string){
//-------------------------------------------------------
//lcfirst() 字首小寫
//-------------------------------------------------------

    //參數檢驗
    if((string==undefined)||(trim(string)=='')){
        return '';
    }

    string=string.toString();

    //處理
    if(trim(string.length)===1){
        var result=string.toLowerCase();
    }else{
        var len   =string.length;
        var first =string.substr(0,1);
        var part  =string.substr(1,len-1);
        var result=(first.toLowerCase())+part;
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
