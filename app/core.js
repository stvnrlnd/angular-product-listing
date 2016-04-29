(function(){
  'use strict';
  angular.module('store', [])
    .controller('storeController', function() {
      this.products = items;
    })
    .controller('itemController', function() {
      this.tab = 1;
      this.selectTab = function(setTab) {
        this.tab = setTab;
      };
      this.isSelected = function(checkTab) {
        return this.tab === checkTab;
      };
    })
    .controller('reviewController', function() {
      this.review = {};
      this.addReview = function(product) {
        product.reviews.push(this.review);
        this.review = {};
      };
    });

    var items = [
      {
        name: 'Fries',
        price: 2.95,
        description: 'Some yummy fried potato sticks.',
        canPurchase: true,
        soldOut: false,
        reviews: [
          {stars: 5,
          body: 'awesome',
          author: 'jim@johns.con'}
        ]
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
