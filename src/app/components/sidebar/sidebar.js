'use strict';

angular.module('toggler.components.sidebar', ['toggler.components.sidebar.menu'])
  .directive('togglerSidebar', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/components/sidebar/sidebar.tpl.html'
    };
  });
