
function array_fill (start_index, num, mixed_val) {
//-------------------------------------------------------
//函式: array_fill()
//用途: 陣列填值
//-------------------------------------------------------
    // Create an array containing num elements starting with index start_key each initialized to val
    //
    // version: 1009.2513
    // discuss at: http://phpjs.org/functions/array_fill
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Waldo Malqui Silva
    // *     example 1: array_fill(5, 6, 'banana');
    // *     returns 1: { 5: 'banana', 6: 'banana', 7: 'banana', 8: 'banana', 9: 'banana', 10: 'banana' }
    var key, tmp_arr = {};

    if ( !isNaN( start_index ) && !isNaN( num ) ) {
        for (key = 0; key < num; key++) {
            tmp_arr[(key+start_index)] = mixed_val;
        }
    }

    return tmp_arr;
}
