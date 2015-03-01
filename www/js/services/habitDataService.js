'use strict';
(function () {
    angular.module('habit').factory('habitDataService', function ($localForage) {

        //-habitDataService.save(object habitText)
        //    -Run this method right after you do a sync
        //-habitDataService.read()
        //    -Run this method on start.  If there is no information then list none. 
        var service = {
            save: function (habits) {
                console.log('saving');

                $localForage.setItem('habits', habits);

                //$localForage.setItem(config.currentLevelKey, 1).then(function () {
                //});

            },
            read: function () {
                console.log('reading');

            }
        };

        return service;
    });
})();
