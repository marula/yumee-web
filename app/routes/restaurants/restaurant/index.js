import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    var firstItem = model.get('items').get('firstObject');
    controller.set('selectedItem', firstItem);
    controller.set('model', model);
  }
});
