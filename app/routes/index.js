import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('restaurant', {
      orderBy: 'rating',
      limitToLast: 6
    });
  }
});
