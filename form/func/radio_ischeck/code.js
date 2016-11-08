
function radio_ischeck(target){
//-------------------------------------------------------
//函式: radio_ischeck()
//用途: radio是否勾選
//-------------------------------------------------------
//target    name屬性,或物件
//
//本函式會檢查指定的radio是否有被勾選,若有勾選,傳回
//被勾選的物件,反之傳回false
//-------------------------------------------------------

    if((target==undefined)||(target=='')){
        return false;
    }

    if(typeof(target)=='object'){
        var objs=target;
    }else{
        var objs=document.getElementsByName(target);
    }

    var has_ch=false;
    var val='';
    for(var i=0;i<objs.length;i++){
        var obj=objs[i];
        if(obj.checked){
            has_ch=true;
            break;
        }
    }
    if(has_ch){
        return obj;
    }else{
        return false;
    }
}
