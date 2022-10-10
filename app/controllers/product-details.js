import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
     init:function() {
        this._super();
        var self = this;
        var category_name = sessionStorage.getItem("catname");
        var payload = {"cateory_name": category_name};
        alert("product details "+ payload);
        $.ajax({
            url: "view/product",
            method: "GET",
            data: {"payload" : JSON.stringify(payload)},
            cache: false,
            headers : { Accept : "application/json; charset=utf-8", "Content-Type" : "application/json; charset=utf-8"},
            success: function(result){
                console.log(result);
                var product = $.parseJSON(result);
                self.set("productname",product[0].category_name);
                self.set("totalproduct",product[0].category_name);
            },
            error: function(){
    //            errorMessage();
                    alert("error thrown");
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

        addcart:function(productid, vendorid) {
            var payload = {"product_id": productid.toString(),
                            "vendor_id": vendorid.toString()
                            }
            $.ajax({
                url: "cart",
                method: "POST",
                type: "json",
                data: {"payload" : JSON.stringify(payload)},
                cache: false,
                success: function(){
                    alert("added to cart");
                },
                error: function(sc, msg){
                    alert(sc.status," ",msg);
                    switch(sc.status) {
                        case "409":
                            alert("cart already exist");
                            break;
                        default:
                            alert("not added to cart");
                            break;
                    }
                }
            });
        }
    }
});