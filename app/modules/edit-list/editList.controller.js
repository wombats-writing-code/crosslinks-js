'use strict';

module.exports = function ($scope, LogRepository, Authentication) {

	Authentication.getUser()
	.then( function(res) {
		$scope.currentUser = res;

		return LogRepository.getHistories(100);
	})
	.then( function(res) {
		$scope.logEntries = res;
		$scope.searchResults = $scope.logEntries.slice();
	})
	.catch( function(err) {
		console.log(err);
	});

	$scope.searchLogEntries = function(array, query) {
		$scope.searchResults = LogRepository.searchLogEntries(array, query);
	}

	$scope.isArray = angular.isArray;

}
