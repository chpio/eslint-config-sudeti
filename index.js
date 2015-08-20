'use strict';

var objectAssign = require('object-assign');
var airbnbConfig = require('eslint-config-airbnb');
var myConfig = require('./config');

var plugins = airbnbConfig.plugins.filter(function(p) {return p !== 'react';});

var rules = objectAssign({}, airbnbConfig.rules);
Object.keys(rules)
	.filter(function(r) {return r.indexOf('react/') === 0;})
	.forEach(function(r) {delete rules[r];});

var conf = objectAssign(
	{},
	airbnbConfig,
	{
		plugins: plugins,
		rules: rules,
	}
);

module.exports = myConfig(conf);
