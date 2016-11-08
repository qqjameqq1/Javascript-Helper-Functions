
function clock(id,lang){
//-------------------------------------------------------
//時鐘
//-------------------------------------------------------
//id    物件.id
//lang  語系, tw | en ,預設 tw
//-------------------------------------------------------

    //設定
    var arry_lang=['tw','en'];

    //參數檢驗
    if((id==undefined)||(trim(id)=='')){
        return false;
    }else{
        var obj='';
        obj=document.getElementById(id);
        if(!obj){
            return false;
        }
    }
    if((lang==undefined)||(trim(lang)=='')){
        lang='tw';
    }else{
        if(!in_array(lang.toLowerCase(),arry_lang)){
            lang='tw';
        }
    }

    //處理
    if(obj.timer){
        window.clearTimeout(obj.timer);
    }else{
        obj.timer="";
    }

    //日期時間
    var date=new Date();

    //日期時間拆解
    var year =date.getFullYear();
    var month=date.getMonth()+1;
    var day  =date.getDate();
    var hour =date.getHours();
    var min  =date.getMinutes();
    var sec  =date.getSeconds();
    var yd   ="/";
    var td   =":";

    //補零
    month=((month.toString()).length==2)?month:"0"+month;
    day  =((day  .toString()).length==2)?day  :"0"+day  ;
    hour =((hour .toString()).length==2)?hour :"0"+hour ;
    min  =((min  .toString()).length==2)?min  :"0"+min  ;
    sec  =((sec  .toString()).length==2)?sec  :"0"+sec  ;

    //處理
    switch(lang.toLowerCase()){
        case "en":
            var yarry=[year,month,day];
            var tarry=[hour,min,sec];
            var ypart=(yarry.join(yd));
            var tpart=(tarry.join(td));
            var dstr =ypart+" "+tpart;
            break;
        case "tw":
            var dstr=year+"年"+month+"月"+day+"日"+" ";
            dstr+=hour+"時"+min+"分"+sec+"秒"+"";
            break;
        default: //en
            var yarry=[year,month,day];
            var tarry=[hour,min,sec];
            var ypart=(yarry.join(yd));
            var tpart=(tarry.join(td));
            var dstr =ypart+" "+tpart;
            break;
    }

    obj.innerHTML=dstr;

    //持續呼叫
    var astr="";
    astr+="clock('"+id+"','"+lang+"')";
    obj.timer=window.setTimeout(astr,1000);

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
