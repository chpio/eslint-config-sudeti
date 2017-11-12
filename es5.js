'use strict';

module.exports = {
	extends: [
		'eslint-config-airbnb-base/legacy',
		'./rules.yaml',
	].map(require.resolve),
};
