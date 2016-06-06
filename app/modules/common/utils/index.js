'use strict';

var service = require('./utils.js');

module.exports = angular.module( 'cl3.common.utils', [
])
.service( 'Utils', ['$q', '$window', service])
