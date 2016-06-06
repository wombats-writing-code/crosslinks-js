'use strict';

var mainController = require('./main.controller.js');

require('ng-cache!./main.html');
require("./main.scss");

require('../common/components/loading-text');
require('../common/components/log-entry');
require('../common/models/logging');
require('../common/models/topic-repository');
require('../common/components/visualization/global-vis');


module.exports = angular.module('cl3.main', [
	'cl3.common.models.logging',
	'cl3.common.models.topicRepository',

	'cl3.common.components.loadingText',
	'cl3.common.components.logEntry',

	'cl3.common.components.visualization.globalVis',
])
.controller( 'MainController', ['$scope', '$stateParams', '$q', 'LogRepository', 'TopicRepository', '$state', mainController ]);
