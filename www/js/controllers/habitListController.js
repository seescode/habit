'use strict';

(function () {
    angular.module('habit')
      .controller('habitListController', function ($scope, syncWebService) {
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

          syncWebService.query(function (data) {
              $scope.data = data;
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