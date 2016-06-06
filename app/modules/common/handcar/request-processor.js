'use strict';

module.exports = function HandcarRequestProcessorService(HandcarConstants) {
	var strategyFns = {
		'TOPIC': function(data) {
			var result = {
				id: data.id,
				displayName: {text: data.displayName },
				description: {text: data.description},
				genusTypeId: HandcarConstants.TOPIC.genusTypeId
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
				genusTypeId: HandcarConstants.ASSET.genusTypeId,
				assetContents: [
					{
						genusTypeId: HandcarConstants.ASSET_CONTENT.genusTypeId,
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
			};                      
			return packed;  
		}
	};

	this.pack = function(type) {
		return strategyFns[type];
	}
}
