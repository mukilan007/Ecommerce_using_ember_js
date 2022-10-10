import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
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

        vendorAdd:function() {
            var categoryname = document.getElementById("categoryname").value;
            var type = document.getElementById("type").value;
            var brandname = document.getElementById("brandname").value;
            var productname = document.getElementById("productname").value;
            var detail = document.getElementById("detail").value;
            var size = document.getElementById("size").value;
            var color = document.getElementById("color").value;
            var price = document.getElementById("price").value;
            var quantity = document.getElementById("quantity").value;
            var payload = {"categoryname": categoryname,
                    "type": type,
                    "brandname": brandname,
                    "productname": productname,
                    "detail": detail,
                    "size": size,
                    "color": color,
                    "price": price,
                    "quantity": quantity
                    };
            alert("Confirm to add product " + productname);
            $.ajax({
                url: "vendor/add",
                method: "POST",
                type: "json",
                data: {"payload" : JSON.stringify(payload)},
                cache: false,
                success: function(){
                    alert("success");
                },
                error: function(){
                    alert("error occur");
                }
            });
        }
    }
});
