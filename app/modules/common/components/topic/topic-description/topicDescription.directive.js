'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		template: require('html!./topicDescription.html'),
		scope: {
			description: '=',
		},
		link: function(scope, element, attrs, controller, transclude) {
		}
	}
}
