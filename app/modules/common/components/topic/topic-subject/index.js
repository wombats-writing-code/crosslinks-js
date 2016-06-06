'use strict';

var directive = require('./topicSubject.directive.js');
require("./topicSubject.scss");

module.exports = angular.module('cl3.common.components.topic.topicSubject', [
])
.directive( 'topicSubject', directive);
