'use strict';

var constants = require('./constants.js');
var eventsService = require('./events.service.js');
var treeSearchService = require('./treeSearch.service.js');

require('./visualization.scss');

module.exports = angular.module('cl3.common.components.visualization', [
])
.constant( 'Constants', constants)
.factory( 'Events', ['$timeout', '$state', 'Constants', eventsService])
.service( 'TreeSearch', treeSearchService)
