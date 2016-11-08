
function create_radio(target,field,val,arry_vals,arry_txts){
//-------------------------------------------------------
//動態生成RADIO
//-------------------------------------------------------
//target        容器物件,或容器id
//field         RADIO物件id,name值
//val           預選值
//arry_vals     項目值陣列
//arry_txts     項目文字陣列
//
//本函式執行成功,會傳回容器物件,並可以利用下面方式
//取得所有RADIO物件.
//  ocon=create_radio(參數..)
//  ocon.ords
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
    var ords=[];
    for(var i=0;i<arry_vals.length;i++){
        var value=arry_vals[i];
        var text =arry_txts[i];

        var ord =createElement('INPUT',field);
        var otxt=document.createTextNode(text);

        ord.name =field;
        ord.type ="RADIO";
        ord.value=value;
        ord.setAttribute('text',text);

        //附加
        ocon.appendChild(ord);
        ocon.appendChild(otxt);
        ords.push(ord);
    }

    //核取
    var objs=document.getElementsByName(field);
    for(var i=0;i<objs.length;i++){
        var obj=objs[i];

        if(obj.value==val){
            obj.checked=true;
            break;
        }
    }

    //回傳
    ocon.ords=ords;
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
