import Ember from 'ember';

export default Ember.Controller.extend({
  breadCrumb: 'New',
  actions: {
    addRestaurant: function() {
      var newRestaurant = this.store.createRecord('restaurant', {
        name: this.get('name'),
        email: this.get('email')
      });
      newRestaurant.save();
      this.setProperties({
        name: '',
        email: ''
      });
      this.transitionToRoute('restaurants');
    }
  }
});
