'use strict';

angular.module('toggler.common.api.projectClient', [])
  .provider('togglerProjectClient', function () {
    this.$get = function ($http) {
      var togglerProjectClient = {
        getProjects: function (options) {
          return $http.get('http://localhost:8080/api/v1/projects')
        }
      };

      return togglerProjectClient;
    };
  });
