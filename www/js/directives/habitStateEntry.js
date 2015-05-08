'use strict';

(function () {
    angular.module('habit')
      .directive('habitStateEntry', function () {
          return {
              restrict: 'EA',
              templateUrl: 'templates/directives/habitStateEntry.html',
              scope: {
                  habits: "="
              },
              replace: false,
              link: function (scope, element, attrs, ctrl) {
                  scope.submit = function () {
                      //Need to figure out the structure of habits first.
                      //then we need to do something like habits.cow check null then create []
                      //then do a push to add the new items in there.
                      console.log(scope.cue);
                      console.log(scope.routine);
                      console.log(scope.reward);                      
                      
                  };
              }
          }
      });
})();
