'use strict';

module.exports = function TopicRepositoryService($http, $q, Topic, Subject) {

	var relationship_endpoint = '/handcar/services/relationship/families/mc3-family%3A1%40MIT-OEIT/relationships';
	var requisite_relationship = 'mc3-relationship%3Amc3.lo.2.lo.requisite%40MIT-OEIT';

	var createRelationship = function(data) {
		if (data.genusTypeId.indexOf('requisite') > -1) {
			data.linkType = 'requisite';
		} else if (data.genusTypeId.indexOf('relate') > -1) {
			data.linkType = 'relate';
		}               
				
		return {        
			id: data.id,
			sourceId: data.sourceId,
			destinationId: data.destinationId,
			linkType: data.linkType,
			genusTypeId: data.genusTypeId,
		};   
	}


	this.get = function(topicId) {
		return Topic.fetch(topicId)
		.then( function(res) {
			return Topic.createTopic(res);
		})
	};

	this.getTopics = function() {
		return $q.all([
			$http.get(Topic.constants.endpoint + '?genustypeid=' + Topic.constants.genusTypeId), $http.get(Topic.constants.extensionEndpoint + '?genustypeid=' + Topic.constants.genusTypeId)
		])
		.then( function(res) {
			var topics = res[0].data.map(Topic.createTopic);
			var subjectExts = _.flatten(_.pluck(res[1].data, 'recordProperties')).map(Subject.createSubject);
			_.forEach( subjectExts, function(ext) {
				var topic = _.find(topics, {'id': ext.associatedId});
				topic.add('subject', ext);
			});
			return topics;
		});
	}

	var relationships;
	this.getRelationships = function() {
		return $q.when( relationships ? relationships : $http.get(relationship_endpoint + '?genustypeid=' + requisite_relationship)
		.then( function(res) {
			relationships = res.data.map(createRelationship);
			return relationships;
		}));  
	}

	this.getTopicRequisites = function(topicId) {
		return $http.get(Topic.constants.endpoint + '/' + topicId + '/requisites/bulk?descendentLevels=1')
		.then( function(res) {
			return res.data;
		});  
	}
		
}
