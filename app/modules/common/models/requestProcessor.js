'use strict';

module.exports = function RequestProcessor(ProxyConstants) {
	var strategyFns = {
		'TOPIC': function(data) {
			var result = {
				id: data.id,
				assessmentId: data.assessmentId,
				displayName: {text: data.displayName },
				description: {text: data.description},
				genusTypeId: ProxyConstants.TOPIC.genusTypeId
			};
			return result;
		},
		'SUBJECT': function(data) {
			var packed = {
				value: data.number,
				displayName: {
					text: data.name
				}
			};
			return packed;
		},
		'ASSET': function(item) {
			var packed = {
				id: item.id,
				genusTypeId: ProxyConstants.ASSET.genusTypeId,
				assetContents: [
					{
						genusTypeId: ProxyConstants.ASSET_CONTENT.genusTypeId,
						displayName: {text: item.displayName},
						description: {text: item.description},
						url: item.url
					},
				]
			};
			return packed;
		},	

		'LOGENTRY': function(data) {
			var packed = {
				genusTypeId: ProxyConstants.genusType.log.info,
				priorityTypeId: ProxyConstants.priorityType.info,
				agentId: data.agentId,
				resourceId: data.resourceId,
				displayName: {
					text: data.displayName || ''
				},      
				description: {  
					text: data.description || '',
				},              
				recordProperties: data.recordProperties
			};                      
			return packed;  
		}
	};

	this.pack = function(type) {
		return strategyFns[type];
	}
}
