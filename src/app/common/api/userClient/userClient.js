'use strict';

angular.module('toggler.common.api.userClient', [])
    .provider('togglerUserClient', function () {
        this.$get = function ($http) {
            var _user;

            var userClient = {
                loginWithCredentials: function (credentials) {
                    return $http.post('http://localhost:8080/api/v1/users/session', credentials)
                        .then(function (user) {
                            console.log(user);
                            _user = user;
                        });
                },
                fetchCurrentUser: function () {

                }
            };

            return userClient;
        };
    });
