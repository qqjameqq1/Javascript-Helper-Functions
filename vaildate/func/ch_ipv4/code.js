
function ch_ipv4(val){
//-------------------------------------------------------
//函式: ch_ipv4()
//用途: 檢核IP,格式IPv4
//-------------------------------------------------------
//val   值
//-------------------------------------------------------

    //參數檢驗
    if((val=="")||(val==undefined)){return false;}
    
    //正規式
    var exp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;

    //驗證
    val=trim(val);

    if(val=='255.255.255.255'){
        return true;
    }

    if (exp.test(val)){
        var arry=val.split(".");

        if(parseInt(arry[0])==0){
            return false;
        }

        if(parseInt(arry[3])==0){
            return false;
        }

        for(var i=0;i<arry.length;i++){
            if(parseInt(arry[i])>254){
                return false;
            }
        }
        return true;
    }else{
        return false;
    }

    function trim(str){
    //去除字串前後空白
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}
