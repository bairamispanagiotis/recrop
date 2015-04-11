angular.module('saveCrop.profile', ['saveCrop.profile.controllers']).config(['$stateProvider', '$locationProvider', function($stateProvider,$locationProvider){
    $stateProvider.state('profile',{
        url:'/profile',
        templateUrl: 'modules/profile/views/profile.html',
        controller: 'ProfileController'
    });
}]);