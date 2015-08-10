var app = angular.module('app', []);

app.directive('randomAvatar', function () {
    return {
        restrict: 'E',
        template: '<img ng-src="{{avatarUrl}}"/>',
        link: function (scope) {

            //$http.get('https://randomuser.me/api/').then(function (data) {
            //    debugger
            //});
           var baseUrl = 'http://api.randomuser.me/portraits/women/'
            scope.avatarUrl = baseUrl + Math.floor(Math.random() * 96) + '.jpg';
        }
    }
});