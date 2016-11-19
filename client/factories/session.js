app.factory('sessionFactory', function($http,$location){
	var factory = {};

	factory.checkSess = function(cb){
		$http.get('/user/checksess').success(function(data){
			cb(data);


			if(!data){
				$location.url('/logreg');
			}

		})
	}
	factory.logReg = function(user){
		$http.post('/user/login', user).success(function(data){
			if(data.status == true){
			$location.url('/dashboard')

			}
		})
	}
	return factory;
})
