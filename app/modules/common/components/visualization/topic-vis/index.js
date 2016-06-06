'use strict';

var directive = require('./topicVis.directive.js');
var service = require('./topicVis.service.js');
var render = require('./render.service.js');

require('./topicVis.scss');
require('../');

module.exports = angular.module('cl3.common.components.visualization.topicVis', [
	'cl3.common.components.visualization'
])
.service( 'TopicVis', ['Utils', 'TreeSearch', 'Alias', service]) 
.service( 'TopicVisRender', ['$timeout', 'Constants', 'Events', render])
.directive( 'topicVis', ['$window', 'Utils', 'TopicVis', 'TopicVisRender', directive])
