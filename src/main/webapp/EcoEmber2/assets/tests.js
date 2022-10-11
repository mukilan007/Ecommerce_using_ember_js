define('eco-ember2/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('eco-ember2/tests/controllers/add-product.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/add-product.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/add-product.js should pass jshint.');
  });
});
define('eco-ember2/tests/controllers/cart.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/cart.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/cart.js should pass jshint.\ncontrollers/cart.js: line 16, col 21, \'product\' is already defined.\n\n1 error');
  });
});
define('eco-ember2/tests/controllers/home.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/home.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/home.js should pass jshint.');
  });
});
define('eco-ember2/tests/controllers/login.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/login.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/login.js should pass jshint.');
  });
});
define('eco-ember2/tests/controllers/order-detail.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/order-detail.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/order-detail.js should pass jshint.');
  });
});
define('eco-ember2/tests/controllers/product-details.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/product-details.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/product-details.js should pass jshint.');
  });
});
define('eco-ember2/tests/controllers/signup.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/signup.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/signup.js should pass jshint.');
  });
});
define('eco-ember2/tests/controllers/vendor-delivered.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/vendor-delivered.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/vendor-delivered.js should pass jshint.');
  });
});
define('eco-ember2/tests/controllers/vendor-delivery.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/vendor-delivery.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/vendor-delivery.js should pass jshint.');
  });
});
define('eco-ember2/tests/controllers/vendor-home-page.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/vendor-home-page.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/vendor-home-page.js should pass jshint.');
  });
});
define('eco-ember2/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('eco-ember2/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('eco-ember2/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'eco-ember2/tests/helpers/start-app', 'eco-ember2/tests/helpers/destroy-app'], function (exports, _qunit, _ecoEmber2TestsHelpersStartApp, _ecoEmber2TestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _ecoEmber2TestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _ecoEmber2TestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('eco-ember2/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('eco-ember2/tests/helpers/resolver', ['exports', 'ember/resolver', 'eco-ember2/config/environment'], function (exports, _emberResolver, _ecoEmber2ConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _ecoEmber2ConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _ecoEmber2ConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('eco-ember2/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('eco-ember2/tests/helpers/start-app', ['exports', 'ember', 'eco-ember2/app', 'eco-ember2/config/environment'], function (exports, _ember, _ecoEmber2App, _ecoEmber2ConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _ecoEmber2ConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _ecoEmber2App['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('eco-ember2/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('eco-ember2/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('eco-ember2/tests/routes/add-product.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/add-product.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/add-product.js should pass jshint.');
  });
});
define('eco-ember2/tests/routes/cart.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/cart.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/cart.js should pass jshint.');
  });
});
define('eco-ember2/tests/routes/home.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/home.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/home.js should pass jshint.');
  });
});
define('eco-ember2/tests/routes/login.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/login.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass jshint.');
  });
});
define('eco-ember2/tests/routes/order-detail.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/order-detail.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/order-detail.js should pass jshint.');
  });
});
define('eco-ember2/tests/routes/product-details.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/product-details.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/product-details.js should pass jshint.');
  });
});
define('eco-ember2/tests/routes/signup.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/signup.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/signup.js should pass jshint.');
  });
});
define('eco-ember2/tests/routes/vendor-delivered.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/vendor-delivered.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/vendor-delivered.js should pass jshint.');
  });
});
define('eco-ember2/tests/routes/vendor-delivery.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/vendor-delivery.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/vendor-delivery.js should pass jshint.');
  });
});
define('eco-ember2/tests/routes/vendor-home-page.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/vendor-home-page.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/vendor-home-page.js should pass jshint.');
  });
});
define('eco-ember2/tests/test-helper', ['exports', 'eco-ember2/tests/helpers/resolver', 'ember-qunit'], function (exports, _ecoEmber2TestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_ecoEmber2TestsHelpersResolver['default']);
});
define('eco-ember2/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('eco-ember2/tests/unit/routes/add-product-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:add-product', 'Unit | Route | add product', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('eco-ember2/tests/unit/routes/add-product-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/add-product-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/add-product-test.js should pass jshint.');
  });
});
define('eco-ember2/tests/unit/routes/cart-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:cart', 'Unit | Route | cart', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('eco-ember2/tests/unit/routes/cart-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/cart-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/cart-test.js should pass jshint.');
  });
});
define('eco-ember2/tests/unit/routes/home-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:home', 'Unit | Route | home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('eco-ember2/tests/unit/routes/home-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/home-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home-test.js should pass jshint.');
  });
});
define('eco-ember2/tests/unit/routes/login-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:login', 'Unit | Route | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('eco-ember2/tests/unit/routes/login-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/login-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass jshint.');
  });
});
define('eco-ember2/tests/unit/routes/order-detail-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:order-detail', 'Unit | Route | order detail', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('eco-ember2/tests/unit/routes/order-detail-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/order-detail-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/order-detail-test.js should pass jshint.');
  });
});
define('eco-ember2/tests/unit/routes/product-details-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:product-details', 'Unit | Route | product details', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('eco-ember2/tests/unit/routes/product-details-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/product-details-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/product-details-test.js should pass jshint.');
  });
});
define('eco-ember2/tests/unit/routes/signup-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:signup', 'Unit | Route | signup', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('eco-ember2/tests/unit/routes/signup-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/signup-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/signup-test.js should pass jshint.');
  });
});
define('eco-ember2/tests/unit/routes/vendor-delivered-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:vendor-delivered', 'Unit | Route | vendor delivered', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('eco-ember2/tests/unit/routes/vendor-delivered-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/vendor-delivered-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/vendor-delivered-test.js should pass jshint.');
  });
});
define('eco-ember2/tests/unit/routes/vendor-delivery-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:vendor-delivery', 'Unit | Route | vendor delivery', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('eco-ember2/tests/unit/routes/vendor-delivery-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/vendor-delivery-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/vendor-delivery-test.js should pass jshint.');
  });
});
define('eco-ember2/tests/unit/routes/vendor-home-page-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:vendor-home-page', 'Unit | Route | vendor home page', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('eco-ember2/tests/unit/routes/vendor-home-page-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/vendor-home-page-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/vendor-home-page-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('eco-ember2/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map