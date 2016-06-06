'use strict';

var directive = require('./topicRelate.directive.js');
require("./topicRelate.scss");

//require("../../toggle-switch");

module.exports = angular.module('cl3.common.components.topic.topicRelate', [
//	'cl3.common.components.toggleSwitch'
])
.directive( 'topicRelate', directive);
