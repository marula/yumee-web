import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr('number'),
  details: DS.attr('string'),
  restaurant: DS.belongsTo('restaurant', { async: true }),
  orders: DS.hasMany('order', { async: true })
});