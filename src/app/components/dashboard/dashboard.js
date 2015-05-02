'use strict';

angular.module('toggler.components.dashboard', [])
  .config(function ($stateProvider) {
      $stateProvider
          .state('dashboard', {
              url: '/dashboard',
              templateUrl: 'app/components/dashboard/dashboard.tpl.html',
              controller: 'DashboardCtrl',
              controllerAs: 'DashboardCtrl',
              loginRequired: true
          });
  })
  .controller('DashboardCtrl', function () {

  });
