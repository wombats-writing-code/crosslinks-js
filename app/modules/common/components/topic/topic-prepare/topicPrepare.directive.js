'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		template: require('html!./topicPrepare.html'),
		scope: {
			prepare: '=',
		},
		link: function(scope, element, attrs, controller, transclude) {
		}
	}
}
