app.controller('issuesCtrl', ['$scope', '$timeout', '$rootScope', function($scope, $timeout, $rootScope) {
  $scope.data = {
    issues: $rootScope.issues
  };
}]);