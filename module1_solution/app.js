(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchMenu = '';
    $scope.message = '';
    $scope.borderClass = '';

    $scope.checkMenu = function () {
      $scope.numberOfItems = 0;
      var items = $scope.lunchMenu.split(',');
      for (var i = 0; i < items.length; i++) {
        if (items[i].trim() !== '') {
          $scope.numberOfItems++;
        }
      }

      updateMessage($scope.numberOfItems);
    };

    function updateMessage(numberOfItems) {
      if (numberOfItems == 0) {
        $scope.message = 'Please enter data first';
      } else if (numberOfItems <= 3 ){
        $scope.message = 'Enjoy!';
      } else {
        $scope.message = 'Too much!';
      }
    };

  };
}());
