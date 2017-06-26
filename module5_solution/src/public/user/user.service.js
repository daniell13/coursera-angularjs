(function () {
    "use strict";

    angular.module('public').service('UserService', UserService);

    UserService.$inject = ['$q'];
    function UserService($q) {
        var service = this;
        service.userDetails = {

        };

        service.getUserDetails = function () {
            var currentDetails = {};
            currentDetails['firstName'] = service.userDetails['firstName'];
            currentDetails['lastName'] = service.userDetails['lastName'];
            currentDetails['emailAddress'] = service.userDetails['emailAddress'];
            currentDetails['phoneNumber'] = service.userDetails['phoneNumber'];
            currentDetails['favoriteMenu'] = service.userDetails['favoriteMenu'];
            return currentDetails;
        };


        service.saveUserDetails = function (userDetails) {
            var deferred = $q.defer();

            service.userDetails = userDetails;
            deferred.resolve();

            return deferred.promise;
        };

    }



})();
