
function basename(path){
//-------------------------------------------------------
//取回檔名
//-------------------------------------------------------
//path  路徑,註:本函式會自動將目錄分隔符號轉成 /
//
//本函式會傳回檔名(不含路徑)
//
//basename('xxx/yyy/zzz.txt')   --> zzz.txt
//basename('yyy/zzz.txt')       --> zzz.txt
//basename('zzz.txt')           --> zzz.txt
//basename('zzz')               --> zzz
//basename('xxx\\yyy\\zzz.txt') --> zzz.txt
//basename('yyy\\zzz.txt')      --> zzz.txt
//basename('zzz.txt')           --> zzz.txt
//basename('zzz')               --> zzz
//-------------------------------------------------------

    if((path==undefined)||(trim(path)=='')){
        return false;
    }

    var dchar='/';
    path=trim(path);
    path=path.replace(/\\/g,dchar);

    if(path.indexOf(dchar)!=-1){
    //有目錄分隔符號
        var p=path.lastIndexOf(dchar);
        _basename=path.substr(p+1);
    }else{
    //無目錄分隔符號
        _basename=path;
    }

    //回傳
    return _basename;

    function trim(str){
    //去空白
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}
