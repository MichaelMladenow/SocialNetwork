'use strict';

app.controller('HomeController',
   function ($scope, postsService, notifyService, pageSize) {
      $scope.postsParams = {
          'StartPostId' : '',
          'PageSize' : pageSize
      };

      $scope.reloadPosts = function() {
          postsService.getPosts(
              $scope.postsParams,
              function success(data) {
                  $scope.posts = data;
              },
              function error(err) {
                  notifyService.showError("Cannot load posts", err);
              }
          );
      };

      $scope.reloadPosts();
   }
);
