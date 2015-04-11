angular.module('saveCrop.posts.controllers',[]).controller
('PostController',['$scope',
	function($scope){


	}]).controller('PostDetailsController',['$stateParams','$state', '$scope',function($stateParams,$state,$scope){

	}]).controller('PostCreationController', ['$scope','$state', function($scope,$state){
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
	
}]);