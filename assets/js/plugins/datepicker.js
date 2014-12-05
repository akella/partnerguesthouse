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
	        
	        // Date range
	        $('#start').datepicker({
	            dateFormat: 'MM d',
	            prevText: '<i class="fa fa-angle-left"></i>',
	            nextText: '<i class="fa fa-angle-right"></i>',
	            firstDay: 1, 
	            minDate: 0,
	            onClose: function( selectedDate )
	            {
	                $('#finish').focus();
	                var getDate = $('#start').datepicker('getDate');
	            }
	        });
	        $('#finish').datepicker({
	            dateFormat: 'MM d',
	            prevText: '<i class="fa fa-angle-left"></i>',
	            nextText: '<i class="fa fa-angle-right"></i>',
	            firstDay: 1, 
	            minDate: 0,
	            // onClose: function( selectedDate )
	            // {
	            //     $('#start').focus();
	            // }
	        });

	   //      var dates = $( "#finish" ).datepicker({
				// minDate: new Date(),
				// onSelect: function( selectedDate ) {
				// 	var option = this.id == "start" ? "minDate" : "maxDate",
				// 		instance = $( this ).data( "datepicker" ),
				// 		date = $.datepicker.parseDate(
				// 			instance.settings.dateFormat ||
				// 			$.datepicker._defaults.dateFormat,
				// 			selectedDate, instance.settings );
				// 	dates.not( this ).datepicker( "option", option, date );
				// }

	   //      });
	        // Date range
	        $('#start1').datepicker({
	            dateFormat: 'MM d',
	            prevText: '<i class="fa fa-angle-left"></i>',
	            nextText: '<i class="fa fa-angle-right"></i>',
	            firstDay: 1, 
	            minDate: 0,
	            onClose: function( selectedDate )
	            {
	                $('#finish1').focus();
	            }
	        });
	        $('#finish1').datepicker({
	            dateFormat: 'MM d',
	            prevText: '<i class="fa fa-angle-left"></i>',
	            nextText: '<i class="fa fa-angle-right"></i>',
	            firstDay: 1, 
	            minDate: 0,
	            // onClose: function( selectedDate )
	            // {
	            //     $('#start').focus();
	            // }
	        });

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