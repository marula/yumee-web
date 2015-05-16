import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    
    var salesData = [
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
    ];

    var DailyCustomers = [];

    for (var i = 0; i < 100; i++) {
      DailyCustomers.push({
        x: i,
        y: Math.floor(Math.abs(100* Math.cos(i/10) + 300 + (Math.random() * 40)))
      });
    } 

    return {salesData, DailyCustomers};

  }
});

