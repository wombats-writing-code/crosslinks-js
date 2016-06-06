'use strict';

module.exports = function SearchSelectTopicsController($scope, $q, TopicRepository) {

	var topics;
	$scope.isLoading = true;

	this.fetchTopicSubjects = function() {
		return TopicRepository.getTopics()
		.then( function(res) {
			$scope.isLoading = false;
			$scope.topics = res;
//			console.log('topics: ', $scope.topics);
			$scope.search($scope.topics, $scope.searchQuery);
		});
	}


	$scope.selectItem = function(arg) {
		$scope.uponSelect({topic: arg});
		$scope.searchResults = [];
		$scope.searchQuery = '';
	}

	$scope.search = function(array, query) {
//		console.log(array);
		if (!$scope.isLoading) {
			$scope.searchResults = TopicRepository.searchTopics(array, query);
		} 
	}

	$scope.cancelSearch = function() {
		$scope.searchQuery = '';
		$scope.searchResults = [];
	}
}
