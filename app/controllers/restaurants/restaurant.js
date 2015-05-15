import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  breadCrumb: function() {
    return this.get('model.name');
  }.property('model.name')
});
