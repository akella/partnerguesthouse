head.ready(function() {

	var agent = navigator.userAgent,
	event = (agent.match(/iPad/i)) ? "touchstart" : "click";

	$(document).bind(event, function(e){
		$(".js-popup").hide();
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
	console.log($('body').html());
});

