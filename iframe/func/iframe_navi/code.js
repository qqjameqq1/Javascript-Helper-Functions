
function iframe_navi(id,pages){
//-------------------------------------------------------
//iframe導覽
//-------------------------------------------------------
//id    物件id
//pages 頁面串列
//
//本函式套用後,回傳回iframe物件,並提供下面方法,瀏覽各
//頁面..
//
//oIF.moveFirst()   瀏覽第一頁
//oIF.movePrev()    瀏覽上一頁
//oIF.moveNext()    瀏覽下一頁
//oIF.moveLast()    瀏覽最末頁
//oIF.moveTo(索引)  瀏覽指定頁,基底0
//-------------------------------------------------------

    //參數檢驗
    if((id==undefined)||trim(id)==''){
        return false;
    }else{
        var oIF=document.getElementById(id);
        if(!oIF){
            return false;
        }
    }
    if((pages==undefined)||trim(pages)==''){
        return false;
    }

    //設定
    var arry=pages.split(',');
    var inx =oIF.getAttribute('inx');

    //處理
    if(inx==null){

        inx=1;
        oIF.setAttribute('inx',1);
        oIF.setAttribute('pages',pages);
        oIF.src=arry[inx-1];
    }else{
        if(inx<arry.length){
           inx++;
        }else{
           inx=1;
        }

        oIF.setAttribute('inx',inx);
        oIF.setAttribute('pages',pages);
        oIF.src=arry[inx-1];
    }

    //事件設定
    oIF.moveTo=function(inx){
        var pages=this.getAttribute('pages');
        var arry =pages.split(',');

        this.setAttribute('inx',inx);
        this.src=arry[inx-1];
    }

    oIF.moveFirst=function(){
        var inx  =1;
        var pages=this.getAttribute('pages');
        var arry =pages.split(',');

        this.setAttribute('inx',inx);
        this.src=arry[inx-1];
    }
    oIF.movePrev=function(){

        var inx  =this.getAttribute('inx');
        var pages=this.getAttribute('pages');
        var arry =pages.split(',');

        if(inx>1){
           inx--;
        }else{
           inx=arry.length;
        }

        this.setAttribute('inx',inx);
        this.src=arry[inx-1];
    }
    oIF.moveNext=function(){
        var inx  =this.getAttribute('inx');
        var pages=this.getAttribute('pages');
        var arry =pages.split(',');

        if(inx<arry.length){
           inx++;
        }else{
           inx=1;
        }

        this.setAttribute('inx',inx);
        this.src=arry[inx-1];
    }
    oIF.moveLast=function(){

        var pages=this.getAttribute('pages');
        var arry =pages.split(',');
        var inx=arry.length;

        this.setAttribute('inx',inx);
        this.src=arry[inx-1];
    }

    //回傳
    return oIF;

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
