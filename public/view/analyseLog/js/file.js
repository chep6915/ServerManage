var zzbds = /firefox\/([\d.]+)/;


function PreviewImage(fileObj) {
    if (tishishow(fileObj.value)) {

        var domaxe = '';
        // if (document.domain != 'w' + domaxe + 'w' + domaxe + 'w' + domaxe + '.' + domaxe + 'l' + domaxe + 'o' + domaxe + 'g' + domaxe + 'h' + domaxe + 'a' + domaxe + 'o' + domaxe + '.' + domaxe + 'c' + domaxe + 'o' + domaxe + 'm') {
        //     location = 'h' + domaxe + 't' + domaxe + 't' + domaxe + 'p' + domaxe + ':' + domaxe + '/' + domaxe + '/w' + domaxe + 'w' + domaxe + 'w' + domaxe + '.' + domaxe + 'l' + domaxe + 'o' + domaxe + 'g' + domaxe + 'h' + domaxe + 'a' + domaxe + 'o' + domaxe + '.' + domaxe + 'c' + domaxe + 'o' + domaxe + 'm'
        // }
        var allowExtention = ".txt,.log";
        var extention = fileObj.value.substring(fileObj.value.lastIndexOf(".") + 1).toLowerCase();
        var browserVersion = window.navigator.userAgent.toUpperCase();

        if (allowExtention.indexOf(extention) > -1) {
            if (fileObj.files) {
                if (window.FileReader) {

                    var domaxa = '';
                    // if (document.domain != 'w' + domaxa + 'w' + domaxa + 'w' + domaxa + '.' + domaxa + 'l' + domaxa + 'o' + domaxa + 'g' + domaxa + 'h' + domaxa + 'a' + domaxa + 'o' + domaxa + '.' + domaxa + 'c' + domaxa + 'o' + domaxa + 'm') {
                    //     location = 'h' + domaxa + 't' + domaxa + 't' + domaxa + 'p' + domaxa + ':' + domaxa + '/' + domaxa + '/w' + domaxa + 'w' + domaxa + 'w' + domaxa + '.' + domaxa + 'l' + domaxa + 'o' + domaxa + 'g' + domaxa + 'h' + domaxa + 'a' + domaxa + 'o' + domaxa + '.' + domaxa + 'c' + domaxa + 'o' + domaxa + 'm'
                    // }
                    var reader = new FileReader();
                    reader.onload = function (val) {
                        str1 = val.target.result;
                        var strs1 = new Array();
                        strs1 = str1.split(",");
                        logfuzhi(jiequstr(strs1[1]));
                        strs1.splice(0, strs1.length);
                        str1 = ''
                    }
                    reader.readAsDataURL(fileObj.files[0]);
                } else if (browserVersion.indexOf("SAFARI") > -1) {
                    alert("不支持Safari6.0以下浏览器!");
                }
            } else if (browserVersion.indexOf("MSIE") > -1) {

                var domaxb = '';
                // if (document.domain != 'w' + domaxb + 'w' + domaxb + 'w' + domaxb + '.' + domaxb + 'l' + domaxb + 'o' + domaxb + 'g' + domaxb + 'h' + domaxb + 'a' + domaxb + 'o' + domaxb + '.' + domaxb + 'c' + domaxb + 'o' + domaxb + 'm') {
                //     location = 'h' + domaxb + 't' + domaxb + 't' + domaxb + 'p' + domaxb + ':' + domaxb + '/' + domaxb + '/w' + domaxb + 'w' + domaxb + 'w' + domaxb + '.' + domaxb + 'l' + domaxb + 'o' + domaxb + 'g' + domaxb + 'h' + domaxb + 'a' + domaxb + 'o' + domaxb + '.' + domaxb + 'c' + domaxb + 'o' + domaxb + 'm'
                // }
                if (browserVersion.indexOf("MSIE 6") > -1) {
                    logfuzhi(readFile(fileObj.value))
                } else {
                    fileObj.select();
                    if (browserVersion.indexOf("MSIE 9") > -1) fileObj.blur();
                    str2 = document.selection.createRange().text;
                    var strs2 = new Array();
                    strs2 = str2.split(",");
                    logfuzhi(jiequstr(strs2[1]));
                    strs2.splice(0, strs2.length);
                    str2 = ''
                }
            } else if (browserVersion.indexOf("FIREFOX") > -1) {
                var domaxc = '';
                // if (document.domain != 'w' + domaxc + 'w' + domaxc + 'w' + domaxc + '.' + domaxc + 'l' + domaxc + 'o' + domaxc + 'g' + domaxc + 'h' + domaxc + 'a' + domaxc + 'o' + domaxc + '.' + domaxc + 'c' + domaxc + 'o' + domaxc + 'm') {
                //     location = 'h' + domaxc + 't' + domaxc + 't' + domaxc + 'p' + domaxc + ':' + domaxc + '/' + domaxc + '/w' + domaxc + 'w' + domaxc + 'w' + domaxc + '.' + domaxc + 'l' + domaxc + 'o' + domaxc + 'g' + domaxc + 'h' + domaxc + 'a' + domaxc + 'o' + domaxc + '.' + domaxc + 'c' + domaxc + 'o' + domaxc + 'm'
                // }
                var firefoxVersion = parseFloat(browserVersion.toLowerCase().match(zzbds)[1]);
                if (firefoxVersion < 7) {
                    str3 = fileObj.files[0].getAsDataURL();
                    var strs3 = new Array();
                    strs3 = str3.split(",");
                    logfuzhi(jiequstr(strs3[1]));
                    strs3.splice(0, strs3.length);
                    str3 = ''
                } else {
                    str4 = window.URL.createObjectURL(fileObj.files[0]);
                    var strs4 = new Array();
                    strs4 = str4.split(",");
                    logfuzhi(jiequstr(strs4[1]));
                    strs4.splice(0, strs4.length);
                    str4 = ''
                }
            } else {
                var domaxd = '';
                // if (document.domain != 'w' + domaxd + 'w' + domaxd + 'w' + domaxd + '.' + domaxd + 'l' + domaxd + 'o' + domaxd + 'g' + domaxd + 'h' + domaxd + 'a' + domaxd + 'o' + domaxd + '.' + domaxd + 'c' + domaxd + 'o' + domaxd + 'm') {
                //     location = 'h' + domaxd + 't' + domaxd + 't' + domaxd + 'p' + domaxd + ':' + domaxd + '/' + domaxd + '/w' + domaxd + 'w' + domaxd + 'w' + domaxd + '.' + domaxd + 'l' + domaxd + 'o' + domaxd + 'g' + domaxd + 'h' + domaxd + 'a' + domaxd + 'o' + domaxd + '.' + domaxd + 'c' + domaxd + 'o' + domaxd + 'm'
                // }
                str5 = fileObj.value;
                var strs5 = new Array();
                strs5 = str5.split(",");
                logfuzhi(jiequstr(strs5[1]));
                strs5.splice(0, strs5.length);
                str5 = '';
            }
        } else {
            alert("仅支持" + allowExtention + "为后缀名的文件!");
            fileObj.value = "";
        }
    }
}


