import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
//    ajax: Ember.inject.service(),
    actions : {
        getUser:function() {
            alert('login');
            document.getElementById("error").value = "";
            var emailId = document.getElementById("emailId").value;
            var password = document.getElementById("password").value;
//            this.get('ajax').request('login', {
//                    method: 'GET',
//                    data: {"payload" : JSON.stringify({"e_mail": emailId, "password": password})},
//                    success: function(usertype, name){
//                        if(usertype === "isadmin"){
//                            window.location.href = "/#/VendorHomePage";
//                        }
//                        else if(usertype === "notadmin") {
//                            window.location.href = "/#/Home"; }
//                        alert("Welcome " +  name);
//                    },
//                    error: function(a, msg){
//                        alert(msg);
//                    }
//                  });
            $.ajax({
                url: "login",
                method: "GET",
                type: "json",
                data: {"payload" : JSON.stringify({"e_mail": emailId, "password": password})},
                cache: false,
                success: function(usertype, name){
                    if(usertype === "isadmin"){
                        window.location.href = "/#/VendorHomePage";
                    }
                    else if(usertype === "notadmin") {
                        window.location.href = "/#/Home"; }
                    alert("Welcome " +  name);
        //            myFunction();
                },
                error: function(a, msg){
                    alert(msg);
                    this.send("errorMessage");
                }
            });
        },
        errorMessage:function() {
            var error = document.getElementById("error");
            error.textContent = "Please enter a correct value";
            error.style.color = "red";
        }
    }
});