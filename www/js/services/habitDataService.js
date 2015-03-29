'use strict';
(function () {
    angular.module('habit').factory('habitDataService', function ($localForage, ConstantsService) {
        //TODO: right now when you save stuff it saves it to localhost:8100 which contains the
        //info for your kanji app.  You need to change the url or port.
        var service = {
            save: function (habits) {
                return $localForage.setItem(ConstantsService.HABITS_KEY, habits);
            },
            read: function () {
                return $localForage.getItem(ConstantsService.HABITS_KEY);
            }
        };

        return service;
    });
})();
