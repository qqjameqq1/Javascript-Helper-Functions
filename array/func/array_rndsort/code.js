
function array_rndsort(Ra){
//-------------------------------------------------------
//陣列亂數排序
//-------------------------------------------------------
    return Ra.sort(function(){
            return (Math.random()>0.5)?-1:1;
        }
    );
}
