'use strict';

var handcarConstants = require('./constants.js');
var requestProcessor = require('./request-processor.js');
var handcarProxyService = require('./proxy.js');
var hackProxy = require('./hack-proxy.js');

module.exports = angular.module( 'cl3.common.handcar', [
	'cl3.common.auth'
])
.constant( 'HandcarConstants', handcarConstants)
.service( 'RequestProcessor', ['HandcarConstants', requestProcessor])
.service( 'HandcarProxy', ['$http', '$q', 'HandcarConstants', 'RequestProcessor', 'Authentication', handcarProxyService])
.service( 'HackProxy', ['$http', '$q', hackProxy])
