var app = angular.module('MyApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/home.html',
    resolve: {
      resourceBundle: function(ResourceBundle) {
        return ResourceBundle.retrieveResourceBundle();
      }
    }
  });
});

app.factory('ResourceBundle', function($q, $rootScope, $http) {
  var retrieveResourceBundle = function() {
    var defer = $q.defer();

    if($rootScope.resourceBundle) {
      defer.resolve();
    } else {
      var retrieveResourceBundleHttpPromise = $http.get('/resource_bundle.en.json');
      retrieveResourceBundleHttpPromise.success(function(data) {
        setTimeout(function() {
          $rootScope.resourceBundle = data;
          defer.resolve();
        }, 1000);
      });
      retrieveResourceBundleHttpPromise.error(function(data) {
        defer.reject(data);
      });
    }

    console.log('Retrieving Resource Bundle!!');
    return defer.promise;
  }

  return {
    retrieveResourceBundle: retrieveResourceBundle
  }
});

app.filter('l10n2', function($rootScope, $http) {
  $rootScope.currentLanguage = 'en';
  return function(label) {
    console.log('$rootScope.resourceBundle[label]: '+label+'and vlaue is ' + $rootScope.resourceBundle[label]);
    return $rootScope.resourceBundle[label];
  }
});
