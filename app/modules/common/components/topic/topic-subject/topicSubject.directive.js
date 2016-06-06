'use strict';

module.exports = function () {
	return {
		restrict: 'E',
		template: require('html!./topicSubject.html'),
		scope: {
			subject: '=',
			topicName: '=',
		},
		link: function(scope, element, attrs, controller) {
			scope.$watch( 'subject', function(val) {
				if (val) {
					scope.uniqueCourseNumbers = _.uniq(
						scope.subject.map( function(item) {
							return item.getCourseNumber();
						})
					);  
				}
			});  
		}
	}
}
