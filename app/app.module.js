(function () {
    var app;

    function configure (
        $stateProvider,
        $urlRouterProvider,
        $breadcrumbProvider
    ) {
        var breadcrumb,
            context;

        breadcrumb = {
            prefixStateName: 'index'
        };
        
        context = "/test";

        $breadcrumbProvider.setOptions(
            breadcrumb
        );

        $urlRouterProvider.when("", "/test/index");
        
        $stateProvider.state('index',
            {
                abstract: false,
                url: '/test/index.html',
                templateUrl: 'views/home.html',
                ncyBreadcrumb: {
                    label: 'test',
                }
            }
        );
        
        $stateProvider.state('home',
            {
                abstract: false,
                url: context + '/home',
                templateUrl: 'views/home.html',
                ncyBreadcrumb: {
                    label: 'home',
                }
            }
        );

        $stateProvider.state('other',
            {
                abstract: false,
                url: context + '/other',
                templateUrl: 'views/other.html',
                ncyBreadcrumb: {
                    label: 'other'
                }
            }
        );
        
        $stateProvider.state('git-status',
            {
                abstract: false,
                url: context + '/git-status',
                templateUrl: 'views/git-status.html',
                controller:  'GitStatusCtrl',
                ncyBreadcrumb: {
                    label: 'git-status'
                }
            }
        );

    }

    function runner(
        $rootScope,
        $timeout
    ) {

        $rootScope.$on('$stateChangeStart',
            function () {
                $rootScope.isLoading = true;
            }
        );
        
        $rootScope.$on('$stateChangeError',
            function () {
                $rootScope.isLoading = false;
            }
        );
    
        $rootScope.$on('$stateChangeSuccess',
            function () {
                $timeout(
                    function() {
                        $rootScope.isLoading = false;
                    },
                    1000
                );
            }
        );

    }

    app = angular.module(
	    'mokzi-app',
	    [
	        'ui.router',
            'ui.bootstrap',
            'ncy-angular-breadcrumb',
            'shared.widgets',
            'gitmodule',
            'mokzi-app.chat'
        ]
    );
    
    configure.$inject = [
        '$stateProvider',
        '$urlRouterProvider',
        '$breadcrumbProvider'
    ];

    runner.$inject = [
        '$rootScope',
        '$timeout'
    ];

    app.config(configure);
    app.run(runner);

}());

