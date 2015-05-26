'use strict';

app.controller('HomeController',
  function($scope, postsService, notifyService, pageSize) {
    $scope.postsParams = {
      'LastPostId': '',
      'StartPostId': '',
      'PageSize': pageSize
    };

    $scope.fetchPosts = function(fromPostId) {
      $scope.postsParams['StartPostId'] = fromPostId;
      postsService.getPosts(
        $scope.postsParams,
        function success(data) {
          $scope.posts = data;
          $scope.postsParams['LastPostId'] = fromPostId;
          $scope.postsParams['NextPostId'] = data[data.length - 1] ? data[data.length - 1].id : '';
          console.log($scope.postsParams);
        },
        function error(err) {
          notifyService.showError(err.message == "Session token expired or not valid." ? "Please log in in order to see posts" : "Cannot load posts");
        }
      );
    };

    $scope.fetchPosts();
  }
);