$(document).ready(function(){
  $('.hits-slider').slick({
    dots: false,
    arrows: true,
    accessibility: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-left"></i><div/>',
    nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-right"></i><div/>',
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      } 
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      } 
    }
    ]
    
  });

  $('.slider-for').slick({
    arrows: false,
    dots: false,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    asNavFor: '.slider-nav',
    slidesToScroll: 1,
  });


  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    vertical: true,
    dots: false,
    focusOnSelect: true,
     prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-chevron-up"></i><div/>',
    nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-chevron-down"></i><div/>',
    responsive: [{
      breakpoint: 481,
      settings: {
       slidesToShow:3,
     }

   }]
 });

  (function($, window){
  var arrowWidth = 30;

  $.fn.resizeselect = function(settings) {  
    return this.each(function() { 

      $(this).change(function(){
        var $this = $(this);

        // create test element
        var text = $this.find("option:selected").text();
        
        var $test = $("<span>").html(text).css({
          "font-size": $this.css("font-size"), // ensures same size text
          "visibility": "hidden"               // prevents FOUC
        });
        

        // add to body, get width, and get out
        $test.appendTo($this.parent());
        var width = $test.width();
        $test.remove();

        // set select width
        $this.width(width + arrowWidth);

        // run on start
      }).change();

    });
  };

  // run by default
  $(".select-filter select").resizeselect();                       

})(jQuery, window);

    //кнопка sandwich
    $(".btn_nav").click(function() {
      $(".sandwich").toggleClass("active");
      if ($(".navigation").is(":hidden")) {
        $(".navigation").slideDown(600);
      } else {
        $(".navigation").slideUp(600);
      }

    });

    $(".navigation a").click(function() {
      $(".navigation").slideUp(600);
      $(".sandwich").removeClass("active");
    });

     $(".btn-main_filter").click(function(e) {
      e.preventDefault();
      if ($(".list-catalog").is(":hidden")) {
        $(".list-catalog").slideDown(200);
        $(this).html("Свернуть фильтр");
      } else {
        $(".list-catalog").slideUp(200);
         $(this).html("Открыть фильтр");
      }
    });


    $(".main-link__all").click(function(e) {
      e.preventDefault();
      $(".main-brands__item:hidden").addClass("hidden_item");
      $(".hidden_item").slideToggle(200);


    });

     $(".dropdown-card__title").click(function() {
      $(this).toggleClass("active");
      $(this).siblings(".dropdown-card__content").slideToggle(200);
    });

    $(".btn_top").click(function () {
      $("body, html").animate({
        scrollTop: 0
      }, 800);
      return false;
    });

    /*высота блока по экрану*/
    function heightDetect() {
      $('.navigation').css("height", $(window).height() -$(".header").height() + 40);
    };
    heightDetect();
    $(window).resize(function() {
      heightDetect();
    });

  });

  // autlet-slider



  
  /*polifyl*/
  /*! npm.im/object-fit-images 3.2.4 */
  var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();
