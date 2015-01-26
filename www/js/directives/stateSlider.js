'use strict';

(function () {
    angular.module('habit')
      .directive('stateSlider', function () {
          return {
              restrict: 'EA',
              template: '<div class="state-slider" ng-click="next()"><div class="{{t.cssClass}}" ng-class="state($index)" ng-repeat="t in stateData" ng-bind="getText($index)"></div></div>',
              scope: {
                  stateData: "=",
                  selectedIndex: "="
              },
              replace: true,
              link: function (scope, element, attrs, ctrl) {
                  scope.next = function () {
                      scope.selectedIndex = scope.selectedIndex + 1;

                      if (scope.stateData.length == scope.selectedIndex) {
                          scope.selectedIndex = 0;
                      }
                  }

                  scope.state = function (id) {
                      if (scope.selectedIndex == id) {
                          return 'state';
                      }

                      return 'state-collapsed';
                  }

                  scope.getText = function (id) {
                      if (scope.selectedIndex == id) {
                          return scope.stateData[id].text;
                      }

                      return '';
                  }
              }
          }
      });
})();



