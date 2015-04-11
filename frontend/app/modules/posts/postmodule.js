angular.module('saveCrop.posts', ['saveCrop.posts.controllers', 'wysiwyg.module', 'colorpicker.module']).config(['$stateProvider', '$locationProvider', function($stateProvider,$locationProvider){
    $stateProvider.state('allPosts',{
        url:'/posts',
        templateUrl: 'modules/posts/views/posts.html',
        controller: 'PostController'
    }).state('singlePost',{
        url:'/posts/:id/:permalink',
        templateUrl: 'modules/posts/views/singlePost.html',
        controller: 'PostDetailsController'
    }).state('postNew',{
        url:'/posts/new',
        controller: 'PostCreationController',
        templateUrl:'modules/posts/views/newPost.html'
    }).state('postUpdate',{
        url:'/posts/:id/edit',
        controller: 'PostUpdateController',
        templateUrl:'modules/posts/views/updatePost.html'
    });

}]);