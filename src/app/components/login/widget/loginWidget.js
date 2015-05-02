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
  .controller('LoginWidgetCtrl', function (togglerUserClient) {
    this.getUser = function () {
      return togglerUserClient.getUser();
    };
  });
