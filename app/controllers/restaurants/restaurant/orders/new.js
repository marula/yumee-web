import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['restaurants/restaurant'],
  breadCrumb: 'Place Order',
  actions: {
    placeOrder: function() {
      var id = this.get('controllers.restaurants/restaurant.content.id');

      Ember.RSVP.hash({
        restaurant: this.store.find('restaurant', id)
      })
      .then(function(promises) {
        var restaurant = promises.restaurant;

        var newOrder= this.store.createRecord('order', {
          note: this.get('note'),
          restaurant: restaurant
        });

        newOrder.save().then(function() {
          restaurant.get('orders').then(function(orders) {
            orders.addObject(newOrder);
            restaurant.save();
          });
        });

        this.setProperties({
          note: ''
        });
        this.transitionToRoute('restaurants.restaurant.orders');
      }.bind(this));
    }
  }
});
