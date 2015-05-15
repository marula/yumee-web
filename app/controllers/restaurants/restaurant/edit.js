import Ember from 'ember';

export default Ember.Controller.extend({
  breadCrumb: 'Edit',

  actions: {
    editRestaurant: function() {
      this.get('model').save();

      this.transitionToRoute('restaurants.restaurant');
    },
    deleteRestaurant: function() {
    	var restaurant = this.get('model');
	    restaurant.deleteRecord();
	    restaurant.save();
	    this.transitionToRoute('restaurants');
    }
  }
});
