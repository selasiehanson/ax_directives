var app  = angular.module("ax_directives",[]);

app.value("version","0.0.1");

app.controller("MainCtrl", ["$scope", function ($scope){
	$scope.users = [];
	
	$scope.addUser = function (name){
		if(name){
			$scope.users.push(name);
		}
	}
}]);

app.directive("greeter", function (){

});