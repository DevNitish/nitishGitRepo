var app = angular.module('myApp', []);


app.controller('myCtrl', ["$window","$scope","$http","myService",function($window,$scope,$http,myService) {
    
    //$http.get('db.json');
      $scope.update = function(myuser) {
        
        
        $http.post('users', myuser).success(function(res){
        	console.log(res);
        	$window.location.assign('/users');
        });
         alert("Author name="+myuser.author);
      };
   

  
}]);

//create new service
app.service('myService',function(){

    this.myFunc=function(x){
        
        return x.toString(16);
    }
});