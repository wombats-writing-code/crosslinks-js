'use strict';

module.exports = function SubjectFactory() {

	function Course(data) {
		this.number = data;
		this.name = 'Course ' + data;
	}

	function Subject(data) {
		if (data) {
			this.id = data.id;
			this.associatedId = data.associatedId;
			this.number = data.value || data.number; 
			this.name = (data.displayName && data.displayName.text) || data.name;
		} else { 
			this.name = 'No subject name ';
			this.number = 'No subject number';
			this.course = null;
		}
		if (this.number) {this.course = new Course(this.number.split('.')[0]); }
	}

	Subject.prototype.getCourseNumber = function() {
		return this.course.number;
	}


	Subject.createSubject = function(data) {
		return new Subject(data);
	}

	return Subject;

}
