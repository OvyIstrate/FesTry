(function() {
    angular.module('app').controller("homeCtrl",[
        '$scope', '$http', 'serverResolver', function($scope, $http, serverResolver) {

            var onEventSuccess = function(response) {
                $scope.events = response.data;
                //$scope.event = $scope.events[1];

            };

            var onEventError = function(response) {
                $scope.error = response.data;
            }
            $http.get(serverResolver.serverPath + '/api/values').then(onEventSuccess, onEventError);
        }
    ]);
}());
