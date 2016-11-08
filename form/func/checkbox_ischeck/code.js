
function checkbox_ischeck(target,type){
//-------------------------------------------------------
//函式: checkbox_ischeck()
//用途: checkbox是否勾選
//-------------------------------------------------------
//target    name屬性,或物件
//type      回傳值型態
//          obj: 回傳選取物件陣列,預設
//          val: 回傳選取值陣列
//-------------------------------------------------------

    if((target==undefined)||(target=='')){
        return false;
    }

    if((type==undefined)||(type=='')){
        type='obj';
    }

    if(typeof(target)=='object'){
        var objs=target;
    }else{
        var objs=document.getElementsByName(target);
        if(!objs){
            return false;
        }
    }

    var has_ch=0;
    var val_arry=[];
    var obj_arry=[];
    for(var i=0;i<objs.length;i++){
        var obj=objs[i];
        if(obj.checked){
            has_ch++;
            val_arry.push(obj.value);
            obj_arry.push(obj);
        }
    }

    if(has_ch==0){
        return false;
    }else{
        if(type=='obj'){
            return obj_arry;
        }else{
            return val_arry;
        }
    }
}
