import Ember from 'ember';

export default Ember.Controller.extend({
  breadCrumb: 'Edit',
  
  actions: {
    editTable: function() {
      this.get('model').save();
     
      this.transitionToRoute('restaurants.restaurant');
    }, 
    deleteTable: function() {
    	var table = this.get('model');
	    table.deleteRecord();
	    table.save();
	    this.transitionToRoute('restaurants.restaurant');
    }
  }
});