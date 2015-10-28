var app = angular.module('Proyect', []);



app.controller('ProyectsController', function($scope, $http) {

    $http.get("http://c-us.xyz/Sprint/public/api/difficulties")
        .success(function(response) {$scope.names = response;});

});