
function date_add(unit,number,date){
//-------------------------------------------------------
//日期運算
//-------------------------------------------------------
//$unit		單位		year,month,day,hour,min,sec
//$number	數值
//$date		日期字串
//                      格式1:yyyy/mm/dd hh:ii:ss
//                      格式2:yyyy/mm/dd
//                      預設 :yyyy/mm/dd hh:ii:ss (今天)
//
//回傳類型	yyyy/mm/dd hh:ii:ss
//-------------------------------------------------------

    //參數檢驗
    var arry_unit=['year','month','day','hour','min','sec'];

    if((unit==undefined)||(trim(unit)=="")){
        return false;
    }else{
        if(!in_array(unit,arry_unit)){
            return false;
        }
    }
    if((number==undefined)||(trim(number)=="")||(isNaN(number))){
        return false;
    }else{
        number=parseInt(number);
    }
    if((date==undefined)||(trim(date)=="")){
        var date=new Date();
    }else{
        date=new Date(date);
    }

    //計算處理
    switch (unit.toLowerCase()){
        case "year":
          date.setYear(date.getFullYear()+number);
          break;
        case "month":
          date.setMonth(date.getMonth()+number);
          break;
        case "day":
          date.setDate(date.getDate()+number);
          break;
        case "hour":
          date.setHours(date.getHours()+number);
          break;
        case "min":
          date.setMinutes(date.getMinutes()+number);
          break;
        case "sec":
          date.setSeconds(date.getSeconds()+number);
          break;
    }

    //回傳處理
    var year =date.getFullYear();
    var month=date.getMonth()+1;
    var day  =date.getDate();
    var hour =date.getHours();
    var min  =date.getMinutes();
    var sec  =date.getSeconds();

    month=(((month.toString()).length)==2)?month:"0"+month;
    day  =(((day.toString()).length)==2)?day:"0"+day;
    hour =(((hour.toString()).length)==2)?hour:"0"+hour;
    min  =(((min.toString()).length)==2)?min:"0"+min;
    sec  =(((sec.toString()).length)==2)?sec:"0"+sec;

    //回傳
    var out="";
    out+=year+"/"+month+"/"+day+" ";
    out+=hour+":"+min+":"+sec+"";
    return out;

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
