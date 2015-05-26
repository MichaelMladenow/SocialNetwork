'use strict';

app.controller('UserBrowserController',
    function($scope, $routeParams, userService, notifyService) {

        $scope.getUser = function(username) {
            userService.getUserDataByUsername(username, function success(data) {
                    $scope.currentUserData = data;
                },
                function error(err) {
                    notifyService.showError("Could not find user.", err);
                })
        };

        $scope.getUser($routeParams.userName);
    }
);