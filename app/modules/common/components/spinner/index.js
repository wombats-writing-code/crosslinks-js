
var spinnerDirective = require('./spinner.js');
require('ng-cache!./spinner.html');
require("./spinner.scss");

module.exports = angular.module('cl3.common.components.spinner', [])
.directive( 'spinner', spinnerDirective)
