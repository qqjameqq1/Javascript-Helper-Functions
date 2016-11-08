
function array_left(array,len,flag){
//-------------------------------------------------------
//從前頭取n個元素
//-------------------------------------------------------
//array 陣列
//len   長度
//flag  是否保留,預設 true
//-------------------------------------------------------

    //參數檢驗
    if(!array){
        return false;
    }
    if((len==undefined)||(isNaN(len))){
        return false;
    }
    if((flag==undefined)||(flag==='')){
        flag=true;
    }

    //處理
    var tmp=[];
    if(flag){
    //---------------------------------------------------
    //保留
    //---------------------------------------------------
        if(len>array.length){
            len=array.length;
        }

        for(var i=0;i<len;i++){
            tmp.push(array[i]);
        }
        return tmp;
    }else{
    //---------------------------------------------------
    //不保留
    //---------------------------------------------------
        for(var i=1;i<=len;i++){
            if(array.length!=0){
                var El=array.shift();
                tmp.push(El);
            }else{
                break;
            }
        }
        return tmp;
    }
}
