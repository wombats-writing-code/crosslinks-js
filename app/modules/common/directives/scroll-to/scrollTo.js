'use strict';

module.exports = function ($timeout, $state, $uiViewScroll) {
	return { 
		scope: {
			clickScrollTo: '@',
			watchScrollTo: '=',
		},
		link: function(scope, element, attrs) { 

			if (scope.clickScrollTo) {
				element.on('click', function(e) {
					var targetEl = document.getElementById(scope.clickScrollTo);
					if (targetEl) {
						$uiViewScroll(angular.element(targetEl));
						$state.transitionTo($state.current.name, {query: scope.clickScrollTo}, {
							reload: false
						});
					}
					return false;
				});
			} 

			scope.$watch('watchScrollTo', function(val) {
				if (val) {	
					// need the timeout because need to push it to
					// after dom finishes rendering 
					// in case there are any additional queries after it
					var firstParam = val.split('?')[0];

					$timeout( function() {
						var targetEl = document.getElementById(firstParam);
						if (targetEl) {
							$uiViewScroll(angular.element(targetEl));
						}
					}, 0);
				}
			});
		}
	}
}

