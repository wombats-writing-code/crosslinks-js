'use strict';

var topicListController = require('./topicList.controller.js');
var service = require('./topicList.service.js');
var liveScroll = require('./liveScroll.directive.js');
require('ng-cache!./topicList.html');
require("./topicList.scss");

require('../common/models/topic-repository');
require('../common/components/search-topic');
require('../common/components/spinner');
require('../common/directives/scroll-to');

// uncomment when visualization is ready

module.exports = angular.module('cl3.topicList', [
	'cl3.common.models.topicRepository',
	'cl3.common.components.searchTopic',
	'cl3.common.components.spinner',
	'cl3.common.directives.scrollTo',
])
.service( 'TopicListService', service)
.directive( 'liveScroll', ['$window', '$timeout', 'TopicListService', liveScroll])
.controller( 'TopicListController', ['$scope', '$state', '$stateParams', '$q', 'TopicListService', 'TopicRepository', topicListController ]);
