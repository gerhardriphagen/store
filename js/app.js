var app = angular.module('app', []);


app.controller('ProductController', function($scope, ProductService, CurrentUserService) {
    $scope.products = ProductService.getAll();
    //$scope.user = CurrentUserService.get();
});


app.service('ProductService', function() {
    this.getAll = function () {
        return [
            {
                description: '50% korting op een lekker kopje koffie bij de Starbucks',
                thumbnail: 'img/starbucks.jpg',
                points: 1500
            },
            {
                description: 'Laat je huis lekker schoonmaken door de mensen van Helpling. Je krijgt 3 uur gratis van ons.',
                thumbnail: 'img/helpling.jpg',
                points: 2000
            },
            {
                description: 'Get an extra day of vacation',
                thumbnail: 'img/vacation.jpeg',
                points: 20000
            },
            {
                description: 'Get an extra day of vacation',
                thumbnail: 'img/vacation.jpeg',
                points: 1000
            },
            {
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