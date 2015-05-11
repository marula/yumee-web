import Ember from 'ember';

export default Ember.Controller.extend({
  breadCrumb: function() {
    return this.get('model.name');
  }.property('model.name')
});
