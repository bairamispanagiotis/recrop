'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'myApp.version',
    'ui.router',
    'saveCrop.posts',
    'saveCrop.maps',
    'saveCrop.profile',
    'saveCrop.statistics',
]).directive('jqdatepicker', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
         link: function (scope, element, attrs, ngModelCtrl) {
            element.datepicker({
                dateFormat: 'DD, d  MM, yy',
                onSelect: function (date) {
                    scope.date = date;
                    scope.$apply();
                }
            });
        }
    };
}).run(['$state', function($state){
    $state.go('allPosts');
}]);

