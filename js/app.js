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
    if(typeof localStorage['purchasedProductsLocal'] === 'undefined'){
        localStorage['purchasedProductsLocal'] = []
    }

    this.purchasedproducts = localStorage['purchasedProductsLocal'];
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
                if(confirm('Confirm if you like to purchase' + ' ' + product.name)) {
                    scope.user.remainingPoints = scope.user.remainingPoints - product.points;
                    var a = localStorage['purchasedProductsLocal'];
                    if (a.length < 1) {
                        scope.purchased = localStorage['purchasedProductsLocal'] = String(product.id);
                    }
                    else {
                        scope.purchased = localStorage['purchasedProductsLocal'] = [a,",", product.id].join('');
                    }
                }
           };
        }
    }
});

//NEXT TASK: add user points to localStorage