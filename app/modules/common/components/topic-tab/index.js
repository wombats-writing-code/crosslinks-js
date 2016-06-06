
// core side-bar
var topicTabDirective = require('./topicTab.js');
require("./topicTab.scss");

module.exports = angular.module('cl3.common.components.topicTab', [])
.directive( 'topicTab', ['$stateParams', topicTabDirective])
