'use strict';

var directive = require('./globalVis.directive.js');
var service = require('./globalVis.service.js');
var render = require('./render.service.js');

require('../');
require('./globalVis.scss');

module.exports = angular.module('cl3.common.components.visualization.globalVis', [
	'cl3.common.components.visualization'	
])
.service( 'GlobalVis', ['Utils', 'TreeSearch', service])
.service( 'GlobalVisRender', ['$timeout', 'Constants', 'Events', render])
.directive( 'globalVis', ['$window', 'Utils', 'GlobalVis', 'GlobalVisRender', directive])
