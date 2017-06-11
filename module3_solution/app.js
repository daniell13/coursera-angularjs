(function() {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .controller('FoundItemsDirectiveController', FoundItemsDirectiveController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItems);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var nid = this;

        nid.found = [];

        nid.getMatchedItems = function (searchTerm) {
            if (searchTerm) {
                MenuSearchService.getMatchedMenuItems(searchTerm).then(function (foundedItems) {
                    nid.found = foundedItems;
                });
            } else {
                nid.found = [];
            }
        };

        nid.removeItem = function (index) {
            nid.found.splice(index, 1);
        };
    }

    MenuSearchService.$inject = ['$http', '$q'];
    function MenuSearchService($http, $q) {
        var menuService = this;

        menuService.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
            }).then(function (result) {
                var deffered = $q.defer();

                var foundedItems = [];
                for (var i in result.data.menu_items) {
                    if (result.data.menu_items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) {
                        foundedItems.push(result.data.menu_items[i]);
                    }
                }
                deffered.resolve(foundedItems);

                return deffered.promise;
            })
        }
    }
    
    function FoundItems() {
        var ddo = {
            restrict: 'E',
            templateUrl: 'itemList.html',
            scope: {
                foundItems: '<',
                onRemove: '&'
            },
            controller: 'FoundItemsDirectiveController as itemDirCtrl',
            bindToController: true
        };

        return ddo;
    }

    function FoundItemsDirectiveController() {
        var itemDirCtrl = this;

        itemDirCtrl.areItemsPresent = function() {
            return !(itemDirCtrl.foundItems && itemDirCtrl.foundItems.length > 0);
        }
    }

}());
