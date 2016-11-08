
function day_range(date,dayno){
//-------------------------------------------------------
//日期區段
//-------------------------------------------------------
//date     日期,預設 今天
//dayno    天數,值可以為正或負
//
//本函式會傳回指定日期往前推n日或往後推n日的日期陣列
//
//  dayno為正時,則往後推
//  dayno為負時,則往前推
//-------------------------------------------------------

    //參數檢驗
    if((date==undefined)||(trim(date)=='')){
        date=new Date();
    }else{
        date=new Date(date);
    }

    if((dayno==undefined)||(isNaN(dayno))){
        return [];
    }

    //處理
    if(dayno<0){
        sdate=date.valueOf();
        edate=date.valueOf()+((dayno+1)*86400*1000);
    }else if(dayno>0){
        sdate=date.valueOf();
        edate=date.valueOf()+((dayno-1)*86400*1000);
    }else{
        return [date_string(new Date(date))];
    }

    if(sdate>edate){
        tmp=sdate;
        sdate=edate;
        edate=tmp;
    }

    days=[];
    while(sdate<=edate){
        tmp=date_string(new Date(sdate));

        days.push(tmp);
        sdate+=86400*1000;
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
