
function strrev(string){
//-------------------------------------------------------
//函式: strrev()
//用途: 字串反轉
//-------------------------------------------------------

    //參數檢驗
    if((string==undefined)||(trim(string)=='')){
        return '';
    }
    string=string.toString();

    //處理
    var len     =string.length;
    var result  ="";
    var arry_tmp=[];
    for(var i=0;i<len;i++){
        arry_tmp.push(string.substr(i,1));
    }
    arry_tmp.reverse();
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
