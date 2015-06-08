angular.module('app').factory('JiraService', function($http, $q, $rootScope, $state, $window) {
    var token,
        apiBase = 'http://inrhythm.atlassian.net/rest/api/2/';
    return {
        login: function (username, password) {
            token = btoa(username + ':' + password);
            $http.defaults.headers.common.Authorization = 'Basic ' + token;
            return $http.post(apiBase + 'search')
                .success(function(data, status) {
                    $state.go('issues');
                })
                .error(function () {
                    $http.defaults.headers.common.Authorization = token = null;
                });
        },
        getIssues: function () {
            if (token) {
                $http.defaults.headers.common.Authorization = 'Basic ' + token;
                return $http.post(apiBase + 'search').success(function(data, status) {
                });
            }
        }
    };
});