'use strict';

module.exports = {
	extends: [
		'eslint-config-airbnb/legacy',
		'./rules.yaml',
	].map(require.resolve),
};
