'use strict';

(function () {
    angular.module('habit')
        .directive('habitStateSlider', function (habitService, $firebaseObject) {
        return {
            restrict: 'EA',
            templateUrl: 'templates/directives/habitStateSlider.html',
            scope: {
                habit: "="
            },
            replace: false,
            link: function (scope, element, attrs, ctrl) {

                var ref = new Firebase("https://vivid-fire-159.firebaseio.com/lastLogin");
                var lastLogin = $firebaseObject(ref);

                //console.log(lastLogin.lastLogin);                      
                
                if (lastLogin.date == null) {
                    lastLogin.date = moment().utc().startOf('day').toDate().getTime();
                    lastLogin.$save().then(function (ref) {
                        
                    }, function (error) {
                        console.log("Error:", error);
                    });                    
                } else {
                    //TODO if lastLogin date is not today then reset all selectedIndex to 0 
                    //Also update the lastLogin.date to today.
                }
                
                

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

                    //TODO: maybe refactor all of this to use like a peek rather than a pop.

                    var poppedDate = scope.habit.CompletionDates.pop();

                    //Check and see if this is something we actually need to remove
                    var completionDate = moment(poppedDate);

                    if (moment().utc().startOf('day').isSame(completionDate)) {

                    } else {
                        //Since this is a different day we need to push it back on there.
                        scope.habit.CompletionDates.push(completionDate);
                    }
                };

                scope.nextStateClick = function (selectedIndex) {

                    if (selectedIndex === scope.habit.StateText.length - 1) {

                        if (scope.habit.CompletionDates == null) {
                            scope.habit.CompletionDates = [];
                        }

                        var completionDate = moment().utc().startOf('day').toDate().getTime();

                        scope.habit.CompletionDates.push(completionDate);


                    }
                };
            }
        }
    });
})();
