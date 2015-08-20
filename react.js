'use strict';

var airbnbConfig = require('eslint-config-airbnb');
var myConfig = require('./config');

module.exports = myConfig(airbnbConfig);
