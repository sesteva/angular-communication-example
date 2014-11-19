'use strict';

/**
 * @ngdoc service
 * @name projectApp.myWeatherService
 * @description
 * # myWeatherService
 * Service in the projectApp.
 */
angular.module('projectApp')
  .service('myWeatherService', function ($http, $q, $cacheFactory) {
        // AngularJS will instantiate a singleton by calling "new" on this function


        // When the cache is enabled, $http stores the response from the server in the specified cache.
        // The next time the same request is made, the response is served from the cache without sending a
        // request to the server.
        // Note that even if the response is served from cache,
        // delivery of the data is asynchronous in the same way that real requests are.
        // If there are multiple GET requests for the same URL that should be cached using the same cache,
        // but the cache is not populated yet,
        // only one request to the server will be made and the remaining requests will be fulfilled using
        // the response from the first request.

        var queryWeatherUsingAngularCache = function(param, refresh){
            var deferred = $q.defer();
            console.log('querying');

            var config = {
                url: 'http://api.openweathermap.org/data/2.5/weather?q='+ param +'&callback=JSON_CALLBACK',
                method: 'JSONP',
                cache: true
            }

            // Remove cache if somebody wants to get a fresh data object
            if(refresh){
                console.log('refreshing : ' + refresh);
                $cacheFactory.get('$http').remove(config.url);
            }

            $http(config).then(function(response){
                deferred.resolve(response.data);
            })

            return deferred.promise;
        }

        return {
            retrieveWeather: queryWeatherUsingAngularCache
        }

  });
