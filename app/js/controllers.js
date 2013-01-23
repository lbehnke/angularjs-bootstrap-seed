'use strict';

/* Controllers */


function GenericViewCtrl() {
}
GenericViewCtrl.$inject = [];


function ContactViewCtrl($scope) {

    $scope.lastForm = {};

    $scope.sendForm = function(form) {
        $scope.lastForm = angular.copy(form);
        alert("Your message was sent. We will get in touch with you as soon as possible.");
    }

    $scope.resetForm = function() {
        $scope.form = angular.copy($scope.lastForm);
    }

}

ContactViewCtrl.$inject = ['$scope'];



