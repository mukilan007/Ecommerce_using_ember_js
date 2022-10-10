"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('eco-ember2/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'eco-ember2/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _ecoEmber2ConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _ecoEmber2ConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _ecoEmber2ConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _ecoEmber2ConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('eco-ember2/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'eco-ember2/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _ecoEmber2ConfigEnvironment) {

  var name = _ecoEmber2ConfigEnvironment['default'].APP.name;
  var version = _ecoEmber2ConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('eco-ember2/controllers/array', ['exports', '@ember/controller'], function (exports, _emberController) {
  exports['default'] = _emberController['default'];
});
define('eco-ember2/controllers/cart', ['exports', 'ember', 'jquery'], function (exports, _ember, _jquery) {
    exports['default'] = _ember['default'].Controller.extend({
        actions: {
            refresh: function refresh() {
                window.location.reload();
            },
            generateorder: function generateorder() {
                alert(" Pay a Amount ");
                _jquery['default'].ajax({
                    url: "cart/order",
                    method: "POST",
                    cache: false,
                    success: function success() {
                        alert("ordered placed");
                        this.send("refresh");
                    },
                    error: function error() {
                        alert("error occurs");
                        this.send("refresh");
                    }
                });
                this.send("refresh");
            },
            logout: function logout() {
                _jquery['default'].ajax({
                    url: "logout",
                    method: 'GET',
                    success: function success() {
                        window.location.href = "/Eco";
                    }
                });
            }
        }
    });
});
define('eco-ember2/controllers/home', ['exports', 'ember', 'jquery'], function (exports, _ember, _jquery) {
    exports['default'] = _ember['default'].Controller.extend({
        init: function init() {
            this._super();
            var self = this;
            alert("home");
            _jquery['default'].ajax({
                url: "product",
                type: 'GET',
                headers: { Accept: "application/json; charset=utf-8", "Content-Type": "application/json; charset=utf-8" },
                success: function success(result) {
                    console.log(result);
                    var product = _jquery['default'].parseJSON(result);
                    self.set('itemData', product);
                    //                    for (let i = 0; i < product.length; i++) {
                    //                        page+=`
                    //                        <div class="outercard">
                    //                            <div class="innercard">
                    //                            <label><b>`+product[i].cateory_name+`</b></label><br>
                    //                                <button id="cardbtn"  onclick="redirectthis('`+product[i].cateory_name+`')"
                    //                                    value=`+product[i].cateory_name+`>Goto</button>
                    //                            </div>
                    //                        </div>`;
                    //                    }
                    //                    $('#itemData').html(page);
                }
            });
        },
        actions: {
            refresh: function refresh() {
                window.location.reload();
            },
            redirectthis: function redirectthis(value) {
                sessionStorage.clear();
                sessionStorage.setItem("catname", value);
                window.location.href = "/EcoEmber2/ProductDetails";
            }
        }
    });
});
define('eco-ember2/controllers/login', ['exports', 'ember', 'jquery'], function (exports, _ember, _jquery) {
    exports['default'] = _ember['default'].Controller.extend({
        //    ajax: Ember.inject.service(),
        actions: {
            getUser: function getUser() {
                alert('Hello');
                document.getElementById("error").value = "";
                var emailId = document.getElementById("emailId").value;
                var password = document.getElementById("password").value;
                //            this.get('ajax').request('/login', {
                //                    method: 'GET',
                //                    data: {"payload" : JSON.stringify({"e_mail": emailId, "password": password})},
                //                    success: function(usertype, name){
                //                        if(usertype === "isadmin"){
                //                            window.location.href = "/VendorHomePage.html";
                //                        }
                //                        else if(usertype === "notadmin") {
                //                            window.location.href = "/Home.html"; }
                //                        alert("Welcome " +  name);
                //                    },
                //                    error: function(a, msg){
                //                        alert(msg);
                //                    }
                //                  });
                _ember['default'].$.ajax({
                    url: "login",
                    method: "GET",
                    type: "json",
                    data: { "payload": JSON.stringify({ "e_mail": emailId, "password": password }) },
                    cache: false,
                    success: function success(usertype, name) {
                        if (usertype === "isadmin") {
                            window.location.href = "/VendorHomePage.html";
                        } else if (usertype === "notadmin") {
                            window.location.href = "/Home.html";
                        }
                        alert("Welcome " + name);
                        //            myFunction();
                    },
                    error: function error(a, msg) {
                        alert(msg);
                        //                    errorMessage();
                    }
                });
            },
            errorMessage: function errorMessage() {
                var error = document.getElementById("error");
                error.textContent = "Please enter a correct value";
                error.style.color = "red";
            }
        }
    });
});
define('eco-ember2/controllers/object', ['exports', '@ember/controller'], function (exports, _emberController) {
  exports['default'] = _emberController['default'];
});
define('eco-ember2/controllers/order-detail', ['exports', 'ember'], function (exports, _ember) {
    //import $ from 'jquery';

    exports['default'] = _ember['default'].Controller.extend({
        actions: {
            refresh: function refresh() {
                window.location.reload();
            }
        }
    });
});
define('eco-ember2/controllers/product-details', ['exports', 'ember'], function (exports, _ember) {
    //import $ from 'jquery';

    exports['default'] = _ember['default'].Controller.extend({
        actions: {
            refresh: function refresh() {
                window.location.reload();
            }
        }
    });
});
define('eco-ember2/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'eco-ember2/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _ecoEmber2ConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_ecoEmber2ConfigEnvironment['default'].APP.name, _ecoEmber2ConfigEnvironment['default'].APP.version)
  };
});
define('eco-ember2/initializers/export-application-global', ['exports', 'ember', 'eco-ember2/config/environment'], function (exports, _ember, _ecoEmber2ConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_ecoEmber2ConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _ecoEmber2ConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_ecoEmber2ConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('eco-ember2/router', ['exports', 'ember', 'eco-ember2/config/environment'], function (exports, _ember, _ecoEmber2ConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _ecoEmber2ConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('login');
    this.route('AddProduct');
    this.route('Cart');
    this.route('Home');
    this.route('OrderDetail');
    this.route('ProductDetails');
    this.route('Signup');
    this.route('VendorDelivered');
    this.route('VendorDelivery');
    this.route('VendorHomePage');
  });

  exports['default'] = Router;
});
define('eco-ember2/routes/add-product', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('eco-ember2/routes/cart', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('eco-ember2/routes/home', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('eco-ember2/routes/login', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('eco-ember2/routes/order-detail', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('eco-ember2/routes/product-details', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('eco-ember2/routes/signup', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('eco-ember2/routes/vendor-delivered', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('eco-ember2/routes/vendor-delivery', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('eco-ember2/routes/vendor-home-page', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("eco-ember2/templates/add-product", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 38,
            "column": 0
          }
        },
        "moduleName": "eco-ember2/templates/add-product.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "topnav");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "/Eco/VendorHomePage.html");
        var el3 = dom.createTextNode("Home");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "active");
        dom.setAttribute(el2, "href", "/Eco/AddProduct.html");
        var el3 = dom.createTextNode("Add");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "reload");
        dom.setAttribute(el2, "href", "/Eco/VendorDelivery.html");
        var el3 = dom.createTextNode("Delivery");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "reload");
        dom.setAttribute(el2, "href", "/Eco/VendorDelivered.html");
        var el3 = dom.createTextNode("Delivered");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "reload");
        dom.setAttribute(el2, "onclick", "logout()");
        var el3 = dom.createTextNode("Logout");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("form");
        dom.setAttribute(el2, "id", "addform");
        dom.setAttribute(el2, "onsubmit", "event.preventDefault();vendorAdd();");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "vendorcontainer");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "id", "vendor_inner_container1");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "id", "error");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        var el6 = dom.createElement("b");
        var el7 = dom.createTextNode("Category Name");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "text");
        dom.setAttribute(el5, "name", "categoryname");
        dom.setAttribute(el5, "id", "categoryname");
        dom.setAttribute(el5, "placeholder", "Category");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        var el6 = dom.createElement("b");
        var el7 = dom.createTextNode("Type");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "text");
        dom.setAttribute(el5, "name", "type");
        dom.setAttribute(el5, "id", "type");
        dom.setAttribute(el5, "placeholder", "Type of Category");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        var el6 = dom.createElement("b");
        var el7 = dom.createTextNode("Brand Name");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "text");
        dom.setAttribute(el5, "name", "brandname");
        dom.setAttribute(el5, "id", "brandname");
        dom.setAttribute(el5, "placeholder", "Product Brand");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        var el6 = dom.createElement("b");
        var el7 = dom.createTextNode("Product Name");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "text");
        dom.setAttribute(el5, "name", "productname");
        dom.setAttribute(el5, "id", "productname");
        dom.setAttribute(el5, "placeholder", "Product Name");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        var el6 = dom.createElement("b");
        var el7 = dom.createTextNode("Detail");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("textarea");
        dom.setAttribute(el5, "rows", "4");
        dom.setAttribute(el5, "cols", "20");
        dom.setAttribute(el5, "name", "detail");
        dom.setAttribute(el5, "id", "detail");
        dom.setAttribute(el5, "placeholder", "About it");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        var el6 = dom.createElement("b");
        var el7 = dom.createTextNode("Size");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "number");
        dom.setAttribute(el5, "name", "size");
        dom.setAttribute(el5, "id", "size");
        dom.setAttribute(el5, "placeholder", "Dimension");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        var el6 = dom.createElement("b");
        var el7 = dom.createTextNode("Color");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "text");
        dom.setAttribute(el5, "name", "color");
        dom.setAttribute(el5, "id", "color");
        dom.setAttribute(el5, "placeholder", "Color");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        var el6 = dom.createElement("b");
        var el7 = dom.createTextNode("Price");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "number");
        dom.setAttribute(el5, "name", "price");
        dom.setAttribute(el5, "id", "price");
        dom.setAttribute(el5, "placeholder", "Price");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("label");
        var el6 = dom.createElement("b");
        var el7 = dom.createTextNode("Quantity");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "number");
        dom.setAttribute(el5, "name", "quantity");
        dom.setAttribute(el5, "id", "quantity");
        dom.setAttribute(el5, "placeholder", "Product Available");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "id", "vendor_inner_container2");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "submit");
        dom.setAttribute(el5, "id", "submit");
        dom.setAttribute(el5, "value", "Add");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("eco-ember2/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "eco-ember2/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("<h2 id=\"title\">Welcome to Ember app</h2>");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [3, 0], [3, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("eco-ember2/templates/cart", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 29,
            "column": 0
          }
        },
        "moduleName": "eco-ember2/templates/cart.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "topnav");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "class", "reload");
        var el4 = dom.createTextNode("Eco");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "/EcoEmber2/Home");
        var el4 = dom.createTextNode("Home");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "class", "active");
        dom.setAttribute(el3, "href", "/EcoEmber2/Cart");
        var el4 = dom.createTextNode("Cart");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "/EcoEmber2/OrderDetail");
        var el4 = dom.createTextNode("Your Order");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        var el4 = dom.createTextNode("Logout");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("table");
        dom.setAttribute(el3, "id", "cartlist");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("thead");
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Product Name");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Brand Name");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Color");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Size");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Quantity");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Price");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Total Amount");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tbody");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "itemData2");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "btncart");
        var el3 = dom.createElement("b");
        var el4 = dom.createTextNode("Order");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [3]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element1, [9]);
        var element4 = dom.childAt(element0, [9]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createElementMorph(element2);
        morphs[2] = dom.createElementMorph(element3);
        morphs[3] = dom.createElementMorph(element4);
        return morphs;
      },
      statements: [["content", "topnavbar", ["loc", [null, [2, 4], [2, 17]]]], ["element", "action", ["refresh"], [], ["loc", [null, [4, 26], [4, 46]]]], ["element", "action", ["logout"], [], ["loc", [null, [8, 11], [8, 30]]]], ["element", "action", ["generateorder"], [], ["loc", [null, [27, 29], [27, 55]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("eco-ember2/templates/components/topnavbar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 6
          }
        },
        "moduleName": "eco-ember2/templates/components/topnavbar.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "topnav");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "reload");
        dom.setAttribute(el2, "onclick", "refresh()");
        var el3 = dom.createTextNode("Eco");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "active");
        dom.setAttribute(el2, "href", "/EcoEmber2/Home.html");
        var el3 = dom.createTextNode("Home");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "/EcoEmber2/Cart.html");
        var el3 = dom.createTextNode("Cart");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "/EcoEmber2/OrderDetail.html");
        var el3 = dom.createTextNode("Your Order");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "onclick", "logout()");
        var el3 = dom.createTextNode("Logout");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("eco-ember2/templates/home", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 8
            },
            "end": {
              "line": 20,
              "column": 8
            }
          },
          "moduleName": "eco-ember2/templates/home.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "outercard");
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "innercard");
          var el3 = dom.createTextNode("\n                    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("label");
          var el4 = dom.createElement("b");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3, "id", "cardbtn");
          var el4 = dom.createTextNode("Goto");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1]);
          var element1 = dom.childAt(element0, [4]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1, 0]), 0, 0);
          morphs[1] = dom.createAttrMorph(element1, 'value');
          morphs[2] = dom.createElementMorph(element1);
          return morphs;
        },
        statements: [["content", "p.cateory_name", ["loc", [null, [15, 30], [15, 48]]]], ["attribute", "value", ["get", "p.cateory_name", ["loc", [null, [17, 36], [17, 50]]]]], ["element", "action", ["redirectthis", ["get", "p.cateory_name", ["loc", [null, [16, 67], [16, 81]]]]], [], ["loc", [null, [16, 42], [16, 83]]]]],
        locals: ["p"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 24,
            "column": 0
          }
        },
        "moduleName": "eco-ember2/templates/home.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "topnav");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "reload");
        var el3 = dom.createTextNode("Eco");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "active");
        dom.setAttribute(el2, "href", "/EcoEmber2/Home");
        var el3 = dom.createTextNode("Home");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "/EcoEmber2/Cart");
        var el3 = dom.createTextNode("Cart");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "/EcoEmber2/OrderDetail");
        var el3 = dom.createTextNode("Your Order");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "onclick", "logout()");
        var el3 = dom.createTextNode("Logout");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "catname");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row text-center py-5");
        dom.setAttribute(el2, "id", "itemData");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [2, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createElementMorph(element2);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4, 3]), 1, 1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "topnavbar", ["loc", [null, [1, 0], [1, 13]]]], ["element", "action", ["refresh"], [], ["loc", [null, [3, 22], [3, 42]]]], ["block", "each", [["get", "this.itemData", ["loc", [null, [12, 16], [12, 29]]]]], [], 0, null, ["loc", [null, [12, 8], [20, 17]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("eco-ember2/templates/login", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 21,
            "column": 0
          }
        },
        "moduleName": "eco-ember2/templates/login.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("head");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("link");
        dom.setAttribute(el2, "rel", "stylesheet");
        dom.setAttribute(el2, "href", "app/styles/login.css");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("form");
        dom.setAttribute(el1, "id", "signform");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "id", "inner_container1");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "id", "error");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        var el5 = dom.createElement("b");
        var el6 = dom.createTextNode("Email Id");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4, "type", "email");
        dom.setAttribute(el4, "name", "emailId");
        dom.setAttribute(el4, "id", "emailId");
        dom.setAttribute(el4, "placeholder", "E-Mail Id");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        var el5 = dom.createElement("b");
        var el6 = dom.createTextNode("Password");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4, "type", "password");
        dom.setAttribute(el4, "name", "password");
        dom.setAttribute(el4, "id", "password");
        dom.setAttribute(el4, "placeholder", "Password");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "/Eco/Signup.html");
        var el5 = dom.createTextNode("Create Account...");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "id", "inner_container2");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4, "type", "submit");
        dom.setAttribute(el4, "id", "submit");
        dom.setAttribute(el4, "value", "Sign In");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2, 1, 3, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        return morphs;
      },
      statements: [["element", "action", ["getUser"], [], ["loc", [null, [15, 20], [15, 40]]]], ["content", "outlet", ["loc", [null, [20, 0], [20, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("eco-ember2/templates/order-detail", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 30,
            "column": 0
          }
        },
        "moduleName": "eco-ember2/templates/order-detail.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "topnav");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "class", "reload");
        var el4 = dom.createTextNode("Eco");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "/EcoEmber2/Home");
        var el4 = dom.createTextNode("Home");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "/EcoEmber2/Cart");
        var el4 = dom.createTextNode("Cart");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "class", "active");
        dom.setAttribute(el3, "href", "/EcoEmber2/OrderDetail");
        var el4 = dom.createTextNode("Your Order");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "onclick", "logout()");
        var el4 = dom.createTextNode("Logout");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("table");
        dom.setAttribute(el3, "id", "cartlist");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("thead");
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Product Name");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Brand Name");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Color");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Size");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Quantity");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Price");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Total Amount");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tbody");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "orderitem");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "btncart");
        dom.setAttribute(el2, "onclick", "generateinvoice();");
        var el3 = dom.createElement("b");
        var el4 = dom.createTextNode("Invoice");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [3, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [["content", "topnavbar", ["loc", [null, [2, 4], [2, 17]]]], ["element", "action", ["refresh"], [], ["loc", [null, [4, 26], [4, 46]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("eco-ember2/templates/product-details", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 6
          }
        },
        "moduleName": "eco-ember2/templates/product-details.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "topnav");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "class", "reload");
        var el4 = dom.createTextNode("Eco");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "/EcoEmber2/Home");
        var el4 = dom.createTextNode("Home");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "/EcoEmber2/Cart");
        var el4 = dom.createTextNode("Cart");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "/EcoEmber2/OrderDetail");
        var el4 = dom.createTextNode("Your Order");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "onclick", "logout()");
        var el4 = dom.createTextNode("Logout");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "catname");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row text-center py-5");
        dom.setAttribute(el2, "id", "itemData1");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 1]);
        var morphs = new Array(1);
        morphs[0] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [["element", "action", ["refresh"], [], ["loc", [null, [3, 26], [3, 46]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("eco-ember2/templates/signup", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 37,
            "column": 0
          }
        },
        "moduleName": "eco-ember2/templates/signup.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("form");
        dom.setAttribute(el1, "id", "signform");
        dom.setAttribute(el1, "onsubmit", "event.preventDefault();setUser();");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "id", "inner_container1");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "id", "error");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        var el5 = dom.createElement("b");
        var el6 = dom.createTextNode("Name");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4, "type", "text");
        dom.setAttribute(el4, "name", "name");
        dom.setAttribute(el4, "id", "name");
        dom.setAttribute(el4, "placeholder", "Username");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        var el5 = dom.createElement("b");
        var el6 = dom.createTextNode("Email Id");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4, "type", "email");
        dom.setAttribute(el4, "name", "emailId");
        dom.setAttribute(el4, "id", "emailId");
        dom.setAttribute(el4, "placeholder", "E-Mail Id");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        var el5 = dom.createElement("b");
        var el6 = dom.createTextNode("Password");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4, "type", "password");
        dom.setAttribute(el4, "name", "password");
        dom.setAttribute(el4, "id", "password");
        dom.setAttribute(el4, "placeholder", "Password");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        var el5 = dom.createElement("b");
        var el6 = dom.createTextNode("Confirm Password");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4, "type", "password");
        dom.setAttribute(el4, "name", "cpassword");
        dom.setAttribute(el4, "id", "cpassword");
        dom.setAttribute(el4, "placeholder", "Re-type Password");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        var el5 = dom.createElement("b");
        var el6 = dom.createTextNode("Date of Birth");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4, "type", "date");
        dom.setAttribute(el4, "name", "dob");
        dom.setAttribute(el4, "id", "dob");
        dom.setAttribute(el4, "placeholder", "Birth date");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        var el5 = dom.createElement("b");
        var el6 = dom.createTextNode("Address");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("textarea");
        dom.setAttribute(el4, "rows", "4");
        dom.setAttribute(el4, "cols", "20");
        dom.setAttribute(el4, "name", "address");
        dom.setAttribute(el4, "id", "address");
        dom.setAttribute(el4, "placeholder", "Your Address");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        var el5 = dom.createElement("b");
        var el6 = dom.createTextNode("Phone No");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4, "type", "tel");
        dom.setAttribute(el4, "name", "phone");
        dom.setAttribute(el4, "id", "phone");
        dom.setAttribute(el4, "placeholder", "Mobile Number");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        var el5 = dom.createElement("b");
        var el6 = dom.createTextNode("Signup as a Vendor");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4, "type", "checkbox");
        dom.setAttribute(el4, "id", "admin");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("Have Account?");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "/Eco/Login2.html");
        var el6 = dom.createTextNode("Back to Sign in...");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "id", "inner_container2");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4, "type", "submit");
        dom.setAttribute(el4, "id", "submit");
        dom.setAttribute(el4, "value", "Sign In");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "snackbar");
        var el2 = dom.createTextNode("Some text some message..");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("eco-ember2/templates/vendor-delivered", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 26,
            "column": 0
          }
        },
        "moduleName": "eco-ember2/templates/vendor-delivered.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "topnav");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "/Eco/VendorHomePage.html");
        var el4 = dom.createTextNode("Home");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "/Eco/AddProduct.html");
        var el4 = dom.createTextNode("Add");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "class", "reload");
        dom.setAttribute(el3, "href", "/Eco/VendorDelivery.html");
        var el4 = dom.createTextNode("Delivery");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "class", "active");
        dom.setAttribute(el3, "class", "reload");
        dom.setAttribute(el3, "onclick", "getvendordeatil('delivered');");
        var el4 = dom.createTextNode("Delivered");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "class", "reload");
        dom.setAttribute(el3, "onclick", "logout()");
        var el4 = dom.createTextNode("Logout");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("form");
        dom.setAttribute(el2, "id", "addform");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("table");
        dom.setAttribute(el3, "id", "cartlist");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("thead");
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Product Name");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Brand Name");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Color");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Size");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Quantity");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Price");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tbody");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("eco-ember2/templates/vendor-delivery", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 26,
            "column": 0
          }
        },
        "moduleName": "eco-ember2/templates/vendor-delivery.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "topnav");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "/Eco/VendorHomePage.html");
        var el4 = dom.createTextNode("Home");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "/Eco/AddProduct.html");
        var el4 = dom.createTextNode("Add");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "class", "active");
        dom.setAttribute(el3, "class", "reload");
        dom.setAttribute(el3, "onclick", "getvendordeatil('ordered');");
        var el4 = dom.createTextNode("Delivery");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "class", "reload");
        dom.setAttribute(el3, "href", "/Eco/VendorDelivered.html");
        var el4 = dom.createTextNode("Delivered");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "class", "reload");
        dom.setAttribute(el3, "onclick", "logout()");
        var el4 = dom.createTextNode("Logout");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("form");
        dom.setAttribute(el2, "id", "addform");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("table");
        dom.setAttribute(el3, "id", "cartlist");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("thead");
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Product Name");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Brand Name");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Color");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Size");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Quantity");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Price");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Delivered");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tbody");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("eco-ember2/templates/vendor-home-page", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 26,
            "column": 0
          }
        },
        "moduleName": "eco-ember2/templates/vendor-home-page.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "topnav");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "class", "active");
        dom.setAttribute(el3, "href", "/Eco/VendorHomePage.html");
        var el4 = dom.createTextNode("Home");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "/Eco/AddProduct.html");
        var el4 = dom.createTextNode("Add");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "class", "reload");
        dom.setAttribute(el3, "href", "/Eco/VendorDelivery.html");
        var el4 = dom.createTextNode("Delivery");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "class", "reload");
        dom.setAttribute(el3, "href", "/Eco/VendorDelivered.html");
        var el4 = dom.createTextNode("Delivered");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "class", "reload");
        dom.setAttribute(el3, "onclick", "logout()");
        var el4 = dom.createTextNode("Logout");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("form");
        dom.setAttribute(el2, "id", "addform");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("table");
        dom.setAttribute(el3, "id", "cartlist");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("thead");
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("tr");
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Product Name");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Brand Name");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Color");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Size");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Quantity");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("th");
        var el7 = dom.createTextNode("Price");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("tbody");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('eco-ember2/config/environment', ['ember'], function(Ember) {
  var prefix = 'eco-ember2';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("eco-ember2/app")["default"].create({"name":"eco-ember2","version":"0.0.0+"});
}

/* jshint ignore:end */
//# sourceMappingURL=eco-ember2.map