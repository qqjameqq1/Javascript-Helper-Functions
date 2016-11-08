//-------------------------------------------------------
//math
//-------------------------------------------------------
//accDiv()      除法修正
//accAdd()      加法修正
//accMul()      乘法修正
//accSub()      減法修正
//is_even()     判斷是偶數
//is_float()    是否為浮點數
//is_odd()      判斷是奇數
//round()       四捨五入

function accAdd(arg1,arg2){
//-------------------------------------------------------
//加法修正
//-------------------------------------------------------
    var r1,r2,m;
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2))
    return (arg1*m+arg2*m)/m
}

function accDiv(arg1,arg2){
//-------------------------------------------------------
//除法修正
//-------------------------------------------------------
    var t1=0,t2=0,r1,r2;
    try{t1=arg1.toString().split(".")[1].length}catch(e){}
    try{t2=arg2.toString().split(".")[1].length}catch(e){}

    with(Math)
    {
        r1=Number(arg1.toString().replace(".",""))
        r2=Number(arg2.toString().replace(".",""))
        return (r1/r2)*pow(10,t2-t1);
    }
}

function accMul(arg1,arg2){
//-------------------------------------------------------
//乘法修正
//-------------------------------------------------------
    var m=0,s1=arg1.toString(),s2=arg2.toString();
    try{m+=s1.split(".")[1].length}catch(e){}
    try{m+=s2.split(".")[1].length}catch(e){}
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
}

function accSub(arg1,arg2){
//-------------------------------------------------------
//減法修正
//-------------------------------------------------------
    var r1,r2,m;
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2))
    return (arg1*m-arg2*m)/m
}

function is_even(num){
//-------------------------------------------------------
//判斷是偶數
//-------------------------------------------------------
    if(!(num & 1)){
        return true;
    }else{
        return false;
    }
}

function is_float(val){
//-------------------------------------------------------
//是否為浮點數
//-------------------------------------------------------
//val 值
//-------------------------------------------------------

    //參數檢驗
    if((val==undefined)||(trim(val)=='')||(isNaN(val))){
        return false;
    }

    //處理
    if((val.toString()).indexOf(".")!=-1){
        return true;
    }else{
        return false;
    }

    //子函式
    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function is_odd(num){
//-------------------------------------------------------
//判斷是奇數
//-------------------------------------------------------
    if(num & 1){
        return true;
    }else{
        return false;
    }
}

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
