
function date_sort(array,order){
//-------------------------------------------------------
//日期排序
//-------------------------------------------------------
//array	    日期陣列
//order	    遞增排序asc,遞減排序desc, 預設asc
//-------------------------------------------------------

    //定義
    var arry_order=['asc','desc'];

    //參數檢驗
    if((array==undefined)||(trim(array)=='')){
        return false;
    }
    if((order==undefined)||(trim(order)=='')){
        order='asc';
    }else{
        if(!in_array(order,arry_order)){
            order='asc';
        }
    }

    if(array.length==1){
        return array;
    }else{

        var tmp=(array.join(",")).split(",");
        for(var i=0;i<tmp.length;i++){
            tmp[i]=date_addzero(tmp[i]);
        }

        switch(order.toLowerCase()){
            case "asc":
                return (tmp.sort());
                break;
            case "desc":
                return (tmp.sort()).reverse();
                break;
            default:
                return (tmp.sort());
                break;
        }
    }

    //---------------------------------------------------
    //子函式
    //---------------------------------------------------
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

    function date_addzero(date){
    //---------------------------------------------------
    //日期時間補零
    //---------------------------------------------------
    //date  日期,格式 yyyy/mm/dd [hh:ii:ss]
    //---------------------------------------------------

        //參數檢驗
        if((date==undefined)||(date=='')){
            return false;
        }

        //日期時間
        var has_time=((date.indexOf(":")==-1))?false:true;
        date=new Date(date);

        //日期時間拆解
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

        var yd="/";
        var td=":";
        var yarry=[year,month,day];
        var tarry=[hour,min,sec];
        var yp=yarry.join(yd);
        var tp=tarry.join(td);

        if(has_time){
        //有時間部分
            return yp+" "+tp;
        }else{
        //無時間部分
            return yp;
        }
    }
}
