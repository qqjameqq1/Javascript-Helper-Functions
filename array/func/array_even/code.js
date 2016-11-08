
function array_even(arry){
//-------------------------------------------------------
//過濾陣列,傳回的是偶數的元素
//-------------------------------------------------------

    var tarry=[];
    for(var i=0;i<arry.length;i++){
        if(!isNaN(arry[i])){
            if(!(arry[i] & 1)){
                tarry.push(arry[i]);
            }
        }
    }

    return tarry;
}
