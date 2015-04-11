angular.module('saveCrop.statistics', ['saveCrop.statistics.controllers']).config(['$stateProvider', '$locationProvider', function($stateProvider,$locationProvider){
    $stateProvider.state('statistics',{
        url:'/statistics',
        templateUrl: 'modules/statistics/views/statistics.html',
        controller: 'LineCtrl'
    })

     }]);