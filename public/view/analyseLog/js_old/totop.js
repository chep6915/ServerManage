function addEvent(obj,type,fn){
    if(obj.attachEvent){
        obj.attachEvent('on'+type,function(){
            fn.call(obj);
        })
    }else{
        obj.addEventListener(type,fn,false);
    }
}

$(function(){
	$("<div id='backtop'><a href='javascript:void(0);' title='·µ»Ø¶¥²¿'></a></div>").appendTo($("body"));
	function toTopHide(){
		document.documentElement.scrollTop+document.body.scrollTop>400?document.getElementById("backtop").style.display="block":document.getElementById("backtop").style.display="none";
	}
	var to_top=$("#backtop");
	to_top.find("a").click(function(){
		$("html,body").animate({scrollTop:0},500)
	});
	var $reg_tip = "";
	addEvent(window,'scroll',function(){
		toTopHide();
			if(!nd_email){
				var pop_login_scrTop = $(window).scrollTop() || document.documentElement.scrollTop,
				pop_login_offTop,footer_offTop;
				$("#hidedata").length>0?footer_offTop = $("#hidedata").offset().top || document.getElementById("hidedata").offsetTop:footer_offTop = $(".footer").offset().top;
				footer_offTop = $("#hidedata").offset().top || document.getElementById("hidedata").offsetTop;
				$("#pop_login_tip").length>0?(pop_login_offTop = $("#pop_login_tip").offset().top || document.getElementById("pop_login_tip").offsetTop):pop_login_offTop = 3145;
				if(pop_login_scrTop>=pop_login_offTop){
					if($(".registration-tip").length == 0){
						$("body").append($reg_tip);
					}
					$(".registration-tip .login").click(function() {
						$(window).scrollTop(0);
						$("#lognlayer").show();
						$("#txtUserName").focus();
					});
				}if(pop_login_scrTop+950> footer_offTop){
					$(".registration-tip").hide();
					if($(".registration-tip").length !=0){ $(".registration-tip").remove();}
				}	
			}
	});
});


function buffer(fun, ms, context){
   var buffer;
   return function(){
    if(buffer) return;
    buffer = setTimeout(function(){
       fun.call(this)
       buffer = undefined;
    }, ms);
   };
}

(function(){
    var oDivaaa=document.getElementById("float");
    if ( oDivaaa == undefined ) return false;
    var Haaa=0,iE6aaa;
    var Yaaa=oDivaaa;
    while(Yaaa){Haaa+=Yaaa.offsetTop;Yaaa=Yaaa.offsetParent};
    iE6aaa=window.ActiveXObject&&!window.XMLHttpRequest;
    function myscroll(){
        var s=document.body.scrollTop||document.documentElement.scrollTop;
        if (s >Haaa ){
            oDivaaa.className = "div1 div2";
            if(iE6aaa){oDivaaa.style.top=(s-Haaa)+"px";}
        }
        else
            oDivaaa.className = "div1";
    }
	addEvent(window,'scroll',buffer(myscroll,150,this ));
})();

