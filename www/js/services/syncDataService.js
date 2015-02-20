'use strict';
(function () {
    angular.module('habit').factory('syncDataService', function ($http, ConstantsService) {

        var getHabits = function () {
            //TODO use $resource
            //TODO do not hardcode the server url
            var promise = $http.get(ConstantsService.SYNC_API_ENDPOINT);

            return promise;
        },

        postHabitStats = function (stats) {
            //TODO need to post habit stats to the server.

        };


        return {
            getHabits: getHabits,
            postHabitStats: postHabitStats
        };
    });
})();
