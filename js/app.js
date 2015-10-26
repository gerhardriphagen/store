var app = angular.module('app', []);


app.controller('ProductController', function($scope, ProductService, CurrentUserService, LocalStorageService) {
    $scope.products = ProductService.getAll();
    $scope.user = CurrentUserService.get();
    $scope.server = LocalStorageService.get();
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



app.service('LocalStorageService', function() {

    //if var is not defnied in lS, define it here
    if(typeof localStorage['purchasedProducts'] === 'undefined'){
        localStorage['purchasedProducts'] = []
    }

    var userProducts;
    userProducts = JSON.parse(localStorage.getItem('purchasedProducts'));

    this.get = function () {
        return userProducts;
    };

    //I need to call the function below when a product is purchased successfully in order to update lS

    localStorage.setItem( 'purchasedProducts', JSON.stringify( userProducts ) );

});



app.directive('storeProduct', function(CurrentUserService, LocalStorageService) {
    return {
        restrict: 'E',
        scope: {
            product: "="
        },
        templateUrl: 'js/store-product.html',
        link: function(scope) {
            scope.user = CurrentUserService.get();
            scope.server = LocalStorageService.get();
            scope.purchase = function(product) {
                if(confirm('Confirm if you like to purchase' + ' ' + product.name)) {
                    scope.user.remainingPoints = scope.user.remainingPoints - product.points;
                    userProducts.push(product.id)

                }
           };
        }
    }
});

