'use strict';

module.exports = {
	extends: [
		'eslint-config-airbnb',
		'./rules.yaml',
	].map(require.resolve),
};
