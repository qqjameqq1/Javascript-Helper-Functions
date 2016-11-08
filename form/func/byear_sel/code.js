
function byear_sel(con_id,field_name,year,unit,disabled){
//-------------------------------------------------------
//動態生成年下拉
//-------------------------------------------------------
//con_id        容器id
//field_name    欄位名稱
//year          年,預設今年
//unit          跨矩,預設5
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
    if((year==undefined)||(year=='')||(isNaN(year))){
        year=(new Date()).getFullYear();
    }
    if((unit==undefined)||(unit=='')||(isNaN(unit))){
        unit=5;
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
    //建立年下拉物件
    //---------------------------------------------------
        var oyear   =document.createElement("SELECT");
        var arry_val=[];
        var arry_txt=[];
        oyear.id  =field_name;
        oyear.name=field_name;

        for(var i=year-unit;i<=year+unit;i++){
            arry_val.push(i);
            arry_txt.push(""+i+"年");
        }

        for(i=0;i<arry_val.length;i++){

            var oOpt=document.createElement("OPTION");
            oOpt.value=arry_val[i];
            oOpt.text =arry_txt[i];

            oyear.options.add(oOpt);

            if(arry_val[i]==year){
                oOpt.selected=true;
            }
        }

    //---------------------------------------------------
    //連動處理
    //---------------------------------------------------
        //FOR 年下拉
        oyear.setAttribute('year_id',oyear.id);
        oyear.setAttribute('unit',unit);
        oyear.onchange=function(){
            var year_id=this.getAttribute('year_id');
            var unit   =this.getAttribute('unit');

            var oyear=document.getElementById(year_id);
            var year =parseInt(oyear.value);
            var unit =parseInt(unit);

            //-------------------------------------------
            //For 年下拉
            //-------------------------------------------

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
    }

    //停用
    if(disabled==true){
        oyear.disabled=true;
    }

    //---------------------------------------------------
    //附加到容器裡
    //---------------------------------------------------
    oCon.appendChild(oyear);
    oCon.oyear  =oyear;
    return oCon;
}
