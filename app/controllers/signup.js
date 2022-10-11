import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
    actions: {
        setUser:function() {
            var name = document.getElementById("name").value;
            var emailId = document.getElementById("emailId").value;
            var password = document.getElementById("password").value;
            var cpassword = document.getElementById("cpassword").value;
            var dob = document.getElementById("dob").value;
            var address = document.getElementById("address").value;
            var phone = document.getElementById("phone").value;
            var admin = document.getElementById("admin").checked;
            console.log(admin);
            if(password === cpassword) {
                var payload = {"name": name,
                    "e_mail": emailId,
                    "password": password,
                    "date_of_birth": dob,
                    "address": address,
                    "phone": phone
                    };
                alert(name + ", Confirm to Create Account");
                $.ajax({
                    url: "login",
                    method: "POST",
                    type: "json",
                    data: {"payload" : JSON.stringify(payload),
                            "is_admin": JSON.stringify(admin)},
                    cache: false,
                    success: function(usertype, name){
                        if(usertype === "isadmin"){
                            window.location.href = "#/VendorHomePage";
                        }
                        else if(usertype === "notadmin") {
                            window.location.href = "#/Home";
                        }
                        alert("Welcome " +  name);
                    },
                    error: function(){
                        alert("Account not created, Try again.");
                    }
                });
            }else {
//                this.send("errorMessage");
                var error = document.getElementById("error");
                error.textContent = "Please enter a correct value";
                error.style.color = "red";
            }
        },
    }
});
