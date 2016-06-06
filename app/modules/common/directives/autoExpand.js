'use strict';

module.exports = function () {
	return {
		require: '?ngModel',
		link: function(scope, element, attrs, ngModelController) {

			scope.$watch( function() {
				return ngModelController.$viewValue;
			}, function(val) {
				if (val) {
					var newlines = val.split('\n');
					var numNewlines = newlines.length + 2;

					var wordsArray = val.split(' ');
					var numWords = wordsArray.length;
					var numRows = Math.ceil(numWords / 6);		// about 6 words per row
					element.prop('rows', Math.max(numRows, numNewlines) );
				} else {
					element.prop('rows', 5);
				}
			}, 100);
		}
	}
}
