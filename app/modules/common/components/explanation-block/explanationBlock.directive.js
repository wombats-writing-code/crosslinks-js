'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		transclude: true,
		template: require('html!./explanationBlock.html'),
		scope: {
			section:'@'
		},
		compile: function(tEl, tAttr) {

			var getHtml = function(name) {
				name = name && name.toLowerCase() || 'default';

				var types = {
					'prepare': 'Topics that are prerequisites ',
					'relate': 'Topics that are related ',
					'advance': 'Topics that need this one ',
					'learn': 'Resources for studying',
					'apply': 'How this topic is used in real life ',
					'assess': 'Test yourself on simple exercises '
				};

				return types[name];
			}

			return function(scope, iEl, iAttrs) {
				var toolTipEl = iEl.find('div');
				if (!toolTipEl.html()) {
					toolTipEl.html( getHtml(scope.section) );	
				}
			}
		}
	}
}
