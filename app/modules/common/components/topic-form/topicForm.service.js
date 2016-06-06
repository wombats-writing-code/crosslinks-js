'use strict';

module.exports = function () {
	
	var isFormDirty = false;
	
	this.getFormDirty = function() {
		return isFormDirty;
	};

	this.setFormDirty = function(value) {
		isFormDirty = value;
		return isFormDirty;
	};
	
}
