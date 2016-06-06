'use strict';

var editListController = require('./editList.controller.js');

require('../common/models/logging');
require('../common/components/log-entry');
require('../common/components/login-prompt');

angular.module('cl3.editList', [
	'cl3.common.models.logging',
	'cl3.common.components.logEntry',
	'cl3.common.components.loginPrompt',
])
.controller( 'EditListController', ['$scope', 'LogRepository', 'Authentication', editListController ]);

module.exports = {
	template: require('html!./editList.html'),
	controller: editListController
};
