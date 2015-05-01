'use strict';

angular.module('toggler', [
    'ui.router',
    'toggler.components.login',
    'toggler.components.sidebar',
    'mm.foundation'
])
    .config(function ($locationProvider, $httpProvider) {
        $locationProvider.html5Mode(true);

        $httpProvider.defaults.withCredentials = true;
    });
