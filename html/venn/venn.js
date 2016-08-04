'use strict';

angular.module('myApp.venn', ['ngRoute'])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/venn', {
//     templateUrl: 'venn/venn.html',
//     controller: 'vennCtrl'
//   });
// }])


.controller('vennCtrl', ['$scope','$http','$location','$log'
  ,function($scope,$http,$location,$log) {

  $scope.worda = '';
  $scope.wordb = '';
  $scope.wordc = '';

  $scope.scale=200;
  $scope.initx=2*$scope.scale;
  $scope.inity=0;
  $scope.xoff=0;

  $scope.a = {
    x:$scope.initx+.58*$scope.scale,
    y:$scope.inity+2*$scope.scale,
    r:$scope.scale,
    color:"red",
    textx:($scope.initx+.58*$scope.scale) * 1.2,
    texty:($scope.inity+2*$scope.scale) * 1.2,
  }
  $scope.b = {
    x:$scope.initx-.58*$scope.scale,
    y:$scope.inity+2*$scope.scale,
    r:$scope.scale,
    color:"blue",
    textx:($scope.initx-.58*$scope.scale) * 0.9,
    texty:($scope.inity+2*$scope.scale) * 1.2,

  }
  $scope.c = {
    x:$scope.initx,
    y:$scope.inity+$scope.scale,
    r:$scope.scale,
    color:"green",
    textx:($scope.initx),
    texty:($scope.inity+$scope.scale)*0.8,

  }
//                         {name:"Browse", glyph:"search", link:"games"},
// <!-- <svg width="1000" height="1000">
//   <circle cx="358" cy="200" r="100" stroke="black" stroke-width="1" ng-attr-fill="{{colorone}}" fill-opacity="0.4" />
//   <circle cx="242" cy="200" r="100" stroke="black" stroke-width="1" ng-attr-fill="{{colortwo}}" fill-opacity="0.4" />
//   <circle cx="300" cy="100" r="100" stroke="black" stroke-width="1" ng-attr-fill="{{colorthree}}" fill-opacity="0.4" />
// </svg> -->


  var initPage = function() {

  }
  initPage();
}]);
