'use strict';

var directive = require('./topicAdvance.directive.js');
require("./topicAdvance.scss");

//require("../../toggle-switch");

module.exports = angular.module('cl3.common.components.topic.topicAdvance', [
//	'cl3.common.components.toggleSwitch'
])
.directive( 'topicAdvance', directive);
