import Ember from 'ember';
//import $ from 'jquery';

export default Ember.Component.extend({
    actions: {
        refresh() {
            window.location.reload();
        },
        whileLogout() {
            alert("User logout");
        }
//        logout() {
//            $.ajax({
//                url : "logout",
//                method : 'GET',
//                success: function(){
//                    window.location.href = "#/login";
//                    window.location.reload();
//                }
//            });
//        }
      }
});