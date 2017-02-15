/**
 * Created by muhammet.dere on 21.09.2016.
 */
var alnusApp = angular.module('siteApp', ['ngRoute', 'ngAnimate', 'ngTouch', 'sticky', 'ngSanitize', 'ui.bootstrap']);


alnusApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){


    $routeProvider

    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/{path}', {
        templateUrl: 'pages/content.html',
        controller: 'homeController'
    })

    //.when('/:contentUrl', {
    //    templateUrl: 'pages/content.html',
    //    controller: 'contentController'
    //})
    // .when('/alnusla-tanisin', {
    //     templateUrl: 'pages/content.html'
    // })
    // .when('/raporlarimiz', {
    //     templateUrl: 'pages/content.html'
    // })
    // .when('/urun-ve-hizmetlerimiz', {
    //     templateUrl: 'pages/content.html'
    // })
    // .when('/iletisim', {
    //     templateUrl: 'pages/contact.html'
    // })

    .otherwise({
       templateUrl: 'pages/content.html',
       controller: 'contentController'
    })
    ;

    $locationProvider.html5Mode(true);
}]);