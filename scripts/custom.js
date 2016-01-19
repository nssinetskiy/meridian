$(document).ready(function() {
		$('#slider').slider({
			min: 1250000,
			max: 4200000,
			values: [1250000, 4200000],
			range: true,
			stop: function(event, ui) {
				$("input#minCost").val($("#slider").slider("values",0));
				$("input#maxCost").val($("#slider").slider("values",1));
			},
			slide: function(event, ui) {
				$("input#minCost").val($("#slider").slider("values",0));
				$("input#maxCost").val($("#slider").slider("values",1));
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
			$("#slider").slider("values", 0, value1);
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
		$('.js-menu__item_popup').hover(
			function() {
				$('.js-popup-menu').show();
			},
			function() {
				$('.js-popup-menu').hide();
			});
		});