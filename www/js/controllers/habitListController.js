'use strict';

(function () {
    angular.module('habit')
      .controller('habitListController', function ($scope) {
          $scope.data = {
              states: [
                  { text: 'Cue', cssClass: 'cue' },
                  { text: 'Routine', cssClass: 'routine' },
                  { text: 'Reward', cssClass: 'reward' }
              ]
          };

          $scope.data.active = $scope.data;
          $scope.data.index = 0;
      });
})();