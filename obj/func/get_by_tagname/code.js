
function get_by_tagname(tag,att_name,att_value){
//-------------------------------------------------------
//依tagname屬性取回物件集合
//-------------------------------------------------------
//tag       標籤名稱      必要參數
//att_name  自訂屬性名稱　非必要參數
//att_value 自訂屬性名稱　非必要參數
//-------------------------------------------------------

    //參數檢驗
    var has_att=false;

    if(tag==undefined||tag==''){
        return false;
    }
    if(att_name!=undefined && att_name!=''){
        has_att=true;
    }

    //取物件
    var oEls=document.getElementsByTagName(tag);
    if(has_att==false){
    //沒給自訂屬性名稱
        return oEls;
    }else{
    //有給自訂屬性名稱

        var tmp=[];
        for(var i=0;i<oEls.length;i++){
            var oEl=oEls[i];
            var val=oEl.getAttribute(att_name);

            //無對應att
            if(val==null){
               continue;
            }

            //有對應att
            if(att_value!=undefined){
                //有指定att值
                if(val.toLowerCase()==att_value){
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
