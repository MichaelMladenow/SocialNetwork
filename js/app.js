'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net');
app.constant('pageSize', 4);

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    });

    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });
	
	$routeProvider.when('/user/posts/publish', {
        templateUrl: 'templates/user/post.html',
        controller: 'PostController'
    });

    $routeProvider.otherwise(
        { redirectTo: '/' }
    );

});

app.run(function ($rootScope, $location, authService) {
  $rootScope.$on('$locationChangeStart', function (event) {
    if ($location.path().indexOf("/user/") != -1 && !authService.isLoggedIn()) {
      // Authorization check: anonymous site visitors cannot access user routes
      $location.path("/");
    }
  });
});
