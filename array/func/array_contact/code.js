
function array_contact(array1,array2,pos_type){
//-------------------------------------------------------
//陣列合併
//-------------------------------------------------------
//array1    陣列1
//array2    陣列2
//pos_type  插入位置類型 r:右邊,l:左邊,b:兩邊 預設:r
//-------------------------------------------------------

    if(!array1){
        return false;
    }
    if(!array2){
        return false;
    }
    if((pos_type==undefined)||(pos_type=='')){
        pos_type='r';
    }

    var tmp=[];
    switch(pos_type.toLowerCase()){
        case "r":
            //末尾
            array=array1.concat(array2);
            return array;
            break;
        case "l":
            //前頭
            array=array2.concat(array1);
            return array;
            break;
        case "b":
            //前後
            array=array1.concat(array2);
            array=array2.concat(array);
            return array;
            break;
        default:
            //預設,末尾
            array=array1.concat(array2);
            return array;
            break;
    }
}
