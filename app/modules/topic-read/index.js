'use strict';

var topicReadController = require('./topicRead.controller.js');
require("./topicRead.scss");

require('../common/models');

require('../common/components/topic');
require('../common/components/topic-tab');
require('../common/components/loading-text');
require('../common/components/explanation-block');
require('../common/components/visualization/topic-vis');		// uncomment when pra-vis is ready

angular.module('cl3.topicRead', [
	'cl3.common.models',

	'cl3.common.components.topic',
	'cl3.common.components.topicTab',
	'cl3.common.components.loadingText',
	'cl3.common.components.explanationBlock',
	'cl3.common.components.visualization.topicVis',
])
.controller( 'TopicReadController', ['$scope', '$q', '$stateParams', 'Utils', 'TopicRepository', topicReadController ]);

module.exports = {
	template: require('html!./topicRead.html'),
	controller: topicReadController
};
