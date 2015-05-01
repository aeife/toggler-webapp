'use strict';

angular.module('toggler', [
    'ui.router',
    'toggler.components.login',
    'mm.foundation'
])
    .config(function ($locationProvider, $httpProvider) {
        $locationProvider.html5Mode(true);

        $httpProvider.defaults.withCredentials = true;
    });
