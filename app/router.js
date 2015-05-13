import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('about');

  this.route('restaurants', function() {
    this.route('new');

    this.route('restaurant', { path: '/:restaurant_id' }, function() {
      this.route('edit');

      this.route('items', function() {
        this.route('new');
        this.route('item', { path: '/:item_id' }, function() {
          this.route('edit');
        }); 
      });

      this.route('tables', function() {
        this.route('new');
        this.route('table', { path: '/:table_id' }, function() {
          this.route('edit');  
        }); 

        this.route('orders');
      });

      this.route('orders', function() {
        this.route('new');
        this.route('order', { path: '/:order_id' }, function() {
          this.route('edit');

          this.route('payments', function() {
            this.route('new');
            this.route('payment', { path: '/:payment_id' });
          });
        });
      });
      
      this.route('data', function() {
        this.route('sales');
        this.route('stock');
      });
    });
  });

  this.route('users', function() {
    this.route('new');

    this.route('user', { path: '/:user_id' }, function() {
      this.route('edit');

      this.route('orders', function() {
        this.route('order', { path: '/:order_id' }, function() {
          this.route('payments', function() {
            this.route('new');
            
            this.route('payment', { path: '/:payment_id' });
          });
        });
      });

      this.route('payments');
    });
  });
});
