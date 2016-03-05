'use strict';

module.exports = {
	extends: [
		'eslint-config-airbnb/base',
		'./rules.yaml',
	].map(require.resolve),
};
