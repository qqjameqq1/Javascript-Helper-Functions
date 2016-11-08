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