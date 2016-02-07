(function () {
    
    var module;
    
    function navigationBar() {

        function link () {
            
        }
    
        return {
            link: link,
            templateUrl: 'components/navbar/navbar.html',
            restrict: 'E'
        };        

    }
    
    module = angular.module(
        'shared.widgets'
    );

    module.directive(
        'navigationBar',
        navigationBar
    );

}());
