'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		template: require('html!./topicAdvance.html'),
		scope: {
			advance: '=',
		},
		link: function(scope, element, attrs, controller, transclude) {
		}
	}
}
