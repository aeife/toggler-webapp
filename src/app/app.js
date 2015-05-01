'use strict';

angular.module('toggler', [
    'ui.router',
    'toggler.routes.login',
])
    .config(function ($locationProvider, $httpProvider) {
        $locationProvider.html5Mode(true);

        $httpProvider.defaults.withCredentials = true;
    });
