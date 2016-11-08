
function date_week_array(year,month){
//-------------------------------------------------------
//週區段陣列
//-------------------------------------------------------
//year     年
//month    月
//
//
//本函式會傳回某年某月,每一週的起始與終止日的資訊
//如果該月月初,非禮拜一,則要往前推至禮拜一
//如果該月月尾,非禮拜日,則要往後推至禮拜日
//
//範例如下,假設2012年2月為我們的目標月份,則本函式推出
//
//第1週 --> 起始日: 2012-01-30,終止日 2012-02-05
//第2週 --> 起始日: 2012-02-06,終止日 2012-02-12
//第3週 --> 起始日: 2012-02-13,終止日 2012-02-19
//第4週 --> 起始日: 2012-02-20,終止日 2012-02-26
//第5週 --> 起始日: 2012-02-27,終止日 2012-03-04
//-------------------------------------------------------

    //參數檢驗
    if((year==undefined)||isNaN(year)){
        return [];
    }
    if((month==undefined)||isNaN(month)){
        return [];
    }

    //週區段參數陣列
    arry={
        0:{'f':6,'b':0}, //禮拜日
        1:{'f':0,'b':6}, //禮拜一
        2:{'f':1,'b':5}, //禮拜二
        3:{'f':2,'b':4}, //禮拜三
        4:{'f':3,'b':3}, //禮拜四
        5:{'f':4,'b':2}, //禮拜五
        6:{'f':5,'b':1}  //禮拜六
    };

    //變數設定
    arry_week=[];
    arry_week_first  =[];
    arry_week_between=[];
    arry_week_last   =[];

    //第一天,最末天
    first_date=year+"/"+month+"/"+"01";
    last_date ="";
    last_day  =(new Date(year,month,0)).getDate();
    last_date =year+'/'+month+'/'+last_day;

    //---------------------------------------------------
    //推最各週,起始日,終止日
    //---------------------------------------------------

        //第一週
        week      =(new Date(first_date)).getDay();
        sday      =arry[week]['f'];
        eday      =arry[week]['b'];
        sdate     =date_string(new Date(Date.parse(first_date)-(sday)*86400*1000));
        edate     =date_string(new Date(Date.parse(first_date)+(eday)*86400*1000));
        other_s   =date_string(new Date(Date.parse(edate)+(1)*86400*1000));
        arry_week_first.push({'sdate':sdate,'edate':edate});

        //最末週
        week      =(new Date(last_date)).getDay();
        sday      =arry[week]['f'];
        eday      =arry[week]['b'];
        sdate     =date_string(new Date(Date.parse(last_date)-(sday)*86400*1000));
        edate     =date_string(new Date(Date.parse(last_date)+(eday)*86400*1000));
        other_e   =date_string(new Date(Date.parse(sdate)-(1)*86400*1000));
        arry_week_last.push({'sdate':sdate,'edate':edate});

        //其他週
        st=Date.parse(other_s);
        et=Date.parse(other_e);
        while(st<et){
            sdate=date_string(new Date(st));
            edate=date_string(new Date(st+(86400*1000*6)));
            arry_week_between.push({'sdate':sdate,'edate':edate});
            st+=(86400*1000*7);
        }
    //---------------------------------------------------
    //回傳
    //---------------------------------------------------
        arry_week=arry_week.concat(arry_week_first);
        arry_week=arry_week.concat(arry_week_between);
        arry_week=arry_week.concat(arry_week_last);

        return arry_week;

    //---------------------------------------------------
    //子函式
    //---------------------------------------------------

        function date_string(date){
        //-----------------------------------------------
        //日期格式字串
        //-----------------------------------------------
        //date 日期物件
        //
        //本函式回傳 yyyy/mm/dd 日期格式字串
        //-----------------------------------------------

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

            //處理
            var yd   ="/";
            var yarry=[year,month,day];
            var ypart=(yarry.join(yd));

            return ypart;
        }
}
