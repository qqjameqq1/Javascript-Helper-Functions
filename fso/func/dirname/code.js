
function dirname(path){
//-------------------------------------------------------
//取回路徑
//-------------------------------------------------------
//path  路徑,本函式會自動轉換目錄分隔符號為 /
//
//本函式會傳回路徑(不含檔案名稱)
//
//dirname('xxx/yyy/zzz.txt')    --> xxx/yyy
//dirname('yyy/zzz.txt')        --> yyy
//dirname('zzz.txt')            --> ''
//dirname('zzz')                --> ''
//dirname('xxx\\yyy\\zzz.txt')  --> xxx/yyy
//dirname('yyy\\zzz.txt')       --> yyy
//dirname('zzz.txt')            --> ''
//dirname('zzz')                --> ''
//-------------------------------------------------------

    if((path==undefined)||(trim(path)=='')){
        return false;
    }

    var _dirname='';
    var dchar='/';
    path=trim(path);
    path=path.replace(/\\/g,dchar);

    if(path.indexOf(dchar)!=-1){
    //有目錄分隔符號
        var p=path.lastIndexOf(dchar);
        _dirname=path.substr(0,p);
    }else{
    //無目錄分隔符號
        _dirname='';
    }

    //回傳
    return _dirname;

    function trim(str){
    //去空白
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}
