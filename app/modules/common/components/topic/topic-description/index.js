
var directive = require('./topicDescription.directive.js');
require("./topicDescription.scss");

// for mathjax directive
require("../../../directives");

module.exports = angular.module('cl3.common.components.topic.topicDescription', [
	'cl3.common.directives'
])
.directive( 'topicDescription', directive);
