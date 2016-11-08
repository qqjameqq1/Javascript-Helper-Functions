//-------------------------------------------------------
//iframe
//-------------------------------------------------------
//iframe_navi() iframe導覽
//iframe_loop() iframe輪撥
//get_iframe()  取得iframe物件

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

function iframe_loop(id,pages,sec){
//-------------------------------------------------------
//iframe輪撥
//-------------------------------------------------------
//id    物件id
//pages 頁面串列
//sec   輪撥秒數,預設3秒
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
    if((sec==undefined)||isNaN(sec)){
        sec=3;
    }

    //設定
    var arry=pages.split(',');
    var astr="";
    astr+="iframe_loop('"+id+"','"+pages+"','"+sec+"')";

    oIF.setAttribute('astr',astr);
    oIF.setAttribute('sec',sec);

    //處理
    var inx=oIF.getAttribute('inx');

    if(oIF.timer){
        window.clearTimeout(oIF.timer);
    }

    if(inx==null){

        inx=1;
        oIF.setAttribute('inx',1);
        oIF.src=arry[inx-1];

        oIF.timer=window.setTimeout(astr,sec*1000);
    }else{
        if(inx<arry.length){
           inx++;
        }else{
           inx=1;
        }

        oIF.setAttribute('inx',inx);
        oIF.src=arry[inx-1];

        oIF.timer=window.setTimeout(astr,sec*1000);
    }

    //事件設定
    oIF.onmouseover=function(){
        if(this.timer){
            window.clearTimeout(this.timer);
        }
    }
    oIF.onmouseout=function(){
        var astr=this.getAttribute('astr');
        var sec =this.getAttribute('sec');
        this.timer=window.setTimeout(astr,sec*1000);
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
