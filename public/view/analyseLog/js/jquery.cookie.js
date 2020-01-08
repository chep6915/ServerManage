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