(function () {
    'use strict';

    angular.module('MenuApp')
        .component('item', {
            templateUrl: 'src/menu_app/item_component/item.template.html',
            bindings: {
                item: '<'
            }
        });

})();
