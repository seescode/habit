'use strict';

(function () {
    angular.module('habit')
        .directive('habitStateEntry', function ($ionicPopup) {
        return {
            restrict: 'EA',
            templateUrl: 'templates/directives/habitStateEntry.html',
            scope: {
                habits: "=",
                habit: "=",
                delete: "&",
                mode: "@"
            },
            replace: false,
            link: function (scope, element, attrs, ctrl) {
                
                //TODO add some code to have good logging
                //for mode needing to be create or update.
                if (scope.mode.toLowerCase() != 'update' && 
                    scope.mode.toLowerCase() != 'create') {
                        console.log('habitStateEntrys mode must be update or create');
                        return;
                    }
                

                if (scope.mode.toLowerCase() == 'update') {
                    scope.cue = scope.habit.StateText[0];
                    scope.routine = scope.habit.StateText[1];
                    scope.reward = scope.habit.StateText[2];
                }
                
                scope.deleteItem = function () {
                    scope.delete()(scope.habit);                    
                };

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
                            
                        scope.cue = '';
                        scope.routine = '';
                        scope.reward = '';
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
