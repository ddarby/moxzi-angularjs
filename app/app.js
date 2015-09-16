'use strict';

// Declare app level module which depends on views, and components
(function() {
  angular.module('app', [
    'gridster',
    'ui.bootstrap',
    'ngRoute',
    'sidebar'
  ])
.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider
          .when('/dashboard', {
            templateUrl: 'view2/view2.html',
            controller: 'DashboardCtrl'
          })
          .otherwise({
            redirectTo: '/main'
          });
      }
    ])
    .controller('RootCtrl', function($scope) {
      $scope.$on('$locationChangeStart', function(e, next, current) {
        $scope.page = next.split('/').splice(-1);
      });
    });
})()
//
//
// angular.module('myApp', [
//   'ngRoute',
//
//   'grid'
// ]).config(['$routeProvider', function($routeProvider) {
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }])
