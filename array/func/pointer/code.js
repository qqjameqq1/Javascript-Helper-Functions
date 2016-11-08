
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
