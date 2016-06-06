'use strict';

module.exports = function($scope, $stateParams, TopicRepository, Logger) {

	$scope.hasEdits = true;
	$scope.isLoading = true;

        var topicIdentifier = $stateParams.topicIdentifier;
                
        TopicRepository.get(topicIdentifier)
        .then( function(res) {  
		$scope.currentTopic = res;
		return Logger.get(res.id);
	})
	.then( function(logEntries) {
		$scope.isLoading = false;
		$scope.currentTopic.history = logEntries;

		$scope.hasEdits = ($scope.currentTopic.history.length > 0);
	})
	.catch( function(err) {
		console.log('topicHistoryController had an error', err);
	});

}
