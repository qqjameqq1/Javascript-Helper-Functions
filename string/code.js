//-------------------------------------------------------
//string
//-------------------------------------------------------
//addslashes()                  addslashes
//chr()                         字元碼轉字元
//chunk_split()                 指定長度分割字串,傳回字串
//crc32()                       crc32編碼
//explode()                     字串分割成陣列
//htmlspecialchars()            特定字元html編碼
//htmlspecialchars_decode()     特定字元html反編碼
//implode()                     陣列合併輸出字串
//join()                        陣列合併輸出字串
//lcfirst()                     字首小寫
//lcwords()                     單字字首小寫,每個單字均會套用
//md5()                         md5編碼
//nl2br()                       換行轉br
//ord()                         字元轉ASCII
//parse_str()                   以query string格式,解析設定變數
//parse_url()                   解析url
//sha1()                        sha1編碼
//str_repeat()                  重複字串N次
//str_replace()                 字串取代
//str_shuffle()                 打亂字串
//str_split()                   依據指定字元長度,分割字串成陣列
//strcasecmp()                  字串比對,不分大小寫
//strcmp()                      字串比對,分大小寫
//strip_space()                 去除全部的空白字元
//strip_tags()                  移除標籤,支援保留特標籤
//stripos()                     以第一次出現為基準,取得字串出現的位置,不分大小寫
//stripslashes()                stripslashes
//stristr()                     搜尋特定字串,以第一次出現為基準,並傳回部份字串,不分大小寫
//strleft()                     由左至右依序取回N個字元
//strncasecmp()                 指定長度進行字串比對,不分大小寫
//strncmp()                     指定長度進行字串比對,分大小寫
//strpos()                      以第一次出現為基準,取得字串出現的位置,分大小寫
//strrchr()                     搜尋特定字元,以最後一次出現為基準,並傳回部份字串,分大小寫
//strrev()                      字串反轉
//strright()                    由右至左依序取回N個字元
//strripos()                    以最後一次出現為基準,取得字串出現的位置,不分大小寫
//strstr()                      搜尋特定字串,以第一次出現為基準,並傳回部份字串,分大小寫
//strtolower()                  字串轉小寫
//strtoupper()                  字串轉大寫
//substr()                      從特定位置取回部份字串
//trim()                        去前後空白字元
//ltrim()                       去左邊空白字元
//rtrim()                       去右邊空白字元
//chop()                        去右邊空白字元
//ucfirst()                     字首大寫
//ucwords()                     單字字首大寫,每個單字均會套用
//urldecode()                   urldecode
//utf8_encode()                 utf8_encode

