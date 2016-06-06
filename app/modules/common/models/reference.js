'use strict';

module.exports = function ReferenceFactory() {

	var referenceTypes = {
		'wikipedia': {
			type: 'wikipedia',
			icon: 'wikipedia',
			is: function(url) {
				return _.includes(url, 'wikipedia');
			}
		},
		'wolfram': {
			type: 'wolfram',
			icon: 'wolfram',
			is: function(url) {
				return _.includes(url, 'wolfram');
			}
		},
	};

	var assignType = function(reference, type) {
		if (!type) {
			var typeTemplate = _.find( referenceTypes, function(type) {
				return type.is(reference.url);
			});
			reference.type = typeTemplate ? typeTemplate.type : '';
			reference.icon = typeTemplate ? typeTemplate.icon : '';
		} else {
			reference.type = referenceTypes[type].type;	
			reference.icon = referenceTypes[type].icon;	
		}
		return reference;
	}

	function Reference(data) {
		if (data) {
			this.id = data.id;
			this.displayName = data.assetContents[0].displayName.text || '';
			this.url = data.assetContents[0].url;
		} else {
			this.id = '';
			this.displayName = '';
			this.url = '';
		}
	}

	Reference.prototype.getIdentifier = function() {
		return this.type;
	};

	ReferenceFactory.createReference = function(data) {
		var reference = new Reference(data);
		reference = assignType(reference);
		return reference;
	}

	ReferenceFactory.createReferenceCollection = function(referenceCol) {
		var requiredTypes = _.keys(referenceTypes);
		referenceCol = referenceCol || [];
		_.forEach( referenceCol, function(reference) {
			if (!reference.type) {
//				console.log('assigning this reference to type: ', requiredTypes[0]);
				reference = assignType(reference, requiredTypes[0]);
			}
			requiredTypes.splice(0, 1);
		});

		requiredTypes = _.keys(referenceTypes);
		_.forEach( requiredTypes, function(t) {
			var reference = _.find( referenceCol, {'type': t});
			if (!reference) {
//				console.log('making reference of type: ', t);
				reference = new Reference();
				reference = assignType(reference, t);
				referenceCol.push(reference);
			}
		});
//		console.log(referenceCol);
		return referenceCol;
	}

	return ReferenceFactory;
}
