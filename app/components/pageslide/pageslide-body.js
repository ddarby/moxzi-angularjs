(function () {

    function pageSlideBody() {
        
        function link(scope, element, attrs) {
            window.console.log("THIS SHIT WORKED!!");
        }

        return {
            link: link,
            templateUrl: 'components/pageslide/pageslide-body.html',
            restrict: 'E'
        };
    }

    module = angular.module(
        'shared.widgets'
    );

    module.directive(
        'pageSlideBody',
        pageSlideBody
    );
}());
