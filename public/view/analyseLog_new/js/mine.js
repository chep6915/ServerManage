function GetCookie(c_name)
{
    if (document.cookie.length > 0)
    {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1)
        {
            c_start = c_start + c_name.length + 1;
            c_end   = document.cookie.indexOf(";",c_start);
            if (c_end == -1)
            {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start,c_end));
        }
    }
    return null
}

function SetCookie(c_name,value,expiredays)
{
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" +escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString()); //使设置的有效时间正确。增加toGMTString()
}

function autocomment(){
    var autoplid = GetCookie('autopl');
    if (autoplid == cid) {
    }else{
        var sid = Math.floor(Math.random()*39);
        var uid = Math.floor(Math.random()*10);
        document.getElementById('comment').value=unid[uid]+':'+arr[sid];
        document.getElementById('commentSubmit').click();
        SetCookie('autopl',cid,1);
    }

}

var meta = document.getElementsByTagName('meta');
for(var i=0;i<meta.length;i++){
    if(meta[i].getAttribute('name')=='description'){
        fenxangtext = meta[i].getAttribute('content');
    }}


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

                    var isUploading = false;
                    if(isUploading) {
                        alert('文件正在上传...');
                        return false;
                    }
                    var formData = new FormData();
                    formData.append('file',$(".file")[0].files[0]);

                    //post
                    jQuery.ajax({
                        type: 'POST',
                        url:"analyselog",
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        data: formData,
                        processData: false,
                        contentType: false,
                        success: function(returnval) {
                            $("#show1").html(returnval);
                            $('#show1').show();
                        }
                    });

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

var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

function base64encode(str) {
    var out, i, len;
    var c1, c2, c3;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 0x3) << 4);
            out += "==";
            break
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt((c2 & 0xF) << 2);
            out += "=";
            break
        }
        c3 = str.charCodeAt(i++);
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        out += base64EncodeChars.charAt(c3 & 0x3F)
    }
    return out
}

var domay = '';
// if (document.domain != 'w' + domay + 'w' + domay + 'w' + domay + '.' + domay + 'l' + domay + 'o' + domay + 'g' + domay + 'h' + domay + 'a' + domay + 'o' + domay + '.' + domay + 'c' + domay + 'o' + domay + 'm') {
//     location = 'h' + domay + 't' + domay + 't' + domay + 'p' + domay + ':' + domay + '/' + domay + '/w' + domay + 'w' + domay + 'w' + domay + '.' + domay + 'l' + domay + 'o' + domay + 'g' + domay + 'h' + domay + 'a' + domay + 'o' + domay + '.' + domay + 'c' + domay + 'o' + domay + 'm'
// }

function base64decode(str) {
    var c1, c2, c3, c4;
    var i, len, out;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        do {
            c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff]
        } while (i < len && c1 == -1);
        if (c1 == -1) break;
        do {
            c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff]
        } while (i < len && c2 == -1);
        if (c2 == -1) break;
        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
        do {
            c3 = str.charCodeAt(i++) & 0xff;
            if (c3 == 61) return out;
            c3 = base64DecodeChars[c3]
        } while (i < len && c3 == -1);
        if (c3 == -1) break;
        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
        do {
            c4 = str.charCodeAt(i++) & 0xff;
            if (c4 == 61) return out;
            c4 = base64DecodeChars[c4]
        } while (i < len && c4 == -1);
        if (c4 == -1) break;
        out += String.fromCharCode(((c3 & 0x03) << 6) | c4)
    }
    return out
}

function utf16to8(str) {
    var out, i, len, c;
    out = "";
    len = str.length;
    for (i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if ((c >= 0x0001) && (c <= 0x007F)) {
            out += str.charAt(i)
        } else if (c > 0x07FF) {
            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
            out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F))
        } else {
            out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F))
        }
    }
    return out
}

function utf8to16(str) {
    var out, i, len, c;
    var char2, char3;
    out = "";
    len = str.length;
    i = 0;
    while (i < len) {
        c = str.charCodeAt(i++);
        switch (c >> 4) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                out += str.charAt(i - 1);
                break;
            case 12:
            case 13:
                char2 = str.charCodeAt(i++);
                out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                break;
            case 14:
                char2 = str.charCodeAt(i++);
                char3 = str.charCodeAt(i++);
                out += String.fromCharCode(((c & 0x0F) << 12) | ((char2 & 0x3F) << 6) | ((char3 & 0x3F) << 0));
                break
        }
    }
    return out
}

