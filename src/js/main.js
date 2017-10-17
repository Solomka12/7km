$(document).ready(function() {

	$(function() {

		var $searchInput = $('#map-search-input')

		$searchInput.focus(function() {
			$(this).parent().css( "width", "100%" )
		});
		$searchInput.focusout(function() {
			$(this).parent().css( "width", "0%" )
		})

	//------------------ Tooltips ------------------

	var $tooltipMenu = $('.tooltip-menu');
	var $tooltipProfileMenu = $('.tooltip__profile__menu');

	$tooltipMenu.tooltipster({
		functionReady: function(instance, helper) {
			if (instance.status().open) $tooltipMenu.addClass('open');
		},
		functionAfter: function(instance, helper) {
			if (!instance.status().open) $tooltipMenu.removeClass('open');
		},
		functionPosition: function(instance, helper, data){
			
			// this function is pretty dumb and does not check if there is actually
			// enough space available around the tooltip to move it, it just makes it
			// snap to the grid. You might want to do something smarter in your app!
			
			var gridBcr = $('.header-banner__search-block')[0].getBoundingClientRect(),
			arrowSize = parseInt($(helper.tooltipClone).find('.tooltipster-box').css('margin-left'));
			
			// override these
			data.coord = {
				// move the tooltip so the arrow overflows the grid
				left: gridBcr.left - arrowSize,
				top: gridBcr.top + gridBcr.height + 5
			};

			data.size = {
				width: gridBcr.width
			} 
			
			return data;
		},
		theme: 'tooltipster-shadow',
		trigger: 'click',
		interactive: true,
		zIndex: 9999,
		side: 'bottom'
	});

	$('.tooltip-phones').tooltipster({
		theme: 'tooltipster-shadow',
		interactive: true,
		side: 'bottom',
		zIndex: 9999,
		distance: 30
	});


	$tooltipProfileMenu.tooltipster({
		functionReady: function(instance, helper) {
			if (instance.status().open) $tooltipProfileMenu.addClass('open');
		},
		functionAfter: function(instance, helper) {
			if (!instance.status().open) $tooltipProfileMenu.removeClass('open');
		},
		theme: 'tooltipster-shadow',
		interactive: true,
		side: 'bottom',
		trigger: 'click',
		zIndex: 9998
	});

	//---------------------------------------------

	//------------- Login modal ------------

	var $modalOverlay = $('.md-overlay');
	var $modalContainer = $('#login-modal');
	var $modalTrigger = $('.md-trigger');
	var $modalClose = $('.md-close');

	$modalTrigger.on('click', function(){
		$modalContainer.toggleClass('md-show');
	});

	$modalOverlay.on('click', function(){
		$modalContainer.toggleClass('md-show');
	});

	$modalClose.on('click', function(){
		$modalContainer.removeClass('md-show');
	});


	//---------------------------------------------

	//------------- Меню-аккордеон ------------


	var Accordion = function(el) {
		this.el = el || {};

		var links = this.el.find('.accordion__item');

		links.on('click', {el: this.el}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
		var $this = $(this);
		var $items = $el.children('.accordion__item');
		var $index = $items.index($this);
		var $offset = $items[ $index + (2 - $index % 3)] || $this[0];

		if (window.innerWidth <= 768 ) {
			$offset = $items[ $index + ($index % 1)] || $this[0];
		} else if (window.innerWidth <= 992 ) {
			$offset = $items[ $index + (1 - $index % 2)] || $this[0];
		} 
		else {
			$offset = $items[ $index + (2 - $index % 3)] || $this[0];
		} 

		$currentSubmenu = $el.children('.accordion__submenu');

		$.when( $currentSubmenu.slideUp('fast') ).done(function() {
			
			$currentSubmenu.appendTo( '.accordion__item.open' );

			$this.not('.open').find( '.accordion__submenu' ).insertAfter( $offset ).slideDown('fast');

			$this.toggleClass('open');
			$el.find('.accordion__item').not($this).removeClass('open');

		});
	}	

	var accordion1 = new Accordion($('#katalog'));
	var accordion2 = new Accordion($('#tooltip-menu'));

	//---------------------------------------------

	//------------- Min menu trigger ------------

	$('.min-menu-trigger').on('click', function() {
		$('#katalog').slideToggle()
	});

	$('.enter-btn').on('click', function() {
		$('.header-top__profile__block').removeClass('logged')
		$('.header-top__profile__enter').addClass('logged')
		$modalContainer.removeClass('md-show');
	});



	//---------------------------------------------

	//------------- Slick slider ------------ 



	$('.main-hot__items').slick({
		infinite: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: true,
		useTransform: false,
		swipeToSlide: true,
		// centerMode: true,
		// centerPadding: '30px',
		// adaptiveHeight: true,
		arrows: false,
		responsive: [
			// {
			// 	breakpoint: 9999,
			// 	settings: "unslick"
			// },
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4.3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3.3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 740,
				settings: {
					slidesToShow: 2.3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1.3,
					slidesToScroll: 1
				}
			}
		]
	});

	$slick_slider2 = $('.main-products__items');
	$slick_settings = {
		infinite: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: true,
		useTransform: false,
		swipeToSlide: true,
		arrows: false,
		responsive: [
			// {
			// 	breakpoint: 9999,
			// 	settings: "unslick"
			// },
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4.3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3.3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 740,
				settings: {
					slidesToShow: 2.3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1.3,
					slidesToScroll: 1
				}
			}
		]
	}

var $itemsParent = $('.main-products__items');
var $itemsCache = $('.main-products__items .item__wrap');

	// reslick only if it's not slick()
	$(window).on('load resize', function() {
		if (window.innerWidth > 1200) {

			if ($slick_slider2.hasClass('slick-initialized')) {
				$slick_slider2.slick('unslick');
			}
		}	else {
			if (!$slick_slider2.hasClass('slick-initialized')) {
				$slick_slider2.slick($slick_settings);
			}
		}

		// if (window.innerWidth > 768 ) $('#katalog').show();
		// else $('#katalog').hide();

	});

		$slick_slider2.slick($slick_settings);

	//---------------------------------------------

	//------------- Filtering ------------

	$('.main-products__options').on( 'click', 'li', function() {
		var filterValue = $( this ).data('filter');
		
		$slick_slider2.slick('destroy')
		$itemsParent.children().remove();
		$itemsCache.each(function() {
			if ($(this).hasClass(filterValue)) $(this).appendTo( $itemsParent );
		});

		if (window.innerWidth <= 1200) $slick_slider2.slick($slick_settings);
	});

	$('.main-products__options').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', 'li', function() {
			$buttonGroup.find('.selected').removeClass('selected');
			$( this ).addClass('selected');
		});
	});


});



});




