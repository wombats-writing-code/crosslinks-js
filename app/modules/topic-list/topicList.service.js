'use strict';

module.exports = function() {

	// returns three results: 
	// 	1) a hash of courses and an array of their subjects, e.g. {courseNumber: [subjects]}
	//	2) a hash of subjects and their topics, e.g. 	{subjectNumber: ]}
	//	3) an array of uncategorized topics [topic1, topic2]

	this.getTopicHierarchy = function(topics) {

		var subject_topics = {};
		var uncategorized = [];
		_.each(topics, function(topic) {
			var subjectNumbers = topic.getSubjectTags();

			if (!topic.subject || topic.subject.length == 0) {
				uncategorized.push(topic);
			} else {
				_.each( subjectNumbers, function(n) {
					subject_topics[n] = subject_topics[n] || [];
					subject_topics[n].push(topic);
				});
			}
		});

		var groupedByCourse = _.groupBy( Object.keys(subject_topics), function(subjectNumber) {
			return subjectNumber.split('.')[0];
		});
		var courseSubjects = _.toArray(groupedByCourse).reverse().map( function(subjectArray) {
			return subjectArray.sort(function(a,b) {
				return a-b;
			});
		});

		var subjectKeys = _.keys(subject_topics) || [];
		var courseKeys = _.keys(groupedByCourse) || [];
//		console.log(topics.length, 'topics', subjectKeys.length, 'subjects', courseKeys.length, 'courses');

		return [courseSubjects, subject_topics, uncategorized];
	}

	this.filterBySubject = function(topics, querySubject, shownSubjects) {
/*
		var nodes = _.filter(topics, function(topic) {
			var subjects = _.pluck(topic.subject, 'number');
			if (subjects.indexOf(querySubject) > -1) {
				topic.isHighlight = true;
				return true;
			} else {
				topic.isHighlight = false;
				topic.isInactive = true;
			}

			return _.some(subjects, function(number) {
				return shownSubjects.indexOf(number) > -1;
			});
		});
*/
		var nodes = _.forEach(topics, function(topic) {
			var subjects = _.pluck(topic.subject, 'number');
			if (subjects.indexOf(querySubject) > -1) {
				topic.isHighlight = true;
				topic.isInactive = false;
			} else {
				topic.isHighlight = false;
				topic.isInactive = true;
			}
		});

		return nodes;
	}
}
