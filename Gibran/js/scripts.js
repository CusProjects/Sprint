var app = angular.module('Proyect', []);



app.controller('ProyectsController', function($scope, $http) {
    $http.get("http://c-us.xyz/Sprint/public/api/proyects/"+getUrlParameter('id'))
        .success(function(response) {
         $scope.proyect = response;
        }
    );
    $http.get("http://c-us.xyz/Sprint/public/api/tasks")
        .success(function(response) {
            $scope.tasks = response;
        }
    );
});


var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};