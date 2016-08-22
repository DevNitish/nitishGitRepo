var app=angular
  .module('app',['ui.router']);
    
app.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
$urlRouterProvider.otherwise('/'); 
$stateProvider
.state('about',{
  url:'/about',
  templateUrl:'about.html'
  
})
.state('home',{
  url:'/home',
  templateUrl:'home.html',
  controller:'homeCtrl',
  resolve:{
  	name:function($stateParams){
  		$stateParams.name;

  	}
  }
  
})
.state('home.detail',{
  url:'/detail/:name',
  templateUrl:'detail.html',
  controller:'detailCtrl'
  
})
.state('home.detail.subdetails',{
	url:'/subdetails',
	template:'<h3>In subdetails:{{name}}'
})
}]);

app.controller('homeCtrl',function($scope,$stateParams){
	$scope.name=$stateParams.name;
});

app.controller('detailCtrl',function($scope,$stateParams){
		$scope.name=$stateParams.name;

});
