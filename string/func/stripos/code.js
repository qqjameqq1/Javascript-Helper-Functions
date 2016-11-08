
function stripos ( f_haystack, f_needle, f_offset ){
//-------------------------------------------------------
//函式: stripos()
//用途: 以第一次出現為基準,取得字串出現的位置,不分大小寫
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +     original by: Martijn Wieringa
    // +      revised by: Onno Marsman
    // *         example 1: stripos('ABC', 'a');
    // *         returns 1: 0

    var haystack = (f_haystack+'').toLowerCase();
    var needle = (f_needle+'').toLowerCase();
    var index = 0;
 
    if ((index = haystack.indexOf(needle, f_offset)) !== -1) {
        return index;
    }
    return false;
}
