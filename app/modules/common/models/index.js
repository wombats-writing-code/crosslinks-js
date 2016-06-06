'use strict';

var topic = require('./topic.js');
var subject = require('./subject.js');
var reference = require('./reference.js');
var resource = require('./resource.js');
var proxyConstants = require('./proxy-constants.js');
var requestProcessor = require('./requestProcessor.js');
var proxy = require('./proxy.js');

module.exports = angular.module( 'cl3.common.models', [
	'cl3.common.auth'
])
.constant( 'ProxyConstants', proxyConstants)
.service( 'RequestProcessor', ['ProxyConstants', requestProcessor])
.service( 'Proxy', ['$http', '$q', 'ProxyConstants', 'RequestProcessor', 'Authentication', proxy])
.factory( 'Subject', subject)
.factory( 'Reference', reference)
.factory( 'Resource', resource)

.factory( 'Topic', ['$q', 'Proxy', 'Alias', 'Subject', 'Reference', 'Resource', topic])
