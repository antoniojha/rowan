angular.module('WeatherApp.controllers',[]).
controller('weatherController', function($scope,weatherAPIservice){
  
  $scope.sortRever=false;
  $scope.weatherList=[];
  var city_name=$scope.city_name;
  var country_code=$scope.country_code;
  $scope.getData= function(){
    weatherAPIservice.getTemps(city_name,country_code).success(function(response){
      for(var i=0;i<16;i++){
        $scope.weatherList.push(response["list"][i]["temp"]);
        $scope.weatherList[i]["date"]=i+1;
      }
    });
  };
  $scope.sort=function(time_of_day){
    $scope.test=time_of_day
    
  };
 /* $scope.weatherList=[
    {
      day:1,
      morn:2,
      eve:3,
      night:4
    },
    {
      day:1,
      morn:2,
      eve:3,
      night:4     
    }
  ];*/

});