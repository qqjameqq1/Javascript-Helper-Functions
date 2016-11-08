
function array_max(array){
//-------------------------------------------------------
//找出陣列最大值
//-------------------------------------------------------
    var tmp=[];
    for(var key in array){
        var val=array[key];
        tmp.push(val);
    }

    return Math.max.apply({},tmp);
}
