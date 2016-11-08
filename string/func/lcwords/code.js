
function lcwords(string){
//-------------------------------------------------------
//函式: lcwords()
//用途: 單字字首小寫,每個單字均會套用
//-------------------------------------------------------

    //參數檢驗
    if((string==undefined)||(trim(string)=='')){
        return '';
    }

    string=string.toString();

    //處理
    var arry=string.split(" ");
    var arry_tmp=[];
    for(var i=0;i<arry.length;i++){
        var tmp     =arry[i];
        var len     =tmp.length;
        var first   =tmp.substr(0,1);
        var part    =tmp.substr(1,len-1);
        var result  =first.toLowerCase()+part;
        arry_tmp.push(result);
    }

    //回傳
    return arry_tmp.join(" ");

    //子函式
    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}
