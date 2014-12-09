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
		$(".js-price-date").removeClass('is-active');
		$(".js-hint-info").fadeOut(); 
		$(".js-complete-description").removeClass('is-active');
		$(".js-convenience-ico").removeClass("is-active");
		$(".js-popup-map").removeClass("is-popup-map");
	});

	$(".js-filter-select").click(function(){
		$(".js-filter-list").hide();
		$(".js-filter").removeClass('is-active');
		$(".js-filter-btn").removeClass('is-active');
		alert("Комнаты выбраны");
	});

	$(".js-filter-selectcon").click(function(){
		$(".js-filter-list").hide();
		$(".js-filter").removeClass('is-active');
		$(".js-filter-btn").removeClass('is-active');
		alert("Удобства выбраны");
	});

	$(".js-convenience").click(function(){
		$(this).toggleClass("is-active");
	})

	$(".js-show-td").click(function(){
		$(this).parent().parent().addClass("is-active");
		$(this).hide();
		// $(".js-td-hidden").show();
	});
	

	$(".js-change-input").click(function(){
		// $(this).parents(".filter__list").find('.checkbox__input').removeAttr('checked');
		$(".js-filter-list").hide();
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
	$("body").on("click", ".js-price, .js-booking-text, .js-open-popupcal, .js-calendar-popup, .js-price-block, .js-price-date, .js-convenience-ico, .map", function(event){
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
		$(".js-price-date").toggleClass("is-active");
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
	
	$('.js-open-adrress-list').on('click', function(){
		$('.js-adrress-list').slideToggle();
	})
	$('.js-fiter-button').on('click', function(){
		$(this).parent().toggleClass('is-open')
		$(this).toggleClass('is-active');
		$('.js-filter-block').slideToggle();
	})
	
	$(".js-convenience-ico").on("click", function(){
		$(".js-convenience-ico").removeClass("is-active");
		$(this).toggleClass("is-active");
	});

	$(".js-open-popup-map").on("click", function(){
		$(this).parent().addClass("is-popup-map");

		$('html, body').animate({
			scrollTop: $('.is-popup-map').offset().top - 10
		}, 600);
		return false;
	});
	
	$(".js-popup-map-close").on("click", function(){
		$(".js-popup-map").removeClass("is-popup-map");
	});

	$('td .ui-state-default').on('click', function() {
		return false;
	});
	
	$('#button').on('click', function() {
		$('#content').addClass('is-active');
	});

	function initialize() {
		var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
		var myLatlng_2 = new google.maps.LatLng(-25.303882,131.034922);
		var mapOptions = {
			zoom: 10,
			center: myLatlng
		};

		var map = new google.maps.Map(document.getElementById('map10'), mapOptions);

		var contentString = '<div id="content">'+
				'<div id="content-popup-first">'+
					'<a href="#" id="title">Шевченко 10, Киев</a>'+
					'<div id="size">Двухкомнатная</div>'+
					'<p><a href="#">Гестхаус "Шевченко"</a></p>'+
					'<div id="content-row">'+
						'<div id="content-price">От <span>300</span> грн/сутки</div>'+
						'<button id="button" class="btn-u btn-u-xs btn-u-green">Узнай подробнее</button>'+
					'</div>'+
				'</div>'+
			'</div>';

		var contentString_2 = '<div id="content">'+
				'<div id="content-popup-two">'+
					'<div id="title">Шевченко 10, Киев</div>'+
					'<p><a href="#">Гестхаус "Шевченко"</a></p>'+
						'<ul id="content-list">'+
							'<li>Двухкомнатная - ID234 - от 234 грн/сутки</li>'+
							'<li>Двухкомнатная - ID234 - от 234 грн/сутки</li>'+
							'<li>Двухкомнатная - ID234 - от 234 грн/сутки</li>'+
							'<li>Двухкомнатная - ID234 - от 234 грн/сутки</li>'+
							'<li>Двухкомнатная - ID234 - от 234 грн/сутки</li>'+
							'<li>Двухкомнатная - ID234 - от 234 грн/сутки</li>'+
							'<li>Двухкомнатная - ID234 - от 234 грн/сутки</li>'+
							'<li>Двухкомнатная - ID234 - от 234 грн/сутки</li>'+
							'<li>Двухкомнатная - ID234 - от 234 грн/сутки</li>'+
							'<li>Двухкомнатная - ID234 - от 234 грн/сутки</li>'+
							'<li>Двухкомнатная - ID234 - от 234 грн/сутки</li>'+
							'<li>Двухкомнатная - ID234 - от 234 грн/сутки</li>'+
						'</ul>'+
				'</div>'+
			'</div>';
		var infowindow = new google.maps.InfoWindow({
			content: contentString,
			maxWidth: 250
		});

		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: 'Шевченко 10, Киев'
		});

		var infowindow_2 = new google.maps.InfoWindow({
			content: contentString_2,
	        maxHeight: 300
		});

		var marker_2 = new google.maps.Marker({
			position: myLatlng_2,
			map: map,
			title: 'Шевченко 10'
		});
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
		google.maps.event.addListener(marker_2, 'click', function() {
			infowindow_2.open(map,marker_2);
		});
	}
	google.maps.event.addDomListener(window, 'load', initialize);

	
// function initialize() {     
//     var myLatlng = new google.maps.LatLng(-34.397, 150.644);
//     var myOptions = {
//         zoom: 8,
//         center: myLatlng,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     }
//     var map = new google.maps.Map(document.getElementById("map3"), myOptions); 
// }


});

