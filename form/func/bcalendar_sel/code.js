
function bcalendar_sel(con_id,year,month,day,field_name){
//-------------------------------------------------------
//動態生成年月日下拉
//-------------------------------------------------------
//con_id        容器id
//year          年
//month         月
//day           日
//field_name    欄位名稱
//-------------------------------------------------------

    //---------------------------------------------------
    //容器物件
    //---------------------------------------------------
    var oCon=document.getElementById(con_id);

    //---------------------------------------------------
    //建立年下拉物件
    //---------------------------------------------------
        var oyear   =document.createElement("SELECT");
        var year_id =con_id+'_'+'year';
        var unit    =5;
        var arry_val=[];
        var arry_txt=[];
        oyear.id=year_id;

        for(var i=year-unit;i<=year+unit;i++){
            arry_val.push(i);
            arry_txt.push(""+i+"年");
        }

        for(i=0;i<arry_val.length;i++){
            //建立option物件
            var oOpt=document.createElement("OPTION");
            oOpt.value=arry_val[i];
            oOpt.text =arry_txt[i];

            //附加
            oyear.options.add(oOpt);

            //選取預設年
            if(arry_val[i]==year){
                oOpt.selected=true;
            }
        }

    //---------------------------------------------------
    //建立月下拉物件
    //---------------------------------------------------
        var omonth  =document.createElement("SELECT");
        var month_id=con_id+'_'+'month';
        var arry_val=[];
        var arry_txt=[];
        omonth.id=month_id;

        for(var i=1;i<=12;i++){
            arry_val.push(i);
            arry_txt.push(""+i+"月");
        }

        for(i=0;i<arry_val.length;i++){
            //建立option物件
            var oOpt=document.createElement("OPTION");
            oOpt.value=arry_val[i];
            oOpt.text =arry_txt[i];

            //附加
            omonth.options.add(oOpt);

            //選取預設月
            if(arry_val[i]==month){
                oOpt.selected=true;
            }
        }

    //---------------------------------------------------
    //建立日下拉物件
    //---------------------------------------------------
    var oday    =document.createElement("SELECT");
    var day_id  =con_id+'_'+'day';
    var days    =(new Date(year,month,0)).getDate();
    var arry_val=[];
    var arry_txt=[];
    oday.id=day_id;

    //alert(days);
    for(var i=1;i<=days;i++){
        arry_val.push(i);
        arry_txt.push(""+i+"日");
    }

    for(i=0;i<arry_val.length;i++){
        //建立option物件
        var oOpt=document.createElement("OPTION");
        oOpt.value=arry_val[i];
        oOpt.text =arry_txt[i];

        //附加
        oday.options.add(oOpt);

        //選取預設月
        if(arry_val[i]==day){
            oOpt.selected=true;
        }
    }

    //---------------------------------------------------
    //建立文字方塊物件
    //---------------------------------------------------
    var otxt    =document.createElement("INPUT");
    var txt_id  =con_id+'_'+'txt';
    otxt.type ='text';
    otxt.id   =txt_id;
    otxt.name =field_name;
    otxt.value=year+"-"+month+"-"+day;
    otxt.style.display='none';

    //---------------------------------------------------
    //連動處理
    //---------------------------------------------------

        //FOR 年下拉
        oyear.setAttribute('year_id',oyear.id);
        oyear.setAttribute('month_id',omonth.id);
        oyear.setAttribute('day_id',oday.id);
        oyear.setAttribute('txt_id',otxt.id);
        oyear.onchange=function(){
            var year_id =this.getAttribute('year_id');
            var month_id=this.getAttribute('month_id');
            var day_id  =this.getAttribute('day_id');
            var txt_id  =this.getAttribute('txt_id');
            var oyear   =document.getElementById(year_id);
            var omonth  =document.getElementById(month_id);
            var oday    =document.getElementById(day_id);
            var otxt    =document.getElementById(txt_id);
            var year    =parseInt(oyear.value);
            var month   =parseInt(omonth.value);
            var day     =parseInt(oday.value);
            var days    =(new Date(year,month,0)).getDate();

            tday=(day<=days)?day:1;
            otxt.value=year+"-"+month+"-"+tday;
            //alert(year+','+month+','+day+','+days);

            //-------------------------------------------
            //For 年下拉
            //-------------------------------------------
                var unit=5;
                arry_val=[];
                arry_txt=[];
                this.innerHTML='';

                for(var i=year-unit;i<=year+unit;i++){
                    arry_val.push(i);
                    arry_txt.push(""+i+"年");
                }

                for(i=0;i<arry_val.length;i++){
                    var oOpt=document.createElement("OPTION");
                    oOpt.value=arry_val[i];
                    oOpt.text =arry_txt[i];
                    this.options.add(oOpt);

                    if(arry_val[i]==year){
                        oOpt.selected=true;
                    }
                }

            //-------------------------------------------
            //For 日下拉
            //-------------------------------------------
                day=(day<=days)?day:1;

                arry_val=[];
                arry_txt=[];
                oday.innerHTML='';
                for(var i=1;i<=days;i++){
                    arry_val.push(i);
                    arry_txt.push(""+i+"日");
                }

                for(i=0;i<arry_val.length;i++){
                    var oOpt=document.createElement("OPTION");
                    oOpt.value=arry_val[i];
                    oOpt.text =arry_txt[i];

                    oday.options.add(oOpt);

                    if(arry_val[i]==day){
                        oOpt.selected=true;
                    }
                }
        }

        //FOR 月下拉
        omonth.setAttribute('year_id',oyear.id);
        omonth.setAttribute('month_id',omonth.id);
        omonth.setAttribute('day_id',oday.id);
        omonth.setAttribute('txt_id',otxt.id);
        omonth.onchange=function(){
            var year_id =this.getAttribute('year_id');
            var month_id=this.getAttribute('month_id');
            var day_id  =this.getAttribute('day_id');
            var txt_id  =this.getAttribute('txt_id');
            var oyear   =document.getElementById(year_id);
            var omonth  =document.getElementById(month_id);
            var oday    =document.getElementById(day_id);
            var otxt    =document.getElementById(txt_id);
            var year    =parseInt(oyear.value);
            var month   =parseInt(omonth.value);
            var day     =parseInt(oday.value);
            var days    =(new Date(year,month,0)).getDate();

            otxt.value=year+"-"+month+"-"+day;
            //alert(year+','+month+','+day+','+days);

            //清空
            arry_val=[];
            arry_txt=[];
            oday.innerHTML='';

            for(var i=1;i<=days;i++){
                arry_val.push(i);
                arry_txt.push(""+i+"日");
            }

            for(i=0;i<arry_val.length;i++){
                //建立option物件
                var oOpt=document.createElement("OPTION");
                oOpt.value=arry_val[i];
                oOpt.text =arry_txt[i];

                //附加
                oday.options.add(oOpt);

                if(arry_val[i]==day){
                    oOpt.selected=true;
                }
            }

        }


        //FOR 日下拉
        oday.setAttribute('year_id',oyear.id);
        oday.setAttribute('month_id',omonth.id);
        oday.setAttribute('day_id',oday.id);
        oday.setAttribute('txt_id',otxt.id);
        oday.onchange=function(){
            var year_id =this.getAttribute('year_id');
            var month_id=this.getAttribute('month_id');
            var day_id  =this.getAttribute('day_id');
            var txt_id  =this.getAttribute('txt_id');
            var oyear   =document.getElementById(year_id);
            var omonth  =document.getElementById(month_id);
            var oday    =document.getElementById(day_id);
            var otxt    =document.getElementById(txt_id);
            var year    =parseInt(oyear.value);
            var month   =parseInt(omonth.value);
            var day     =parseInt(oday.value);
            var days    =(new Date(year,month,0)).getDate();

            otxt.value=year+"-"+month+"-"+day;
            //alert(year+','+month+','+day+','+days);
        }

    //---------------------------------------------------
    //附加到容器裡
    //---------------------------------------------------
    oCon.appendChild(oyear);
    oCon.appendChild(omonth);
    oCon.appendChild(oday);
    oCon.appendChild(otxt);
    oCon.oyear  =oyear;
    oCon.omonth =omonth;
    oCon.oday   =oday;
    oCon.otxt   =otxt;
    return oCon;
}
