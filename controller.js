myApp.controller('home', ['$scope', '$location', 'cityService', function($scope, $location, cityService){
    $scope.cityName = cityService.cityName;
    $scope.$watch('cityName', function(){
        cityService.cityName = $scope.cityName;
    });
    $scope.submit = function() {
        $location.path('/forcast');
    }
}]);


myApp.controller('forcast', ['$scope', '$timeout','weatherService', 'cityService', function($scope, $timeout, weatherService, cityService){
    
    var city = cityService.cityName;
    let desc, humid, temp;
    var response = weatherService.getData(city);
    $timeout(function() {
        $scope.weatherInfo = {
            city: city,
            desc: response.desc,
            humid: response.humid,
            temp: response.tempreture,
        }
    },1000);
   
    
}]);