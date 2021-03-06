'use strict';

angular.module('toggler.components.login.widget', ['toggler.common.api.userClient'])
  .directive('togglerLoginWidget', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/components/login/widget/loginWidget.tpl.html',
      controller: 'LoginWidgetCtrl',
      controllerAs: 'LoginWidgetCtrl'
    };
  })
  .controller('LoginWidgetCtrl', function (togglerUserClient, $state) {
    this.getUser = function () {
      return togglerUserClient.getUser();
    };

    this.logout = function () {
      togglerUserClient.logout().then(function () {
        $state.go('login');
      });
    };
  });
