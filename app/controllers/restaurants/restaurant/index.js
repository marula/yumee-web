import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application', 'restaurants/restaurant/orders/new'],
  currentOrder: Ember.computed.alias('controllers.application.currentOrder'),

  startCurrentOrder: function() {
    var restaurant = this.get('model');
    var newOrder= this.store.createRecord('order', {
      placed: false,
      paid: false,
      delivered: false,
      restaurant: restaurant
    });


    this.set('currentOrder', newOrder);
    return newOrder;
  },
  addOrderItem: function(order, item) {
    var newOrderItem = this.store.createRecord('orderItem', {
      order: order,
      item: item
    });

    newOrderItem.save().then(function() {
      order.get('orderItems').then(function(orderItems) {
        orderItems.addObject(newOrderItem);
        order.save();
      });
    });
  },

 /* orderItemsCount: function(){
    var currentOrder = this.get('currentOrder');

    if (currentOrder) {
      currentOrder.get('orderItems').then(function(orderItems) {
        console.log(orderItems.length);
        return orderItems.length;
      });
    } else {
      return 0;
    }
  }.property('currentOrder.orderItems'),

  addedItemsCount: function() {
    var currentOrder = this.get('currentOrder');
    var item = this.get('selectedItem');
    
    if (currentOrder) {
     
        var orderItems = currentOrder.get('orderItems'); 
        
        var filtered = orderItems.filter(function(orderItem) {
          return orderItem.get('item').get('id') == item.id;
        });        
        
        return filtered.length;      
      
    } else {
      return 0;
    }
  }.property('selectedItem', 'currentOrder.orderItems'),*/

  actions: {
    selectItem: function(item) {
      this.set('selectedItem', item);
    },
    addItem: function(item) {
      var currentOrder = this.get('currentOrder');
      if (!currentOrder) {
          currentOrder = this.startCurrentOrder();
      }
      this.addOrderItem(currentOrder, item);
      
      /*currentOrder.get('orderItems').then(function(orderItems) {
        var filtered = orderItems.filter(function(orderItem) {
          console.log('Test schtuff: ' + orderItem.get('item').get('id') + ', ' + item.id);
          return orderItem.get('item').get('id') == item.id;
        });
        console.log(filtered.length);
        console.log(orderItems.length);
      });*/
    }
  }
});


