var app = angular.module('CusProyect',['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			controller: "TaskController",
			templateUrl : "index.html"
		});
});