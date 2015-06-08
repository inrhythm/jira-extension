app.controller('loginCtrl', ['$scope', function($scope) {
  $scope.form.username = "";
  $scope.form.password = "";
  
  $scope.login = function (username, password) {
    alert(arguments);
  };
}]);