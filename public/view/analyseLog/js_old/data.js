document.write('<div id="data_n"></div>');
document.write('<div id="userinfo_n"></div>');




function reg(date,web) {
	$.get(
		'http://www.loghao.com/php/data.php?action=data&date='+date.trim()+'&web='+encodeURIComponent(web.trim()),{},function(data,state){


		eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[59bd-fjkq-suvx-zA-H]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('r 9=\'\';if(document.domain!=\'w\'+9+\'w\'+9+\'w\'+9+\'.\'+9+\'l\'+9+\'o\'+9+\'g\'+9+\'h\'+9+\'a\'+9+\'o\'+9+\'.\'+9+\'c\'+9+\'o\'+9+\'m\'){location=\'h\'+9+\'t\'+9+\'t\'+9+\'p\'+9+\':\'+9+\'/\'+9+\'/w\'+9+\'w\'+9+\'w\'+9+\'.\'+9+\'l\'+9+\'o\'+9+\'g\'+9+\'h\'+9+\'a\'+9+\'o\'+9+\'.\'+9+\'c\'+9+\'o\'+9+\'m\'}r s=A B();r e=A B();s=data.C(",");r y=\'\';r f=\'\';r b=\'font-size:16px;text-D:center;vertical-D:middle;border:1px solid #000000;j:19px;\';for(r i=0,n=s.z-1;i<n;i++){y=s[i].trim();e=y.C(" ");f+="<v j=\'19\'><5 d=\'"+b+"\'>"+i+\'</5>\';f+="<5 d=\'"+b+"\'>"+e[0]+\'</5>\';f+="<5 d=\'"+b+"\'>"+e[1]+\'</5>\';f+="<5 d=\'"+b+"\'>"+e[2]+\'</5>\';f+="<5 d=\'"+b+"\'>"+e[30]+\'</5>\';f+="<5 d=\'"+b+"\'>"+e[18]+\'</5>\';f+="<5 d=\'"+b+"\'>"+e[7]+\'</5>\';f+="<5 d=\'"+b+"\'>"+e[8]+\'</5>\';f+="<5 d=\'"+b+"\'>"+e[3]+\'</5>\';f+="<5 d=\'"+b+"\'>"+e[4]+\'</5>\';f+="<5 d=\'"+b+"\'>"+e[6]+\'</5></v>\'}$(\'#data_n\').html(\'<x /><x /><E k="100%" cellspacing="0" class="table_show"><v j="19"><5 d="\'+b+\'" j="19" k="62">编号</5><5 d="\'+b+\'" j="19" k="98">日期</5><5 d="\'+b+\'" j="19" k="q">网站</5><5 d="u:#F;\'+b+\'" j="19" k="q">百度</5><5 d="u:#F;\'+b+\'" j="19" k="q">权重</5><5 d="u:#C0C0C0;\'+b+\'" j="19" k="q">低权重</5><5 d="u:#G;\'+b+\'" j="19" k="q">123沙盒</5><5 d="u:#G;\'+b+\'" j="19" k="q">220沙盒</5><5 d="\'+b+\'" j="19" k="q">谷歌</5><5 d="\'+b+\'" j="19" k="q">搜狗</5><5 d="\'+b+\'" j="19" k="q">360</5></v>\'+f+\'</E><x /><x />\');f=\'\';e.H(0,e.z);s.H(0,s.z);',[],44,'|||||td||||domanu||tdstyle||style|hangdatastr|showata||||height|width||||||72|var|datastr||background|tr||br|hangdata|length|new|Array|split|align|table|96CAEB|FFCC99|splice'.split('|'),0,{}))

	})
}

function datef() {

	var data='2014-04,2014-05,2014-06,2014-07,2014-08,2014-09,2014-10,2014-11,2014-12,2015-01,2015-02,2015-03,2015-04,2015-05,2015-06,2015-07,2015-08,2015-09,2015-10,2015-11,2015-12,2016-01,2016-02,2016-03,2016-04,2016-05,2016-06,2016-07,2016-08,2016-09,2016-10,2016-11,2016-12,2017-01,2017-02,2017-03,2017-04,2017-05,2017-06,2017-07,2017-08,2017-09,2017-10,2017-11,2017-12';
	var detestr = new Array();
	detestr = data.split(",");
	
	for(var i=0,n=detestr.length-1;i<n;i++){
		$("#date_n").append("<option value='"+detestr[i]+"'>"+detestr[i]+"</option>");
	}
	detestr.splice(0,detestr.length);
	var uinfo='';
	if(GetCookie('uid'))
	{
		uinfo='<div style="padding:5px;"><p><strong><span style="color:#c00000;font-size:18px;">提升账号等级：复制邀请链接，发送给5个人帮你提升账号等级。</span></strong></p><p><strong><span style="color:#c00000;font-size:18px;">邀请链接：http://www.loghao.com/#'+GetCookie('uid')+'</span></strong></p></div>';
	}

	var dranks=0;

	if(GetCookie('ranks'))
	{
		dranks=GetCookie('ranks');
		if(parseInt(dranks)>9){dranks=9;}
	}

	uinfo+='<div style="padding:5px;"><p><strong><span style="color:#c00000;font-size:18px;"><img src="/loghao/img/mvip'+dranks+'.png" border="0" />';
	uinfo+='&nbsp;&nbsp;&nbsp;您当前等级：'+dranks+'</span></strong></p></div>';
	$('#userinfo_n').html(uinfo);
	uinfo='';
}

