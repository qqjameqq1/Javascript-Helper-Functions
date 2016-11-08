
function array_sum(array){
//-------------------------------------------------------
//陣列元素加總
//-------------------------------------------------------

    //變數檢驗
    if(!array){
        return false;
    }

    //計算
    var sum=0;
    for(var i=0;i<array.length;i++){
        if(!isNaN(array[i])){
            sum+=parseFloat(array[i]);
        }
    }

    //回傳
    return sum;
}
