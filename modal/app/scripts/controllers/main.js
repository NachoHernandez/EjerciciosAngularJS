'use strict';

/**
 * @ngdoc function
 * @name modalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the modalApp
 */
angular.module('modalApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
