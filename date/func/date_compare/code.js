
function date_compare(date1,date2){
//-------------------------------------------------------
//日期比較
//-------------------------------------------------------
//date1     日期1,格式 yyyy/mm/dd [hh:ii:ss]
//date2     日期2,格式 yyyy/mm/dd [hh:ii:ss]
//
//回傳值格式
//date1 = date2	傳回0
//date1 > date2	傳回1
//date1 < date2	傳回-1
//-------------------------------------------------------

    var ts1=(new Date(date1)).valueOf();
    var ts2=(new Date(date2)).valueOf();

    if(ts1==ts2){
        return 0;
    }else if(ts1>ts2){
        return 1;
    }else if(ts1<ts2){
        return -1;
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
