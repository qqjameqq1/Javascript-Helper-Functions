
function date_scompare(date1,date2,flag){
//-------------------------------------------------------
//日期比較
//-------------------------------------------------------
//date1     日期1,格式 yyyy/mm/dd [hh:ii:ss]
//date2     日期2,格式 yyyy/mm/dd [hh:ii:ss]
//flag      比較符 >,>=,=,<=,<
//-------------------------------------------------------

    var ts1=(new Date(date1)).valueOf();
    var ts2=(new Date(date2)).valueOf();

    switch(flag){
        case ">":
            if(ts1 > ts2){
                return true;
            }
            else{
                return false;
            }
            break;
        case ">=":
            if(ts1 >= ts2){
                return true;
            }
            else{
                return false;
            }
            break;
        case "<":
            if(ts1 < ts2){
                return true;
            }
            else{
                return false;
            }
            break;
        case "<=":
            if(ts1 <= ts2){
                return true;
            }
            else{
                return false;
            }
            break;
        case "=":
            if(ts1 == ts2){
                return true;
            }
            else{
                return false;
            }
            break;
    }

    //公用子函式
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
