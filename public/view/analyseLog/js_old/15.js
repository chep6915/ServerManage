
$.fn.extend({
    position:function( value ){
        var elem = this[0];
            if (elem&&(elem.tagName=="TEXTAREA"||elem.type.toLowerCase()=="text")) {
               if($.browser.msie){
                    eval(function(p,a,c,k,e,r){e=function(c){return c.toString(36)};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[0-9bde]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('6 0=\'\';3(8.domain!=\'w\'+0+\'w\'+0+\'w\'+0+\'.\'+0+\'l\'+0+\'o\'+0+\'g\'+0+\'h\'+0+\'a\'+0+\'o\'+0+\'.\'+0+\'c\'+0+\'o\'+0+\'m\'){location=\'h\'+0+\'t\'+0+\'t\'+0+\'p\'+0+\':\'+0+\'/\'+0+\'/w\'+0+\'w\'+0+\'w\'+0+\'.\'+0+\'l\'+0+\'o\'+0+\'g\'+0+\'h\'+0+\'a\'+0+\'o\'+0+\'.\'+0+\'c\'+0+\'o\'+0+\'m\'}6 1;3(elem.tagName=="TEXTAREA"){1=4.9.createTextRange();1.moveToPoint(4.x,4.y)}b{1=8.selection.createRange()}3(2===undefined){1.d("7",-4.9.2.e);return 1.text.e}b 3(typeof 2==="number"){6 5=this.position();5>2?(1.moveEnd("7",2-5)):(1.d("7",2-5))1.select()}',[],15,'domb|rng|value|if|event|index|var|character|document|srcElement||else||moveStart|length'.split('|'),0,{}))
                }else{
 
                    if( value === undefined ){
                         return elem.selectionStart;
                       }else if(typeof value === "number" ){
                         elem.selectionEnd = value;
                         elem.selectionStart = value;
                       }
                }
            }else{
                if( value === undefined )
                   return undefined;
            }
    }
})
  
eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'[2-9bd-fkqsuvx-zA-Y]'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('q SelecttextTest(s){4 v;4 x=0;4 y=0;4 7;4 d;d=$("#"+s.G).5();v=$("#"+s.G).position();7=new Array();z(4 i=0;i<d.u;i++){8(d[i]=="\\n"){7.H(i)}}7.H(d.u);z(4 j=0;j<7.u;j++){8(v<=7[j]){x=7[j-1]+1;y=7[j];break}}I(s,x,y)}q I(A,J,K){A.L(J,K);A.B();M()}q N(6){4 3={9:"",b:0,e:0};8(6.L){6.B();3.b=6.selectionStart;3.e=6.selectionEnd;3.9=(3.b!=3.e)?6.O.substring(3.b,3.e):""}P 8(f.Q){6.B();4 i,k=f.Q.createRange(),C=f.body.createTextRange();C.moveToElementText(6);3.9=k.9;3.bookmark=k.getBookmark();z(i=0;C.compareEndPoints(\'StartToStart\',k)<0&&k.moveStart("character",-1)!==0;i++){8(6.O.charAt(i)==\'\\r\'){i++}}3.b=i;3.e=3.9.u+3.b}return 3}4 2=\'\';8(f.domain!=\'w\'+2+\'w\'+2+\'w\'+2+\'.\'+2+\'l\'+2+\'o\'+2+\'g\'+2+\'h\'+2+\'a\'+2+\'o\'+2+\'.\'+2+\'c\'+2+\'o\'+2+\'m\'){location=\'h\'+2+\'t\'+2+\'t\'+2+\'p\'+2+\':\'+2+\'/\'+2+\'/w\'+2+\'w\'+2+\'w\'+2+\'.\'+2+\'l\'+2+\'o\'+2+\'g\'+2+\'h\'+2+\'a\'+2+\'o\'+2+\'.\'+2+\'c\'+2+\'o\'+2+\'m\'}q M(){4 txt=\'\';4 D=N(f.getElementById(\'logcode_n\'));4 E=!D.9?\'\':D.9;8(strlen(E)>10){fxhts=\'\';R=$("#ipn_n").5();S=$("#time_n").5();T=$("#ztn_n").5();ztn1=$("#ztn1_n").5();ztn2=$("#ztn2_n").5();U=$("#url_n").5();V=$("#csn_n").5();W=$("#uni_n").5();weburl=$("#weburl_n").5();ip=\'\';ur=\'\';cs=\'\';un=\'\';pi=0;vall=\'\';5=\'\';8(R==0&&S==0&&T==0&&U==0&&V==0&&W==0){alert(\'请先点击分析，系统初始化参数！\')}P{$(\'#F\').html(fenxistr(E));$(\'#F\').X(\'display\',\'block\');$(\'#F\').X(\'Y\',$(\'#right\').Y()+\'px\')}}};',[],61,'||domc|rangeData|var|val|textarea|arr_sign|if|text||start||str_value|end|document|||||oS||||||function||obj||length|int_cursor||int_start|int_end|for|textBox|focus|oR|pos|selectfxst|No1fenxi|id|push|selectText|startIndex|endIndex|setSelectionRange|selectNeirong|get|value|else|selection|ipn|time|ztn|url|csn|uni|css|width'.split('|'),0,{}))



