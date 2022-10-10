import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
    init:function() {
        this._super();
        var self = this;
        alert("cart");
        $.ajax({
            url: "cart",
            method: "GET",
            headers : { Accept : "application/json; charset=utf-8", "Content-Type" : "application/json; charset=utf-8"},
            success : function(result) {
                var product = $.parseJSON(result);
                console.log(product);
                self.set('itemDataCart',product);
             },
            error: function(result){
                alert(" error occurs "+ result);
            }
        });
    },
    actions: {
        refresh:function() {
        window.location.reload();
        },

        generateorder:function() {
            alert(" Pay a Amount ");
            $.ajax({
                url: "cart/order",
                method: "POST",
                cache: false,
                success: function(){
                    alert("ordered placed");
                    this.send("refresh");
                },
                error: function(){
                    alert("error occurs");
                    this.send("refresh");
                },
            });
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

        Cancel:function(data) {
            var payload = {"product_id": data.toString()};
            $.ajax({
                    url : "customer/delete",
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

        quantity_save:function(product_id) {
            var quantity = document.getElementById("tbodyquantity").innerHTML;
            var payload = {"product_id": product_id,
                            "quantity": quantity};
            alert(payload.product_id+" "+payload.quantity);
            $.ajax({
                url : "save/cart",
                method: 'GET',
                type: 'json',
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
        }
    }
});