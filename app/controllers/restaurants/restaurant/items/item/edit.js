import Ember from 'ember';

export default Ember.Controller.extend({
  breadCrumb: 'Edit',
  
  actions: {
    editItem: function() {
      this.get('model').save();
     
      this.transitionToRoute('restaurants.restaurant');
    }
  }
});