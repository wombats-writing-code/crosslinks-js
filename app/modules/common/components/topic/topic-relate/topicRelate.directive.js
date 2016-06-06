'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		template: require('html!./topicRelate.html'),
		scope: {
			relate: '=',
		},
		link: function(scope, element, attrs, controller, transclude) {
		}
	}
}
