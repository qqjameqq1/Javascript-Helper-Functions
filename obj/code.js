//-------------------------------------------------------
//obj
//-------------------------------------------------------
//get_by_name()     依name屬性取回物件集合
//get_by_tagname()  依tagname屬性取回物件集合
//get_iframe()      取得iframe物件
//findPosX()        取得物件x座標,相對於頁面原點(左上角)
//findPosY()        取得物件y座標,相對於頁面原點(左上角)
//get_wh()          取得物件寬高尺寸,回傳物件

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

function get_iframe(id,type){
//-------------------------------------------------------
//取得iframe物件
//-------------------------------------------------------
//id    物件id
//type  回傳類型
//      obj 預設,回傳型態是物件
//      win 回傳型態是視窗
//-------------------------------------------------------

    //定義
    var arry_type=['obj','win'];
    var obj='';

    //參數檢驗
    if((id==undefined)||trim(id)==''){
        return false;
    }else{
        obj=document.getElementById(id);
        if(!obj){
            return false;
        }
    }
    if((type==undefined)||trim(type)==''){
        type='obj';
    }else{
        if(!in_array(type.toLowerCase(),arry_type)){
            type='obj';
        }
    }

    //處理
    switch(type.toLowerCase()){
        case 'obj':
            return obj;
            break;
        case 'win':
            return obj.contentWindow;
            break;
        default:
            return obj;
            break;
    }

    //子函式
    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
    function in_array(val,array){
        for(var i=0;i<array.length;i++){
            if(val==array[i]){
                return true;
            }
        }
        return false;
    }
}

function findPosX(target){
//-------------------------------------------------------
//取得物件x座標,相對於頁面原點(左上角)
//-------------------------------------------------------

    if((!target)||(target==undefined)){
        return false;
    }
    if(typeof(target)==="object"){
        var obj=target;
    }else{
        var obj=document.getElementById(target);
    }

    var curleft = 0;
    if(obj.offsetParent)
        while(1)
        {
          curleft += obj.offsetLeft;
          if(!obj.offsetParent)
            break;
          obj = obj.offsetParent;
        }
    else if(obj.x)
        curleft += obj.x;
    return curleft;
}

function findPosY(target){
//-------------------------------------------------------
//取得物件y座標,相對於頁面原點(左上角)
//-------------------------------------------------------

    if((!target)||(target==undefined)){
        return false;
    }
    if(typeof(target)==="object"){
        var obj=target;
    }else{
        var obj=document.getElementById(target);
    }

    var curtop = 0;
    if(obj.offsetParent)
        while(1)
        {
          curtop += obj.offsetTop;
          if(!obj.offsetParent)
            break;
          obj = obj.offsetParent;
        }
    else if(obj.y)
        curtop += obj.y;
    return curtop;
}

function get_wh(target){
//-------------------------------------------------------
//取得物件寬高尺寸,回傳物件
//-------------------------------------------------------
//obj.w 物件寬度
//obj.h 物件高度
//-------------------------------------------------------

    if((!target)||(target==undefined)){
        return false;
    }
    if(typeof(target)==="object"){
        var obj=target;
    }else{
        var obj=document.getElementById(target);
    }

    return info={
        'w':obj.offsetWidth,
        'h':obj.offsetHeight
    };
}