
function date_weekname(key){
//-------------------------------------------------------
//取回中文禮拜幾名稱
//-------------------------------------------------------
//key  鍵值,可能型態如下
//
//      型態='numeric'   0-6
//        0     --> 禮拜日
//        6     --> 禮拜六
//      型態='string'    sun,mon,tue,wed,thu,fri,sat
//        sun   --> 禮拜日
//        sat   --> 禮拜六
//-------------------------------------------------------

    //定義
    var arry_type=['numeric','string'];

    var arry_weekname={};
    arry_weekname[0]    ="禮拜日";
    arry_weekname[1]    ="禮拜一";
    arry_weekname[2]    ="禮拜二";
    arry_weekname[3]    ="禮拜三";
    arry_weekname[4]    ="禮拜四";
    arry_weekname[5]    ="禮拜五";
    arry_weekname[6]    ="禮拜六";
    arry_weekname["sun"]="禮拜日";
    arry_weekname["mon"]="禮拜一";
    arry_weekname["tue"]="禮拜二";
    arry_weekname["wed"]="禮拜三";
    arry_weekname["thu"]="禮拜四";
    arry_weekname["fri"]="禮拜五";
    arry_weekname["sat"]="禮拜六";


    //參數檢驗
    if((key==undefined)||(trim(key)=='')){
        return false;
    }

    //處理
    key =key.toString().toLowerCase();

    //回傳
    return arry_weekname[key];

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
