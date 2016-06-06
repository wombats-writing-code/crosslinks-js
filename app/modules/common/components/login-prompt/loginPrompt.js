'use strict';

module.exports = function() {
	return {
		restrict: 'E',
		template: require('html!./loginPrompt.html'),
		transclude: true,
		scope: {
			user: '='
		},
		link: function(scope, element, attrs, controller) {}
	}
}
