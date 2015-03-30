'use strict';

(function () {
    angular.module('habit')
      .directive('habitStateSlider', function (habitService) {
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

                    /*
                      if (scope.habit.completionDates                          //Since this is a different day we need to push it back on there.
                          scope.habit.completionDates.push(completionDate);
                      }

                              scope.habit.actions.push({ "Delete": moment().utc().startOf('day').toDate() });

                      }

                      //TODO: maybe refactor all of this to use like a peek rather than a pop.

                      var poppedDate = scope.habit.completionDates.pop();

                      //Check and see if this is something we actually need to remove
                      var completionDate = moment(poppedDate);

                      if (moment().utc().startOf('day').isSame(completionDate)) {

                      } else {
                          //Since this is a different day we need to push it back on there.
                          scope.habit.completionDates.push(completionDate);
                      } */

                  };

                  scope.nextStateClick = function (selectedIndex) {

                      if (selectedIndex === scope.habit.StateText.length - 1) {

                          if (scope.habit.actions == null) {
                              scope.habit.actions = [];
                          }

                          //scope.habit.actions.$add('yo');


                          scope.habit.actions.push({"Create": moment().utc().startOf('day').toDate()});
                      }
                  };
              }
          }
      });
})();
