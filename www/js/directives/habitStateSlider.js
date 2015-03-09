﻿'use strict';

(function () {
    angular.module('habit')
      .directive('habitStateSlider', function () {
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
                      alert(selectedIndex);
                  };

                  scope.nextStateClick = function (selectedIndex) {
                      alert(selectedIndex);
                  };
              }
          }
      });
})();



