
function array_fill_values (sRa, value) {
//-------------------------------------------------------
//函式: array_fill_values()
//用途: 陣列填值,以關連陣列裡的val為鍵值
//-------------------------------------------------------
    var retObj = {}, key = '';

    for (key in sRa) {
        retObj[sRa[key]] = value;
    }

    return retObj;
}