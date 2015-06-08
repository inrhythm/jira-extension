app.controller('issuesCtrl', ['$scope', '$rootScope', 'JiraService', function($scope, $rootScope, JiraService) {
  $scope.issues = $rootScope.issues;
  
  $scope.getIssues = function () {
    JiraService.getIssues().success(function (data) {
      $scope.issues = data.issues;
      $scope.$apply();
    });
  };
}]);