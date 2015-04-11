angular.module('saveCrop.maps.controllers',[]).controller
('MapsController',['$scope','$http',
    function($scope,$http){
  
    $scope.diseases = {
			"1":{
				id:1,
				name: "Diseases of Alfalfa",
				lat:2.724609375,
				lng:27.839076094777816,
				color:"#e02222",
			},
			"2":{
				id:2,
				name:"Diseases of Almond",
				lat:17.841796875,
				lng:25.839449402063185,
				color:"#89b654",
			},
			"3":{
				id:3,
				name:"Diseases of Apple",
				lat:9.755859375,
				lng:17.014767530557833,
				color:"#4a7bbc",
			},
			"4":{
				id:4,
				name:"Diseases of Cacao",
				lat:29.6630859375,
				lng:15.496032414238634,
				color:"#cecc36",
			}			
		};

	$scope.markers = [];
	$scope.affectedAreas = [];
	$scope.countriesBorders = [];
	$scope.countries = [];

	
   
    

 $http.get('modules/maps/countries.geo.json')
       .then(function(res){

      	
        $scope.countries = res.data.features; 
       // console.log($scope.countries);
       	//Init Google map options
	    $scope.map = new google.maps.Map(document.getElementById('map-canvas'), {
		 	center: { lat:-31.503629305773018, lng: -62.05078125 },
		    mapTypeId: google.maps.MapTypeId.ROADMAP,
		    zoom: 4,
		});
	       

// console.log($scope.countries); 
// 	    console.log($scope.countriesBorders);
	   


                      
        });


    



	$scope.changeDisease = function(disease){
		disease = parseInt(disease);

		angular.forEach($scope.diseases, function(elem, key) {
			if(parseInt(disease) == elem.id){
				
				$scope.myLatlng = new google.maps.LatLng(elem.lat,elem.lng);
				//Add Marker
		    	$scope.marker = new google.maps.Marker({
				 map: $scope.map,
				 position: $scope.myLatlng,
				 draggable: false,
				 icon:'img/pin.png'
				});

				//Create Affected Area
				var circleOption = {
			      strokeColor: elem.color,
			      strokeOpacity: 0.8,
			      strokeWeight: 2,
			      fillColor: elem.color,
			      fillOpacity: 0.35,
			      map: $scope.map,
			      center: $scope.myLatlng,
			      radius: 9000 * 100
			    };
			    // Add the circle for this city to the map.
			    $scope.cityCircle = new google.maps.Circle(circleOption);
			    $scope.map.panTo($scope.myLatlng);

			    //Push Affected Area to Array
			    $scope.markers.push($scope.marker);
				$scope.affectedAreas.push($scope.cityCircle);
				
			}
		});
    }


    $scope.changeCountry = function(cntr){	
		
    	angular.forEach($scope.countries, function(country, key) {    
    		if (country.id == cntr) {
		    	var triangleCoords = [];
		    	  angular.forEach(country.geometry.coordinates, function(cords, key) {
		    	  	  angular.forEach(cords, function(cord, key) {
		    	  	  	if(key == 0){

			    	  	  	var mapLabel = new MapLabel({
						        text: country.properties.name,
						        position: new google.maps.LatLng(cord[1],cord[0]),
						        map: $scope.map,
						        fontSize: 15,
						        align: 'right'
						    });
						    $scope.map.panTo(new google.maps.LatLng(cord[1],cord[0]));
			    	  	}

		    	  	  	//console.log(cord);
		    	  		var cor = new google.maps.LatLng(parseFloat(cord[1]), parseFloat(cord[0]));
		    	  		triangleCoords.push(cor);
		    	  	  });
		    	  	

		    	  });
		    	
		    	//console.log(triangleCoords);
		    	//Construct Country Border.
				$scope.countryBorder = new google.maps.Polygon({
					paths: triangleCoords,
					strokeColor: '#FF00'+key,
					strokeOpacity: 0.8,
					strokeWeight: 2,
					fillColor: '#FF00'+key,
					fillOpacity: 0.35
				});

				$scope.countriesBorders.push($scope.countryBorder);
			  	$scope.countriesBorders[$scope.countriesBorders.length-1].setMap($scope.map);
			  	//Click Listener
				google.maps.event.addListener($scope.map, 'click', function (clickEvent) {
					console.log( clickEvent.latLng);
			    
				
				});
			};
	    });//End repeat
















		// country = parseInt(country);

		// angular.forEach($scope.country, function(elem, key) {
		// 	if(parseInt(country) == elem.id){
				
		// 		$scope.myLatlng = new google.maps.LatLng(elem.lat,elem.lng);
		// 		//Add Marker
		//     	$scope.marker = new google.maps.Marker({
		// 		 map: $scope.map,
		// 		 position: $scope.myLatlng,
		// 		 draggable: false,
		// 		 icon:'img/pin.png'
		// 		});

		// 		//Create Affected Area
		// 		var circleOption = {
		// 	      strokeColor: elem.color,
		// 	      strokeOpacity: 0.8,
		// 	      strokeWeight: 2,
		// 	      fillColor: elem.color,
		// 	      fillOpacity: 0.35,
		// 	      map: $scope.map,
		// 	      center: $scope.myLatlng,
		// 	      radius: 9000 * 100
		// 	    };
		// 	    // Add the circle for this city to the map.
		// 	    $scope.cityCircle = new google.maps.Circle(circleOption);
		// 	    $scope.map.panTo($scope.myLatlng);

		// 	    //Push Affected Area to Array
		// 	    $scope.markers.push($scope.marker);
		// 		$scope.affectedAreas.push($scope.cityCircle);
				
		// 	}
		// });
    }





}]).controller('MapsDetailsController',['$stateParams','$state', '$scope',function($stateParams,$state,$scope){

	

}]);