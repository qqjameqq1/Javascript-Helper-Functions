
function ch_twsid(val){
//-------------------------------------------------------
//函式: ch_twsid()
//用途: 檢核台灣地區身分證字號
//-------------------------------------------------------
//val   值
//-------------------------------------------------------

    var ra="ABCDEFGHJKLMNPQRSTUVXYWZIO";
    var A1=new Array(1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3 );
    var A2=new Array(0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5 );
    var Mx=new Array(9,8,7,6,5,4,3,2,1,1);

    if((!val)||(trim(val)=='')){
        return false;
    }

    val=trim(val);
    val=val.toUpperCase();

    if(val.length!=10){
        return false;
    }else{
        var pos=ra.indexOf(val.charAt(0));
        if(pos==-1){
            return false;
        }
    }


    var sum=A1[pos]+A2[pos]*9;

    for(var i=1;i<10;i++){
        var v=parseInt(val.charAt(i));
        if (isNaN(v)){
            return false;
        }

        sum=sum+v*Mx[i];
    }

    if((sum%10)!=0){
        return false;
    }else{
        return true;
    }

    function trim(str){
    //去除字串前後空白
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}
