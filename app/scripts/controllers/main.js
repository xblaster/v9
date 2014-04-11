'use strict';

angular.module('v9App')
  .controller('MainCtrl', function ($scope, GooglSpreadsheet) {
       GooglSpreadsheet.get().then(function(data) {



           $scope.projects = data;
       })
  });
