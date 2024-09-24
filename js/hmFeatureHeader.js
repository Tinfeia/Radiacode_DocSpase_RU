/*! Help & Manual WebHelp 3 Script functions
Copyright (c) 2015-2017 by Tim Green. All rights reserved. Contact tg@it-authoring.com
*/
function fh(){var j=(function(){var r=document.createElement("div");r.style.visibility="hidden";r.style.width="100px";r.style.msOverflowStyle="scrollbar";document.body.appendChild(r);var p=r.offsetWidth;r.style.overflow="scroll";var o=document.createElement("div");o.style.width="100%";r.appendChild(o);var q=o.offsetWidth;r.parentNode.removeChild(r);return p-q})();var n=this,m,l,i=hmDevice.tablet?hmBrowser.touchstart:"mouseover",e,g,k=hmDevice.tablet?0:j,f,b,a,c,d;n.fhHeight=function(){var o=$(window).height(),p=hmDevice.tablet?10:10;a=l.width()*d;c=o*d;e=g.height();o=Math.round(o/3);e=e>a?e:a;e=e>o?o:e;m.css({"padding-top":(e+p)+"px"});l.css({height:e+"px"})};n.fhInit=function(){if($("div#featureheader").length<1){$("div#hmpagebody").prepend('<div id="featureheader"><p id="featuretext"></p></div>')}l=$("div#featureheader");m=$("div#hmpagebody_scroller");g=$("p#featuretext");n.image=new Image();n.image.src=hmpage.hmPicture;l.css("background-image","url('"+hmpage.hmPicture+"')");g.html(hmpage.hmDescription);setTimeout(function(){var o=0;var p=setInterval(function(){f=n.image.width;b=n.image.height;d=b/f;o++;if(f>0||o>50){n.fhHeight();clearInterval(p)}},50);l.css("border-bottom","2px solid #bababa");$(window).off("resize.features").on("resize.features",n.fhHeight);m.off("scroll.features").on("scroll.features",function(){var q=m.scrollTop();l.css({height:(e-q)+"px"});if(e-q<3){l.css("border-bottom","0")}else{l.css("border-bottom","2px solid #bababa")}});l.off(hmBrowser.touchstart).on(hmBrowser.touchstart,function(){if(g.is(":visible")){g.fadeOut("fast")}else{g.fadeIn("fast")}})},100)};var h=function(o){if(typeof o=="undefined"){n.fhInit()}else{switch(o){case"init":n.fhInit();break;case"resize":n.fhHeight();break}}};return h}hmWebHelp.funcs.hmFeatureHeader=new fh();
