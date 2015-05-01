'use strict';

angular.module('toggler.routes.login', ['toggler.common.api.userClient'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/routes/login/login.tpl.html',
                controller: 'LoginCtrl',
                controllerAs: 'LoginCtrl'
            });
    })
    .controller('LoginCtrl', function ($http, togglerUserClient) {
        this.login = function () {
            togglerUserClient.loginWithCredentials(this.user);
        };
    });
