angular.module('saveCrop.posts.controllers',[]).controller
('PostController',['$scope',
	function($scope){


	}]).controller('PostDetailsController',['$stateParams','$state', '$scope',function($stateParams,$state,$scope){

	}]).controller('PostCreationController', ['$scope','$state','Post', 'flow', function($scope,$state,Post,flow){
		$scope.yourModel.customMenu = [
            ['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript'],
            ['font'],
            ['font-size'],
            ['font-color', 'hilite-color'],
            ['remove-format'],
            ['ordered-list', 'unordered-list', 'outdent', 'indent'],
            ['left-justify', 'center-justify', 'right-justify'],
            ['code', 'quote', 'paragragh'],
            ['link', 'image']
        ];

	}]).controller('PostUpdateController', ['$scope','Post','$stateParams', '$state', 'flow',function($scope,Post,$stateParams,$state,flow){
		$scope.yourModel.customMenu = [
            ['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript'],
            ['font'],
            ['font-size'],
            ['font-color', 'hilite-color'],
            ['remove-format'],
            ['ordered-list', 'unordered-list', 'outdent', 'indent'],
            ['left-justify', 'center-justify', 'right-justify'],
            ['code', 'quote', 'paragragh'],
            ['link', 'image']
        ];

	}]);