
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
