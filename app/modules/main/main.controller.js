'use strict';

module.exports = function MainController($scope, $stateParams, $q, LogRepository, TopicRepository, $state) {

	LogRepository.getHistories(40)
	.then( function(res) {
		$scope.isHistoryLoaded = true;
		$scope.recentEdits = _.uniq( _.filter(res, function(item) { return item.current && item.action != 'create'; }), 'resourceId');
	});

	$q.all([ TopicRepository.getTopics(), TopicRepository.getRelationships() ])
	.then( function(res) {
		$scope.topics = res[0];
		var nodes = _.filter(res[0], function(topic) {
			var subjects = _.pluck(topic.subject, 'number');
			return _.some(subjects, function(number) {
				return subjects.indexOf(number) > -1;
			});
		});
		$scope.nodes = nodes;
		$scope.links = res[1];
	});

	$scope.go = function(topic) {
		$state.go('topic-read', {topicIdentifier: topic.getIdentifier()});
	}

}
