
function create_text(target,field,val){
//-------------------------------------------------------
//動態建立文件方塊
//-------------------------------------------------------
//target    容器物件,或容器id
//field     文件方塊id,name值
//val       欄位值
//
//本函式執行成功,會傳回容器物件,並可以利用下面方式
//取得文件方塊物件.
//  ocon=create_text(參數..)
//  ocon.otxt
//
//本函式執行失敗,回傳false
//-------------------------------------------------------

    //參數檢驗
    if(typeof(target)=='object'){
       var ocon=target;
    }else{
        if((target==undefined)||(trim(target)=='')){
            return false;
        }
        var ocon=document.getElementById(target);
        if(!ocon){
            return false;
        }
    }
    ocon.innerHTML="";

    //建立
    var oTxt=document.createElement("INPUT");

    oTxt.type ="TEXT";
    oTxt.id   =field;
    oTxt.name =field;
    oTxt.value=val;

    //附加
    ocon.appendChild(oTxt);

    //回傳
    ocon.otxt=oTxt;
    return ocon;

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
