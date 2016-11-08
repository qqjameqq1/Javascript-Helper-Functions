
function go(url,target){
//-------------------------------------------------------
//重導頁面
//-------------------------------------------------------
//url       網址
//target    框架(self,parent)
//-------------------------------------------------------

    if((url==undefined)||(url=='')){
        return false;
    }
    if((target==undefined)||(target=='')){
        target='self';
    }
    var estr=target+'.location.href="'+url+'"';
    //alert(estr);
    eval(estr);
}
