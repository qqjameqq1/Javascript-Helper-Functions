
function ajax_post(url,arry_arg,func_ok,func_fail,func_wait){
//-------------------------------------------------------
//使用post方法,送出ajax要求
//-------------------------------------------------------
//url       網址
//arry_arg  參數陣列
//func_ok   執行成功,call back func
//func_fail 執行失敗,call back func
//func_wait 執行中,call back func
//
//關於call back func
//處理執行成功的CB函式,本函式會傳給它遠端的輸出值,ajax_val
//處理執行失敗的CB函式,本函式會傳給它錯誤訊息,ajax_err
//處理執行中的CB函式,本函式不會傳給它任何值
//-------------------------------------------------------

    if((url==undefined)||(trim(url)=='')){
        return false;
    }
    if(arry_arg){
        arry_arg['rnd']=Math.random();
        arry_arg=ajax_encode(arry_arg);
    }

    var oXMLHttp=ajax_xmlhttp();

    oXMLHttp.open("POST",url,true);
    oXMLHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    oXMLHttp.send(arry_arg);

    if(func_wait){
        eval('window.'+func_wait);
    }

    oXMLHttp.onreadystatechange=function(){

        //判斷處理狀態
        if(oXMLHttp.readyState==4){
            //載入成功
            if (oXMLHttp.status==200){
                var ajax_val=oXMLHttp.responseText;

                ajax_val=trim(ajax_val);

                if(func_ok){
                    eval('window.'+func_ok);
                }
                return true;
            }else{
            //載入失敗
                var ajax_err="發生問題..系統停止處理..";

                if(func_fail){
                    eval('window.'+func_fail);
                }
                return false;
            }
        }
    }


    function ajax_xmlhttp(){
    //---------------------------------------------------
    //取回XMLHttp物件
    //---------------------------------------------------

        //建立  XMLHttp物件
        XMLHttp=false;

        if(window.XMLHttpRequest){
        //For Mozilla, Safari...瀏覽器

            XMLHttp=new XMLHttpRequest();
            if(XMLHttp.overrideMimeType){
                XMLHttp.overrideMimeType('text/xml');
            }
        }else if(window.ActiveXObject){
        //For IE...瀏覽器
            try{
                XMLHttp=new ActiveXObject("Msxml2.XMLHttp");
            }catch(e){
                 try{
                      XMLHttp=new ActiveXObject("Microsoft.XMLHttp");
                 }catch(e){}
            }
        }

        if(XMLHttp){
            return XMLHttp;
        }else{
            return false;
        }
    }

    function ajax_encode(arry_arg){
    //將陣列元素以encodeURI()編碼

        var tmp=[];
        for(var key in arry_arg){
            var val=trim(arry_arg[key]);
            tmp.push(key+'='+encodeURI(val));
        }

        return tmp.join('&');
    }

    function trim(str){
    //去除字串前後空白
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}
