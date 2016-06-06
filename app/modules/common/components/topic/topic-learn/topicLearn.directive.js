'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		template: require('html!./topicLearn.html'),
		scope: {
			learn: '=',
		},
		link: function(scope, element, attrs, controller, transclude) {
		}
	}
}
