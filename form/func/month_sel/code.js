
function month_sel(id,month,disabled){
//-------------------------------------------------------
//繫結月下拉
//-------------------------------------------------------
//id        物件id
//month     月份,預設本月
//disabled  停用,預設false
//-------------------------------------------------------

    //---------------------------------------------------
    //參數檢驗
    //---------------------------------------------------

    if((id==undefined)||(id=='')){
        return false;
    }
    if((month==undefined)||(month=='')||(isNaN(month))){
        var exp=new RegExp("^(0?[1-9]|10|11|12)");
        if(!exp.test(month)){
            month=((new Date()).getMonth())+1;
        }
    }
    if((disabled==undefined)||(disabled=='')){
        disabled=false;
    }

    //---------------------------------------------------
    //建立月下拉物件
    //---------------------------------------------------

        var omonth=document.getElementById(id);
        if(!omonth){
            return false;
        }

        var arry_val=[];
        var arry_txt=[];

        for(var i=1;i<=12;i++){
            arry_val.push(i);
            arry_txt.push(""+i+"月");
        }

        for(i=0;i<arry_val.length;i++){
            var oOpt=document.createElement("OPTION");
            oOpt.value=arry_val[i];
            oOpt.text =arry_txt[i];

            omonth.options.add(oOpt);

            if(arry_val[i]==month){
                oOpt.selected=true;
            }
        }

    //---------------------------------------------------
    //連動處理
    //---------------------------------------------------

        //FOR 月下拉
        omonth.setAttribute('month_id',omonth.id);
        omonth.onchange=function(){
            var month_id=this.getAttribute('month_id');

            var omonth=document.getElementById(month_id);
            var month =parseInt(omonth.value);

            //-------------------------------------------
            //For 月下拉
            //-------------------------------------------
                arry_val=[];
                arry_txt=[];
                this.innerHTML='';

                for(var i=1;i<=12;i++){
                    arry_val.push(i);
                    arry_txt.push(""+i+"月");
                }

                for(i=0;i<arry_val.length;i++){
                    var oOpt=document.createElement("OPTION");
                    oOpt.value=arry_val[i];
                    oOpt.text =arry_txt[i];
                    this.options.add(oOpt);

                    if(arry_val[i]==month){
                        oOpt.selected=true;
                    }
                }
    }

    //停用
    if(disabled==true){
        omonth.disabled=true;
    }
    return omonth;
}
