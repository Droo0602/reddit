var app = angular.module('reddit');

app.service('FirebaseService', function($http, $q){

	var guid = function() {
	    var s4 = function() {
	      return Math.floor((1 + Math.random()) * 0x10000)
	        .toString(16)
	        .substring(1);
	    }
	    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	      s4() + '-' + s4() + s4() + s4();
	  }

	this.getPosts = function(){
		var myDeferred = $q.defer()
		$http.get('https://devmtn.firebaseio.com/posts.json').then(function(result){
			myDeferred.resolve(result.data);
		})
		return myDeferred.promise;
	}

	this.addPost = function(post){
		console.log('working')
		post.timestamp = Date.now();
		post.comments = [];
		post.karma = 0;
		post.id = guid();

		//return $http.post('https://devmtn.firebaseio.com/posts' + post.id + '.json', post); <-- this also works
		return $http({
			url: 'https://devmtn.firebaseio.com/posts/' + post.id + '.json',
			method: 'PUT',
			data: post
		})
	}

})