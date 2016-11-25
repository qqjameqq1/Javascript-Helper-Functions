# Javascript-Helper-Functions

## ajax 
|Function Name    |Function Description                              |
|:----------------|:-------------------------------------------------|
|ajax_encode()    |將參數予以 encodeURI 處理,以便使用ajax傳送        |
|ajax_get()       |使用get方法,送出ajax要求                          |
|ajax_getxml()    |使用get方法,送出ajax要求                          |
|ajax_post()      |使用post方法,送出ajax要求                         |
|ajax_postxml()   |使用post方法,送出ajax要求                         |
|ajax_urlencode() |建立參數經 encodeURI 處理過的網址,以便使用ajax傳送|
|ajax_xmlhttp()   |取回XMLHttp物件                                   |

## array
|Function Name             |Function Description                         |
|:-------------------------|:--------------------------------------------|
|array2str()               |陣列轉字串                                   |
|array_change_key_case()   |變更鍵大小寫                                 |
|array_chunk()             |將陣列元素,依指定的各數,予以分組             |
|array_clone()             |陣列複製                                     |
|array_combine()           |建立關連陣列                                 |
|array_contact()           |陣列合併                                     |
|array_count_values()      |計算元素出現次數                             |
|array_decodeURI()         |陣列元素值 decodeURI                         |
|array_diff()              |元素值比對,一對多比較                        |
|array_diff_assoc()        |完全比對(值與鍵),一對一依序比較              |
|array_diff_key()          |元素鍵比對,一對多比較                        |
|array_encodeURI()         |陣列元素值 encodeURI                         |
|array_escape()            |陣列元素值 escape                            |
|array_even()              |過濾陣列,傳回的是偶數的元素                  |
|array_fill()              |陣列填值                                     |
|array_fill_keys()         |陣列填值,以關連陣列裡的key為鍵值             |
|array_fill_values()       |陣列填值,以關連陣列裡的val為鍵值             |
|array_filter()            |過濾陣列,根據自訂函式傳回符合的元素          |
|array_flip()              |元素反轉                                     |
|array_intersect()         |元素值比對,一對多比較                        |
|array_intersect_assoc()   |完全比對(值與鍵),一對一依序比較              |
|array_isEmpty()           |檢核空陣列                                   |
|array_key_exists()        |檢查鍵是否存在                               |
|array_keys()              |取回陣列鍵,同PHP函式                         |
|array_left()              |從前頭取n個元素                              |
|array_map()               |套用函式在每一個元素                         |
|array_max()               |找出陣列最大值                               |
|array_merge()             |陣列合併,同鍵會取代                          |
|array_mid()               |取出指定位置個數                             |
|array_min()               |找出陣列最小值                               |
|array_odd()               |過濾陣列,傳回的是奇數的元素                  |
|array_pad()               |陣列填值,指定長度,填入val,長度為負值時,往前插|
|array_pop()               |取回陣列末尾元素                             |
|array_product()           |陣列連乘積                                   |
|array_push()              |插入元素至陣列末尾                           |
|array_rand()              |隨機取出元素鍵值                             |
|array_reduce()            |兩兩傳入函數套用,僅適用數字                  |
|array_replace()           |取代元素,如鍵名相同則取代                    |
|array_right()             |從末尾取n個元素                              |
|array_rndsort()           |陣列亂數排序                                 |
|array_search()            |搜尋元素,並傳回鍵                            |
|array_shift()             |取回陣列前頭元素                             |
|array_sum()               |陣列元素加總,同PHP用法                       |
|array_unescape()          |陣列元素值 unescape                          |
|array_unique()            |移除重複元素                                 |
|array_unshift()           |插入元素至陣列前頭                           |
|array_values()            |取回陣列值,同PHP函式,但允許搜尋特定值        |
|array_walk()              |使用自訂函式,套用到每一個陣列元素,同PHP用法  |
|in_array()                |檢驗元素是否在陣列裡,同PHP用法               |
|is_array()                |判斷是不是陣列                               |
|range()                   |建立範圍陣列                                 |
|shuffle()                 |打亂陣列                                     |
|str2array()               |字串轉陣列                                   |
|array_range()             |值域數值陣列                                 |

