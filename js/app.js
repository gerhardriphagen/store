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
            name: 'Coffee',
            description: '10 cups of coffee @ Starbucks',
            thumbnail: 'img/starbucks.jpg',
            points: 1500
        },
        {
            name: 'Cleaning',
            description: '3 hours of cleaning from Helpling',
            thumbnail: 'img/helpling.jpg',
            points: 2000
        },
        {
            name: '1 day off!',
            description: 'Get an extra day of vacation',
            thumbnail: 'img/vacation.jpeg',
            points: 10000
        },
    ];
}]);


app.directive('product', function() {
    return {
        Template:
            'name: {{product.name}} description: {{product.description}} thumbnail: {{product.thumbnail}} points: {{product.points}}'
    }
});
