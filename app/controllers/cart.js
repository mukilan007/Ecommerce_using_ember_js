import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
    itemDataCart: null,

    init:function() {
        this._super();
        var self = this;
        $.ajax({
            url: "cart",
            method: "GET",
            headers : { Accept : "application/json; charset=utf-8", "Content-Type" : "application/json; charset=utf-8"},
            success : function(result) {
                var data = $.parseJSON(result);
                console.log(data);
                self.set('totalamount',data[data.length-1]);
                delete data[data.length-1];
                self.set('itemDataCart',data);
            },
            error: function(result){
                alert(" error occurs "+ result);
            },
        });
    },
    actions: {
        generateorder:function() {
            alert(" Pay a Amount ");
            $.ajax({
                url: "cart/order",
                method: "POST",
                cache: false,
                success: function(){
                    alert("ordered placed");
                    window.location.href = "#/OrderDetail";
//                    this.transitionToRoute('OrderDetail');
                },
                error: function(){
                    alert("error occurs");
                    window.location.reload();
                },
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
                        window.location.reload();
                    },
                    error: function(){
                        alert("error occurs");
                    }
                });
        },

        quantity_save:function(product_id) {
        var quantity = null;
            var itemDataCart = this.get('itemDataCart');
            for (var i = 0; i < itemDataCart.length-1; i++) {
                if(itemDataCart[i].product_id === product_id) {
                    console.log(itemDataCart[i].quantity);
                    quantity = itemDataCart[i].quantity;
                }
            }
//            var quantity = document.getElementById("tbodyquantity"+product_id).innerHTML;
            console.log("quantity : " + quantity);
            var payload = {"product_id": product_id,
                            "quantity": quantity};
//            alert(payload.product_id+" "+payload.quantity);
            $.ajax({
                url : "save/cart",
                method: 'GET',
                type: 'json',
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
        }
    }
});