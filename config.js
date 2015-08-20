'use strict';

var objectAssign = require('object-assign');

var rules = {
	'indent': [2, 'tab', {SwitchCase: 1}],
	'brace-style': [2, '1tbs', {allowSingleLine: false}],
	'yoda': 0,
	'max-len': [1, 80, 2],
	'no-warning-comments': [1, {location: 'anywhere'}],
};

module.exports = function(origConf) {
	return objectAssign(
		{},
		origConf,
		{
			rules: objectAssign({}, origConf.rules, rules),
		}
	);
};
