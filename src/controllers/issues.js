app.controller('issuesCtrl', ['$scope', '$timeout', function($scope, $timeout, JiraService) {
  $scope.data = {
    issues: []
  };
  
  JiraService.getIssues().success(function (data) {
      $scope.data = data;
    });

}]);