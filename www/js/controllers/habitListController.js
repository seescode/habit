'use strict';

(function () {
    angular.module('habit')
        .controller('habitListController', function ($scope, habitService, $firebaseObject) {
        var vm = this;
        
        vm.mode = 'main';

        //https://vivid-fire-159.firebaseio.com/#-Jl1bNvbPj1v7Ke56pLi|67a1f7cd09fd2c233251c5aa2b5538eb
        var ref = new Firebase("https://vivid-fire-159.firebaseio.com");
        // download the data into a local object

        // download the data into a local object
        var syncObject = $firebaseObject(ref);
        // synchronize the object with a three-way data binding
        // click on `index.html` above to see it used in the DOM!
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
            
            
         vm.manage = function() {
             //TODO: need to actually change the url
             vm.mode = 'manage';             
         }
         
         vm.home = function() {
             vm.mode = 'home';
         }
    });
})();
