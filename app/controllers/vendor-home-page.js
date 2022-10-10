import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
    init:function() {
        this._super();
        var self = this;
        alert("vendor home page");
        $.ajax({
            url : "vendor/view",
            method : 'GET',
            headers : { Accept : "application/json; charset=utf-8", "Content-Type" : "application/json; charset=utf-8"},
            success : function(result) {
                var product = $.parseJSON(result);
                console.log(product);
                self.set('itemData',product);
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

        onDelete:function(data){
            var payload = {"product_id": data.toString()};
            $.ajax({
                url : "vendor/product/delete",
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
