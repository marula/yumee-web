import Ember from 'ember';

export default Ember.Controller.extend({
  markers: function() {
    var lat = this.get('selectedRestaurant.lat'),
        lng = this.get('selectedRestaurant.lng');
    return [{ latitude: lat, longitude: lng }];
  }.property('selectedRestaurant'),

  actions: {
    selectRestaurant: function(restaurant) {
      this.set('selectedRestaurant', restaurant);
    }
  }
});
