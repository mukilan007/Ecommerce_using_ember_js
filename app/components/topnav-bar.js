import Ember from 'ember';
//import $ from 'jquery';

export default Ember.Component.extend({
    didInitAttrs(){
        console.log("didInitAttrs2: called after attrs created and passed attrs are guaranteed. ");
    },
    didInsertElement() {
            console.log("didInsertElement2: called after created and inserted into the DOM. ");
//            alert("didInsertElement2: called after created and inserted into the DOM. ");
    },
    didReceiveAttrs() {
        console.log("didReceiveAttrs2: called after attrs init and re-render. ");
//        alert("didReceiveAttrs2: called after attrs init and re-render. ");
    },
    didRender() {
        console.log("didRender2: called after init and subsequent re-render. ");
//        alert("didRender2: called after init and subsequent re-render. ");
    },
    didUpdate() {
        console.log("didUpdate2: called after update and re-render itself. ");
//        alert("didUpdate2: called after update and re-render itself. ");
    },
    didUpdateAttrs() {
        console.log("didUpdateAttrs2: called after attrs changes. ");
//        alert("didUpdateAttrs2: called after attrs changes. ");
    },
    didDestroyElement() {
        console.log("didDestroyElement2: called after destory. ");
//        alert("didDestroyElement2: called after destory. ");
    },
    willDestroyElement() {
        console.log("willDestroyElement2: called before destory. ");
//        alert("willDestroyElement2: called before destory. ");
     },
    willInsertElement() {
        console.log("willInsertElement2: called going to insert into the DOM. ");
//        alert("willInsertElement2: called going to insert into the DOM. ");
    },
    willRender() {
        console.log("willRender2: called before init and subsequent re-render. ");
//        alert("willRender2: called before init and subsequent re-render. ");
    },
    willUpdate() {
        console.log("willUpdate2: called about update and re-render. ");
//        alert("willUpdate2: called about update and re-render. ");
    },
    willClearRender() {
        console.log("willClearRender2: called about render. ");
//        alert("willClearRender2: called about render. ");
    },
    actions: {
        refresh() {
            var message = "Hello";
            this.set('setupdate', message);
//            window.location.reload();
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