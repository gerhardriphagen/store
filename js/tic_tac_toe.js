//TODO: click on block shows cross
//TODO: click on block and show circle
//TODO: can I do this move or not? (is there something in the field?)
//TODO: make array of current state with circles and crosses [[],[],[]]
//TODO: show you win/lose

//LOGIC

//array logic: the difference between crosses and x'es cannot be larger than 1
//array logic: always 3x3
//

//TASK
//if I have an event in html



angular.module('ticTacToe', []).controller('mainCtrl', ['$scope', function($scope){
    var data = [[11,12,13],[21,22,23],[31,32,33]];

    $scope.rules = data;

    $scope.pickField = function(id){
        alert(id);
    };
}]);