function addslashes(Str) {
//-------------------------------------------------------
//函式: addslashes()
//用途: addslashes
//-------------------------------------------------------
    return (Str+'').replace(/([\\"'])/g,"\\$1").replace(/\0/g,"\\0");
}

function chr(codePt) {
//-------------------------------------------------------
//函式: chr()
//用途: 字元碼轉字元
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: chr(75);
    // *     returns 1: 'K'
    // *     example 1: chr(65536) === '\uD800\uDC00';
    // *     returns 1: true

    if (codePt > 0xFFFF) { // Create a four-byte string (length 2) since this code point is high
                                             //   enough for the UTF-16 encoding (JavaScript internal use), to
                                             //   require representation with two surrogates (reserved non-characters
                                             //   used for building other characters; the first is "high" and the next "low")
        codePt -= 0x10000;
        return String.fromCharCode(0xD800 + (codePt >> 10), 0xDC00 + (codePt & 0x3FF));
    }
    else {
        return String.fromCharCode(codePt);
    }
}

function chunk_split (body, chunklen, end) {
//-------------------------------------------------------
//函式: chunk_split()
//用途: 指定長度分割字串,傳回字串
//-------------------------------------------------------
    // Returns split line
    //
    // version: 1009.2513
    // discuss at: http://phpjs.org/functions/chunk_split
    // +   original by: Paulo Freitas
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Theriault
    // *     example 1: chunk_split('Hello world!', 1, '*');
    // *     returns 1: 'H*e*l*l*o* *w*o*r*l*d*!*'
    // *     example 2: chunk_split('Hello world!', 10, '*');
    // *     returns 2: 'Hello worl*d!*'

    chunklen = parseInt(chunklen, 10) || 76;
    end = end || '\r\n';

    if (chunklen < 1) {
        return false;
    }

    return body.match(new RegExp(".{0," + chunklen + "}", "g")).join(end);
}

function crc32 ( str ) {
//-------------------------------------------------------
//函式: crc32()
//用途: crc32編碼
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
    // +   improved by: T0bsn
    // -    depends on: utf8_encode
    // *     example 1: crc32('Kevin van Zonneveld');
    // *     returns 1: 1249991249

    str = this.utf8_encode(str);
    var table = "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D";

    var crc = 0;
    var x = 0;
    var y = 0;

    crc = crc ^ (-1);
    for (var i = 0, iTop = str.length; i < iTop; i++) {
        y = ( crc ^ str.charCodeAt( i ) ) & 0xFF;
        x = "0x" + table.substr( y * 9, 8 );
        crc = ( crc >>> 8 ) ^ x;
    }

    return crc ^ (-1);
}

function explode (delimiter, string, limit) {
//-------------------------------------------------------
//函式: explode()
//用途: 字串分割成陣列
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +     original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +     improved by: kenneth
    // +     improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +     improved by: d3x
    // +     bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: explode(' ', 'Kevin van Zonneveld');
    // *     returns 1: {0: 'Kevin', 1: 'van', 2: 'Zonneveld'}
    // *     example 2: explode('=', 'a=bc=d', 2);
    // *     returns 2: ['a', 'bc=d']

    var emptyArray = { 0: '' };

    // third argument is not required
    if ( arguments.length < 2 ||
        typeof arguments[0] == 'undefined' ||
        typeof arguments[1] == 'undefined' ) {
        return null;
    }

    if ( delimiter === '' ||
        delimiter === false ||
        delimiter === null ) {
        return false;
    }

    if ( typeof delimiter == 'function' ||
        typeof delimiter == 'object' ||
        typeof string == 'function' ||
        typeof string == 'object' ) {
        return emptyArray;
    }

    if ( delimiter === true ) {
        delimiter = '1';
    }

    if (!limit) {
        return string.toString().split(delimiter.toString());
    } else {
        // support for limit argument
        var splitted = string.toString().split(delimiter.toString());
        var partA = splitted.splice(0, limit - 1);
        var partB = splitted.join(delimiter.toString());
        partA.push(partB);
        return partA;
    }
}

function htmlspecialchars (string, quote_style, charset, double_encode) {
//-------------------------------------------------------
//函式: htmlspecialchars()
//用途: 特定字元html編碼
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Mirek Slugen
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Nathan
    // +   bugfixed by: Arno
    // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Ratheous
    // +      input by: Mailfaker (http://www.weedem.fr/)
    // +      reimplemented by: Brett Zamir (http://brett-zamir.me)
    // +      input by: felix
    // +    bugfixed by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: charset argument not supported
    // *     example 1: htmlspecialchars("<a href='test'>Test</a>", 'ENT_QUOTES');
    // *     returns 1: '&lt;a href=&#039;test&#039;&gt;Test&lt;/a&gt;'
    // *     example 2: htmlspecialchars("ab\"c'd", ['ENT_NOQUOTES', 'ENT_QUOTES']);
    // *     returns 2: 'ab"c&#039;d'
    // *     example 3: htmlspecialchars("my "&entity;" is still here", null, null, false);
    // *     returns 3: 'my &quot;&entity;&quot; is still here'

    var optTemp = 0, i = 0, noquotes= false;
    if (typeof quote_style === 'undefined' || quote_style === null) {
        quote_style = 2;
    }
    string = string.toString();
    if (double_encode !== false) { // Put this first to avoid double-encoding
        string = string.replace(/&/g, '&amp;');
    }
    string = string.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    var OPTS = {
        'ENT_NOQUOTES': 0,
        'ENT_HTML_QUOTE_SINGLE' : 1,
        'ENT_HTML_QUOTE_DOUBLE' : 2,
        'ENT_COMPAT': 2,
        'ENT_QUOTES': 3,
        'ENT_IGNORE' : 4
    };
    if (quote_style === 0) {
        noquotes = true;
    }
    if (typeof quote_style !== 'number') { // Allow for a single string or an array of string flags
        quote_style = [].concat(quote_style);
        for (i=0; i < quote_style.length; i++) {
            // Resolve string input to bitwise e.g. 'PATHINFO_EXTENSION' becomes 4
            if (OPTS[quote_style[i]] === 0) {
                noquotes = true;
            }
            else if (OPTS[quote_style[i]]) {
                optTemp = optTemp | OPTS[quote_style[i]];
            }
        }
        quote_style = optTemp;
    }
    if (quote_style & OPTS.ENT_HTML_QUOTE_SINGLE) {
        string = string.replace(/'/g, '&#039;');
    }
    if (!noquotes) {
        string = string.replace(/"/g, '&quot;');
    }

    return string;
}

function htmlspecialchars_decode (string, quote_style) {
//-------------------------------------------------------
//函式: htmlspecialchars_decode()
//用途: 特定字元html反編碼
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Mirek Slugen
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Mateusz "loonquawl" Zalega
    // +      input by: ReverseSyntax
    // +      input by: Slawomir Kaniecki
    // +      input by: Scott Cariss
    // +      input by: Francois
    // +   bugfixed by: Onno Marsman
    // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Ratheous
    // +      input by: Mailfaker (http://www.weedem.fr/)
    // +      reimplemented by: Brett Zamir (http://brett-zamir.me)
    // +    bugfixed by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: htmlspecialchars_decode("<p>this -&gt; &quot;</p>", 'ENT_NOQUOTES');
    // *     returns 1: '<p>this -> &quot;</p>'
    // *     example 2: htmlspecialchars_decode("&amp;quot;");
    // *     returns 2: '&quot;'

    var optTemp = 0, i = 0, noquotes= false;
    if (typeof quote_style === 'undefined') {
        quote_style = 2;
    }
    string = string.toString().replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    var OPTS = {
        'ENT_NOQUOTES': 0,
        'ENT_HTML_QUOTE_SINGLE' : 1,
        'ENT_HTML_QUOTE_DOUBLE' : 2,
        'ENT_COMPAT': 2,
        'ENT_QUOTES': 3,
        'ENT_IGNORE' : 4
    };
    if (quote_style === 0) {
        noquotes = true;
    }
    if (typeof quote_style !== 'number') { // Allow for a single string or an array of string flags
        quote_style = [].concat(quote_style);
        for (i=0; i < quote_style.length; i++) {
            // Resolve string input to bitwise e.g. 'PATHINFO_EXTENSION' becomes 4
            if (OPTS[quote_style[i]] === 0) {
                noquotes = true;
            }
            else if (OPTS[quote_style[i]]) {
                optTemp = optTemp | OPTS[quote_style[i]];
            }
        }
        quote_style = optTemp;
    }
    if (quote_style & OPTS.ENT_HTML_QUOTE_SINGLE) {
        string = string.replace(/&#0*39;/g, "'"); // PHP doesn't currently escape if more than one 0, but it should
        // string = string.replace(/&apos;|&#x0*27;/g, "'"); // This would also be useful here, but not a part of PHP
    }
    if (!noquotes) {
        string = string.replace(/&quot;/g, '"');
    }
    // Put this in last place to avoid escape being double-decoded
    string = string.replace(/&amp;/g, '&');

    return string;
}

function implode (glue, pieces) {
//-------------------------------------------------------
//函式: implode()
//用途: 陣列合併輸出字串
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Waldo Malqui Silva
    // +   improved by: Itsacon (http://www.itsacon.net/)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: implode(' ', ['Kevin', 'van', 'Zonneveld']);
    // *     returns 1: 'Kevin van Zonneveld'
    // *     example 2: implode(' ', {first:'Kevin', last: 'van Zonneveld'});
    // *     returns 2: 'Kevin van Zonneveld'

    var i = '', retVal='', tGlue='';
    if (arguments.length === 1) {
        pieces = glue;
        glue = '';
    }
    if (typeof(pieces) === 'object') {
        if (pieces instanceof Array) {
            return pieces.join(glue);
        }
        else {
            for (i in pieces) {
                retVal += tGlue + pieces[i];
                tGlue = glue;
            }
            return retVal;
        }
    }
    else {
        return pieces;
    }
}

function join (glue,pieces) {
//-------------------------------------------------------
//函式: join()
//用途: 陣列合併輸出字串
//-------------------------------------------------------
    var i = '', retVal='', tGlue='';
    if (arguments.length === 1) {
        pieces = glue;
        glue = '';
    }
    if (typeof(pieces) === 'object') {
        if (pieces instanceof Array) {
            return pieces.join(glue);
        }
        else {
            for (i in pieces) {
                retVal += tGlue + pieces[i];
                tGlue = glue;
            }
            return retVal;
        }
    }
    else {
        return pieces;
    }

}

function lcfirst(string){
//-------------------------------------------------------
//lcfirst() 字首小寫
//-------------------------------------------------------

    //參數檢驗
    if((string==undefined)||(trim(string)=='')){
        return '';
    }

    string=string.toString();

    //處理
    if(trim(string.length)===1){
        var result=string.toLowerCase();
    }else{
        var len   =string.length;
        var first =string.substr(0,1);
        var part  =string.substr(1,len-1);
        var result=(first.toLowerCase())+part;
    }

    //回傳
    return result;

    //子函式
    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function lcwords(string){
//-------------------------------------------------------
//函式: lcwords()
//用途: 單字字首小寫,每個單字均會套用
//-------------------------------------------------------

    //參數檢驗
    if((string==undefined)||(trim(string)=='')){
        return '';
    }

    string=string.toString();

    //處理
    var arry=string.split(" ");
    var arry_tmp=[];
    for(var i=0;i<arry.length;i++){
        var tmp     =arry[i];
        var len     =tmp.length;
        var first   =tmp.substr(0,1);
        var part    =tmp.substr(1,len-1);
        var result  =first.toLowerCase()+part;
        arry_tmp.push(result);
    }

    //回傳
    return arry_tmp.join(" ");

    //子函式
    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function md5 (str) {
//-------------------------------------------------------
//函式: md5()
//用途: md5編碼
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
    // + namespaced by: Michael White (http://getsprink.com)
    // +    tweaked by: Jack
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // -    depends on: utf8_encode
    // *     example 1: md5('Kevin van Zonneveld');
    // *     returns 1: '6e658d4bfcb59cc13f96c14450ac40b9'

    var xl;

    var rotateLeft = function (lValue, iShiftBits) {
        return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
    };

    var addUnsigned = function (lX,lY) {
        var lX4,lY4,lX8,lY8,lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            } else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        } else {
            return (lResult ^ lX8 ^ lY8);
        }
    };

    var _F = function (x,y,z) { return (x & y) | ((~x) & z); };
    var _G = function (x,y,z) { return (x & z) | (y & (~z)); };
    var _H = function (x,y,z) { return (x ^ y ^ z); };
    var _I = function (x,y,z) { return (y ^ (x | (~z))); };

    var _FF = function (a,b,c,d,x,s,ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(_F(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    };

    var _GG = function (a,b,c,d,x,s,ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(_G(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    };

    var _HH = function (a,b,c,d,x,s,ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(_H(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    };

    var _II = function (a,b,c,d,x,s,ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(_I(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    };

    var convertToWordArray = function (str) {
        var lWordCount;
        var lMessageLength = str.length;
        var lNumberOfWords_temp1=lMessageLength + 8;
        var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
        var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
        var lWordArray=new Array(lNumberOfWords-1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while ( lByteCount < lMessageLength ) {
            lWordCount = (lByteCount-(lByteCount % 4))/4;
            lBytePosition = (lByteCount % 4)*8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (str.charCodeAt(lByteCount)<<lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount-(lByteCount % 4))/4;
        lBytePosition = (lByteCount % 4)*8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
        lWordArray[lNumberOfWords-2] = lMessageLength<<3;
        lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
        return lWordArray;
    };

    var wordToHex = function (lValue) {
        var wordToHexValue="",wordToHexValue_temp="",lByte,lCount;
        for (lCount = 0;lCount<=3;lCount++) {
            lByte = (lValue>>>(lCount*8)) & 255;
            wordToHexValue_temp = "0" + lByte.toString(16);
            wordToHexValue = wordToHexValue + wordToHexValue_temp.substr(wordToHexValue_temp.length-2,2);
        }
        return wordToHexValue;
    };

    var x=[],
        k,AA,BB,CC,DD,a,b,c,d,
        S11=7, S12=12, S13=17, S14=22,
        S21=5, S22=9 , S23=14, S24=20,
        S31=4, S32=11, S33=16, S34=23,
        S41=6, S42=10, S43=15, S44=21;

    str = this.utf8_encode(str);
    x = convertToWordArray(str);
    a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;

    xl = x.length;
    for (k=0;k<xl;k+=16) {
        AA=a; BB=b; CC=c; DD=d;
        a=_FF(a,b,c,d,x[k+0], S11,0xD76AA478);
        d=_FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
        c=_FF(c,d,a,b,x[k+2], S13,0x242070DB);
        b=_FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
        a=_FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
        d=_FF(d,a,b,c,x[k+5], S12,0x4787C62A);
        c=_FF(c,d,a,b,x[k+6], S13,0xA8304613);
        b=_FF(b,c,d,a,x[k+7], S14,0xFD469501);
        a=_FF(a,b,c,d,x[k+8], S11,0x698098D8);
        d=_FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
        c=_FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
        b=_FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
        a=_FF(a,b,c,d,x[k+12],S11,0x6B901122);
        d=_FF(d,a,b,c,x[k+13],S12,0xFD987193);
        c=_FF(c,d,a,b,x[k+14],S13,0xA679438E);
        b=_FF(b,c,d,a,x[k+15],S14,0x49B40821);
        a=_GG(a,b,c,d,x[k+1], S21,0xF61E2562);
        d=_GG(d,a,b,c,x[k+6], S22,0xC040B340);
        c=_GG(c,d,a,b,x[k+11],S23,0x265E5A51);
        b=_GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
        a=_GG(a,b,c,d,x[k+5], S21,0xD62F105D);
        d=_GG(d,a,b,c,x[k+10],S22,0x2441453);
        c=_GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
        b=_GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
        a=_GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
        d=_GG(d,a,b,c,x[k+14],S22,0xC33707D6);
        c=_GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
        b=_GG(b,c,d,a,x[k+8], S24,0x455A14ED);
        a=_GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
        d=_GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
        c=_GG(c,d,a,b,x[k+7], S23,0x676F02D9);
        b=_GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
        a=_HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
        d=_HH(d,a,b,c,x[k+8], S32,0x8771F681);
        c=_HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
        b=_HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
        a=_HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
        d=_HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
        c=_HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
        b=_HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
        a=_HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
        d=_HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
        c=_HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
        b=_HH(b,c,d,a,x[k+6], S34,0x4881D05);
        a=_HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
        d=_HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
        c=_HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
        b=_HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
        a=_II(a,b,c,d,x[k+0], S41,0xF4292244);
        d=_II(d,a,b,c,x[k+7], S42,0x432AFF97);
        c=_II(c,d,a,b,x[k+14],S43,0xAB9423A7);
        b=_II(b,c,d,a,x[k+5], S44,0xFC93A039);
        a=_II(a,b,c,d,x[k+12],S41,0x655B59C3);
        d=_II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
        c=_II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
        b=_II(b,c,d,a,x[k+1], S44,0x85845DD1);
        a=_II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
        d=_II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
        c=_II(c,d,a,b,x[k+6], S43,0xA3014314);
        b=_II(b,c,d,a,x[k+13],S44,0x4E0811A1);
        a=_II(a,b,c,d,x[k+4], S41,0xF7537E82);
        d=_II(d,a,b,c,x[k+11],S42,0xBD3AF235);
        c=_II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
        b=_II(b,c,d,a,x[k+9], S44,0xEB86D391);
        a=addUnsigned(a,AA);
        b=addUnsigned(b,BB);
        c=addUnsigned(c,CC);
        d=addUnsigned(d,DD);
    }

    var temp = wordToHex(a)+wordToHex(b)+wordToHex(c)+wordToHex(d);

    return temp.toLowerCase();
}

function nl2br (str, is_xhtml) {
//-------------------------------------------------------
//函式: nl2br()
//用途: 換行轉br
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Philip Peterson
    // +   improved by: Onno Marsman
    // +   improved by: Atli Þór
    // +   bugfixed by: Onno Marsman
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Maximusya
    // *     example 1: nl2br('Kevin\nvan\nZonneveld');
    // *     returns 1: 'Kevin<br />\nvan<br />\nZonneveld'
    // *     example 2: nl2br("\nOne\nTwo\n\nThree\n", false);
    // *     returns 2: '<br>\nOne<br>\nTwo<br>\n<br>\nThree<br>\n'
    // *     example 3: nl2br("\nOne\nTwo\n\nThree\n", true);
    // *     returns 3: '<br />\nOne<br />\nTwo<br />\n<br />\nThree<br />\n'

    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';

    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
}

function ord (string) {
//-------------------------------------------------------
//函式: ord()
//用途: 字元轉ASCII
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Onno Marsman
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: ord('K');
    // *     returns 1: 75
    // *     example 2: ord('\uD800\uDC00'); // surrogate pair to create a single Unicode character
    // *     returns 2: 65536

    var str = string + '';

    var code = str.charCodeAt(0);
    if (0xD800 <= code && code <= 0xDBFF) { // High surrogate (could change last hex to 0xDB7F to treat high private surrogates as single characters)
        var hi = code;
        if (str.length === 1) {
            return code; // This is just a high surrogate with no following low surrogate, so we return its value;
                                    // we could also throw an error as it is not a complete character, but someone may want to know
        }
        var low = str.charCodeAt(1);
        if (!low) {

        }
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
    }
    if (0xDC00 <= code && code <= 0xDFFF) { // Low surrogate
        return code; // This is just a low surrogate with no preceding high surrogate, so we return its value;
                                // we could also throw an error as it is not a complete character, but someone may want to know
    }
    return code;
}

function parse_str (str, array){
//-------------------------------------------------------
//函式: parse_str()
//用途: 以query string格式,解析設定變數
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Cagri Ekin
    // +   improved by: Michael White (http://getsprink.com)
    // +    tweaked by: Jack
    // +   bugfixed by: Onno Marsman
    // +   reimplemented by: stag019
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: stag019
    // -    depends on: urldecode
    // +   input by: Dreamer
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: When no argument is specified, will put variables in global scope.
    // *     example 1: var arr = {};
    // *     example 1: parse_str('first=foo&second=bar', arr);
    // *     results 1: arr == { first: 'foo', second: 'bar' }
    // *     example 2: var arr = {};
    // *     example 2: parse_str('str_a=Jack+and+Jill+didn%27t+see+the+well.', arr);
    // *     results 2: arr == { str_a: "Jack and Jill didn't see the well." }

    var glue1 = '=', glue2 = '&', array2 = String(str).replace(/^&?([\s\S]*?)&?$/, '$1').split(glue2),
    i, j, chr, tmp, key, value, bracket, keys, evalStr, that = this,
    fixStr = function (str) {
        return that.urldecode(str).replace(/([\\"'])/g, '\\$1').replace(/\n/g, '\\n').replace(/\r/g, '\\r');
    };

    if (!array) {
        array = this.window;
    }

    for (i = 0; i < array2.length; i++) {
        tmp = array2[i].split(glue1);
        if (tmp.length < 2) {
            tmp = [tmp, ''];
        }
        key   = fixStr(tmp[0]);
        value = fixStr(tmp[1]);
        while (key.charAt(0) === ' ') {
            key = key.substr(1);
        }
        if (key.indexOf('\0') !== -1) {
            key = key.substr(0, key.indexOf('\0'));
        }
        if (key && key.charAt(0) !== '[') {
            keys    = [];
            bracket = 0;
            for (j = 0; j < key.length; j++) {
                if (key.charAt(j) === '[' && !bracket) {
                    bracket = j + 1;
                }
                else if (key.charAt(j) === ']') {
                    if (bracket) {
                        if (!keys.length) {
                            keys.push(key.substr(0, bracket - 1));
                        }
                        keys.push(key.substr(bracket, j - bracket));
                        bracket = 0;
                        if (key.charAt(j + 1) !== '[') {
                            break;
                        }
                    }
                }
            }
            if (!keys.length) {
                keys = [key];
            }
            for (j = 0; j < keys[0].length; j++) {
                chr = keys[0].charAt(j);
                if (chr === ' ' || chr === '.' || chr === '[') {
                    keys[0] = keys[0].substr(0, j) + '_' + keys[0].substr(j + 1);
                }
                if (chr === '[') {
                    break;
                }
            }
            evalStr = 'array';
            for (j = 0; j < keys.length; j++) {
                key = keys[j];
                if ((key !== '' && key !== ' ') || j === 0) {
                    key = "'" + key + "'";
                }
                else {
                    key = eval(evalStr + '.push([]);') - 1;
                }
                evalStr += '[' + key + ']';
                if (j !== keys.length - 1 && eval('typeof ' + evalStr) === 'undefined') {
                    eval(evalStr + ' = [];');
                }
            }
            evalStr += " = '" + value + "';\n";
            eval(evalStr);
        }
    }
}

function parse_url (str, component) {
//-------------------------------------------------------
//函式: parse_url()
//用途: 解析url
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +      original by: Steven Levithan (http://blog.stevenlevithan.com)
    // + reimplemented by: Brett Zamir (http://brett-zamir.me)
    // %          note: Based on http://stevenlevithan.com/demo/parseuri/js/assets/parseuri.js
    // %          note: blog post at http://blog.stevenlevithan.com/archives/parseuri
    // %          note: demo at http://stevenlevithan.com/demo/parseuri/js/assets/parseuri.js
    // %          note: Does not replace invaild characters with '_' as in PHP, nor does it return false with
    // %          note: a seriously malformed URL.
    // %          note: Besides function name, is the same as parseUri besides the commented out portion
    // %          note: and the additional section following, as well as our allowing an extra slash after
    // %          note: the scheme/protocol (to allow file:/// as in PHP)
    // *     example 1: parse_url('http://username:password@hostname/path?arg=value#anchor');
    // *     returns 1: {scheme: 'http', host: 'hostname', user: 'username', pass: 'password', path: '/path', query: 'arg=value', fragment: 'anchor'}

    var  o   = {
        strictMode: false,
        key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
        q:   {
            name:   "queryKey",
            parser: /(?:^|&)([^&=]*)=?([^&]*)/g
        },
        parser: {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/\/?)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/ // Added one optional slash to post-protocol to catch file:/// (should restrict this)
        }
    };

    var m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
    uri = {},
    i   = 14;
    while (i--) {uri[o.key[i]] = m[i] || "";}
    // Uncomment the following to use the original more detailed (non-PHP) script
    /*
        uri[o.q.name] = {};
        uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
        if ($1) {uri[o.q.name][$1] = $2;}
        });
        return uri;
    */

    switch (component) {
        case 'PHP_URL_SCHEME':
            return uri.protocol;
        case 'PHP_URL_HOST':
            return uri.host;
        case 'PHP_URL_PORT':
            return uri.port;
        case 'PHP_URL_USER':
            return uri.user;
        case 'PHP_URL_PASS':
            return uri.password;
        case 'PHP_URL_PATH':
            return uri.path;
        case 'PHP_URL_QUERY':
            return uri.query;
        case 'PHP_URL_FRAGMENT':
            return uri.anchor;
        default:
            var retArr = {};
            if (uri.protocol !== '') {retArr.scheme=uri.protocol;}
            if (uri.host !== '') {retArr.host=uri.host;}
            if (uri.port !== '') {retArr.port=uri.port;}
            if (uri.user !== '') {retArr.user=uri.user;}
            if (uri.password !== '') {retArr.pass=uri.password;}
            if (uri.path !== '') {retArr.path=uri.path;}
            if (uri.query !== '') {retArr.query=uri.query;}
            if (uri.anchor !== '') {retArr.fragment=uri.anchor;}
            return retArr;
    }
}

function sha1 (str) {
//-------------------------------------------------------
//函式: sha1()
//用途: sha1編碼
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
    // + namespaced by: Michael White (http://getsprink.com)
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // -    depends on: utf8_encode
    // *     example 1: sha1('Kevin van Zonneveld');
    // *     returns 1: '54916d2e62f65b3afa6e192e6a601cdbe5cb5897'

    var rotate_left = function (n,s) {
        var t4 = ( n<<s ) | (n>>>(32-s));
        return t4;
    };

    /*var lsb_hex = function (val) { // Not in use; needed?
        var str="";
        var i;
        var vh;
        var vl;

        for ( i=0; i<=6; i+=2 ) {
            vh = (val>>>(i*4+4))&0x0f;
            vl = (val>>>(i*4))&0x0f;
            str += vh.toString(16) + vl.toString(16);
        }
        return str;
    };*/

    var cvt_hex = function (val) {
        var str="";
        var i;
        var v;

        for (i=7; i>=0; i--) {
            v = (val>>>(i*4))&0x0f;
            str += v.toString(16);
        }
        return str;
    };

    var blockstart;
    var i, j;
    var W = new Array(80);
    var H0 = 0x67452301;
    var H1 = 0xEFCDAB89;
    var H2 = 0x98BADCFE;
    var H3 = 0x10325476;
    var H4 = 0xC3D2E1F0;
    var A, B, C, D, E;
    var temp;

    str = this.utf8_encode(str);
    var str_len = str.length;

    var word_array = [];
    for (i=0; i<str_len-3; i+=4) {
        j = str.charCodeAt(i)<<24 | str.charCodeAt(i+1)<<16 |
        str.charCodeAt(i+2)<<8 | str.charCodeAt(i+3);
        word_array.push( j );
    }

    switch (str_len % 4) {
        case 0:
            i = 0x080000000;
        break;
        case 1:
            i = str.charCodeAt(str_len-1)<<24 | 0x0800000;
        break;
        case 2:
            i = str.charCodeAt(str_len-2)<<24 | str.charCodeAt(str_len-1)<<16 | 0x08000;
        break;
        case 3:
            i = str.charCodeAt(str_len-3)<<24 | str.charCodeAt(str_len-2)<<16 | str.charCodeAt(str_len-1)<<8    | 0x80;
        break;
    }

    word_array.push( i );

    while ((word_array.length % 16) != 14 ) {word_array.push( 0 );}

    word_array.push( str_len>>>29 );
    word_array.push( (str_len<<3)&0x0ffffffff );

    for ( blockstart=0; blockstart<word_array.length; blockstart+=16 ) {
        for (i=0; i<16; i++) {W[i] = word_array[blockstart+i];}
        for (i=16; i<=79; i++) {W[i] = rotate_left(W[i-3] ^ W[i-8] ^ W[i-14] ^ W[i-16], 1);}


        A = H0;
        B = H1;
        C = H2;
        D = H3;
        E = H4;

        for (i= 0; i<=19; i++) {
            temp = (rotate_left(A,5) + ((B&C) | (~B&D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }

        for (i=20; i<=39; i++) {
            temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }

        for (i=40; i<=59; i++) {
            temp = (rotate_left(A,5) + ((B&C) | (B&D) | (C&D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }

        for (i=60; i<=79; i++) {
            temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }

        H0 = (H0 + A) & 0x0ffffffff;
        H1 = (H1 + B) & 0x0ffffffff;
        H2 = (H2 + C) & 0x0ffffffff;
        H3 = (H3 + D) & 0x0ffffffff;
        H4 = (H4 + E) & 0x0ffffffff;
    }

    temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);
    return temp.toLowerCase();
}

function strcasecmp (f_string1, f_string2){
//-------------------------------------------------------
//函式: strcasecmp()
//用途: 字串比對,不分大小寫
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +     original by: Martijn Wieringa
    // +     bugfixed by: Onno Marsman
    // *         example 1: strcasecmp('Hello', 'hello');
    // *         returns 1: 0

    var string1 = (f_string1+'').toLowerCase();
    var string2 = (f_string2+'').toLowerCase();

    if (string1 > string2) {
      return 1;
    }
    else if (string1 == string2) {
      return 0;
    }

    return -1;
}

function strcmp ( str1, str2 ) {
//-------------------------------------------------------
//函式: strcmp()
//用途: 字串比對,分大小寫
//-------------------------------------------------------
    // Binary safe string comparison
    //
    // version: 1009.2513
    // discuss at: http://phpjs.org/functions/strcmp
    // +   original by: Waldo Malqui Silva
    // +      input by: Steve Hilder
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    revised by: gorthaur
    // *     example 1: strcmp( 'waldo', 'owald' );
    // *     returns 1: 1
    // *     example 2: strcmp( 'owald', 'waldo' );
    // *     returns 2: -1
    return ( ( str1 == str2 ) ? 0 : ( ( str1 > str2 ) ? 1 : -1 ) );
}

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

function stripslashes(Str){
//-------------------------------------------------------
//函式: stripslashes()
//用途: stripslashes
//-------------------------------------------------------
	return (Str+'').replace(/\0/g,'0').replace(/\\([\\'"])/g,'$1');
}

function strip_space(string){
//-------------------------------------------------------
//函式: strip_space()
//用途: 去除全部的空白字元
//-------------------------------------------------------

    //參數檢驗
    if((string==undefined)||(trim(string)=='')){
        return "";
    }
    string=string.toString();

    //處理
    return string.replace(/\s*/g,"");

    //子函式
    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function strip_tags (input, allowed) {
//-------------------------------------------------------
//函式: strip_tags()
//用途: 移除標籤,支援保留特標籤
//-------------------------------------------------------
    // Strips HTML and PHP tags from a string
    //
    // version: 1009.2513
    // discuss at: http://phpjs.org/functions/strip_tags
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Luke Godfrey
    // +      input by: Pul
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Onno Marsman
    // +      input by: Alex
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Marc Palau
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Eric Nagel
    // +      input by: Bobby Drake
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Tomasz Wesolowski
    // +      input by: Evertjan Garretsen
    // +    revised by: Rafa? Kukawski (http://blog.kukawski.pl/)
    // *     example 1: strip_tags('<p>Kevin</p> <b>van</b> <i>Zonneveld</i>', '<i><b>');
    // *     returns 1: 'Kevin <b>van</b> <i>Zonneveld</i>'
    // *     example 2: strip_tags('<p>Kevin <img src="someimage.png" onmouseover="someFunction()">van <i>Zonneveld</i></p>', '<p>');
    // *     returns 2: '<p>Kevin van Zonneveld</p>'
    // *     example 3: strip_tags("<a href='http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>", "<a>");
    // *     returns 3: '<a href='http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>'
    // *     example 4: strip_tags('1 < 5 5 > 1');
    // *     returns 4: '1 < 5 5 > 1'
    // *     example 5: strip_tags('1 <br/> 1');
    // *     returns 5: '1  1'
    // *     example 6: strip_tags('1 <br/> 1', '<br>');
    // *     returns 6: '1  1'
    // *     example 7: strip_tags('1 <br/> 1', '<br><br/>');
    // *     returns 7: '1 <br/> 1'
           allowed = (((allowed || "") + "")
              .toLowerCase()
              .match(/<[a-z][a-z0-9]*>/g) || [])
              .join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
           var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
               commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
           return input.replace(commentsAndPhpTags, '').replace(tags, function($0, $1){
              return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
           });
}

function stristr (haystack, needle, bool) {
//-------------------------------------------------------
//函式: stristr()
//用途: 搜尋特定字串,以第一次出現為基準,並傳回部份字串,不分大小寫
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfxied by: Onno Marsman
    // *     example 1: stristr('Kevin van Zonneveld', 'Van');
    // *     returns 1: 'van Zonneveld'
    // *     example 2: stristr('Kevin van Zonneveld', 'VAN', true);
    // *     returns 2: 'Kevin '

    var pos = 0;

    haystack += '';
    pos = haystack.toLowerCase().indexOf( (needle+'').toLowerCase() );
    if (pos == -1){
        return false;
    } else{
        if (bool) {
            return haystack.substr( 0, pos );
        } else{
            return haystack.slice( pos );
        }
    }
}

function strleft(string,n){
//-------------------------------------------------------
//函式: strleft()
//用途: 由左至右依序取回N個字元
//-------------------------------------------------------

    //參數檢驗
    if((string==undefined)||(trim(string)=='')){
        return '';
    }
    if((n==undefined)||(isNaN(n))){
        return '';
    }

    string=string.toString();
    n=parseInt(n);

    //處理
    var len   =string.length;
    var result=string.substr(0,n);

    //回傳
    return result;

    //子函式
    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function strncasecmp (argStr1, argStr2, len) {
//-------------------------------------------------------
//函式: strncasecmp()
//用途: 指定長度進行字串比對,不分大小寫
//-------------------------------------------------------
    // Binary safe string comparison
    //
    // version: 1009.2513
    // discuss at: http://phpjs.org/functions/strncasecmp
    // +   original by: Saulo Vallory
    // +      input by: Nate
    // +   bugfixed by: Onno Marsman
    // %          note: Returns < 0 if str1 is less than str2 ; > 0 if str1 is greater than str2 , and 0 if they are equal.
    // *     example 1: strncasecmp('Price 12.9', 'Price 12.15', 2);
    // *     returns 1: 0
    // *     example 2: strncasecmp('Price 12.09', 'Price 12.15', 10);
    // *     returns 2: -1
    // *     example 3: strncasecmp('Price 12.90', 'Price 12.15', 30);
    // *     returns 3: 8
    // *     example 4: strncasecmp('Version 12.9', 'Version 12.15', 20);
    // *     returns 4: 8
    // *     example 5: strncasecmp('Version 12.15', 'Version 12.9', 20);
    // *     returns 5: -8
    var diff, i = 0;
    var str1 = (argStr1+'').toLowerCase().substr(0,len);
    var str2 = (argStr2+'').toLowerCase().substr(0,len);

    if (str1.length !== str2.length) {
        if (str1.length < str2.length) {
            len = str1.length;
            if (str2.substr(0, str1.length) == str1) {
                return str1.length - str2.length; // return the difference of chars
            }
        } else {
            len = str2.length;
            // str1 is longer than str2
            if (str1.substr(0, str2.length) == str2) {
                return str1.length - str2.length; // return the difference of chars
            }
        }
    } else {
        // Avoids trying to get a char that does not exist
        len = str1.length;
    }

    for (diff = 0, i=0; i < len; i++) {
        diff = str1.charCodeAt(i) - str2.charCodeAt(i);
        if (diff !== 0) {
            return diff;
        }
    }

    return 0;
}

function strncmp ( str1, str2, lgth ) {
//-------------------------------------------------------
//函式: strncmp()
//用途: 指定長度進行字串比對,分大小寫
//-------------------------------------------------------
    // Binary safe string comparison
    //
    // version: 1009.2513
    // discuss at: http://phpjs.org/functions/strncmp
    // +      original by: Waldo Malqui Silva
    // +         input by: Steve Hilder
    // +      improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +       revised by: gorthaur
    // + reimplemented by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: strncmp('aaa', 'aab', 2);
    // *     returns 1: 0
    // *     example 2: strncmp('aaa', 'aab', 3 );
    // *     returns 2: -1
    var s1 = (str1+'').substr(0, lgth);
    var s2 = (str2+'').substr(0, lgth);

    return ( ( s1 == s2 ) ? 0 : ( ( s1 > s2 ) ? 1 : -1 ) );
}

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
function strrchr (haystack, needle) {
//-------------------------------------------------------
//函式: strrchr()
//用途: 搜尋特定字元,以最後一次出現為基準,並傳回部份字串,分大小寫
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // +   input by: Jason Wong (http://carrot.org/)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: strrchr("Line 1\nLine 2\nLine 3", 10).substr(1)
    // *     returns 1: 'Line 3'

    var pos = 0;

    if (typeof needle !== 'string') {
        needle = String.fromCharCode(parseInt(needle, 10));
    }
    needle = needle.charAt(0);
    pos = haystack.lastIndexOf(needle);
    if (pos === -1) {
        return false;
    }

    return haystack.substr(pos);
}

function strrev(string){
//-------------------------------------------------------
//函式: strrev()
//用途: 字串反轉
//-------------------------------------------------------

    //參數檢驗
    if((string==undefined)||(trim(string)=='')){
        return '';
    }
    string=string.toString();

    //處理
    var len     =string.length;
    var result  ="";
    var arry_tmp=[];
    for(var i=0;i<len;i++){
        arry_tmp.push(string.substr(i,1));
    }
    arry_tmp.reverse();
    result=arry_tmp.join('');

    //回傳
    return result;

    //子函式
    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function strright(string,n){
//-------------------------------------------------------
//函式: strright()
//用途: 由右至左依序取回N個字元
//-------------------------------------------------------

    //參數檢驗
    if((string==undefined)||(trim(string)=='')){
        return '';
    }
    if((n==undefined)||(isNaN(n))){
        return '';
    }

    string=string.toString();
    n=parseInt(n);

    //處理
    var result=string.substr((string.length-1)-(n-1),n);

    //回傳
    return result;

    //子函式
    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

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

function strstr (haystack, needle, bool) {
//-------------------------------------------------------
//函式: strstr()
//用途: 搜尋特定字串,以第一次出現為基準,並傳回部份字串,分大小寫
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Onno Marsman
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // *     example 1: strstr('Kevin van Zonneveld', 'van');
    // *     returns 1: 'van Zonneveld'
    // *     example 2: strstr('Kevin van Zonneveld', 'van', true);
    // *     returns 2: 'Kevin '
    // *     example 3: strstr('name@example.com', '@');
    // *     returns 3: '@example.com'
    // *     example 4: strstr('name@example.com', '@', true);
    // *     returns 4: 'name'

    var pos = 0;

    haystack += '';
    pos = haystack.indexOf( needle );
    if (pos == -1) {
        return false;
    } else{
        if (bool){
            return haystack.substr( 0, pos );
        } else{
            return haystack.slice( pos );
        }
    }
}

function strtolower(string){
//-------------------------------------------------------
//函式: strtolower()
//用途: 字串轉小寫
//-------------------------------------------------------

    //參數檢驗
    if((string==undefined)||(trim(string)=='')){
        return '';
    }

    string=string.toString();

    //處理
    string=string.toLowerCase();

    //回傳
    return string;

    //子函式
    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function strtoupper(string){
//-------------------------------------------------------
//函式: strtoupper()
//用途: 字串轉大寫
//-------------------------------------------------------

    //參數檢驗
    if((string==undefined)||(trim(string)=='')){
        return '';
    }

    string=string.toString();

    //處理
    string=string.toUpperCase();

    //回傳
    return string;

    //子函式
    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function str_repeat(string,n){
//-------------------------------------------------------
//str_repeat(字串,次數) 重複字串N次
//-------------------------------------------------------

    //參數檢驗
    if((string==undefined)||(trim(string)=='')){
        return '';
    }
    if((n==undefined)||(isNaN(n))){
        return '';
    }

    string=string.toString();
    n=parseInt(n);

    //處理
    var result  ="";
    var arry_tmp=[];
    for(var i=1;i<=n;i++){
        arry_tmp.push(string);
    }
    result=arry_tmp.join('');

    //回傳
    return result;

    //子函式
    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function str_replace (search, replace, subject, count) {
//-------------------------------------------------------
//函式: str_replace()
//用途: 字串取代
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Gabriel Paderni
    // +   improved by: Philip Peterson
    // +   improved by: Simon Willison (http://simonwillison.net)
    // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   bugfixed by: Anton Ongson
    // +      input by: Onno Marsman
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    tweaked by: Onno Marsman
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   input by: Oleg Eremeev
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Oleg Eremeev
    // %          note 1: The count parameter must be passed as a string in order
    // %          note 1:  to find a global variable in which the result will be given
    // *     example 1: str_replace(' ', '.', 'Kevin van Zonneveld');
    // *     returns 1: 'Kevin.van.Zonneveld'
    // *     example 2: str_replace(['{name}', 'l'], ['hello', 'm'], '{name}, lars');
    // *     returns 2: 'hemmo, mars'

    var i = 0, j = 0, temp = '', repl = '', sl = 0, fl = 0,
            f = [].concat(search),
            r = [].concat(replace),
            s = subject,
            ra = r instanceof Array, sa = s instanceof Array;
    s = [].concat(s);
    if (count) {
        this.window[count] = 0;
    }

    for (i=0, sl=s.length; i < sl; i++) {
        if (s[i] === '') {
            continue;
        }
        for (j=0, fl=f.length; j < fl; j++) {
            temp = s[i]+'';
            repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];
            s[i] = (temp).split(f[j]).join(repl);
            if (count && s[i] !== temp) {
                this.window[count] += (temp.length-s[i].length)/f[j].length;}
        }
    }
    return sa ? s : s[0];
}

function str_shuffle (str) {
//-------------------------------------------------------
//函式: str_shuffle()
//用途: 打亂字串
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: shuffled = str_shuffle("abcdef");
    // *     results 1: shuffled.length == 6

    if (str == undefined) {
        throw 'Wrong parameter count for str_shuffle()';
    }

    var getRandomInt = function (max) {
        return Math.floor(Math.random() * (max + 1));
    };
    var newStr = '', rand = 0;

    while (str.length) {
        rand = getRandomInt(str.length-1);
        newStr += str.charAt(rand);
        str = str.substring(0, rand)+str.substr(rand+1);
    }

    return newStr;
}

function str_split (string, split_length) {
//-------------------------------------------------------
//函式: str_split()
//用途: 依據指定字元長度,分割字串成陣列
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +     original by: Martijn Wieringa
    // +     improved by: Brett Zamir (http://brett-zamir.me)
    // +     bugfixed by: Onno Marsman
    // +      revised by: Theriault
    // +        input by: Bjorn Roesbeke (http://www.bjornroesbeke.be/)
    // +      revised by: Rafał Kukawski (http://blog.kukawski.pl/)
    // *       example 1: str_split('Hello Friend', 3);
    // *       returns 1: ['Hel', 'lo ', 'Fri', 'end']

    //if (split_length === null) {
    //    split_length = 1;
    //}
    split_length=split_length||1;

    if (string === null || split_length < 1) {
        return false;
    }
    string += '';
    var chunks = [], pos = 0, len = string.length;
    while (pos < len) {
        chunks.push(string.slice(pos, pos += split_length));
    }

    return chunks;
}

function substr (str, start, len) {
//-------------------------------------------------------
//函式: substr()
//用途: 從特定位置取回部份字串
//-------------------------------------------------------
    // Returns part of a string
    //
    // version: 909.322
    // discuss at: http://phpjs.org/functions/substr
    // +     original by: Martijn Wieringa
    // +     bugfixed by: T.Wild
    // +      tweaked by: Onno Marsman
    // +      revised by: Theriault
    // +      improved by: Brett Zamir (http://brett-zamir.me)
    // %    note 1: Handles rare Unicode characters if 'unicode.semantics' ini (PHP6) is set to 'on'
    // *       example 1: substr('abcdef', 0, -1);
    // *       returns 1: 'abcde'
    // *       example 2: substr(2, 0, -6);
    // *       returns 2: false
    // *       example 3: ini_set('unicode.semantics',  'on');
    // *       example 3: substr('a\uD801\uDC00', 0, -1);
    // *       returns 3: 'a'
    // *       example 4: ini_set('unicode.semantics',  'on');
    // *       example 4: substr('a\uD801\uDC00', 0, 2);
    // *       returns 4: 'a\uD801\uDC00'
    // *       example 5: ini_set('unicode.semantics',  'on');
    // *       example 5: substr('a\uD801\uDC00', -1, 1);
    // *       returns 5: '\uD801\uDC00'
    // *       example 6: ini_set('unicode.semantics',  'on');
    // *       example 6: substr('a\uD801\uDC00z\uD801\uDC00', -3, 2);
    // *       returns 6: '\uD801\uDC00z'
    // *       example 7: ini_set('unicode.semantics',  'on');
    // *       example 7: substr('a\uD801\uDC00z\uD801\uDC00', -3, -1)
    // *       returns 7: '\uD801\uDC00z'

// Add: (?) Use unicode.runtime_encoding (e.g., with string wrapped in "binary" or "Binary" class) to
// allow access of binary (see file_get_contents()) by: charCodeAt(x) & 0xFF (see https://developer.mozilla.org/En/Using_XMLHttpRequest ) or require conversion first?

    var i = 0, allBMP = true, es = 0, el = 0, se = 0, ret = '';
    str += '';
    var end = str.length;

    // BEGIN REDUNDANT
    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    // END REDUNDANT
    switch(
        (this.php_js.ini['unicode.semantics'] &&
            this.php_js.ini['unicode.semantics'].local_value.toLowerCase())) {
        case 'on': // Full-blown Unicode including non-Basic-Multilingual-Plane characters
            // strlen()
            for (i=0; i < str.length; i++) {
                if (/[\uD800-\uDBFF]/.test(str.charAt(i)) && /[\uDC00-\uDFFF]/.test(str.charAt(i+1))) {
                    allBMP = false;
                    break;
                }
            }

            if (!allBMP) {
                if (start < 0) {
                    for (i = end - 1, es = (start += end); i >= es; i--) {
                        if (/[\uDC00-\uDFFF]/.test(str.charAt(i)) && /[\uD800-\uDBFF]/.test(str.charAt(i-1))) {
                            start--;
                            es--;
                        }
                    }
                }
                else {
                    var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
                    while ((surrogatePairs.exec(str)) != null) {
                        var li = surrogatePairs.lastIndex;
                        if (li - 2 < start) {
                            start++;
                        }
                        else {
                            break;
                        }
                    }
                }

                if (start >= end || start < 0) {
                    return false;
                }
                if (len < 0) {
                    for (i = end - 1, el = (end += len); i >= el; i--) {
                        if (/[\uDC00-\uDFFF]/.test(str.charAt(i)) && /[\uD800-\uDBFF]/.test(str.charAt(i-1))) {
                            end--;
                            el--;
                        }
                    }
                    if (start > end) {
                        return false;
                    }
                    return str.slice(start, end);
                }
                else {
                    se = start + len;
                    for (i = start; i < se; i++) {
                        ret += str.charAt(i);
                        if (/[\uD800-\uDBFF]/.test(str.charAt(i)) && /[\uDC00-\uDFFF]/.test(str.charAt(i+1))) {
                            se++; // Go one further, since one of the "characters" is part of a surrogate pair
                        }
                    }
                    return ret;
                }
                break;
            }
            // Fall-through
        case 'off': // assumes there are no non-BMP characters;
                           //    if there may be such characters, then it is best to turn it on (critical in true XHTML/XML)
        default:
            if (start < 0) {
                start += end;
            }
            end = typeof len === 'undefined' ? end : (len < 0 ? len + end : len + start);
            // PHP returns false if start does not fall within the string.
            // PHP returns false if the calculated end comes before the calculated start.
            // PHP returns an empty string if start and end are the same.
            // Otherwise, PHP returns the portion of the string from start to end.
            return start >= str.length || start < 0 || start > end ? !1 : str.slice(start, end);
    }
    return undefined; // Please Netbeans
}

function ltrim(str){
//-------------------------------------------------------
//函式: ltrim
//用途: 去左邊空白字元
//-------------------------------------------------------
    str=str.toString();
    return str.replace(/^\s*/,"");
}

function rtrim(str){
//-------------------------------------------------------
//函式: rtrim()
//用途: 去右邊空白字元
//-------------------------------------------------------
    str=str.toString();
    return str.replace(/\s*$/,"");
}

function chop(str){
//-------------------------------------------------------
//函式: chop()
//用途: 去右邊空白字元
//-------------------------------------------------------
    str=str.toString();
    return str.replace(/\s*$/,"");
}

function trim(str){
//-------------------------------------------------------
//函式: trim()
//用途: 去前後空白字元
//-------------------------------------------------------
    str=str.toString();
    str=str.replace(/^\s+/,'');
    str=str.replace(/\s+$/,'');
    return str;
}

function ucfirst(string){
//-------------------------------------------------------
//函式: ucfirst()
//用途: 字首大寫
//-------------------------------------------------------

    //參數檢驗
    if((string==undefined)||(trim(string)=='')){
        return '';
    }

    string=string.toString();

    //處理
    if(trim(string.length)===1){
        var result=string.toUpperCase();
    }else{
        var len   =string.length;
        var first =string.substr(0,1);
        var part  =string.substr(1,len-1);
        var result=(first.toUpperCase())+part;
    }

    //回傳
    return result;

    //子函式
    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function ucwords(string){
//-------------------------------------------------------
//函式: ucwords()
//用途: 單字字首大寫,每個單字均會套用
//-------------------------------------------------------

    //參數檢驗
    if((string==undefined)||(trim(string)=='')){
        return '';
    }

    string=string.toString();

    //處理
    var arry=string.split(" ");
    var arry_tmp=[];
    for(var i=0;i<arry.length;i++){
        var tmp     =arry[i];
        var len     =tmp.length;
        var first   =tmp.substr(0,1);
        var part    =tmp.substr(1,len-1);
        var result  =first.toUpperCase()+part;
        arry_tmp.push(result);
    }

    //回傳
    return arry_tmp.join(" ");

    //子函式
    function trim(str){
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function urldecode (str) {
    // http://kevin.vanzonneveld.net
    // +   original by: Philip Peterson
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: AJ
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +      input by: travc
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Lars Fischer
    // +      input by: Ratheous
    // +   improved by: Orlando
    // +      reimplemented by: Brett Zamir (http://brett-zamir.me)
    // +      bugfixed by: Rob
    // +      input by: e-mike
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // %        note 1: info on what encoding functions to use from: http://xkr.us/articles/javascript/encode-compare/
    // %        note 2: Please be aware that this function expects to decode from UTF-8 encoded strings, as found on
    // %        note 2: pages served as UTF-8
    // *     example 1: urldecode('Kevin+van+Zonneveld%21');
    // *     returns 1: 'Kevin van Zonneveld!'
    // *     example 2: urldecode('http%3A%2F%2Fkevin.vanzonneveld.net%2F');
    // *     returns 2: 'http://kevin.vanzonneveld.net/'
    // *     example 3: urldecode('http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3Dphp.js%26ie%3Dutf-8%26oe%3Dutf-8%26aq%3Dt%26rls%3Dcom.ubuntu%3Aen-US%3Aunofficial%26client%3Dfirefox-a');
    // *     returns 3: 'http://www.google.nl/search?q=php.js&ie=utf-8&oe=utf-8&aq=t&rls=com.ubuntu:en-US:unofficial&client=firefox-a'

    return decodeURIComponent((str+'').replace(/\+/g, '%20'));
}

function utf8_encode ( argString ) {
    // http://kevin.vanzonneveld.net
    // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: sowberry
    // +    tweaked by: Jack
    // +   bugfixed by: Onno Marsman
    // +   improved by: Yves Sucaet
    // +   bugfixed by: Onno Marsman
    // +   bugfixed by: Ulrich
    // *     example 1: utf8_encode('Kevin van Zonneveld');
    // *     returns 1: 'Kevin van Zonneveld'

    var string = (argString+''); // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");

    var utftext = "";
    var start, end;
    var stringl = 0;

    start = end = 0;
    stringl = string.length;
    for (var n = 0; n < stringl; n++) {
        var c1 = string.charCodeAt(n);
        var enc = null;

        if (c1 < 128) {
            end++;
        } else if (c1 > 127 && c1 < 2048) {
            enc = String.fromCharCode((c1 >> 6) | 192) + String.fromCharCode((c1 & 63) | 128);
        } else {
            enc = String.fromCharCode((c1 >> 12) | 224) + String.fromCharCode(((c1 >> 6) & 63) | 128) + String.fromCharCode((c1 & 63) | 128);
        }
        if (enc !== null) {
            if (end > start) {
                utftext += string.substring(start, end);
            }
            utftext += enc;
            start = end = n+1;
        }
    }

    if (end > start) {
        utftext += string.substring(start, string.length);
    }

    return utftext;
}
