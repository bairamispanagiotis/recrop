angular.module('saveCrop.maps.controllers',[]).controller
('MapsController',['$scope',
    function($scope){

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
			},

			
		};

	$scope.markers = [];
	$scope.affectedAreas = [];

    //Init Google map options
    $scope.map = new google.maps.Map(document.getElementById('map-canvas'), {
	 	center: { lat: 22.7142333984375, lng: 29.630771207229},
	    mapTypeId: google.maps.MapTypeId.ROADMAP,
	    zoom: 5,
	});
    




    //Click Listener
	google.maps.event.addListener($scope.map, 'click', function (clickEvent) {
		console.log( clickEvent.latLng);
    
	
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

// D: 22.7142333984375k: 29.630771207229





    }]).controller('MapsDetailsController',['$stateParams','$state', '$scope',function($stateParams,$state,$scope){

	

}]);