'use strict';

module.exports = function ApiProxyService($http, $q) {

	var manager = {
		// subscribers
	}

	this.execute = function(command, property, data) {
		var fn = command + property.charAt(0).toUpperCase() + property.slice(1);
		if (!manager[fn]) throw "Function name " + fn + " doesn't exist in HackProxy"
		return manager[fn] && manager[fn](data);
	}

}
