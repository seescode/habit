'use strict';

(function () {
    angular.module('habit')
        .directive('habitStateEntry', function () {
        return {
            restrict: 'EA',
            templateUrl: 'templates/directives/habitStateEntry.html',
            scope: {
                habits: "=",
                habit: "=",
                mode: "@"
            },
            replace: false,
            link: function (scope, element, attrs, ctrl) {
                
                //TODO add some code to have good logging
                //for mode needing to be create or update.

                if (scope.mode.toLowerCase() == 'update') {
                    scope.cue = scope.habit.StateText[0];
                    scope.routine = scope.habit.StateText[1];
                    scope.reward = scope.habit.StateText[2];
                }

                scope.submit = function () {
                    if (scope.mode.toLowerCase() == 'create') {
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
                            });
                    }
                    else if (scope.mode.toLowerCase() == 'update') {
                        scope.habit.StateText[0] = scope.cue;
                        scope.habit.StateText[1] = scope.routine;
                        scope.habit.StateText[2] = scope.reward;
                    }
                };
            }
        }
    });
})();
