'use strict';
(function () {
    angular.module('habit').factory('syncDataService', function ($http) {

        var getHabits = function () {
            //TODO use $resource
            //TODO do not hardcode the server url
            var promise = $http.get('http://habitadmin/api/sync');

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
