'use strict';

module.exports = function($scope, $q, $stateParams, Utils, TopicRepository) {

	$scope.topicIdentifier = $stateParams.topicIdentifier;

	TopicRepository.get($scope.topicIdentifier)
	.then( function(res) {
		$scope.currentTopic = res;

		if (Utils.isTopicId($scope.topicIdentifier)) Utils.rewriteToAlias($scope.currentTopic.alias);

		return $q.all([ $scope.currentTopic.get('prepare'), $scope.currentTopic.get('learn') ]);
	})
	.then( function(res) {
		$scope.isCriticalLoaded = true;

		$scope.currentTopic.get('reference');
		$scope.currentTopic.get('subject');
		$scope.currentTopic.get('relate');
		$scope.currentTopic.get('advance');
		$scope.currentTopic.get('apply');

		TopicRepository.getRelationships()
		.then( function(res) {
			$scope.links = res;
		});

		TopicRepository.getTopicRequisites($scope.topicIdentifier)
		.then( function(res) {
			$scope.root = res;
		});
	});
}
