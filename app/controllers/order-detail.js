import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
    init:function() {
        this._super();
        var self = this;
        $.ajax({
            url: "cart/order",
            method: "GET",
            headers : { Accept : "application/json; charset=utf-8", "Content-Type" : "application/json; charset=utf-8"},
            success : function(result) {
                var product = $.parseJSON(result);
                console.log(product);
                self.set('orderitem',product);
             },
            error: function(){
                alert("error occurs");
            }
        });
    },
    actions: {
        onCancel:function(data) {
            var payload = {"_id": data.toString()};
             $.ajax({
                 url : "customer/order/delete",
                 method: 'GET',
                 type: "json",
                 data: {"payload" : JSON.stringify(payload)},
                 cache: false,
                 success : function() {
                     alert("success");
                     window.location.reload();
                 },
                 error: function(){
                     alert("error occurs");
                 }
             });
        },
    }
});