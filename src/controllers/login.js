var app = angular.module('app');

app.controller('loginCtrl', ['$scope', function($scope) {
  $scope.form = {
    username: "",
    password: ""
  };
  
  $scope.login = function (username, password) {
    console.log(arguments);
  };
}]);