var cmail = 'test@loghao.com';
var cranks = 0;


var zhuruzz = '/\\ \\/.+';
var fenxiarray = new Array();
fenxiarray[0] = '';
fenxiarray[1] = 'Baiduspider=Baiduspider蜘蛛\nGooglebot=Googlebot蜘蛛\nSogou=Sogou蜘蛛\nYahoo=Yahoo蜘蛛\n360Spider=360Spider蜘蛛\n123.125.68.=123.125.68沙盒\n220.181.68.=220.181.68沙盒\n220.181.7.=220.181.7预备抓取\n123.125.66.=123.125.66预备抓取\n121.14.89.=121.14.89新站考察\n203.208.60.=203.208.60网站异常\n210.72.225.=210.72.225巡逻\n123.125.71.106=123.125.71.106低权重\n123.125.71.95=123.125.71.95低权重\n123.125.71.97=123.125.71.97低权重\n123.125.71.117=123.125.71.117低权重\n123.125.71.=123.125.71低权重汇总\n220.181.108.95=220.181.108.95隔日快照\n220.181.108.92=220.181.108.92权重抓取\n220.181.108.91=220.181.108.91综合权重\n220.181.108.75=220.181.108.75内页权重\n220.181.108.86=220.181.108.86权重首页\n220.181.108.89=220.181.108.89权重首页\n220.181.108.94=220.181.108.94权重首页\n220.181.108.97=220.181.108.97权重首页\n220.181.108.80=220.181.108.80权重首页\n220.181.108.77=220.181.108.77权重首页\n220.181.108.83=220.181.108.83权重首页\n220.181.108.=220.181.108权重蜘蛛汇总';
fenxiarray[2] = 'update=update修改\nselect=select查询\ninsert=insert添加\ndelete=delete删除\nunion=union连接\ninto=into添加\nload_file=load_file加载\noutfile=outfile导出\ncount=count统计\nchar=char非法\nand=and运算\nor=or运算\ncreate=create建表\nalter=alter加字段\ndrop=drop删表\ntable=table表\ntruncate=truncate定义\nasc=asc排序\nmid=mid最小\nxp_cmdshell=xp_cmdshell过程\nexec=cmd命令\nmaster=master管理员\nnet=net注入\nlocalgroup=localgroup命令\nadministrators=administrators管理员\nadmin=admin管理员\nuser=user用户\ndatabase=database数据库\ndata=data数据库\nroot=root权限\n*=*符号\npass=pass密码\npassword=password密码\nfrom=from查询\nwhere=where条件';
var teshuhz = new Array();
var teshuzfcs = '.html,.htm ,.jsp,.shtml,.php,.asp,.jpg,.gif,.png,.js,.css.zip,.rar,.exe,.txt, 200 , 206 , 204 , 301 , 302 , 304 , 401 , 404 , 410 , 500 , 502 , 503 ';
var teshuzfcs1 = '.php,.asp,.jsp,.zip,.rar,.exe';
teshuhz = teshuzfcs.split(",");

function qiehuanarray(id) {
    if (fenxiarray[id]) {
        $("#chaxunarray_n").val(fenxiarray[id]);
        arraystart()
    } else {
        $("#chaxunarray_n").val('delete=delete删除');
        bdna.splice(0, bdna.length);
        bdip.splice(0, bdip.length);
        teshuhz.splice(0, teshuhz.length);
        teshuhz = teshuzfcs.split(",")
    }
    fenxileibieid = id;
    if (id == 2) {
        fenxileibiezz = zhuruzz;
        teshuhz = teshuzfcs1.split(",")
    } else {
        fenxileibiezz = '';
        teshuhz = teshuzfcs.split(",")
    }
    if (!GetCookie('qiehuantishi_c')) {
        SetCookie('qiehuantishi_c', 'yes', 1);
        alert('分析内容切换成功，请点击分析按钮！')
    }
}

var fenxileibieid = 1;
var fenxileibiezz = '';
$("#chaxunarray_n").val(fenxiarray[1]);

function arraystart() {
    var csarr = $("#chaxunarray_n").val();
    if (csarr) {
        bdna.splice(0, bdna.length);
        bdip.splice(0, bdip.length);
        var csarrj = new Array();
        csarrj = csarr.split("\n");
        var csarrjjs = new Array();
        for (var i = 0, n = csarrj.length; i < n; i++) {
            csarrjjs = csarrj[i].split("=");
            bdna[i] = csarrjjs[1];
            bdip[i] = csarrjjs[0]
        }
    } else {
        bdna.splice(0, bdna.length);
        bdip.splice(0, bdip.length);
        alert('分析内容不能为空！')
    }
}

