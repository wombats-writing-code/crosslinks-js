'use strict';

module.exports = function SearchTopicController($timeout, $scope, SearchTopicService ) {

	$scope.selectItem = function(arg) {
		$scope.uponSelect({topic: arg});
		$scope.searchResults = [];
		$timeout(function(){ $scope.searchQuery = ''; }, 1);
	}

	$scope.search = function(array, query) {
		$scope.searchResults = SearchTopicService.searchTopics(array, query);
	}

	$scope.cancelSearch = function() {
		$scope.searchQuery = '';
		$scope.searchResults = [];
	}

	$scope.truncateDescription = function(text) {
		return SearchTopicService.truncateDescription(text);
	}
}
