'use strict';

/**
 * @ngdoc directive
 * @name projectApp.directive:myComponentOne
 * @description
 * # myComponentOne
 */
angular.module('projectApp')
  .directive('myCoordinates', function (myWeatherService) {
    return {
      templateUrl: 'scripts/mycoordinates/mycoordinates.html',
      restrict: 'E',
      scope:{},
      link: function postLink(scope, element, attrs) {

          scope.coordinates ={
              data: {},
              city: 'dallas,us'
          }

          scope.getData = function(city, fresh){
              console.log('getting')
              myWeatherService.retrieveWeather(city, fresh).then(function(response){
                  scope.coordinates.data = response.coord;
              });
          }

          // default query
          // It may  be the first one or may be getting from angular's cache
          scope.getData(scope.coordinates.city);

          scope.$on('menu:cityUpdate', function(event, args){
              scope.getData(args.city);
          })

      }
    };
  });
