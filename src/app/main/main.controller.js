/**
 * app main controller
 */

(function () {
    'use strict';

    angular.module('eagle').controller('MainController', MainController);

    /** @ngInject */
    function MainController($rootScope, $scope, $timeout) {
       /* jshint validthis: true */

       $scope.name = 'eagle';
  
       var theme_11 = {
          themeID: 11,
          navbarHeaderColor: 'bg-info',
          navbarCollapseColor: 'bg-white',
          asideColor: 'bg-dark b-r',
          headerFixed: true,
          asideFixed: false,
          asideFolded: false,
          asideDock: false,
          container: false
      };

      $scope.app = {
        name: 'eagle',
        version: '',
        // for chart colors
        color: {
          primary: '#7266ba',
          info:    '#23b7e5',
          success: '#27c24c',
          warning: '#fad733',
          danger:  '#f05050',
          light:   '#e8eff0',
          dark:    '#3a3f51',
          black:   '#1c2b36'
        },
        settings: theme_11
      };

        function showToastr() {
            toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
            vm.classAnimation = '';
        }

       

     
        // vm.clearItems = function() {
        //   $rootScope.pageRoutes = [];
        // }
    }
})();

