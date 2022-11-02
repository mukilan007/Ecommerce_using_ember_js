import Ember from 'ember';

var posts = [{
        type1: "active",
        type2: "nonactive",
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
//        <a class="active" {{action "refresh"}} >Home</a>
//        <a href="#/AddProduct">Add</a>
//        <a class="reload" href="#/VendorDelivery">Delivery</a>
//        <a class="reload" href="#/VendorDelivered">Delivered</a>
//        <a class="reload" {{action "logout"}}>Logout</a>
//</div>