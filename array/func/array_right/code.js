
function array_right(array,len,flag){
//-------------------------------------------------------
//從末尾取n個元素
//-------------------------------------------------------
//array     陣列
//len       個數
//flag      是否保留,預設 true
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
    //保留
        if(len>array.length){
            len=array.length;
        }

        //複製,與反轉
        var tmp1=(array.join()).split(',');
        tmp1=tmp1.reverse();

        //從末尾依序取出
        for(var i=len-1;i>=0;i--){
            tmp.push(tmp1[i]);
        }
        return tmp;
    }else{
    //不保留
        for(var i=1;i<=len;i++){
            if(array.length!=0){
                var El=array.pop();
                tmp.push(El);
            }else{
                break;
            }
        }

        return tmp.reverse();
    }
}
