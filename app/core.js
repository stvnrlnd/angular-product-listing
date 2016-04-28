(function(){
  'use strict';
  angular.module('store', [])
    .controller('storeController', function() {
      this.products = items;
    });
    var items = [
      {
        name: 'Fries',
        price: 2.95,
        description: 'Some yummy fried potato sticks.',
        canPurchase: true,
        soldOut: false
      },
      {
        name: 'Black Bean Burger',
        price: 4.95,
        description: 'Yummy black bean burger.',
        canPurchase: true,
        soldOut: false
      }
    ];
})();
