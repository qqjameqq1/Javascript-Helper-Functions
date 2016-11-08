//-------------------------------------------------------
//public
//-------------------------------------------------------
//page_wh()             頁面實際高寬
//browser_detect.js     遊覽器偵測
//go()                  重導頁面
//go_encode()           重導頁面,參數會進行編碼

var browser_detect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
browser_detect.init();

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

function go_encode(arry_arg,url,target){
//-------------------------------------------------------
//重導頁面,參數會進行編碼
//-------------------------------------------------------
//arry_arg  參數物件(json格式)
//url       網址
//target    框架(self,parent)
//-------------------------------------------------------

    if((arry_arg==undefined)||(arry_arg=='')){
        arry_arg={};
    }
    if((url==undefined)||(url=='')){
        url='';
    }
    if((target==undefined)||(target=='')){
        target='self';
    }

    var dchr='&';
    var out =[];
    for(var key in arry_arg){
        var val=encodeURI(trim(arry_arg[key]));
        out.push(key+'='+val);
    }

    if(out.length!=0){
    //有參數
        url=url+"?"+out.join(dchr);

        var estr=target+'.location.href="'+url+'"';
        eval(estr);
    }else{
    //無參數
        var estr=target+'.location.href="'+url+'"';
        eval(estr);
    }

    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

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