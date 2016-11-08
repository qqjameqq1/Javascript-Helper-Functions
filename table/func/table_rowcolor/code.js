
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
