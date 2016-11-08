
function ch_year(val,type){
//-------------------------------------------------------
//函式: ch_year()
//用途: 檢核年份
//-------------------------------------------------------
//val   年份
//type  類型
//      yyyy    西元年,預設 0001~9999
//      yyy     民國年,值域 1~999
//-------------------------------------------------------

    //檢核參數
    if((val==undefined)||(val=='')||(isNaN(val))){
        return false;
    }
    if((type==undefined)||(type=='')){
        type='yyyy';
    }else{
        if(!in_array(type,['yyyy','yyy'])){
            type='yyyy';
        }
    }

    if(type=='yyyy'){
        var exp=new RegExp("^\\d{4}$");
    }else{
        var exp=new RegExp("^\\d{1,3}$");
    }

    if(exp.test(trim(val))){
        return true;
    }else{
        return false;
    }

    function in_array(val,array){
    //in_arry
        val=val.toString();

        for(var i=0;i<array.length;i++){
            if(val.toLowerCase()==array[i]){
                return true;
                break;
            }
        }
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
