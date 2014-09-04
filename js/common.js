head.ready(function() {

	$(".js-map").click(function(){
		$(".js-modal").addClass("is-active");
	});
	
	var agent = navigator.userAgent,
	event = (agent.match(/iPad/i)) ? "touchstart" : "click";

	$(document).bind(event, function(e){
		$(".js-popup").hide();
	});

	$(document).on('click', function(){
		$(".js-price").removeClass("is-active");
		$(".js-booking-conditions").hide();
		$(".js-calendar-popup").removeClass('is-active');
		$(".js-filter-list").hide();
		$(".js-filter").removeClass('is-active');
		$(".js-filter-btn").removeClass('is-active');
		$(".js-price-date").fadeOut();
		$(".js-hint-info").fadeOut(); 
		$(".js-complete-description").removeClass('is-active');
	});


	$(".js-open-price").click(function() {
		$(".js-complete-description").removeClass('is-active');
		$(this).parent().parent().parent().parent().parent().parent().parent().addClass('is-active');
	});

	$(".js-open-popupcal").click(function() {
		$(this).next(".js-calendar-popup").addClass('is-active');
	});

	$(".js-closepopup").click(function(){
		$(".js-calendar-popup").removeClass('is-active');
	});
		
	$(".js-price-close").click(function(){
		$(".js-complete-description").removeClass("is-active");
	});
	$("body").on("click", ".js-price, .js-booking-text, .js-open-popupcal, .js-calendar-popup, .js-price-block", function(event){
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

	$(".js-filter-btn").click(function(){
		$(this).addClass('is-active');
		$(".js-filter-list").hide();
		$(this).next(".js-filter-list").show();
		$(".js-filter").addClass('is-active');
	});
	$(".js-close-convenience").click(function(){
		$(this).parent().parent().remove();
	});
	$("body").on("click", ".js-filter-btn, .js-filter-list, .js-price-min, .js-open-hint", function(event){
		event.stopPropagation();
	});

	$(".js-open-services").click(function(){
		$(this).hide();
		$(".js-close-services").show();
		$(".js-services").fadeIn();
	});

	$(".js-close-services").click(function(){
		$(this).hide();
		$(".js-open-services").show();
		$(".js-services").fadeOut();
	});

	$(".js-price-min").click(function(){
		$(".js-price-date").fadeIn();
	});
	
	$(".js-monthprices-btn1").click(function(){
		$(this).hide();
		$(".js-monthprices-btn2").show();
		$(".js-monthprices-table1").hide();
		$(".js-monthprices-table2").show();
	})
	$(".js-monthprices-btn2").click(function(){
		$(this).hide();
		$(".js-monthprices-btn1").show();
		$(".js-monthprices-table2").hide();
		$(".js-monthprices-table1").show();
	})
	
	$(".js-open-hint").click(function(){
	$(".js-hint-info").fadeIn();
	});

	$(".js-hint-close").click(function(){
		$(".js-hint-info").fadeOut();
	});
	

		// $(function(){
		// 	window.prettyPrint && prettyPrint();
		// 	$('#dp1').datepicker();
		// 	$('#dp2').datepicker();
		// 	$('#dp3').datepicker();
		// 	$('#dp4').datepicker();
			

  //       // disabling dates
  //       var nowTemp = new Date(); 
  //       var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

  //       var checkin = $('#dpd1').datepicker({
  //         onRender: function(date) {
  //           return date.valueOf() < now.valueOf() ? 'disabled' : '';
  //         }
  //       }).on('changeDate', function(ev) {
  //         if (ev.date.valueOf() > checkout.date.valueOf()) {
  //           var newDate = new Date(ev.date)
  //           newDate.setDate(newDate.getDate() + 1);
  //           checkout.setValue(newDate);
  //         }
  //         checkin.hide();
  //         $('#dpd3')[0].focus();
  //       }).data('datepicker');
  //       var checkout = $('#dpd3').datepicker({
  //         onRender: function(date) {
  //           return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
  //         }
  //       }).on('changeDate', function(ev) {
  //         checkout.hide();
  //       }).data('datepicker');
		// });

	// $(".js-datepicker").focus(function(){
	// 	$('.datepicker').slideTogle();
	// });

// $('#myModal').on('loaded.bs.modal', function (e) {
//   alert();
// })

});

