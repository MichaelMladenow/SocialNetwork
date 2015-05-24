'use strict';

app.controller('UserController',
    function ($scope, userService, notifyService) {
        $scope.getFriendRequests = function () {
            userService.getPendingRequests(
                function success(data) {
                    $scope.friendRequests = data;
                    console.log(data);
                },
                function error(err) {
                    notifyService.showError("Cannot load friend requests", err);
                });
        };

        $scope.acceptFriend = function (requestId) {
            userService.acceptPendingRequest(requestId, function success(data) {
                    notifyService.showInfo("Friendship accepted!");
                },
                function error(err) {
                    notifyService.showError("Could not accept friend.", err);
                })
        };


        $scope.friendsRequests = $scope.getFriendRequests();
    }
);
