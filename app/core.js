(function(){
  'use strict';
  angular.module('store', [])
    .controller('storeController', function() {
      this.product = item;
    });
    var item = {
      name: 'Fries',
      price: 2.95,
      description: 'Some yummy fried potato sticks.'
    };
})();
