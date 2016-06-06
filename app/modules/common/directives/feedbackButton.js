'use strict';

module.exports = function() {
	return {
		scope: {
			disabledWhen: '=',
			defaultWhen: '=',
			notDirtyWhen: '=',
			progressWhen: '=',
			successWhen: '=',
			errorWhen: '=',
		},
		link: function(scope, element, attrs) {
			var transition = attrs.transition || 3000;
			element.text(attrs.initialLabel);

//			console.log(attrs.defaultLabel, attrs.errorLabel, attrs.progressLabel, attrs.successLabel);
			scope.$watchGroup([ 'defaultWhen', 'errorWhen', 'progressWhen', 'successWhen'], function(newValues) {
				var isDefault = newValues[0]; 
				var isError = newValues[1];
				var isProgress = newValues[2];
				var isSuccess = newValues[3];

				var classlist = element[0].classList;

				if (isDefault) {
					classlist.remove('js-success');
					classlist.remove('js-in-progress');
					classlist.remove('js-error');
					element.text(attrs.defaultLabel);
				} else if (isSuccess) {
					classlist.remove('js-in-progress');
					classlist.remove('js-error');
					classlist.add('js-success');
					element.text(attrs.successLabel);
				} else if (isProgress) {
					classlist.remove('js-success');
					classlist.remove('js-error');
					classlist.add('js-in-progress');
					element.text(attrs.progressLabel);
				} else if (isError) {
					classlist.remove('js-success');
					classlist.remove('js-in-progress');
					classlist.add('js-error');
					element.text(attrs.errorLabel);
				}
			});
		}
	}
}
