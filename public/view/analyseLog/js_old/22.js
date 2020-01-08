function teshufenxistrxifen(tsi, ids) {
    maxnum = $('#max_n').val();
    if (logcode_str == '') {
        var str = $('#' + logid).val();
    } else {
        var str = logcode_str;
    }

    zzbds = eval('/' + '\ \/'.replace(/\ /g, "\\ ").replace(/\//g, "\\/") + '.+' + evalzzbdsstr(teshuhz[ids]) + '.+' + evalzzbdsstr(bdip[tsi]) + '\/ig');
    zzbdsnum = str.split(zzbds);
    if (Number(zzbdsnum.length) > 1 && Number(zzbdsnum.length) < maxnum) {
        if (teshuhz[ids].indexOf(".") > -1) {
            xifenzzbds = '/#LogHao#.+' + evalzzbdsstr(bdip[tsi]) + '\/ig';
            zzbds1 = eval('/' + '\ \/\ '.replace(/\ /g, "\\ ").replace(/\//g, "\\/") + '.+' + evalzzbdsstr(bdip[tsi]) + '\/ig');
        } else {
            xifenzzbds = '/#LogHao#.+' + evalzzbdsstr(teshuhz[ids]) + '.+' + evalzzbdsstr(bdip[tsi]) + '\/ig';
            zzbds1 = eval('/' + '\ \/\ '.replace(/\ /g, "\\ ").replace(/\//g, "\\/") + '.+' + evalzzbdsstr(teshuhz[ids]) + '.+' + evalzzbdsstr(bdip[tsi]) + '\/ig');
        }

        teshufenxistrxifenstr(str, zzbds1, xifenzzbds, tsi, ids);
    } else {
        zzbds = eval('/' + '\ \/'.replace(/\ /g, "\\ ").replace(/\//g, "\\/") + '.+' + evalzzbdsstr(bdip[tsi]) + '.+' + evalzzbdsstr(teshuhz[ids]) + '\/ig');
        zzbdsnum = str.split(zzbds);
        if (Number(zzbdsnum.length) > 1 && Number(zzbdsnum.length) < maxnum) {
            if (teshuhz[ids].indexOf(".") > -1) {
                xifenzzbds = '/#LogHao#.+' + evalzzbdsstr(bdip[tsi]) + '\/ig';
                zzbds1 = eval('/' + '\ \/\ '.replace(/\ /g, "\\ ").replace(/\//g, "\\/") + '.+' + evalzzbdsstr(bdip[tsi]) + '\/ig');
            } else {
                xifenzzbds = '/#LogHao#.+' + evalzzbdsstr(bdip[tsi]) + '.+' + evalzzbdsstr(teshuhz[ids]) + '\/ig';
                zzbds1 = eval('/' + '\ \/\ '.replace(/\ /g, "\\ ").replace(/\//g, "\\/") + '.+' + evalzzbdsstr(bdip[tsi]) + '.+' + evalzzbdsstr(teshuhz[ids]) + '\/ig');
            }

            teshufenxistrxifenstr(str, zzbds1, xifenzzbds, tsi, ids);

        } else {

            zzbds = eval('/' + evalzzbdsstr(bdip[tsi]) + '.+' + '\ \/'.replace(/\ /g, "\\ ").replace(/\//g, "\\/") + '.+' + evalzzbdsstr(teshuhz[ids]) + '\/ig');

            zzbdsnum = str.split(zzbds);
            if (Number(zzbdsnum.length) > 1 && Number(zzbdsnum.length) < maxnum) {

                if (teshuhz[ids].indexOf(".") > -1) {
                    xifenzzbds = '/' + evalzzbdsstr(bdip[tsi]) + '.+#LogHao#' + '\/ig';
                    zzbds1 = eval('/' + evalzzbdsstr(bdip[tsi]) + '.+' + '\ \/\ '.replace(/\ /g, "\\ ").replace(/\//g, "\\/") + '\/ig');
                } else {
                    xifenzzbds = '/' + evalzzbdsstr(bdip[tsi]) + '.+#LogHao#' + '.+' + evalzzbdsstr(teshuhz[ids]) + '\/ig';
                    zzbds1 = eval('/' + evalzzbdsstr(bdip[tsi]) + '.+' + '\ \/\ '.replace(/\ /g, "\\ ").replace(/\//g, "\\/") + '.+' + evalzzbdsstr(teshuhz[ids]) + '\/ig');
                }
                teshufenxistrxifenstr(str, zzbds1, xifenzzbds, tsi, ids);
            }
        }
    }
    if (!teshustr) {
        teshustr = 'null';
    }
    zzbdsnum.splice(0, zzbdsnum.length);
    str = '';
    return teshustr;
}


function ipshowfun(ids, ip, url, zt) {
    $("#ipshow_n_" + ids).css("display", "block");
    if ($("#ipshow_n_" + ids).html()) {
    } else {
        var ipshwostr = '';
        if (ids && url && zt && ip) {
            if (logcode_str == '') {
                var str = $('#' + logid).val()
            } else {
                var str = logcode_str
            }
            ipshwostr = '<div class="hang">';
            zzbds = eval('/' + evalzzbdsstr(ip) + '.+' + evalzzbdsstr(zt) + '\/ig');
            zzbdsnum = str.split(zzbds);
            if (Number(zzbdsnum.length) > 1) {
                ipshwostr += '<a href="javascript:;" onclick="javascript:page(1,' + zzbds + ');" class="co0">' + ip + '->' + zt + '(<span class="hong">' + (Number(zzbdsnum.length) - 1) + '</span>)</a>'
            } else {
                zzbds = eval('/' + evalzzbdsstr(zt) + '.+' + evalzzbdsstr(ip) + '\/ig');
                zzbdsnum = str.split(zzbds);
                ipshwostr += '<a href="javascript:;" onclick="javascript:page(1,' + zzbds + ');" class="co0">' + ip + '->' + zt + '(<span class="hong">' + (Number(zzbdsnum.length) - 1) + '</span>)</a>'
            }
            ipshwostr += '</div>';
            ipshwostr += '<div class="hang">';
            zzbds = eval('/' + evalzzbdsstr(ip) + '.+' + evalzzbdsstr(url) + '\/ig');
            zzbdsnum = str.split(zzbds);
            if (Number(zzbdsnum.length) > 1) {
                ipshwostr += '<a href="javascript:;" onclick="javascript:page(1,' + zzbds + ');" class="co0">' + ip + '->' + url.trim() + '(<span class="hong">' + (Number(zzbdsnum.length) - 1) + '</span>)</a>'
            } else {
                zzbds = eval('/' + evalzzbdsstr(url) + '.+' + evalzzbdsstr(ip) + '\/ig');
                zzbdsnum = str.split(zzbds);
                ipshwostr += '<a href="javascript:;" onclick="javascript:page(1,' + zzbds + ');" class="co0">' + ip + '->' + url.trim() + '(<span class="hong">' + (Number(zzbdsnum.length) - 1) + '</span>)</a>'
            }
            ipshwostr += '</div>';
            str = ''
        } else {
            ipshwostr = 'null'
        }
        $("#ipshow_n_" + ids).html(ipshwostr);
        ipshwostr = ''
    }
}

function teshufenxistrxifenstr(str, zzbds1, xifenzzbds1, tsi, ids) {
    var teshuxifenstr = '';
    teshuxifenstr = str.match(zzbds).join(" ").replace(/\ /g, "\n ");
    var reg = teshuxifenstr.match(/\ \/(.+)/g);
    if (reg) {
        reg = reg.join(",").match(/([^,]+)(?!.*\1)/ig).reverse();
        var arrteshuxifenstrj = new Array();
        var arrteshuxifenstr = new Array();
        for (var i = 0, n = reg.length; i < n; i++) {
            arrteshuxifenstr[i] = new Array();
            arrteshuxifenstrj = teshuxifenstr.split(reg[i]);
            arrteshuxifenstr[i][0] = arrteshuxifenstrj.length - 1;
            arrteshuxifenstr[i][1] = reg[i]
        }
        arrteshuxifenstr.sort(function (x, y) {
            return y[0] - x[0]
        })
    }
    if (ids == 0) {
        zzbdsnum = str.split(zzbds1);
        if (Number(zzbdsnum.length) > 1) {
            teshustr = '<div class="hang"><a href="javascript:;" onclick="javascript:page(1,' + zzbds1 + ');" class="co' + tsi + '">/(<span class="hong">' + (Number(zzbdsnum.length) - 1) + '</span>)</a></div>'
        }
    }
    if (arrteshuxifenstr) {
        for (var i = 0, n = arrteshuxifenstr.length; i < n; i++) {
            xifenzzbds = eval(xifenzzbds1.replace('#LogHao#', arrteshuxifenstr[i][1].replace(/\./g, "\\.").replace(/\ /g, "\\ ").replace(/\_/g, "\\_").replace(/\-/g, "\\-").replace(/\//g, "\\/")));
            teshustr += '<div class="hang"><a href="javascript:;" onclick="javascript:page(1,' + xifenzzbds + ');" class="co' + tsi + '">' + arrteshuxifenstr[i][1] + '(<span class="hong">' + arrteshuxifenstr[i][0] + '</span>)</a></div>'
        }
    }
    return teshustr
}

function h24hstrxifen(tsi) {
    if (logcode_str == '') {
        var str = $('#' + logid).val()
    } else {
        var str = logcode_str
    }
    zzbdsnum = str.split(bdip[tsi]);
    if (Number(zzbdsnum.length) > 1) {
        for (var i = 0, n = timearr.length; i < n; i = i + 2) {
            teshustr += '<div class="hang">';
            zzbds = eval('/' + evalzzbdsstr(timearr[i]) + '[0-5][0-9]:[0-5][0-9].+' + evalzzbdsstr(bdip[tsi]) + '\/ig');
            zzbdsnum = str.split(zzbds);
            if (Number(zzbdsnum.length) > 1) {
                teshustr += '<a href="javascript:;" onclick="javascript:page(1,' + zzbds + ');" class="co' + tsi + '">' + timearr[i].trim() + '00-59(<span class="hong">' + (Number(zzbdsnum.length) - 1) + '</span>)</a>'
            } else {
                zzbds = eval('/' + evalzzbdsstr(bdip[tsi]) + '.+' + evalzzbdsstr(timearr[i]) + '[0-5][0-9]:[0-5][0-9]\/ig');
                zzbdsnum = str.split(zzbds);
                teshustr += '<a href="javascript:;" onclick="javascript:page(1,' + zzbds + ');" class="co' + tsi + '">' + timearr[i].trim() + '00-59(<span class="hong">' + (Number(zzbdsnum.length) - 1) + '</span>)</a>'
            }
            zzbds = eval('/' + evalzzbdsstr(timearr[i + 1]) + '[0-5][0-9]:[0-5][0-9].+' + evalzzbdsstr(bdip[tsi]) + '\/ig');
            zzbdsnum = str.split(zzbds);
            if (Number(zzbdsnum.length) > 1) {
                teshustr += '<a href="javascript:;" onclick="javascript:page(1,' + zzbds + ');" class="co' + tsi + '">' + timearr[i + 1].trim() + '00-59(<span class="hong">' + (Number(zzbdsnum.length) - 1) + '</span>)</a>'
            } else {
                zzbds = eval('/' + evalzzbdsstr(bdip[tsi]) + '.+' + evalzzbdsstr(timearr[i + 1]) + '[0-5][0-9]:[0-5][0-9]\/ig');
                zzbdsnum = str.split(zzbds);
                teshustr += '<a href="javascript:;" onclick="javascript:page(1,' + zzbds + ');" class="co' + tsi + '">' + timearr[i + 1].trim() + '00-59(<span class="hong">' + (Number(zzbdsnum.length) - 1) + '</span>)</a>'
            }
            teshustr += '</div>'
        }
    } else {
        teshustr = 'null'
    }
    zzbdsnum.splice(0, zzbdsnum.length);
    str = '';
    return teshustr
}

var zzbds = '';
var zzbds1 = '';
var zzbdsnum = 0;
var maxnum = 0;
var teshustr = '';
var xifenzzbds = '';
var zzbdsnum = new Array();
var timearr = new Array();
timearr[0] = "00:";
timearr[1] = "01:";
timearr[2] = "02:";
timearr[3] = "03:";
timearr[4] = "04:";
timearr[5] = "05:";
timearr[6] = "06:";
timearr[7] = "07:";
timearr[8] = "08:";
timearr[9] = "09:";
timearr[10] = "10:";
timearr[11] = "11:";
timearr[12] = "12:";
timearr[13] = "13:";
timearr[14] = "14:";
timearr[15] = "15:";
timearr[16] = "16:";
timearr[17] = "17:";
timearr[18] = "18:";
timearr[19] = "19:";
timearr[20] = "20:";
timearr[21] = "21:";
timearr[22] = "22:";
timearr[23] = "23:";

function evalzzbdsstr(str) {
    return str.replace(/\./g, "\\.").replace(/\ /g, "\\ ").replace(/\_/g, "\\_").replace(/\-/g, "\\-").replace(/\:/g, "\\:").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\)/g, "\\)").replace(/\(/g, "\\(").replace(/\//g, "\\/").replace(/\*/g, "\\*")
}

function teshufenxistr(tsi) {
    if (logcode_str == '') {
        var str = $('#' + logid).val()
    } else {
        var str = logcode_str
    }
    zzbdsnum = str.split(bdip[tsi]);
    if (Number(zzbdsnum.length) > 1) {
        teshustr = '<div style="float:left;" id="teshu_n_d_' + tsi + '_24h" onmouseover="h24h(' + tsi + ',\'24h\');" onmouseout="$(\'#teshu_n_' + tsi + '_24h\').css(\'display\',\'none\');"><a href="javascript:;" onclick="javascript:;" class="hong24h">24h</a><div id="teshu_n_' + tsi + '_24h" class="teshufenxixifen"></div></div>';
        for (var i = 0, n = teshuhz.length; i < n; i++) {
            zzbds = eval('/' + evalzzbdsstr(teshuhz[i]) + '.+' + evalzzbdsstr(bdip[tsi]) + '\/ig');
            zzbdsnum = str.split(zzbds);
            if (Number(zzbdsnum.length) > 1) {
                if (Number(zzbdsnum.length) > 1) {
                    teshustr += '<div style="float:left;" id="teshu_n_d_' + tsi + '_' + i + '" onmouseover="teshufenxishowxifen(' + tsi + ',' + i + ');" onmouseout="$(\'#teshu_n_' + tsi + '_' + i + '\').css(\'display\',\'none\');"><a href="javascript:;" onclick="javascript:page(1,' + zzbds + ');fugaitishi_f(' + tsi + ');" class="co' + tsi + '">' + teshuhz[i].trim() + '(' + (Number(zzbdsnum.length) - 1) + ')</a><div id="teshu_n_' + tsi + '_' + i + '" class="teshufenxixifen"></div></div>'
                } else {
                    teshustr += '<div style="float:left;" id="teshu_n_d_' + tsi + '_' + i + '"><a href="javascript:;" onclick="javascript:page(1,' + zzbds + ');fugaitishi_f(' + tsi + ');" class="co' + tsi + '">' + teshuhz[i].trim() + '(' + (Number(zzbdsnum.length) - 1) + ')</a></div>'
                }
            } else {
                zzbds = eval('/' + evalzzbdsstr(bdip[tsi]) + '.+' + evalzzbdsstr(teshuhz[i]) + '\/ig');
                zzbdsnum = str.split(zzbds);
                if (Number(zzbdsnum.length) > 1) {
                    if (Number(zzbdsnum.length) > 1) {
                        teshustr += '<div style="float:left;" id="teshu_n_d_' + tsi + '_' + i + '" onmouseover="teshufenxishowxifen(' + tsi + ',' + i + ');" onmouseout="$(\'#teshu_n_' + tsi + '_' + i + '\').css(\'display\',\'none\');"><a href="javascript:;" onclick="javascript:page(1,' + zzbds + ');fugaitishi_f(' + tsi + ');" class="co' + tsi + '">' + teshuhz[i].trim() + '(' + (Number(zzbdsnum.length) - 1) + ')</a><div id="teshu_n_' + tsi + '_' + i + '" class="teshufenxixifen"></div></div>'
                    } else {
                        teshustr += '<div style="float:left;" id="teshu_n_d_' + tsi + '_' + i + '"><a href="javascript:;" onclick="javascript:page(1,' + zzbds + ');fugaitishi_f(' + tsi + ');" class="co' + tsi + '">' + teshuhz[i].trim() + '(' + (Number(zzbdsnum.length) - 1) + ')</a></div>'
                    }
                }
            }
        }
    } else {
        teshustr = 'null';
        $("#teshu_n_" + tsi).css("display", "none")
    }
    zzbdsnum.splice(0, zzbdsnum.length);
    str = '';
    return teshustr
}

function shoudongsearch() {
    var yanshoudong = /^([a-zA-Z0-9\: _.\/-]+)$/;
    var retnum = 0;
    var shoudongzz = '';
    var shoudongzz1 = '';
    var shoudongzz2 = '';
    var shoudongzz3 = '';
    var shoudongstr = '';
    if ($('#so_n').val()) {
        if (!(yanshoudong).test($('#so_n').val().trim())) {
            alert('自定义搜索只支持字母、数字、空格、:_、/、.、-，请修改搜索词！');
            retnum = 4
        } else {
            retnum = retnum + 1;
            shoudongstr = $('#so_n').val();
            shoudongzz1 = $('#so_n').val().replace(/\./g, "\\.").replace(/\ /g, "\\ ").replace(/\_/g, "\\_").replace(/\-/g, "\\-").replace(/\//g, "\\/")
        }
    }
    if ($('#sos_n').val()) {
        if (!(yanshoudong).test($('#sos_n').val().trim())) {
            alert('自定义搜索只支持字母、数字、空格、:_、/、.、-，请修改搜索词！');
            retnum = 4
        } else {
            retnum = retnum + 1;
            shoudongstr = $('#sos_n').val();
            shoudongzz2 = $('#sos_n').val().replace(/\./g, "\\.").replace(/\ /g, "\\ ").replace(/\_/g, "\\_").replace(/\-/g, "\\-").replace(/\//g, "\\/")
        }
    }
    if ($('#soss_n').val()) {
        if (!(yanshoudong).test($('#soss_n').val().trim())) {
            alert('自定义搜索只支持字母、数字、空格、:_、/、.、-，请修改搜索词！');
            retnum = 4
        } else {
            retnum = retnum + 1;
            shoudongstr = $('#soss_n').val();
            shoudongzz3 = $('#soss_n').val().replace(/\./g, "\\.").replace(/\ /g, "\\ ").replace(/\_/g, "\\_").replace(/\-/g, "\\-").replace(/\//g, "\\/")
        }
    }
    if (retnum == 1) {
        page(1, shoudongstr)
    } else if (retnum == 2) {
        if (!shoudongzz1) {
            shoudongzz = eval('/' + shoudongzz2 + '.+' + shoudongzz3 + '\/ig')
        }
        if (!shoudongzz2) {
            shoudongzz = eval('/' + shoudongzz1 + '.+' + shoudongzz3 + '\/ig')
        }
        if (!shoudongzz3) {
            shoudongzz = eval('/' + shoudongzz1 + '.+' + shoudongzz2 + '\/ig')
        }
        page(1, shoudongzz)
    } else if (retnum == 3) {
        shoudongzz = eval('/' + shoudongzz1 + '.+' + shoudongzz2 + '.+' + shoudongzz3 + '\/ig');
        page(1, shoudongzz)
    } else if (retnum == 0) {
        page(1, '')
    } else {
    }
}

var doman = '';
// if (document.domain != 'w' + doman + 'w' + doman + 'w' + doman + '.' + doman + 'l' + doman + 'o' + doman + 'g' + doman + 'h' + doman + 'a' + doman + 'o' + doman + '.' + doman + 'c' + doman + 'o' + doman + 'm') {
//     location = 'h' + doman + 't' + doman + 't' + doman + 'p' + doman + ':' + doman + '/' + doman + '/w' + doman + 'w' + doman + 'w' + doman + '.' + doman + 'l' + doman + 'o' + doman + 'g' + doman + 'h' + doman + 'a' + doman + 'o' + doman + '.' + doman + 'c' + doman + 'o' + doman + 'm'
// }

function teshufenxishow(tsi) {
    $("#teshu_n_" + tsi).css("display", "block");
    if ($("#teshu_n_" + tsi).html()) {
    } else {
        teshustr = '';
        $("#teshu_n_" + tsi).html(teshufenxistr(tsi))
    }
}

function teshufenxishowxifen(tsi, ids) {
    $("#teshu_n_" + tsi + '_' + ids).css("display", "block");
    if ($("#teshu_n_" + tsi + '_' + ids).html()) {
    } else {
        teshustr = '';
        $("#teshu_n_" + tsi + '_' + ids).html(teshufenxistrxifen(tsi, ids))
    }
}

function h24h(tsi, ids) {
    $("#teshu_n_" + tsi + '_' + ids).css("display", "block");
    if ($("#teshu_n_" + tsi + '_' + ids).html()) {
    } else {
        teshustr = '';
        $("#teshu_n_" + tsi + '_' + ids).html(h24hstrxifen(tsi))
    }
}



