'use strict';

app.factory('userService',
    function ($http, baseServiceUrl, authService) {
        return {
            createNewPost: function (adData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/posts',
                    headers: authService.getAuthHeaders(),
                    data: adData
                };
                $http(request).success(success).error(error);
            },

            getPendingRequests: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me/requests',
                    headers: authService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            acceptPendingRequest: function (requestID, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/me/requests' + requestID + '?status=approved',
                    headers: authService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            rejectPendingRequest: function (requestID, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/me/requests' + requestID + '?status=rejected',
                    headers: authService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            getUserDataByUsername: function (username, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/users/' + username,
                    headers: authService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },


        }
    }
);
