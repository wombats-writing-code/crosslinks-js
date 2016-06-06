'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		template: require('html!./topicFormAdd.html'),
		scope: {
			formTopic: '=',
			saveFn: '&',
			deleteFn: '&',
			topics: '=',
			subjects: '=',
			topicAdd: '@',
		}, 
		controller: 'TopicFormController',		// share controller with topic-form-edit
		link: function(scope, element, attrs, controller, transclude) {
			scope.isFormDirty = false;
			element.on('change', function(e) {
				scope.setFormChanged();
				scope.$apply();
			});
		}
	}
}
