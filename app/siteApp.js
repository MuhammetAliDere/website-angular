/**
 * Created by muhammet.dere on 21.09.2016.
 */
var siteApp = angular.module('siteApp', ['ngRoute', 'ngAnimate', 'ngTouch', 'sticky', 'ngSanitize', 'ui.bootstrap']);


siteApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

    $routeProvider

    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/iletisim', {
        templateUrl: 'pages/contact.html'
    })
    .when('/{path}', {
        templateUrl: 'pages/content.html',
        controller: 'contentController'
    })
    .otherwise({
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    });

    $locationProvider.html5Mode(true);
}]);