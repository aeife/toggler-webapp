'use strict';

angular.module('toggler', [
  'ui.router',
  'toggler.components.login',
  'toggler.components.sidebar',
  'toggler.components.dashboard',
  'toggler.components.projects',
  'ngMaterial',
  'ngMdIcons'
])
.config(function ($locationProvider, $httpProvider) {
  $locationProvider.html5Mode(true);

  $httpProvider.defaults.withCredentials = true;
})
.run(function (togglerUserClient, $rootScope, $state){
  togglerUserClient.requestCurrentUser();

  $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
    if (toState.loginRequired && !togglerUserClient.getUser()) {
      event.preventDefault();
      togglerUserClient.requestCurrentUser().then(function () {
        $state.go(toState.name, toParams);
      }, function () {
        $state.go('login');
      })
    }
  });
})
.controller('MainCtrl', function ($mdSidenav) {
  this.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };
});
