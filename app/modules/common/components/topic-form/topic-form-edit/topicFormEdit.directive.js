'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		template: require('html!./topicFormEdit.html'),
		scope: {
			formTopic: '=',
			saveFn: '&',
			deleteFn: '&',
			topics: '=',
			subjects: '=',
		}, 
		controller: 'TopicFormController',
		link: function(scope, element, attrs, controller, transclude) {
			scope.isFormDirty = false;
			element.on('change', function(e) {
				scope.setFormChanged();
				scope.$apply();
			});
		}
	}
}
