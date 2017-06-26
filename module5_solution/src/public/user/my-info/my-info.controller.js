(function () {
    "use strict";

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['userDetails', 'menuItem'];
    function MyInfoController(userDetails, menuItem) {
        var myInfo = this;

        myInfo.userDetails = userDetails;
        myInfo.menuItem = menuItem;
    }

})();
