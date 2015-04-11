angular.module('saveCrop.profile.controllers',[]).controller
('ProfileController',['$scope',
    function($scope){

    	 $scope.dateOptions = {
       		changeYear: true,
        	changeMonth: true,
        	yearRange: '1900:-0'
   		};

    	$scope.user = {
    		id:1,
    		username:"Admin",
    		fullname:"Admin Admin",
    		email:"Admin@savecrop.org",
    		telephone:"6978791291",
    		created_at:"11-04-2015",
    		editable:false,
    	}
    	$scope.alertuser = function(){
    		$scope.user.editable = true;
    	}

    }]).controller('ProfilesDetailsController',['$stateParams','$state', '$scope',function($stateParams,$state,$scope){

	

}]);