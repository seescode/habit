'use strict';

(function () {
    angular.module('habit')
      .controller('habitListController', function ($scope, syncDataService) {
          //$scope.data = [
          //    {
          //        states: [
          //           { text: 'Finish shower', cssClass: 'cue' },
          //           { text: 'Make one commit', cssClass: 'routine' },
          //           { text: 'Play game', cssClass: 'reward' }
          //        ],
          //        index: 0
          //    },
          //    {
          //        states: [
          //           { text: 'Finish breakfast', cssClass: 'cue' },
          //           { text: 'Eat Vitamin', cssClass: 'routine' },
          //           { text: 'No reward', cssClass: 'reward' }
          //        ],
          //        index: 1
          //    }
          //];

          syncDataService.getHabits().
              success(function (data, status, headers, config) {
                  // this callback will be called asynchronously
                  // when the response is available
                  $scope.data = data;
              }).
              error(function (data, status, headers, config) {
                  // called asynchronously if an error occurs
                  // or server returns response with an error status.
              });


          //$scope.data = [
          //    {
          //        "StateText": [
          //            "Finish shower", "Make one commit", "Play game"
          //        ],
          //        "Index": 0
          //    },
          //    {
          //        "StateText": [
          //            "Finish breakfast", "Eat Vitamin", "No reward"
          //        ],
          //        "Index": 1
          //    }
          //];

      });
})();