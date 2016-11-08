
function set_opacity(target,op){
//-------------------------------------------------------
//透明設定
//-------------------------------------------------------
//target    物件 | 物件id
//op        透明度(0:完全透明 ~ 100:完全不透明)
//-------------------------------------------------------

    //參數檢驗
    if((target==undefined)||(trim(target)=='')){
        return false;
    }
    if((op==undefined)||(isNaN(op))){
        return false;
    }else{
        op=parseInt(op);
        op=(op<0)?0:op;
        op=(op>100)?100:op;
    }

    if(typeof(target)=='object'){
        var obj=target;
    }else{
        var obj=document.getElementById(target);
        if(!obj){
            return false;
        }
    }

    //透明
    obj.style.filter      ="alpha(opacity=" + op + ")";
    obj.style.KHTMLOpacity=op/100;
    obj.style.MozOpacity  =op/100;
    obj.style.opacity     =op/100;

    //回傳
    return true;

    //子函式
    function trim(val){
        val=val.toString();
        val=val.replace(/^\s+/,"");
        val=val.replace(/\s+$/,"");
        return val;
    }
}