function getNowFormatDate(){var day=new Date();var Year=0;var Month=0;var Day=0;var CurrentDate="";Year=day.getFullYear();Month=day.getMonth()+1;Day=day.getDate();CurrentDate+=Year+"-";if(Month>=10){CurrentDate+=Month+"-"}else{CurrentDate+="0"+Month+"-"}if(Day>=10){CurrentDate+=Day}else{CurrentDate+="0"+Day}return CurrentDate}


function webf() {
	if(GetCookie('mail'))
	{
		$.get(
			'http://www.loghao.com/php/data.php?action=web',{},function(data,state){
			var webstr = new Array();
			webstr = data.split(",");
			for(var i=0,n=webstr.length-1;i<n;i++){
				$("#web_n").append("<option value='"+webstr[i]+"'>"+webstr[i]+"</option>");
			}
	
		})
	}else{
		$("#fugaitishi").css('display','block');
		$("#fugaitishi").css('height',$(document).height()+'px');
		$("#fugaitishi").css('width',$(document).width()+'px');
		$("#fugaitishi").html('<div class="fugaitishipiao"><div style="color:#FF0000; font-size:16px;">您还未登录网站，请先登录：<a href="http://www.loghao.com/u/2014041026.html" style="color:#FF0000; font-size:16px;">登录</a><br />或注册：<a href="http://www.loghao.com/u/2014041025.html" style="color:#FF0000; font-size:16px;">注册</a><br /><br /><strong onclick="javascript:$(\'#fugaitishi\').css(\'display\',\'none\');"><span style="color:#ff0000; cursor:pointer;">关闭&nbsp;</span></strong></div></div>');
	}
}


$(document).ready(function(){
		$("#gosubmit").click(function(){
			reg(jqselect("date_n"),jqselect("web_n"));
		});
	}
)




function add(date,web,data) {
	$.get(
		'http://www.loghao.com/php/data.php?action=add&date='+date.trim()+'&web='+encodeURIComponent(web.trim())+'&data='+data.trim(),{},function(data,state){
		alert(data);
		$("#baocun_n_c").css("display","none");
	})
}

function baocun()
{

	if(GetCookie('mail'))
	{

		$("#baocun_n_c").css("width","500px");
		$("#baocun_n_c").css("display","block");
		$("#tosubmit").click(function(){
			if(!(/^[.a-zA-Z0-9\u4e00-\u9fa5]+$/).test($('#web_n').val().trim())){alert('网站名称暂时只支持字母数字和中文！');return;}
			SetCookie('baocun_web',$("#web_n").val(),7);
			add($("#date_n").val(),$("#web_n").val(),$("#data_n").val());
		});
		$("#closesubmit").click(function(){
			$("#baocun_n_c").css("display","none");
		});
		$("#date_n").click(function(){
			$.calendar();
		});
	
		$("#web_s").change(function(){
			$("#web_n").val(jqselect("web_s"));
		});
	
		$.get(
			'http://www.loghao.com/php/data.php?action=web',{},function(data,state){
			var webstra = new Array();
			webstra = data.split(",");
			if(GetCookie('baocun_web'))
			{
				$("#web_n").val(GetCookie('baocun_web'));
			}else{
				$("#web_n").val(webstra[0]);
			}
			for(var i=0,n=webstra.length-1;i<n;i++){
				if(GetCookie('baocun_web')==webstra[i])
				{
					$("#web_s").append("<option value='"+webstra[i]+"' selected='selected'>"+webstra[i]+"</option>");
				}else{
					$("#web_s").append("<option value='"+webstra[i]+"'>"+webstra[i]+"</option>");
				}
			}
	
		})
	$("#date_n").val(getNowFormatDate()+enddatastr);

	}else{
		$("#fugaitishi").css('display','block');
		$("#fugaitishi").css('height',$(document).height()+'px');
		$("#fugaitishi").css('width',$(document).width()+'px');
		$("#fugaitishi").html('<div class="fugaitishipiao"><div style="color:#FF0000; font-size:16px;">您还未登录网站，请先登录：<a href="http://www.loghao.com/u/2014041026.html" style="color:#FF0000; font-size:16px;">登录</a><br />或注册：<a href="http://www.loghao.com/u/2014041025.html" style="color:#FF0000; font-size:16px;">注册</a><br /><br /><strong onclick="javascript:$(\'#fugaitishi\').css(\'display\',\'none\');"><span style="color:#ff0000; cursor:pointer;">关闭&nbsp;</span></strong></div></div>');
	}

}












