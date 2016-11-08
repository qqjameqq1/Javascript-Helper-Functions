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