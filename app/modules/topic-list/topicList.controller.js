'use strict';

module.exports = function TopicListController($scope, $state, $stateParams, $q, TopicListService, TopicRepository) {

	$scope.isLoading = true;
	$scope.nodes = [];
	$scope.currentFocus = '';

	var querySubject = '';
	console.log($stateParams);
	if ($stateParams.query) {
		querySubject = $stateParams.query.split('subject')[1];
		querySubject = querySubject.split('?')[0];
	}

	var topics;
	$q.all([ TopicRepository.getTopics(), TopicRepository.getRelationships() ])
	.then( function(res) {
		topics = res[0];

//		console.log(topics.length + ' topics');
		$scope.isLoading = false;
		$scope.topics = topics;

		var hierarchy = TopicListService.getTopicHierarchy(topics);
		$scope.courseSubjects = hierarchy[0];
		$scope.subject_topics_map = hierarchy[1];
		$scope.uncategorized = hierarchy[2];

		$scope.stateParams = $stateParams;

		$scope.nodes = TopicListService.filterBySubject(topics, querySubject, $scope.courseSubjects[0]);
		$scope.links = res[1];

		$scope.currentFocus = querySubject;
	});

	$scope.getCourseNumber = function(index) {
		return $scope.courseSubjects[index][0].split('.')[0];
	}

	$scope.goToTopic = function(topic) {
		$state.go('topic-read', {topicIdentifier: topic.getIdentifier()});
	}

}
