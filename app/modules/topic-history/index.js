'use strict';

var topicHistoryController = require('./topicHistory.controller.js');

require('../common/models/logging');
require('../common/components/topic-tab');
require('../common/components/loading-text');
require('../common/components/log-entry');

angular.module('cl3.topicHistory', [
	'cl3.common.models.logging',
	'cl3.common.components.topicTab',
	'cl3.common.components.loadingText',
	'cl3.common.components.logEntry',
])
.controller( 'TopicHistoryController', ['$scope', '$stateParams', 'TopicRepository', 'LogRepository', topicHistoryController ]);

module.exports = {
	template: require('html!./topicHistory.html'),
	controller: topicHistoryController
};
