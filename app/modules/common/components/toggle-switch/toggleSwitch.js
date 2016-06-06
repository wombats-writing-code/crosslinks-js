
'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		template: require('html!./toggleSwitch.html'),
		scope: {
			toggleModel: '='	
		},
		link: function(scope, element, attrs, controller, transclude) {}
	}
}
