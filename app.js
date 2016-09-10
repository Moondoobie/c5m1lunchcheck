(function () {
'use strict';

angular.module('LunchCheck', []);
.controller('LunchCheckController', LunchCheckController) {

    LunchCheckController.$inject = [$scope, $filter];
    function LunchCheckController($scope, $filter) {
        $scope.lunch = "";
        $scope.message = "test";

        $scope.getMessage = function () {
            $scope.lunch = $scope.lunch.trim();
            if ($scope.lunch === "") {
                $scope.message = "Please enter data first";
            }

            var lunchCount = 1;
            for (var i = 0; i < $scope.lunch.length; i++) {
                if ($scope.lunch[i] === ',') {
                    lunchCount++;
                }
            }


            if (lunchCount < 4) {
                $scope.message = "Enjoy!"
            } else {
                $scope.message = "Too much!";
            }
    }
};


});

})();