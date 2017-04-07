(function () {
    'use strict';

    angular
        .module('eagle')
        .config(routeConfig)
        .run(function($rootScope,$state) {

       // $scope.name = 'dddd';
        var count = 0;

    });

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {


        // $locationProvider.html5Mode(true);

        // var username =  unicornLauncherProvider.username();
           var username = 'kxw';
          var prefix = username + '/';
          if (!username || username == 'undefined'){
              prefix = 'user/';
          }else{
              prefix = username + '/';
          };
         //  prefix='/tenant/';
          $urlRouterProvider
            .otherwise('/access/signin');
          $stateProvider
              .state('app', {
                  //abstract: true,
                  url: '/',
                  controller: 'MainController',
                  controllerAs: 'main',
                  templateUrl: 'src/app/main/main.html',
              })
              .state('app.dashboard', {
                  url: prefix + 'dashboard',
                  templateUrl: 'app/components/dashboard/dashboard.tpl.html'
              })
              .state('app.profile', {
                  url: prefix + 'profile',
                  templateUrl: 'app/components/profile/profile.html'
              })
              .state('access', {
                  url: '/access',
                  template: '<div ui-view class="fade-in-right-big smooth"></div>'
              })
              .state('access.signin', {
                  url: '/signin',
                  templateUrl: 'src/app/components/login/signin.html',
                  controller: 'LoginController',
                  controllerAs: 'vm'
              })
              .state('access.register', {
                  url: '/register',
                  templateUrl: 'app/components/register/register.html',
                  controller: 'RegisterController',
                  controllerAs: 'vm'
              })
              .state('access.changepsd', {
                  url: '/forgotpassword',
                  templateUrl: 'app/components/changepwd/change.password.html'
              })
          ;
    }


})();
