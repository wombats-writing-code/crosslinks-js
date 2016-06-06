'use strict';

module.exports = function ResourceFactory() {

	var resourceStrategies = {
		'ocw': function(resource) {
			return _.includes(resource.url, 'ocw'); 
		},
		'youtube': function(resource) {
			return _.includes(resource.url, 'youtube') || _.includes(resource.url, 'youtu.be'); 
		},
		'khan_academy': function(resource) {
			return _.includes(resource.url, 'khanacademy'); 
		},
		'mathlet': function(resource) {
			return _.includes(resource.url, 'mathlet') || _.includes(resource.displayName.toLowerCase(), 'mathlet'); 
		},
		'wolfram': function(resource) {
			return _.includes(resource.url, 'wolfram');
		},
		'lamar': function(resource) {
			return _.includes(resource.url, 'lamar.edu');
		},
		'berkeley': function(resource) {
			return _.includes(resource.url, 'berkeley');
		},
		'mit': function(resource) {
			return !_.includes(resource.url, 'ocw') && _.includes(resource.url, '.mit.edu');
		},
		'uc_davis': function(resource) {
			return _.includes(resource.url, 'ucdavis.edu');
		},
		'nature': function(resource) {
			return _.includes(resource.url, 'nature.com');
		},

	};
	var keys = _.keys(resourceStrategies);

	var decorateResource = function(resource) {
		resource.iconType = 'other_resource';
		for (var i=keys.length; i--;) {
			var isType = resourceStrategies[keys[i]](resource);
			if (isType) {
				resource.iconType = keys[i];
			}
		}
		return resource;
	}

	function Resource(data) {
		if (data) {
			this.id = data.id;
			this.genusTypeId = data.genusTypeId;
			this.displayName = data.assetContents[0].displayName.text || '';
			this.description = data.assetContents[0].description.text || '';
			this.url = data.assetContents[0].url;
		} else {
			this.displayName = 'New Resource';
			this.description = 'New Resource description';
			this.url = 'http://example.com';
		}
	}

	Resource.createResource = function(data) {
		var resource = decorateResource( new Resource(data) );
		return resource;
	}

	return Resource;

}
