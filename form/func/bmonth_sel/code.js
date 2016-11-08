
function bmonth_sel(con_id,field_name,month,disabled){
//-------------------------------------------------------
//動態生成月下拉
//-------------------------------------------------------
//con_id        容器id
//field_name    欄位名稱
//month         月,預設今月
//disabled      停用,預設false
//-------------------------------------------------------

    //---------------------------------------------------
    //參數檢驗
    //---------------------------------------------------
    if((con_id==undefined)||(con_id=='')){
        return false;
    }
    if((field_name==undefined)||(field_name=='')){
        return false;
    }
    if((month==undefined)||(month=='')||(isNaN(month))){
        month=((new Date()).getMonth())+1;
    }
    if((disabled==undefined)||(disabled=='')){
        disabled=false;
    }

    //---------------------------------------------------
    //容器物件
    //---------------------------------------------------
    var oCon=document.getElementById(con_id);
    if(!oCon){
        return false;
    }

    //---------------------------------------------------
    //建立月下拉物件
    //---------------------------------------------------
        var omonth　=document.createElement("SELECT");
        var arry_val=[];
        var arry_txt=[];
        omonth.id  =field_name;
        omonth.name=field_name;

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

    //停用
    if(disabled==true){
        omonth.disabled=true;
    }

    //---------------------------------------------------
    //附加到容器裡
    //---------------------------------------------------
    oCon.appendChild(omonth);
    oCon.omonth=omonth;
    return oCon;
}
