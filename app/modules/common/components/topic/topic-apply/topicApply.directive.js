'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		template: require('html!./topicApply.html'),
		scope: {
			apply: '=',
		},
		link: function(scope, element, attrs, controller, transclude) {
		}
	}
}
