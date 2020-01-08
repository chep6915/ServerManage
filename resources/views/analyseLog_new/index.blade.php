<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <title>aiLog网站日志在线分析工具_拉格好百度蜘蛛(baiduspider)在线分析_LogHao站长工具</title>
        <meta name="keywords" content="网站日志分析,百度蜘蛛,baiduspider,百度蜘蛛ip,LogHao,LogHao蜘蛛分析器,LogHao站长工具,拉格好" />
        <meta name="description" content="LogHao站长工具,最好的网站日志分析工具,baiduspider在线分析工具,拉格好首创百度蜘蛛在线分析." />
        <link href="http://www.loghao.com/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <link href="{{asset('/view/analyseLog/css/2014.css')}}" type="text/css" rel="stylesheet" />
        <script type="text/javascript" src="{{ asset('/view/common/js/jquery-3.4.1.min.js') }}"></script>
        <script language="javascript" src="{{ asset('/view/analyseLog_new/js/mine.js') }}"></script>
    </head>
    <body>
    <div class="header">
        <div class="hdlogo clearfix">
            <div class="wrap clearfix">
                <a href="http://localhost:88/analyseLog/" class="logo">
                    <img src="{{ asset('/view/analyseLog/picture/logo.jpg') }}" width="231" height="61" />
                </a>
                <div class="hdlinks">
                </div>
            </div>
        </div>
    </div>
    <div class="main-nav">
        <div class="w clearfix">
            <ul class="nav" id="site-nav">
                <li><a href="http://www.loghao.com/">首页</a></li>
                <li><a href="http://www.loghao.com/rizhi/">日志分析</a></li>
                <li><a href="http://www.loghao.com/zhizhu/">蜘蛛分析</a></li>
                <li><a href="http://www.loghao.com/jiaocheng/">工具教程</a></li>
                <li><a href="http://www.loghao.com/seo/">seo</a></li>
                <li><a href="http://www.loghao.com/gongju/">站长工具</a></li>
                <li><a href="http://www.loghao.com/u/">用户中心</a></li>
            </ul>
        </div>
    </div>
    <div class="wrap">

    </div>
    <div class="wrap">
        <div style="float:left; width:30%; height:auto;" id="left">
            网站URL:<font style="color:#F00; line-height:20px;">&nbsp;&nbsp;必须以“http://”开头，结尾不带“/”</font><br />
            <div>
                <input type="text" value="" id="weburl_n" style="width:100%; height:20px;" />
                <div id="weburl_n_c" class="tishinum" style="width:auto; margin-left:0px;"></div></div>
            示例日志:<font style="color:#F00; line-height:20px;">&nbsp;&nbsp;自动提取，可手动粘贴一行标准日志</font>&nbsp;<a onclick="javascript:huanyihang();" id="huanyihang_n" href="javascript:;">换一行</a><br />
            <div>
                <input type="text" value="" id="loc_e_n" style="width:100%; height:20px;" />
                <div id="loc_e_n_c" class="tishinum" style="width:auto; margin-left:0px;"></div></div>
            <div class="folderfile">
                日志文件:<font style="color:#F00; line-height:20px;">&nbsp;&nbsp;直接选择log、txt日志文件</font>&nbsp;<a onclick="javascript:qingchuyinhao();" id="qingchuyinhao_n" href="javascript:;">清除引号</a><br /><input name="file_n" class="file" id="file_n" type="file" style="width:100%; height:22px;" onChange="javascript:PreviewImage(this);" />
            </div>
            网站日志:<font style="color:#F00; line-height:20px;">*&nbsp;&nbsp;可手动粘贴到下面日志框内</font>&nbsp;<a onclick="javascript:$('#logcode_n').val('');$('#logcode_n').css('display','block');logcode_str='';$('#file_n').val('');$('#shili_num_n').val('0');$('#loc_e_n').val('');logid='logcode_n';$('#center').attr('class','centerdiv');dpagehtml='';endstr='';duanstr='';enddatastr='';" href="javascript:;">清空/手动粘贴</a><br />
            <textarea id="logcode_n" name="logcode_n" style="width:100%; height:600px;" onclick="javascript:SelecttextTest(this)"></textarea>
            分析内容:&nbsp;&nbsp;<a onclick="javascript:qiehuanarray(1);" href="javascript:;" style="color:#F00; line-height:20px;">蜘蛛</a>&nbsp;&nbsp;<a onclick="javascript:qiehuanarray(2);" href="javascript:;" style="color:#F00; line-height:20px;">注入</a>&nbsp;&nbsp;<a onclick="javascript:qiehuanarray(3);" href="javascript:;" style="color:#F00; line-height:20px;">垃圾蜘蛛</a>&nbsp;&nbsp;<a onclick="javascript:qiehuanarray(0);" href="javascript:;" style="color:#F00; line-height:20px;">手动</a><br />
            <textarea id="chaxunarray_n" name="chaxunarray_n" style="width:100%; height:160px;"></textarea>

        </div>
        <div style="float:left; width:76px;" id="center" class="centerdiv">
            <div class="centertxt">分析</div>
        </div>
        <div style="float:right; width:60%;" id="right">
            <div style="position:fixed;_position:absolute;top:280px;z-index:300;border-bottom:1px solid #00F; padding:0px;white-space: nowrap;text-overflow:ellipsis; overflow:hidden; display:none; background:#F9DEAD; height:auto;" id="No1fenxi"></div>
            <input type="hidden" value="0" id="shili_num_n" style="display:none;" />
            <div style="border:1px solid #00F; border-bottom:none; padding:8px 8px;">
                <div style="float:left;">MAX:<input type="text" value="300" id="max_n" style="width:30px; height:20px;" />
                    <div id="max_n_c" class="tishinum" style="width:29px; margin-left:28px;"></div></div>
                <div style="float:left;">IP:<input type="text" value="0" id="ipn_n" style="width:30px; height:20px;" />
                    <div id="ipn_n_c" class="tishinum" style="width:29px; margin-left:15px;"></div></div>
                <div style="float:left;">时间:<input type="text" value="0" id="time_n" style="width:30px; height:20px;" />
                    <div id="time_n_c" class="tishinum" style="width:29px; margin-left:28px;"></div></div>
                <div style="float:left;">状态:<input type="text" value="0" id="ztn_n" style="width:30px; height:20px;" />
                    <input type="hidden" value="0" id="csn_n" style="display:none;" />
                    <input type="hidden" value="0" id="ztn1_n" style="display:none;" />
                    <input type="hidden" value="0" id="ztn2_n" style="display:none;" />
                    <div id="ztn_n_c" class="tishinum" style="width:29px; margin-left:28px;"></div></div>
                <div style="float:left;">URL:<input type="text" value="0" id="url_n" style="width:30px; height:20px;" />
                    <div id="url_n_c" class="tishinum" style="width:29px; margin-left:25px;"></div></div>
                <div style="float:left;">用户:<input type="text" value="0" id="uni_n" style="width:30px; height:20px;" />
                    <div id="uni_n_c" class="tishinum" style="width:29px; margin-left:28px;"></div></div>
                <div style="float:left;">页大小:<input type="text" value="100" id="page_n" style="width:30px; height:20px;" />
                    <div id="page_n_c" class="tishinum" style="width:29px; margin-left:40px;"></div></div>
                搜索:<input type="text" value="" id="so_n" style="width:40px; height:20px;" />-<input type="text" value="" id="sos_n" style="width:40px; height:20px;" />-<input type="text" value="" id="soss_n" style="width:40px; height:20px;" />
                <input type="button" value="纠正" id="jiuzheng_n" class="bot" onclick="javascript:shoudongsearch();" style="width:40px; height:24px;" />
                <input type="button" value="重置" id="chongzhi_n" class="bot" onclick="javascript:$('#ipn_n').val('0');$('#time_n').val('0');$('#ztn_n').val('0');$('#ztn1_n').val('0');$('#ztn2_n').val('0');$('#url_n').val('0');$('#csn_n').val('0');$('#uni_n').val('0');$('#so_n').val('');$('#sos_n').val('');$('#soss_n').val('');alert('重置成功，请重新点击分析按钮，系统将初始化参数！');" style="width:40px; height:24px;" />
                <a href="http://www.loghao.com/jiaocheng/2014040513.html" target="_blank">帮助？</a>
            </div>
            <div style="clear:both;"></div>
            <div id="navhtml"></div>
            <div id="infohtml"></div>
            <div id="fenxihtml"></div>
            <div id="pagehtml"></div>
            <div style="border-top:1px solid #00F;"></div>
        </div>
        <div style="clear:both;"></div>
    </div>
    <div class="wrap">
        <div class="link">
            <div>友情链接</div>
            <a href="http://www.loghao.com/" target="_blank">LogHao蜘蛛在线分析</a>
            <a href="http://www.caominseo.com/" target="_blank">站长工具</a>
        </div>
    </div>
    <div class="wrap">

    </div>
    <!--页脚-->
    <div class="footer">
        <div class="w">
            <div class="foot-nav">
                <a href="http://www.loghao.com/rizhi/2014042741.html" style="color:#FF0000;font-weight:bold;" >LogHao1.0 日志最好化标准1.0</a>
                <a href="http://www.loghao.com/u/2014041026.html">用户登录</a>
                <a href="http://www.loghao.com/u/2014041025.html">用户注册</a>
                <a href="http://www.loghao.com/u/2014040717.html">联系我们</a>
                <a href="http://www.loghao.com/jiaocheng/2014040513.html" style="color:#0000FF;font-weight:bold;" >LogHao蜘蛛分析工具参数设置</a>
            </div>
            <div class="copyright">CopyRight &copy; 2014 loghao.com <a href="http://www.loghao.com/" target="_blank">LogHao</a> 版权所有
            </div>
        </div>
    </div>
    <script language="javascript" src="{{ asset('/view/analyseLog/js/1.js') }}"></script>
    </body>
</html>
