'use strict';

var directive = require('./loginPrompt.js');

module.exports = angular.module('cl3.common.components.loginPrompt', [
])
.directive( 'loginPrompt', directive)
