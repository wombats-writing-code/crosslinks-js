'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		template: require('html!./logEntry.html'),
		scope: {
			entry: '='
		}, 
		link: function(scope, element, attrs, controller, transclude) {}
	}
}
