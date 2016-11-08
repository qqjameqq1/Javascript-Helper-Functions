
function db_radio(id,sel,arry_op){
//-------------------------------------------------------
//資料繫結圈選方塊
//-------------------------------------------------------
//id        圈選方塊 id
//sel       選取值
//arry_op   設定參數陣列
//-------------------------------------------------------

    //取物件
    var oRds=document.getElementsByName(id);
    if(!oRds){
        return false;
    }

    //核取處理
    for(var i=0;i<oRds.length;i++)
    {
        var oRd=oRds[i];

        if(oRd.value==sel){
            oRd.checked=true;
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
                for(var i=0;i<oRds.length;i++){
                    oRds[i].disabled=bool;
                }
            }
        }catch(e){
            return false;
        }
    }
}
