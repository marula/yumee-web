import Ember from 'ember';

export default Ember.Route.extend({
  
  setupController: function(controller, model) {
    controller.get('controllers.application').set('currentOrder', null);    
  },
  model: function(params) {
    return this.store.find('restaurant', params.restaurant_id);
  }
});
