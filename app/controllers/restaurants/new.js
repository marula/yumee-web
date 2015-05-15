import Ember from 'ember';

export default Ember.Controller.extend({
  breadCrumb: 'New',
  actions: {
    addRestaurant: function() {
      var newRestaurant = this.store.createRecord('restaurant', {
        name: this.get('name'),
        email: this.get('email'),
        address: this.get('address'),
        lat: this.get('lat'),
        lng: this.get('lng'),
        description: this.get('description'),
        phone_number: this.get('phone_number'),
        website: this.get('website'),        
        profile_picture: this.get('profile_picture')
      });
      newRestaurant.save();
      this.setProperties({
        name: '',
        email: '',
        address: '',
        lat: '',
        lng: '',
        description: '',
        phone_number: '',
        website: '',        
        profile_picture: ''
      });
      this.transitionToRoute('restaurants');
    }
  }
});
