'use strict';

module.exports = function ($scope, SearchSubjectService) {

	$scope.selectItem = function(arg) {
		$scope.uponSelect({subject: arg});
		$scope.searchResults = [];
		$scope.searchQuery = '';
	}

	$scope.search = function(array, query) {
		$scope.searchResults = SearchSubjectService.searchSubjects(array, query);
	}

}
