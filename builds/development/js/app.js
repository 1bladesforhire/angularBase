var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

// var ref = new Firebase("https://<your-firebase>.firebaseio.com/");


myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/home', {
      templateUrl: 'views/home.html'
      //controller:  'exampleController'
    }).
    otherwise({
      redirectTo: '/home'
    });
}]);