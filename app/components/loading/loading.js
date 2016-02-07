(function () {
    /**
    * @desc loading mask for busy, loading screen that can be used across the app.
    * @example <loading-mask></loading-mask>
    */
    var module;

    function loadingMask() {

        function link(scope, element, attrs) {
            
            $('.small, .small-shadow').velocity({
              rotateZ: [0, -360]
            }, {
                loop: true,
                duration: 2000
            });
            $('.medium, .medium-shadow').velocity({
                rotateZ: -240
            }, {
                loop: true,
                duration: 2000
            });
            $('.large, .large-shadow').velocity({
                rotateZ: 180
            }, {
                loop: true,
                duration: 2000
            });                             
        }

        return {
            link: link,
            templateUrl: 'components/loading/loading-mask.html',
            restrict: 'E'
        };
    }
    
    module = angular.module(
        'shared.widgets',
        []
    );

    module.directive(
        'loadingMask', 
        loadingMask
    );

}());
