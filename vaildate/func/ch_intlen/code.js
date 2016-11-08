
function ch_intlen(val,ilen,sign,equal){
//-------------------------------------------------------
//函式: ch_intlen()
//用途: 檢核整數長度
//-------------------------------------------------------
//val   值
//ilen  整數長度
//
//sign  是否允許有負的
//      true  --> 值可以為正或負,預設
//      false --> 值僅可以為正
//
//equal 是否完全符合
//      true  --> 長度必須一樣
//      false --> 長度最少要等於,預設
//-------------------------------------------------------

    //檢核參數
    if((val==undefined)||(trim(val)=='')){
        return false;
    }
    if(sign==undefined){
        sign=true;
    }
    if(equal==undefined){
        equal=false;
    }

    //驗證
    if(isNaN(val)){
        return false;
    }else if((val.toString()).indexOf('.')!=-1){
        return false;
    }else{
        val=trim(val);
    }

    //正負判斷
    if(sign==false){
        //僅允許正值
        var exp=/^\d+$/;

        if(!exp.test(val)){
            return false;
        }else{
            //長度判斷
            if(equal==false){
                var exp="^\\d{"+ilen+",}$";
            }else{
                var exp="^\\d{"+ilen+"}$";
            }

            var exp=new RegExp(exp);
            if(!exp.test(val)){
                return false;
            }else{
                return true;
            }
        }
    }else{
        //允許正或負值

        var exp=/^(\-)?(\d)+$/;

        if(!exp.test(val)){
            return false;
        }else{
            //長度判斷
            if(equal==false){
                var exp="^(\\-)?(\\d){"+ilen+",}$";
            }else{
                var exp="^(\\-)?(\\d){"+ilen+"}$";
            }

            var exp=new RegExp(exp);
            if(!exp.test(val)){
                return false;
            }else{
                return true;
            }
        }
    }

    function trim(str){
    //去除字串前後空白
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}
