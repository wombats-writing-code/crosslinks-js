'use strict';

var autoExpand = require('./autoExpand.js');
var feedbackButton = require('./feedbackButton.js');

module.exports = angular.module( 'cl3.common.directives', [
])
.directive( 'autoExpand', autoExpand)
.directive( 'feedbackButton', feedbackButton)
