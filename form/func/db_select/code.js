
function db_select(id,by,create,sel,arry_val,arry_txt,arry_op){
//-------------------------------------------------------
//資料繫結下拉選單
//-------------------------------------------------------
//id        下拉選單 id
//by        val=值比對,txt=文字比對
//create    是否新建
//sel       選取值
//arry_val  選項值陣列
//arry_txt  選項文字陣列
//arry_op   設定參數陣列
//-------------------------------------------------------

    //取物件
    var oSel=document.getElementById(id);
    if(!oSel){
        return false;
    }

    //核取處理
    for(var i=0;i<arry_val.length;i++){

        //是否新建
        if(create==1){
            var oOpt=document.createElement('option');
            oOpt.value=arry_val[i];
            oOpt.text =arry_txt[i];

            oSel.options.add(oOpt);
        }else{
            try{
                var oOpt=oSel.options[i];
            }catch(e){}
        }

        try{
            if(by=='val'){
            //選項值比對
                if(arry_val[i]==sel){
                    oSel.focus();
                    oOpt.selected=true;
                }
            }else{
            //選項文字比對
                if(arry_txt[i]==sel){
                    oSel.focus();
                    oOpt.selected=true;
                }
            }
        }catch(e){}
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
            if(arry_op['disabled']!=undefined){
                var bool=(arry_op['disabled']==1)?true:false;
                oSel.disabled=bool;
            }
        }catch(e){
            return false;
        }
    }
}
