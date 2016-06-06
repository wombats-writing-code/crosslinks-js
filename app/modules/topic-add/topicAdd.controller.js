'use strict';

module.exports = function($scope, $state, Topic, Reference, TopicRepository, SubjectRepository, Logger, Authentication) {

	Authentication.getUser()
	.then( function(res) {
		$scope.currentUser = res;
	});

	SubjectRepository.getSubjects()
	.then( function(subjects) {
		$scope.subjects = subjects;
	});

	$scope.newTopic = Topic.createTopic();
	$scope.newTopic.reference = Reference.createReferenceCollection($scope.newTopic.reference);

	$scope.saveTopic = function(topic) {

		return topic.save()
		.then( function(res) {
			console.log('new topic saved:', res);

			Logger.log({
				agentId: $scope.currentUser.kerberos,
				resourceId: res.id,
				action: 'create',
				topicName: res.displayName,
				propertyName: 'topic',
				current: topic,
				previous: ''
			});

			$state.go('topic-read', {topicIdentifier: topic.getIdentifier()});
		});
	}

}

