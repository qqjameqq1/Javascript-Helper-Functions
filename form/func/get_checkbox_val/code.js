
function get_checkbox_val(target){
//-------------------------------------------------------
//取得核取方塊選取值
//-------------------------------------------------------
//target    物件,或id
//
//本函式成功時,會傳回選取值陣列
//本函式失敗時,會傳回空陣列
//-------------------------------------------------------

    //參數檢驗
    if(typeof(target)=='object'){
       var ochs=target;
    }else{
        if((target==undefined)||(trim(target)=='')){
            return [];
        }
        var ochs=document.getElementsByName(target);
        if(!ochs){
            return [];
        }
    }

    //處理
    var arry=[];
    for(var i=0;i<ochs.length;i++){
        var och=ochs[i];

        if(och.checked){
            arry.push(och.value);
        }
    }
    return arry;

    //子函式
    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
    function in_array(val,array){
        for(var i=0;i<array.length;i++){
            if(val==array[i]){
                return true;
            }
        }
        return false;
    }
}
