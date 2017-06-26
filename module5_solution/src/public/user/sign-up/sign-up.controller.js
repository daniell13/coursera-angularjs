(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['UserService', 'MenuService', 'userDetails'];
    function SignUpController(UserService, MenuService, userDetails) {
        var signUp = this;

        signUp.userDetails = userDetails;
        signUp.savedSuccessfully = false;
        signUp.invalidMenuItem = false;
        signUp.requestFinished = false;

        signUp.saveDetails = function () {
            UserService.saveUserDetails(signUp.userDetails).then(function (response) {
                signUp.savedSuccessfully = true;
            });
        };

        signUp.existMenuItem = function () {
            signUp.requestFinished = false;
            MenuService.getMenuItem(signUp.userDetails.favoriteMenu).then(function (response) {
                signUp.requestFinished = true;
                signUp.invalidMenuItem = !response;
            }, function () {
                signUp.invalidMenuItem = true;
            });
        }
    }

})();
