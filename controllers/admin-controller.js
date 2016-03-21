(function () {
    var app = angular.module('app');
    app.controller('adminCtrl', function ($scope) {
        $scope.message = "Message from admin page";
    });
}());