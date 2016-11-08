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