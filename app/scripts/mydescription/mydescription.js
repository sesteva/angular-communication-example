'use strict';

/**
 * @ngdoc directive
 * @name projectApp.directive:myComponentTwo
 * @description
 * # myComponentTwo
 */
angular.module('projectApp')
  .directive('myDescription', function (myWeatherService) {
    return {
      templateUrl: 'scripts/mydescription/mydescription.html',
      restrict: 'E',
      scope:{},
      link: function postLink(scope, element, attrs) {

          scope.description ={
              data: {},
              city: 'dallas,us'
          }

          scope.getData = function(city, fresh){
              myWeatherService.retrieveWeather(city, fresh).then(function(response){
                  scope.description.data = response.weather[0].description;
              });
          }

          // default query
          // It may  be the first one or may be getting from angular's cache
          scope.getData(scope.description.city);

          scope.$on('menu:cityUpdate', function(event, args){
              scope.getData(args.city);
          })

      }
    };
  });
