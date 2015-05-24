'use strict';

app.controller('HomeController',
   function ($scope, postsService, notifyService) {
       $scope.publishPost = function(adData) {
           postsServuce.createNewPost(adData,
               function success() {
                   notifyService.showInfo("Advertisement submitted for approval. Once approved, it will be published.");
                   $location.path("/user/ads");
               },
               function error(err) {
                   notifyService.showError("Publish ad failed", err);
               }
           );
       };

      $scope.reloadAds();
   }
);
