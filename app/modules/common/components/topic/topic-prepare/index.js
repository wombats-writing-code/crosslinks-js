
var directive = require('./topicPrepare.directive.js');
require("./topicPrepare.scss");

//require("../../toggle-switch");

module.exports = angular.module('cl3.common.components.topic.topicPrepare', [
//	'cl3.common.components.toggleSwitch'
])
.directive( 'topicPrepare', directive);
