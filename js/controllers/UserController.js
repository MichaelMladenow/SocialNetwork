'use strict';

app.controller('UserController',
    function($scope, $location, $timeout, userService, notifyService) {
        $scope.getFriendRequests = function() {
            userService.getPendingRequests(
                function success(data) {
                    $scope.friendRequests = data;
                    //console.log(data);
                },
                function error(err) {
                    notifyService.showError("Cannot load friend requests", err);
                });
        };

        $scope.acceptFriend = function(requestId) {
            userService.acceptPendingRequest(requestId, function success(data) {
                    notifyService.showInfo("Friendship accepted!");
                    $location.path('/friends');
                },
                function error(err) {})
        };

        $scope.rejectFriend = function(requestId) {
            userService.rejectPendingRequest(requestId, function success(data) {
                    notifyService.showInfo("Friendship declined!");
                    $location.path('/friends');
                },
                function error(err) {
                    notifyService.showError("Could not reject friend.", err);
                })
        };

        // On loading user controller fetches friend requests
        // TODO: Maybe add it on load into the partial
        $scope.getFriendRequests();
    }
);