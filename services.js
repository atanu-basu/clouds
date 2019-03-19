myApp.service('cityService', function(){
    this.cityName = 'New York';
})

myApp.service('weatherService', ['$resource','$location', function($resource, $location) {
    
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=:name&APPID=cd1bce7d847a4d3b91d4d7c078b83505';
    var weatherAPI = $resource(url, {name: '@name'}, {charge: {method: 'JSONP', isArray: false, params: {charge: true}, withCredentials: true}});
    this.getData = function(cityName) {
            var result = {};
            weatherAPI.get({name: cityName }).$promise.then(function(res) {
            const K = 273;
            console.log(res);
            result.desc = res.weather[0].description;
            result.humid = res.main.humidity;

            var temp = res.main.temp - K;
            result.tempreture = Math.round(temp) + ' Degree Celcius';

        }).catch(function(err) {
            
            window.alert(err.data.message+ ' Try Again');
            $location.path('/');
        });
        return result;
    }
}]);