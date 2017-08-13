'use strict';
var test = require('selenium-webdriver/testing');
var DriverFactory = require('../lib/DriverFactory'),
    driverFactory;
global.test_timeout = 30000;

test.beforeEach(function() {
  this.timeout(global.test_timeout);
  driverFactory = new DriverFactory();
  global.driver = driverFactory.driver;
});

test.afterEach(function() {
  this.timeout(global.test_timeout);
  var testName = this.currentTest.fullTitle(),
      testResult = (this.currentTest.state === 'passed') ? true : false;
  driverFactory.quit(testName, testResult);
});