import DS from 'ember-data';

export default DS.Model.extend({
  order: DS.belongsTo('order', { async: true }),
  item: DS.belongsTo('item', { async: true })
});
