//-------------------------------------------------------
//table
//-------------------------------------------------------
//table_hover()         表格列變色
//table_row_delete()    清除表格,刪除特定列
//table_row_preserve()  清除表格,保留特定列
//table_rowcolor()      設定奇偶數列的預設顏色

function table_hover(tbl_id,c_odd,c_even,c_on){
//-------------------------------------------------------
//函式: table_hover()
//用途: 表格列變色
//-------------------------------------------------------
//tbl_id    表格id
//c_odd     奇數列顏色
//c_even    偶數列顏色
//c_on      移入顏色,非必須參數
//-------------------------------------------------------

    //參數檢驗
    if((tbl_id==undefined)||trim(tbl_id)==''){
        return false;
    }
    if((c_odd==undefined)||trim(c_odd)==''){
        return false;
    }
    if((c_even==undefined)||trim(c_even)==''){
        return false;
    }
    if((c_on==undefined)||trim(c_on)==''){
        var has_on=false;
    }else{
        var has_on=true;
    }

    //物件
    var oTbl=document.getElementById(tbl_id);
    var otrs=oTbl.rows;

    for(var i=1;i<otrs.length;i++){
        var otr=otrs[i];
        var inx=otr.rowIndex;

        if(inx % 2){
        //偶數列
            otr.style.backgroundColor=c_even;
            var c_old=c_even;
        }else{
        //奇數列
            otr.style.backgroundColor=c_odd;
            var c_old=c_odd;
        }

        if(has_on==true){
        //有套用滑鼠移入移出效果

            //設定自訂屬性
            otr.setAttribute('c_old',c_old);

            otr.onmouseover=function(){
            //滑鼠移入時,改變列底色
                this.style.backgroundColor=c_on;
            }
            otr.onmouseout=function(){
            //滑鼠移出後,恢復原本列底色
                var c_old=this.getAttribute('c_old');
                this.style.backgroundColor=c_old;
            }
        }
    }

    //回傳
    return oTbl;

    //子函式
    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function table_rowcolor(tbl_id,c_odd,c_even,skip_inxs){
//-------------------------------------------------------
//函式: table_rowcolor()
//用途: 設定奇偶數列的預設顏色
//-------------------------------------------------------
//tbl_id    表格id
//c_odd     奇數列顏色
//c_even    偶數列顏色
//skip_inxs 跳脫列索引陣列,意指不會套用的列,非必須
//-------------------------------------------------------

    //參數檢驗
    if((tbl_id==undefined)||trim(tbl_id)==''){
        return false;
    }
    if((c_odd==undefined)||trim(c_odd)==''){
        return false;
    }
    if((c_even==undefined)||trim(c_even)==''){
        return false;
    }
    if((skip_inxs==undefined)||trim(skip_inxs)==''){
        var has_skip=true;
    }else{
        var has_skip=false;
    }

    var oTbl=document.getElementById(tbl_id);
    var otrs=oTbl.rows;

    for(var i=0;i<otrs.length;i++){
        var otr=otrs[i];
        var inx=otr.rowIndex; //列索引

        if(!in_array(inx,skip_inxs)){
            if(inx % 2){
               otr.style.backgroundColor=c_even;
            }else{
               otr.style.backgroundColor=c_odd;
            }
        }
    }

    //回傳
    return oTbl;

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