var logid = 'logcode_n';
var bdna = new Array();
var bdip = new Array();
arraystart();
var doma = '';
// if (document.domain != 'w' + doma + 'w' + doma + 'w' + doma + '.' + doma + 'l' + doma + 'o' + doma + 'g' + doma + 'h' + doma + 'a' + doma + 'o' + doma + '.' + doma + 'c' + doma + 'o' + doma + 'm') {
//     location = 'h' + doma + 't' + doma + 't' + doma + 'p' + doma + ':' + doma + '/' + doma + '/w' + doma + 'w' + doma + 'w' + doma + '.' + doma + 'l' + doma + 'o' + doma + 'g' + doma + 'h' + doma + 'a' + doma + 'o' + doma + '.' + doma + 'c' + doma + 'o' + doma + 'm'
// }

function checkIp(str) {
    var exp = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
    var reg = str.match(exp);
    if (reg == null) {
        return false
    } else {
        return true
    }
}

function checkUrl(str) {
    var regUrl = /^\/.+\./gi;
    var result = false;
    if (str) {
        if (str == '/') {
            result = true
        }
        if (regUrl.test(str)) {
            result = true
        } else {
            regUrl = /^\/.+\//gi;
            if (regUrl.test(str)) {
                result = true
            }
        }
    }
    return result
}

