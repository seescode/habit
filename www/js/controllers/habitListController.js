'use strict';

(function () {
    angular.module('habit')
      .controller('habitListController', function (syncWebService) {
          var vm = this;

          vm.data = null;

          vm.sync = function () {
              syncWebService.query(function (data) {
                  vm.data = data;
              });
          };



      });
})();