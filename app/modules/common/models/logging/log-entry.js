'use strict';

module.exports = function LogEntryFactory(Alias) {

	function LogEntry(data) {
		if (data) {
				this.id = data.id;
				this.alias = Alias.createAlias(data.displayName.text);
				this.displayName = data.displayName.text;
				this.agentId = data.agentId.split('%3A')[1].split('%40')[0] || '';
				this.agentId = this.agentId.toLowerCase();
				this.resourceId = data.resourceId;
				this.action = data.description.text.split(' ')[0];
				this.property = data.description.text.split(' ')[1];
				this.timestamp = data.timestamp;
				this.priorityTypeId = data.priorityTypeId;
				this.genusTypeId = data.genusTypeId;
			try {
				if (data.recordProperties[0] && data.recordProperties[0].value) {
					this.previous = angular.fromJson(data.recordProperties[0].value);
				} else {
					this.previous = null;
				}
				if (data.recordProperties[1] && data.recordProperties[1].value) {
					this.current = angular.fromJson(data.recordProperties[1].value);
				} else {
					this.current = null;
				}
			} catch(e) {
				console.error('cannot convert from Json in LogEntry', data);
			}
		}
	}

	return {
		createLogEntry: function(data) {
			return new LogEntry(data);
		}
	}
	
}

