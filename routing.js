myApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: './pages/home.html',
            controller: 'home'
        })
        .when('/forcast', {
            templateUrl: './pages/forcast.html',
            controller: 'forcast'
        });
});
