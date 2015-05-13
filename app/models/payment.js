import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date'),
  amount: DS.attr('number'),
  user: DS.belongsTo('user', { async: true }),
  order: DS.belongsTo('order', { async: true })
});