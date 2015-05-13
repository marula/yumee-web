import Ember from 'ember';

export default Ember.Controller.extend({
  breadCrumb: 'Edit',
  
  actions: {
    editItem: function() {
      this.get('model').save();
     
      this.transitionToRoute('restaurants.restaurant');
    }, 
    deleteItem: function() {
    	var item = this.get('model');
	    item.deleteRecord();
	    item.save();
	    this.transitionToRoute('restaurants.restaurant');
    }
  }
});