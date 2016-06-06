'use strict';

module.exports = function($window, Utils) {

	this.searchSubjects = function(array, query) {
		 if (array && query) {
			query = query.toLowerCase();
			if (array) {
				return array.filter( function(item) {
					// MIT subjects have a name and number property
					// you'll need to write our own logic for matching if you're searching through non-MIT subjects 

					var matchesName = item.name.toLowerCase().indexOf(query) > -1;
					var matchesNumber = item.number.indexOf(query) == 0;
					return matchesName || matchesNumber;
				})
			}
		}
		return [];
	}

}
