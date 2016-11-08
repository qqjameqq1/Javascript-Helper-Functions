//-------------------------------------------------------
//fso
//-------------------------------------------------------
//pathinfo()    路徑資訊
//basename()    取回檔名
//bytes_to()    bytes轉其他單位
//dirname()     取回路徑
//size_to()     單位互轉
//to_bytes()    其他單位轉bytes

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

function bytes_to(val,unit){
//-------------------------------------------------------
//bytes轉其他單位
//-------------------------------------------------------
//val   值(bytes)
//unit  單位 {'bytes'|'kb'|'mb'|'gb'|'tb'}
//-------------------------------------------------------

    if((val==undefined)||(val=='')||(isNaN(val))){
        return false;
    }

    var size=1024;
    var arry_unit=['bytes','kb','mb','gb','tb'];

    var cno=0;
    for(var i=0;i<arry_unit.length;i++){
        if((trim(unit)).toLowerCase()==arry_unit[i]){
            cno++;
            break;
        }
    }
    if(cno==0){
        return false;
    }

    switch(unit.toLowerCase()){
        case 'bytes':
            val=val/Math.pow(size,0);
            val=val.toFixed(2);
            break;
        case 'kb':
            val=val/Math.pow(size,1);
            val=val.toFixed(2);
            break;
        case 'mb':
            val=val/Math.pow(size,2);
            val=val.toFixed(2);
            break;
        case 'gb':
            val=val/Math.pow(size,3);
            val=val.toFixed(2);
            break;
        case 'tb':
            val=val/Math.pow(size,4);
            val=val.toFixed(2);
            break;
    }

    //回傳
    return val;

    function trim(str){
    //字串去空白
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

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

function pathinfo(path){
//-------------------------------------------------------
//路徑資訊
//-------------------------------------------------------
//path  路徑,註:路徑裡的目錄分隔符號,會自動轉成 /
//
//本函式會傳回路徑資訊陣列,假設路徑為 xxx/yyy/zzz.txt
//
//pathinfo['dirname']   xxx/yyy
//pathinfo['basename']  zzz.txt
//pathinfo['filename']  zzz
//pathinfo['extension'] txt
//-------------------------------------------------------

    if((path==undefined)||(trim(path)=='')){
        return false;
    }
    var dirname  ='';
    var basename ='';
    var filename ='';
    var extension='';
    var pathinfo ={};
    var dchar='/';
    var nl='\r\n';

    path=trim(path);
    path=path.replace(/\\/g,dchar);

    if(path.indexOf(dchar)!=-1){
    //FOR IE

        var p=path.lastIndexOf(dchar);
        dirname =path.substr(0,p);
        basename=path.substr(p+1);
        if(basename.lastIndexOf('.')!=-1){
           var p1=basename.lastIndexOf('.');
           filename =basename.substr(0,p1);
           extension=basename.substr(p1+1);
        }else{
           filename =basename;
           extension='';
        }
    }else{
    //FOR OTHER
        dirname ='';
        basename=path;
        if(basename.lastIndexOf('.')!=-1){
           var p1=basename.lastIndexOf('.');
           filename =basename.substr(0,p1);
           extension=basename.substr(p1+1);
        }else{
           filename =basename;
           extension='';
        }
    }

    //儲存
    pathinfo['dirname']  =dirname;
    pathinfo['basename'] =basename;
    pathinfo['filename'] =filename;
    pathinfo['extension']=extension;

    //回傳
    return pathinfo;

    function trim(str){
    //去空白
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function size_to(val,sunit,tunit){
//-------------------------------------------------------
//單位互轉
//-------------------------------------------------------
//val   值(bytes)
//sunit 來源單位 {'bytes'|'kb'|'mb'|'gb'|'tb'}
//tunit 目的單位 {'bytes'|'kb'|'mb'|'gb'|'tb'}
//-------------------------------------------------------

    if((val==undefined)||(val=='')||(isNaN(val))){
        return false;
    }

    var size=1024;
    var arry_unit=['bytes','kb','mb','gb','tb'];

    var cno1=0;
    var cno2=0;
    for(var i=0;i<arry_unit.length;i++){
        if((trim(sunit)).toLowerCase()==arry_unit[i]){
            cno1++;
            break;
        }
    }
    for(var i=0;i<arry_unit.length;i++){
        if((trim(tunit)).toLowerCase()==arry_unit[i]){
            cno2++;
            break;
        }
    }
    if((cno1==0)||(cno2==0)){
        return false;
    }

    //先轉成bytes
    switch(sunit.toLowerCase()){
        case 'bytes':
            val=val*Math.pow(size,0);
            val=val.toFixed(2);
            break;
        case 'kb':
            val=val*Math.pow(size,1);
            val=val.toFixed(2);
            break;
        case 'mb':
            val=val*Math.pow(size,2);
            val=val.toFixed(2);
            break;
        case 'gb':
            val=val*Math.pow(size,3);
            val=val.toFixed(2);
            break;
        case 'tb':
            val=val*Math.pow(size,4);
            val=val.toFixed(2);
            break;
    }

    //再轉成其他單位
    switch(tunit.toLowerCase()){
        case 'bytes':
            val=val/Math.pow(size,0);
            val=val.toFixed(2);
            break;
        case 'kb':
            val=val/Math.pow(size,1);
            val=val.toFixed(2);
            break;
        case 'mb':
            val=val/Math.pow(size,2);
            val=val.toFixed(2);
            break;
        case 'gb':
            val=val/Math.pow(size,3);
            val=val.toFixed(2);
            break;
        case 'tb':
            val=val/Math.pow(size,4);
            val=val.toFixed(2);
            break;
    }

    //回傳
    return val;

    function trim(str){
    //字串去空白
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function to_bytes(val,unit){
//-------------------------------------------------------
//其他單位轉bytes
//-------------------------------------------------------
//val   值(bytes)
//unit  單位 {'bytes'|'kb'|'mb'|'gb'|'tb'}
//-------------------------------------------------------

    if((val==undefined)||(val=='')||(isNaN(val))){
        return false;
    }

    var size=1024;
    var arry_unit=['bytes','kb','mb','gb','tb'];

    var cno=0;
    for(var i=0;i<arry_unit.length;i++){
        if((trim(unit)).toLowerCase()==arry_unit[i]){
            cno++;
            break;
        }
    }
    if(cno==0){
        return false;
    }

    switch(unit.toLowerCase()){
        case 'bytes':
            val=val*Math.pow(size,0);
            val=val.toFixed(2);
            break;
        case 'kb':
            val=val*Math.pow(size,1);
            val=val.toFixed(2);
            break;
        case 'mb':
            val=val*Math.pow(size,2);
            val=val.toFixed(2);
            break;
        case 'gb':
            val=val*Math.pow(size,3);
            val=val.toFixed(2);
            break;
        case 'tb':
            val=val*Math.pow(size,4);
            val=val.toFixed(2);
            break;
    }

    //回傳
    return val;

    function trim(str){
    //字串去空白
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}
