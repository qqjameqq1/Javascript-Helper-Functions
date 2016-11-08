
function array_isEmpty(Ra){
//-------------------------------------------------------
//函式: array_isEmpty()
//用途: 檢核空陣列
//-------------------------------------------------------
    if(Ra.length==0){
        //無元素
        return true;
    }else{
        //有一個元素,但值為""
        if((Ra.length==1)&&(Ra[0]=="")){
            return true;
        }else{
            return false;
        }
    }
}
