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
		$("#fugaitishi").html('<div class="fugaitishipiao"><div style="color:#FF0000; font-size:16px;">Äú»¹Î´µÇÂ¼ÍøÕ¾£¬ÇëÏÈµÇÂ¼£º<a href="http://www.loghao.com/u/2014041026.html" style="color:#FF0000; font-size:16px;">µÇÂ¼</a><br />»ò×¢²á£º<a href="http://www.loghao.com/u/2014041025.html" style="color:#FF0000; font-size:16px;">×¢²á</a><br /><br /><strong onclick="javascript:$(\'#fugaitishi\').css(\'display\',\'none\');"><span style="color:#ff0000; cursor:pointer;">¹Ø±Õ&nbsp;</span></strong></div></div>');
	}
	
}
