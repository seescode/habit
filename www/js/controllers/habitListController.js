'use strict';

(function () {
    angular.module('habit')
      .controller('habitListController', function ($scope, syncWebService) {
          $scope.data = null;

          $scope.sync = function () {
              syncWebService.query(function (data) {
                  $scope.data = data;
              });
          };



      });
})();