import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  currentOrder: Ember.computed.alias('controllers.application.currentOrder'),
  breadCrumb: 'Place Order',

  totalAmount: function(orderItems) {
    
    var total = 0;

    for (var order in orderItems) {
      total = total + 0;
    }

  },

  actions: {
    payOrder: function(orderItems) {
      var restaurant = this.get('model');
      var order = this.get('currentOrder');

      var payment = this.get('payment');

      console.log(payment);

     /* order.save().then(function() {
        restaurant.get('orders').then(function(orders) {
          orders.addObject(order);
          restaurant.save();
        });
      });*/

      this.setProperties({
        payment: ''
      });
      /*this.transitionToRoute('restaurants.restaurant', restaurant.restaurant_id);*/
    }
   }
});