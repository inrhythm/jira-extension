angular.module('app').factory('JiraService', function($http, $q, $rootScope, $state, $window) {
    var token,
        apiBase = 'http://inrhythm.atlassian.net/rest/api/2/';
    return {
        login: function (username, password) {
            return $http.post(apiBase + 'pathtologinendpoint').success(function(data, status) {
            });
        },
        getIssues: function (username, password) {
            return $http.post(apiBase + 'search').success(function(data, status) {
            });
        }
    };
});