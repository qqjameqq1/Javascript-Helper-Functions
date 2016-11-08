
function round(val,pos){
//-------------------------------------------------------
//四捨五入
//-------------------------------------------------------
//val   值
//pos   位置
//-------------------------------------------------------

    //參數檢驗
    if((val==undefined)||(isNaN(val))){
        return false;
    }
    if((pos==undefined)||(trim(pos)=='')){
        pos=0;
    }else{
        pos=parseInt(pos);
    }

    //是否是負的
    var flag=false;
    if(val<0){
        flag=true;
    }

    //處理
    var tmp=Math.abs(val);
    var pw =Math.pow(10,pos);

    if(flag){
        return -(Math.round(tmp*pw)/pw);
    }else{
        return Math.round(tmp*pw)/pw;
    }

    //子函式
    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
    function in_array(val,array){
        for(var i=0;i<array.length;i++){
            if(val==array[i]){
                return true;
            }
        }
        return false;
    }
}
