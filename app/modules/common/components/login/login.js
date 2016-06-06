'use strict';

module.exports = function() {
	return {
		restrict: 'E',
		templateUrl: 'login.html',
		scope: {
			user: '='
		},
		controller: 'LoginController',
		link: function(scope, element, attrs, controller) {}
	}
}
