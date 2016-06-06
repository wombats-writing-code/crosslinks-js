
var directive = require('./loadingText.directive.js');
require('ng-cache!./loadingText.html');

module.exports = angular.module('cl3.common.components.loadingText', [])
.directive( 'loadingText', directive)
