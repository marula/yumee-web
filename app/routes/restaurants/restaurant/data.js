import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return data[0];/*this.store.fetch('restauraunt', params.restaurant_id);*/
  }
});

var data = [{
      
  restaurant_id :'Simply Asia',

  salesData: [
    { x: 1, y: 6000, month: 'January'},
    { x: 2, y: 4570, month: 'February' },
    { x: 3, y: 6400, month: 'March' },
    { x: 4, y: 7009, month: 'April' },
    { x: 5, y: 8560, month: 'May' },
    { x: 6, y: 13000, month: 'June' },
    { x: 7, y: 12500, month: 'July' },
    { x: 8, y: 10052, month: 'August' },
    { x: 9, y: 9000, month: 'September' },
    { x: 10, y: 6548, month: 'October' },
    { x: 11, y: 8000, month: 'November' },
    { x: 12, y: 5999, month: 'December' },
  ],

  menuItemStockCount: [
    { x: 0, y: 200 },
    { x: 1, y: 154 },
    { x: 2, y: 130 },
    { x: 3, y: 300 }
  ]
      
  }, {

  restaurant_id: 1,

  salesData: [
    { x: 1, y: 6000 },
    { x: 2, y: 4570 },
    { x: 3, y: 6400 },
    { x: 4, y: 7009 },
    { x: 5, y: 8560 },
    { x: 6, y: 13000 },
    { x: 7, y: 12500 },
    { x: 8, y: 10052 },
    { x: 9, y: 9000 },
    { x: 10, y: 6548 },
    { x: 11, y: 8000 },
    { x: 12, y: 5999 },
  ],

  menuItemStockCount: [
    { x: 'WokWok', y: 200 },
    { x: 'Sweet and sour pork', y: 154 },
    { x: 'Barbequed Crispy Dog', y: 130 },
    { x: 'Noodles', y: 300 },
  ]


  }];