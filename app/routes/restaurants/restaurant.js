import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('restaurant', params.restaurant_id);
  },
  setupController: function(controller) {
    controller.get('controllers.application').set('currentOrder', null);
  }
});
