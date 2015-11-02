app.factory('StackData', ['$http' ,function ($http) {
	var urlBase = 'http://c-us.xyz/Sprint/public/api/';
	var StackData = {};

	StackData.getStack = function () {
		return $http.get(urlBase + 'stacks');
	};

	StackData.addStack = function (stack) {
		return $http.post(urlBase + 'stacks', stack);
	};

	StackData.getProyect = function () {
		return $http.get(urlBase + 'proyects');
	};

	return StackData;
}]);