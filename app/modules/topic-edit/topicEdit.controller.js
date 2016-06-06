'use strict';

module.exports = function TopicEditController($scope, $q, $state, $stateParams, Reference, TopicRepository, SubjectRepository, Differ, Logger, Authentication) {

	Authentication.getUser()
	.then( function(res) {
		$scope.currentUser = res;	
	});	

	$scope.isLoading = true;
	var originalCopyTopic;
	TopicRepository.get($stateParams.topicIdentifier)
	.then( function(res) {
		$scope.currentTopic = res;
		return $q.all([ $scope.currentTopic.get('reference'), $scope.currentTopic.get('learn'),$scope.currentTopic.get('apply'),
				$scope.currentTopic.get('prepare'),$scope.currentTopic.get('relate'),$scope.currentTopic.get('advance'),
				$scope.currentTopic.get('subject')
		]);
	})
	.then(function(res) {
		$scope.currentTopic.reference = Reference.createReferenceCollection($scope.currentTopic.reference);
		$scope.currentTopic.oldAlias = $scope.currentTopic.alias;
		console.log($scope.currentTopic);

		originalCopyTopic = angular.copy($scope.currentTopic);
		$scope.isLoading = false;

		TopicRepository.getTopics()
		.then(function(topics) {
			$scope.topics = topics;
		});

		SubjectRepository.getSubjects()
		.then(function(subjects) {
			$scope.subjects = subjects;
		});
	});

	var updateAndLog = function(originalTopic, topic) {
		return function asyncUpdateAndLog(propName) {

			return topic.update(propName)
			.then( function(result) {
				console.log('topic updated!');

				Logger.log({
					agentId: $scope.currentUser.kerberosId,
					resourceId: topic.id,
					action: 'edit',
					topicName: topic.displayName,
					propertyName: propName,
					current: topic[propName],
					previous: originalCopyTopic[propName]
				});
			});
		}
	}

	$scope.updateTopic = function(topic) {
		var diffs = Differ.getDifferentProperties(originalCopyTopic, topic);
		var asyncUpdateAndLog = updateAndLog(originalCopyTopic, topic);
		console.log('different props:', diffs);

		return $q.all( diffs.map(asyncUpdateAndLog) )
		.then( function(res) {
			originalCopyTopic = angular.copy(topic);

			if (_.includes(diffs, 'displayName')) { 
				$state.transitionTo('topic-read', {topicIdentifier: topic.getIdentifier()});
			}
			return res;
		});
	}

	$scope.deleteTopic = function(topic) {

		return topic.trash()
		.then( function(res) {
			Logger.log({
				agentId: $scope.currentUser.kerberosId,
				resourceId: topic.id,
				action: 'delete',
				topicName: topic.displayName,
				propertyName: 'topic',
				current: '',
				previous: topic
			});

			$state.go('topic-list');
		});
	}

}

