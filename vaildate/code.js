//-------------------------------------------------------
//vaildate
//-------------------------------------------------------
//ch_cellphone()        檢核手機
//ch_date()             檢核日期
//ch_datetime()         檢核日期時間
//ch_email()            檢核電子郵件
//ch_floatlen()         檢核浮點數長度
//ch_homephone()        檢核台灣地區電話
//ch_intlen()           檢核整數長度
//ch_ipv4()             檢核IP,格式IPv4
//ch_isbn               檢核isbn碼(10+13)
//ch_isbn_country       檢核isbn碼所在位置(參考...)
//ch_isfloat()          檢核是否為浮點數
//ch_isint()            檢核是否為整數
//ch_isnumeric()        檢核是否是數字
//ch_len()              檢核長度
//ch_lenbetween()       檢核長度範圍
//ch_macaddr()          檢核網卡mac
//ch_month()            檢核月份
//ch_postzip()          檢核台灣地區郵遞區號
//ch_time()             檢核時間
//ch_twsid()            檢核台灣地區身分證字號
//ch_valbetween()       檢核值範圍
//ch_year()             檢核年份

function ch_cellphone(val){
//-------------------------------------------------------
//函式: ch_cellphone()
//用途: 檢核手機
//-------------------------------------------------------
//val   值
//
//規則:
//1.手機號碼 10碼
//2.手機號碼 均數字
//3.手機號碼 開頭為09
//-------------------------------------------------------

    //檢核參數
    if((val==undefined)||(trim(val)=='')){
        return false;
    }

    //驗證
    var exp=/^(09){1}(\d){8}$/;
    if(exp.test(trim(val))){
        return true;
    }else{
        return false;
    }

    function trim(str){
    //去除字串前後空白
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function ch_date(val,type){
//-------------------------------------------------------
//函式: ch_date()
//用途: 檢核日期
//-------------------------------------------------------
//val   值
//type  類型
//      yyyy-mm-dd
//      yyyy/mm/dd
//      yyyy.mm.dd
//      mm-dd-yyyy
//      mm/dd/yyyy
//      mm.dd.yyyy
//
//注意:年份最小值1000至9999年
//-------------------------------------------------------

    if((val==undefined)||(val=='')){
        return false;
    }
    if((type==undefined)||(type=='')){
        type='yyyy-mm-dd';
    }

    var exp_year="[1-9][0-9][0-9]{2}";
    var exp_mon ="(0?[1-9]|1[012])";
    var exp_date="(0?[1-9]|(1|2)[0-9]|3[01])";
    var exp_del ="";

    switch(type.toLowerCase()){
        //For yyyymmdd
        case 'yyyy-mm-dd':
            exp_del ="-";
            val=trim(val);
            return yyyymmdd(val,exp_del);
            break;

        case 'yyyy/mm/dd':
            exp_del ="/";
            val=trim(val);
            return yyyymmdd(val,exp_del);
            break;

        case 'yyyy.mm.dd':
            exp_del =".";
            val=trim(val);
            return yyyymmdd(val,exp_del);
            break;

        //For mmddyyyy
        case 'mm-dd-yyyy':
            exp_del ="-";
            val=trim(val);
            return mmddyyyy(val,exp_del);
            break;

        case 'mm/dd/yyyy':
            exp_del ="/";
            val=trim(val);
            return mmddyyyy(val,exp_del);
            break;

        case 'mm.dd.yyyy':
            exp_del =".";
            val=trim(val);
            return mmddyyyy(val,exp_del);
            break;
    }

    function yyyymmdd(val,exp_del){
    //驗證 yyyymmdd
        var exp1="^"+exp_year+exp_del+exp_mon+exp_del+exp_date+"$";
        var exp1=new RegExp(exp1);
        if(exp1.test(val)){

            var arry=val.split(exp_del);
            var year=arry[0];
            var mon =arry[1];
            var date=arry[2];

            //檢查天數
            if(date<=(new Date(year,mon,0).getDate())){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

    function mmddyyyy(val,exp_del){
    //驗證 mmddyyyy
        var exp1="^"+exp_mon+exp_del+exp_date+exp_del+exp_year+"$";
        var exp1=new RegExp(exp1);
        if(exp1.test(val)){

            var arry=val.split(exp_del);
            var year=arry[2];
            var mon =arry[0];
            var date=arry[1];

            //檢查天數
            if(date<=(new Date(year,mon,0).getDate())){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

    function trim(str){
    //去除字串前後空白
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function ch_datetime(val,type){
//-------------------------------------------------------
//函式: ch_datetime()
//用途: 檢核日期時間
//-------------------------------------------------------
//val   值
//type  類型
//      yyyy-mm-dd
//      yyyy/mm/dd
//      yyyy.mm.dd
//      mm-dd-yyyy
//      mm/dd/yyyy
//      mm.dd.yyyy
//
//注意0:如果傳入val值,含有時間時,本函式會順便驗證時間
//注意1:年份最小值1000至9999年
//注意2:本函式允許下列時間表示法
//
//hh:mm:ss  補零    01:02:03
//hh:mm:ss  不補零  1:2:3
//hh:mm:ss  混雜    01:2:3
//-------------------------------------------------------

    if((val==undefined)||(val=='')){
        return false;
    }
    if((type==undefined)||(type=='')){
        type='yyyy-mm-dd';
    }

    var exp_year="[1-9][0-9][0-9]{2}";
    var exp_mon ="(0?[1-9]|1[012])";
    var exp_date="(0?[1-9]|(1|2)[0-9]|3[01])";
    var exp_hour="(0{1,2}|0?[1-9]|1[0-9]|2[0-3])";
    var exp_min ="(0{1,2}|0?[1-9]|[1-5][0-9])";
    var exp_sec ="(0{1,2}|0?[1-9]|[1-5][0-9])";
    var exp_time=exp_hour+":"+exp_min+":"+exp_sec;
    var exp_del ="";

    switch(type.toLowerCase()){
        //For yyyymmddhhmmss
        case 'yyyy-mm-dd':
            exp_del ="-";
            val=trim(val);
            return yyyymmddhhmmss(val,exp_del,exp_time);
            break;

        case 'yyyy/mm/dd':
            exp_del ="/";
            val=trim(val);
            return yyyymmddhhmmss(val,exp_del,exp_time);
            break;

        case 'yyyy.mm.dd':
            exp_del =".";
            val=trim(val);
            return yyyymmddhhmmss(val,exp_del,exp_time);
            break;

        //For mmddyyyyhhmmss
        case 'mm-dd-yyyy':
            exp_del ="-";
            val=trim(val);
            return mmddyyyyhhmmss(val,exp_del,exp_time);
            break;

        case 'mm/dd/yyyy':
            exp_del ="/";
            val=trim(val);
            return mmddyyyyhhmmss(val,exp_del,exp_time);
            break;

        case 'mm.dd.yyyy':
            exp_del =".";
            val=trim(val);
            return mmddyyyyhhmmss(val,exp_del,exp_time);
            break;
    }

    function yyyymmddhhmmss(val,exp_del,exp_time){
    //驗證 yyyymmddhhmmss
        var exp1="^"+exp_year+exp_del+exp_mon+exp_del+exp_date+"("+"\\s"+exp_time+")?"+"$";
        var exp1=new RegExp(exp1);
        if(exp1.test(val)){

            var arry=val.split(' ');
            arry=(arry[0]).split(exp_del);
            var year=arry[0];
            var mon =arry[1];
            var date=arry[2];

            //檢查天數
            if(date<=(new Date(year,mon,0).getDate())){

                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

    function mmddyyyyhhmmss(val,exp_del,exp_time){
    //驗證 mmddyyyyhhmmss
        var exp1="^"+exp_mon+exp_del+exp_date+exp_del+exp_year+"("+"\\s"+exp_time+")?"+"$";

        var exp1=new RegExp(exp1);
        if(exp1.test(val)){

            var arry=val.split(' ');
            arry=(arry[0]).split(exp_del);
            var year=arry[2];
            var mon =arry[0];
            var date=arry[1];

            //檢查天數
            if(date<=(new Date(year,mon,0).getDate())){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

    function trim(str){
    //去除字串前後空白
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function ch_email(val){
//-------------------------------------------------------
//函式: ch_email()
//用途: 檢核電子郵件
//-------------------------------------------------------
//val   值
//-------------------------------------------------------

    //檢核參數
    if((val==undefined)||(trim(val)=='')){
        return false;
    }

    //驗證
    var exp=/^[a-zA-Z0-9]+[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
    if(exp.test(trim(val))){
        return true;
    }else{
        return false;
    }

    function trim(str){
    //去除字串前後空白
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function ch_floatlen(val,ilen,flen,sign,equal){
//-------------------------------------------------------
//函式: ch_floatlen()
//用途: 檢核浮點數長度
//-------------------------------------------------------
//val   值
//ilen  整數長度
//flen  小數長度
//
//sign  是否允許有負的
//      true  --> 值可以為正或負,預設
//      false --> 值僅可以為正
//
//equal 是否完全符合
//      true  --> 長度必須一樣
//      false --> 長度最少要等於,預設
//-------------------------------------------------------

    //檢核參數
    if((val==undefined)||(trim(val)=='')){
        return false;
    }
    if(sign==undefined){
        sign=true;
    }
    if(equal==undefined){
        equal=false;
    }

    //驗證
    val=trim(val);
    if(isNaN(val)){
        return false;
    }

    //正負判斷
    if(sign==false){
        //僅允許正值
        var exp=/^(\d)+(\.){1}(\d)+$/;
        if(!exp.test(val)){
            return false;
        }else{
            //長度判斷
            if(equal==false){
                var exp="^(\\d){"+ilen+",}(\\.){1}(\\d){"+flen+",}$";
            }else{
                var exp="^(\\d){"+ilen+"}(\\.){1}(\\d){"+flen+"}$";
            }

            var exp=new RegExp(exp);
            if(!exp.test(val)){
                return false;
            }else{
                return true;
            }
        }
    }else{
        //允許正或負值

        var exp=/^(\-)?(\d)+(\.){1}(\d)+$/;
        if(!exp.test(val)){
            return false;
        }else{
            //長度判斷
            if(equal==false){
                var exp="^(\\-)?(\\d){"+ilen+",}(\\.){1}(\\d){"+flen+",}$";
            }else{
                var exp="^(\\-)?(\\d){"+ilen+"}(\\.){1}(\\d){"+flen+"}$";
            }

            var exp=new RegExp(exp);
            if(!exp.test(val)){
                return false;
            }else{
                return true;
            }
        }
    }

    function trim(str){
    //去除字串前後空白
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function ch_homephone(val){
//-------------------------------------------------------
//函式: ch_homephone()
//用途: 檢核台灣地區電話
//-------------------------------------------------------
//val   值
//
//規則: 區碼-號碼
//區碼:需0開頭,接者是2開始到9,長度2到4
//號碼:至少6碼,全部都是數字0到9
//-------------------------------------------------------

    //檢核參數
    if((val==undefined)||(trim(val)=='')){
        return false;
    }

    //驗證
    var exp=/^(0){1}[2-9]{1,3}-(\d){6,}$/;
    if(exp.test(trim(val))){
        return true;
    }else{
        return false;
    }

    function trim(str){
    //去除字串前後空白
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function ch_intlen(val,ilen,sign,equal){
//-------------------------------------------------------
//函式: ch_intlen()
//用途: 檢核整數長度
//-------------------------------------------------------
//val   值
//ilen  整數長度
//
//sign  是否允許有負的
//      true  --> 值可以為正或負,預設
//      false --> 值僅可以為正
//
//equal 是否完全符合
//      true  --> 長度必須一樣
//      false --> 長度最少要等於,預設
//-------------------------------------------------------

    //檢核參數
    if((val==undefined)||(trim(val)=='')){
        return false;
    }
    if(sign==undefined){
        sign=true;
    }
    if(equal==undefined){
        equal=false;
    }

    //驗證
    if(isNaN(val)){
        return false;
    }else if((val.toString()).indexOf('.')!=-1){
        return false;
    }else{
        val=trim(val);
    }

    //正負判斷
    if(sign==false){
        //僅允許正值
        var exp=/^\d+$/;

        if(!exp.test(val)){
            return false;
        }else{
            //長度判斷
            if(equal==false){
                var exp="^\\d{"+ilen+",}$";
            }else{
                var exp="^\\d{"+ilen+"}$";
            }

            var exp=new RegExp(exp);
            if(!exp.test(val)){
                return false;
            }else{
                return true;
            }
        }
    }else{
        //允許正或負值

        var exp=/^(\-)?(\d)+$/;

        if(!exp.test(val)){
            return false;
        }else{
            //長度判斷
            if(equal==false){
                var exp="^(\\-)?(\\d){"+ilen+",}$";
            }else{
                var exp="^(\\-)?(\\d){"+ilen+"}$";
            }

            var exp=new RegExp(exp);
            if(!exp.test(val)){
                return false;
            }else{
                return true;
            }
        }
    }

    function trim(str){
    //去除字串前後空白
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function ch_ipv4(val){
//-------------------------------------------------------
//函式: ch_ipv4()
//用途: 檢核IP,格式IPv4
//-------------------------------------------------------
//val   值
//-------------------------------------------------------

    //參數檢驗
    if((val=="")||(val==undefined)){return false;}

    //正規式
    var exp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;

    //驗證
    val=trim(val);

    if(val=='255.255.255.255'){
        return true;
    }

    if (exp.test(val)){
        var arry=val.split(".");

        if(parseInt(arry[0])==0){
            return false;
        }

        if(parseInt(arry[3])==0){
            return false;
        }

        for(var i=0;i<arry.length;i++){
            if(parseInt(arry[i])>254){
                return false;
            }
        }
        return true;
    }else{
        return false;
    }

    function trim(str){
    //去除字串前後空白
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

    var ISBN  = {
      VERSION: '0.01',
      GROUPS: {
        '0': {
          'name': 'English speaking area',
          'ranges': [['00', '19'], ['200', '699'], ['7000', '8499'], ['85000', '89999'], ['900000', '949999'], ['9500000', '9999999']]
        },
        '1': {
          'name': 'English speaking area',
          'ranges': [['00', '09'], ['100', '399'], ['4000', '5499'], ['55000', '86979'], ['869800', '998999']]
        },
        '4': {
          'name': 'Japan',
          'ranges': [['00','19'], ['200','699'], ['7000','8499'], ['85000','89999'], ['900000','949999'], ['9500000','9999999']]
        }
      },

      _isbn: function () {
        this._initialize.apply(this, arguments);
      },

      parse: function(val, groups) {
        var me = new ISBN._isbn(val, groups ? groups : ISBN.GROUPS);
        return me.isValid() ? me : null;
      },

      hyphenate: function(val) {
        var me = ISBN.parse(val);
        return me ? me.isIsbn13() ? me.asIsbn13(true) : me.asIsbn10(true) : null;
      },

      asIsbn13: function(val, hyphen) {
        var me = ISBN.parse(val);
        return me ? me.asIsbn13(hyphen) : null;
      },

      asIsbn10: function(val, hyphen) {
        var me = ISBN.parse(val);
        return me ? me.asIsbn10(hyphen) : null;
      }
    };

    ISBN._isbn.prototype = {
      isValid: function() {
        return this.codes && this.codes.isValid;
      },

      isIsbn13: function() {
        return this.isValid() && this.codes.isIsbn13;
      },

      isIsbn10: function() {
        return this.isValid() && this.codes.isIsbn10;
      },

      asIsbn10: function(hyphen) {
        return this.isValid() ? hyphen ? this.codes.isbn10h : this.codes.isbn10 : null;
      },

      asIsbn13: function(hyphen) {
        return this.isValid() ? hyphen ? this.codes.isbn13h : this.codes.isbn13 : null;
      },

      _initialize: function(val, groups) {
        this.groups = groups;
        this.codes = this._parse(val);
      },

      _merge: function(lobj, robj) {
        if (!lobj || !robj)
          return null;
        for (var key in robj)
          lobj[key] = robj[key];
        return lobj;
      },

      _parse: function(val) {
        var ret =
          val.match(/^\d{9}[\dX]$/) ?
            this._fill(
              this._merge({source: val, isValid: true, isIsbn10: true, isIsbn13: false}, this._split(val))) :
          val.length == 13 && val.match(/^(\d+)-(\d+)-(\d+)-([\dX])$/) ?
            this._fill({
              source: val, isValid: true, isIsbn10: true, isIsbn13: false, group: RegExp.$1, publisher: RegExp.$2,
              article: RegExp.$3, check: RegExp.$4}) :
          val.match(/^(978|979)(\d{9}[\dX]$)/) ?
            this._fill(
              this._merge({source: val, isValid: true, isIsbn10: false, isIsbn13: true, prefix: RegExp.$1},
              this._split(RegExp.$2))) :
          val.length == 17 && val.match(/^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/) ?
            this._fill({
              source: val, isValid: true, isIsbn10: false, isIsbn13: true, prefix: RegExp.$1, group: RegExp.$2,
              publisher: RegExp.$3, article: RegExp.$4, check: RegExp.$5}) :
            null;
        return ret || {source: val, isValid: false};
      },

      _split: function(isbn) {
        return (
          !isbn ?
            null :
          isbn.length == 13 ?
            this._merge(this._split(isbn.substr(3)), {prefix: isbn.substr(0, 3)}) :
          isbn.length == 10 ?
            this._splitToObject(isbn) :
            null);
      },

      _splitToArray: function(isbn10) {
        var rec = this._getGroupRecord(isbn10);
        if (!rec)
          return null;

        for (var key, i = 0, m = rec.record.ranges.length; i < m; ++i) {
          key = rec.rest.substr(0, rec.record.ranges[i][0].length);
          if (rec.record.ranges[i][0] <= key && rec.record.ranges[i][1] >= key) {
            var rest = rec.rest.substr(key.length);
            return [
              rec.group, key, rest.substr(0, rest.length - 1), rest.charAt(rest.length - 1)];
          }
        }
        return null;
      },

      _splitToObject: function(isbn10) {
        var a = this._splitToArray(isbn10);
        if (!a || a.length != 4)
          return null;
        return {group: a[0], publisher: a[1], article: a[2], check: a[3]};
      },

      _fill: function(codes) {
        if (!codes)
          return null;

        var rec = this.groups[codes.group];
        if (!rec)
          return null;

        var prefix = codes.prefix ? codes.prefix : '978';
        var ck10 = this._calcCheckDigit([
          codes.group, codes.publisher, codes.article].join(''));
        if (!ck10)
          return null;

        var ck13 = this._calcCheckDigit([
          prefix, codes.group, codes.publisher, codes.article].join(''));
        if (!ck13)
          return null;

        var parts13 = [prefix, codes.group, codes.publisher, codes.article, ck13];
        this._merge(codes, {
          isbn13: parts13.join(''), isbn13h: parts13.join('-'),
          check10: ck10, check13: ck13, groupname: rec.name});

        if (prefix == '978') {
          var parts10 = [codes.group, codes.publisher, codes.article, ck10];
          this._merge(codes, {isbn10: parts10.join(''), isbn10h: parts10.join('-')});
        }

        return codes;
      },

      _getGroupRecord: function(isbn10) {
        for (var key in this.groups) {
          if (isbn10.match('^' + key + '(.+)'))
            return {group: key, record: this.groups[key], rest: RegExp.$1};
        }
        return null;
      },

      _calcCheckDigit: function(isbn) {
        if (isbn.match(/^\d{9}[\dX]?$/)) {
          var c = 0;
          for (var n = 0; n < 9; ++n)
            c += (10 - n) * isbn.charAt(n);
          c = (11 - c % 11) % 11;
          return c == 10 ? 'X' : String(c);

        } else if (isbn.match(/(?:978|979)\d{9}[\dX]?/)) {
          var c = 0;
          for (var n = 0; n < 12; n += 2)
            c += Number(isbn.charAt(n)) + 3 * isbn.charAt(n + 1);
          return String((10 - c % 10) % 10);
        }

        return null;
      }
    };

    // isbn-groups.js
    // generated by mkgroups.pl
    if (typeof ISBN == 'undefined')
      var ISBN = {};

    // referred: http://www.isbn-international.org/converter/ranges.htm
    // frequently, you need to update the following table. what a nice specification!
    ISBN.GROUPS_VERSION = '20090129';
    ISBN.GROUPS = {
      "0": {
        "name": "English speaking area",
        "ranges": [["00", "19"], ["200", "699"], ["7000", "8499"], ["85000", "89999"], ["900000", "949999"], ["9500000", "9999999"]]
      },
      "1": {
        "name": "English speaking area",
        "ranges": [["00", "09"], ["100", "399"], ["4000", "5499"], ["55000", "86979"], ["869800", "998999"]]
      },
      "2": {
        "name": "French speaking area",
        "ranges": [["00", "19"], ["200", "349"], ["35000", "39999"], ["400", "699"], ["7000", "8399"], ["84000", "89999"], ["900000", "949999"], ["9500000", "9999999"]]
      },
      "3": {
        "name": "German speaking area",
        "ranges": [["00", "02"], ["030", "033"], ["0340", "0369"], ["03700", "03999"], ["04", "19"], ["200", "699"], ["7000", "8499"], ["85000", "89999"], ["900000", "949999"], ["9500000", "9539999"], ["95400", "96999"], ["9700000", "9899999"], ["99000", "99499"], ["99500", "99999"]]
      },
      "4": {
        "name": "Japan",
        "ranges": [["00", "19"], ["200", "699"], ["7000", "8499"], ["85000", "89999"], ["900000", "949999"], ["9500000", "9999999"]]
      },
      "5": {
        "name": "Russian Federation",
        "ranges": [["00", "19"], ["200", "420"], ["4210", "4299"], ["430", "430"], ["4310", "4399"], ["440", "440"], ["4410", "4499"], ["450", "699"], ["7000", "8499"], ["85000", "89999"], ["900000", "909999"], ["91000", "91999"], ["9200", "9299"], ["93000", "94999"], ["9500", "9799"], ["98000", "98999"], ["9900000", "9909999"], ["9910", "9999"]]
      },
      "600": {
        "name": "Iran",
        "ranges": [["00", "09"], ["100", "499"], ["5000", "8999"], ["90000", "99999"]]
      },
      "601": {
        "name": "Kazakhstan",
        "ranges": [["00", "19"], ["200", "699"], ["7000", "7999"], ["80000", "84999"], ["85", "99"]]
      },
      "602": {
        "name": "Indonesia",
        "ranges": [["00", "19"], ["200", "799"], ["8000", "9499"], ["95000", "99999"]]
      },
      "603": {
        "name": "Saudi Arabia",
        "ranges": [["00", "04"], ["500", "799"], ["8000", "8999"], ["90000", "99999"]]
      },
      "604": {
        "name": "Vietnam",
        "ranges": [["0", "4"], ["50", "89"], ["900", "979"], ["9800", "9999"]]
      },
      "605": {
        "name": "Turkey",
        "ranges": [["00", "09"], ["100", "399"], ["4000", "5999"], ["60000", "89999"]]
      },
      "606": {
        "name": "Romania",
        "ranges": [["0", "0"], ["10", "49"], ["500", "799"], ["8000", "9199"], ["92000", "99999"]]
      },
      "607": {
        "name": "Mexico",
        "ranges": [["00", "39"], ["400", "749"], ["7500", "9499"], ["95000", "99999"]]
      },
      "608": {
        "name": "Macedonia",
        "ranges": [["0", "0"], ["10", "19"], ["200", "449"], ["4500", "6499"], ["65000", "69999"], ["7", "9"]]
      },
      "609": {
        "name": "Lithuania",
        "ranges": [["00", "39"], ["400", "799"], ["8000", "9499"], ["95000", "99999"]]
      },
      "7": {
        "name": "China, People's Republic",
        "ranges": [["00", "09"], ["100", "499"], ["5000", "7999"], ["80000", "89999"], ["900000", "999999"]]
      },
      "80": {
        "name": "Czech Republic; Slovakia",
        "ranges": [["00", "19"], ["200", "699"], ["7000", "8499"], ["85000", "89999"], ["900000", "999999"]]
      },
      "81": {
        "name": "India",
        "ranges": [["00", "19"], ["200", "699"], ["7000", "8499"], ["85000", "89999"], ["900000", "999999"]]
      },
      "82": {
        "name": "Norway",
        "ranges": [["00", "19"], ["200", "699"], ["7000", "8999"], ["90000", "98999"], ["990000", "999999"]]
      },
      "83": {
        "name": "Poland",
        "ranges": [["00", "19"], ["200", "599"], ["60000", "69999"], ["7000", "8499"], ["85000", "89999"], ["900000", "999999"]]
      },
      "84": {
        "name": "Spain",
        "ranges": [["00", "19"], ["200", "699"], ["7000", "8499"], ["85000", "89999"], ["9000", "9199"], ["920000", "923999"], ["92400", "92999"], ["930000", "949999"], ["95000", "96999"], ["9700", "9999"]]
      },
      "85": {
        "name": "Brazil",
        "ranges": [["00", "19"], ["200", "599"], ["60000", "69999"], ["7000", "8499"], ["85000", "89999"], ["900000", "979999"], ["98000", "99999"]]
      },
      "86": {
        "name": "Serbia and Montenegro",
        "ranges": [["00", "29"], ["300", "599"], ["6000", "7999"], ["80000", "89999"], ["900000", "999999"]]
      },
      "87": {
        "name": "Denmark",
        "ranges": [["00", "29"], ["400", "649"], ["7000", "7999"], ["85000", "94999"], ["970000", "999999"]]
      },
      "88": {
        "name": "Italian speaking area",
        "ranges": [["00", "19"], ["200", "599"], ["6000", "8499"], ["85000", "89999"], ["900000", "949999"], ["95000", "99999"]]
      },
      "89": {
        "name": "Korea",
        "ranges": [["00", "24"], ["250", "549"], ["5500", "8499"], ["85000", "94999"], ["950000", "999999"]]
      },
      "90": {
        "name": "Netherlands, Belgium (Flemish)",
        "ranges": [["00", "19"], ["200", "499"], ["5000", "6999"], ["70000", "79999"], ["800000", "849999"], ["8500", "8999"], ["900000", "909999"], ["940000", "949999"]]
      },
      "91": {
        "name": "Sweden",
        "ranges": [["0", "1"], ["20", "49"], ["500", "649"], ["7000", "7999"], ["85000", "94999"], ["970000", "999999"]]
      },
      "92": {
        "name": "International Publishers (Unesco, EU), European Community Organizations",
        "ranges": [["0", "5"], ["60", "79"], ["800", "899"], ["9000", "9499"], ["95000", "98999"], ["990000", "999999"]]
      },
      "93": {
        "name": "India",
        "ranges": [["00", "09"], ["100", "499"], ["5000", "7999"], ["80000", "94999"], ["950000", "999999"]]
      },
      "94": {
        "name": "Netherlands",
        "ranges": [["000", "599"], ["6000", "8999"], ["90000", "99999"]]
      },
      "950": {
        "name": "Argentina",
        "ranges": [["00", "49"], ["500", "899"], ["9000", "9899"], ["99000", "99999"]]
      },
      "951": {
        "name": "Finland",
        "ranges": [["0", "1"], ["20", "54"], ["550", "889"], ["8900", "9499"], ["95000", "99999"]]
      },
      "952": {
        "name": "Finland",
        "ranges": [["00", "19"], ["200", "499"], ["5000", "5999"], ["60", "65"], ["6600", "6699"], ["67000", "69999"], ["7000", "7999"], ["80", "94"], ["9500", "9899"], ["99000", "99999"]]
      },
      "953": {
        "name": "Croatia",
        "ranges": [["0", "0"], ["10", "14"], ["150", "549"], ["55000", "59999"], ["6000", "9499"], ["95000", "99999"]]
      },
      "954": {
        "name": "Bulgaria",
        "ranges": [["00", "29"], ["300", "799"], ["8000", "8999"], ["90000", "92999"], ["9300", "9999"]]
      },
      "955": {
        "name": "Sri Lanka",
        "ranges": [["0000", "0999"], ["1000", "1999"], ["20", "54"], ["550", "799"], ["8000", "9499"], ["95000", "99999"]]
      },
      "956": {
        "name": "Chile",
        "ranges": [["00", "19"], ["200", "699"], ["7000", "9999"]]
      },
      "957": {
        "name": "Taiwan, China",
        "ranges": [["00", "02"], ["0300", "0499"], ["05", "19"], ["2000", "2099"], ["21", "27"], ["28000", "30999"], ["31", "43"], ["440", "819"], ["8200", "9699"], ["97000", "99999"]]
      },
      "958": {
        "name": "Colombia",
        "ranges": [["00", "56"], ["57000", "59999"], ["600", "799"], ["8000", "9499"], ["95000", "99999"]]
      },
      "959": {
        "name": "Cuba",
        "ranges": [["00", "19"], ["200", "699"], ["7000", "8499"]]
      },
      "960": {
        "name": "Greece",
        "ranges": [["00", "19"], ["200", "659"], ["6600", "6899"], ["690", "699"], ["7000", "8499"], ["85000", "99999"]]
      },
      "961": {
        "name": "Slovenia",
        "ranges": [["00", "19"], ["200", "599"], ["6000", "8999"], ["90000", "94999"]]
      },
      "962": {
        "name": "Hong Kong",
        "ranges": [["00", "19"], ["200", "699"], ["7000", "8499"], ["85000", "86999"], ["8700", "8999"], ["900", "999"]]
      },
      "963": {
        "name": "Hungary",
        "ranges": [["00", "19"], ["200", "699"], ["7000", "8499"], ["85000", "89999"], ["9000", "9999"]]
      },
      "964": {
        "name": "Iran",
        "ranges": [["00", "14"], ["150", "249"], ["2500", "2999"], ["300", "549"], ["5500", "8999"], ["90000", "96999"], ["970", "989"], ["9900", "9999"]]
      },
      "965": {
        "name": "Israel",
        "ranges": [["00", "19"], ["200", "599"], ["7000", "7999"], ["90000", "99999"]]
      },
      "966": {
        "name": "Ukraine",
        "ranges": [["00", "14"], ["1500", "1699"], ["170", "199"], ["2000", "2999"], ["300", "699"], ["7000", "8999"], ["90000", "99999"]]
      },
      "967": {
        "name": "Malaysia",
        "ranges": [["00", "29"], ["300", "499"], ["5000", "5999"], ["60", "89"], ["900", "989"], ["9900", "9989"], ["99900", "99999"]]
      },
      "968": {
        "name": "Mexico",
        "ranges": [["01", "39"], ["400", "499"], ["5000", "7999"], ["800", "899"], ["9000", "9999"]]
      },
      "969": {
        "name": "Pakistan",
        "ranges": [["0", "1"], ["20", "39"], ["400", "799"], ["8000", "9999"]]
      },
      "970": {
        "name": "Mexico",
        "ranges": [["01", "59"], ["600", "899"], ["9000", "9099"], ["91000", "96999"], ["9700", "9999"]]
      },
      "971": {
        "name": "Philippines",
        "ranges": [["000", "019"], ["02", "02"], ["0300", "0599"], ["06", "09"], ["10", "49"], ["500", "849"], ["8500", "9099"], ["91000", "99999"]]
      },
      "972": {
        "name": "Portugal",
        "ranges": [["0", "1"], ["20", "54"], ["550", "799"], ["8000", "9499"], ["95000", "99999"]]
      },
      "973": {
        "name": "Romania",
        "ranges": [["0", "0"], ["100", "169"], ["1700", "1999"], ["20", "54"], ["550", "759"], ["7600", "8499"], ["85000", "88999"], ["8900", "9499"], ["95000", "99999"]]
      },
      "974": {
        "name": "Thailand",
        "ranges": [["00", "19"], ["200", "699"], ["7000", "8499"], ["85000", "89999"], ["90000", "94999"], ["9500", "9999"]]
      },
      "975": {
        "name": "Turkey",
        "ranges": [["00000", "00999"], ["01", "24"], ["250", "599"], ["6000", "9199"], ["92000", "98999"], ["990", "999"]]
      },
      "976": {
        "name": "Caribbean Community",
        "ranges": [["0", "3"], ["40", "59"], ["600", "799"], ["8000", "9499"], ["95000", "99999"]]
      },
      "977": {
        "name": "Egypr",
        "ranges": [["00", "19"], ["200", "499"], ["5000", "6999"], ["700", "999"]]
      },
      "978": {
        "name": "Nigeria",
        "ranges": [["000", "199"], ["2000", "2999"], ["30000", "79999"], ["8000", "8999"], ["900", "999"]]
      },
      "979": {
        "name": "Indonesia",
        "ranges": [["000", "099"], ["1000", "1499"], ["15000", "19999"], ["20", "29"], ["3000", "3999"], ["400", "799"], ["8000", "9499"], ["95000", "99999"]]
      },
      "980": {
        "name": "Venezuela",
        "ranges": [["00", "19"], ["200", "599"], ["6000", "9999"]]
      },
      "981": {
        "name": "Singapore",
        "ranges": [["00", "11"], ["120", "299"], ["3000", "9999"]]
      },
      "982": {
        "name": "South Pacific",
        "ranges": [["00", "09"], ["100", "699"], ["70", "89"], ["9000", "9999"]]
      },
      "983": {
        "name": "Malaysia",
        "ranges": [["00", "01"], ["020", "199"], ["2000", "3999"], ["40000", "44999"], ["45", "49"], ["50", "79"], ["800", "899"], ["9000", "9899"], ["99000", "99999"]]
      },
      "984": {
        "name": "Bangladesh",
        "ranges": [["00", "39"], ["400", "799"], ["8000", "8999"], ["90000", "99999"]]
      },
      "985": {
        "name": "Belarus",
        "ranges": [["00", "39"], ["400", "599"], ["6000", "8999"], ["90000", "99999"]]
      },
      "986": {
        "name": "Taiwan, China",
        "ranges": [["00", "11"], ["120", "559"], ["5600", "7999"], ["80000", "99999"]]
      },
      "987": {
        "name": "Argentina",
        "ranges": [["00", "09"], ["1000", "1999"], ["20000", "29999"], ["30", "49"], ["500", "899"], ["9000", "9499"], ["95000", "99999"]]
      },
      "988": {
        "name": "Hongkong",
        "ranges": [["00", "16"], ["17000", "19999"], ["200", "799"], ["8000", "9699"], ["97000", "99999"]]
      },
      "989": {
        "name": "Portugal",
        "ranges": [["0", "1"], ["20", "54"], ["550", "799"], ["8000", "9499"], ["95000", "99999"]]
      },
      "9933": {
        "name": "Syria",
        "ranges": [["0", "0"], ["10", "39"], ["400", "899"], ["9000", "9999"]]
      },
      "9934": {
        "name": "Latvia",
        "ranges": [["0", "0"], ["10", "49"], ["500", "799"], ["8000", "9999"]]
      },
      "9935": {
        "name": "Iceland",
        "ranges": [["0", "0"], ["10", "39"], ["400", "899"], ["9000", "9999"]]
      },
      "9936": {
        "name": "Afghanistan",
        "ranges": [["0", "1"], ["20", "39"], ["400", "799"], ["8000", "9999"]]
      },
      "9937": {
        "name": "Nepal",
        "ranges": [["0", "2"], ["30", "49"], ["500", "799"], ["8000", "9999"]]
      },
      "9938": {
        "name": "Tunisia",
        "ranges": [["00", "79"], ["800", "949"], ["9500", "9999"]]
      },
      "9939": {
        "name": "Armenia",
        "ranges": [["0", "4"], ["50", "79"], ["800", "899"], ["9000", "9999"]]
      },
      "9940": {
        "name": "Montenegro",
        "ranges": [["0", "1"], ["20", "49"], ["500", "899"], ["9000", "9999"]]
      },
      "9941": {
        "name": "Georgia",
        "ranges": [["0", "0"], ["10", "39"], ["400", "899"], ["9000", "9999"]]
      },
      "9942": {
        "name": "Ecuador",
        "ranges": [["00", "89"], ["900", "994"], ["9950", "9999"]]
      },
      "9943": {
        "name": "Uzbekistan",
        "ranges": [["00", "29"], ["300", "399"], ["4000", "9999"]]
      },
      "9944": {
        "name": "Turkey",
        "ranges": [["0", "2"], ["300", "499"], ["5000", "5999"], ["60", "89"], ["900", "999"]]
      },
      "9945": {
        "name": "Dominican Republic",
        "ranges": [["00", "00"], ["010", "079"], ["08", "39"], ["400", "569"], ["57", "57"], ["580", "849"], ["8500", "9999"]]
      },
      "9946": {
        "name": "Korea, P.D.R.",
        "ranges": [["0", "1"], ["20", "39"], ["400", "899"], ["9000", "9999"]]
      },
      "9947": {
        "name": "Algeria",
        "ranges": [["0", "1"], ["20", "79"], ["800", "999"]]
      },
      "9948": {
        "name": "United Arab Emirates",
        "ranges": [["00", "39"], ["400", "849"], ["8500", "9999"]]
      },
      "9949": {
        "name": "Estonia",
        "ranges": [["0", "0"], ["10", "39"], ["400", "899"], ["9000", "9999"]]
      },
      "9950": {
        "name": "Palestine",
        "ranges": [["00", "29"], ["300", "840"], ["8500", "9999"]]
      },
      "9951": {
        "name": "Kosova",
        "ranges": [["00", "39"], ["400", "849"], ["8500", "9999"]]
      },
      "9952": {
        "name": "Azerbaijan",
        "ranges": [["0", "1"], ["20", "39"], ["400", "799"], ["8000", "9999"]]
      },
      "9953": {
        "name": "Lebanon",
        "ranges": [["0", "0"], ["10", "39"], ["400", "599"], ["60", "89"], ["9000", "9999"]]
      },
      "9954": {
        "name": "Morocco",
        "ranges": [["0", "1"], ["20", "39"], ["400", "799"], ["8000", "9999"]]
      },
      "9955": {
        "name": "Lithuania",
        "ranges": [["00", "39"], ["400", "929"], ["9300", "9999"]]
      },
      "9956": {
        "name": "Cameroon",
        "ranges": [["0", "0"], ["10", "39"], ["400", "899"], ["9000", "9999"]]
      },
      "9957": {
        "name": "Jordan",
        "ranges": [["00", "39"], ["400", "699"], ["70", "84"], ["8500", "9999"]]
      },
      "9958": {
        "name": "Bosnia and Herzegovina",
        "ranges": [["0", "0"], ["10", "49"], ["500", "899"], ["9000", "9999"]]
      },
      "9959": {
        "name": "Libya",
        "ranges": [["0", "1"], ["20", "79"], ["800", "949"], ["9500", "9999"]]
      },
      "9960": {
        "name": "Saudi Arabia",
        "ranges": [["00", "59"], ["600", "899"], ["9000", "9999"]]
      },
      "9961": {
        "name": "Algeria",
        "ranges": [["0", "2"], ["30", "69"], ["700", "949"], ["9500", "9999"]]
      },
      "9962": {
        "name": "Panama",
        "ranges": [["00", "54"], ["5500", "5599"], ["56", "59"], ["600", "849"], ["8500", "9999"]]
      },
      "9963": {
        "name": "Cyprus",
        "ranges": [["0", "2"], ["30", "54"], ["550", "749"], ["7500", "9999"]]
      },
      "9964": {
        "name": "Ghana",
        "ranges": [["0", "6"], ["70", "94"], ["950", "999"]]
      },
      "9965": {
        "name": "Kazakhstan",
        "ranges": [["00", "39"], ["400", "899"], ["9000", "9999"]]
      },
      "9966": {
        "name": "Kenya",
        "ranges": [["000", "199"], ["20", "69"], ["7000", "7499"], ["750", "959"], ["9600", "9999"]]
      },
      "9967": {
        "name": "Kyrgyzstan",
        "ranges": [["00", "39"], ["400", "899"], ["9000", "9999"]]
      },
      "9968": {
        "name": "Costa Rica",
        "ranges": [["00", "49"], ["500", "939"], ["9400", "9999"]]
      },
      "9970": {
        "name": "Uganda",
        "ranges": [["00", "39"], ["400", "899"], ["9000", "9999"]]
      },
      "9971": {
        "name": "Singapore",
        "ranges": [["0", "5"], ["60", "89"], ["900", "989"], ["9900", "9999"]]
      },
      "9972": {
        "name": "Peru",
        "ranges": [["00", "09"], ["1"], ["200", "249"], ["2500", "2999"], ["30", "59"], ["600", "899"], ["9000", "9999"]]
      },
      "9973": {
        "name": "Tunisia",
        "ranges": [["00", "05"], ["060", "089"], ["0900", "0999"], ["10", "69"], ["700", "969"], ["9700", "9999"]]
      },
      "9974": {
        "name": "Uruguay",
        "ranges": [["0", "2"], ["30", "54"], ["550", "749"], ["7500", "9499"], ["95", "99"]]
      },
      "9975": {
        "name": "Moldova",
        "ranges": [["0", "0"], ["100", "399"], ["4000", "4499"], ["45", "89"], ["900", "949"], ["9500", "9999"]]
      },
      "9976": {
        "name": "Tanzania",
        "ranges": [["0", "5"], ["60", "89"], ["900", "989"], ["9990", "9999"]]
      },
      "9977": {
        "name": "Costa Rica",
        "ranges": [["00", "89"], ["900", "989"], ["9900", "9999"]]
      },
      "9978": {
        "name": "Ecuador",
        "ranges": [["00", "29"], ["300", "399"], ["40", "94"], ["950", "989"], ["9900", "9999"]]
      },
      "9979": {
        "name": "Iceland",
        "ranges": [["0", "4"], ["50", "64"], ["650", "659"], ["66", "75"], ["760", "899"], ["9000", "9999"]]
      },
      "9980": {
        "name": "Papua New Guinea",
        "ranges": [["0", "3"], ["40", "89"], ["900", "989"], ["9900", "9999"]]
      },
      "9981": {
        "name": "Morocco",
        "ranges": [["00", "09"], ["100", "159"], ["1600", "1999"], ["20", "79"], ["800", "949"], ["9500", "9999"]]
      },
      "9982": {
        "name": "Zambia",
        "ranges": [["00", "79"], ["800", "989"], ["9900", "9999"]]
      },
      "9983": {
        "name": "Gambia",
        "ranges": [["80", "94"], ["950", "989"], ["9900", "9999"]]
      },
      "9984": {
        "name": "Latvia",
        "ranges": [["00", "49"], ["500", "899"], ["9000", "9999"]]
      },
      "9985": {
        "name": "Estonia",
        "ranges": [["0", "4"], ["50", "79"], ["800", "899"], ["9000", "9999"]]
      },
      "9986": {
        "name": "Lithuania",
        "ranges": [["00", "39"], ["400", "899"], ["9000", "9399"], ["940", "969"], ["97", "99"]]
      },
      "9987": {
        "name": "Tanzania",
        "ranges": [["00", "39"], ["400", "879"], ["8800", "9999"]]
      },
      "9988": {
        "name": "Ghana",
        "ranges": [["0", "2"], ["30", "54"], ["550", "749"], ["7500", "9999"]]
      },
      "9989": {
        "name": "Macedonia",
        "ranges": [["0", "0"], ["100", "199"], ["2000", "2999"], ["30", "59"], ["600", "949"], ["9500", "9999"]]
      },
      "99901": {
        "name": "Bahrain",
        "ranges": [["00", "49"], ["500", "799"], ["80", "99"]]
      },
      "99902": {
        "name": "Gabon - no ranges fixed yet",
        "ranges": []
      },
      "99903": {
        "name": "Mauritius",
        "ranges": [["0", "1"], ["20", "89"], ["900", "999"]]
      },
      "99904": {
        "name": "Netherlands Antilles; Aruba, Neth. Ant",
        "ranges": [["0", "5"], ["60", "89"], ["900", "999"]]
      },
      "99905": {
        "name": "Bolivia",
        "ranges": [["0", "3"], ["40", "79"], ["800", "999"]]
      },
      "99906": {
        "name": "Kuwait",
        "ranges": [["0", "2"], ["30", "59"], ["600", "699"], ["70", "89"], ["9", "9"]]
      },
      "99908": {
        "name": "Malawi",
        "ranges": [["0", "0"], ["10", "89"], ["900", "999"]]
      },
      "99909": {
        "name": "Malta",
        "ranges": [["0", "3"], ["40", "94"], ["950", "999"]]
      },
      "99910": {
        "name": "Sierra Leone",
        "ranges": [["0", "2"], ["30", "89"], ["900", "999"]]
      },
      "99911": {
        "name": "Lesotho",
        "ranges": [["00", "59"], ["600", "999"]]
      },
      "99912": {
        "name": "Botswana",
        "ranges": [["0", "3"], ["400", "599"], ["60", "89"], ["900", "999"]]
      },
      "99913": {
        "name": "Andorra",
        "ranges": [["0", "2"], ["30", "35"], ["600", "604"]]
      },
      "99914": {
        "name": "Suriname",
        "ranges": [["0", "4"], ["50", "89"], ["900", "949"]]
      },
      "99915": {
        "name": "Maldives",
        "ranges": [["0", "4"], ["50", "79"], ["800", "999"]]
      },
      "99916": {
        "name": "Namibia",
        "ranges": [["0", "2"], ["30", "69"], ["700", "999"]]
      },
      "99917": {
        "name": "Brunei Darussalam",
        "ranges": [["0", "2"], ["30", "89"], ["900", "999"]]
      },
      "99918": {
        "name": "Faroe Islands",
        "ranges": [["0", "3"], ["40", "79"], ["800", "999"]]
      },
      "99919": {
        "name": "Benin",
        "ranges": [["0", "2"], ["300", "399"], ["40", "69"], ["900", "999"]]
      },
      "99920": {
        "name": "Andorra",
        "ranges": [["0", "4"], ["50", "89"], ["900", "999"]]
      },
      "99921": {
        "name": "Qatar",
        "ranges": [["0", "1"], ["20", "69"], ["700", "799"], ["8", "8"], ["90", "99"]]
      },
      "99922": {
        "name": "Guatemala",
        "ranges": [["0", "3"], ["40", "69"], ["700", "999"]]
      },
      "99923": {
        "name": "El Salvador",
        "ranges": [["0", "1"], ["20", "79"], ["800", "999"]]
      },
      "99924": {
        "name": "Nicaragua",
        "ranges": [["0", "1"], ["20", "79"], ["800", "999"]]
      },
      "99925": {
        "name": "Paraguay",
        "ranges": [["0", "3"], ["40", "79"], ["800", "999"]]
      },
      "99926": {
        "name": "Honduras",
        "ranges": [["0", "0"], ["10", "59"], ["600", "999"]]
      },
      "99927": {
        "name": "Albania",
        "ranges": [["0", "2"], ["30", "59"], ["600", "999"]]
      },
      "99928": {
        "name": "Georgia",
        "ranges": [["0", "0"], ["10", "79"], ["800", "999"]]
      },
      "99929": {
        "name": "Mongolia",
        "ranges": [["0", "4"], ["50", "79"], ["800", "999"]]
      },
      "99930": {
        "name": "Armenia",
        "ranges": [["0", "4"], ["50", "79"], ["800", "999"]]
      },
      "99931": {
        "name": "Seychelles",
        "ranges": [["0", "4"], ["50", "79"], ["800", "999"]]
      },
      "99932": {
        "name": "Malta",
        "ranges": [["0", "0"], ["10", "59"], ["600", "699"], ["7", "7"], ["80", "99"]]
      },
      "99933": {
        "name": "Nepal",
        "ranges": [["0", "2"], ["30", "59"], ["600", "999"]]
      },
      "99934": {
        "name": "Dominican Republic",
        "ranges": [["0", "1"], ["20", "79"], ["800", "999"]]
      },
      "99935": {
        "name": "Haiti",
        "ranges": [["0", "2"], ["7", "8"], ["30", "59"], ["600", "699"], ["90", "99"]]
      },
      "99936": {
        "name": "Bhutan",
        "ranges": [["0", "0"], ["10", "59"], ["600", "999"]]
      },
      "99937": {
        "name": "Macau",
        "ranges": [["0", "1"], ["20", "59"], ["600", "999"]]
      },
      "99938": {
        "name": "Srpska",
        "ranges": [["0", "1"], ["20", "59"], ["600", "899"], ["90", "99"]]
      },
      "99939": {
        "name": "Guatemala",
        "ranges": [["0", "5"], ["60", "89"], ["900", "999"]]
      },
      "99940": {
        "name": "Georgia",
        "ranges": [["0", "0"], ["10", "69"], ["700", "999"]]
      },
      "99941": {
        "name": "Armenia",
        "ranges": [["0", "2"], ["30", "79"], ["800", "999"]]
      },
      "99942": {
        "name": "Sudan",
        "ranges": [["0", "4"], ["50", "79"], ["800", "999"]]
      },
      "99943": {
        "name": "Alsbania",
        "ranges": [["0", "2"], ["30", "59"], ["600", "999"]]
      },
      "99944": {
        "name": "Ethiopia",
        "ranges": [["0", "4"], ["50", "79"], ["800", "999"]]
      },
      "99945": {
        "name": "Namibia",
        "ranges": [["0", "5"], ["60", "89"], ["900", "999"]]
      },
      "99946": {
        "name": "Nepal",
        "ranges": [["0", "2"], ["30", "59"], ["600", "999"]]
      },
      "99947": {
        "name": "Tajikistan",
        "ranges": [["0", "2"], ["30", "69"], ["700", "999"]]
      },
      "99948": {
        "name": "Eritrea",
        "ranges": [["0", "4"], ["50", "79"], ["800", "999"]]
      },
      "99949": {
        "name": "Mauritius",
        "ranges": [["0", "1"], ["20", "89"], ["900", "999"]]
      },
      "99950": {
        "name": "Cambodia",
        "ranges": [["0", "4"], ["50", "79"], ["800", "999"]]
      },
      "99951": {
        "name": "Congo - no ranges fixed yet",
        "ranges": []
      },
      "99952": {
        "name": "Mali",
        "ranges": [["0", "4"], ["50", "79"], ["800", "999"]]
      },
      "99953": {
        "name": "Paraguay",
        "ranges": [["0", "2"], ["30", "79"], ["800", "999"]]
      },
      "99954": {
        "name": "Bolivia",
        "ranges": [["0", "2"], ["30", "69"], ["700", "999"]]
      },
      "99955": {
        "name": "Srpska",
        "ranges": [["0", "1"], ["20", "59"], ["600", "899"], ["90", "99"]]
      },
      "99956": {
        "name": "Albania",
        "ranges": [["00", "59"], ["600", "999"]]
      },
      "99957": {
        "name": "Malta",
        "ranges": [["0", "1"], ["20", "79"], ["800", "999"]]
      },
      "99958": {
        "name": "Bahrain",
        "ranges": [["0", "4"], ["50", "94"], ["950", "999"]]
      },
      "99959": {
        "name": "Luxembourg",
        "ranges": [["0", "2"], ["30", "59"], ["600", "999"]]
      },
      "99960": {
        "name": "Malawi",
        "ranges": [["0", "0"], ["10", "94"], ["950", "999"]]
      },
      "99961": {
        "name": "El Salvador",
        "ranges": [["0", "3"], ["40", "89"], ["900", "999"]]
      },
      "99962": {
        "name": "Mongolia",
        "ranges": [["0", "4"], ["50", "79"], ["800", "999"]]
      }
    };

function ch_isfloat(val,sign){
//-------------------------------------------------------
//函式: ch_isfloat()
//用途: 檢核是否為浮點數
//-------------------------------------------------------
//val   值
//sign  是否允許有負的
//      true  --> 值可以為正或負
//      false --> 值僅可以為正
//-------------------------------------------------------

    //檢核參數
    if((val==undefined)||(trim(val)=='')){
        return false;
    }
    if(sign==undefined){
        sign=true;
    }

    //驗證
    val=trim(val);
    if(isNaN(val)){
        return false;
    }

    if(sign==false){
        var exp=/^(\d)+(\.){1}(\d)+$/;
        if(!exp.test(val)){
            return false;
        }else{
            return true;
        }
    }else{
        var exp=/^(\-)?(\d)+(\.){1}(\d)+$/;
        if(!exp.test(val)){
            return false;
        }else{
            return true;
        }
    }

    function trim(str){
    //去除字串前後空白
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function ch_isint(val,sign){
//-------------------------------------------------------
//函式: ch_isint()
//用途: 檢核是否為整數
//-------------------------------------------------------
//val   值
//sign  是否允許有負的
//      true  --> 值可以為正或負
//      false --> 值僅可以為正
//-------------------------------------------------------

    //檢核參數
    if((val==undefined)||(trim(val)=='')){
        return false;
    }
    if(sign==undefined){
        sign=true;
    }

    //驗證
    val=trim(val);
    if(isNaN(val)){
        return false;
    }else if((val.toString()).indexOf('.')!=-1){
        return false;
    }

    if(sign==false){
        var exp=/^\d+$/;
        if(!exp.test(val)){
            return false;
        }else{
            return true;
        }
    }else{
        var exp=/^(\-)?(\d)+$/;
        if(!exp.test(val)){
            return false;
        }else{
            return true;
        }
    }

    function trim(str){
    //去除字串前後空白
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function ch_isnumeric(val){
//-------------------------------------------------------
//函式: ch_isnumeric()
//用途: 檢核是否是數字
//-------------------------------------------------------
//val   值
//-------------------------------------------------------

    //檢核參數
    if((val==undefined)||(trim(val)=='')){
        return false;
    }

    //驗證
    if(isNaN(val)){
        return false;
    }else{
        return true;
    }

    function trim(str){
    //去除字串前後空白
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function ch_len(val,len,equal){
//-------------------------------------------------------
//函式: ch_len()
//用途: 檢核長度
//-------------------------------------------------------
//val   值
//len   長度
//
//equal 是否完全符合
//      true  --> 長度必須一樣
//      false --> 長度最少要等於,預設
//-------------------------------------------------------

    //檢核參數
    if((!val)||(val=='')){
        return false;
    }
    if((!len)||(len=='')){
        return false;
    }
    if(equal==undefined){
        equal=false;
    }

    //驗證
    val=trim(val);
    if(val.length<len){
        return false;
    }else{
        if(equal==false){
            return true;
        }else{
            return (val.length==len)?true:false;
        }
    }

    function trim(str){
    //去除字串前後空白
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function ch_lenbetween(val,min,max,has_sp){
//-------------------------------------------------------
//函式: ch_lenbetween()
//用途: 檢核長度範圍
//-------------------------------------------------------
//val       值
//min       最小長度
//max       最大長度
//has_sp    是否含前後空白
//          true : 含前後空白
//          false: 不含前後空白,預設
//-------------------------------------------------------

    //檢核參數
    if((!val)||(val=='')){
        return false;
    }
    if((!min)||(min=='')||(isNaN(min))){
        return false;
    }
    if((!max)||(max=='')||(isNaN(max))){
        return false;
    }
    if((has_sp==undefined)||(has_sp=='')){
        has_sp=false;
    }

    //強制轉換
    min=parseInt(min);
    max=parseInt(max);

    //驗證
    if(has_sp==false){
        //不含前後空白
        val=trim(val);
    }

    if((val.length<min)||(val.length>max)){
        return false;
    }else{
        return true;
    }

    function trim(str){
    //去除字串前後空白
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function ch_macaddr(val){
//-------------------------------------------------------
//函式: ch_macaddr()
//用途: 檢核網卡mac
//-------------------------------------------------------
//val   值
//-------------------------------------------------------
//00-0C-6E-65-DE-D6
//00:0C:6E:65:DE:D6
//-------------------------------------------------------

    //參數檢驗
    if((val=="")||(val==undefined)){return false;}

    //正規式
    var exp1=/^[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}$/;
    var exp2=/^[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}$/;

    //驗證
    val=trim(val);

    if(exp1.test(val)){
        return true;
    }else if(exp2.test(val)){
        return true;
    }else{
        return false;
    }

    function trim(str){
    //去除字串前後空白
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function ch_month(val){
//-------------------------------------------------------
//函式: ch_month()
//用途: 檢核月份
//-------------------------------------------------------
//格式: 01-09|10|11|12
//格式: 1-9|10|11|12
//-------------------------------------------------------

    //檢核參數
    if((val==undefined)||(trim(val)=='')){
        return false;
    }

    //驗證
    var exp=new RegExp("^(0?[1-9]|10|11|12)$");
    if(exp.test(trim(val))){
        return true;
    }else{
        return false;
    }

    function trim(str){
    //去除字串前後空白
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function ch_postzip(val){
//-------------------------------------------------------
//函式: ch_postzip()
//用途: 檢核台灣地區郵遞區號
//-------------------------------------------------------
//val   值
//
//規則:
//1.郵遞區號 3碼或5碼
//2.郵遞區號 均數字
//3.需檢核實際陣列
//-------------------------------------------------------

    //檢核參數
    if((val==undefined)||(trim(val)=='')){
        return false;
    }

    //驗證
    var exp=/^((\d){3}|(\d){5})$/;

    if(exp.test(trim(val))){
        var city_arry=array_city();
        val=trim(val);
        val=val.substr(0,3);

        for(var city in city_arry){
            for(var region in city_arry[city]){

                if(val==city_arry[city][region]){
                    return true;
                    break;
                }
            }
        }

        return false;
    }else{
        return false;
    }

    function trim(str){
    //去除字串前後空白
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }

    function array_city(){
        array_city = {
                        '請選擇':{
                                    '請選擇': '0'
                                },
                        '基隆市':{
                                    '仁愛區':'200',
                                    '信義區':'201',
                                    '中正區':'202',
                                    '中山區':'203',
                                    '安樂區':'204',
                                    '暖暖區':'205',
                                    '七堵區':'206'
                                },
                        '台北市':{
                                    '中正區':'100',
                                    '大同區':'103',
                                    '中山區':'104',
                                    '松山區':'105',
                                    '大安區':'106',
                                    '萬華區':'108',
                                    '信義區':'110',
                                    '士林區':'111',
                                    '北投區':'112',
                                    '內湖區':'114',
                                    '南港區':'115',
                                    '文山區':'116'
                                },
                        '新北市':{
                                    '萬里區':'207',
                                    '金山區':'208',
                                    '板橋區':'220',
                                    '汐止區':'221',
                                    '深坑區':'222',
                                    '石碇區':'223',
                                    '瑞芳區':'224',
                                    '平溪區':'226',
                                    '雙溪區':'227',
                                    '貢寮區':'228',
                                    '新店區':'231',
                                    '坪林區':'232',
                                    '烏來區':'233',
                                    '永和區':'234',
                                    '中和區':'235',
                                    '土城區':'236',
                                    '三峽區':'237',
                                    '樹林區':'238',
                                    '鶯歌區':'239',
                                    '三重區':'241',
                                    '新莊區':'242',
                                    '泰山區':'243',
                                    '林口區':'244',
                                    '蘆洲區':'247',
                                    '五股區':'248',
                                    '八里區':'249',
                                    '淡水區':'251',
                                    '三芝區':'252',
                                    '石門區':'253'
                                },
                        '桃園縣':{
                                    '中壢市':'320',
                                    '平鎮市':'324',
                                    '龍潭鄉':'325',
                                    '楊梅市':'326',
                                    '新屋鄉':'327',
                                    '觀音鄉':'328',
                                    '桃園市':'330',
                                    '龜山鄉':'333',
                                    '八德市':'334',
                                    '大溪鎮':'335',
                                    '復興鄉':'336',
                                    '大園鄉':'337',
                                    '蘆竹鄉':'338'
                                },
                        '新竹市':{
                                    '東區':'300',
                                    '北區':'300',
                                    '香山區':'300'
                                },
                        '新竹縣':{
                                    '竹北市':'302',
                                    '湖口鄉':'303',
                                    '新豐鄉':'304',
                                    '新埔鎮':'305',
                                    '關西鎮':'306',
                                    '芎林鄉':'307',
                                    '寶山鄉':'308',
                                    '竹東鎮':'310',
                                    '五峰鄉':'311',
                                    '橫山鄉':'312',
                                    '尖石鄉':'313',
                                    '北埔鄉':'314',
                                    '峨眉鄉':'315'
                                },
                        '苗栗縣':{
                                    '竹南鎮':'350',
                                    '頭份鎮':'351',
                                    '三灣鄉':'352',
                                    '南庄鄉':'353',
                                    '獅潭鄉':'354',
                                    '後龍鎮':'356',
                                    '通霄鎮':'357',
                                    '苑裡鎮':'358',
                                    '苗栗市':'360',
                                    '造橋鄉':'361',
                                    '頭屋鄉':'362',
                                    '公館鄉':'363',
                                    '大湖鄉':'364',
                                    '泰安鄉':'365',
                                    '銅鑼鄉':'366',
                                    '三義鄉':'367',
                                    '西湖鄉':'368',
                                    '卓蘭鎮':'369'
                                },
                        '台中市':{
                                    '中區':'400',
                                    '東區':'401',
                                    '南區':'402',
                                    '西區':'403',
                                    '北區':'404',
                                    '北屯區':'406',
                                    '西屯區':'407',
                                    '南屯區':'408',
                                    '太平區':'411',
                                    '大里區':'412',
                                    '霧峰區':'413',
                                    '烏日區':'414',
                                    '豐原區':'420',
                                    '后里區':'421',
                                    '石岡區':'422',
                                    '東勢區':'423',
                                    '和平區':'424',
                                    '新社區':'426',
                                    '潭子區':'427',
                                    '大雅區':'428',
                                    '神岡區':'429',
                                    '大肚區':'432',
                                    '沙鹿區':'433',
                                    '龍井區':'434',
                                    '梧棲區':'435',
                                    '清水區':'436',
                                    '大甲區':'437',
                                    '外埔區':'438',
                                    '大安區':'439'
                                },
                        '彰化縣':{
                                    '彰化市':'500',
                                    '芬園鄉':'502',
                                    '花壇鄉':'503',
                                    '秀水鄉':'504',
                                    '鹿港鎮':'505',
                                    '福興鄉':'506',
                                    '線西鄉':'507',
                                    '和美鎮':'508',
                                    '伸港鄉':'509',
                                    '員林鎮':'510',
                                    '社頭鄉':'511',
                                    '永靖鄉':'512',
                                    '埔心鄉':'513',
                                    '溪湖鎮':'514',
                                    '大村鄉':'515',
                                    '埔鹽鄉':'516',
                                    '田中鎮':'520',
                                    '北斗鎮':'521',
                                    '田尾鄉':'522',
                                    '埤頭鄉':'523',
                                    '溪州鄉':'524',
                                    '竹塘鄉':'525',
                                    '二林鎮':'526',
                                    '大城鄉':'527',
                                    '芳苑鄉':'528',
                                    '二水鄉':'530'
                                },
                        '南投縣':{
                                    '南投市':'540',
                                    '中寮鄉':'541',
                                    '草屯鎮':'542',
                                    '國姓鄉':'544',
                                    '埔里鎮':'545',
                                    '仁愛鄉':'546',
                                    '名間鄉':'551',
                                    '集集鎮':'552',
                                    '水里鄉':'553',
                                    '魚池鄉':'555',
                                    '信義鄉':'556',
                                    '竹山鎮':'557',
                                    '鹿谷鄉':'558'
                                },

                        '雲林縣':{
                                    '斗南鎮':'630',
                                    '大埤鄉':'631',
                                    '虎尾鎮':'632',
                                    '土庫鎮':'633',
                                    '褒忠鄉':'634',
                                    '東勢鄉':'635',
                                    '台西鄉':'636',
                                    '崙背鄉':'637',
                                    '麥寮鄉':'638',
                                    '斗六市':'640',
                                    '林內鄉':'643',
                                    '古坑鄉':'646',
                                    '莿桐鄉':'647',
                                    '西螺鎮':'648',
                                    '二崙鄉':'649',
                                    '北港鎮':'651',
                                    '水林鄉':'652',
                                    '口湖鄉':'653',
                                    '四湖鄉':'654',
                                    '元長鄉':'655'
                                },
                        '嘉義市':{
                                    '東區':'600',
                                    '西區':'600'
                                },
                        '嘉義縣':{
                                    '番路鄉':'602',
                                    '梅山鄉':'603',
                                    '竹崎鄉':'604',
                                    '阿里山':'605',
                                    '中埔鄉':'606',
                                    '大埔鄉':'607',
                                    '水上鄉':'608',
                                    '鹿草鄉':'611',
                                    '太保市':'612',
                                    '朴子市':'613',
                                    '東石鄉':'614',
                                    '六腳鄉':'615',
                                    '新港鄉':'616',
                                    '民雄鄉':'621',
                                    '大林鎮':'622',
                                    '溪口鄉':'623',
                                    '義竹鄉':'624',
                                    '布袋鎮':'625'
                                },
                        '台南市':{
                                    '中西區':'700',
                                    '東區':'701',
                                    '南區':'702',
                                    '北區':'704',
                                    '安平區':'708',
                                    '安南區':'709',
                                    '永康區':'710',
                                    '歸仁區':'711',
                                    '新化區':'712',
                                    '左鎮區':'713',
                                    '玉井區':'714',
                                    '楠西區':'715',
                                    '南化區':'716',
                                    '仁德區':'717',
                                    '關廟區':'718',
                                    '龍崎區':'719',
                                    '官田區':'720',
                                    '麻豆區':'721',
                                    '佳里區':'722',
                                    '西港區':'723',
                                    '七股區':'724',
                                    '將軍區':'725',
                                    '學甲區':'726',
                                    '北門區':'727',
                                    '新營區':'730',
                                    '後壁區':'731',
                                    '白河區':'732',
                                    '東山區':'733',
                                    '六甲區':'734',
                                    '下營區':'735',
                                    '柳營區':'736',
                                    '鹽水區':'737',
                                    '善化區':'741',
                                    '大內區':'742',
                                    '山上區':'743',
                                    '新市區':'744',
                                    '安定區':'745'
                                },
                        '高雄市':{
                                    '新興區':'800',
                                    '前金區':'801',
                                    '苓雅區':'802',
                                    '鹽埕區':'803',
                                    '鼓山區':'804',
                                    '旗津區':'805',
                                    '前鎮區':'806',
                                    '三民區':'807',
                                    '楠梓區':'811',
                                    '小港區':'812',
                                    '左營區':'813',
                                    '仁武區':'814',
                                    '大社區':'815',
                                    '岡山區':'820',
                                    '路竹區':'821',
                                    '阿蓮區':'822',
                                    '田寮區':'823',
                                    '燕巢區':'824',
                                    '橋頭區':'825',
                                    '梓官區':'826',
                                    '彌陀區':'827',
                                    '永安區':'828',
                                    '湖內區':'829',
                                    '鳳山區':'830',
                                    '大寮區':'831',
                                    '林園區':'832',
                                    '鳥松區':'833',
                                    '大樹區':'840',
                                    '旗山區':'842',
                                    '美濃區':'843',
                                    '六龜區':'844',
                                    '內門區':'845',
                                    '杉林區':'846',
                                    '甲仙區':'847',
                                    '桃源區':'848',
                                    '那瑪夏':'849',
                                    '茂林區':'851',
                                    '茄萣區':'852'
                                },
                        '屏東縣':{
                                    '屏東市':'900',
                                    '三地門':'901',
                                    '霧台鄉':'902',
                                    '瑪家鄉':'903',
                                    '九如鄉':'904',
                                    '里港鄉':'905',
                                    '高樹鄉':'906',
                                    '鹽埔鄉':'907',
                                    '長治鄉':'908',
                                    '麟洛鄉':'909',
                                    '竹田鄉':'911',
                                    '內埔鄉':'912',
                                    '萬丹鄉':'913',
                                    '潮州鎮':'920',
                                    '泰武鄉':'921',
                                    '來義鄉':'922',
                                    '萬巒鄉':'923',
                                    '崁頂鄉':'924',
                                    '新埤鄉':'925',
                                    '南州鄉':'926',
                                    '林邊鄉':'927',
                                    '東港鎮':'928',
                                    '琉球鄉':'929',
                                    '佳冬鄉':'931',
                                    '新園鄉':'932',
                                    '枋寮鄉':'940',
                                    '枋山鄉':'941',
                                    '春日鄉':'942',
                                    '獅子鄉':'943',
                                    '車城鄉':'944',
                                    '牡丹鄉':'945',
                                    '恆春鎮':'946',
                                    '滿州鄉':'947'
                                },
                        '台東縣':{
                                    '台東市':'950',
                                    '綠島鄉':'951',
                                    '蘭嶼鄉':'952',
                                    '延平鄉':'953',
                                    '卑南鄉':'954',
                                    '鹿野鄉':'955',
                                    '關山鎮':'956',
                                    '海端鄉':'957',
                                    '池上鄉':'958',
                                    '東河鄉':'959',
                                    '成功鎮':'961',
                                    '長濱鄉':'962',
                                    '太麻里':'963',
                                    '金峰鄉':'964',
                                    '大武鄉':'965',
                                    '達仁鄉':'966'
                                },
                        '花蓮縣':{
                                    '花蓮市':'970',
                                    '新城鄉':'971',
                                    '秀林鄉':'972',
                                    '吉安鄉':'973',
                                    '壽豐鄉':'974',
                                    '鳳林鎮':'975',
                                    '光復鄉':'976',
                                    '豐濱鄉':'977',
                                    '瑞穗鄉':'978',
                                    '萬榮鄉':'979',
                                    '玉里鎮':'981',
                                    '卓溪鄉':'982',
                                    '富里鄉':'983'
                                },
                        '宜蘭縣':{
                                    '宜蘭市':'260',
                                    '頭城鎮':'261',
                                    '礁溪鄉':'262',
                                    '壯圍鄉':'263',
                                    '員山鄉':'264',
                                    '羅東鎮':'265',
                                    '三星鄉':'266',
                                    '大同鄉':'267',
                                    '五結鄉':'268',
                                    '冬山鄉':'269',
                                    '蘇澳鎮':'270',
                                    '南澳鄉':'272'
                                },
                        '澎湖縣':{
                                    '馬公市':'880',
                                    '西嶼鄉':'881',
                                    '望安鄉':'882',
                                    '七美鄉':'883',
                                    '白沙鄉':'884',
                                    '湖西鄉':'885'
                                },
                        '金門縣':{
                                    '金沙鎮':'890',
                                    '金湖鎮':'891',
                                    '金寧鄉':'892',
                                    '金城鎮':'893',
                                    '烈嶼鄉':'894',
                                    '烏坵鄉':'896'
                                },
                        '連江縣':{
                                    '南竿鄉':'209',
                                    '北竿鄉':'210',
                                    '莒光鄉':'211',
                                    '東引鄉':'212'
                                }

        };
        return array_city;
    }
}

function ch_time(val){
//-------------------------------------------------------
//函式: ch_time()
//用途: 檢核時間
//-------------------------------------------------------
//val   值
//-------------------------------------------------------
//格式: hh:mm:ss
//值域: 00:00:00 ~ 23:59:59
//
//本函式允許下列時間表示法
//
//hh:mm:ss  補零    01:02:03
//hh:mm:ss  不補零  1:2:3
//hh:mm:ss  混雜    01:2:3
//-------------------------------------------------------

    if((val==undefined)||(val=='')){
        return false;
    }

    var exp_hour="(0{1,2}|0?[1-9]|1[0-9]|2[0-3])";
    var exp_min ="(0{1,2}|0?[1-9]|[1-5][0-9])";
    var exp_sec ="(0{1,2}|0?[1-9]|[1-5][0-9])";
    var exp_del =":";

    //hh:mm:ss
    val=trim(val);
    var exp1="^"+exp_hour+exp_del+exp_min+exp_del+exp_sec+"$";
    var exp1=new RegExp(exp1);
    if(exp1.test(val)){

        var arry=val.split(exp_del);
        var hour=arry[0];
        var min =arry[1];
        var sec =arry[2];

        return true;
    }else{
        return false;
    }

    function trim(str){
    //去除字串前後空白
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function ch_twsid(val){
//-------------------------------------------------------
//函式: ch_twsid()
//用途: 檢核台灣地區身分證字號
//-------------------------------------------------------
//val   值
//-------------------------------------------------------

    var ra="ABCDEFGHJKLMNPQRSTUVXYWZIO";
    var A1=new Array(1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3 );
    var A2=new Array(0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5 );
    var Mx=new Array(9,8,7,6,5,4,3,2,1,1);

    if((!val)||(trim(val)=='')){
        return false;
    }

    val=trim(val);
    val=val.toUpperCase();

    if(val.length!=10){
        return false;
    }else{
        var pos=ra.indexOf(val.charAt(0));
        if(pos==-1){
            return false;
        }
    }


    var sum=A1[pos]+A2[pos]*9;

    for(var i=1;i<10;i++){
        var v=parseInt(val.charAt(i));
        if (isNaN(v)){
            return false;
        }

        sum=sum+v*Mx[i];
    }

    if((sum%10)!=0){
        return false;
    }else{
        return true;
    }

    function trim(str){
    //去除字串前後空白
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function ch_valbetween(val,min,max){
//-------------------------------------------------------
//函式: ch_valbetween()
//用途: 檢核值範圍
//-------------------------------------------------------
//val       值
//min       最小值
//max       最大值
//-------------------------------------------------------

    //檢核參數
    if((trim(val)=='')||(isNaN(val))){
        return false;
    }
    if((trim(min)=='')||(isNaN(min))){
        return false;
    }
    if((trim(max)=='')||(isNaN(max))){
        return false;
    }

    //判斷型別
    var exp=/^(-)?(\d)+(\.){1}(\d)+$/;
    if(exp.test(val)){
        //浮點數
        val=parseFloat(val);
        //alert(1)
    }else{
        //整數
        val=parseInt(val);
        //alert(2)
    }

    if(exp.test(min)){
        //浮點數
        min=parseFloat(min);
    }else{
        //整數
        min=parseInt(min);
    }

    if(exp.test(max)){
        //浮點數
        max=parseFloat(max);
    }else{
        //整數
        max=parseInt(max);
    }

    var out='';
    out+=val+'\n';
    out+=min+'\n';
    out+=max+'\n';
    //alert(out);

    //驗證
    if((val>=min)&&(val<=max)){
        return true;
    }else{
        return false;
    }

    function trim(str){
    //去除字串前後空白
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}

function ch_year(val,type){
//-------------------------------------------------------
//函式: ch_year()
//用途: 檢核年份
//-------------------------------------------------------
//val   年份
//type  類型
//      yyyy    西元年,預設 0001~9999
//      yyy     民國年,值域 1~999
//-------------------------------------------------------

    //檢核參數
    if((val==undefined)||(val=='')||(isNaN(val))){
        return false;
    }
    if((type==undefined)||(type=='')){
        type='yyyy';
    }else{
        if(!in_array(type,['yyyy','yyy'])){
            type='yyyy';
        }
    }

    if(type=='yyyy'){
        var exp=new RegExp("^\\d{4}$");
    }else{
        var exp=new RegExp("^\\d{1,3}$");
    }

    if(exp.test(trim(val))){
        return true;
    }else{
        return false;
    }

    function in_array(val,array){
    //in_arry
        val=val.toString();

        for(var i=0;i<array.length;i++){
            if(val.toLowerCase()==array[i]){
                return true;
                break;
            }
        }
        return false;
    }

    function trim(str){
    //去除字串前後空白
        str=str.toString();
        str=str.replace(/^\s+/,'');
        str=str.replace(/\s+$/,'');
        return str;
    }
}
