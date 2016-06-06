
var directive = require('./topicLearn.directive.js');
require("./topicLearn.scss");

module.exports = angular.module('cl3.common.components.topic.topicLearn', [
])
.directive( 'topicLearn', directive);
