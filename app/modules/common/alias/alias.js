'use strict';

module.exports = function AliasService() {

	var Alias = {
		createAlias: function(displayName) {
			var formatted = displayName.toLowerCase().split(' ').join('-');
			formatted = formatted.replace(/[^a-zA-Z0-9\-\_]/gi, '');
//			console.log(formatted);
			return formatted;
		}
	}

	return Alias;
}
