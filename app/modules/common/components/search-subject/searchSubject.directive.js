'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		template: require('html!./searchSubject.html'),
		scope: {
			subjects: '=',
			inputPlaceholder: '@',
			uponSelect: '&',
		}, 
		controller: 'SearchSubjectController',
		link: function(scope, element, attrs, controller, transclude) {
			element.on('keyup', function(e) {
				if (e.keyCode == 27) {
					scope.searchResults = [];
					scope.searchQuery = '';
					scope.$apply();
				}
			});
		}
	}
}
