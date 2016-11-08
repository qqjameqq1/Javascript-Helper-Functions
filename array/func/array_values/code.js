
function array_values(arry,sval,strict){
//-------------------------------------------------------
//取回陣列值,同PHP函式,但允許搜尋特定值
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
           tmp.push(val);
        }else{
            //是否強行型態比對
            if(strict==true){
                if(val===sval){
                    tmp.push(val);
                }
            }else{
                if(val==sval){
                    tmp.push(val);
                }
            }
        }
    }

    //回傳
    return tmp;
}
