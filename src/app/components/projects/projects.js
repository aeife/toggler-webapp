'use strict';

angular.module('toggler.components.projects', [
  'toggler.common.api.projectClient'
])
  .config(function ($stateProvider) {
    $stateProvider
      .state('projects', {
        url: '/projects',
        templateUrl: 'app/components/projects/projects.tpl.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'ProjectsCtrl',
        loginRequired: true
      });
  })
  .controller('ProjectsCtrl', function (togglerProjectClient) {
    var ProjectsCtrl = this;

    togglerProjectClient.getProjects().then(function (res) {
      ProjectsCtrl.projects = res.data.projects;
    });
  });
