'use strict';

var middleman = require('./middleman.interceptor.js');
//var uniqueRequestAware = require('./unique-request-aware.interceptor.js');

module.exports = angular.module('cl3.common.interceptors', [
])
.service( 'middlemanUrl', ['$q', '$window', 'Utils', middleman])
//.service( 'uniqueRequestAware', ['$q', '$timeout', uniqueRequestAware])
