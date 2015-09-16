(function() {
/* global angular */
var module = angular.module('sidebar', []);

module.controller('MenuController', function($scope) {
  $scope.menu1 = {state: false};
  $scope.menu2 = {state: false};
  $scope.menu3 = {state: false};
  $scope.menu4 = {state: false};
  $scope.menu5 = {state: false};
  $scope.menu6 = {state: false};
  $scope.menu7 = {state: false};

  $scope.toggleState = function(menu) {
    $scope[menu].state = !$scope[menu].state;
  };
});

module.directive('menu1Directive', function() {
  return {
    restrict: 'A',
    template: ""+
      " <span href='#' id='navigation-toggle1' class='toggleHandle' "+
      "ng-click='toggleState(\"menu1\")'><i class='fa fa-search'> </i> </span>"+
      " <ul class='navigation'>"+
      "   <li class='navigation-items'> <a href='#/view1'>view1</a> </li>"+
      "   <li class='navigation-items'> <a href='#/view2'>view2</a> </li>"+
      " </ul>",
      link : function(scope, element, attr) {
      scope.$watch(attr.menu1Directive, function(newVal) {
        if(newVal){
          angular.element(element.children()[1].children()[0]).addClass('show');
          element.addClass('show');
          return;
        }
        angular.element(element.children()[1].children()[0]).removeClass('show');
        element.removeClass('show');
      });
    }
  };
});

module.directive('menu2Directive', function() {
  return {
    restrict: 'A',
    template: ""+
      " <span href='#' id='navigation-toggle2' class='toggleHandle' "+
      " ng-click='toggleState(\"menu2\")'><i class='fa fa-book'></i></span>"+
      " <ul class='navigation'>"+
      "   <li class='navigation-items'> <a href='#/view1'>view1</a> </li>"+
      "   <li class='navigation-items'> <a href='#/view2'>view2</a> </li>"+
      " </ul>",
      link : function(scope, element, attr) {
      scope.$watch(attr.menu2Directive, function(newVal) {
        if(newVal){
          angular.element(element.children()[1]).addClass('show');
          element.addClass('show');
          return;
        }
        angular.element(element.children()[1]).removeClass('show');
        element.removeClass('show');
      });
    }
  };
});

module.directive('menu3Directive', function() {
  return {
    restrict: 'A',
    template: ""+
      " <span href='#' id='navigation-toggle3' class='toggleHandle'"+
      " ng-click='toggleState(\"menu3\")'><i class='fa fa-camera'></i></span>"+
      " <ul class='navigation'>"+
      "   <li class='navigation-items'> <a href='#/view1'>view1</a> </li>"+
      "   <li class='navigation-items'> <a href='#/view2'>view2</a> </li>"+
      " </ul>",
      link : function(scope, element, attr) {
      scope.$watch(attr.menu3Directive, function(newVal) {
        if(newVal){
          angular.element(element.children()[1]).addClass('show');
          element.addClass('show');
          return;
        }
        angular.element(element.children()[1]).removeClass('show');
        element.removeClass('show');
      });
    }
  };
});

module.directive('menu4Directive', function() {
  return {
    restrict: 'A',
    template: ""+
      " <span href='#' id='navigation-toggle4' class='toggleHandle'"+
      " ng-click='toggleState(\"menu4\")'><i class='fa fa-cloud'></i></span>"+
      " <ul class='navigation'>"+
      "   <li class='navigation-items'> <a href='#/view1'>view1</a> </li>"+
      "   <li class='navigation-items'> <a href='#/view2'>view2</a> </li>"+
      " </ul>",
      link : function(scope, element, attr) {
      scope.$watch(attr.menu4Directive, function(newVal) {
        if(newVal){
          angular.element(element.children()[1]).addClass('show');
          element.addClass('show');
          return;
        }
        angular.element(element.children()[1]).removeClass('show');
        element.removeClass('show');
      });
    }
  };
});


module.directive('menu5Directive', function() {
  return {
    restrict: 'A',
    template: ""+
      " <span href='#' id='navigation-toggle5' class='toggleHandle'"+
      " ng-click='toggleState(\"menu5\")'><i class='fa fa-tasks'></i></span>"+
      " <ul class='navigation'>"+
      "   <li class='navigation-items'> <a href='#/view1'>view1</a> </li>"+
      "   <li class='navigation-items'> <a href='#/view2'>view2</a> </li>"+
      " </ul>",
      link : function(scope, element, attr) {
      scope.$watch(attr.menu5Directive, function(newVal) {
        if(newVal){
          angular.element(element.children()[1]).addClass('show');
          element.addClass('show');
          return;
        }
        angular.element(element.children()[1]).removeClass('show');
        element.removeClass('show');
      });
    }
  };
});


module.directive('menu6Directive', function() {
  return {
    restrict: 'A',
    template: ""+
      " <span href='#' id='navigation-toggle6' class='toggleHandle'"+
      " ng-click='toggleState(\"menu6\")'><i class='fa fa-file-archive-o'></i></span>"+
      " <ul class='navigation'>"+
      "   <li class='navigation-items'> <a href='#/view1'>view1</a> </li>"+
      "   <li class='navigation-items'> <a href='#/view2'>view2</a> </li>"+
      " </ul>",
      link : function(scope, element, attr) {
      scope.$watch(attr.menu6Directive, function(newVal) {
        if(newVal){
          angular.element(element.children()[1]).addClass('show');
          element.addClass('show');
          return;
        }
        angular.element(element.children()[1]).removeClass('show');
        element.removeClass('show');
      });
    }
  };
});


module.directive('menu7Directive', function() {
  return {
    restrict: 'A',
    template: ""+
      " <span href='#' id='navigation-toggle7' class='toggleHandle'"+
      " ng-click='toggleState(\"menu7\")'><i class='fa fa-wrench'></i></span>"+
      " <ul class='navigation'>"+
      "   <li class='navigation-items'> <a href='#/view1'>view1</a> </li>"+
      "   <li class='navigation-items'> <a href='#/view2'>view2</a> </li>"+
      "   <li class='navigation-items'> <a href='#/view1'>view1</a> </li>"+
      "   <li class='navigation-items'> <a href='#/view2'>view2</a> </li>"+
      "   <li class='navigation-items'> <a href='#/view1'>view1</a> </li>"+
      "   <li class='navigation-items'> <a href='#/view2'>view2</a> </li>"+
      "   <li class='navigation-items'> <a href='#/view1'>view1</a> </li>"+
      "   <li class='navigation-items'> <a href='#/view2'>view2</a> </li>"+
      "   <li class='navigation-items'> <a href='#/view1'>view1</a> </li>"+
      "   <li class='navigation-items'> <a href='#/view2'>view2</a> </li>"+
      "   <li class='navigation-items'> <a href='#/view1'>view1</a> </li>"+
      "   <li class='navigation-items'> <a href='#/view2'>view2</a> </li>"+
      "   <li class='navigation-items'> <a href='#/view1'>view1</a> </li>"+
      "   <li class='navigation-items'> <a href='#/view2'>view2</a> </li>"+
      "   <li class='navigation-items'> <a href='#/view1'>view1</a> </li>"+
      "   <li class='navigation-items'> <a href='#/view2'>view2</a> </li>"+
      "   <li class='navigation-items'> <a href='#/view1'>view1</a> </li>"+
      "   <li class='navigation-items'> <a href='#/view2'>view2</a> </li>"+
      "   <li class='navigation-items'> <a href='#/view1'>view1</a> </li>"+
      "   <li class='navigation-items'> <a href='#/view2'>view2</a> </li>"+
      "   <li class='navigation-items'> <a href='#/view1'>view1</a> </li>"+
      "   <li class='navigation-items'> <a href='#/view2'>view2</a> </li>"+
      "   <li class='navigation-items'> <a href='#/view1'>view1</a> </li>"+
      "   <li class='navigation-items'> <a href='#/view2'>view2</a> </li>"+
      " </ul>",
      link : function(scope, element, attr) {
      scope.$watch(attr.menu7Directive, function(newVal) {
        if(newVal){
          angular.element(element.children()[1]).addClass('show');
          element.addClass('show');
          return;
        }
        angular.element(element.children()[1]).removeClass('show');
        element.removeClass('show');
      });
    }
  };
});


}(window.angular));
