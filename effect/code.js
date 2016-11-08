//-------------------------------------------------------
//effect
//-------------------------------------------------------
//set_opacity()                 透明設定
//fadeElement.initialise(obj)   透明漸變,滑鼠移入移出

var fadeElement ={
//http://www.firelightning.com
	initialise: function(obj)
	{
		// Set initial opacity for the object:
		fadeElement.setOpacity(obj, 85);
		// Add the object to objArray:
		fadeElement.objArray.push(obj);
		// Initialise the fadeState property:
		obj.fadeState = '';
		obj.onmouseover = function() { this.fadeState = 'fadingIn'; }
		obj.onmouseout = function() { this.fadeState = 'fadingOut'; }

		// Set a timer to call the fader method:
		if (!window.fadeTimer) window.fadeTimer = setInterval(fadeElement.fader, 50);
	},

	setOpacity: function(obj, opacity)
	{
		obj.style.filter = "alpha(opacity=" + opacity + ")"; // For IE filter to work, obj MUST have layout
		obj.style.KHTMLOpacity = opacity / 100; // Safari and Konqueror
		obj.style.MozOpacity = opacity / 100; // Old Mozilla and Firefox
		obj.style.opacity = opacity / 100; // CSS3 opacity for browsers that support it
	},

	fader: function()
	{
		// Loop through all objects in objArray:
		for (var i = 0; i < fadeElement.objArray.length; i++)
		{
			var obj = fadeElement.objArray[i];
			var opacity = obj.style.opacity * 100;

			// Check if object is animated:
			if ((obj.fadeState == 'fadingIn') && opacity < 100)
				fadeElement.setOpacity(obj, opacity + 10);
			else if ((obj.fadeState == 'fadingOut') && opacity > 85)
				fadeElement.setOpacity(obj, opacity - 10);
		}
	},

	objArray: [] // This array stores each object passed to the script.
}

function set_opacity(target,op){
//-------------------------------------------------------
//透明設定
//-------------------------------------------------------
//target    物件 | 物件id
//op        透明度(0:完全透明 ~ 100:完全不透明)
//-------------------------------------------------------

    //參數檢驗
    if((target==undefined)||(trim(target)=='')){
        return false;
    }
    if((op==undefined)||(isNaN(op))){
        return false;
    }else{
        op=parseInt(op);
        op=(op<0)?0:op;
        op=(op>100)?100:op;
    }

    if(typeof(target)=='object'){
        var obj=target;
    }else{
        var obj=document.getElementById(target);
        if(!obj){
            return false;
        }
    }

    //透明
    obj.style.filter      ="alpha(opacity=" + op + ")";
    obj.style.KHTMLOpacity=op/100;
    obj.style.MozOpacity  =op/100;
    obj.style.opacity     =op/100;

    //回傳
    return true;

    //子函式
    function trim(val){
        val=val.toString();
        val=val.replace(/^\s+/,"");
        val=val.replace(/\s+$/,"");
        return val;
    }
}
