function db_textarea(id,val,arry_op){
//-------------------------------------------------------
//繫結文字欄位
//-------------------------------------------------------
//id        文字欄位id
//val       欄位值
//arry_op   設定參數陣列
//-------------------------------------------------------

    var oTxta=document.getElementById(id);

    if(oTxta){
        oTxta.value=val;
    }

    //設定參數陣列
    if(arry_op){
        try{
        //-----------------------------------------------
        //套用設定
        //-----------------------------------------------

            //列舉設定
            var out='';
            for(key in arry_op){
                var val=arry_op[key];
                out+=key+'='+val+'\n';
            }
            //alert(out);

            //套用設定
            if(arry_op['readonly']!=undefined){
                var bool=(arry_op['readonly']==1)?true:false;
                oTxta.readOnly=bool;
            }

            if(arry_op['disabled']!=undefined){
                var bool=(arry_op['disabled']==1)?true:false;
                oTxta.disabled=bool;
            }
        }catch(e){
            return false;
        }
    }
}
