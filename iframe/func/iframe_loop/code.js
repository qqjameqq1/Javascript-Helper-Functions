
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
