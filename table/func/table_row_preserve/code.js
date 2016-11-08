
function table_row_preserve(id,inxs){
//-------------------------------------------------------
//函式: table_row_preserve()
//用途: 清除表格,保留特定列
//-------------------------------------------------------
//id    表格id
//inxs  預保留的列索引陣列,預設都不保留
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
        //有指定預保留
            try{
                //儲存保留列
                var tmp=[];
                for(var i=0;i<inxs.length;i++){
                    var inx=inxs[i];
                    tmp.push(otbl.tBodies[0].rows[inx].cloneNode(true));
                }

                //清除表格列
                while(otbl.rows.length>0){
                    otbl.deleteRow(-1);
                }

                //回填保留列
                for(var i=0;i<tmp.length;i++){
                    otbl.tBodies[0].appendChild(tmp[i]);
                }
            }catch(e){return false;}
        }else{
        //沒有指定預保留
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
}
