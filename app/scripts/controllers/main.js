'use strict';

angular.module('v9App')
  .controller('MainCtrl', function ($scope, GooglSpreadsheet) {


  	   $scope.getStyleForCategory = function(category) {
  	   		if (category == "labs") {
            return {'background-color' : "#61AE24"}
          }
          if (category == "game") {
            return {'background-color' : "#FF7200"}
          }
          if (category == "library") {
            return {'background-color' : "#1CBABC"}
          }



  	   		return {'background-color' : "#CCC"};
  	   }

  	    $scope.getIconForCategory = function(category) {
  	   		if (category == "labs") {
            return {'fa-flask': true};
          }
          if (category == "game") {
            return {'fa-gamepad': true};
          }
          if (category == "library") {
            return {'fa-book': true};
          }
          return {'fa-file-o': true};
  	   }


       $scope.loading = true;

       GooglSpreadsheet.get().then(function(data) {
           $scope.projects = data;
           $scope.loading = false;

           $("body").addClass("loaded");


          // setTimeout(  $scope.bindEffects, 200);
            

       })


       /*$scope.bindEffects = function() {
             $('.timeline-elt').mouseover(function() {
                $(".icon", this).addClass("animation-target");
             });

             $('.timeline-elt').mouseout(function() {
                $(".icon", this).removeClass("animation-target");
             });
       }*/


  });
