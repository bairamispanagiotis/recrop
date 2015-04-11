'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'myApp.version',
    'ui.router',
    'saveCrop.posts'
]).run(['$state', function($state){
    $state.go('allPosts');
}]);

