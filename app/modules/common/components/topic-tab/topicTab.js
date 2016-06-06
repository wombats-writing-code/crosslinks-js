'use strict';

module.exports = function($stateParams) {
	return {
		restrict: 'E',
		template: require('html!./topicTab.html'),
		scope: {},
		link: function(scope, element, attrs, controller, transclude) {
//			console.log($stateParams.topicIdentifier);
			scope.topicId = $stateParams.topicIdentifier;
		}
	}
}
