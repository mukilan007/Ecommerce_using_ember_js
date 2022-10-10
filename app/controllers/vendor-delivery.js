import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
    init:function() {
        this._super();
        var self = this;
        var payload = {"stage": "ordered"};
        $.ajax({
            url : "vendor/detail",
            method : 'GET',
            type: "json",
            data: {"payload" : JSON.stringify(payload)},
            cache: false,
            success : function(result) {
                var product = $.parseJSON(result);
                console.log(product);
                self.set('deliveryitem',product);
            },
            error: function(){
                alert("error occurs");
            }
        });
    },

    actions: {
        refresh:function() {
                window.location.reload();
        },

        logout:function() {
            $.ajax({
                url : "logout",
                method : 'GET',
                success: function(){
                    window.location.href = "/#/login";
                }
            });
        },

        onDelivered:function(data) {
        	var payload = {"_id": data.toString()};
            $.ajax({
                url : "vendor/edit",
                method: 'POST',
                type: "json",
                data: {"payload" : JSON.stringify(payload)},
                cache: false,
                success : function() {
                    alert("success");
                },
                error: function(){
                    alert("error occurs");
                }
            });
        },

        onCancel:function(data) {
            var payload = {"_id": data.toString()};
             $.ajax({
                 url : "vendor/order/delete",
                 method: 'GET',
                 type: "json",
                 data: {"payload" : JSON.stringify(payload)},
                 cache: false,
                 success : function() {
                     alert("success");
                     this.send("refresh");
                 },
                 error: function(){
                     alert("error occurs");
                 }
             });
        },
    }
});
