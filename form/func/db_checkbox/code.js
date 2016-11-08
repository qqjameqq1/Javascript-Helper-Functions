
function db_checkbox(id,arry_sel,arry_op){
//-------------------------------------------------------
//資料繫結核取方塊
//-------------------------------------------------------
//id        核取方塊 id
//arry_sel  選取值陣列
//arry_op   設定參數陣列
//-------------------------------------------------------

    //取物件
    var oChs=document.getElementsByName(id);
    if(!oChs){
        return false;
    }

    //核取處理
    if(arry_sel){
        for(var i=0;i<oChs.length;i++)
        {
            var oCh=oChs[i];
            for(var j=0;j<arry_sel.length;j++)
            {
                if(oCh.value==arry_sel[j]){
                    oCh.checked=true;
                    break;
                }
            }
        }
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
                for(var i=0;i<oChs.length;i++){
                    oChs[i].disabled=bool;                    
                }
            }
        }catch(e){
            return false;
        }
    }
}
