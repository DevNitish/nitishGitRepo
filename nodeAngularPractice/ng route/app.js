var app=angular.module('app',['ngRoute']);



app.config(function($routeProvider){
	$routeProvider

	.when('/',{
		templateUrl:'home.html',
		controller:'homeCtrl'
	})
	.when('/detail',{
		templateUrl: 'detail.html',
		controller: 'detailCtrl'
	})
	.when('/about',{
				templateUrl : 'about.html',
				controller  : 'aboutCtrl'
	});

});//config ends



app.controller('mainCtrl',function($scope){
	$scope.msg="From mainCtrl";
});
app.controller('detailCtrl',function($scope){
	$scope.msg="From details Ctrl";
})

app.controller('aboutCtrl', function($scope) {
		$scope.msg= 'Look! I am an about page.';
	});