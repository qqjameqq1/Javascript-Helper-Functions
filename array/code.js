//-------------------------------------------------------
//array
//-------------------------------------------------------
//array2str()               陣列轉字串
//array_change_key_case()   變更鍵大小寫
//array_chunk()             將陣列元素,依指定的各數,予以分組
//array_clone()             陣列複製
//array_combine()           建立關連陣列
//array_contact()           陣列合併
//array_count_values()      計算元素出現次數
//array_decodeURI()         陣列元素值 decodeURI
//array_diff()              元素值比對,一對多比較
//array_diff_assoc()        完全比對(值與鍵),一對一依序比較
//array_diff_key()          元素鍵比對,一對多比較
//array_encodeURI()         陣列元素值 encodeURI
//array_escape()            陣列元素值 escape
//array_even()              過濾陣列,傳回的是偶數的元素
//array_fill()              陣列填值
//array_fill_keys()         陣列填值,以關連陣列裡的key為鍵值
//array_fill_values()       陣列填值,以關連陣列裡的val為鍵值
//array_filter()            過濾陣列,根據自訂函式傳回符合的元素
//array_flip()              元素反轉
//array_intersect()         元素值比對,一對多比較
//array_intersect_assoc()   完全比對(值與鍵),一對一依序比較
//array_isEmpty()           檢核空陣列
//array_key_exists()        檢查鍵是否存在
//array_keys()              取回陣列鍵,同PHP函式
//array_left()              從前頭取n個元素
//array_map()               套用函式在每一個元素
//array_max()               找出陣列最大值
//array_merge()             陣列合併,同鍵會取代
//array_mid()               取出指定位置個數
//array_min()               找出陣列最小值
//array_odd()               過濾陣列,傳回的是奇數的元素
//array_pad()               陣列填值,指定長度,填入val,長度為負值時,往前插
//array_pop()               取回陣列末尾元素
//array_product()           陣列連乘積
//array_push()              插入元素至陣列末尾
//array_rand()              隨機取出元素鍵值
//array_reduce()            兩兩傳入函數套用,僅適用數字
//array_replace()           取代元素,如鍵名相同則取代
//array_right()             從末尾取n個元素
//array_rndsort()           陣列亂數排序
//array_search()            搜尋元素,並傳回鍵
//array_shift()             取回陣列前頭元素
//array_sum()               陣列元素加總,同PHP用法
//array_unescape()          陣列元素值 unescape
//array_unique()            移除重複元素
//array_unshift()           插入元素至陣列前頭
//array_values()            取回陣列值,同PHP函式,但允許搜尋特定值
//array_walk()              使用自訂函式,套用到每一個陣列元素,同PHP用法
//in_array()                檢驗元素是否在陣列裡,同PHP用法
//is_array()                判斷是不是陣列
//range()                   建立範圍陣列
//shuffle()                 打亂陣列
//str2array()               字串轉陣列
//array_range()             值域數值陣列

