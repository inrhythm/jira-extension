angular.module('app').factory('JiraService', function($http, $q, $rootScope, $state, $window) {
    var token,
        apiBase = 'https://inrhythm.atlassian.net/rest/api/2/';
    return {
        login: function (username, password) {
            token = btoa(username + ':' + password);
            $http.defaults.headers.common.Authorization = 'Basic ' + token;
            return $http.get(apiBase + 'search?jql=assignee=mpatel%20AND%20status="TO DO"')
                .success(function(data, status) {
                    $rootScope.issues = data.issues;
                    $state.go('issues');
                })
                .error(function () {
                    $http.defaults.headers.common.Authorization = token = null;
                });
        },
        getIssues: function () {
            if (token) {
                $http.defaults.headers.common.Authorization = 'Basic ' + token;
                return $http.get(apiBase + 'search?jql=assignee=mpatel%20AND%20status="TO DO"');
            }
        }
    };
});