import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
    init:function() {
        this._super();
        var self = this;
        $.ajax({
        		url : "product",
        		type : 'GET',
                headers : { Accept : "application/json; charset=utf-8", "Content-Type" : "application/json; charset=utf-8"},
                success : function(result) {
                    console.log(result);
                    var product = $.parseJSON(result);
                    self.set('itemData',product);
              }
            });
    },
    actions: {
        redirectthis:function(value) {
            sessionStorage.clear();
            sessionStorage.setItem("catname", value);
            window.location.href = "#/ProductDetails";
            window.location.reload();
        }
    }
});