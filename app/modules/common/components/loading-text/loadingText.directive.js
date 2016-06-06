'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'loadingText.html',
		scope: {
			show: '='
		},
		link: function(scope, element, attrs, controller, transclude) {}
	}
}
