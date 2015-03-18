import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addItem: function() {
      var newItem = this.store.createRecord('item', {
        name: this.get('name'),
        price: this.get('price')
      });
      newItem.save();
      this.setProperties({
        name: '',
        price: ''
      });
    }
  }
});
