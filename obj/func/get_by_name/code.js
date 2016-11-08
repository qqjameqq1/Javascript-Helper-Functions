
function get_by_name(name,att_name,att_val){
//-------------------------------------------------------
//依name屬性取回物件集合
//-------------------------------------------------------
//name      name屬性  必要參數
//att_name  att名稱   非必要參數
//att_val   att值     非必要參數
//-------------------------------------------------------

    //參數檢驗
    var has_att=false;

    if((name==undefined)||(name=='')){
        return false;
    }
    if((att_name!=undefined)&&(att_name!='')){
        has_att=true;
    }

    //取回特定物件
    var oEls=document.getElementsByName(name);
    var tmp =[];

    if(has_att==false){
    //使用者沒有指定att
        return oEls;
    }else{
    //使用者有指定att
        for(var i=0;i<oEls.length;i++){
            var oEl    =oEls[i];
            var att_tmp=oEl.getAttribute(att_name);

            //無對應att
            if(att_tmp==null){
               continue;
            }

            //有對應att
            if(att_val!=undefined){
                //有指定att值
                if(att_tmp.toLowerCase()==att_val){
                    tmp.push(oEl);
                }
            }else{
                //沒有指定att值
                tmp.push(oEl);
            }
        }

        return tmp;
    }
}
