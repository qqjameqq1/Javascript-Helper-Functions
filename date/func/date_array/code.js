
function date_array(sdate,edate){
//-------------------------------------------------------
//日期陣列
//-------------------------------------------------------
//sdate    起始日期,格式 yyyy/mm/dd
//edate    終止日期,格式 yyyy/mm/dd
//
//本函式會傳回起始日期至終止日期間的日期陣列
//-------------------------------------------------------

    //參數檢驗
    if((sdate==undefined)||(trim(sdate)=='')){
        return [];
    }
    if((edate==undefined)||(trim(edate)=='')){
        return [];
    }

    //處理
    var sts=(new Date(sdate)).valueOf();
    var ets=(new Date(edate)).valueOf();

    if(sts>ets){
        tmp=sts;
        sts=ets;
        ets=tmp;
    }

    days=[];
    while(sts<=ets){
        tmp=date_string(new Date(sts));

        days.push(tmp);
        sts+=86400*1000;
    }
    return days;

    //子函式
    function date_string(date){

        var year =date.getFullYear();
        var month=date.getMonth()+1;
        var day  =date.getDate();
        var hour =date.getHours();
        var min  =date.getMinutes();
        var sec  =date.getSeconds();

        //補零
        month=((month.toString()).length==2)?month:"0"+month;
        day  =((day  .toString()).length==2)?day  :"0"+day  ;
        hour =((hour .toString()).length==2)?hour :"0"+hour ;
        min  =((min  .toString()).length==2)?min  :"0"+min  ;
        sec  =((sec  .toString()).length==2)?sec  :"0"+sec  ;

        //處理
        var yd   ="/";
        var td   =":";
        var yarry=[year,month,day];
        var tarry=[hour,min,sec];
        var ypart=(yarry.join(yd));
        var tpart=(tarry.join(td));

        return ypart;
    }

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
