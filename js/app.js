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





app.controller('ProductController', ['$scope', function($scope) {
    $scope.products = [
        {
            name: 'Product 1',
            description: 'Description 1',
            thumbnail: 'test',
            price: 4.95
        },
        {
            name: 'P2',
            description: 'D2',
            thumbnail: 'test',
            price: 3.95
        },
        {
            name: 'P3',
            description: 'D3',
            thumbnail: 'test',
            price: 4.95
        },
    ];
}]);