##date
|Function Name    |Function Description                              |
|:----------------|:-------------------------------------------------|
|date_add()       |日期運算                                          |
|date_addzero()   |日期時間補零                                      |
|date_ampm()      |判斷時間是am,pm                                   |
|date_array()     |日期陣列                                          |
|date_between()   |是否在指定日期間格內                              |
|date_compare()   |日期比較                                          |
|date_fstring()   |取回日期時間字串                                  |
|date_monthdays() |取回月份天數                                      |
|date_scompare()  |日期比較                                          |
|date_sort()      |日期排序                                          |
|date_string()    |取回日期時間字串                                  |
|date_stripzero() |日期時間去零                                      |
|date_week_array()|週區段陣列                                        |
|date_weekname()  |取回中文禮拜幾名稱                                |
|date_ymbetween() |根據 起始年,月 至 終止年,月 取得起始日到終止日資訊|
|day_range()      |日期區段                                          |
|is_date()        |是不是日期                                        |

##effect
|Function Name              |Function Description |
|:--------------------------|:--------------------|
|set_opacity()              |透明設定             |
|fadeElement.initialise(obj)|透明漸變,滑鼠移入移出|

##form
|Function Name     |Function Description       |
|:-----------------|:--------------------------|
|array_city.js     |縣市鄉鎮含郵遞區號_陣列清單|
|bcalendar_sel()   |動態生成年月日下拉         |
|bind()            |資料繫結                   |
|bmonth_sel()      |動態生成月下拉             |
|byear_sel()       |動態生成年下拉             |
|city_region_sel() |縣市鄉鎮下拉               |
|create_checkbox() |動態生成CHECKBOX           |
|create_radio()    |動態生成RADIO              |
|create_select()   |動態生成下拉選單           |
|create_text()     |動態建立文件方塊           |
|db_checkbox()     |資料繫結核取方塊           |
|db_radio()        |資料繫結圈選方塊           |
|db_select()       |資料繫結下拉選單           |
|db_textarea()     |繫結文字欄位               |
|db_txt()          |繫結文字欄位               |
|get_checkbox_val()|取得核取方塊選取值         |
|get_radio_val()   |取得radio元件選取值        |
|get_select_val()  |取得下拉選單選取值         |
|month_sel()       |繫結月下拉                 |
|year_sel()        |繫結年下拉                 |
|checkbox_ischeck()|checkbox是否勾選           |
|radio_ischeck()   |radio是否勾選              |
|texts_hasval()    |texts是否輸入              |

##fso
|Function Name      |Function Description   |
|:------------------|:----------------------|
|pathinfo()         |路徑資訊               |
|basename()         |取回檔名               |
|bytes_to()         |bytes轉其他單位        |
|dirname()          |取回路徑               |
|size_to()          |單位互轉               |
|to_bytes()         |其他單位轉bytes        |

##iframe
|Function Name    |Function Description |
|:----------------|:--------------------|
|iframe_navi()    |iframe導覽           |
|iframe_loop()    |iframe輪撥           |
|get_iframe()     |取得iframe物件       |

##math
|Function Name      |Function Description   |
|:------------------|:----------------------|
|accDiv()           |除法修正               |
|accAdd()           |加法修正               |
|accMul()           |乘法修正               |
|accSub()           |減法修正               |
|is_even()          |判斷是偶數             |
|is_float()         |是否為浮點數           |
|is_odd()           |判斷是奇數             |
|round()            |四捨五入               |

##net
|Function Name      |Function Description             |
|:------------------|:--------------------------------|
|setCookie()        |設定cookie                       |
|getCookie()        |取得cookie值                     |
|deleteCookie()     |刪除cookie值                     |
|url_encode()       |建立參數經 encodeURI 處理過的網址|

##obj
|Function Name    |Function Description                |
|:----------------|:-----------------------------------|
|get_by_name()    |依name屬性取回物件集合              |
|get_by_tagname() |依tagname屬性取回物件集合           |
|get_iframe()     |取得iframe物件                      |
|findPosX()       |取得物件x座標,相對於頁面原點(左上角)|
|findPosY()       |取得物件y座標,相對於頁面原點(左上角)|
|get_wh()         |取得物件寬高尺寸,回傳物件           |

##public
|Function Name    |Function Description   |
|:----------------|:----------------------|
|page_wh()        |頁面實際高寬           |
|browser_detect.js|遊覽器偵測             |
|go()             |重導頁面               |
|go_encode()      |重導頁面,參數會進行編碼|

