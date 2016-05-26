var app = angular.module('myApp', []);


app.controller('myCtrl', ["$scope","$http","myService",function($scope,$http,myService) {
    
    //$http.get('db.json');
      $scope.update = function(user) {
        $scope.master = angular.copy(user);
        
        $http.post('/posts', user).then(showMsg(), errorCallback);

      };
      var showMsg=function(){
        alert("Data added!")
      }
      //to delete 
      $scope.deleteData=function(id){
        $http.delete('/posts/'+id);


      }
  
}]);

app.controller('myCtrl2', ["$scope","$http","myService",function($scope,$http,myService) {
    
    //$http.get('db.json');
     $http.get('db.json').then(function(myData){
        $scope.myJsonData=myData.data.posts;
     });
    $scope.hex=myService.myFunc(255);
  
}]);

//create new service
app.service('myService',function(){

    this.myFunc=function(x){
        
        return x.toString(16);
    }
});