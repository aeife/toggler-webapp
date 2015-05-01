'use strict';

angular.module('toggler.components.sidebar.menu', [])
	.directive('togglerMenu', function () {
		return {
			restrict: 'E',
			templateUrl: 'app/components/sidebar/menu/menu.tpl.html'
		};
	});
