import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['restaurants/restaurant'],
  breadCrumb: 'New Table',
  actions: {
    addTable: function() {
      var id = this.get('controllers.restaurants/restaurant.content.id');
      var restaurant;

      Ember.RSVP.hash({
        restaurant: this.store.find('restaurant', id)
      })
      .then(function(promises) {
        restaurant = promises.restaurant;

        var newTable = this.store.createRecord('table', {
          number: this.get('number'),
          details: this.get('details'),
          restaurant: restaurant
        });

        newTable.save().then(function() {
          restaurant.get('tables').then(function(tables) {
            tables.addObject(newTable);
            restaurant.save();
          });
        });

        this.setProperties({
          number: '',
          details: '',          
        });
        this.transitionToRoute('restaurants.restaurant');
      }.bind(this));
    }
  }
});