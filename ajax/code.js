//-------------------------------------------------------
//ajax
//-------------------------------------------------------
//ajax_encode()     將參數予以 encodeURI 處理,以便使用ajax傳送
//ajax_get()        使用get方法,送出ajax要求
//ajax_getxml()     使用get方法,送出ajax要求
//ajax_post()       使用post方法,送出ajax要求
//ajax_postxml()    使用post方法,送出ajax要求
//ajax_urlencode()  建立參數經 encodeURI 處理過的網址,以便使用ajax傳送
//ajax_xmlhttp()    取回XMLHttp物件

function ajax_encode(arry_arg,type){
//-------------------------------------------------------
//將參數予以 encodeURI 處理,以便使用ajax傳送
//-------------------------------------------------------
//arry_arg  參數陣列
//type      回傳類型
//          string  回傳字串型態,預設
//          array   回傳陣列型態
//
//假設: 參數陣列如下
//      arry_arg['id']  =1
//      arry_arg['name']='姓名'
//
//當呼叫,ajax_encode(arry_arg,'string'),則本函式傳回
//  id=1&name=%E5%A7%93%E5%90%8D
//
//當呼叫,ajax_encode(arry_arg,'array'),則本函式傳回
//陣列
//-------------------------------------------------------

    if((arry_arg==undefined)||(arry_arg=='')){
        return false;
    }
    if((type==undefined)||(type=='')){
        type='string';
    }

    switch(type.toLowerCase()){
        case 'array':
            for(var key in arry_arg){
                var val=trim(arry_arg[key]);
                arry_arg[key]=encodeURI(val);
            }
            return arry_arg;
            break;

        case 'string':
        default:
            var tmp=[];
            for(var key in arry_arg){
                var val=trim(arry_arg[key]);
                tmp.push(key+'='+encodeURI(val));
            }

            return tmp.join('&');
            break;
    }

    function trim(str){
    //去除字串前後空白

        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function ajax_get(url,arry_arg,func_ok,func_fail,func_wait){
//-------------------------------------------------------
//使用get方法,送出ajax要求
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

        url=url+'?'+arry_arg;
    }

    var oXMLHttp=ajax_xmlhttp();

    oXMLHttp.open("Get",url,true);
    oXMLHttp.send(null);

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

function ajax_getxml(url,arry_arg,func_ok,func_fail,func_wait){
//-------------------------------------------------------
//使用get方法,送出ajax要求
//-------------------------------------------------------
//url       網址
//arry_arg  參數陣列
//func_ok   執行成功,call back func
//func_fail 執行失敗,call back func
//func_wait 執行中,call back func
//
//關於call back func
//處理執行成功的CB函式,本函式會傳給它遠端的輸出值,ajax_xml
//處理執行失敗的CB函式,本函式會傳給它錯誤訊息,ajax_err
//處理執行中的CB函式,本函式不會傳給它任何值
//-------------------------------------------------------

    if((url==undefined)||(trim(url)=='')){
        return false;
    }
    if(arry_arg){
        arry_arg['rnd']=Math.random();
        arry_arg=ajax_encode(arry_arg);

        url=url+'?'+arry_arg;
    }

    var oXMLHttp=ajax_xmlhttp();

    oXMLHttp.open("Get",url,true);
    oXMLHttp.send(null);

    if(func_wait){
        eval('window.'+func_wait);
    }

    oXMLHttp.onreadystatechange=function(){

        //判斷處理狀態
        if(oXMLHttp.readyState==4){
            //載入成功
            if (oXMLHttp.status==200){
                var ajax_xml=oXMLHttp.responseXML;

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

function ajax_postxml(url,arry_arg,func_ok,func_fail,func_wait){
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
//處理執行成功的CB函式,本函式會傳給它遠端的輸出值,ajax_xml
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
                var ajax_xml=oXMLHttp.responseXML;

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

function ajax_urlencode(url,arry_arg){
//-------------------------------------------------------
//建立參數經 encodeURI 處理過的網址,以便使用ajax傳送
//-------------------------------------------------------
//url       網址
//arry_arg  參數陣列
//
//假設: url =01.php
//假設: 參數陣列如下
//      arry_arg['id']  =1
//      arry_arg['name']='姓名'
//
//則本函式傳回
//  01.php?id=1&name=%u59D3%u540D
//-------------------------------------------------------

    if((arry_arg==undefined)||(arry_arg=='')){
        return url;
    }else{
        var tmp=[];
        for(var key in arry_arg){
            var val=trim(arry_arg[key]);
            tmp.push(key+'='+encodeURI(val));
        }

        return url+'?'+tmp.join('&');
    }

    function trim(str){
    //去除字串前後空白

        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function ajax_xmlhttp(){
//-------------------------------------------------------
//取回XMLHttp物件
//-------------------------------------------------------

	//建立	XMLHttp物件
	XMLHttp = false;

	if (window.XMLHttpRequest){
	//---------------------------------------------------
	//For Mozilla, Safari...瀏覽器
	//---------------------------------------------------
		XMLHttp = new XMLHttpRequest();
		if (XMLHttp.overrideMimeType){
			 XMLHttp.overrideMimeType('text/xml');
		}
	}else if (window.ActiveXObject){
	//---------------------------------------------------
	//For IE...瀏覽器
	//---------------------------------------------------
		try{
			 XMLHttp = new ActiveXObject("Msxml2.XMLHttp");
		}catch (e){
			 try{
				  XMLHttp = new ActiveXObject("Microsoft.XMLHttp");
			 } catch (e) {}
		}
	}

	if(XMLHttp){
		return XMLHttp;
	}else{
		return false;
	}
}
