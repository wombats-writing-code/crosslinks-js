'use strict';

module.exports = function ($timeout, $window) {
	return { 
		scope: {
			mathjax: '=',
		},
		link: function(scope, element, attrs) { 
			if ($window.MathJax) {
				scope.$watch( 'mathjax', function(val) {
					if (val) {
						$timeout(function() { MathJax.Hub.Queue(["Typeset",MathJax.Hub, element[0]]); }, 200);
					}
				}, true);
			}

		}
	}
}

