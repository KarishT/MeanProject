app.controller('sessionController', function($scope, sessionFactory){
	$scope.users=[];

	sessionFactory.checkSess(function(data){
		$scope.sessionUsers = data;
	})

	$scope.logReg = function(){
		sessionFactory.logReg($scope.newUser)
	}
})
