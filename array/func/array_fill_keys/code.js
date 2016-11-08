
function array_fill_keys (sRa, value) {
//-------------------------------------------------------
//函式: array_fill_keys()
//用途: 陣列填值,以關連陣列裡的key為鍵值
//-------------------------------------------------------
    var retObj = {}, key = '';

    for (key in sRa) {
        retObj[key] = value;
    }

    return retObj;
}
