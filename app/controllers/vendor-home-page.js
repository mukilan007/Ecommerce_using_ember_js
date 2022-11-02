import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
    init:function() {
        this._super();
        var self = this;
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
                    window.location.reload();
                },
                error: function(){
                    alert("error occurs");
                }
            });
        }
    }
});
