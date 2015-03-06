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
                  vm.msg = 'No habits yet.  Hit sync to get some.';
              }
          });

          vm.sync = function () {
              syncWebService.get(function (data) {
                  if (data != null) {
                      vm.msg = '';
                      vm.data = data;
                      habitDataService.save(data);
                  }
              });
          };
      });
})();