
function ch_len(val,len,equal){
//-------------------------------------------------------
//函式: ch_len()
//用途: 檢核長度
//-------------------------------------------------------
//val   值
//len   長度
//
//equal 是否完全符合
//      true  --> 長度必須一樣
//      false --> 長度最少要等於,預設
//-------------------------------------------------------

    //檢核參數
    if((!val)||(val=='')){
        return false;
    }
    if((!len)||(len=='')){
        return false;
    }
    if(equal==undefined){
        equal=false;
    }

    //驗證
    val=trim(val);
    if(val.length<len){
        return false;
    }else{
        if(equal==false){
            return true;
        }else{
            return (val.length==len)?true:false;
        }
    }

    function trim(str){
    //去除字串前後空白
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}
