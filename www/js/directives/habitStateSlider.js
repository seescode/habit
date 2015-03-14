'use strict';

(function () {
    angular.module('habit')
      .directive('habitStateSlider', function (habitDataService, habitService) {
          return {
              restrict: 'EA',
              templateUrl: 'templates/directives/habitStateSlider.html',
              scope: {
                  habit: "="
              },
              replace: false,
              link: function (scope, element, attrs, ctrl) {

                  scope.stateData = [];
                  scope.stateData[0] = {};
                  scope.stateData[1] = {};
                  scope.stateData[2] = {};

                  scope.stateData[0].text = scope.habit.StateText[0];
                  scope.stateData[1].text = scope.habit.StateText[1];
                  scope.stateData[2].text = scope.habit.StateText[2];

                  scope.stateData[0].cssClass = 'cue';
                  scope.stateData[1].cssClass = 'routine';
                  scope.stateData[2].cssClass = 'reward';

                  scope.prevStateClick = function (selectedIndex) {
                      //TODO this method seems unnecessary.  
                      alert(selectedIndex);
                  };

                  scope.nextStateClick = function (selectedIndex) {
                      //TODO: basically you need to something like this:
                      //don't forget to check your notepad++ file with the different scnearios.
                      if (selectedIndex === scope.habit.StateText.length - 1) {
                        
                          if (scope.habit.completionDates == null) {
                              scope.habit.completionDates = [];
                          }

                          scope.habit.completionDates.push(moment().utc().startOf('day'));
                          habitDataService.save(habitService);
                      } else {
                          //else just remove the completiondate and save it.
                      }
                  };
              }
          }
      });
})();



