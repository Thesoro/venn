'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.main',
  'myApp.venn',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when("/main", {
    controller: "mainCtrl",
    title: "main",
    templateUrl: "/html/main/main.html"
  })
  .when("/venn/", {
    controller: "vennCtrl",
    title: "venn",
    templateUrl: "/html/venn/venn.html"
  })
  .otherwise({redirectTo: '/main'});
}]);
