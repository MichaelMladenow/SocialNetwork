'use strict';

app.controller('PostController',
   function ($scope, postsService, notifyService, $location) {
       $scope.publishPost = function(adData) {
           postsService.createNewPost(adData,
               function success() {
                   notifyService.showInfo("Post succesfully published!");
                   $location.path("/");
               },
               function error(err) {
                   notifyService.showError("Publishing post failed.", err);
               }
           );
       };
   }
);
