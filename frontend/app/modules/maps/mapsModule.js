angular.module('saveCrop.maps', ['saveCrop.maps.controllers']).config(['$stateProvider', '$locationProvider', function($stateProvider,$locationProvider){
    $stateProvider.state('maps',{
        url:'/maps',
        templateUrl: 'modules/maps/views/maps.html',
        controller: 'MapsController'
    });
}]);