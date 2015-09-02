var app = angular.module('app', []);


app.controller('ProductController', function($scope, ProductService, CurrentUserService) {
    $scope.products = ProductService.getAll();
    //$scope.user = CurrentUserService.get();
});


app.service('ProductService', function() {
    this.getAll = function () {
        return [
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
                points: 20000
            },
            {
                name: '1 day off!',
                description: 'Get an extra day of vacation',
                thumbnail: 'img/vacation.jpeg',
                points: 1000
            },
            {
                name: '1 day off!',
                description: 'Get an extra day of vacation',
                thumbnail: 'img/vacation.jpeg',
                points: 500
            }
        ];
    }
});


app.service('CurrentUserService', function() {
    this.get = function () {
        return {
                firstName: 'Gerhard',
                lastName: 'Riphagen',
                moneyz: 2000
        }
    }

    this.delete = function(){
        alert('DELETED!');
    }
});


app.directive('storeProduct', function(CurrentUserService) {
    return {
        restrict: 'E',
        scope: {
            product: "="
        },
        templateUrl: 'js/store-product.html',
        link: function(scope) {
            scope.user = CurrentUserService.get()
            scope.purchase = function(product) {
                confirm('you sure you wanna buy?')

                //alert(product.points);
                //alert(CurrentUserService.get().moneyz);
           };
        }
    }
});