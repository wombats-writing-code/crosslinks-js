'use strict';

module.exports = function ($window, Utils, GlobalVis, GlobalVisRender) {
	return {
		restrict: 'E',
		template: require('html!./globalVis.html'),
		scope: {
			nodes: '=',
			edges: '=',
			currentFocus: '='
		}, 
		link: function(scope, element, attrs, transclude) {

			var isMinWidth = function() {
				var minWidth = 800;
				return $window.innerWidth > minWidth || $window.clientWidth > minWidth;
			}

			Utils.loadD3()
			.then( function(res) {
				scope.isD3Loaded = true;
			});

			if (isMinWidth()) {
				scope.$watchGroup(['nodes', 'edges', 'isD3Loaded'], function(values) {

					if (values[0] && values[1] && values[2]) {
						GlobalVisRender.draw( GlobalVis.layout({
							nodes: values[0],
							edges: values[1],
						}));
					}
				});

				scope.$watch('currentFocus', function(val) {
					if (val) {
						console.log('updating vis with currentFocus:', scope.currentFocus);
						GlobalVisRender.update({
							nodes: scope.nodes,
							edges: scope.edges,
						});
					}
				}, true);

/*
				scope.$watchCollection('nodes', function(val) {
					if (val && val.length > 0) {
						console.log('updating vis with new nodes:', scope.nodes);
						GlobalVisRender.exit({
							nodes: scope.nodes,
							edges: scope.edges,
						});
						GlobalVisRender.draw( GlobalVis.layout({
							nodes: scope.nodes,
							edges: scope.edges,
						}));
					}
				});
*/
			}
		}
	}
}
