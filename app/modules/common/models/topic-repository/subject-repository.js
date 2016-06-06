'use strict';

module.exports = function SubjectRepository($http, $q, Subject) {

	// this is a hack because at the time of Crosslinks,
	// Backstage didn't support subjects so we had to use another backend service
	// replace this with the endpoint of where you're storing your subjects
	var fetchSubjects = function() {
		return $http.get('/crosslinks3-api/subjects')
		.then( function(res) {
			return res.data;
		});
	}

	var subjectsDict = {}, subjectsArray;

	this.getSubjects = function() {
		return $q.when( subjectsArray ? subjectsArray : fetchSubjects())
		.then( function(res) {
			subjectsArray = res.map(Subject.createSubject);
			return subjectsArray;
		});
	}
}
