import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr('number'),
  details: DS.attr('string'),
  /*orders: ,*/
  restaurant: DS.belongsTo('restaurant', { async: true })
});