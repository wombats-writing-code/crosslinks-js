'use strict';

module.exports = function ($window, Utils, TopicVis, TopicVisRender) {
	return {
		restrict: 'E',
		template: require('html!./topicVis.html'),
		scope: {
			root: '=',
			edges: '=',
		}, 
		link: function(scope, element, attrs) {
			Utils.loadD3()
			.then( function(res) {
				scope.isD3Loaded = true;
			});

			scope.$watchGroup(['root', 'edges', 'isD3Loaded'], function(values) {
				if (values[0] && values[1] && values[1].length > 0 && values[2]) {
					TopicVisRender.draw( TopicVis.layout({
						root: values[0],
						edges: values[1],
					}));
				}
			});
		}
	}
}
