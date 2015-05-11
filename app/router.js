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
    });
  });

  this.route('orders', function() {});
  this.route('comments', function() {});
  this.route('users', function() {});
});
