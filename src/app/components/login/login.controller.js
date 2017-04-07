/**
 * app login controller
 */

(function () {
    'use strict';

    angular
        .module('eagle')
        .controller('LoginController', LoginController)
        .filter('handleState',function() {
        return function(input) {
            var arr = input.split('.');
            var str = arr[arr.length-1];
            var out = str.toUpperCase();
            return out;
        }
    });

    // 用$inject手动添加Angular组件所需的依赖,使用ng-annotate的技术,对依赖关系进行自动化创建安全压缩
    // LoginController.$inject = ['$location', '$routeParams', 'common', 'dataservice'];
    /* 登录模块 */
    // 自动依赖注入
    /** @ngInject */
    function LoginController($timeout,$state) {
       /* jshint validthis: true */
 



        // $scope.$watch('vm.title', function(current, original) {
        //     $log.info('vm.title was %s', original);
        //     $log.info('vm.title is now %s', current);
        // });
        
    }
})();
