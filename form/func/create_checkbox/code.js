
function create_checkbox(target,field,arry_sels,arry_vals,arry_txts){
//-------------------------------------------------------
//動態生成CHECKBOX
//-------------------------------------------------------
//target        容器物件,或容器id
//field         CHECKBOX物件id,name值
//arry_sels     預選值
//arry_vals     項目值陣列
//arry_txts     項目文字陣列
//
//本函式執行成功,會傳回容器物件,並可以利用下面方式
//取得CHECKBOX物件.
//  ocon=create_checkbox(參數..)
//  ocon.ochs
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
    if((arry_vals==undefined)||(arry_vals.toString()=='')){
        return false;
    }
    if((arry_txts==undefined)||(arry_txts.toString()=='')){
        return false;
    }
    ocon.innerHTML="";

    //處理
    var ochs=[];
    for(var i=0;i<arry_vals.length;i++){
        var value=arry_vals[i];
        var text =arry_txts[i];

        var och =createElement('INPUT',field);
        var otxt=document.createTextNode(text);

        och.name =field;
        och.type ="CHECKBOX";
        och.value=value;
        och.setAttribute('text',text);

        //附加
        ocon.appendChild(och);
        ocon.appendChild(otxt);
        ochs.push(och);
    }

    //核取
    var objs=document.getElementsByName(field);
    for(var i=0;i<objs.length;i++){
        var obj=objs[i];

        if(in_array(obj.value,arry_sels)){
            obj.checked=true;
        }
    }

    //回傳
    ocon.ochs=ochs;
    return ocon;

    //子函式
    function createElement(type,name){
        var element=null;

        try{
        //FOR IE
            element=document.createElement('<'+type+' name="'+name+'">');
        }
        catch(e){}

        if(!element){
          element=document.createElement(type);
          element.name=name;
        }
        return element;
    }
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
