
function strpos (haystack, needle, offset) {
//-------------------------------------------------------
//函式: strpos()
//用途: 以第一次出現為基準,取得字串出現的位置,分大小寫
//-------------------------------------------------------
    // Finds position of first occurrence of a string within another  
    // 
    // version: 1009.2513
    // discuss at: http://phpjs.org/functions/strpos
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Onno Marsman    
    // +   bugfixed by: Daniel Esteban
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: strpos('Kevin van Zonneveld', 'e', 5);
    // *     returns 1: 14
    var i = (haystack+'').indexOf(needle, (offset || 0));
    return i === -1 ? false : i;
}