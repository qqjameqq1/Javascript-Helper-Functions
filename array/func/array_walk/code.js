
function array_walk(array,func,userdata){
//-------------------------------------------------------
//使用自訂函式,套用到每一個陣列元素
//-------------------------------------------------------
//array     陣列
//func      函式名稱
//userdata  使用者自訂參數,預設 無
//
//註:本函式目前無法套用關聯陣列
//-------------------------------------------------------

    //參數檢驗
    if(!array){
        return false;
    }
    if((func==undefined)||(func=='')){
        return false;
    }

    //執行
    for(var key in array){
        var val =array[key];
        var astr="";

        if(userdata!=undefined){
            astr=func+'('+val+','+key+','+userdata+')';
        }else{
            astr=func+'('+val+','+key+')';
        }
        array[key]=eval(astr);
    }

    //回傳
    return array;
}
