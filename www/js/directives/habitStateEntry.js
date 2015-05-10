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
                      
                      if (scope.habits == null) {
                          scope.habits = [];
                      } 
                      
                      scope.habits.push(
                          {
                              Index: 0,
                              StateText: [
                                  scope.cue,
                                  scope.routine,
                                  scope.reward
                              ]
                          }
                          
                      );
                      
                  };
              }
          }
      });
})();
