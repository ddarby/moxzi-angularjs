(function () {
    'use strict';

    var module;

    function PageSlideCtrl(
        $scope,
        $location
    ) {
        $scope.activated = false;
        $scope.toggle = function ($event) {
            $scope.activated = !$scope.activated
            //If event is passed in, don't allow.
            if ($event) {
                $event.preventDefault();
                $event.stopPropagation();
            }
        }

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    }

    module = angular.module(
        'shared.widgets'
    );

    module.controller(
        'pageslideCtrl',
         PageSlideCtrl
    );

}());
