
function strip_space(string){
//-------------------------------------------------------
//函式: strip_space()
//用途: 去除全部的空白字元
//-------------------------------------------------------
    
    //參數檢驗
    if((string==undefined)||(trim(string)=='')){
        return "";        
    }
    string=string.toString();

    //處理
    return string.replace(/\s*/g,"");	

    //子函式
    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}
