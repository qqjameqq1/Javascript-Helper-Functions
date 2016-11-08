
function ch_date(val,type){
//-------------------------------------------------------
//函式: ch_date()
//用途: 檢核日期
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
//注意:年份最小值1000至9999年
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
    var exp_del ="";

    switch(type.toLowerCase()){
        //For yyyymmdd
        case 'yyyy-mm-dd':
            exp_del ="-";
            val=trim(val);
            return yyyymmdd(val,exp_del);
            break;

        case 'yyyy/mm/dd':
            exp_del ="/";
            val=trim(val);
            return yyyymmdd(val,exp_del);
            break;

        case 'yyyy.mm.dd':
            exp_del =".";
            val=trim(val);
            return yyyymmdd(val,exp_del);
            break;

        //For mmddyyyy
        case 'mm-dd-yyyy':
            exp_del ="-";
            val=trim(val);
            return mmddyyyy(val,exp_del);
            break;

        case 'mm/dd/yyyy':
            exp_del ="/";
            val=trim(val);
            return mmddyyyy(val,exp_del);
            break;

        case 'mm.dd.yyyy':
            exp_del =".";
            val=trim(val);
            return mmddyyyy(val,exp_del);
            break;
    }

    function yyyymmdd(val,exp_del){
    //驗證 yyyymmdd
        var exp1="^"+exp_year+exp_del+exp_mon+exp_del+exp_date+"$";
        var exp1=new RegExp(exp1);
        if(exp1.test(val)){

            var arry=val.split(exp_del);
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

    function mmddyyyy(val,exp_del){
    //驗證 mmddyyyy
        var exp1="^"+exp_mon+exp_del+exp_date+exp_del+exp_year+"$";
        var exp1=new RegExp(exp1);
        if(exp1.test(val)){

            var arry=val.split(exp_del);
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
