'use strict';

module.exports = function LogRepository($http, $q, LogEntry) {

	var log_endpoint = '/handcar/services/logging/logs/mc3-log%3A2%40MIT-OEIT/logentries';

	this.get = function(topicId) {
		return $http.get(log_endpoint + '?resourceid=' + topicId)
		.then( function(res) {
			return res.data.map(LogEntry.createLogEntry);
		});
	}

	this.getHistories = function(maxNumber) {
		var maxNumber = maxNumber || 2000;
		return $http.get(log_endpoint + '?maxvalues=' + maxNumber)
		.then( function(res) {
			return res.data.map(LogEntry.createLogEntry);
		});
	}

	// TODO: czarina -- refactor this into its own component called search-log
	this.searchLogEntries = function(array, query) {
		if (query) {
			query = query.toLowerCase();
			return array.filter( function(item) {
				var matchesUser = item.agentId.toLowerCase().indexOf(query) > -1;
				return matchesUser;
			});
		} 
		return array;
	}


}
