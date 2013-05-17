var app  = angular.module("ax_directives",["date_component"]);

app.value("version","0.0.1");

app.controller("MainCtrl", ["$scope", function ($scope){
	$scope.users = [];
	
	$scope.addUser = function (name){
		if(name){
			$scope.users.push(name);
		}
	}
}]);

app.directive("greet", function (){
	return {
		restrict: "E",
		replace: true,
		template: '<h1> Hello World </h1>'
	}
});