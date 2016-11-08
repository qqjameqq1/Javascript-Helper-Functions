
function create_select(target,field,arry_sels,arry_vals,arry_txts,multiple,size){
//-------------------------------------------------------
//動態生成下拉選單
//-------------------------------------------------------
//target        容器物件,或容器id
//field         下拉選單id,name值
//arry_sels     預選值陣列
//arry_vals     項目值陣列
//arry_txts     項目文字陣列
//multiple      是否複選,預設 false
//arry_txts     顯示個數,預設 1
//
//本函式執行成功,會傳回容器物件,並可以利用下面方式
//取得下拉選單物件.
//  ocon=create_select(參數..)
//  ocon.osel
//
//本函式執行失敗,回傳false
//-------------------------------------------------------

    //參數檢驗
    if(typeof(target)=='object'){
       var oCon=target;
    }else{
        if((target==undefined)||(trim(target)=='')){
            return false;
        }
        var oCon=document.getElementById(target);
        if(!oCon){
            return false;
        }
    }
    if((arry_vals==undefined)||(arry_vals.toString()=='')){
        return false;
    }
    if((arry_txts==undefined)||(arry_txts.toString()=='')){
        return false;
    }
    var multiple=multiple||false;
    var size    =size||1;

    if(multiple==true){
    //多選
        try{
            //For IE6,多選修正,避免無法複選
            var oSel=document.createElement('<select multiple>');

            oSel.multiple=true;
            oSel.setAttribute("multiple","multiple");
            oSel.setAttribute("size",size);

            oSel.id  =field;
            oSel.name=field;
        }catch(event){
            //For other
            var oSel=document.createElement('select');

            oSel.multiple=true;
            oSel.setAttribute("multiple","multiple");
            oSel.setAttribute("size",size);

            oSel.id  =field;
            oSel.name=field;
        }
    }else{
    //單選
        var oSel=document.createElement('select');
        oSel.setAttribute("size",size);
        oSel.id  =field;
        oSel.name=field;
    }

    //建立option
    for(var i=0;i<arry_vals.length;i++){
        var oOpt=document.createElement("option");
        oOpt.value=arry_vals[i];
        oOpt.text =arry_txts[i];

        //附加option
        oSel.options.add(oOpt);

        //核取
        if(in_array(arry_vals[i],arry_sels)){
            oOpt.selected=true;
        }
    }

    //附加select
    oCon.innerHTML="";
    oCon.appendChild(oSel);
    oCon.osel=oSel;

    //回傳
    return oCon;

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
