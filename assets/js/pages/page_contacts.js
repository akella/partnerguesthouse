var ContactPage = function () {

    return {
        
    	//Basic Map
        initMap: function () {
			var map;
			$(document).ready(function(){
				map = new GMaps({
				div: '#map',
				lat: 40.748866,
				lng: -73.988366
				});
				
				var marker = map.addMarker({
				lat: 40.748866,
				lng: -73.988366,
	        	  title: 'Company, Inc.'
		    	 });
			});
        },

    	//Basic Map
        initMap2: function () {
			var map2;
			$(document).ready(function(){
			  map2 = new GMaps({
				div: '#map2',
				lat: 50.4546600,
				lng: 30.5238000
			  });
			});
        },

        initMap3: function () {
			var map3;
			$(document).ready(function(){
			  map3 = new GMaps({
				div: '#map3',
				lat: 50.4546600,
				lng: 30.5238000
			  });
			});
        },

        initMap4: function () {
			var map4;
			$(document).ready(function(){
			  map4 = new GMaps({
				div: '#map4',
				lat: 50.4546600,
				lng: 30.5238000
			  });
			});
        },

        //Panorama Map
        initPanorama: function () {
		    var panorama;
		    $(document).ready(function(){
		      panorama = GMaps.createPanorama({
		        el: '#panorama',
		        lat : 40.748866,
		        lng : -73.988366
		      });
		    });
		}        

    };
}();