head.ready(function() {

	var agent = navigator.userAgent,
	event = (agent.match(/iPad/i)) ? "touchstart" : "click";

	$(document).bind(event, function(e){
		$(".js-popup").hide();
	});

	$(document).on('click', function(){
		$(".js-price").removeClass("is-active");
		$(".js-booking-conditions").hide();
		$(".js-calendar-popup").removeClass('is-active');
	});

	$(".js-price").each(function(){
		$(".js-open-price").click(function() {
			$(this).parent().addClass('is-active');
		});
	});
	
	$(".js-open-popupcal").click(function() {
		$(this).next(".js-calendar-popup").addClass('is-active');
	});

	$(".js-closepopup").click(function(){
		$(".js-calendar-popup").removeClass('is-active');
	});
		
	$(".js-price-close").click(function(){
		$(".js-price-block").slideUp();
		$(".js-price").removeClass("is-active");
	});
	$("body").on("click", ".js-price, .js-booking-text, .js-open-popupcal, .js-calendar-popup", function(event){
		event.stopPropagation();
	});

	//slick
	$('.slider__for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider__nav'
	});
	$('.slider__nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.slider__for',
		dots: true,
		centerMode: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					centerMode: false
				}
			},
			{
				breakpoint: 400,
				settings: {
					centerMode: false,
					slidesToShow: 2
				}
			}
		]
	});


	$(".js-promocode-text").click(function(){
		$(".js-promocode-text").hide();
		$(".js-promocode-block").show();
	});
	$(".js-promocode-btn").click(function(){
		$(".js-promocode-block").hide();
		$(".js-promocode-discount").show();
	});
	$(".js-promocode-close").click(function(){
		$(".js-promocode-discount").hide();
		$(".js-promocode-text").show();
	});
	
	$(".js-booking-text").click(function(){
		$(".js-booking-conditions").show();
	});

	$(".js-booking-close").click(function(){
		$(".js-booking-conditions").hide();
	})


	// scroll
	$(".js-scroll").click(function (){
		var page = $(this).attr("href");

		$('html, body').animate({
			scrollTop: $(page).offset().top - 110
		}, 600);
		return false;
	});

	// 	$(function(){
	// 		window.prettyPrint && prettyPrint();
	// 		$('#dp1').datepicker();
	// 		$('#dp2').datepicker();
	// 		$('#dp3').datepicker();
	// 		$('#dp4').datepicker();
			

 //        // disabling dates
 //        var nowTemp = new Date();
 //        var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

 //        var checkin = $('#dpd1').datepicker({
 //          onRender: function(date) {
 //            return date.valueOf() < now.valueOf() ? 'disabled' : '';
 //          }
 //        }).on('changeDate', function(ev) {
 //          if (ev.date.valueOf() > checkout.date.valueOf()) {
 //            var newDate = new Date(ev.date)
 //            newDate.setDate(newDate.getDate() + 1);
 //            checkout.setValue(newDate);
 //          }
 //          checkin.hide();
 //          $('#dpd3')[0].focus();
 //        }).data('datepicker');
 //        var checkout = $('#dpd3').datepicker({
 //          onRender: function(date) {
 //            return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
 //          }
 //        }).on('changeDate', function(ev) {
 //          checkout.hide();
 //        }).data('datepicker');
	// 	});

	// $(".js-datepicker").focus(function(){
	// 	$('.datepicker').slideTogle();
	// });

// $('#myModal').on('loaded.bs.modal', function (e) {
//   alert();
// })

	$(".js-map").click(function(){
        ContactPage.initMap();
	})
});

