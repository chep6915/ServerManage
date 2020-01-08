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



