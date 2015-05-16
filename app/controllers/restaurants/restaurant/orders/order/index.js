import Ember from 'ember';

export default Ember.Controller.extend({

	totalAmount: function() {
		var orderItems = this.get('model.orderItems');
		var total = 0;
		
		orderItems.forEach(function(orderItem) {
			console.log(orderItem.get('item'));
			orderItem.get('item').then(function(item) {
				console.log(item);
			});
		});

		return total;
	}.property('model.orderItems')

});
