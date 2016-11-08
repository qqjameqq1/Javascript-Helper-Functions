
function is_array(array){
//-------------------------------------------------------
//判斷是不是陣列
//-------------------------------------------------------

    if((!array)||((typeof(array)).toString().toLowerCase()!="object")){
        return false;
    }else{
        if(!array.constructor){
            return false;
        }else{
            var str=(array.constructor).toString().toLowerCase();
            if(str.indexOf("array")!=-1){
                //alert("是陣列");
                return true;
            }else{
                //alert("不是陣列");
                return false;
            }
        }
    }
}
