import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('AddProduct');
  this.route('Cart');
  this.route('Home');
  this.route('OrderDetail');
  this.route('ProductDetails');
  this.route('Signup');
  this.route('VendorDelivered');
  this.route('VendorDelivery');
  this.route('VendorHomePage');
});

export default Router;
