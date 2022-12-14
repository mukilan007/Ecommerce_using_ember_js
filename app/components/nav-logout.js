import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
    tagName: '',
    actions: {
        logout() {
            this.sendAction('logout');
            $.ajax({
                url : "logout",
                method : 'GET',
                success: function(){
                    window.location.href = "#/login";
                    window.location.reload();
                }
            });
        }
      }
});