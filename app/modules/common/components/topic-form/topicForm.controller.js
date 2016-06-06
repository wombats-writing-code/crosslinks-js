'use strict';

module.exports = function ($scope, $q, TopicForm) {
	
	$scope.getFormDirty = TopicForm.getFormDirty;

	// --- for the search selects
	$scope.addSubject = function(item) { 
		$scope.formTopic.add('subject', item);
	}
	$scope.addPrepare = function(topic) {
		$scope.formTopic.add('prepare', topic);
	}       
	$scope.addRelate = function(topic) {
		$scope.formTopic.add('relate', topic);
	}       
	$scope.addAdvance = function(topic) {
		$scope.formTopic.add('advance', topic);
	}
	// ---	

	$scope.newLearnResource = {};
	$scope.newApplyResource = {};

	$scope.saveNewLearnResource = function(resource) {
		$scope.formTopic.add('learn', resource);
		$scope.newLearnResource = {};
	}

	$scope.saveNewApplyResource = function(resource) {
		$scope.formTopic.add('apply', resource);
		$scope.newApplyResource = {};
	}

	$scope.setFormChanged = function() {
		TopicForm.setFormDirty(true);
		$scope.submitSuccess = false;
		$scope.submitError = false;
		$scope.deleteSuccess = false;
	}

	$scope.saveTopic = function(topic) {
		TopicForm.setFormDirty(false), $scope.inProgress = true;

		$scope.saveFn({topic: topic})
		.then( function(res) {
			$scope.inProgress = false, $scope.submitSuccess = true;
//			console.log(res);
		}, function(err) {
			$scope.inProgress = false, $scope.submitError = true;
			
			console.log('err: ', err);
		});
	}

	$scope.deleteTopic = function(topic) {
		TopicForm.setFormDirty(false), $scope.deleteProgress = true;

		$scope.deleteFn({topic: topic})
		.then( function(res) {
			$scope.deleteProgress = false, $scope.deleteSuccess = true;
		}, function(err) {
			$scope.deleteProgress = false, $scope.submitError = true; 
			console.log('err: ', err);
		});
	}
}
