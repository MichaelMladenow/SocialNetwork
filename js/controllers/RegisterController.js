'use strict';

app.controller('RegisterController',
    function ($scope, $rootScope, $location, authService, notifyService) {
        $rootScope.pageTitle = "Register";

        $scope.register = function(userData) {
            authService.register(userData,
                function success() {
                    notifyService.showInfo("User registered successfully");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("User registration failed", err);
                }
            );
        };
    }
);
