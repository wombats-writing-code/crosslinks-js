'use strict';

var topicEditController = require('./topicEdit.controller.js');
var service = require('./topicEdit.service.js');
require("./topicEdit.scss");

require('../common/models');
require('../common/models/logging');
require('../common/components/topic-tab');
require('../common/components/topic-form/topic-form-edit');
require('../common/components/loading-text');
require('../common/components/login-prompt');
require('../common/directives');

angular.module('cl3.topicEdit', [
	'cl3.common.models',
	'cl3.common.models.logging',
	'cl3.common.components.topicTab',
	'cl3.common.components.topicForm.topicFormEdit',
	'cl3.common.components.loadingText',
	'cl3.common.components.loginPrompt',
	'cl3.common.directives',
])
.service( 'TopicEditService', service)
.controller( 'TopicEditController', ['$scope', '$q', '$state', '$stateParams', 'Reference', 'TopicRepository', 'SubjectRepository', 'Differ', 'Logger', 'Authentication', topicEditController ]);

module.exports = {
	template: require('html!./topicEdit.html'),
	controller: topicEditController
};
