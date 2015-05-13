import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  address: DS.attr('string'),
  description: DS.attr('string'),
  phone_number: DS.attr('string'),
  website: DS.attr('string'),
  rating: DS.attr('number'),
  profile_picture: DS.attr('string'),
  items: DS.hasMany('item', { async: true }),
  tables: DS.hasMany('table', { async: true}),
  orders: DS.hasMany('order', { async: true})
});
