'use strict';

angular.module('toggler.common.api.userClient', [])
.provider('togglerUserClient', function () {
  this.$get = function ($http) {
    var _user;

    var userClient = {
      loginWithCredentials: function (credentials) {
        return $http.post('http://localhost:8080/api/v1/users/session', credentials)
        .then(function (res) {
          _user = res.data;
        });
      },
      requestCurrentUser: function () {
        return $http.get('http://localhost:8080/api/v1/users/current')
        .then(function (res) {
          _user = res.data;
        });
      },
      logout: function () {
        return $http.delete('http://localhost:8080/api/v1/users/session')
          .then(function () {
            _user = null;
          });
      },
      getUser: function () {
        return _user;
      }
    };

    return userClient;
  };
});
