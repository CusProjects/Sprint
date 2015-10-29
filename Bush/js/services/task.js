app.factory('TaskData', ['$http', function ($http) {
	var urlBase = 'http://c-us.xyz/Sprint/public/api/';
	var TaskData = {};

	TaskData.getTask = function () {
		return $http.get(urlBase + 'tasks');
	};

	TaskData.addTask = function (task) {
		return $http.post(urlBase + 'tasks', task);
	};
	
	TaskData.getDifficulty = function () {
		return $http.get(urlBase + 'difficulties');
	};

	TaskData.getStack = function () {
		return $http.get(urlBase + 'stacks');
	};

	TaskData.getProyect = function () {
		return $http.get(urlBase + 'proyects');
	};

	return TaskData;
}]);