
var directive = require('./topicReference.directive.js');
require("./topicReference.scss");

module.exports = angular.module('cl3.common.components.topic.topicReference', [
])
.directive( 'topicReference', directive);
