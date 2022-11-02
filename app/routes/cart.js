import Ember from 'ember';

var posts = [{
        type1: "reload",
        type2: "nonactive",
        type3: "active",
        type4: "nonactive"
      }];
export default Ember.Route.extend({
      model() {
        return posts;
      }
});