'use strict';
module.exports = function searchTopicDirective() {
	return {
		restrict: 'E',
		template: require('html!./searchTopic.html'),
		scope: {
			topics: '=',
			inputPlaceholder: '@',
			uponSelect: '&',
		}, 
		controller: 'SearchTopicController',
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
