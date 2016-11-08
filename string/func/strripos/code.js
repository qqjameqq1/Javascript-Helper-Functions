
function strripos (haystack, needle, offset) {
//-------------------------------------------------------
//函式: strripos()
//用途: 以最後一次出現為基準,取得字串出現的位置,不分大小寫
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Onno Marsman
    // +   input by: saulius
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: strripos('Kevin van Zonneveld', 'E');
    // *     returns 1: 16

    haystack = (haystack+'').toLowerCase();
    needle = (needle+'').toLowerCase();
    
    var i = -1;
    if (offset) {
        i = (haystack+'').slice(offset).lastIndexOf(needle); // strrpos' offset indicates starting point of range till end,
        // while lastIndexOf's optional 2nd argument indicates ending point of range from the beginning
        if (i !== -1) {
            i += offset;
        }
    }
    else {
        i = (haystack+'').lastIndexOf(needle);
    }
    return i >= 0 ? i : false;
}
