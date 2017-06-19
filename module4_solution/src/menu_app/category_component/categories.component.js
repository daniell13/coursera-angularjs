(function () {
    'use strict';

    angular.module('MenuApp')
        .component('category', {
            templateUrl: 'src/menu_app/category_component/category.template.html',
            bindings: {
                category: '<'
            }
        });

})();
