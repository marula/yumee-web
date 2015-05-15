import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('number'),
  item_picture: DS.attr('string'),
  restaurant: DS.belongsTo('restaurant', { async: true })
});
