'use strict';

/**
 * @ngdoc directive
 * @name projectApp.directive:myComponentTwo
 * @description
 * # myComponentTwo
 */
angular.module('projectApp')
  .directive('myDescription', function () {
    return {
      templateUrl: 'scripts/mydescription/mydescription.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
