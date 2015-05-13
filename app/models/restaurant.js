import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  items: DS.hasMany('item', { async: true }),
  tables: DS.hasMany('table', { async: true}),
});
