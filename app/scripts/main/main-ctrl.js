'use strict';

angular.module('beerBozo')
  .controller('MainCtrl', function ($scope) {
    $scope.topBeers = [
      {
        key: 'Kernel',
        title: 'Kernel Pale',
        url: 'https://angularjs.org/',
        description: 'Pale Ale, Tasty Shit',
        logo: 'Kernel.jpg',
        rank: 4
      },
      {
        key: 'Goose Island',
        title: 'Goose Island IPA',
        url: 'http://browsersync.io/',
        description: 'Punch in the Mouth',
        logo: 'gooseisland.jpg',
        rank: 5
      },
      {
        key: 'Magic Rock',
        title: 'Magic Rock High Wire',
        url: 'http://gulpjs.com/',
        description: 'Yum.',
        logo: 'magicRock.jpg',
        rank: 4
      },
      {
        key: 'Beaver',
        title: 'BeaverTown Smog Rocket',
        url: 'http://jasmine.github.io/',
        description: 'Behavior-Driven JavaScript.',
        logo: 'smog.jpg',
        rank: 4
      }      
    ];
    
  });
