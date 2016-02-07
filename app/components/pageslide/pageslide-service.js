(function () {

    var module;

    function pagesSlideService() {
        var checked = false;
        
        function toggle(checked) {
            return !checked;
        }

        return {
            toggle: toggle
        };
    }

    module = angular.module(
        'shared.widget'
    );

    module.factory(
        'pageSlideService',
        pageSlideService
    );

}());
