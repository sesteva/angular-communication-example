'use strict';

/**
 * @ngdoc directive
 * @name projectApp.directive:myComponentOne
 * @description
 * # myComponentOne
 */
angular.module('projectApp')
  .directive('myComponentOne', function (myWeatherService) {
    return {
      templateUrl: 'scripts/mycoordinates/mycoordinates.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

          scope.ui ={
              weather: {},
              city: 'dallas,us'
          }

          scope.getData = function(city, fresh){
              myWeatherService.retrieveWeather(city, fresh).then(function(response){
                  scope.ui.weather = response;
              });
          }

          // default query
          // It may  be the first one or may be getting from angular's cache
          scope.getData(scope.ui.city);

          scope.$on('menu:cityUpdate', function(event, args){
              scope.getData(args.city);
          })

      }
    };
  });
