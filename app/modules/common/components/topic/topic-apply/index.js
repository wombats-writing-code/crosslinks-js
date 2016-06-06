
var directive = require('./topicApply.directive.js');
require("./topicApply.scss");

module.exports = angular.module('cl3.common.components.topic.topicApply', [
])
.directive( 'topicApply', directive);
