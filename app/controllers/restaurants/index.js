import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    selectRestaurant: function(restaurant) {
      this.set('selectedRestaurant', restaurant);
    }
  }
});
