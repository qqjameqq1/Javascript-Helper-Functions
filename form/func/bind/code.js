
function bind_text(id,val){
//-------------------------------------------------------
//資料繫結,text
//-------------------------------------------------------
//name  物件name屬性
//val   值
//-------------------------------------------------------

    var obj=document.getElementById(id);
    if(obj){
        obj.value=val;
        return obj;
    }

    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function bind_radio(name,val){
//-------------------------------------------------------
//資料繫結,radio
//-------------------------------------------------------
//name  物件name屬性
//val   值
//---------------------------------------------------

    var objs=document.getElementsByName(name);
    for(var i=0;i<objs.length;i++){
        var obj=objs[i];
        if(trim(obj.value)==val){
            obj.checked=true;
            return obj;
            break;
        }
    }

    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}


function bind_checkbox(name,vals){
//-------------------------------------------------------
//資料繫結,checkbox
//-------------------------------------------------------
//name  物件name屬性
//vals  值串列
//-------------------------------------------------------

    var arry=vals.split(',');
    var objs=document.getElementsByName(name);
    var tmp =[];
    for(var i=0;i<objs.length;i++){
        var obj=objs[i];
        if(in_array(trim(obj.value),arry)){
            obj.checked=true;
            tmp.push(obj);
        }
    }
    return tmp;

    function in_array(val,arry){
        for(var i=0;i<arry.length;i++){
            if(val==arry[i]){
                return true;
                break;
            }
        }
        return false;
    }

    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function bind_select(name,vals,by){
//-------------------------------------------------------
//資料繫結,select
//-------------------------------------------------------
//name  物件name屬性
//vals  值串列
//by    比對值,或比對文字,預設 'val'
//      'val'  比對值
//      'txt'  比對文字
//-------------------------------------------------------
    if((by==undefined)||(by=='')){
        by='val';
    }

    var arry=vals.split(',');
    var obj=document.getElementById(name);

    for(var i=0;i<obj.options.length;i++){
        var opt=obj.options[i];

        if(by=='val'){
            if(in_array(trim(opt.value),arry)){
                opt.selected=true;
            }
        }else{
            if(in_array(trim(opt.text),arry)){
                opt.selected=true;
            }
        }
    }
    return obj;

    function in_array(val,arry){
        for(var i=0;i<arry.length;i++){
            if(val==arry[i]){
                return true;
                break;
            }
        }
        return false;
    }

    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}
