import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    model.get('orderItems').then(function(orderItems){
      var total = 0;
      orderItems.forEach(function(orderItem, index, enumerable) {
          total = total + orderItem.get('item').get('price');
      });
 	  console.log(total);
      controller.set('orderTotal', total);             
    }); 
  }  
});