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
    }, 
    deleteItemFromOrder: function(orderItem) {
      var restaurant = this.get('model');
      var controller = this;
      
      orderItem.deleteRecord();
      orderItem.save();

      var currentOrder = this.get('currentOrder');/*this.get('currentOrder');*/
            
      currentOrder.get('orderItems').then(function(orderItems) {        
        if (orderItems.length === 0) {          
          controller.set('controllers.application.currentOrder', null);          
          controller.transitionToRoute('restaurants.restaurant', restaurant);          
        }
      });

                  
    }
  }
});
