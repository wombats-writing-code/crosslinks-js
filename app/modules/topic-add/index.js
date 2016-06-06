'use strict';

var topicAddController = require('./topicAdd.controller.js');

// nested component: topic-form
require('../common/components/topic-form/topic-form-add');
require('../common/components/login-prompt');
require('../common/models');
require('../common/models/logging');

angular.module('cl3.topicAdd', [
	'cl3.common.components.topicForm.topicFormAdd',
	'cl3.common.components.loginPrompt',
	'cl3.common.models',
	'cl3.common.models.logging',
])
.controller( 'TopicAddController', ['$scope', '$state', 'Topic', 'Reference', 'TopicRepository', 'SubjectRepository', 'Logger', 'Authentication', topicAddController ]);

module.exports = {
	template: require('html!./topicAdd.html'),
	controller: topicAddController
};
