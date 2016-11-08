
function array_mid(array,inx,len,flag){
//-------------------------------------------------------
//取出指定位置個數
//-------------------------------------------------------
//array 陣列
//inx   位置,基底0
//len   個數
//flag  保留,預設 true
//-------------------------------------------------------
    if((flag==undefined)||(flag==='')){
        flag=true;
    }

    if(flag){
        array=((array.toString()).split(","));
    }

    return array.splice(inx,len);
}
