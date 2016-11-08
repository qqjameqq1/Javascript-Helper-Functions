
function date_ampm(date){
//-------------------------------------------------------
//判斷時間是am,pm
//-------------------------------------------------------
//date  日期,預設 今天
//
//本函式會傳回下面的中文代碼
//
//回傳 午夜 --> 當 hour=0
//回傳 零晨 --> 當 hour=1~5
//回傳 上午 --> 當 hour=6~11
//回傳 中午 --> 當 hour=12
//回傳 下午 --> 當 hour=13~17
//回傳 夜間 --> 當 hour=18~24
//-------------------------------------------------------

    //參數檢驗
    if((date==undefined)||(trim(date)=='')){
        date=new Date();
    }else{
        date=new Date(date);
    }

    //處理
    var year =date.getFullYear();
    var month=date.getMonth()+1;
    var day  =date.getDate();
    var hour =date.getHours();
    var min  =date.getMinutes();
    var sec  =date.getSeconds();

    if(parseInt(hour)==0){
    //case 0
        return "午夜";
    }
    if((parseInt(hour)>=1)&&(parseInt(hour)<=5)){
    //case 1,2,3,4,5
        return "零晨"
    }
    if((parseInt(hour)>=6)&&(parseInt(hour)<=11)){
    //case 6,7,8,9,10,11
        return "上午"
    }
    if(parseInt(hour)==12){
    //case 12
        return "中午";
    }
    if((parseInt(hour)>=13)&&(parseInt(hour)<=17)){
    //case 13,14,15,16,17:
        return "下午"
    }
    if((parseInt(hour)>=18)&&(parseInt(hour)<=23)){
    //case 18,19,20,21,22,23:
        return "夜間"
    }

    //子函式
    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}
