import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    var firstRestaurant = model.get('firstObject');
    controller.set('selectedRestaurant', firstRestaurant);
    controller.set('model', model);
  }
});
