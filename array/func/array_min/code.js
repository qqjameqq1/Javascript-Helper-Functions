
function array_min(array){
//-------------------------------------------------------
//找出陣列最小值
//-------------------------------------------------------
    var tmp=[];
    for(var key in array){
        var val=array[key];
        tmp.push(val);
    }

    return Math.min.apply({},tmp);
}
