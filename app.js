(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.lunch = "";
        $scope.message = "";
        $scope.messageStatus = "";

        $scope.getMessage = function () {
            $scope.lunch = $scope.lunch.trim();
            if ($scope.lunch === "") {
                $scope.message = "Please enter data first";
                $scope.messageStatus = "warn";
            }

            if ($scope.lunch.length > 0) {
                var lunchCount = 1;
                for (var i = 0; i < $scope.lunch.length; i++) {
                    if ($scope.lunch[i] === ',') {
                        lunchCount++;
                    }
                }

                if (lunchCount < 4) {
                    $scope.message = "Enjoy!";
                    $scope.messageStatus = "complete";
                } else {
                    $scope.message = "Too much!";
                    $scope.messageStatus = "complete";
                }
            }
        };

        $scope.reset = function () {
            $scope.lunch = "";
            $scope.message = "";
             $scope.messageStatus = "";
        };

    }

})();