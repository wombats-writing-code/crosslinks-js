'use strict';

module.exports = function sideBarController($window, $scope, $state, TopicRepository, Authentication) {

	$scope.isMinWidth = function() {
		var minWidth = 1065;
		return $window.innerWidth > minWidth || $window.clientWidth > minWidth;
	}

	$scope.setNavigation = function(value) {
		$scope.isNavigationVisible = $scope.isMinWidth() ? true : value;
	}

	Authentication.getUser()
	.then(function(res) {
		$scope.currentUser = res;
	});

	$scope.go = function(topic) {
		$state.go('topic-read', {topicIdentifier: topic.getIdentifier()});
		$scope.setNavigation(false);
	}

        TopicRepository.getTopics()
        .then( function(topics) {
                $scope.isLoading = false;
                $scope.topics = topics;
	});
}
