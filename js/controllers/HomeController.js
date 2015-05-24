'use strict';

app.controller('HomeController',
   function ($scope, postsService, notifyService, pageSize) {
      $scope.adsParams = {
          'StartPostId' : 1,
          'PageSize' : pageSize
      };

      $scope.reloadAds = function() {
          postsService.getPosts(
              $scope.adsParams,
              function success(data) {
                  $scope.ads = data;
                  // console.log(data);
              },
              function error(err) {
                  notifyService.showError("Cannot load posts", err);
              }
          );
      };

      $scope.reloadAds();
   }
);
