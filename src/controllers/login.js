var app = angular.module('app');

app.controller('loginCtrl', ['$scope', '$state', function($scope, $state) {
  $scope.form = {
    username: "",
    password: ""
  };
  
  $scope.login = function (username, password) {
    console.log(arguments);
    $state.go('issues');
  };
}]);