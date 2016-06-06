'use strict';

require('./topic-description');
require('./topic-reference');
require('./topic-prepare');
require('./topic-relate');
require('./topic-advance');
require('./topic-learn');
require('./topic-apply');
require('./topic-subject');

module.exports = angular.module('cl3.common.components.topic', [
	'cl3.common.components.topic.topicDescription',
	'cl3.common.components.topic.topicReference',
	'cl3.common.components.topic.topicPrepare',
	'cl3.common.components.topic.topicRelate',
	'cl3.common.components.topic.topicAdvance',
	'cl3.common.components.topic.topicLearn',
	'cl3.common.components.topic.topicApply',
	'cl3.common.components.topic.topicSubject',
])
