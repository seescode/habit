'use strict';

(function () {
    angular.module('habit')
      .controller('habitListController', function ($scope, habitDataService, habitService, $firebaseObject) {
          var vm = this;

          //https://vivid-fire-159.firebaseio.com/#-Jl1bNvbPj1v7Ke56pLi|67a1f7cd09fd2c233251c5aa2b5538eb
          var ref = new Firebase("https://vivid-fire-159.firebaseio.com");
          // download the data into a local object

          // download the data into a local object
          var syncObject = $firebaseObject(ref);
          // synchronize the object with a three-way data binding
          // click on `index.html` above to see it used in the DOM!
          syncObject.$bindTo($scope, "data");


      });
})();
