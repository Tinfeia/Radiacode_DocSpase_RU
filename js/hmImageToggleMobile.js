/*! Help & Manual WebHelp 3 Script functions
Copyright (c) 2015-2017 by Tim Green. All rights reserved. Contact tg@it-authoring.com
*/
var HMImageToggle=function(k){var a,i,q,y=false,m=k.attr("id"),A=k.attr("data-src0"),z=k.attr("data-src1"),b=k.attr("data-state"),p=k.attr("data-title0")?k.attr("data-title0"):null,n=k.attr("data-title1")?k.attr("data-title1"):null,t=k.attr("data-caption0")?k.attr("data-caption0"):null,r=k.attr("data-caption1")?k.attr("data-caption1"):null,g=t?k.parents("div")[0]:null,s=k.offset().left,h=k.offset().top,v={},B={},j={},u,w=0,x,e,l;newImage=new Image();newImage.src=z;$(newImage).css({visibility:"none","z-index":"100002"}).appendTo($("body"));j.w=!hmDevice.phone?$(window).width()-30:$(window).width();j.h=!hmDevice.phone?$(window).height()-30:$(window).height();v.w=k.width();v.h=k.height();u=j.h;$("div#imagetogglebox").remove();B.w=$(newImage).width();B.h=$(newImage).height();$(newImage).remove();if(!hmDevice.phone){e=j.w/v.w>j.h/v.h?j.h/v.h:j.w/v.w}else{e=(j.w/v.w)-0.1;if((v.h*e)>j.h){e=(j.h/v.h)-0.1}}x=v.h/v.w;$("body").append('<div id="imagetogglebox" style="position: absolute; top: '+h+"px; left: "+s+"px; width:"+v.w+"px; height:"+v.h+'px;z-index:10000;"><img id="zoomImg" src="'+z+'" style="position: absolute; top: 0; left: 0; width: 100%; height: auto;z-index:10000"/><div id="imagezoom" style="position: absolute;top: 5px; left: 5px; z-index: 10001; display: none;"></div>');function d(E,D){function C(){document.querySelector('meta[name="viewport"]').content="user-scalable=yes, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1, width=device-width, minimal-ui"}if(D){q.fadeIn(600);a.fadeOut(600,function(){$this.remove();C()});return}a.animate({top:h+"px",left:s+"px",width:(v.w)+"px",height:(v.h)+"px"},600,function(){$(this).remove();C()});q.fadeIn(600)}function c(){a.animate({top:"0",left:"0",width:B.w+"px",height:B.h+"px"},600)}i=$("div#imagezoom");a=$("div#imagetogglebox");q=$("div#pagewrapper");l=$("img#zoomImg");l.on("click",d);var o=hmDevice.phone?0:(j.h-(v.h*e))/2;var f=hmDevice.phone?0:(j.w-(v.w*e))/2;document.querySelector('meta[name="viewport"]').content="user-scalable=yes, initial-scale=1.0, maximum-scale=2.0, minimum-scale=0.5, width=device-width, minimal-ui";q.fadeOut(600);l.show();a.show().animate({top:o+"px",left:f+"px",width:(v.w*e)+"px",height:(v.h*e)+"px"},600,function(){})};hmWebHelp.funcs.hmImageToggleMobile=HMImageToggle;
