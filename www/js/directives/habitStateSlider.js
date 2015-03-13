'use strict';

(function () {
    angular.module('habit')
      .directive('habitStateSlider', function (habitDataService, habitService) {
          return {
              restrict: 'EA',
              templateUrl: 'templates/directives/habitStateSlider.html',
              scope: {
                  stateText: "=",
                  selectedIndex: "="
              },
              replace: false,
              link: function (scope, element, attrs, ctrl) {

                  scope.stateData = [];
                  scope.stateData[0] = {};
                  scope.stateData[1] = {};
                  scope.stateData[2] = {};

                  scope.stateData[0].text = scope.stateText[0];
                  scope.stateData[1].text = scope.stateText[1];
                  scope.stateData[2].text = scope.stateText[2];

                  scope.stateData[0].cssClass = 'cue';
                  scope.stateData[1].cssClass = 'routine';
                  scope.stateData[2].cssClass = 'reward';

                  scope.prevStateClick = function (selectedIndex) {
                      //TODO this method seems unnecessary.  
                      alert(selectedIndex);
                  };

                  scope.nextStateClick = function (selectedIndex, stateData) {
                      //TODO: basically you need to something like this:
                      //don't forget to check your notepad++ file with the different scnearios.
                      if (selectedIndex === stateData.length - 1) {


                          //TODO: there's a bug because stateData isn't habitService.data which
                          //what the below code assumes.  

                          //if (stateData.completionDates == null) {
                          //    stateData.completionDates = [];
                          //}

                          //stateData.completionDates.push(moment().utc().startOf('day'));
                          //habitDataService.save(habitService);
                      } else {
                          //else just remove the completiondate and save it.
                      }

                      

                      alert(stateData.length);
                  };
              }
          }
      });
})();



