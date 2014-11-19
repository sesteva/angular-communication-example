'use strict';

/**
 * @ngdoc directive
 * @name projectApp.directive:myMenu
 * @description
 * # myMenu
 */
angular.module('projectApp')
  .directive('myMenu', function (myWeatherService, $rootScope) {
    return {
      templateUrl: 'scripts/mymenu/mymenu.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        scope.ui ={
            city: 'dallas,us'
        }
        scope.pepe = function(){};

        scope.getData = function(city, fresh){
            // If we want to refresh, we shall tell all interested components
            if(fresh){
                scope.ui.city = city;
                $rootScope.$broadcast('menu:cityUpdate', {'city': city});
            }
            myWeatherService.retrieveWeather(city, fresh).then(function(response){
                console.log(response);
                scope.ui.weather = response;
            });

        };

        // default query
        scope.getData(scope.ui.city);

      }
    };
  });
