
function array_filter (arr, func) {
//-------------------------------------------------------
//函式: array_filter()
//用途: 過濾陣列,根據自訂函式傳回符合的元素
//-------------------------------------------------------
    // Filters elements from the array via the callback.
    //
    // version: 1009.2513
    // discuss at: http://phpjs.org/functions/array_filter
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Takes a function as an argument, not a function's name
    // *     example 1: var odd = function (num) {return (num & 1);};
    // *     example 1: array_filter({"a": 1, "b": 2, "c": 3, "d": 4, "e": 5}, odd);
    // *     returns 1: {"a": 1, "c": 3, "e": 5}
    // *     example 2: var even = function (num) {return (!(num & 1));}
    // *     example 2: array_filter([6, 7, 8, 9, 10, 11, 12], even);
    // *     returns 2: {0: 6, 2: 8, 4: 10, 6: 12}

    var retObj = {}, k;

    for (k in arr) {
        if (func(arr[k])) {
            retObj[k] = arr[k];
        }
    }

    return retObj;
}
