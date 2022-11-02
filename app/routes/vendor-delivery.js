import Ember from 'ember';

var posts = [{
        type1: "nonactive",
        type2: "nonactive",
        type3: "active",
        type4: "reload",
        type5: "reload"
      }];
export default Ember.Route.extend({
      model() {
        return posts;
      }
});
//<div class="topnav">
//        <a href="#/VendorHomePage">Home</a>
//        <a href="#/AddProduct">Add</a>
//        <a class="active" class="reload" href="#/VendorDelivery">Delivery</a>
//        <a class="reload" href="#/VendorDelivered">Delivered</a>
//        <a class="reload" {{action 'logout'}}>Logout</a>
//</div>