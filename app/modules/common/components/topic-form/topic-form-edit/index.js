
var directive = require('./topicFormEdit.directive.js');


// nested component: directive for feedbackButton
require('../../../directives');
require('../');

module.exports = angular.module('cl3.common.components.topicForm.topicFormEdit', [
	'cl3.common.directives',
	'cl3.common.components.topicForm',
])
.directive( 'topicFormEdit', directive)
