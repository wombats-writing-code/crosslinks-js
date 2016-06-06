
var topicFormService = require('./topicForm.service.js');
var topicFormController = require('./topicForm.controller.js');
require("./topicForm.scss");


// nested component: directive for feedbackButton
require('../../directives');
require('../explanation-block');
require('../search-topic');
require('../search-subject');

module.exports = angular.module('cl3.common.components.topicForm', [
	'cl3.common.directives',
	'cl3.common.components.searchTopic',
	'cl3.common.components.explanationBlock',
	'cl3.common.components.searchSubject'
])
.service( 'TopicForm', topicFormService)
.controller( 'TopicFormController', ['$scope', '$state', 'TopicForm', topicFormController])
