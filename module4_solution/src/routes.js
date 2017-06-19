(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: 'src/menu_app/home/home.template.html'
            })

            .state('categories', {
                url: '/categories',
                templateUrl: 'src/menu_app/categories/categories.template.html',
                controller: 'CategoriesController as CategoriesCtrl',
                resolve: {
                    categories: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            .state('items', {
                url: '/items/{categoryName}',
                templateUrl: 'src/menu_app/items/items.template.html',
                controller: 'ItemsController as ItemCtrl',
                resolve: {
                    items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryName);
                    }]
                }
            });
    }

})();
