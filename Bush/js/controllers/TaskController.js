app.controller('TaskController', function ($scope, TaskData) {
	$scope.data = {};
	$scope.status = "";
	getTask();
	getStack();
	getProyect();
	getDifficulty();

    function getStack() {
    	TaskData.getStack()
    		.success (function (stack){
    			$scope.data.stacks = stack;
    		})
    		.error (function (error) {
    			$scope.status = "Error en getStack;";
    		});
    };

    function getProyect() {
    	TaskData.getProyect()
    		.success (function (proyect){
    			$scope.data.proyects = proyect;
    		})
    		.error (function (error) {
    			$scope.status = "Error en getProyect.";
    		});
    };

	function getTask() {
		TaskData.getTask()
			.success (function (task) {
				$scope.data.tasks = task;
				$scope.status = "Realizada la consulta";
				$scope.clear();
			})
			.error ( function (error){
				$scope.status = "Error en getTask.";
			});
	};

	function getDifficulty () {
		TaskData.getDifficulty() 
			.success(function (difficulty) {
				$scope.data.difficulties = difficulty;
			})
			.error(function (error) {
				$scope.status = "Error en getDifficulty.";
			});
	};

	//Se debe de agregar el stackID pero antes debo obtener el Id del modulo
	$scope.addTask = function () {
		var task = {
			name: $scope.name,
			state: $scope.state,
			difficultyID : $scope.item.id,
			stackID : 3
		};
		TaskData.addTask(task)
			.success (function (task) {
				$('#modalAddTask').modal('hide');
				getTask();
			})
			.error (function (error) {
				$scope.status = "Error addtask" + error;
			});
	};

	$scope.update = function() {
		if ($scope.item == null) {
			$scope.descripcion = "";
		} else {
			$scope.descripcion = $scope.item.startTime + " to " + $scope.item.finalTime + " hours.";
		}
    };

    $scope.clear = function() {
    	$scope.name = "";
    	$scope.state = "";
    	$scope.item = null;
    	$scope.update();
    };
});