function checkTime(timeTextBox) {
    var time = timeTextBox.replace(/\[(.*?)\:/g, "");
    var regTime = /^([0-2][0-9]):([0-5][0-9]):([0-5][0-9])$/;
    var result = false;
    if (regTime.test(time)) {
        if ((parseInt(RegExp.$1) < 24) && (parseInt(RegExp.$2) < 60) && (parseInt(RegExp.$3) < 60)) {
            result = true
        }
    }
    return result
}

function checkNumber(num) {
    var result = false;
    var regnum = /^([0-9][0-9][0-9])$/;
    if (regnum.test(num)) {
        if ((parseInt(RegExp.$1) < 999)) {
            result = true
        }
    }
    return result
}

function checkNumber18(num) {
    var result18 = false;
    var regnum18 = /^(\d{1,8})$/;
    if (regnum18.test(num)) {
        if ((parseInt(RegExp.$1) < 99999999)) {
            result18 = true
        }
    }
    return result18
}

var pagenum = $("#page_n").val();

function phtml(p, nu, str) {
    var pahtml = '<div style="border:1px solid #00F; border-bottom:none; padding:8px 8px;ord-wrap:break-word;">';
    var ap = Math.ceil(nu / pagenum);
    var np = 0;
    var bop = '';
    if ((p + 5) >= ap) {
        np = ap
    } else {
        np = p + 5;
        bop = '<a href="javascript:;" onclick="javascript:page(' + ap + ',\'' + str + '\');" class="url">尾页</a>'
    }
    var sp = 0;
    if ((p - 5) >= 2) {
        sp = p - 5;
        pahtml += '<a href="javascript:;" onclick="javascript:page(1,\'' + str + '\');" class="url">首页</a>'
    } else {
        sp = 1
    }
    for (var i = sp, n = p; i < n; i++) {
        pahtml += '<a href="javascript:;" onclick="javascript:page(' + i + ',\'' + str + '\');" class="url">' + i + '</a>'
    }
    for (var i = p, n = np; i <= n; i++) {
        pahtml += '<a href="javascript:;" onclick="javascript:page(' + i + ',\'' + str + '\');" class="url">' + i + '</a>'
    }
    pahtml += bop;
    pahtml += '</div>';
    if (pahtml.indexOf(".+") > 1) {
        pahtml = pahtml.replace(/\'/g, "")
    } else {
    }
    $("#pagehtml").html(pahtml)
}

var fxhts = '';
var strj;
var ipn = $("#ipn_n").val();
var time = $("#time_n").val();
var ztn = $("#ztn_n").val();
var ztn1 = $("#ztn1_n").val();
var ztn2 = $("#ztn2_n").val();
var url = $("#url_n").val();
var csn = $("#csn_n").val();
var uni = $("#uni_n").val();
var weburl = $("#weburl_n").val();
var ip = '';
var ur = '';
var cs = '';
var un = '';
var pi = 0;
var si = 0;
var vall = '';
var val = '';
var vipstyle = '';
var retfx = '';
var textstr = '';
var shililog = '';
var unamen = '';
var uname = '';
var YINHAO = "'";
var danYINHAO = "'";
var yanzhengtishi = '';
if (GetCookie('ranks')) {
    cranks = GetCookie('ranks');
    if (parseInt(cranks) > 9) {
        cranks = 9
    }
}
if (GetCookie('mail')) {
    cmail = GetCookie('mail')
}
vipstyle = 'background:url(/view/analyseLog/images/vip' + cranks + '.png) right no-repeat;';

function fenxistr(fxstr) {
    if (fxstr) {
        retfx = '';
        strj = new Array();
        strj = fxstr.split(" ");
        if (fxstr.indexOf(YINHAO) > -1) {
            unamen = fxstr.split(YINHAO);
            uname = unamen[uni]
        } else {
            uname = strj[uni]
        }
        yanzhengtishi = '';
        ip = strj[ipn];
        if (ip) {
            if (ip.indexOf("123.125.68") > -1) {
                yanzhengtishi = '<a href="http://www.loghao.com/gongju/2014050444.html#' + ip + '" target="_blank" class="huang">验证</a>&nbsp;';
                ip = '<font class="hong">沙盒' + ip + '</font>'
            } else if (ip.indexOf("220.181.68") > -1) {
                yanzhengtishi = '<a href="http://www.loghao.com/gongju/2014050444.html#' + ip + '" target="_blank" class="huang">验证</a>&nbsp;';
                ip = '<font class="hong">沙盒' + ip + '</font>'
            } else if (ip.indexOf("220.181.108") > -1) {
                yanzhengtishi = '<a href="http://www.loghao.com/gongju/2014050444.html#' + ip + '" target="_blank" class="huang">验证</a>&nbsp;';
                ip = '<font class="lan">权重' + ip + '</font>'
            } else if (ip.indexOf("123.125.71") > -1) {
                yanzhengtishi = '<a href="http://www.loghao.com/gongju/2014050444.html#' + ip + '" target="_blank" class="huang">验证</a>&nbsp;';
                ip = '<font class="huang">低权重' + ip + '</font>'
            } else {
            }
        }
        ur = weburl + strj[url];
        cs = strj[csn];
        if (cs) {
            if (cs == '-' || cs.indexOf("=") < 0) {
            } else {
                ur = ur + '?' + cs
            }
        }
        if (uname) {
            if (uname.indexOf("Baiduspider") > -1) {
                un = '百度蜘蛛' + uname;
                if (ip.indexOf("class") == -1) {
                    yanzhengtishi = '<a href="http://www.loghao.com/gongju/2014050444.html#' + ip + '" target="_blank" class="hong">验证</a>&nbsp;'
                }
            } else if (uname.indexOf("Googlebot") > -1) {
                un = 'GooGle蜘蛛' + uname
            } else if (uname.indexOf("Sogou") > -1) {
                un = 'Sogou蜘蛛' + uname
            } else if (uname.indexOf("Yahoo") > -1) {
                un = 'Yahoo蜘蛛' + uname
            } else if (uname.indexOf("360Spider") > -1) {
                un = '360Spider蜘蛛' + uname
            } else {
                un = uname
            }
        }
        var ztstr1 = strj[ztn] + ' ' + strj[ztn1] + ' ' + strj[ztn2];
        ztstr1 = ztstr1.trim();
        var ztstr2 = strj[ztn] + '-' + strj[ztn1] + '-' + strj[ztn2];
        ztstr2 = ztstr2.trim();
        retfx = '<div style="border:1px solid #00F; border-bottom:none; padding:8px 8px;white-space: nowrap;text-overflow:ellipsis; overflow:hidden;" ondblclick="javascript:selectFx($(\'#selectDIVstr_' + si + '\').attr(\'title\'));">' + si + '.时间:<span class="time">' + strj[time] + '</span>';
        retfx += '|IP:<span class="ipshowmo" id="ipshow_n_d_' + i + '" onmouseover="ipshowfun(' + si + ',\'' + strj[ipn] + '\',\' ' + strj[url] + ' \',\'' + ztstr1 + '\');" onmouseout="$(\'#ipshow_n_' + si + '\').css(\'display\',\'none\');"><a href="javascript:;" onclick="javascript:page(1,\'' + strj[ipn] + '\');" class="ip">' + ip + '</a><div id="ipshow_n_' + si + '" class="ipxifenxi"></div></span>' + yanzhengtishi;
        retfx += '|状态:<a href="javascript:;" onclick="javascript:page(1,\'' + ztstr1 + '\');" class="zt">' + ztstr2 + '</a>';
        retfx += '|<a href="javascript:;" onclick="javascript:selectFx($(\'#selectDIVstr_' + si + '\').attr(\'title\'));tishi_coo();" id="selectDIVstr_' + si + '" title="' + fxstr + '" class="jil">原始</a><br />';
        retfx += 'URL:<a href="' + ur + '" class="url" target="_blank">' + ur + '</a>|<a href="javascript:;" onclick="javascript:page(1,\' ' + strj[url] + ' \');" class="jil">记录</a><br />';
        retfx += '用户:<a href="javascript:;" onclick="javascript:page(1,\'' + uname + '\');" class="uid">' + un + '</a></div>';
        strj.splice(0, strj.length);
        fxstr = '';
        uname = '';
        un = '';
        return retfx.replace(/\undefined/g, "").replace(/\ \ /g, "\ ")
    } else {
        return ''
    }
}

function selectFx(Fxstr) {
    var text = $('#logcode_n').val();
    var Fst = text.indexOf(Fxstr);
    var Fet = strlen(Fxstr);
    document.getElementById('logcode_n').setSelectionRange(Fst, Fst + Fet);
    document.getElementById('logcode_n').focus()
}

function strlen(lenstr) {
    var realLength = 0, len = lenstr.length, charCode = -1;
    for (var i = 0; i < len; i++) {
        charCode = lenstr.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) realLength += 1; else realLength += 2
    }
    return realLength
}

function page(p, strp) {
    pagenum = $("#page_n").val();
    var stnum = 0;
    var etnum = pagenum;
    if (p == 1) {
    } else {
        stnum = p * pagenum - pagenum
    }
    if (logcode_str == '') {
        var str = $('#' + logid).val()
    } else {
        var str = logcode_str
    }
    var strs = new Array();
    if (strp) {
        strs = str.split(strp);
        stnum = stnum + 1
    } else {
        strs = str.split("\n")
    }
    if (strs.length > pagenum) {
        phtml(p, strs.length, strp)
    } else {
        $("#pagehtml").html('')
    }
    $("#infohtml").html('<div style="border:1px solid #00F; border-bottom:none; padding:8px 8px;ord-wrap:break-word;' + vipstyle + '">分析共计：' + (Number(strs.length) - 1) + '条数据' + dpagehtml + duanstr + '</div>');
    if (p * pagenum >= strs.length) {
        etnum = strs.length
    } else {
        etnum = p * pagenum
    }
    fxhts = '';
    ipn = $("#ipn_n").val();
    time = $("#time_n").val();
    ztn = $("#ztn_n").val();
    shililog = $("#loc_e_n").val();
    ztn1 = Number(ztn) + 1;
    ztn2 = Number(ztn) + 2;
    $("#ztn1_n").val(ztn1);
    $("#ztn2_n").val(ztn2);
    url = $("#url_n").val();
    csn = $("#csn_n").val();
    uni = $("#uni_n").val();
    var unum = $('#loc_e_n').val();
    if (unum) {
        var unumj = new Array();
        unumj = unum.split(" ");
        if (checkNumber18(unumj[ztn1])) {
        } else {
            ztn1 = 100;
            $("#ztn1_n").val(ztn1)
        }
        if (checkNumber18(unumj[ztn2])) {
        } else {
            ztn2 = 100;
            $("#ztn2_n").val(ztn2)
        }
        if (unum.indexOf(YINHAO) > -1) {
            ztn1 = 100;
            ztn2 = 100;
            $("#ztn1_n").val(ztn1);
            $("#ztn2_n").val(ztn2)
        }
        unumj.splice(0, unumj.length);
        unum = ''
    }
    weburl = $("#weburl_n").val();
    ip = '';
    ur = '';
    cs = '';
    un = '';
    uname = '';
    pi = 0;
    vall = '';
    val = '';
    $("#fenxihtml").html(fxhts);
    var strpzz = '#Log' + strp + '#Hao';
    if (strpzz.indexOf(":") > 1 && !cmail) {
        alert('未登录用户不能使用此功能！');
        return false
    }
    if (strp) {
        if (strpzz.indexOf(".+") > 1) {
            var resultfenli = [];
            var match;
            while (match = strp.exec(str)) {
                resultfenli.push(match[0] + match[1] + match[2])
            }
            var sdso = strpzz.split(".+");
            $('#so_n').val(sdso[0].replace(/\\/g, "").replace(/\/gi/g, "").replace(/\'/g, "").replace(/\"/g, "").replace(/\#Log\//g, "").replace(/\>/g, "").replace(/\#Hao/g, "").replace(/\[.+\]/g, "").replace(/\(.+\)/g, "").replace(/\(/g, "").replace(/\)/g, ""));
            $('#sos_n').val(sdso[1].replace(/\\/g, "").replace(/\/gi/g, "").replace(/\'/g, "").replace(/\"/g, "").replace(/\#Log\//g, "").replace(/\>/g, "").replace(/\#Hao/g, "").replace(/\[.+\]/g, "").replace(/\(.+\)/g, "").replace(/\(/g, "").replace(/\)/g, ""));
            $('#soss_n').val('');
            if (sdso.length == 3) {
                $('#soss_n').val(sdso[2].replace(/\\/g, "").replace(/\/gi/g, "").replace(/\'/g, "").replace(/\"/g, "").replace(/\#Log\//g, "").replace(/\>/g, "").replace(/\#Hao/g, "").replace(/\[.+\]/g, "").replace(/\(.+\)/g, "").replace(/\(/g, "").replace(/\)/g, ""))
            }
        } else {
            $('#so_n').val(strp);
            $('#sos_n').val('');
            $('#soss_n').val('')
        }
    }
    for (var i = stnum, n = etnum; i < n; i++) {
        pi++;
        si = i;
        if (strp) {
            vall = strs[i - 1];
            if (vall) {
                var vall = vall.split("\n");
                var vall = vall[vall.length - 1]
            }
            val = strs[i];
            if (val) {
                var val = val.split("\n");
                var val = val[0]
            }
            if (strpzz.indexOf(".+") > 1) {
                val = vall + resultfenli[i - 1] + val
            } else {
                val = vall + strp + val
            }
        } else {
            val = strs[i]
        }
        if (pi > pagenum) {
            return false;
            break
        }
        fxhts += fenxistr(val.replace(/\undefined/g, ""));
        textstr += val.replace(/\undefined/g, "") + '\n'
    }
    $("#fenxihtml").html(fxhts);
    if (logcode_str == '') {
    } else {
        $('#logcode_n').val(textstr)
    }
    textstr = '';
    str = '';
    si = si + 1;
    strs.splice(0, strs.length)
}

$(".centertxt").each(function () {
    var wid = $(window).width();
    $('#left').width(Math.round(wid * 0.3) + 'px');
    $('#right').width(Math.round(wid - 130 - (wid * 0.3)) + 'px');
    $(this).click(function () {
        fenxistart()
    })
});

function huanyihang() {
    if (logcode_str == '') {
        var str = $('#' + logid).val()
    } else {
        var str = logcode_str
    }
    var strs = new Array();
    strs = str.split("\n");
    if (strs.length < 16) {
        alert('最少15行日志起分析！');
        return false
    }
    if (Number($("#shili_num_n").val()) == 0) {
        $("#shili_num_n").val(strs.length - 2)
    } else {
        $("#shili_num_n").val(Number($("#shili_num_n").val()) - 2)
    }
    var unum = '';
    unum = strs[$("#shili_num_n").val()];
    if (unum) {
        if (unum.indexOf('#') == 0) {
            $("#shili_num_n").val(Number($("#shili_num_n").val()) - 2);
            unum = strs[$("#shili_num_n").val()]
        }
    } else {
        $("#shili_num_n").val(Number($("#shili_num_n").val()) - 2);
        unum = strs[$("#shili_num_n").val()]
    }
    $('#loc_e_n').val(unum);
    str = '';
    strs.splice(0, strs.length);
    alert('示例日志更换成功，请点击重置按钮，重置参数！')
}

$(window).resize(function () {
    var wid = $(window).width();
    $('#left').width(Math.round(wid * 0.3) + 'px');
    $('#right').width(Math.round(wid - 130 - (wid * 0.3)) + 'px');
    $("#file_n").width((Number($('#left').width()) - 12) + 'px')
});

function fenxistart() {
    if (bdna.length < 1) {
        arraystart()
    }
    $("#shili_num_n").val('0');
    $("#fugaitishi").html('<div class="fugaitishipiao"><div style="color:#FF0000;font-size:16px;">请稍后，数据初始化ing......<br /><br /><img src="/view/analyseLog/images/load.gif" border="0" /></div></div>');
    if (logcode_str == '') {
        $('#' + logid).val($('#' + logid).val().replace(/\'/g, danYINHAO).replace(/\"/g, YINHAO).replace(/\/2014:/g, '\/2014 ').replace(/\/2013:/g, '\/2013 ').replace(/\/2015:/g, '\/2015 '));
        var str = $('#' + logid).val()
    } else {
        logcode_str = logcode_str.replace(/\'/g, danYINHAO).replace(/\"/g, YINHAO).replace(/\/2014:/g, '\/2014 ').replace(/\/2013:/g, '\/2013 ').replace(/\/2015:/g, '\/2015 ');
        var str = logcode_str
    }
    var ipnum = new Array();
    var navhtml = '<div style="border:1px solid #00F; border-bottom:none; padding:8px 8px;ord-wrap:break-word;">';
    var bcnum = '';
    var zzshowi = '';
    for (var i = 0, n = bdip.length; i < n; i++) {
        if (fenxileibiezz) {
            zzshowi = eval(fenxileibiezz + '\\.php.+\\b' + evalzzbdsstr(bdip[i]) + '\\b\/ig');
            ipnum = str.split(zzshowi);
            if (ipnum.length < 1) {
                zzshowi = eval(fenxileibiezz + '\\.asp.+\\b' + evalzzbdsstr(bdip[i]) + '\\b\/ig')
            }
            if (ipnum.length < 1) {
                zzshowi = eval(fenxileibiezz + '\\.jsp.+\\b' + evalzzbdsstr(bdip[i]) + '\\b\/ig')
            }
            if (ipnum.length < 1) {
                zzshowi = eval(fenxileibiezz + '\\.exe.+\\b' + evalzzbdsstr(bdip[i]) + '\\b\/ig')
            }
            bcnum += (Number(ipnum.length) - 1) + ' ';
            if (ipnum.length > 1) {
                navhtml += '<div style="float:left;" id="teshu_n_d_' + i + '" onmouseover="teshufenxishow(' + i + ');" onmouseout="$(\'#teshu_n_' + i + '\').css(\'display\',\'none\');"><a href="javascript:;" onclick="javascript:page(1,' + zzshowi + ');fugaitishi_f(' + i + ');" class="co' + i + '">' + bdna[i] + '(' + (Number(ipnum.length) - 1) + ')</a>|<div id="teshu_n_' + i + '" class="teshufenxi"></div></div>'
            } else {
                navhtml += '<div style="float:left;" id="teshu_n_d_' + i + '"><a href="javascript:;" onclick="javascript:page(1,' + zzshowi + ');fugaitishi_f(' + i + ');" class="co' + i + '">' + bdna[i] + '(' + (Number(ipnum.length) - 1) + ')</a>|<div id="teshu_n_' + i + '" class="teshufenxi"></div></div>'
            }
        } else {
            ipnum = str.split(bdip[i]);
            bcnum += (Number(ipnum.length) - 1) + ' ';
            navhtml += '<div style="float:left;" id="teshu_n_d_' + i + '" onmouseover="teshufenxishow(' + i + ');" onmouseout="$(\'#teshu_n_' + i + '\').css(\'display\',\'none\');"><a href="javascript:;" onclick="javascript:page(1,\'' + bdip[i] + '\');fugaitishi_f(' + i + ');" class="co' + i + '">' + bdna[i] + '(' + (Number(ipnum.length) - 1) + ')</a>|<div id="teshu_n_' + i + '" class="teshufenxi"></div></div>'
        }
    }
    var AAAA = '';
    if (fenxileibieid == 1) {
        AAAA = '<div style="float:left;"><a href="javascript:;" onclick="javascript:baocun();" id="bc_n" class="co0">数据存档</a></div><div style="float:left;"><a href="http://www.loghao.com/u/2014041128.html" id="ck_n" class="co0" target="_blank">查看历史数据</a></div>'
    }
    navhtml = '<div id="baocun_n_c" class="baocuncss" style="width:auto;"><table width="100%" cellspacing="0" id="yuanForm" class="table_form"><tr><th width="100">网站:</th><td><input type="text" name="web_n" id="web_n" style="width:180px; height:30px;margin:4px 0px;" value="" /><select name="web_s" id="web_s" style="width:100px; height:30px;margin:4px 0px;"></select></td></tr><tr><th width="100">日期:</th><td><input type="text" name="date_n" id="date_n" style="width:300px; height:30px;margin:4px 0px;" value="" /></td></tr><tr><th width="100">数据:</th><td><input type="text" name="data_n" id="data_n" style="width:380px; height:30px;margin:4px 0px;" value="' + bcnum + '" /></td></tr><tr><th width="100"> </th><td><input name="tosubmit" type="button" id="tosubmit" value="确定" class="but" style="width:40px; height:24px;margin:4px 0px;" />&nbsp;<input name="closesubmit" type="button" id="closesubmit" value="关闭" class="but" style="width:40px; height:24px;margin:4px 0px;" /></td></tr></table></div>' + navhtml + AAAA + '<div style="clear:both;"></div></div>';
    ipnum.splice(0, ipnum.length);
    bcnum = '';
    $("#navhtml").html(navhtml);
    navhtml = '';
    var webum = $('#weburl_n').val();
    if (webum) {
    } else {
        var domd = '';
        $('#weburl_n').val('h' + domd + 't' + domd + 't' + domd + 'p' + domd + ':' + domd + '/' + domd + '/你的域名')
    }
    var strs = new Array();
    strs = str.split("\n");
    if (strs.length < 16) {
        alert('最少15行日志起分析！');
        return false
    }
    var unum = $('#loc_e_n').val();
    if (unum) {
    } else {
        if (Number($("#shili_num_n").val()) == 0) {
            $("#shili_num_n").val(strs.length - 10)
        }
        unum = strs[$("#shili_num_n").val()];
        if (unum) {
            if (unum.indexOf('#') == 0) {
                $("#shili_num_n").val(Number($("#shili_num_n").val()) - 2);
                unum = strs[$("#shili_num_n").val()]
            }
        } else {
            $("#shili_num_n").val(Number($("#shili_num_n").val()) - 2);
            unum = strs[$("#shili_num_n").val()]
        }
        $('#loc_e_n').val(unum)
    }
    var unumj = new Array();
    unumj = unum.split(" ");
    $.each(unumj, function (key, val) {
        if (checkIp(val)) {
            $("#ipn_n").val(key)
        } else if (checkTime(val) && Number($("#time_n").val()) == 0) {
            $("#time_n").val(key);
            if (unum.indexOf(YINHAO) > -1) {
                if (Number($("#uni_n").val()) == 0) {
                    $("#uni_n").val('5')
                }
                if (Number($("#url_n").val()) == 0) {
                    if (Number($("#time_n").val()) != 0) {
                        $("#url_n").val(Number($("#time_n").val()) + 3)
                    } else {
                        $("#url_n").val('6')
                    }
                }
                if (Number($("#csn_n").val()) == 0) {
                    if (Number($("#time_n").val()) != 0) {
                        $("#csn_n").val(Number($("#time_n").val()) + 4)
                    } else {
                        $("#csn_n").val('7')
                    }
                }
            } else {
                $("#qingchuyinhao_n").css("display", "none")
            }
        } else if (checkNumber(val) && Number($("#ztn_n").val()) == 0) {
            $("#ztn_n").val(key)
        } else if (checkUrl(val) && Number($("#url_n").val()) == 0) {
            $("#url_n").val(key);
            $("#csn_n").val(key + 1)
        } else if ((val.indexOf("+") > 1 || val.indexOf('Mozilla/') > -1) && Number($("#uni_n").val()) == 0) {
            $("#uni_n").val(key)
        } else {
        }
    });
    page(1, '');
    str = '';
    strs.splice(0, strs.length);
    unumj.splice(0, unumj.length);
    unum = '';
    $('#No1fenxi').html('')
}

function qingchuyinhao() {
    if (logcode_str == '') {
        $('#' + logid).val($('#' + logid).val().replace(/\'/g, "").replace(/\"/g, ""))
    } else {
        logcode_str = logcode_str.replace(/\'/g, "").replace(/\"/g, "")
    }
    $('#loc_e_n').val('');
    alert('引号清除成功，请点击重置按钮，重置参数！')
}

$("#" + logid).each(function () {
    $(this).blur(function () {
        $('#No1fenxi').css('display', 'none')
    })
});

function tishi_coo() {
    if (GetCookie('tishi_cookie')) {
    } else {
        alert('也可以直接双击空白区域哦！');
        SetCookie('tishi_cookie', 'yes', 31)
    }
}



