'use strict';

var topicRepository = require('./topic-repository.service.js');
var subjectRepository = require('./subject-repository.js');

require('../');

module.exports = angular.module( 'cl3.common.models.topicRepository', [
	'cl3.common.models'
])

.service( 'TopicRepository', ['$http', '$q', 'Topic', 'Subject', topicRepository])
.service( 'SubjectRepository', ['$http', '$q', 'Subject', subjectRepository])
