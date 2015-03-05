'use strict';

(function () {
    angular.module('habit')
      .controller('habitListController', function (syncWebService, habitDataService) {
          var vm = this;

          habitDataService.read().then(function (data) {
              if (data != null) {
                  vm.data = data;
              } else {
                  vm.data = null;
              }
          });

          vm.sync = function () {
              syncWebService.get(function (data) {
                  vm.data = data;
                  habitDataService.save(data);
              });
          };
      });
})();