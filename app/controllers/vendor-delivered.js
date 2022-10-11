import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
    init:function() {
        this._super();
        var self = this;
        var payload = {"stage": "delivered"};
        $.ajax({
            url : "vendor/detail",
            method : 'GET',
            type: "json",
            data: {"payload" : JSON.stringify(payload)},
            cache: false,
            success : function(result) {
                var product = $.parseJSON(result);
                console.log(product);
                self.set('delivereditem',product);
            },
            error: function(){
                alert("error occurs");
            }
        });
    },
    actions: {
        logout:function() {
            $.ajax({
                url : "logout",
                method : 'GET',
                success: function(){
                    window.location.href = "#/login";
                }
            });
        },
    }
});
