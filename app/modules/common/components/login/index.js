'use strict';

var directive = require('./login.js');
var controller = require('./login.controller.js');
require('ng-cache!./login.html');

module.exports = angular.module('cl3.common.components.login', [
	'cl3.common.utils'
])
.controller( 'LoginController', ['$scope', 'Utils', controller])
.directive( 'login', directive)
