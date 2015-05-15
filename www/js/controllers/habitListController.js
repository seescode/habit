'use strict';

(function () {
    angular.module('habit')
        .controller('habitListController', function ($scope, habitService, $firebaseObject, $rootScope) {
        var vm = this;

        vm.mode = 'main';

        var ref = new Firebase("https://vivid-fire-159.firebaseio.com");
        var syncObject = $firebaseObject(ref);

        syncObject.$bindTo($scope, "data");

        var savableObject = $firebaseObject(ref);

        var today = moment().utc().startOf('day').toDate().getTime();

        var resetIndexesOnNewDay = function () {
            if (savableObject.lastLogin.date != today) {
                savableObject.Habits.forEach(function (element, index, array) {
                    element.Index = 0;
                });

                savableObject.lastLogin.date = today;

                return savableObject.$save().then(function (ref) {
                    console.log('lastlogin saved');
                });
            }
        };

        savableObject.$loaded()
            .then(function (data) {
            resetIndexesOnNewDay();
        })
            .catch(function (error) {
            console.log('Cannot save lastLogin')
        });

        $rootScope.$on('$stateChangeSuccess',
            function (event, toState, toParams, fromState, fromParams) {
                vm.mode = toState.data.mode;
            });

    });
})();
