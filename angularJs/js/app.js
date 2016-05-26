var app = angular.module('myApp', []);


app.controller('myCtrl', ["$scope","$timeout","myService",function($scope,$timeout,myService) {
    $scope.carname = "Volvo";
    $scope.names=["Nitish","Kumar","Sugam"];

    $timeout(function () {
        $scope.myHeader = "How are you today?";
    }, 2000);
    $scope.hex=myService.myFunc(255);
  
}]);


//create new service
app.service('myService',function(){

	this.myFunc=function(x){
		
		return x.toString(16);
	}
});

//di
// var MyController = function($scope, greeter) {
// alert("What up?")
// }
// MyController.$inject = ['$scope', 'greeter'];
// someModule.controller('MyController', MyController);