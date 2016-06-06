'use strict';

var directive = require('./explanationBlock.directive.js');
require("./explanationBlock.scss");

module.exports = angular.module('cl3.common.components.explanationBlock', [])
.directive( 'explanationBlock', directive)
