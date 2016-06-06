'use strict';

var logEntry = require('./log-entry.js');
var logger = require('./logger.js');
var logRepository = require('./log-repository.service.js');

var differ = require('./differ.js');


module.exports = angular.module( 'cl3.common.models.logging', [])
.factory( 'LogEntry', ['Alias', logEntry])

.service( 'Logger', ['$http', logger])
.service( 'LogRepository', ['$http', '$q', 'LogEntry', logRepository])
.service( 'Differ', differ)
