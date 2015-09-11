var app = angular.module('app', []);


app.controller('ProductController', function($scope, ProductService, CurrentUserService, UserProductService) {
    $scope.products = ProductService.getAll();
    $scope.user = CurrentUserService.get();
    $scope.purchased = UserProductService.purchasedproducts;
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
        remainingPoints: 10000
    };

    this.get = function () {
        return userObject;
    };

    this.delete = function(){
        alert('DELETED!');


    }
});


app.service('UserProductService', function() {
    this.purchasedproducts = localStorage['testproduct'];                                                  //replace 'localStorage['testproduct']' by '[]' to have without local storage
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
                    scope.user.remainingPoints = scope.user.remainingPoints - product.points;
                    var a = localStorage['testproduct'];                                                   //remove to have without local storage
                    var b = ',' + product.id;                                                              //remove to have without local storage
                    var position = a.length;                                                               //remove to have without local storage
                    scope.purchased = localStorage['testproduct'] = [a.slice(0, position), b, a.slice(position)].join('');
                    //scope.purchased.push(product.id);                                                    //add to have without local storage
                }
           };
        }
    }
});