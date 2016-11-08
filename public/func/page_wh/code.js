
function page_wh(type){
//-------------------------------------------------------
//頁面實際高寬
//-------------------------------------------------------
//type  非必須
//  type=w  回傳實際寬
//  type=h  回傳實際高
//  不指定,則傳回物件{"w":實際寬,"h":實際高}
//-------------------------------------------------------

    var d=document, b=d.body, e=d.documentElement;
    var _w=Math.max(Math.max(b.scrollWidth,e.scrollWidth),Math.max(b.clientWidth,e.clientWidth));
    var _h=Math.max(Math.max(b.scrollHeight,e.scrollHeight),Math.max(b.clientHeight,e.clientHeight));

    switch(type){
        case "w":
            return _w;
            break;
        case "h":
            return _h;
            break;
        default:
            return {"w":_w,"h":_h};
            break;
    }
}
