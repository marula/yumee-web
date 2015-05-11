import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['restaurants/restaurant'],
  breadCrumb: 'New Menu Item',
  actions: {
    addItem: function() {
      var id = this.get('controllers.restaurants/restaurant.content.id');
      var restaurant;

      Ember.RSVP.hash({
        restaurant: this.store.find('restaurant', id)
      })
      .then(function(promises) {
        restaurant = promises.restaurant;

        var newItem = this.store.createRecord('item', {
          name: this.get('name'),
          price: this.get('price'),
          restaurant: restaurant
        });

        newItem.save().then(function() {
          restaurant.get('items').then(function(items) {
            items.addObject(newItem);
            restaurant.save();
          });
        });

        this.setProperties({
          name: '',
          price: ''
        });
        this.transitionToRoute('restaurants.restaurant');
      }.bind(this));
    }
  }
});
