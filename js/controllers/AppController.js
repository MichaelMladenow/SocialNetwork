'use strict';

// The AppController holds the presentation logic for the entire app (common all screens)
app.controller('AppController',
	function($scope, $route, $location, $interval, userService, authService, notifyService) {
		$scope.authService = authService;

		// Update friends ui on startup
		updateFriendRequests();

		function updateFriendRequests() {
				userService.getPendingRequests(function success(data) {
						$scope.friendRequestsCount = data.length;
						console.log('Friends badge updated. New: ' + data.length);
						//console.log(data.length);
					},
					function error(err) {
						$scope.friendRequestsCount = 0;
					})
			}
			// Update the badge 'NEW', 
			// TODO: Improve calling on this func
		$interval(updateFriendRequests, 5000);

		$scope.logout = function() {
			authService.logout();
			notifyService.showInfo("Logout successful");
			$location.path('/');
		};

		$scope.sendFriendRequest = function(username) {
			console.log(username);
			userService.requestFriendship(username, function success(data) {
					notifyService.showInfo("Friendship invitation sent to " + username + ".");
				},
				function error(err) {
					notifyService.showError(err.message);
				})
			$route.reload();
		};
	}
);