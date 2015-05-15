import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  currentOrder: Ember.computed.alias('controllers.application.currentOrder'),
  breadCrumb: 'Place Order',

  actions: {
    confirmOrder: function() {
      var restaurant = this.get('model');
      var order = this.get('currentOrder');

      order.save().then(function() {
        restaurant.get('orders').then(function(orders) {
          orders.addObject(order);
          restaurant.save();
        });
      });

      this.setProperties({
        note: ''
      });
      this.transitionToRoute('restaurants.restaurant.orders.order', order);
    }
  }
});
