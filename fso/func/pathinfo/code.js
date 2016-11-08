
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
