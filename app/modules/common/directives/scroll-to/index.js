'use strict';

var scrollTo = require('./scrollTo.js');

module.exports = angular.module( 'cl3.common.directives.scrollTo', [
])
.directive( 'scrollTo', ['$timeout', '$state', '$uiViewScroll', scrollTo ])
