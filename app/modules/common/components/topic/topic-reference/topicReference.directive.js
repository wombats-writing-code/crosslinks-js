'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		template: require('html!./topicReference.html'),
		scope: {
			reference: '=',
		},
		link: function(scope, element, attrs, controller, transclude) {
		}
	}
}
