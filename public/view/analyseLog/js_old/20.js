
$(document).ready(function(){
        $("#ipn_n").mouseover(function(){
            $("#ipn_n_c").css("display","block");
            $("#ipn_n_c").html("保存下次自动调用");
        });
        $("#ipn_n").mouseout(function(){
            $("#ipn_n_c").css("display","none");
        });
        $("#ipn_n_c").mouseover(function(){
            $("#ipn_n_c").css("display","block");
        });
        $("#ipn_n_c").mouseout(function(){
            $("#ipn_n_c").css("display","none");
        });
        $("#ipn_n_c").click(function(){
            SetCookie('ipn_n_mor',$("#ipn_n").val(),31);
            $("#ipn_n_c").css("display","none");
        });
        if(GetCookie('ipn_n_mor'))
        {
            $("#ipn_n").val(GetCookie('ipn_n_mor'));
        }
   
   
   
        $("#time_n").mouseover(function(){
            $("#time_n_c").css("display","block");
            $("#time_n_c").html("保存下次自动调用");
        });
        $("#time_n").mouseout(function(){
            $("#time_n_c").css("display","none");
        });
        $("#time_n_c").mouseover(function(){
            $("#time_n_c").css("display","block");
        });
        $("#time_n_c").mouseout(function(){
            $("#time_n_c").css("display","none");
        });
        $("#time_n_c").click(function(){
            SetCookie('time_n_mor',$("#time_n").val(),31);
            $("#time_n_c").css("display","none");
        });
        if(GetCookie('time_n_mor'))
        {
            $("#time_n").val(GetCookie('time_n_mor'));
        }
   
   
   
   
   
   
   
        $("#ztn_n").mouseover(function(){
            $("#ztn_n_c").css("display","block");
            $("#ztn_n_c").html("保存下次自动调用");
        });
        $("#ztn_n").mouseout(function(){
            $("#ztn_n_c").css("display","none");
        });
        $("#ztn_n_c").mouseover(function(){
            $("#ztn_n_c").css("display","block");
        });
        $("#ztn_n_c").mouseout(function(){
            $("#ztn_n_c").css("display","none");
        });
        $("#ztn_n_c").click(function(){
            SetCookie('ztn_n_mor',$("#ztn_n").val(),31);
            $("#ztn_n_c").css("display","none");
        });
        if(GetCookie('ztn_n_mor'))
        {
            $("#ztn_n").val(GetCookie('ztn_n_mor'));
        }
   
   
   
   
   
   
   
        $("#url_n").mouseover(function(){
            $("#url_n_c").css("display","block");
            $("#url_n_c").html("保存下次自动调用");
        });
        $("#url_n").mouseout(function(){
            $("#url_n_c").css("display","none");
        });
        $("#url_n_c").mouseover(function(){
            $("#url_n_c").css("display","block");
        });
        $("#url_n_c").mouseout(function(){
            $("#url_n_c").css("display","none");
        });
        $("#url_n_c").click(function(){
            SetCookie('ur_n_mor',$("#url_n").val(),31);
            $("#url_n_c").css("display","none");
        });
        if(GetCookie('ur_n_mor'))
        {
            $("#url_n").val(GetCookie('ur_n_mor'));
        }
   
   
   
   
   
   
   
   
        $("#max_n").mouseover(function(){
            $("#max_n_c").css("display","block");
            $("#max_n_c").html("保存下次自动调用");
        });
        $("#max_n").mouseout(function(){
            $("#max_n_c").css("display","none");
        });
        $("#max_n_c").mouseover(function(){
            $("#max_n_c").css("display","block");
        });
        $("#max_n_c").mouseout(function(){
            $("#max_n_c").css("display","none");
        });
        $("#max_n_c").click(function(){
            SetCookie('max_n_mor',$("#max_n").val(),31);
            $("#max_n_c").css("display","none");
        });
        if(GetCookie('max_n_mor'))
        {
            $("#max_n").val(GetCookie('max_n_mor'));
        }
   
   
   
        $("#uni_n").mouseover(function(){
            $("#uni_n_c").css("display","block");
            $("#uni_n_c").html("保存下次自动调用");
        });
        $("#uni_n").mouseout(function(){
            $("#uni_n_c").css("display","none");
        });
        $("#uni_n_c").mouseover(function(){
            $("#uni_n_c").css("display","block");
        });
        $("#uni_n_c").mouseout(function(){
            $("#uni_n_c").css("display","none");
        });
        $("#uni_n_c").click(function(){
            SetCookie('uni_n_mor',$("#uni_n").val(),31);
            $("#uni_n_c").css("display","none");
        });
        if(GetCookie('uni_n_mor'))
        {
            $("#uni_n").val(GetCookie('uni_n_mor'));
        }
   
   
   
        $("#page_n").mouseover(function(){
            $("#page_n_c").css("display","block");
            $("#page_n_c").html("保存下次自动调用");
        });
        $("#page_n").mouseout(function(){
            $("#page_n_c").css("display","none");
        });
        $("#page_n_c").mouseover(function(){
            $("#page_n_c").css("display","block");
        });
        $("#page_n_c").mouseout(function(){
            $("#page_n_c").css("display","none");
        });
        $("#page_n_c").click(function(){
            SetCookie('page_n_mor',$("#page_n").val(),31);
            $("#page_n_c").css("display","none");
        });
        if(GetCookie('page_n_mor'))
        {
            $("#page_n").val(GetCookie('page_n_mor'));
        }
   
   
   
        $("#weburl_n").mouseover(function(){
            $("#weburl_n_c").css("display","block");
            $('#weburl_n_c').width((Number($('#left').width())-1)+'px');
            $("#weburl_n_c").html("保存下次自动调用");
        });
        $("#weburl_n").mouseout(function(){
            $("#weburl_n_c").css("display","none");
        });
        $("#weburl_n_c").mouseover(function(){
            $("#weburl_n_c").css("display","block");
        });
        $("#weburl_n_c").mouseout(function(){
            $("#weburl_n_c").css("display","none");
        });
        $("#weburl_n_c").click(function(){
            SetCookie('weburl_n_mor',$("#weburl_n").val(),31);
            $("#weburl_n_c").css("display","none");
        });
        if(GetCookie('weburl_n_mor'))
        {
            $("#weburl_n").val(GetCookie('weburl_n_mor'));
        }
   
   
        $("#loc_e_n").mouseover(function(){
            $("#loc_e_n_c").css("display","block");
            $('#loc_e_n_c').width((Number($('#left').width())-1)+'px');
            $("#loc_e_n_c").html("保存下次自动调用");
        });
        $("#loc_e_n").mouseout(function(){
            $("#loc_e_n_c").css("display","none");
        });
        $("#loc_e_n_c").mouseover(function(){
            $("#loc_e_n_c").css("display","block");
        });
        $("#loc_e_n_c").mouseout(function(){
            $("#loc_e_n_c").css("display","none");
        });
        $("#loc_e_n_c").click(function(){
            SetCookie('loc_e_n_mor',$("#loc_e_n").val(),31);
            $("#loc_e_n_c").css("display","none");
        });
        if(GetCookie('loc_e_n_mor'))
        {
            $("#loc_e_n").val(GetCookie('loc_e_n_mor'));
        }
   
   
        $("#file_n").width((Number($('#left').width())-12)+'px');
   
   
   
    }
)



