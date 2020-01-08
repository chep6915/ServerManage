function ip_value()
{ 
	var ip=window.location.hash;
	if(ip){
		return ip.replace(/\#/g,'').replace(/\ /g,'');
	}else{
		return '';
	}
}

function code(ip){
	$.get(
		'http://www.loghao.com/php/user.php?action=tuiguang&ip='+ip.trim(),{},function(data,state){
	})
}

function tuiguangid(id){
	$.get(
		'http://www.loghao.com/php/user.php?action=tuiguang&id='+id.trim(),{},function(data,state){
	})
}

function tgipfun()
{
	if(!GetCookie('tgip'))
	{
		var tgip=ip_value();
		if(tgip)
		{
			if(checkIp(tgip))
			{
				code(tgip);
			}else{
				tuiguangid(tgip);
			}
			SetCookie('tgip',tgip,2);
		}else{
			SetCookie('tgip','192.168.1.1',2);
		}
	}
}




tgipfun();