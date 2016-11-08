
function get_radio_val(name){
//-------------------------------------------------------
//取得radio元件選取值
//-------------------------------------------------------
//name  radio元件的name屬性
//-------------------------------------------------------

    //參數檢驗
    if((name==undefined)||(trim(name)=='')){
        return '';
    }
    var ords=document.getElementsByName(name);
    if(!ords){
        return '';
    }

    var val="";
    for(var i=0;i<ords.length;i++){
        var ord=ords[i];

        if(ord.checked){
            val=ord.value;
            break;
        }
    }
    return val;

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
