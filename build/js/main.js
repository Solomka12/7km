$(document).ready(function(){$(function(){var i=$("#map-search-input");i.focus(function(){$(this).parent().css("width","100%")}),i.focusout(function(){$(this).parent().css("width","0%")});var e=$(".tooltip-menu"),o=$(".tooltip__profile__menu");e.tooltipster({functionReady:function(i,o){i.status().open&&e.addClass("open")},functionAfter:function(i,o){i.status().open||e.removeClass("open")},functionPosition:function(i,e,o){var s=$(".header-banner__search-block")[0].getBoundingClientRect(),t=parseInt($(e.tooltipClone).find(".tooltipster-box").css("margin-left"));return o.coord={left:s.left-t,top:s.top+s.height+5},o.size={width:s.width},o},theme:"tooltipster-shadow",trigger:"click",interactive:!0,zIndex:9999,side:"bottom"}),$(".tooltip-phones").tooltipster({theme:"tooltipster-shadow",interactive:!0,side:"bottom",zIndex:9999,distance:30}),o.tooltipster({functionReady:function(i,e){i.status().open&&o.addClass("open")},functionAfter:function(i,e){i.status().open||o.removeClass("open")},theme:"tooltipster-shadow",interactive:!0,side:"bottom",trigger:"click",zIndex:9998});var s=$(".md-overlay"),t=$("#login-modal"),n=$(".md-trigger"),l=$(".md-close");n.on("click",function(){t.toggleClass("md-show")}),s.on("click",function(){t.toggleClass("md-show")}),l.on("click",function(){t.removeClass("md-show")});var r=function(i){this.el=i||{};var e=this.el.find(".accordion__item");e.on("click",{el:this.el},this.dropdown)};r.prototype.dropdown=function(i){var e=i.data.el,o=$(this),s=e.children(".accordion__item"),t=s.index(o),n=s[t+(2-t%3)]||o[0];n=window.innerWidth<=768?s[t+t%1]||o[0]:window.innerWidth<=992?s[t+(1-t%2)]||o[0]:s[t+(2-t%3)]||o[0],$currentSubmenu=e.children(".accordion__submenu"),$.when($currentSubmenu.slideUp("fast")).done(function(){$currentSubmenu.appendTo(".accordion__item.open"),o.not(".open").find(".accordion__submenu").insertAfter(n).slideDown("fast"),o.toggleClass("open"),e.find(".accordion__item").not(o).removeClass("open")})};new r($("#katalog")),new r($("#tooltip-menu"));$(".min-menu-trigger").on("click",function(){$("#katalog").slideToggle()}),$(".enter-btn").on("click",function(){$(".header-top__profile__block").removeClass("logged"),$(".header-top__profile__enter").addClass("logged"),t.removeClass("md-show")}),$(".main-hot__items").slick({infinite:!1,slidesToShow:5,slidesToScroll:1,dots:!0,useTransform:!1,swipeToSlide:!0,arrows:!1,responsive:[{breakpoint:1200,settings:{slidesToShow:4.3,slidesToScroll:3}},{breakpoint:992,settings:{slidesToShow:3.3,slidesToScroll:3}},{breakpoint:740,settings:{slidesToShow:2.3,slidesToScroll:1}},{breakpoint:500,settings:{slidesToShow:1.3,slidesToScroll:1}}]}),$slick_slider2=$(".main-products__items"),$slick_settings={infinite:!1,slidesToShow:5,slidesToScroll:1,dots:!0,useTransform:!1,swipeToSlide:!0,arrows:!1,responsive:[{breakpoint:1200,settings:{slidesToShow:4.3,slidesToScroll:3}},{breakpoint:992,settings:{slidesToShow:3.3,slidesToScroll:3}},{breakpoint:740,settings:{slidesToShow:2.3,slidesToScroll:1}},{breakpoint:500,settings:{slidesToShow:1.3,slidesToScroll:1}}]};var c=$(".main-products__items"),d=$(".main-products__items .item__wrap");$(window).on("load resize",function(){window.innerWidth>1200?$slick_slider2.hasClass("slick-initialized")&&$slick_slider2.slick("unslick"):$slick_slider2.hasClass("slick-initialized")||$slick_slider2.slick($slick_settings)}),$slick_slider2.slick($slick_settings),$(".main-products__options").on("click","li",function(){var i=$(this).data("filter");$slick_slider2.slick("destroy"),c.children().remove(),d.each(function(){$(this).hasClass(i)&&$(this).appendTo(c)}),window.innerWidth<=1200&&$slick_slider2.slick($slick_settings)}),$(".main-products__options").each(function(i,e){var o=$(e);o.on("click","li",function(){o.find(".selected").removeClass("selected"),$(this).addClass("selected")})})})});