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
});