
function array2str(array,dchr,flag){
//-------------------------------------------------------
//陣列轉字串
//-------------------------------------------------------
//array     陣列
//dchr      串接字元,預設 ','
//flag      允許空元素,預設 true
//-------------------------------------------------------

    if((array==undefined)||(array=='')){
        return false;
    }
    if((dchr==undefined)||(dchr=='')){
        dchr=',';
    }
    if(flag==undefined){
        flag=true;
    }

    if(flag==true){
        return array.join(dchr);
    }else{

        var tmp=[];
        for(key in array){
            //排除空的
            if((trim(array[key])!="")){
                tmp.push(array[key]);
            }
        }
        return tmp.join(dchr);
    }

    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}
