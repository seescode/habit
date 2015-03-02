'use strict';
(function () {
    angular.module('habit').constant("ConstantsService", {
        //Endpoints:
        SYNC_API_ENDPOINT: "http://habitadmin/api/sync",

        //Local forage key names
        HABITS_KEY: "Habits",
        HABIT_DONE_KEY: "HabitsDone"
    })
})();
