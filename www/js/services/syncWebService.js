'use strict';
(function () {
    angular.module('habit').factory('syncWebService', function ($resource, ConstantsService) {
        return $resource(ConstantsService.SYNC_API_ENDPOINT);        
    });
})();
