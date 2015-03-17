'use strict';

(function () {
    angular.module('habit')
      .controller('habitListController', function (syncWebService, habitDataService, habitService) {
          var vm = this;

          habitDataService.read().then(function (data) {
              if (data != null) {
                  habitService.data = data;
                  vm.data = data;
              } else {
                  habitService.data = null;
                  vm.data = null;
                  vm.msg = 'No habits yet.  Hit sync to get some.';
              }
          });

          vm.sync = function () {

              syncWebService.save(habitService.data)
              .$promise
              .then(function () {
                  return syncWebService.get().$promise;
              })
              .then(function (data) {
                  if (data != null) {
                      vm.msg = '';
                      vm.data = data;
                      habitService.data = data;
                      habitDataService.save(data);
                  }
              });
          };
      });
})();