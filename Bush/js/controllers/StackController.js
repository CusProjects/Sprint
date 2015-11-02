app.controller('StackController', function ($scope, StackData) {
	$scope.data = {};
	$scope.status = "";
	getStack();
	getProyect();

	function getStack() {
		StackData.getStack()
			.success( function (stack) {
				$scope.data.stacks = stack;
				$scope.clear();
			})
			.error( function () {
				$scope.status = 'Error al traer stacks';
			});
	};

	function getProyect() {
    	StackData.getProyect()
    		.success (function (proyect){
    			$scope.data.proyects = proyect;
    		})
    		.error (function (error) {
    			$scope.status = "Error en getProyect.";
    		});
    };

    $scope.addStack = function() {
    	var stack = {
    		name : $scope.name,
    		proyectID : 2
    	};
    	StackData.addStack(stack)
    		.success(function (stack) {
				$('#modalAddStack').modal('hide');
				getStack();
    		})
    		.error( function (error) {
    			$scope.status = "Error addstack" + error;
    		});
    };

    $scope.clear = function () {
    	$scope.name = "";
    };
});