
function ch_datetime(val,type){
//-------------------------------------------------------
//函式: ch_datetime()
//用途: 檢核日期時間
//-------------------------------------------------------
//val   值
//type  類型
//      yyyy-mm-dd
//      yyyy/mm/dd
//      yyyy.mm.dd
//      mm-dd-yyyy
//      mm/dd/yyyy
//      mm.dd.yyyy
//
//注意0:如果傳入val值,含有時間時,本函式會順便驗證時間
//注意1:年份最小值1000至9999年
//注意2:本函式允許下列時間表示法
//
//hh:mm:ss  補零    01:02:03
//hh:mm:ss  不補零  1:2:3
//hh:mm:ss  混雜    01:2:3
//-------------------------------------------------------

    if((val==undefined)||(val=='')){
        return false;
    }
    if((type==undefined)||(type=='')){
        type='yyyy-mm-dd';
    }

    var exp_year="[1-9][0-9][0-9]{2}";
    var exp_mon ="(0?[1-9]|1[012])";
    var exp_date="(0?[1-9]|(1|2)[0-9]|3[01])";
    var exp_hour="(0{1,2}|0?[1-9]|1[0-9]|2[0-3])";
    var exp_min ="(0{1,2}|0?[1-9]|[1-5][0-9])";
    var exp_sec ="(0{1,2}|0?[1-9]|[1-5][0-9])";
    var exp_time=exp_hour+":"+exp_min+":"+exp_sec;
    var exp_del ="";

    switch(type.toLowerCase()){
        //For yyyymmddhhmmss
        case 'yyyy-mm-dd':
            exp_del ="-";
            val=trim(val);
            return yyyymmddhhmmss(val,exp_del,exp_time);
            break;

        case 'yyyy/mm/dd':
            exp_del ="/";
            val=trim(val);
            return yyyymmddhhmmss(val,exp_del,exp_time);
            break;

        case 'yyyy.mm.dd':
            exp_del =".";
            val=trim(val);
            return yyyymmddhhmmss(val,exp_del,exp_time);
            break;

        //For mmddyyyyhhmmss
        case 'mm-dd-yyyy':
            exp_del ="-";
            val=trim(val);
            return mmddyyyyhhmmss(val,exp_del,exp_time);
            break;

        case 'mm/dd/yyyy':
            exp_del ="/";
            val=trim(val);
            return mmddyyyyhhmmss(val,exp_del,exp_time);
            break;

        case 'mm.dd.yyyy':
            exp_del =".";
            val=trim(val);
            return mmddyyyyhhmmss(val,exp_del,exp_time);
            break;
    }

    function yyyymmddhhmmss(val,exp_del,exp_time){
    //驗證 yyyymmddhhmmss
        var exp1="^"+exp_year+exp_del+exp_mon+exp_del+exp_date+"("+"\\s"+exp_time+")?"+"$";
        var exp1=new RegExp(exp1);
        if(exp1.test(val)){

            var arry=val.split(' ');
            arry=(arry[0]).split(exp_del);
            var year=arry[0];
            var mon =arry[1];
            var date=arry[2];

            //檢查天數
            if(date<=(new Date(year,mon,0).getDate())){

                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

    function mmddyyyyhhmmss(val,exp_del,exp_time){
    //驗證 mmddyyyyhhmmss
        var exp1="^"+exp_mon+exp_del+exp_date+exp_del+exp_year+"("+"\\s"+exp_time+")?"+"$";

        var exp1=new RegExp(exp1);
        if(exp1.test(val)){

            var arry=val.split(' ');
            arry=(arry[0]).split(exp_del);
            var year=arry[2];
            var mon =arry[0];
            var date=arry[1];

            //檢查天數
            if(date<=(new Date(year,mon,0).getDate())){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

    function trim(str){
    //去除字串前後空白
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}
