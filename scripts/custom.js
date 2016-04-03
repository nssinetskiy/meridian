$(document).ready(function() {
	$('#slider-price').slider({
		min: 1250000,
		max: 4200000,
		values: [1250000, 4200000],
		range: true,
		step: 1000,
		stop: function(event, ui) {
			$("input#minCost").val($("#slider-price").slider("values",0));
			$("input#maxCost").val($("#slider-price").slider("values",1));
		},
		slide: function(event, ui) {
			$("input#minCost").val($("#slider-price").slider("values",0));
			$("input#maxCost").val($("#slider-price").slider("values",1));
		}
	});
	$("input#minCost").change(function() {
		var value1 = $("input#minCost").val();
		var value2 = $("input#maxCost").val();
		if (value1 < 1250000) {
			value1 = 1250000;
			$("input#minCost").val(1250000)
		}
		if (parseInt(value1) > parseInt(value2)) {
			value1 = value2;
			$("input#minCost").val(value1);
		}
		$("#slider-price").slider("values", 0, value1);
	});
	$("input#maxCost").change(function() {
		var value1 = $("input#minCost").val();
		var value2 = $("input#maxCost").val();
		if (value2 > 4200000) {
			value2 = 4200000;
			$("input#maxCost").val(4200000)
		}
		if (parseInt(value1) > parseInt(value2)) {
			value2 = value1;
			$("input#maxCost").val(value2);
		}
	});
	$('#slider-space').slider({
		min: 18,
		max: 100,
		values: [18, 100],
		range: true,
		stop: function(event, ui) {
			$("input#minSpace").val($("#slider-space").slider("values",0));
			$("input#maxSpace").val($("#slider-space").slider("values",1));
		},
		slide: function(event, ui) {
			$("input#minSpace").val($("#slider-space").slider("values",0));
			$("input#maxSpace").val($("#slider-space").slider("values",1));
		}
	});
	$("input#minSpace").change(function() {
		var value1 = $("input#minSpace").val();
		var value2 = $("input#maxSpace").val();
		if (value1 < 18) {
			value1 = 18;
			$("input#minSpace").val(18)
		}
		if (parseInt(value1) > parseInt(value2)) {
			value1 = value2;
			$("input#minSpace").val(value1);
		}
		$("#slider-space").slider("values", 0, value1);
	});
	$("input#maxSpace").change(function() {
		var value1 = $("input#minSpace").val();
		var value2 = $("input#maxSpace").val();
		if (value2 > 100) {
			value2 = 100;
			$("input#maxSpace").val(100)
		}
		if (parseInt(value1) > parseInt(value2)) {
			value2 = value1;
			$("input#maxSpace").val(value2);
		}
	});
	$('.js-checkbox-rect').on('click', function(e) {
		if ($(this).hasClass("checkbox-rect_active")) {
			$(this).removeClass("checkbox-rect_active");
		}
		else {
			$(this).addClass("checkbox-rect_active");
		}
	});
	$('.js-price-input').autoNumeric('init', {
		aSep: ' ',
		vMin: '0',
		vMax: '9999999999'
	});
	$('.js-space-input').autoNumeric('init', {
		vMin: '0',
		mDec: '2'
	});
	$('.js-menu__item_popup').hover(
		function() {
			$('.js-popup-menu').show();
		},
		function() {
			$('.js-popup-menu').hide();
		}
	);
/*$('.js-menu__item_popup').hover(function() {
	setTimeout(function() {
		$('.js-popup-menu').show();
	}, 240);
	},
	function() {
	$('.js-popup-menu').hide();
	});*/
	$('.js-link-advanced-search').on('click', function(e) {
		e.preventDefault();
		$(this).find('.glyphicon').toggleClass("glyphicon-menu-down glyphicon-menu-up");
		$('.js-flat-search-advanced').toggleClass("active");
	});
	$('.js-drop, .js-drop-main').superfish({
		popUpSelector: 'ul,div,.sf-mega',
		delay: 0,
		speed: 10
	});
	$('.price-table__space-inner span').on('click', function(e) {
		$(this).closest("tr").toggleClass("price-table__row-hover");
	});
	var popovers = [];
	$('[data-toggle="popover"]').each(function() {
		var $this = $(this);
		$this.popover();
		popovers.push($this);
	});
	$('tbody').on('scroll', function() {
		popovers.forEach(function($e) {
			$e.popover('hide');
		});
		$('tr.price-table__row-hover').removeClass("price-table__row-hover");
	});
	$('.price-table .link_nav').on('click', function(e) {
		$('.price-table .link_nav').removeClass("active-item");
		$(this).addClass("active-item");
		$(this).find('.glyphicon').toggleClass("glyphicon-menu-down glyphicon-menu-up");
		e.preventDefault();
		e.stopPropagation();
	});
	/* Flat locaion select */
	var JS_SELECT_CLASS = '.js-flat-location-select';
	$(document).on('click', function(){
  		closeAllSelects();
  	})
  	$(document).on('closeAll', closeAllSelects)
  	$(JS_SELECT_CLASS).each(function(number, item){
  		var ACTIVE = 'active';
    	var SELECT_OPEN_CLASS = 'flat-location-select__list_open';
  		var $item = $(item);
  		var $input = $('.js-input', $item);
    	var $list = $('.js-flat-location-select__list', $item);
    	var $options = $('.js-flat-location-select-option');
    	var $label = $('.js-flat-location-select__label, .js-flat-location-select__icon', $item);
    	var $value = $('.js-flat-location-select-value', $item);
    	$item.on('click', function(e){
			e.stopPropagation();
    	});
    	$item.on('close', closeList);
		$label.on('click', toggleList);
    	$options.on('click', function(e){
    		var $target = $(this);
      		unselectItems();
      		closeList();
      		toggleItem($target);
      		changeLabelValue($target.data('value'));
      		setActive($target.data('id'));
      		e.preventDefault();
    	})
    	function toggleList(){
    		$(document).trigger('closeAll');
    		$list.toggleClass(SELECT_OPEN_CLASS);
    	}
    	function closeList(){
    		$list.removeClass(SELECT_OPEN_CLASS);
    	}
    	function toggleItem($listItem){
    		$listItem.toggleClass(ACTIVE);
    	}
    	function changeLabelValue(name){
    		$('.js-flat-location-select__label').text(name);
    	}
    	function unselectItems(){
    		$options.removeClass(ACTIVE);
    	}
    	function setActive(id){
    		$value.val(id);
    	}
  	});
  	function closeAllSelects(){
  		$(JS_SELECT_CLASS).trigger('close')
  	}
	/* Flat info popup */
	$(".js-flat-info__plan").on("click", function() {
		var screenHeight = $(window).height();
			modalPosition = $(document).scrollTop() + screenHeight/2 - $(".js-flat-info-popup").height() / 2;
		$(".js-popup-overlay").fadeIn(1000);
		// $(".js-popup-overlay").fadeTo("slow", 0.8);
		$(".js-flat-info-popup").css({"top": modalPosition + "px", "display": "block"});
		return false;
	});
	$(".js-popup-overlay").on("click", function() {
		$(".js-popup-overlay, .js-flat-info-popup").hide();
	});
	/* Chessboard flats selection */
	$('.apt_available, .apt_promo').on('click', function() {
		$('.apt').removeClass("apt_selected");
		$(this).toggleClass("apt_selected");
	});
	/* Affix block */
	$(".js-flat-variants").affix({
		offset: {
			top: $(".js-flat-variants").offset().top,
			bottom: $(".footer").outerHeight(true) + 
					$(".js-bottom-navigation").outerHeight(true) + 
					$(".js-booked").outerHeight(true) + 
					$(".js-comments").outerHeight(true) + 
					$(".js-dynamics").outerHeight(true) + 
					$(".js-location").outerHeight(true) + 
					$(".js-about-project").outerHeight(true) + 
					$(".js-object-carousels").outerHeight(true) + 
					$(".js-gethelp").outerHeight(true) + 
					$(".js-flats-list").outerHeight(true)
		}
	});
});
/* Custom horizontal scrollbar */
window.onload = function() {
// Horizontal
baron({
    root: '.js-scrolled-gallery',
    scroller: '.js-scrolled-gallery__container',
    bar: '.js-scrolled-gallery__bar',
    scrollingCls: '_scrolling',
    draggingCls: '_dragging',
    direction: 'h'
    });
};