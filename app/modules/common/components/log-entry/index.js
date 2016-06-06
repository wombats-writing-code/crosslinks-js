
var logEntryDirective = require('./logEntry.directive.js');
var logInfoDirective = require('./logInfo.directive.js');
require('./logEntry.scss');

module.exports = angular.module('cl3.common.components.logEntry', [])
.directive( 'logEntry', logEntryDirective)
.directive( 'logInfo', logInfoDirective)
