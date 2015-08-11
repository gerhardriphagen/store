var app = angular.module('app', []);


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
        }
    ];
}]);


app.directive('storeProduct', function() {
    return {
        restrict: 'E',
        scope: {
            product: "="
        },
        templateUrl: 'js/store-product.html'
    }
});