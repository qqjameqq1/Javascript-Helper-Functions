
function get_select_val(target){
//-------------------------------------------------------
//取得下拉選單選取值
//-------------------------------------------------------
//target    物件,或id
//
//本函式成功時,會傳回選取值陣列
//本函式失敗時,會傳回空陣列
//-------------------------------------------------------

    //參數檢驗
    if(typeof(target)=='object'){
       var oSel=target;
    }else{
        if((target==undefined)||(trim(target)=='')){
            return [];
        }
        var oSel=document.getElementById(target);
        if(!oSel){
            return [];
        }
    }

    //處理
    var arry=[];
    for(var i=0;i<oSel.options.length;i++){
        var oOpt=oSel.options[i];

        if(oOpt.selected){
            arry.push(oOpt.value);
        }
    }

    //回傳
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
