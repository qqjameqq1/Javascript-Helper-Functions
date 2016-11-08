
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