function array2str(array,dchr,flag){
//-------------------------------------------------------
//陣列轉字串
//-------------------------------------------------------
//array     陣列
//dchr      串接字元,預設 ','
//flag      允許空元素,預設 true
//-------------------------------------------------------

    if((array==undefined)||(array=='')){
        return false;
    }
    if((dchr==undefined)||(dchr=='')){
        dchr=',';
    }
    if(flag==undefined){
        flag=true;
    }

    if(flag==true){
        return array.join(dchr);
    }else{

        var tmp=[];
        for(key in array){
            //排除空的
            if((trim(array[key])!="")){
                tmp.push(array[key]);
            }
        }
        return tmp.join(dchr);
    }

    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function array_change_key_case (array) {
//-------------------------------------------------------
//函式: array_change_key_case()
//用途: 變更鍵大小寫
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Ates Goral (http://magnetiq.com)
    // +   improved by: marrtins
    // *     example 1: array_change_key_case(42);
    // *     returns 1: false
    // *     example 2: array_change_key_case([ 3, 5 ]);
    // *     returns 2: {0: 3, 1: 5}
    // *     example 3: array_change_key_case({ FuBaR: 42 });
    // *     returns 3: {"fubar": 42}
    // *     example 4: array_change_key_case({ FuBaR: 42 }, 'CASE_LOWER');
    // *     returns 4: {"fubar": 42}
    // *     example 5: array_change_key_case({ FuBaR: 42 }, 'CASE_UPPER');
    // *     returns 5: {"FUBAR": 42}
    // *     example 6: array_change_key_case({ FuBaR: 42 }, 2);
    // *     returns 6: {"FUBAR": 42}

    var case_fn, tmp_ar = {}, argc = arguments.length, argv = arguments, key;

    if (array instanceof Array) {
        return array;
    }

    if (array instanceof Object) {
        if (argc === 1 || argv[1] === 'CASE_LOWER' || argv[1] === 0){
            case_fn = "toLowerCase";
        } else{
            case_fn = "toUpperCase";
        }
        for (key in array) {
            tmp_ar[key[case_fn]()] = array[key];
        }
        return tmp_ar;
    }

    return false;
}

function array_chunk(input,size){
//-------------------------------------------------------
//函式: array_chunk()
//用途: 將陣列元素,依指定的各數,予以分組
//-------------------------------------------------------
	for(var x, i = 0, c = -1, l = input.length, n = []; i < l; i++){
		(x = i % size) ? n[c][x] = input[i] : n[++c] = [input[i]];
	}
	return n;
}

function array_clone(array){
//-------------------------------------------------------
//陣列複製
//-------------------------------------------------------
    return (array.toString()).split(",");
}

function array_combine (keys, values) {
//-------------------------------------------------------
//函式: array_combine()
//用途: 建立關連陣列
//-------------------------------------------------------
    // Creates an array by using the elements of the first parameter as keys and the elements of the second as the corresponding values
    //
    // version: 1009.2513
    // discuss at: http://phpjs.org/functions/array_combine
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: array_combine([0,1,2], ['kevin','van','zonneveld']);
    // *     returns 1: {0: 'kevin', 1: 'van', 2: 'zonneveld'}

    var new_array = {}, keycount = keys && keys.length, i = 0;

    // input sanitation
    if (typeof keys !== 'object' || typeof values !== 'object' || // Only accept arrays or array-like objects
        typeof keycount !== 'number' || typeof values.length !== 'number' ||
        !keycount){ // Require arrays to have a count
        return false;
    }

    // number of elements does not match
    if (keycount != values.length){
        return false;
    }

    for ( i=0; i < keycount; i++ ){
        new_array[keys[i]] = values[i];
    }

    return new_array;
}

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

function array_count_values (array) {
//-------------------------------------------------------
//函式: array_count_values()
//用途: 計算元素出現次數
//-------------------------------------------------------
    // Return the value as key and the frequency of that value in input as value
    //
    // version: 1008.1718
    // discuss at: http://phpjs.org/functions/array_count_values
    // +   original by: Ates Goral (http://magnetiq.com)
    // + namespaced by: Michael White (http://getsprink.com)
    // +      input by: sankai
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   input by: Shingo
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: array_count_values([ 3, 5, 3, "foo", "bar", "foo" ]);
    // *     returns 1: {3:2, 5:1, "foo":2, "bar":1}
    // *     example 2: array_count_values({ p1: 3, p2: 5, p3: 3, p4: "foo", p5: "bar", p6: "foo" });
    // *     returns 2: {3:2, 5:1, "foo":2, "bar":1}
    // *     example 3: array_count_values([ true, 4.2, 42, "fubar" ]);
    // *     returns 3: {42:1, "fubar":1}
    var tmp_arr = {}, key = '', t = '';

    var __getType = function (obj) {
        // Objects are php associative arrays.
        var t = typeof obj;
        t = t.toLowerCase();
        if (t === "object") {
            t = "array";
        }
        return t;
    };

    var __countValue = function (value) {
        switch (typeof(value)) {
            case "number":
                if (Math.floor(value) !== value) {
                    return;
                }
                // Fall-through
            case "string":
                if (value in this && this.hasOwnProperty(value)) {
                    ++this[value];
                } else {
                    this[value] = 1;
                }
        }
    };

    t = __getType(array);
    if (t === 'array') {
        for (key in array) {
            if (array.hasOwnProperty(key)) {
                __countValue.call(tmp_arr, array[key]);
            }
        }
    }
    return tmp_arr;
}

function array_decodeURI(arry){
//-------------------------------------------------------
//陣列元素值 decodeURI
//-------------------------------------------------------

    if((arry==undefined)||(arry=='')){
        return false;
    }

    for(var key in arry){
        var val=trim(arry[key]);
        arry[key]=decodeURI(val);
    }

    return arry;

    function trim(str){
    //去除字串前後空白

        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function array_diff () {
//-------------------------------------------------------
//函式: array_diff()
//用途: 元素值比對,一對多比較
//-------------------------------------------------------
    // Returns the entries of arr1 that have values which are not present in any of the others arguments.
    //
    // version: 1009.2513
    // discuss at: http://phpjs.org/functions/array_diff
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Sanjoy Roy
    // +    revised by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: array_diff(['Kevin', 'van', 'Zonneveld'], ['van', 'Zonneveld']);
    // *     returns 1: {0:'Kevin'}
    var arr1 = arguments[0], retArr = {};
    var k1 = '', i = 1, k = '', arr = {};

    arr1keys:
    for (k1 in arr1) {
        for (i = 1; i < arguments.length; i++) {
            arr = arguments[i];
            for (k in arr) {
                if (arr[k] === arr1[k1]) {
                    // If it reaches here, it was found in at least one array, so try next value
                    continue arr1keys;
                }
            }
            retArr[k1] = arr1[k1];
        }
    }

    return retArr;
}

function array_diff_assoc () {
//-------------------------------------------------------
//函式: array_diff_assoc()
//用途: 完全比對(值與鍵),一對一依序比較
//-------------------------------------------------------
    // Returns the entries of arr1 that have values which are not present in any of the others arguments but do additional checks whether the keys are equal
    //
    // version: 1009.2513
    // discuss at: http://phpjs.org/functions/array_diff_assoc
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: 0m3r
    // +    revised by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: array_diff_assoc({0: 'Kevin', 1: 'van', 2: 'Zonneveld'}, {0: 'Kevin', 4: 'van', 5: 'Zonneveld'});
    // *     returns 1: {1: 'van', 2: 'Zonneveld'}
    var arr1 = arguments[0], retArr = {};
    var k1 = '', i = 1, k = '', arr = {};

    arr1keys:
    for (k1 in arr1) {
        for (i = 1; i < arguments.length; i++) {
            arr = arguments[i];
            for (k in arr) {
                if (arr[k] === arr1[k1] && k === k1) {
                    // If it reaches here, it was found in at least one array, so try next value
                    continue arr1keys;
                }
            }
            retArr[k1] = arr1[k1];
        }
    }

    return retArr;
}

function array_diff_key () {
//-------------------------------------------------------
//函式: array_diff_key()
//用途: 元素鍵比對,一對多比較
//-------------------------------------------------------
    // Returns the entries of arr1 that have keys which are not present in any of the others arguments. This function is like array_diff() but works on the keys instead of the values. The associativity is preserved.
    //
    // version: 1009.2513
    // discuss at: http://phpjs.org/functions/array_diff_key
    // +   original by: Ates Goral (http://magnetiq.com)
    // +    revised by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: array_diff_key({red: 1, green: 2, blue: 3, white: 4}, {red: 5});
    // *     returns 1: {"green":2, "blue":3, "white":4}
    // *     example 2: array_diff_key({red: 1, green: 2, blue: 3, white: 4}, {red: 5}, {red: 5});
    // *     returns 2: {"green":2, "blue":3, "white":4}
    var arr1 = arguments[0], retArr = {};
    var k1 = '', i = 1, k = '', arr = {};

    arr1keys:
    for (k1 in arr1) {
        for (i = 1; i < arguments.length; i++) {
            arr = arguments[i];
            for (k in arr) {
                if (k === k1) {
                    // If it reaches here, it was found in at least one array, so try next value
                    continue arr1keys;
                }
            }
            retArr[k1] = arr1[k1];
        }
    }

    return retArr;
}

function array_encodeURI(arry){
//-------------------------------------------------------
//陣列元素值 encodeURI
//-------------------------------------------------------
    if((arry==undefined)||(arry=='')){
        return false;
    }

    for(var key in arry){
        var val=trim(arry[key]);
        arry[key]=encodeURI(val);
    }

    return arry;

    function trim(str){
    //去除字串前後空白

        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function array_escape(arry){
//-------------------------------------------------------
//陣列元素值 escape
//-------------------------------------------------------
//escape('值1')='%u503C1'
//escape('值2')='%u503C2'
//escape('值3')='%u503C3'
//-------------------------------------------------------

    if((arry==undefined)||(arry=='')){
        return false;
    }

    for(var key in arry){
        var val=trim(arry[key]);
        arry[key]=escape(val);
    }

    return arry;

    function trim(str){
    //去除字串前後空白

        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function array_even(arry){
//-------------------------------------------------------
//過濾陣列,傳回的是偶數的元素
//-------------------------------------------------------

    var tarry=[];
    for(var i=0;i<arry.length;i++){
        if(!isNaN(arry[i])){
            if(!(arry[i] & 1)){
                tarry.push(arry[i]);
            }
        }
    }

    return tarry;
}

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

function array_intersect () {
//-------------------------------------------------------
//函式: array_intersect()
//用途: 元素值比對,一對多比較
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: These only output associative arrays (would need to be
    // %        note 1: all numeric and counting from zero to be numeric)
    // *     example 1: $array1 = {'a' : 'green', 0:'red', 1: 'blue'};
    // *     example 1: $array2 = {'b' : 'green', 0:'yellow', 1:'red'};
    // *     example 1: $array3 = ['green', 'red'];
    // *     example 1: $result = array_intersect($array1, $array2, $array3);
    // *     returns 1: {0: 'red', a: 'green'}

    var arr1 = arguments[0], retArr = {};
    var k1 = '', arr = {}, i = 0, k = '';

    arr1keys:
    for (k1 in arr1) {
        arrs:
        for (i=1; i < arguments.length; i++) {
            arr = arguments[i];
            for (k in arr) {
                if (arr[k] === arr1[k1]) {
                    if (i === arguments.length-1) {
                        retArr[k1] = arr1[k1];
                    }
                    // If the innermost loop always leads at least once to an equal value, continue the loop until done
                    continue arrs;
                }
            }
            // If it reaches here, it wasn't found in at least one array, so try next value
            continue arr1keys;
        }
    }

    return retArr;
}

function array_intersect_assoc () {
//-------------------------------------------------------
//函式: array_intersect_assoc()
//用途: 完全比對(值與鍵),一對一依序比較
//-------------------------------------------------------
    // Returns the entries of arr1 that have values which are present in all the other arguments. Keys are used to do more restrictive check
    //
    // version: 1009.2513
    // discuss at: http://phpjs.org/functions/array_intersect_assoc    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: These only output associative arrays (would need to be
    // %        note 1: all numeric and counting from zero to be numeric)
    // *     example 1: $array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
    // *     example 1: $array2 = {a: 'green', 0: 'yellow', 1: 'red'}    // *     example 1: array_intersect_assoc($array1, $array2)
    // *     returns 1: {a: 'green'}
    var arr1 = arguments[0], retArr = {};
    var k1 = '', arr = {}, i = 0, k = '';
     arr1keys:
    for (k1 in arr1) {
        arrs:
        for (i=1; i < arguments.length; i++) {
            arr = arguments[i];            for (k in arr) {
                if (arr[k] === arr1[k1] && k === k1) {
                    if (i === arguments.length-1) {
                        retArr[k1] = arr1[k1];
                    }                    // If the innermost loop always leads at least once to an equal value, continue the loop until done
                    continue arrs;
                }
            }
            // If it reaches here, it wasn't found in at least one array, so try next value            continue arr1keys;
        }
    }

    return retArr;
}

function array_isEmpty(Ra){
//-------------------------------------------------------
//函式: array_isEmpty()
//用途: 檢核空陣列
//-------------------------------------------------------
    if(Ra.length==0){
        //無元素
        return true;
    }else{
        //有一個元素,但值為""
        if((Ra.length==1)&&(Ra[0]=="")){
            return true;
        }else{
            return false;
        }
    }
}

function array_keys(arry,sval,strict){
//-------------------------------------------------------
//取回陣列鍵,同PHP函式
//-------------------------------------------------------
//arry    陣列
//sval    搜尋值,預設 無
//strict  強制型態比對,預設 false
//-------------------------------------------------------

    //參數檢驗
    if(!arry){
        return [];
    }
    if(!strict){
        strict=false;
    }

    //處理
    var tmp=[];
    for(var key in arry){
        var val=arry[key];

        //是否要搜尋值
        if(sval==undefined){
           tmp.push(key);
        }else{
            //是否強行型態比對
            if(strict==true){
                if(val===sval){
                    tmp.push(key);
                }
            }else{
                if(val==sval){
                    tmp.push(key);
                }
            }
        }
    }

    //回傳
    return tmp;
}

function array_key_exists ( key, search ) {
//-------------------------------------------------------
//函式: array_key_exists()
//用途: 檢查鍵是否存在
//-------------------------------------------------------
    // Checks if the given key or index exists in the array
    //
    // version: 1009.2513
    // discuss at: http://phpjs.org/functions/array_key_exists    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Felix Geisendoerfer (http://www.debuggable.com/felix)
    // *     example 1: array_key_exists('kevin', {'kevin': 'van Zonneveld'});
    // *     returns 1: true
    // input sanitation
    if (!search || (search.constructor !== Array && search.constructor !== Object)){
        return false;
    }

    return key in search;
}

function array_left(array,len,flag){
//-------------------------------------------------------
//從前頭取n個元素
//-------------------------------------------------------
//array 陣列
//len   長度
//flag  是否保留,預設 true
//-------------------------------------------------------

    //參數檢驗
    if(!array){
        return false;
    }
    if((len==undefined)||(isNaN(len))){
        return false;
    }
    if((flag==undefined)||(flag==='')){
        flag=true;
    }

    //處理
    var tmp=[];
    if(flag){
    //---------------------------------------------------
    //保留
    //---------------------------------------------------
        if(len>array.length){
            len=array.length;
        }

        for(var i=0;i<len;i++){
            tmp.push(array[i]);
        }
        return tmp;
    }else{
    //---------------------------------------------------
    //不保留
    //---------------------------------------------------
        for(var i=1;i<=len;i++){
            if(array.length!=0){
                var El=array.shift();
                tmp.push(El);
            }else{
                break;
            }
        }
        return tmp;
    }
}

function array_map (callback) {
//-------------------------------------------------------
//函式: array_map()
//用途: 套用函式在每一個元素
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Andrea Giammarchi (http://webreflection.blogspot.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Takes a function as an argument, not a function's name
    // %        note 2: If the callback is a string, it can only work if the function name is in the global context
    // *     example 1: array_map( function (a){return (a * a * a)}, [1, 2, 3, 4, 5] );
    // *     returns 1: [ 1, 8, 27, 64, 125 ]

    var argc = arguments.length, argv = arguments;
    var j = argv[1].length, i = 0, k = 1, m = 0;
    var tmp = [], tmp_ar = [];

    while (i < j) {
        while (k < argc){
            tmp[m++] = argv[k++][i];
        }

        m = 0;
        k = 1;

        if (callback){
            if (typeof callback === 'string') {
                callback = this.window[callback];
            }
            tmp_ar[i++] = callback.apply(null, tmp);
        } else {
            tmp_ar[i++] = tmp;
        }

        tmp = [];
    }

    return tmp_ar;
}

function array_max(array){
//-------------------------------------------------------
//找出陣列最大值
//-------------------------------------------------------
    var tmp=[];
    for(var key in array){
        var val=array[key];
        tmp.push(val);
    }

    return Math.max.apply({},tmp);
}

function array_merge () {
//-------------------------------------------------------
//函式: array_merge()
//用途: 陣列合併,同鍵會取代
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Nate
    // +   input by: josh
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: arr1 = {"color": "red", 0: 2, 1: 4}
    // *     example 1: arr2 = {0: "a", 1: "b", "color": "green", "shape": "trapezoid", 2: 4}
    // *     example 1: array_merge(arr1, arr2)
    // *     returns 1: {"color": "green", 0: 2, 1: 4, 2: "a", 3: "b", "shape": "trapezoid", 4: 4}
    // *     example 2: arr1 = []
    // *     example 2: arr2 = {1: "data"}
    // *     example 2: array_merge(arr1, arr2)
    // *     returns 2: {0: "data"}

    var args = Array.prototype.slice.call(arguments),
                            retObj = {}, k, j = 0, i = 0, retArr = true;

    for (i=0; i < args.length; i++) {
        if (!(args[i] instanceof Array)) {
            retArr=false;
            break;
        }
    }

    if (retArr) {
        retArr = [];
        for (i=0; i < args.length; i++) {
            retArr = retArr.concat(args[i]);
        }
        return retArr;
    }
    var ct = 0;

    for (i=0, ct=0; i < args.length; i++) {
        if (args[i] instanceof Array) {
            for (j=0; j < args[i].length; j++) {
                retObj[ct++] = args[i][j];
            }
        } else {
            for (k in args[i]) {
                if (args[i].hasOwnProperty(k)) {
                    if (parseInt(k, 10)+'' === k) {
                        retObj[ct++] = args[i][k];
                    } else {
                        retObj[k] = args[i][k];
                    }
                }
            }
        }
    }
    return retObj;
}

function array_mid(array,inx,len,flag){
//-------------------------------------------------------
//取出指定位置個數
//-------------------------------------------------------
//array 陣列
//inx   位置,基底0
//len   個數
//flag  保留,預設 true
//-------------------------------------------------------
    if((flag==undefined)||(flag==='')){
        flag=true;
    }

    if(flag){
        array=((array.toString()).split(","));
    }

    return array.splice(inx,len);
}

function array_min(array){
//-------------------------------------------------------
//找出陣列最小值
//-------------------------------------------------------
    var tmp=[];
    for(var key in array){
        var val=array[key];
        tmp.push(val);
    }

    return Math.min.apply({},tmp);
}

function array_odd(array){
//-------------------------------------------------------
//過濾陣列,傳回的是奇數的元素
//-------------------------------------------------------
    var tarry=[];
    for(var i=0;i<arry.length;i++){
        if(!isNaN(arry[i])){
            if(arry[i] & 1){
                tarry.push(arry[i]);
            }
        }
    }

    return tarry;
}

function array_pad ( input, pad_size, pad_value ) {
//-------------------------------------------------------
//函式: array_pad()
//用途: 陣列填值,指定長度,填入val,長度為負值時,往前插
//-------------------------------------------------------
    // Returns a copy of input array padded with pad_value to size pad_size
    //
    // version: 1009.2513
    // discuss at: http://phpjs.org/functions/array_pad    // +   original by: Waldo Malqui Silva
    // *     example 1: array_pad([ 7, 8, 9 ], 2, 'a');
    // *     returns 1: [ 7, 8, 9]
    // *     example 2: array_pad([ 7, 8, 9 ], 5, 'a');
    // *     returns 2: [ 7, 8, 9, 'a', 'a']    // *     example 3: array_pad([ 7, 8, 9 ], 5, 2);
    // *     returns 3: [ 7, 8, 9, 2, 2]
    // *     example 4: array_pad([ 7, 8, 9 ], -5, 'a');
    // *     returns 4: [ 'a', 'a', 7, 8, 9 ]
    var pad = [], newArray = [], newLength, i=0;
    if ( input instanceof Array && !isNaN( pad_size ) ) {
        newLength = ( ( pad_size < 0 ) ? ( pad_size * -1 ) : pad_size );
        if ( newLength > input.length ) {
            for ( i = 0; i < ( newLength - input.length ); i++ ) { newArray [ i ] = pad_value; }            pad = ( ( pad_size < 0 ) ? newArray.concat( input ) : input.concat( newArray ) );
        } else {
            pad = input;
        }
    }
    return pad;
}

function array_pop (inputArr) {
//-------------------------------------------------------
//函式: array_pop()
//用途: 取回陣列末尾元素
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +   input by: Theriault
    // %        note 1: While IE (and other browsers) support iterating an object's
    // %        note 1: own properties in order, if one attempts to add back properties
    // %        note 1: in IE, they may end up in their former position due to their position
    // %        note 1: being retained. So use of this function with "associative arrays"
    // %        note 1: (objects) may lead to unexpected behavior in an IE environment if
    // %        note 1: you add back properties with the same keys that you removed
    // *     example 1: array_pop([0,1,2]);
    // *     returns 1: 2
    // *     example 2: data = {firstName: 'Kevin', surName: 'van Zonneveld'};
    // *     example 2: lastElem = array_pop(data);
    // *     returns 2: 'van Zonneveld'
    // *     results 2: data == {firstName: 'Kevin'}

    var key = '', lastKey = '';

    if (inputArr.hasOwnProperty('length')) {
        // Indexed
        if (!inputArr.length){
            // Done popping, are we?
            return null;
        }
        return inputArr.pop();
    } else {
        // Associative
        for (key in inputArr) {
            if (inputArr.hasOwnProperty(key)) {
                lastKey = key;
            }
        }
        if (lastKey) {
            var tmp = inputArr[lastKey];
            delete(inputArr[lastKey]);
            return tmp;
        } else {
            return null;
        }
    }
}

function array_product ( input ) {
//-------------------------------------------------------
//函式: array_product()
//用途: 陣列連乘積
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Waldo Malqui Silva
    // *     example 1: array_product([ 2, 4, 6, 8 ]);
    // *     returns 1: 384

    var Index = 0, product = 1;
    if ( input instanceof Array ) {
        while ( Index < input.length ) {
            product *= ( !isNaN( input [ Index ] ) ? input [ Index ] : 0 );
            Index++;
        }
    } else {
        product = null;
    }

    return product;
}

function array_push ( inputArr ) {
//-------------------------------------------------------
//函式: array_push()
//用途: 插入元素至陣列末尾
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Note also that IE retains information about property position even
    // %        note 1: after being supposedly deleted, so if you delete properties and then
    // %        note 1: add back properties with the same keys (including numeric) that had
    // %        note 1: been deleted, the order will be as before; thus, this function is not
    // %        note 1: really recommended with associative arrays (objects) in IE environments
    // *     example 1: array_push(['kevin','van'], 'zonneveld');
    // *     returns 1: 3

    var i=0, pr = '', argv = arguments, argc = argv.length,
            allDigits = /^\d$/, size = 0, highestIdx = 0, len = 0;
    if (inputArr.hasOwnProperty('length')) {
        for (i=1; i < argc; i++){
            inputArr[inputArr.length] = argv[i];
        }
        return inputArr.length;
    }

    // Associative (object)
    for (pr in inputArr) {
        if (inputArr.hasOwnProperty(pr)) {
            ++len;
            if (pr.search(allDigits) !== -1) {
                size = parseInt(pr, 10);
                highestIdx = size > highestIdx ? size : highestIdx;
            }
        }
    }
    for (i=1; i < argc; i++){
        inputArr[++highestIdx] = argv[i];
    }
    return len + i - 1;
}

function array_rand ( input, num_req ) {
//-------------------------------------------------------
//函式: array_rand()
//用途: 隨機取出元素鍵值
//-------------------------------------------------------
    // Return key/keys for random entry/entries in the array
    //
    // version: 1009.2513
    // discuss at: http://phpjs.org/functions/array_rand    // +   original by: Waldo Malqui Silva
    // *     example 1: array_rand( ['Kevin'], 1 );
    // *     returns 1: 0
    var indexes = [];
    var ticks = num_req || 1;    var checkDuplicate = function ( input, value ) {
        var exist = false, index = 0;
        while ( index < input.length ) {
            if ( input [ index ] === value ) {
                exist = true;                break;
            }
            index++;
        }
        return exist;    };

    if ( input instanceof Array && ticks <= input.length ) {
        while ( true ) {
            var rand = Math.floor( ( Math.random( ) * input.length ) );            if ( indexes.length === ticks ) { break; }
            if ( !checkDuplicate( indexes, rand ) ) { indexes.push( rand ); }
        }
    } else {
        indexes = null;    }

    return ( ( ticks == 1 ) ? indexes.join( ) : indexes );
}

function array_reduce (a_input, callback) {
//-------------------------------------------------------
//函式: array_reduce()
//用途: 兩兩傳入函數套用,僅適用數字
//-------------------------------------------------------
    // Iteratively reduce the array to a single value via the callback.
    //
    // version: 1009.2513
    // discuss at: http://phpjs.org/functions/array_reduce    // +   original by: Alfonso Jimenez (http://www.alfonsojimenez.com)
    // %        note 1: Takes a function as an argument, not a function's name
    // *     example 1: array_reduce([1, 2, 3, 4, 5], function (v, w){v += w;return v;});
    // *     returns 1: 15
        var lon = a_input.length;
    var res = 0, i = 0;
    var tmp = [];

        for (i = 0; i < lon; i+=2) {
        tmp[0] = a_input[i];
        if (a_input[(i+1)]) {
            tmp[1] = a_input[(i+1)];
        } else {            tmp[1] = 0;
        }
        res+= callback.apply(null, tmp);
        tmp = [];
    }
    return res;
}

function array_replace (arr) {
//-------------------------------------------------------
//函式: array_replace()
//用途: 取代元素,如鍵名相同則取代
//-------------------------------------------------------
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: array_replace(["orange", "banana", "apple", "raspberry"], {0 : "pineapple", 4 : "cherry"}, {0:"grape"});
    // *     returns 1: {0: 'grape', 1: 'banana', 2: 'apple', 3: 'raspberry', 4: 'cherry'}

    if (arguments.length < 2) {
        throw new Error('There should be at least 2 arguments passed to array_replace()');
    }

    // Although docs state that the arguments are passed in by reference, it seems they are not altered, but rather the copy that is returned (just guessing), so we make a copy here, instead of acting on arr itself
    var retObj = {};
    for (var prop in arr) {
        retObj[prop] = arr[prop];
    }

    for (var i = 1; i < arguments.length; i++) {
        for (var p in arguments[i]) {
            retObj[p] = arguments[i][p];
        }
    }
    return retObj;
}

function array_right(array,len,flag){
//-------------------------------------------------------
//從末尾取n個元素
//-------------------------------------------------------
//array     陣列
//len       個數
//flag      是否保留,預設 true
//-------------------------------------------------------

    //參數檢驗
    if(!array){
        return false;
    }
    if((len==undefined)||(isNaN(len))){
        return false;
    }
    if((flag==undefined)||(flag==='')){
        flag=true;
    }

    //處理
    var tmp=[];

    if(flag){
    //保留
        if(len>array.length){
            len=array.length;
        }

        //複製,與反轉
        var tmp1=(array.join()).split(',');
        tmp1=tmp1.reverse();

        //從末尾依序取出
        for(var i=len-1;i>=0;i--){
            tmp.push(tmp1[i]);
        }
        return tmp;
    }else{
    //不保留
        for(var i=1;i<=len;i++){
            if(array.length!=0){
                var El=array.pop();
                tmp.push(El);
            }else{
                break;
            }
        }

        return tmp.reverse();
    }
}

function array_rndsort(Ra){
//-------------------------------------------------------
//陣列亂數排序
//-------------------------------------------------------
    return Ra.sort(function(){
            return (Math.random()>0.5)?-1:1;
        }
    );
}

function array_search (needle, haystack, argStrict) {
//-------------------------------------------------------
//函式: array_search()
//用途: 搜尋元素,並傳回鍵
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: array_search('zonneveld', {firstname: 'kevin', middle: 'van', surname: 'zonneveld'});
    // *     returns 1: 'surname'

    var strict = !!argStrict;
    var key = '';

    for (key in haystack) {
        if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
            return key;
        }
    }

    return false;
}

function array_shift (inputArr) {
//-------------------------------------------------------
//函式: array_shift()
//用途: 取回陣列前頭元素
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Martijn Wieringa
    // %        note 1: Currently does not handle objects
    // *     example 1: array_shift(['Kevin', 'van', 'Zonneveld']);
    // *     returns 1: 'Kevin'

    var props = false,
        shift = undefined, pr = '', allDigits = /^\d$/, int_ct=-1,
        _checkToUpIndices = function (arr, ct, key) {
            // Deal with situation, e.g., if encounter index 4 and try to set it to 0, but 0 exists later in loop (need to
            // increment all subsequent (skipping current key, since we need its value below) until find unused)
            if (arr[ct] !== undefined) {
                var tmp = ct;
                ct += 1;
                if (ct === key) {
                    ct += 1;
                }
                ct = _checkToUpIndices(arr, ct, key);
                arr[ct] = arr[tmp];
                delete arr[tmp];
            }
            return ct;
        };


    if (inputArr.length === 0) {
        return null;
    }
    if (inputArr.length > 0) {
        return inputArr.shift();
    }

    /*
    UNFINISHED FOR HANDLING OBJECTS
    for (pr in inputArr) {
        if (inputArr.hasOwnProperty(pr)) {
            props = true;
            shift = inputArr[pr];
            delete inputArr[pr];
            break;
        }
    }
    for (pr in inputArr) {
        if (inputArr.hasOwnProperty(pr)) {
            if (pr.search(allDigits) !== -1) {
                int_ct += 1;
                if (parseInt(pr, 10) === int_ct) { // Key is already numbered ok, so don't need to change key for value
                    continue;
                }
                _checkToUpIndices(inputArr, int_ct, pr);
                arr[int_ct] = arr[pr];
                delete arr[pr];
            }
        }
    }
    if (!props) {
        return null;
    }
    return shift;
    */
}

function array_sum(array){
//-------------------------------------------------------
//陣列元素加總
//-------------------------------------------------------

    //變數檢驗
    if(!array){
        return false;
    }

    //計算
    var sum=0;
    for(var i=0;i<array.length;i++){
        if(!isNaN(array[i])){
            sum+=parseFloat(array[i]);
        }
    }

    //回傳
    return sum;
}

function array_unescape(arry){
//-------------------------------------------------------
//陣列元素值 unescape
//-------------------------------------------------------
//escape('值1')='%u503C1'
//escape('值2')='%u503C2'
//escape('值3')='%u503C3'
//-------------------------------------------------------

    if((arry==undefined)||(arry=='')){
        return false;
    }

    for(var key in arry){
        var val=trim(arry[key]);
        arry[key]=unescape(val);
    }

    return arry;

    function trim(str){
    //去除字串前後空白

        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function array_unique (inputArr) {
//-------------------------------------------------------
//函式: array_unique()
//用途: 移除重複元素
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Carlos R. L. Rodrigues (http://www.jsfromhell.com)
    // +      input by: duncan
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Nate
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Michael Grier
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: The second argument, sort_flags is not implemented;
    // %          note 1: also should be sorted (asort?) first according to docs
    // *     example 1: array_unique(['Kevin','Kevin','van','Zonneveld','Kevin']);
    // *     returns 1: {0: 'Kevin', 2: 'van', 3: 'Zonneveld'}
    // *     example 2: array_unique({'a': 'green', 0: 'red', 'b': 'green', 1: 'blue', 2: 'red'});
    // *     returns 2: {a: 'green', 0: 'red', 1: 'blue'}

    var key = '', tmp_arr2 = {}, val = '';

    var __array_search = function (needle, haystack) {
        var fkey = '';
        for (fkey in haystack) {
            if (haystack.hasOwnProperty(fkey)) {
                if ((haystack[fkey] + '') === (needle + '')) {
                    return fkey;
                }
            }
        }
        return false;
    };

    for (key in inputArr) {
        if (inputArr.hasOwnProperty(key)) {
            val = inputArr[key];
            if (false === __array_search(val, tmp_arr2)) {
                tmp_arr2[key] = val;
            }
        }
    }

    return tmp_arr2;
}

function array_unshift (array) {
//-------------------------------------------------------
//函式: array_unshift()
//用途: 插入元素至陣列前頭
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Martijn Wieringa
    // +   improved by: jmweb
    // %        note 1: Currently does not handle objects
    // *     example 1: array_unshift(['van', 'Zonneveld'], 'Kevin');
    // *     returns 1: 3

	var i = arguments.length;

	while(--i !== 0){
	    arguments[0].unshift(arguments[i]);
	}

	return arguments[0].length;
}

function array_values(arry,sval,strict){
//-------------------------------------------------------
//取回陣列值,同PHP函式,但允許搜尋特定值
//-------------------------------------------------------
//arry    陣列
//sval    搜尋值,預設 無
//strict  強制型態比對,預設 false
//-------------------------------------------------------

    //參數檢驗
    if(!arry){
        return [];
    }
    if(!strict){
        strict=false;
    }

    //處理
    var tmp=[];
    for(var key in arry){
        var val=arry[key];

        //是否要搜尋值
        if(sval==undefined){
           tmp.push(val);
        }else{
            //是否強行型態比對
            if(strict==true){
                if(val===sval){
                    tmp.push(val);
                }
            }else{
                if(val==sval){
                    tmp.push(val);
                }
            }
        }
    }

    //回傳
    return tmp;
}

function array_walk(array,func,userdata){
//-------------------------------------------------------
//使用自訂函式,套用到每一個陣列元素
//-------------------------------------------------------
//array     陣列
//func      函式名稱
//userdata  使用者自訂參數,預設 無
//
//註:本函式目前無法套用關聯陣列
//-------------------------------------------------------

    //參數檢驗
    if(!array){
        return false;
    }
    if((func==undefined)||(func=='')){
        return false;
    }

    //執行
    for(var key in array){
        var val =array[key];
        var astr="";

        if(userdata!=undefined){
            astr=func+'('+val+','+key+','+userdata+')';
        }else{
            astr=func+'('+val+','+key+')';
        }
        array[key]=eval(astr);
    }

    //回傳
    return array;
}

function in_array(val,array,strict){
//-------------------------------------------------------
//函式: in_array()
//用途: 檢驗元素是否在陣列裡,同PHP用法
//-------------------------------------------------------
//val       值
//array     陣列
//strict    強制型態比對,預設false
//-------------------------------------------------------

    if((strict==undefined)||(strict=='')){
        strict=false;
    }

    var flag=false;
    for(var i=0;i<array.length;i++){

        if(strict===true){
        //強制型態比對
            if(val===array[i]){
               flag=true;
               break;
            }
        }else{
        //不強制型態比對
            if(val==array[i]){
               flag=true;
               break;
            }
        }

    }

    //回傳
    return flag;
}

function is_array(array){
//-------------------------------------------------------
//判斷是不是陣列
//-------------------------------------------------------

    if((!array)||((typeof(array)).toString().toLowerCase()!="object")){
        return false;
    }else{
        if(!array.constructor){
            return false;
        }else{
            var str=(array.constructor).toString().toLowerCase();
            if(str.indexOf("array")!=-1){
                //alert("是陣列");
                return true;
            }else{
                //alert("不是陣列");
                return false;
            }
        }
    }
}

function key (arr) {
    // http://kevin.vanzonneveld.net
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   input by: Riddler (http://www.frontierwebdev.com/)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Uses global: php_js to store the array pointer
    // *     example 1: array = {fruit1: 'apple', 'fruit2': 'orange'}
    // *     example 1: key(array);
    // *     returns 1: 'fruit1'

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.pointers = this.php_js.pointers || [];
    var indexOf = function (value) {
        for (var i = 0, length=this.length; i < length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    };
    // END REDUNDANT

    var pointers = this.php_js.pointers;
    if (!pointers.indexOf) {
        pointers.indexOf = indexOf;
    }

    if (pointers.indexOf(arr) === -1) {
        pointers.push(arr, 0);
    }
    var cursor = pointers[pointers.indexOf(arr)+1];
    if (!(arr instanceof Array)) {
        var ct = 0;
        for (var k in arr) {
            if (ct === cursor) {
                return k;
            }
            ct++;
        }
        return false; // Empty
    }
    if (arr.length === 0) {
        return false;
    }
    return cursor;
}

function reset ( arr ) {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Legaev Andrey
    // +    revised by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Uses global: php_js to store the array pointer
    // *     example 1: reset({0: 'Kevin', 1: 'van', 2: 'Zonneveld'});
    // *     returns 1: 'Kevin'

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.pointers = this.php_js.pointers || [];
    var indexOf = function (value) {
        for (var i = 0, length=this.length; i < length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    };
    // END REDUNDANT
    var pointers = this.php_js.pointers;
    if (!pointers.indexOf) {
        pointers.indexOf = indexOf;
    }
    if (pointers.indexOf(arr) === -1) {
        pointers.push(arr, 0);
    }
    var arrpos = pointers.indexOf(arr);
    if (!(arr instanceof Array)) {
        for (var k in arr) {
            if (pointers.indexOf(arr) === -1) {
                pointers.push(arr, 0);
            } else {
                pointers[arrpos+1] = 0;
            }
            return arr[k];
        }
        return false; // Empty
    }
    if (arr.length === 0) {
        return false;
    }
    pointers[arrpos+1] = 0;
    return arr[pointers[arrpos+1]];
}

function prev (arr) {
    // http://kevin.vanzonneveld.net
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Uses global: php_js to store the array pointer
    // *     example 1: transport = ['foot', 'bike', 'car', 'plane'];
    // *     example 1: prev(transport);
    // *     returns 1: false

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.pointers = this.php_js.pointers || [];
    var indexOf = function (value) {
        for (var i = 0, length=this.length; i < length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    };
    // END REDUNDANT
    var pointers = this.php_js.pointers;
    if (!pointers.indexOf) {
        pointers.indexOf = indexOf;
    }
    var arrpos = pointers.indexOf(arr);
    var cursor = pointers[arrpos+1];
    if (pointers.indexOf(arr) === -1 || cursor === 0) {
        return false;
    }
    if (!(arr instanceof Array)) {
        var ct = 0;
        for (var k in arr) {
            if (ct === cursor-1) {
                pointers[arrpos+1] -= 1;
                return arr[k];
            }
            ct++;
        }
    // Shouldn't reach here
    }
    if (arr.length === 0) {
        return false;
    }
    pointers[arrpos+1] -= 1;
    return arr[pointers[arrpos+1]];
}

function current (arr) {
    // http://kevin.vanzonneveld.net
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Uses global: php_js to store the array pointer
    // *     example 1: transport = ['foot', 'bike', 'car', 'plane'];
    // *     example 1: current(transport);
    // *     returns 1: 'foot'

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.pointers = this.php_js.pointers || [];
    var indexOf = function (value) {
        for (var i = 0, length=this.length; i < length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    };
    // END REDUNDANT
    var pointers = this.php_js.pointers;
    if (!pointers.indexOf) {
        pointers.indexOf = indexOf;
    }
    if (pointers.indexOf(arr) === -1) {
        pointers.push(arr, 0);
    }
    var arrpos = pointers.indexOf(arr);
    var cursor = pointers[arrpos+1];
    if (arr instanceof Array) {
        return arr[cursor] || false;
    }
    var ct = 0;
    for (var k in arr) {
        if (ct === cursor) {
            return arr[k];
        }
        ct++;
    }
    return false; // Empty
}

function pos (arr) {
    // !No description available for pos. @php.js developers: Please update the function summary text file.
    //
    // version: 1009.2513
    // discuss at: http://phpjs.org/functions/pos    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Uses global: php_js to store the array pointer
    // -    depends on: current
    // *     example 1: transport = ['foot', 'bike', 'car', 'plane'];
    // *     example 1: pos(transport);    // *     returns 1: 'foot'

    return this.current(arr);
}

function next (arr) {
    // http://kevin.vanzonneveld.net
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Uses global: php_js to store the array pointer
    // *     example 1: transport = ['foot', 'bike', 'car', 'plane'];
    // *     example 1: next(transport);
    // *     example 1: next(transport);
    // *     returns 1: 'car'

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.pointers = this.php_js.pointers || [];
    var indexOf = function (value) {
        for (var i = 0, length=this.length; i < length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    };
    // END REDUNDANT
    var pointers = this.php_js.pointers;
    if (!pointers.indexOf) {
        pointers.indexOf = indexOf;
    }
    if (pointers.indexOf(arr) === -1) {
        pointers.push(arr, 0);
    }
    var arrpos = pointers.indexOf(arr);
    var cursor = pointers[arrpos+1];
    if (!(arr instanceof Array)) {
        var ct = 0;
        for (var k in arr) {
            if (ct === cursor+1) {
                pointers[arrpos+1] += 1;
                return arr[k];
            }
            ct++;
        }
        return false; // End
    }
    if (arr.length === 0 || cursor === (arr.length-1)) {
        return false;
    }
    pointers[arrpos+1] += 1;
    return arr[pointers[arrpos+1]];
}

function end ( arr ) {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Legaev Andrey
    // +    revised by: J A R
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   restored by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    revised by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: Uses global: php_js to store the array pointer
    // *     example 1: end({0: 'Kevin', 1: 'van', 2: 'Zonneveld'});
    // *     returns 1: 'Zonneveld'
    // *     example 2: end(['Kevin', 'van', 'Zonneveld']);
    // *     returns 2: 'Zonneveld'

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.pointers = this.php_js.pointers || [];
    var indexOf = function (value) {
        for (var i = 0, length=this.length; i < length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    };
    // END REDUNDANT
    var pointers = this.php_js.pointers;
    if (!pointers.indexOf) {
        pointers.indexOf = indexOf;
    }
    if (pointers.indexOf(arr) === -1) {
        pointers.push(arr, 0);
    }
    var arrpos = pointers.indexOf(arr);
    if (!(arr instanceof Array)) {
        var ct = 0;
        for (var k in arr) {
            ct++;
            var val = arr[k];
        }
        if (ct === 0) {
            return false; // Empty
        }
        pointers[arrpos+1] = ct - 1;
        return val;
    }
    if (arr.length === 0) {
        return false;
    }
    pointers[arrpos+1] = arr.length - 1;
    return arr[pointers[arrpos+1]];
}

function range ( low, high, step ) {
//-------------------------------------------------------
//函式: range()
//用途: 建立範圍陣列
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Waldo Malqui Silva
    // *     example 1: range ( 0, 12 );
    // *     returns 1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    // *     example 2: range( 0, 100, 10 );
    // *     returns 2: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    // *     example 3: range( 'a', 'i' );
    // *     returns 3: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
    // *     example 4: range( 'c', 'a' );
    // *     returns 4: ['c', 'b', 'a']

    var matrix = [];
    var inival, endval, plus;
    var walker = step || 1;
    var chars  = false;

    if ( !isNaN( low ) && !isNaN( high ) ) {
        inival = low;
        endval = high;
    } else if ( isNaN( low ) && isNaN( high ) ) {
        chars = true;
        inival = low.charCodeAt( 0 );
        endval = high.charCodeAt( 0 );
    } else {
        inival = ( isNaN( low ) ? 0 : low );
        endval = ( isNaN( high ) ? 0 : high );
    }

    plus = ( ( inival > endval ) ? false : true );
    if ( plus ) {
        while ( inival <= endval ) {
            matrix.push( ( ( chars ) ? String.fromCharCode( inival ) : inival ) );
            inival += walker;
        }
    } else {
        while ( inival >= endval ) {
            matrix.push( ( ( chars ) ? String.fromCharCode( inival ) : inival ) );
            inival -= walker;
        }
    }

    return matrix;
}

function shuffle (inputArr) {
//-------------------------------------------------------
//函式: shuffle()
//用途: 打亂陣列
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    revised by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: This function deviates from PHP in returning a copy of the array instead
    // %        note 1: of acting by reference and returning true; this was necessary because
    // %        note 1: IE does not allow deleting and re-adding of properties without caching
    // %        note 1: of property position; you can set the ini of "phpjs.strictForIn" to true to
    // %        note 1: get the PHP behavior, but use this only if you are in an environment
    // %        note 1: such as Firefox extensions where for-in iteration order is fixed and true
    // %        note 1: property deletion is supported. Note that we intend to implement the PHP
    // %        note 1: behavior by default if IE ever does allow it; only gives shallow copy since
    // %        note 1: is by reference in PHP anyways
    // *     example 1: ini_set('phpjs.strictForIn', true);
    // *     example 1: shuffle({5:'a', 2:'3', 3:'c', 4:5, 'q':5});
    // *     returns 1: {5:'a', 4:5, 'q':5, 3:'c', 2:'3'}
    // *     example 2: ini_set('phpjs.strictForIn', true);
    // *     example 2: var data = {5:'a', 2:'3', 3:'c', 4:5, 'q':5};
    // *     example 2: shuffle(data);
    // *     results 2: {5:'a', 'q':5, 3:'c', 2:'3', 4:5}
    // *     returns 2: true

    var valArr = [], k = '', i = 0, strictForIn = false, populateArr = [];

    for (k in inputArr) { // Get key and value arrays
        if (inputArr.hasOwnProperty(k)) {
            valArr.push(inputArr[k]);
            if (strictForIn) {
                delete inputArr[k];
            }
        }
    }
    valArr.sort(function() {return 0.5 - Math.random();});

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    // END REDUNDANT

    strictForIn = this.php_js.ini['phpjs.strictForIn'] && this.php_js.ini['phpjs.strictForIn'].local_value &&
                    this.php_js.ini['phpjs.strictForIn'].local_value !== 'off';
    populateArr = strictForIn ? inputArr : populateArr;

    for (i = 0; i < valArr.length; i++) { // Repopulate the old array
        populateArr[i] = valArr[i];
    }

    return strictForIn || populateArr;
}

function str2array(str,dchr,flag){
//-------------------------------------------------------
//字串轉陣列
//-------------------------------------------------------
//str   字串
//dchr  串接字元,預設 ','
//flag  允許空元素,預設 true
//-------------------------------------------------------

    if((str==undefined)||(str=='')){
        return false;
    }
    if((dchr==undefined)||(dchr=='')){
        dchr=',';
    }
    if(flag==undefined){
        flag=true;
    }

    if(flag==true){
        return str.split(dchr);
    }else{
        var arry=str.split(dchr);
        var tmp =[];
        for(key in arry){
            var val=arry[key];

            //排除空的
            if(trim(val)!=''){
               tmp.push(val);
            }
        }

        return tmp;
    }

    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function array_range(s,e,step){
//-------------------------------------------------------
//值域數值陣列
//-------------------------------------------------------
//s     起始值
//e     終止值
//step  遞增數,預設1,可以指定負整數
//-------------------------------------------------------

    if(!step){
        step=1;
    }else{
        step=parseInt(step);
    }

    var arry=[];
    while(s<=e){
        arry.push(s);
        s=s+step;
    }

    return arry;
}
