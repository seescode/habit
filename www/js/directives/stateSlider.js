'use strict';

(function () {
    angular.module('habit')
      .directive('stateSlider', function () {
          return {
              restrict: 'EA',
              templateUrl: 'templates/directives/stateSlider.html',
              scope: {
                  stateData: "=",
                  selectedIndex: "=",
                  prevStateClick: "&",
                  nextStateClick: "&"
              },
              replace: false,
              link: function (scope, element, attrs, ctrl) {
                  scope.prevState = function () {
                      if (scope.selectedIndex > 0) {
                          scope.selectedIndex = scope.selectedIndex - 1;
                          scope.prevStateClick()(scope.selectedIndex, scope.stateData);
                      }
                  };

                  scope.nextState = function () {
                      if (scope.selectedIndex < scope.stateData.length - 1) {
                          scope.selectedIndex = scope.selectedIndex + 1;
                          scope.nextStateClick()(scope.selectedIndex, scope.stateData);
                      }
                  };

                  scope.state = function (id) {
                      if (scope.selectedIndex == id) {
                          return 'state';
                      }

                      return 'state-collapsed';
                  };

                  scope.getText = function (id) {
                      if (scope.selectedIndex == id) {
                          return scope.stateData[id].text;
                      }

                      return '';
                  };
              }
          }
      });
})();
