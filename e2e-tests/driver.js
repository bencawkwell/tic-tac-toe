'use strict';

var chromedriver = require('chromedriver');

module.exports = {
    // default timeout value in milliseconds for waitFor commands and implicit waitFor value for
    // expect assertions
    waitForConditionTimeout : 5000,

    before : function (done) {
        chromedriver.start();

        done();
    },

    after : function (done) {
        chromedriver.stop();

        done();
    }
};