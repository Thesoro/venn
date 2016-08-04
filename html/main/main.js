'use strict';

angular.module('myApp.main', ['ngRoute'])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/main', {
//     templateUrl: 'main/main.html',
//     controller: 'mainCtrl'
//   });
// }])

.controller('mainCtrl', ['$scope','$http','$location','$log'
  ,function($scope,$http,$location,$log) {



  $scope.goToPage = function(page) {
    $location.url("/"+page)
  }
  var initPage = function() {

  }
  initPage();
}]);
