
function in_array(val,array,strict){
//-------------------------------------------------------
//函式: in_array()
//用途: 檢驗元素是否在陣列裡,同PHP用法
//-------------------------------------------------------
//val       值
//array     陣列
//strict    強制型態比對,預設false
//-------------------------------------------------------

    if((strict==undefined)||(strict=='')){
        strict=false;
    }

    var flag=false;
    for(var i=0;i<array.length;i++){

        if(strict===true){
        //強制型態比對
            if(val===array[i]){
               flag=true;
               break;
            }
        }else{
        //不強制型態比對
            if(val==array[i]){
               flag=true;
               break;
            }
        }

    }

    //回傳
    return flag;
}
