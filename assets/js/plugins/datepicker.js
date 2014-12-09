var Datepicker = function () {

    return {
        
        //Datepickers
        initDatepicker: function () {
	        // Regular datepicker
	        $('#date').datepicker({
	            dateFormat: 'dd.mm.yy',
	            prevText: '<i class="fa fa-angle-left"></i>',
	            nextText: '<i class="fa fa-angle-right"></i>'
	        });
	        
			function showDatePicker() {
				$("#sky-form").each(function(){
					var date_from = $(this).find("#start");
					var date_to = $(this).find("#finish");

					if (date_from.length) {
						date_from.datepicker({
							dateFormat: 'MM d',
							prevText: '<i class="fa fa-angle-left"></i>',
							nextText: '<i class="fa fa-angle-right"></i>',
							firstDay: 1,
							minDate: 0,
							onClose: function( selectedDate ) {
								date_to.datepicker( "option", "minDate", selectedDate );
								$('#finish').focus();
							}
						});
					}
					if (date_to.length) {
						date_to.datepicker({
							dateFormat: 'MM d',
							prevText: '<i class="fa fa-angle-left"></i>',
							nextText: '<i class="fa fa-angle-right"></i>',
							firstDay: 1,
							onClose : function( selectedDate ) {
								date_from.datepicker( "option", "maxDate", selectedDate );
							}
						});
					}
				});
			}
			showDatePicker();

			function showDatePicker_2() {
				$("#sky-form1").each(function(){
					var date_from = $(this).find("#start1");
					var date_to = $(this).find("#finish1");

					if (date_from.length) {
						date_from.datepicker({
							dateFormat: 'MM d',
							prevText: '<i class="fa fa-angle-left"></i>',
							nextText: '<i class="fa fa-angle-right"></i>',
							firstDay: 1,
							minDate: 0,
							onClose: function( selectedDate ) {
								date_to.datepicker( "option", "minDate", selectedDate );
								$('#finish1').focus();
							}
						});
					}
					if (date_to.length) {
						date_to.datepicker({
							dateFormat: 'MM d',
							prevText: '<i class="fa fa-angle-left"></i>',
							nextText: '<i class="fa fa-angle-right"></i>',
							firstDay: 1,
							onClose : function( selectedDate ) {
								date_from.datepicker( "option", "maxDate", selectedDate );
							}
						});
					}
				});
			}
			showDatePicker_2();
	        // $('#start1').datepicker({
	        //     dateFormat: 'MM d',
	        //     prevText: '<i class="fa fa-angle-left"></i>',
	        //     nextText: '<i class="fa fa-angle-right"></i>',
	        //     firstDay: 1, 
	        //     minDate: 0,
	        //     onClose: function( selectedDate )
	        //     {	
	        			// $('#start1')datepicker( "option", "minDate", selectedDate );
	        //      	$('#finish1').focus();
	        //     }
	        // });
	        // $('#finish1').datepicker({
	        //     dateFormat: 'MM d',
	        //     prevText: '<i class="fa fa-angle-left"></i>',
	        //     nextText: '<i class="fa fa-angle-right"></i>',
	        //     firstDay: 1, 
	        //     minDate: 0,
	            // onClose: function( selectedDate )
	            // {
	            //     $('#start').focus();
	            // }
	        // });

	        // Inline datepicker
	        $('#inline').datepicker({
	            dateFormat: 'dd.mm.yy',
	            prevText: '<i class="fa fa-angle-left"></i>',
	            nextText: '<i class="fa fa-angle-right"></i>'
	        });
	        
	        // Inline date range
	        $('#inline-start').datepicker({
	            dateFormat: 'dd.mm.yy',
	            prevText: '<i class="fa fa-angle-left"></i>',
	            nextText: '<i class="fa fa-angle-right"></i>',
	            onSelect: function( selectedDate )
	            {
	                $('#inline-finish').datepicker('option', 'minDate', selectedDate);
	            }
	        });
	        $('#inline-finish').datepicker({
	            dateFormat: 'dd.mm.yy',
	            prevText: '<i class="fa fa-angle-left"></i>',
	            nextText: '<i class="fa fa-angle-right"></i>',
	            onSelect: function( selectedDate )
	            {
	                $('#inline-start').datepicker('option', 'maxDate', selectedDate);
	            }
	        });
        }

    };
}();
