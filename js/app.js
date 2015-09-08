var app = angular.module('app', []);


app.controller('ProductController', function($scope, ProductService, CurrentUserService) {
    $scope.products = ProductService.getAll();
    $scope.user = CurrentUserService.get();
});


app.service('ProductService', function() {
    this.getAll = function () {
        return [
            {
                id: 1,
                name: 'Starckbucks koffie',
                description: '50% korting op een lekker kopje koffie bij de Starbucks',
                thumbnail: 'img/starbucks.jpg',
                points: 1500
            },
            {
                id: 2,
                name: 'Schoonmaken',
                description: 'Laat je huis lekker schoonmaken door de mensen van Helpling. Je krijgt 3 uur gratis van ons.',
                thumbnail: 'img/helpling.jpg',
                points: 2000
            },
            {
                id: 3,
                name: 'Vakantie',
                description: 'Get an extra day of vacation',
                thumbnail: 'img/vacation.jpeg',
                points: 20000
            },
            {
                id: 4,
                name: 'Vakantie',
                description: 'Get an extra day of vacation',
                thumbnail: 'img/vacation.jpeg',
                points: 1000
            },
            {
                id: 5,
                name: 'Vakantie',
                description: 'Get an extra day of vacation',
                thumbnail: 'img/vacation.jpeg',
                points: 500
            },
            {
                id: 6,
                name: 'Starbucks',
                description: '50% korting op een lekker kopje koffie bij de Starbucks',
                thumbnail: 'img/starbucks.jpg',
                points: 1500
            },
            {
                id: 7,
                name: 'Schoonmaken',
                description: 'Laat je huis lekker schoonmaken door de mensen van Helpling. Je krijgt 3 uur gratis van ons.',
                thumbnail: 'img/helpling.jpg',
                points: 2000
            },
            {
                id: 8,
                name: 'Vakantie',
                description: 'Get an extra day of vacation',
                thumbnail: 'img/vacation.jpeg',
                points: 20000
            },
            {
                id: 9,
                name: 'Vakantie',
                description: 'Get an extra day of vacation',
                thumbnail: 'img/vacation.jpeg',
                points: 1000
            },
            {
                id: 10,
                name: 'Vakantie',
                description: 'Get an extra day of vacation',
                thumbnail: 'img/vacation.jpeg',
                points: 500
            }
        ];
    }
});


app.service('CurrentUserService', function() {

    var userObject = {
        firstName: 'Gerhard',
        lastName: 'Riphagen',
        totalPoints: 10000,
        remainingPoints: 2000
    };

    this.get = function () {
        return userObject;
    };

    this.delete = function(){
        alert('DELETED!');


    }
});


app.service('UserProductService', function() {
    this.purchasedproducts = [];
});


app.directive('storeProduct', function(CurrentUserService, UserProductService) {
    return {
        restrict: 'E',
        scope: {
            product: "="
        },
        templateUrl: 'js/store-product.html',
        link: function(scope) {
            scope.user = CurrentUserService.get();
            scope.purchased = UserProductService.purchasedproducts;
            scope.purchase = function(product) {
                if(confirm('Sure you wanna buy' + ' ' + product.name)) {
                    scope.purchased.push(product.id);
                    scope.user.remainingPoints = scope.user.remainingPoints - product.points;  //the remaining points on the buttons are updated, but the remaining points in the header not
                };

           };
        }
    }
});