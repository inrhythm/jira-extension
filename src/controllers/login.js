var app = angular.module('app');

app.controller('loginCtrl', ['$scope', '$state', 'JiraService', function($scope, $state, JiraService) {
  $scope.form = {
    username: "",
    password: ""
  };
  
  $scope.login = function (username, password) {
    console.log(arguments);
    JiraService.login(username, password);
  };
}]);