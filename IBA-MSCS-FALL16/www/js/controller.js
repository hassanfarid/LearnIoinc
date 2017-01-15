angular.module('starter.controllers', [])

.controller('main', ['$scope', function($scope) {
    $scope.pageTitle = "Offered Programs";
    $scope.programs = [
        {
            title: "MS Computer Science"
        },
        {
            title: "BS Computer Science"
        }
    ];
}])

.controller('program', ['$scope', '$stateParams', function($scope, $stateParams) {
    $scope.pageTitle = $stateParams.param1;
    $scope.courses = [
        {
            title: "Course A",
            description: "Something, something."
        },
        {
            title: "Course B",
            description: "Something, something."
        }
    ];
    $scope.goBack = function() {
        
    }
}])