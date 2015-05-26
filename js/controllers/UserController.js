'use strict';

app.controller('UserController',
    function($scope, $location, userService, notifyService) {
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
                    $scope.getFriendRequests();
                },
                function error(err) {
                    notifyService.showInfo(err.message);
                })
        };

        $scope.rejectFriend = function(requestId) {
            userService.rejectPendingRequest(requestId, function success(data) {
                    notifyService.showInfo("Friendship declined!");
                    $scope.getFriendRequests();
                },
                function error(err) {
                    notifyService.showError("Could not reject friend.", err);
                })
        };

        $scope.getSelfFriends = function() {
            userService.getOwnFriends(function success(data) {
                    $scope.ownFriendsList = data;
                },
                function error(err) {
                    notifyService.showError(err.message);
                });
        };

        // Get friends to populate friends page
        $scope.getSelfFriends();

        // On loading user controller fetches friend requests
        // TODO: Maybe add it on load into the partial
        $scope.getFriendRequests();
    }
);