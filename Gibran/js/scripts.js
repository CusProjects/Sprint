var app = angular.module('Proyect', []);



app.controller('ProyectsController', function($scope, $http){
    $scope.proyect = {};
    $scope.tasks = [];
    
    /*$http.get("http://c-us.xyz/Sprint/public/api/proyects/"+getUrlParameter('id'))
        .success(function(response) {
         $scope.proyect = response;
        }
    );*/
    ajaxHelper("http://c-us.xyz/Sprint/public/api/proyects/"+getUrlParameter('id'), "GET")
        .success(function(data){
            $scope.proyect = data;
        });
    
    /*$http.get("http://c-us.xyz/Sprint/public/api/tasks")
        .success(function(response) {
            $scope.tasks = response;
        }
    );*/
    ajaxHelper("http://c-us.xyz/Sprint/public/api/tasks", "GET").success(function(data){
       $scope.tasks = data; 
    });
    
    function ajaxHelper(uri, method, data){
		return $.ajax({
			type: method,
			async: false,
			url: uri,
			datatype: 'json',
			contentType: 'application/json',
			data: data ? JSON.stringify(data) : null
		}).fail(function(err){
			console.log(err);
		});
	}
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
