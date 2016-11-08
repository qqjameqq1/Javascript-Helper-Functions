
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
