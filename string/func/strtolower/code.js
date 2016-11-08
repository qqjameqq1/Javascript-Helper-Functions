
function strtolower(string){
//-------------------------------------------------------
//函式: strtolower()
//用途: 字串轉小寫
//-------------------------------------------------------

    //參數檢驗
    if((string==undefined)||(trim(string)=='')){
        return '';
    }

    string=string.toString();

    //處理
    string=string.toLowerCase();

    //回傳
    return string;

    //子函式
    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}
