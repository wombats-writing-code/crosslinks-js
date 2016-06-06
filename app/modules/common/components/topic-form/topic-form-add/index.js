
var directive = require('./topicFormAdd.directive.js');


// nested component: directive for feedbackButton
require('../../../directives');
require('../');

module.exports = angular.module('cl3.common.components.topicForm.topicFormAdd', [
	'cl3.common.directives',
	'cl3.common.components.topicForm',
])
.directive( 'topicFormAdd', directive)
