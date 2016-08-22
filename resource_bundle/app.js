var app = angular.module('MyApp', ['ngRoute']);


app.filter('l10n', function($rootScope) {
  $rootScope.currentLanguage = 'en';
  return function(label) {
    console.log(label);
    return tables[$rootScope.currentLanguage][label];
  }
});
