
function str_repeat(string,n){
//-------------------------------------------------------
//str_repeat(字串,次數) 重複字串N次
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
    var result  ="";
    var arry_tmp=[];
    for(var i=1;i<=n;i++){
        arry_tmp.push(string);
    }
    result=arry_tmp.join('');

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
