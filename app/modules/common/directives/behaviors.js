'use strict';

angular.module('cl3.common')

.directive('stopEvent', function() {
	return {
		priority: 1001,
		link: function(scope, element, attrs) {
			element.on('keydown keyup', function(e) {
//				console.log(e.keyCode);
				if (e.keyCode == 13) {
					console.log('enter key pressed');
					e.preventDefault();
					e.stopImmediatePropagation();
					return false;
				}
			});
		}
	}
});
