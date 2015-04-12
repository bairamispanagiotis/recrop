angular.module('saveCrop.posts.controllers',[]).controller
('PostController',['$scope','$http',
	function($scope,$http){


    $http.get('modules/posts/views/getPosts.php').success(function(data) {      
      $scope.posts = data;
      var image = new Image();
      angular.forEach($scope.posts, function(elem, key) {
    
       image.src = elem.image;
       elem.image = image.src;
       elem.currentUserId = userid;
        var mydate = new Date(elem.date);
        mydate = mydate.toString("dd-mm-yy").split("+");
        elem.date = mydate[0];
        // elem.date = mydate.getDay() + " - " + mydate.getMonth() + " - " + mydate.getFullYear();
        console.log(elem.date);
      });
       





    });

	}]).controller('PostDetailsController',['$stateParams','$state', '$scope',function($stateParams,$state,$scope){

	}]).controller('PostCreationController', ['$scope','$state','$http', function($scope,$state,$http){

    // $scope.uploadme = {};
    // $scope.uploadme.src = "";

    $http.get('getDiseases.php').success(function(data) {      
      $scope.diseases = data;

    });

    $scope.$on('$includeContentLoaded', function(){
      $scope.map = new google.maps.Map(document.getElementById('affected-map'), {
        center: { lat:-31.503629305773018, lng: -62.05078125 },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 4,
      });


      google.maps.event.addListener($scope.map, 'click', function(event) {
        if($scope.marker != ""){
          $scope.marker = new google.maps.Marker({
              map: $scope.map,
              icon: 'img/pin.png',
              title: "marker",
              position: event.latLng,
              visible: true,
              draggable:true,
          });
         $scope.currentLoc =  event.latLng;
        }
      });
      
    });


    $scope.save = function(){
      this.diseaseSelected;
      this.diseaseTypeSelected;
      this.dt;
      this.description;
      this.affected_area;
      this.diseaseTypeSelected;
      console.log(this.uploadme);

      $http.post('modules/posts/views/savePost.php',{
        diseaseSelected: this.diseaseSelected,
        diseaseTypeSelected:this.diseaseTypeSelected,
        date:this.dt,
        desc: this.description,
        affected_area:this.affected_area,
        photo:this.uploadme,
        latlong:$scope.currentLoc} ).
        success(function(data, status, headers, config) {
          if(data == "posted"){
            alert("Data Saved");
          }
          console.log(data);         
        }).
        error(function(data, status, headers, config) {
          alert(data);
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
      

    }

		$scope.today = function() {
			$scope.dt = new Date();
		};
		$scope.today();

		$scope.clear = function () {
			$scope.dt = null;
		};

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
  	return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
  	$scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
  	$event.preventDefault();
  	$event.stopPropagation();

  	$scope.opened = true;
  };

  $scope.dateOptions = {
  	formatYear: 'yy',
  	startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];


  

}]).controller('PostUpdateController', ['$scope','$stateParams', '$state',function($scope,$stateParams,$state,flow){
	
}]).directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        scope.fileread = loadEvent.target.result;

                    });
                }
                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    }
}]);;