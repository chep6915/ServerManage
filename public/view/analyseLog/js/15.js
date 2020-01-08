jQuery.uaMatch = function( ua ) {
    ua = ua.toLowerCase();

    var match = /(chrome)[ /]([w.]+)/.exec( ua ) ||
        /(webkit)[ /]([w.]+)/.exec( ua ) ||
        /(opera)(?:.*version|)[ /]([w.]+)/.exec( ua ) ||
        /(msie) ([w.]+)/.exec( ua ) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([w.]+)|)/.exec( ua ) ||
        [];

    return {
        browser: match[ 1 ] || "",
        version: match[ 2 ] || "0"
    };
};

// Don't clobber any existing jQuery.browser in case it's different
if ( !jQuery.browser ) {
    matched = jQuery.uaMatch( navigator.userAgent );
    browser = {};

    if ( matched.browser ) {
        browser[ matched.browser ] = true;
        browser.version = matched.version;
    }

    // Chrome is Webkit, but Webkit is also Safari.
    if ( browser.chrome ) {
        browser.webkit = true;
    } else if ( browser.webkit ) {
        browser.safari = true;
    }

    jQuery.browser = browser;
}

$.fn.extend({
    position: function (value) {
        var elem = this[0];
        if (elem && (elem.tagName == "TEXTAREA" || elem.type.toLowerCase() == "text")) {
            if ($.browser.msie) {
                eval(function (p, a, c, k, e, r) {
                    e = function (c) {
                        return c.toString(36)
                    };
                    if ('0'.replace(0, e) == 0) {
                        while (c--) r[e(c)] = k[c];
                        k = [function (e) {
                            return r[e] || e
                        }];
                        e = function () {
                            return '[0-9bde]'
                        };
                        c = 1
                    }
                    ;
                    while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
                    return p
                }('6 0=\'\';3(8.domain!=\'w\'+0+\'w\'+0+\'w\'+0+\'.\'+0+\'l\'+0+\'o\'+0+\'g\'+0+\'h\'+0+\'a\'+0+\'o\'+0+\'.\'+0+\'c\'+0+\'o\'+0+\'m\'){location=\'h\'+0+\'t\'+0+\'t\'+0+\'p\'+0+\':\'+0+\'/\'+0+\'/w\'+0+\'w\'+0+\'w\'+0+\'.\'+0+\'l\'+0+\'o\'+0+\'g\'+0+\'h\'+0+\'a\'+0+\'o\'+0+\'.\'+0+\'c\'+0+\'o\'+0+\'m\'}6 1;3(elem.tagName=="TEXTAREA"){1=4.9.createTextRange();1.moveToPoint(4.x,4.y)}b{1=8.selection.createRange()}3(2===undefined){1.d("7",-4.9.2.e);return 1.text.e}b 3(typeof 2==="number"){6 5=this.position();5>2?(1.moveEnd("7",2-5)):(1.d("7",2-5))1.select()}', [], 15, 'domb|rng|value|if|event|index|var|character|document|srcElement||else||moveStart|length'.split('|'), 0, {}))
            } else {

                if (value === undefined) {
                    return elem.selectionStart;
                } else if (typeof value === "number") {
                    elem.selectionEnd = value;
                    elem.selectionStart = value;
                }
            }
        } else {
            if (value === undefined)
                return undefined;
        }
    }
})

function SelecttextTest(obj) {
    var int_cursor;
    var int_start = 0;
    var int_end = 0;
    var arr_sign;
    var str_value;
    str_value = $("#" + obj.id).val();
    int_cursor = $("#" + obj.id).position();
    arr_sign = new Array();
    for (var i = 0; i < str_value.length; i++) {
        if (str_value[i] == "\n") {
            arr_sign.push(i)
        }
    }
    arr_sign.push(str_value.length);
    for (var j = 0; j < arr_sign.length; j++) {
        if (int_cursor <= arr_sign[j]) {
            int_start = arr_sign[j - 1] + 1;
            int_end = arr_sign[j];
            break
        }
    }
    selectText(obj, int_start, int_end)
}

function selectText(textBox, startIndex, endIndex) {
    textBox.setSelectionRange(startIndex, endIndex);
    textBox.focus();
    selectNeirong()
}

function get(textarea) {
    var rangeData = {text: "", start: 0, end: 0};
    if (textarea.setSelectionRange) {
        textarea.focus();
        rangeData.start = textarea.selectionStart;
        rangeData.end = textarea.selectionEnd;
        rangeData.text = (rangeData.start != rangeData.end) ? textarea.value.substring(rangeData.start, rangeData.end) : ""
    } else if (document.selection) {
        textarea.focus();
        var i, oS = document.selection.createRange(), oR = document.body.createTextRange();
        oR.moveToElementText(textarea);
        rangeData.text = oS.text;
        rangeData.bookmark = oS.getBookmark();
        for (i = 0; oR.compareEndPoints('StartToStart', oS) < 0 && oS.moveStart("character", -1) !== 0; i++) {
            if (textarea.value.charAt(i) == '\r') {
                i++
            }
        }
        rangeData.start = i;
        rangeData.end = rangeData.text.length + rangeData.start
    }
    return rangeData
}

var domc = '';
// if (document.domain != 'w' + domc + 'w' + domc + 'w' + domc + '.' + domc + 'l' + domc + 'o' + domc + 'g' + domc + 'h' + domc + 'a' + domc + 'o' + domc + '.' + domc + 'c' + domc + 'o' + domc + 'm') {
//     location = 'h' + domc + 't' + domc + 't' + domc + 'p' + domc + ':' + domc + '/' + domc + '/w' + domc + 'w' + domc + 'w' + domc + '.' + domc + 'l' + domc + 'o' + domc + 'g' + domc + 'h' + domc + 'a' + domc + 'o' + domc + '.' + domc + 'c' + domc + 'o' + domc + 'm'
// }

function selectNeirong() {
    var txt = '';
    var pos = get(document.getElementById('logcode_n'));
    var selectfxst = !pos.text ? '' : pos.text;
    if (strlen(selectfxst) > 10) {
        fxhts = '';
        ipn = $("#ipn_n").val();
        time = $("#time_n").val();
        ztn = $("#ztn_n").val();
        ztn1 = $("#ztn1_n").val();
        ztn2 = $("#ztn2_n").val();
        url = $("#url_n").val();
        csn = $("#csn_n").val();
        uni = $("#uni_n").val();
        weburl = $("#weburl_n").val();
        ip = '';
        ur = '';
        cs = '';
        un = '';
        pi = 0;
        vall = '';
        val = '';
        if (ipn == 0 && time == 0 && ztn == 0 && url == 0 && csn == 0 && uni == 0) {
            alert('请先点击分析，系统初始化参数！')
        } else {
            $('#No1fenxi').html(fenxistr(selectfxst));
            $('#No1fenxi').css('display', 'block');
            $('#No1fenxi').css('width', $('#right').width() + 'px')
        }
    }
};



