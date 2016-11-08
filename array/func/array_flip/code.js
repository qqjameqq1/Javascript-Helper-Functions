
function array_flip (trans) {
//-------------------------------------------------------
//函式: array_flip()
//用途: 元素反轉
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: array_flip( {a: 1, b: 1, c: 2} );
    // *     returns 1: {1: 'b', 2: 'c'}

    var key, tmp_ar = {};

    for (key in trans) {
        tmp_ar[trans[key]] = key;
    }

    return tmp_ar;
}
