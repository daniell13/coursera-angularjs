(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.toBuyList = ShoppingListCheckOffService.toBuyList;

    toBuy.buy = function (index) {
      ShoppingListCheckOffService.buyItem(index);
    }
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;
    alreadyBought.boughtList = ShoppingListCheckOffService.boughtList;
  }

  function ShoppingListCheckOffService() {
    this.toBuyList = [{
      name: 'Apples',
      quantity: 10
    },{
      name: 'Kiwi',
      quantity: 5
    },{
      name: 'Oranges',
      quantity: 7
    },{
      name: 'Peaches',
      quantity: 8
    },{
      name: 'Strawberries',
      quantity: 15
    }];
    this.boughtList = [];

    this.buyItem = function(index){
      this.boughtList.push(this.toBuyList[index]);
      this.toBuyList.splice(index, 1);
    }
  }
}());
