import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');

  this.resource('restaurants', function() {
    this.route('new');
    this.route('edit');
  });
  this.resource('restaurant', { path: '/restaurant/:restaurant_id' },
    function() {

  });

  this.resource('items', function() {
    this.route('new');
  });

  this.resource('orders', function() {});
  this.resource('comments', function() {});
  this.resource('users', function() {});
});

export default Router;
