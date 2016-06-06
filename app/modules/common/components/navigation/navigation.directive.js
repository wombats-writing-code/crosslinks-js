'use strict';

module.exports = function() {
	return {
		restrict: 'E',
		templateUrl: 'navigation.html',
		transclude: true,
		scope: {},
		controller: 'NavigationController',
		link: function(scope, element, attrs, controller, transclude) {}
	}
}
