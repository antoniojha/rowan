angular.module("WeatherApp.services",[]).
factory("weatherAPIservice", function($http){
  var weatherAPI={};
  
  weatherAPI.getTemps=function(city_name,country_code){
    return $http({
      method:"JSONP",
  //    url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
      url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+city_name+','+ country_code+'&units=imperial&cnt=16&callback=JSON_CALLBACK'
    });
  }
  return weatherAPI;
});