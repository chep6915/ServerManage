


function jqchk(id){
	var s='';
	var val='';
	$('input[name="'+id+'"]:checked').each(function(){
	s+=$(this).val()+',';
	});
	if(s.length > 0){
		s = s.substring(0,s.length - 1);
		val = val + s;
	}else{
	}
	return val;
}
function jqselect(id)
{
	var s='';
	var val='';
	if($('#'+id).val())
	{
		s=$('#'+id).val();
	}
	if(s.length > 0){
		val = val + s;
	}else{
	}
	return val;
}
function jqtext(id)
{
	var s='';
	var val='';
	if($('#'+id).val())
	{
		s=$('#'+id).val();
	}
	if(s.length > 0){
		val = val + s;
	}else{
	}
	return val;
}

