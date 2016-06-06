
// core side-bar
var navigationDirective = require('./navigation.directive.js');
var navigationController = require('./navigation.controller.js');
require('ng-cache!./navigation.html');
require("./navigation.scss");

// nested component: side-bar
require('../login');
// nested component: search-select-topics
require('../search-topic');
require('../../models/topic-repository');

module.exports = angular.module('cl3.common.components.navigation', [
	'cl3.common.models.topicRepository',
	'cl3.common.components.login',
	'cl3.common.components.searchTopic',
])
.directive( 'navigation', navigationDirective)
.controller( 'NavigationController', ['$window', '$scope', '$state', 'TopicRepository', 'Authentication', navigationController])