##string
|Function Name             |Function Description                                           |
|:-------------------------|:--------------------------------------------------------------|
|addslashes()              |addslashes                                                     |
|chr()                     |字元碼轉字元                                                   |
|chunk_split()             |指定長度分割字串,傳回字串                                      |
|crc32()                   |crc32編碼                                                      |
|explode()                 |字串分割成陣列                                                 |
|htmlspecialchars()        |特定字元html編碼                                               |
|htmlspecialchars_decode() |特定字元html反編碼                                             |
|implode()                 |陣列合併輸出字串                                               |
|join()                    |陣列合併輸出字串                                               |
|lcfirst()                 |字首小寫                                                       |
|lcwords()                 |單字字首小寫,每個單字均會套用                                  |
|md5()                     |md5編碼                                                        |
|nl2br()                   |換行轉br                                                       |
|ord()                     |字元轉ASCII                                                    |
|parse_str()               |以query string格式,解析設定變數                                |
|parse_url()               |解析url                                                        |
|sha1()                    |sha1編碼                                                       |
|str_repeat()              |重複字串N次                                                    |
|str_replace()             |字串取代                                                       |
|str_shuffle()             |打亂字串                                                       |
|str_split()               |依據指定字元長度,分割字串成陣列                                |
|strcasecmp()              |字串比對,不分大小寫                                            |
|strcmp()                  |字串比對,分大小寫                                              |
|strip_space()             |去除全部的空白字元                                             |
|strip_tags()              |移除標籤,支援保留特標籤                                        |
|stripos()                 |以第一次出現為基準,取得字串出現的位置,不分大小寫               |
|stripslashes()            |stripslashes                                                   |
|stristr()                 |搜尋特定字串,以第一次出現為基準,並傳回部份字串,不分大小寫      |
|strleft()                 |由左至右依序取回N個字元                                        |
|strncasecmp()             |指定長度進行字串比對,不分大小寫                                |
|strncmp()                 |指定長度進行字串比對,分大小寫                                  |
|strpos()                  |以第一次出現為基準,取得字串出現的位置,分大小寫                 |
|strrchr()                 |搜尋特定字元,以最後一次出現為基準,並傳回部份字串,分大小寫      |
|strrev()                  |字串反轉                                                       |
|strright()                |由右至左依序取回N個字元                                        |
|strripos()                |以最後一次出現為基準,取得字串出現的位置,不分大小寫             |
|strstr()                  |搜尋特定字串,以第一次出現為基準,並傳回部份字串,分大小寫        |
|strtolower()              |字串轉小寫                                                     |
|strtoupper()              |字串轉大寫                                                     |
|substr()                  |從特定位置取回部份字串                                         |
|trim()                    |去前後空白字元                                                 |
|ltrim()                   |去左邊空白字元                                                 |
|rtrim()                   |去右邊空白字元                                                 |
|chop()                    |去右邊空白字元                                                 |
|ucfirst()                 |字首大寫                                                       |
|ucwords()                 |單字字首大寫,每個單字均會套用                                  |
|urldecode()               |urldecode                                                      |
|utf8_encode()             |utf8_encode                                                    |

##table
|Function Name       |Function Description  |
|:-------------------|:---------------------|
|table_hover()       |表格列變色            |
|table_row_delete()  |清除表格,刪除特定列   |
|table_row_preserve()|清除表格,保留特定列   |
|table_rowcolor()    |設定奇偶數列的預設顏色|

##vaildate
|Function Name      |Function Description       |
|:------------------|:--------------------------|
|ch_cellphone()     |檢核手機                   |
|ch_date()          |檢核日期                   |
|ch_datetime()      |檢核日期時間               |
|ch_email()         |檢核電子郵件               |
|ch_floatlen()      |檢核浮點數長度             |
|ch_homephone()     |檢核台灣地區電話           |
|ch_intlen()        |檢核整數長度               |
|ch_ipv4()          |檢核IP,格式IPv4            |
|ch_isbn            |檢核isbn碼(10+13)          |
|ch_isbn_country    |檢核isbn碼所在位置(參考...)|
|ch_isfloat()       |檢核是否為浮點數           |
|ch_isint()         |檢核是否為整數             |
|ch_isnumeric()     |檢核是否是數字             |
|ch_len()           |檢核長度                   |
|ch_lenbetween()    |檢核長度範圍               |
|ch_macaddr()       |檢核網卡mac                |
|ch_month()         |檢核月份                   |
|ch_postzip()       |檢核台灣地區郵遞區號       |
|ch_time()          |檢核時間                   |
|ch_twsid()         |檢核台灣地區身分證字號     |
|ch_valbetween()    |檢核值範圍                 |
|ch_year()          |檢核年份                   |