angular.module('starter.controllers', [])

.controller('main', function($scope) {})

.controller('program', function($scope) {
    $scope.courses = [
        {
            title: "Course A"
        },
        {
            title: "Course B"
        }
    ]
    $scope.goBack = function() {
        
    }
})