var app = angular.module('reddit');

app.controller('PostsController', function($scope, FirebaseService){

	$scope.getPosts = function(){

		FirebaseService.getPosts().then(function(posts){
			$scope.posts = posts;
		})
	}

	$scope.getPosts()

	$scope.addPost = function(){
		debugger
		FirebaseService.addPost($scope.newPost).then(function(){
			$scope.getPosts();
		})
	}

});
