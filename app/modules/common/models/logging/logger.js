'use strict';

module.exports = function Logger($http) {

	var log_endpoint = '/handcar/services/logging/logs/mc3-log%3A2%40MIT-OEIT/logentries';

	// POSTs a log entry
	this.log = function(args) {
		var previousJson = angular.toJson(args.previous);
		var currentJson = angular.toJson(args.current);
	
		var packed = {
			genusTypeId: "mc3-logentry%3Amc3.logentry.info%40MIT-OEIT",
			priorityTypeId: 'mc3-log-entry-priority-type%3Amc3.logging.priority.4.info%40MIT-OEIT',
			agentId: args.agentId,
			resourceId: args.resourceId,
			displayName: {text: args.topicName},
			description: {text: args.action + " " + args.propertyName},
			recordProperties: [
				{ 
					displayName: {text: "previous"},
					value: previousJson
				},
				{ 
					displayName: {text: "current"},
					value: currentJson
				},
			]
		};

		return $http.post(log_endpoint, packed)
		.then( function(res) {
			return res.status;
		});  
		
	}


}
