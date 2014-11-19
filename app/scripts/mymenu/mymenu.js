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
      scope:{},
      link: function postLink(scope, element, attrs) {

        scope.menu ={
            data: {},
            city: 'dallas,us'
        }
        scope.pepe = function(){};

        scope.getData = function(city, fresh){
            // If we want to refresh, we shall tell all interested components
            if(fresh){
                scope.menu.city = city;
                $rootScope.$broadcast('menu:cityUpdate', {'city': city});
            }
            myWeatherService.retrieveWeather(city, fresh).then(function(response){
                console.log(response);
                scope.menu.data = response.name;
            });

        };

        // default query
        scope.getData(scope.menu.city);

      }
    };
  });