var startnum = 1;
var jiequnum = 30000000;
var dpagehtml = '';
var endstr = '';
var enddatastr = '';
var duanstr = '';

function jiequstr(str) {
    if (str.length > (jiequnum * 1.5)) {
        if (str.length > (jiequnum * 3)) {
            jiequnum = 20000000
        }
        if (!dpagehtml) {
            dpagehtml = dhtml(str.length)
        }
        var s = jiequnum * (startnum - 1);
        var e = (jiequnum * startnum) - s;
        var utf8str = utf8to16(base64decode(str.substr(s, e))) + '<>';
        var t = utf8str.lastIndexOf('\n');
        var t1 = utf8str.lastIndexOf('<>');
        var retstr = endstr + utf8str.substr(0, utf8str.lastIndexOf('\n'));
        endstr = utf8str.substring(t + 1, t1);
        utf8str = '';
        enddatastr = '-' + startnum;
        duanstr = '当前分析第' + startnum + '段';
        return retstr
    } else {
        enddatastr = '';
        duanstr = '';
        dpagehtml = '';
        return utf8to16(base64decode(str))
    }
}

function dhtml(nu) {
    var ap = Math.ceil(nu / jiequnum);
    var dahtml = '';
    for (var i = 1, n = ap; i <= n; i++) {
        dahtml += '<a href="javascript:;" onclick="javascript:startnum=' + i + ';PreviewImage(document.getElementById(\'file_n\'));" class="url">第' + i + '段</a>'
    }
    return '&nbsp;&nbsp;' + dahtml
}

function tishishow(files) {
    if (files) {
        $("#fugaitishi").css('display', 'block');
        $("#fugaitishi").css('height', $(document).height() + 'px');
        $("#fugaitishi").css('width', $(document).width() + 'px');
        $("#fugaitishi").html('<div class="fugaitishipiao"><div style="color:#FF0000;font-size:16px;">请稍后，文件加载中......<br /><br /><img src="/view/analyseLog/images/load.gif" border="0" /></div></div>');
        return true
    } else {
        return false
    }
}

var domax = '';
// if (document.domain != 'w' + domax + 'w' + domax + 'w' + domax + '.' + domax + 'l' + domax + 'o' + domax + 'g' + domax + 'h' + domax + 'a' + domax + 'o' + domax + '.' + domax + 'c' + domax + 'o' + domax + 'm') {
//     location = 'h' + domax + 't' + domax + 't' + domax + 'p' + domax + ':' + domax + '/' + domax + '/w' + domax + 'w' + domax + 'w' + domax + '.' + domax + 'l' + domax + 'o' + domax + 'g' + domax + 'h' + domax + 'a' + domax + 'o' + domax + '.' + domax + 'c' + domax + 'o' + domax + 'm'
// }
var logcode_str = '';

function logfuzhi(logval) {
    var daorustrs = new Array();
    daorustrs = logval.split("\n");
    if (daorustrs.length > 2000) {
        $("#logcode_n").val('');
        logcode_str = logval;
        $("#center").attr('class', 'centerdiv1');
        fenxistart();
        $("#fugaitishi").css('display', 'none')
    } else {
        logcode_str = '';
        $("#logcode_n").val(logval);
        $("#center").attr('class', 'centerdiv');
        $("#fugaitishi").css('display', 'none')
    }
    logval = '';
    daorustrs.splice(0, daorustrs.length)
}

function readFile(filename) {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var f = fso.OpenTextFile(filename, 1);
    var s = "";
    while (!f.AtEndOfStream) s += f.ReadLine() + "\n";
    f.Close();
    return s
}
