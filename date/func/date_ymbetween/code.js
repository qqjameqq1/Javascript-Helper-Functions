
function date_ymbetween(syear,smonth,eyear,emonth){
//-------------------------------------------------------
//根據 起始年,月 至 終止年,月 取得起始日到終止日資訊
//-------------------------------------------------------
//syear    起始年
//smonth   起始月
//eyear    終止年
//emonth   終止月
//
//本函式回傳回下列格式資料
//
//['s']['syear']    起始年
//['s']['smonth']   起始月
//['s']['sdays']    起始日該月天數
//['s']['sdate']    起始日
//
//['e']['eyear']    終止年
//['e']['emonth']   終止月
//['e']['edays']    終止日該月天數
//['e']['edate']    終止日
//-------------------------------------------------------

    //日期比較
    var sdate='';
    var edate='';
    sts=new Date(syear+'/'+smonth+'/'+1);
    ets=new Date(eyear+'/'+emonth+'/'+1);

    //先以1號比較
    tmp={};
    if(sts>ets){
    //起始大於終止
        tmp['year'] =syear;
        tmp['month']=smonth;
        syear =eyear;
        smonth=emonth;
        eyear =tmp['year'];
        emonth=tmp['month'];

        sdays =(new Date(syear,smonth,0)).getDate();
        edays =(new Date(eyear,emonth,0)).getDate();

        //補零
        smonth=((smonth.toString()).length!=2)?'0'+(smonth.toString()):smonth;
        sdays =((sdays.toString()).length!=2)?'0'+(sdays.toString()):sdays;
        emonth=((emonth.toString()).length!=2)?'0'+(emonth.toString()):emonth;
        edays =((edays.toString()).length!=2)?'0'+(edays.toString()):edays;

        //串接
        sdate=syear+'/'+smonth+'/'+'01';
        edate=eyear+'/'+emonth+'/'+edays;
    }else{
    //起始未大於終止
        sdays =(new Date(syear,smonth,0)).getDate();
        edays =(new Date(eyear,emonth,0)).getDate();

        //補零
        smonth=((smonth.toString()).length!=2)?'0'+(smonth.toString()):smonth;
        sdays =((sdays.toString()).length!=2)?'0'+(sdays.toString()):sdays;
        emonth=((emonth.toString()).length!=2)?'0'+(emonth.toString()):emonth;
        edays =((edays.toString()).length!=2)?'0'+(edays.toString()):edays;

        //串接
        sdate=syear+'/'+smonth+'/'+'01';
        edate=eyear+'/'+emonth+'/'+edays;
    }

    //回傳
    var info={};
    info['s']={'syear':syear,'smonth':smonth,'sdays':sdays,'sdate':sdate};
    info['e']={'eyear':eyear,'emonth':emonth,'edays':edays,'edate':edate};
    return info;
}
