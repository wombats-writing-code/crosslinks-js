'use strict';

var authentication = require('./authentication.js');

module.exports = angular.module('cl3.common.auth', [
])
.service( 'Authentication', ['$rootScope', '$http', '$q', '$window', 'Utils', authentication])
