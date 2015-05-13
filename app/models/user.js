import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  surname: DS.attr('string'),
  cell_number: DS.attr('string'),
  email: DS.attr('string'),
  other_details: DS.attr('string'),
  profile_picture: DS.attr('string'),
  payments: DS.hasMany('payment', { async: true}),
  orders: DS.hasMany('order', { async: true})
});
