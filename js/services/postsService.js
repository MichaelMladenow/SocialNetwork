'use strict';

app.factory('postsService',
    function($http, baseServiceUrl, authService) {
        return {
            createNewPost: function(postData, success, error) {
                postData['username'] = authService.getCurrentUser().userName;
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/posts',
                    headers: authService.getAuthHeaders(),
                    data: postData
                };
                $http(request).success(success).error(error);
            },

            getPosts: function(params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me/feed',
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            },

            postComment: function(postId, commentData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/posts/' + postId + '/comments',
                    headers: authService.getAuthHeaders(),
                    data: { commentContent : commentData }
                };
                $http(request).success(success).error(error);
            },

        }
    }
);


/*

function ($resource, baseServiceUrl, authService) {
    var postsResource = $resource(
        baseServiceUrl + '/api/me/feed',
        null,
        {
            'getAll': {method: 'GET'}
        }
    );

    return {
        getPosts: function (params, success, error) {
            return postsResource.getAll(params, success, error);
        }
    }
}

    */