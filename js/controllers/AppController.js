'use strict';

// The AppController holds the presentation logic for the entire app (common all screens)
app.controller('AppController',
	function($scope, $location, $timeout, userService, authService, notifyService) {
		$scope.authService = authService;

		$scope.logout = function() {
			authService.logout();
			notifyService.showInfo("Logout successful");
			$location.path('/');
		};

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
		$timeout(updateFriendRequests, 5000);
	}
);