'use strict';

module.exports = function ($window, $timeout, TopicListService) {
	return { 
		scope: {
			subjects: '=',
			currentFocus: '=',
			nodes: '=',
			allNodes: '=',
		},
		link: function(scope, element, attrs, controller) { 

			var shownSubjects = ['18.01', '18.02', '18.03', '18.06', '18.100', '16.06', '16.90', '16.30', '8.01', '8.02', '6.002', '6.003', '6.006', '6.01', '6.041', '6.042', '7.013', '5.111'];  
			var positions = [];

			scope.$watch('subjects', function(val) {
				if (val) {
					var array = _.flatten(scope.subjects);

					$timeout( function() {	
						for (var i=0; i<array.length; i++) {
							var divEl = document.getElementById('subject' + array[i]);
							var rect = divEl.getBoundingClientRect();
							positions.push(rect.top);
						}
					}, 1000);

					var doc = document.documentElement;
					var top;

					angular.element($window).bind('scroll', _.debounce(function(){
						top = ($window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
						if (top < 300) {
							element.css('top', '20em');
						} else {
							element.css('top', top + 130 + 'px');
						}
					}, 0, { 'leading': true, 'trailing': false }));

					scope.currentFocus = scope.currentFocus || '18.01';
					scope.nodes = TopicListService.filterBySubject(scope.allNodes, scope.currentFocus, shownSubjects); 

					angular.element($window).bind('scroll', _.debounce(function(){
						var subject = positions[positions.length-1];
						for (var i=0; i<positions.length-1; i++) {
							if ((top+130) < positions[i+1]) {	
								subject = array[i];
								break;
							}
						}
						
						if (shownSubjects.indexOf(subject) > -1) {
							console.log( 'current scroll position:', top, 'closest subject', subject);
							scope.nodes = TopicListService.filterBySubject(scope.allNodes, subject, shownSubjects); 
							scope.currentFocus = subject;
							scope.$apply();
						}
					}, 200));

				}
			});

		}
	}
}

