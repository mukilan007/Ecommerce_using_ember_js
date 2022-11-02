import Ember from 'ember';

var posts = [{
        type1: "nonactive",
        type2: "active",
        type3: "reload",
        type4: "reload",
        type5: "reload"
      }];
export default Ember.Route.extend({
      model() {
        return posts;
      }
});
//<div class="topnav">
//    <a href="#/VendorHomePage">Home</a>
//    <a class="active" href="#/AddProduct">Add</a>
//    <a class="reload" href="#/VendorDelivery">Delivery</a>
//    <a class="reload" href="#/VendorDelivered">Delivered</a>
//    <a class="reload" {{action 'logout'}}>Logout</a>
//</div>