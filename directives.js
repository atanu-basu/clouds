myApp.directive('weatherPanel', function() {
    return {
        restrict: 'E',
        templateUrl: './pages/panel.html',
        scope: {
            result: '='
        }
    }
});