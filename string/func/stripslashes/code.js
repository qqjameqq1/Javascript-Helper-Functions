
function stripslashes(Str){
//-------------------------------------------------------
//函式: stripslashes()
//用途: stripslashes
//-------------------------------------------------------
	return (Str+'').replace(/\0/g,'0').replace(/\\([\\'"])/g,'$1');
}
