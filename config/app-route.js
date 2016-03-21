(function () {

    var app = angular.module('app', ['ngRoute', 'ngResource', 'LocalStorageModule', 'underscore', 'toastr']);

    app.config(function($routeProvider, $httpProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'Home.html',
                controller: 'homeCtrl'
            })
            .when('/Home',
            {
                templateUrl: 'Home.html',
                controller: 'homeCtrl'
            })
            .when('/Contact', {
                templateUrl: 'Contact.html',
                controller: 'contactCtrl'
            })
            .when('/How', {
                templateUrl: 'How.html',
                controller: 'howCtrl',
            })
            .when('/Admin', {
                templateUrl: 'Admin.html',
                controller: 'adminCtrl'
            });

    });

}());