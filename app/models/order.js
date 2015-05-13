import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date'),
  note: DS.attr('string'),
  delivered: DS.attr('boolean'),
  paid: DS.attr('boolean'),
  total: DS.attr('number'),
  restaurant: DS.belongsTo('restaurant', { async: true }),
  table: DS.belongsTo('table', { async: true }),
  user: DS.belongsTo('user', { async: true }),
  items: DS.hasMany('item', { async: true }),
  payments: DS.hasMany('payment', { async: true })
});
