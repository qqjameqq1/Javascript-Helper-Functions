
function ajax_encode(arry_arg,type){
//-------------------------------------------------------
//將參數予以 encodeURI 處理,以便使用ajax傳送
//-------------------------------------------------------
//arry_arg  參數陣列
//type      回傳類型
//          string  回傳字串型態,預設
//          array   回傳陣列型態
//
//假設: 參數陣列如下
//      arry_arg['id']  =1
//      arry_arg['name']='姓名'
//
//當呼叫,ajax_encode(arry_arg,'string'),則本函式傳回
//  id=1&name=%E5%A7%93%E5%90%8D
//
//當呼叫,ajax_encode(arry_arg,'array'),則本函式傳回
//陣列
//-------------------------------------------------------

    if((arry_arg==undefined)||(arry_arg=='')){
        return false;
    }
    if((type==undefined)||(type=='')){
        type='string';
    }

    switch(type.toLowerCase()){
        case 'array':
            for(var key in arry_arg){
                var val=trim(arry_arg[key]);
                arry_arg[key]=encodeURI(val);
            }
            return arry_arg;
            break;

        case 'string':
        default:
            var tmp=[];
            for(var key in arry_arg){
                var val=trim(arry_arg[key]);
                tmp.push(key+'='+encodeURI(val));
            }

            return tmp.join('&');
            break;
    }

    function trim(str){
    //去除字串前後空白

        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}
