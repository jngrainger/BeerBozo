'use strict';

angular.module('beerBozo')
  .controller('MainCtrl', function ($scope) {

    // The initial beer list
    $scope.topBeers = [{
      title: 'Kernal',
      description: 'hoppy',
      rank: 1
    }];

    $scope.boom = function () {

      // Create the new beer from the form elements
      var newBeer = {
        title: $scope.title,
        description: $scope.description,
        rank: $scope.rank
      };

      // Add the beer to the list
      $scope.topBeers.push(newBeer);

      // Reset the new beer form
      $scope.title = '';
      $scope.description = '';
      $scope.rank = '';
    };

    $scope.fill = function (beer) {

      // Set the new beer form variables
      $scope.title = beer.title;
      $scope.description = beer.description;
      $scope.rank = beer.rank;

      // Set the selectedBeer so we can update
      $scope.selectedBeer = beer;
    };
  });
