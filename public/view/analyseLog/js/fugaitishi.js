var tishi_reg='';
function fugaitishi_f(fi)
{
    if(cmail||fi!=0||tishi_reg)
    {
    }else{
        tishi_reg='yes';
        $("#fugaitishi").css('display','block');
        $("#fugaitishi").css('height',$(document).height()+'px');
        $("#fugaitishi").css('width',$(document).width()+'px');
        $("#fugaitishi").html('<div class="fugaitishipiao"><div style="color:#FF0000; font-size:16px;">����δ��¼��վ�����ȵ�¼��<a href="http://www.loghao.com/u/2014041026.html" style="color:#FF0000; font-size:16px;">��¼</a><br />��ע�᣺<a href="http://www.loghao.com/u/2014041025.html" style="color:#FF0000; font-size:16px;">ע��</a><br /><br /><strong onclick="javascript:$(\'#fugaitishi\').css(\'display\',\'none\');"><span style="color:#ff0000; cursor:pointer;">�ر�&nbsp;</span></strong></div></div>');
    }

}
