
function table_row_delete(id,inxs){
//-------------------------------------------------------
//函式: table_row_delete()
//用途: 清除表格,刪除特定列
//-------------------------------------------------------
//id    表格id
//inxs  欲刪除的列索引陣列,預設全部刪除
//-------------------------------------------------------

    //---------------------------------------------------
    //參數檢驗
    //---------------------------------------------------
        var has_inxs=false;

        if((id==undefined)||(trim(id)=='')){
            return false;
        }else{
            var otbl=document.getElementById(id);
            if(!otbl){
                return false;
            }
        }
        if(inxs!=undefined){
            has_inxs=true;
        }

    //---------------------------------------------------
    //處理
    //---------------------------------------------------
        var otrs=otbl.rows;
        var len =otrs.length;

        if(has_inxs){
        //有指定欲刪除
            try{
                //儲存保留列
                var tmp=[];
                for(var i=0;i<oTbl1.tBodies[0].rows.length;i++){
                    var otr=oTbl1.tBodies[0].rows[i];

                    if(!in_array(i,inxs)){
                        tmp.push(otr.cloneNode(true));
                    }
                }

                //清除表格列
                while(oTbl1.rows.length>0){
                    oTbl1.deleteRow(-1);
                }

                //回填保留列
                for(var i=0;i<tmp.length;i++){
                    oTbl1.tBodies[0].appendChild(tmp[i]);
                }
            }catch(e){return false;}
        }else{
        //沒有指定欲刪除
            try{
                //清除表格列
                while(otbl.rows.length>0){
                    otbl.deleteRow(-1);
                }
            }catch(e){return false;}
        }

    //---------------------------------------------------
    //回傳
    //---------------------------------------------------
        return otbl;

    //---------------------------------------------------
    //子函式
    //---------------------------------------------------
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
