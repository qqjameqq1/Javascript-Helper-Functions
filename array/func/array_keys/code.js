
function array_keys(arry,sval,strict){
//-------------------------------------------------------
//取回陣列鍵,同PHP函式
//-------------------------------------------------------
//arry    陣列
//sval    搜尋值,預設 無
//strict  強制型態比對,預設 false
//-------------------------------------------------------

    //參數檢驗
    if(!arry){
        return [];
    }
    if(!strict){
        strict=false;
    }

    //處理
    var tmp=[];
    for(var key in arry){
        var val=arry[key];

        //是否要搜尋值
        if(sval==undefined){
           tmp.push(key);
        }else{
            //是否強行型態比對
            if(strict==true){
                if(val===sval){
                    tmp.push(key);
                }
            }else{
                if(val==sval){
                    tmp.push(key);
                }
            }
        }
    }

    //回傳
    return tmp;
}
