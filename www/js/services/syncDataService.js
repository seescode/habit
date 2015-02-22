'use strict';
(function () {
    angular.module('habit').factory('syncDataService', function ($resource, ConstantsService) {
        return $resource(ConstantsService.SYNC_API_ENDPOINT);        
    });
})();
