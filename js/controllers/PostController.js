'use strict';

app.controller('PostController',
   function ($scope, postsService, notifyService, $location) {
       $scope.publishPost = function(postData) {
           postsService.createNewPost(postData,
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
